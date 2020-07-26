const { addNewProduct } = require('../controllers/controllers.js')

const routes = (app) => {
    app.route('./products')

    // POST endpoint

    .post(addNewProduct)
}

module.exports = routes;