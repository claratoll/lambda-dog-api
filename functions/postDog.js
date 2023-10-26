const { sendResponse } = require('../responses/index.js');

function checkDogFormat(body) {
  const keys = Object.keys(body);
  if (
    body?.breed &&
    body?.age &&
    body?.color &&
    body?.weight_kg &&
    keys.length == 6
  ) {
    return true;
  } else {
    return false;
  }
}

function postDog(dogs, body) {
  if (checkDogFormat(body)) {
    dogs.push(body);

    return sendResponse(200, { success: true });
  } else {
    return sendResponse(400, { message: 'wrong data in body' });
  }
}

module.exports = { postDog };
