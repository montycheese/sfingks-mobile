/* tslint:disable */
/* eslint-disable */
const AWS = require('aws-sdk');

exports.handler = (event, context) => {
  console.log('CUSTOM_CHALLENGE_LAMBDA Request: ', event, context);

  let secretLoginCode;
  if (!event.request.session || !event.request.session.length) {

    // Generate a new secret login code and send it to the user
    secretLoginCode = Date.now().toString().slice(-6);
    sendSMS(event.request.userAttributes.phone_number, secretLoginCode)
        .then(resp => {
          console.log('Successfully sent SMS', resp);

          console.log(event.request.userAttributes);

          // Add the secret login code to the private challenge parameters
          // so it can be verified by the "Verify Auth Challenge Response" trigger
          event.response.privateChallengeParameters = { secretLoginCode };

          // Add the secret login code to the session so it is available
          // in a next invocation of the "Create Auth Challenge" trigger
          event.response.challengeMetadata = `CODE-${secretLoginCode}`;
          context.done(null, event);
        }).catch(err => {
          console.error(`Failed to send SMS to number ${event.request.userAttributes.phone_number}`, error);
        });

  } else {

    // re-use code generated in previous challenge
    const previousChallenge = event.request.session.slice(-1)[0];
    secretLoginCode = previousChallenge.challengeMetadata.match(/CODE-(\d*)/)[1];
    console.log(event.request.userAttributes);

    // Add the secret login code to the private challenge parameters
    // so it can be verified by the "Verify Auth Challenge Response" trigger
    event.response.privateChallengeParameters = { secretLoginCode };

    // Add the secret login code to the session so it is available
    // in a next invocation of the "Create Auth Challenge" trigger
    event.response.challengeMetadata = `CODE-${secretLoginCode}`;
    context.done(null, event);
  }

};


function sendSMS(phone, code) {
  const params = {
    Message: code, /* required */
    PhoneNumber: phone,
  };

  return new AWS.SNS({apiVersion: '2010-03-31'}).publish(params).promise();
}
