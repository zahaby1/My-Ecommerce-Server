
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Ecommerce API',
      version: '1.0.0',
      description: 'Full API documentation for ecommerce project',
    },
    servers: [
      { url: 'http://localhost:3000' } // عدل البورت لو مختلف
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    },
    security: [{ bearerAuth: [] }],
    paths: {
      "/category": {
        get: { summary: "Get all categories", tags: ["Category"], responses: { 200: { description: "OK" } } },
        post: { summary: "Add new category", tags: ["Category"], responses: { 201: { description: "Created" } } }
      },
      "/category/{id}": {
        get: { summary: "Get category by ID", tags: ["Category"], responses: { 200: { description: "OK" }, 404: { description: "Not Found" } } },
        put: { summary: "Update category", tags: ["Category"], responses: { 200: { description: "Updated" } } },
        delete: { summary: "Delete category", tags: ["Category"], responses: { 204: { description: "Deleted" } } }
      },
      "/brand": {
        get: { summary: "Get all brands", tags: ["Brand"], responses: { 200: { description: "OK" } } },
        post: { summary: "Add new brand", tags: ["Brand"], responses: { 201: { description: "Created" } } }
      },
      "/brand/{id}": {
        get: { summary: "Get brand by ID", tags: ["Brand"], responses: { 200: { description: "OK" }, 404: { description: "Not Found" } } },
        put: { summary: "Update brand", tags: ["Brand"], responses: { 200: { description: "Updated" } } },
        delete: { summary: "Delete brand", tags: ["Brand"], responses: { 204: { description: "Deleted" } } }
      },
      "/product": {
        get: { summary: "Get all products", tags: ["Product"], responses: { 200: { description: "OK" } } },
        post: { summary: "Add new product", tags: ["Product"], responses: { 201: { description: "Created" } } }
      },
      "/product/{id}": {
        get: { summary: "Get product by ID", tags: ["Product"], responses: { 200: { description: "OK" }, 404: { description: "Not Found" } } },
        put: { summary: "Update product", tags: ["Product"], responses: { 200: { description: "Updated" } } },
        delete: { summary: "Delete product", tags: ["Product"], responses: { 204: { description: "Deleted" } } }
      },
      "/customer/home/new-products": { get: { summary: "Get new products", tags: ["Customer"], responses: { 200: { description: "OK" } } } },
      "/customer/home/featured-products": { get: { summary: "Get featured products", tags: ["Customer"], responses: { 200: { description: "OK" } } } },
      "/customer/categories": { get: { summary: "Get all categories", tags: ["Customer"], responses: { 200: { description: "OK" } } } },
      "/customer/brands": { get: { summary: "Get all brands", tags: ["Customer"], responses: { 200: { description: "OK" } } } },
      "/customer/product": { get: { summary: "Search products", tags: ["Customer"], responses: { 200: { description: "OK" } } } },
      "/customer/product/{id}": { get: { summary: "Get product by ID", tags: ["Customer"], responses: { 200: { description: "OK" }, 404: { description: "Not Found" } } } },
      "/customer/wishlists": { get: { summary: "Get wishlists", tags: ["Customer"], responses: { 200: { description: "OK" } } } },
      "/customer/wishlists/{id}": { post: { summary: "Add to wishlist", tags: ["Customer"], responses: { 201: { description: "Added" } } }, delete: { summary: "Remove from wishlist", tags: ["Customer"], responses: { 204: { description: "Removed" } } } },
      "/customer/carts": { get: { summary: "Get cart", tags: ["Customer"], responses: { 200: { description: "OK" } } } },
      "/customer/carts/{id}": { post: { summary: "Add to cart", tags: ["Customer"], responses: { 201: { description: "Added" } } }, delete: { summary: "Remove from cart", tags: ["Customer"], responses: { 204: { description: "Removed" } } } },
      "/customer/order": { post: { summary: "Place order", tags: ["Customer"], responses: { 201: { description: "Created" } } }, get: { summary: "Get customer orders", tags: ["Customer"], responses: { 200: { description: "OK" } } } },
      "/orders": { get: { summary: "Get all orders (Admin)", tags: ["Orders"], responses: { 200: { description: "OK" } } } },
      "/orders/{id}": { patch: { summary: "Update order status", tags: ["Orders"], responses: { 200: { description: "Updated" } } } },
      "/auth/register": { post: { summary: "Register user", tags: ["Auth"], responses: { 201: { description: "Created" } } } },
      "/auth/login": { post: { summary: "Login user", tags: ["Auth"], responses: { 200: { description: "OK" } } } }
    }
  },
  apis: []
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

export const setupSwagger = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};
