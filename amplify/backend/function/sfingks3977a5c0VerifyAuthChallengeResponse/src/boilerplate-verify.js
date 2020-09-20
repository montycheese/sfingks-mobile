exports.handler = (event, context) => {
  const expectedAnswer = event.request.privateChallengeParameters.secretLoginCode;
  event.response.answerCorrect = event.request.challengeAnswer === expectedAnswer;
  context.done(null, event);
};
