exports.handler = async (event, context) => {
  // insert code to be executed by your lambda trigger

  event.response.autoConfirmUser = true;
  event.response.autoVerifyPhone = true;
  context.done(null, event)
};
