const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.1.0',
    info: {
      title: 'Admin API',
      version: '1.0.0',
      description: 'Documentation for Admin API',
    },
  },
  apis: ['./server/src/routes/*.js'], // Path to the API routes folder
};

const specs = swaggerJsdoc(options);

module.exports = specs;
