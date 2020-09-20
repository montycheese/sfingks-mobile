exports.handler = (event, context) => {
  console.log('VERIFY CHALLENGE LAMBDA, ', event);
  const expectedAnswer = event.request.privateChallengeParameters.secretLoginCode;
  event.response.answerCorrect = event.request.challengeAnswer === expectedAnswer;
  context.done(null, event);
};
