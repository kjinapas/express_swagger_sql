const YAML = require('yamljs');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = YAML.load('./swagger.yaml');
// Basic configuration for Swagger


module.exports = { swaggerUi, swaggerDocs };
