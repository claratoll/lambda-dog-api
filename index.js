const { sendResponse } = require('./responses/index.js');
const { postDog } = require('./functions/postDog.js');
const { getDogById } = require('./functions/getDogById.js');

var dogs = [
  {
    id: 100,
    name: 'Rex',
    age: 3,
    color: 'Brown',
    weight_kg: 12,
    breed: 'Labrador Retriever',
  },
  {
    id: 200,
    name: 'Buddy',
    age: 2,
    color: 'White',
    weight_kg: 8,
    breed: 'Golden Retriever',
  },
  {
    id: 300,
    name: 'Lola',
    age: 5,
    color: 'Black',
    weight_kg: 10,
    breed: 'German Shepherd',
  },
];

exports.handler = async (event, context) => {
  const { method, path } = event.requestContext.http;

  if (method === 'GET' && path === '/dog') {
    return sendResponse(200, { dogs });
  } else if (method === 'GET' && path.startsWith('/dog/')) {
    const dogId = path.split('/dog/')[1];

    return getDogById(dogs, dogId);
  } else if (method === 'POST' && path === '/dog') {
    const body = JSON.parse(event.body);

    return postDog(dogs, body);
  }

  return sendResponse(400, { message: 'error' });
};
