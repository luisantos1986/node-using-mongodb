const { addnewProduct } = require('../controllers/controllers.js')

const routes = (app) => {
    app.route('/products')

        // Post endpoint
        .post(addnewProduct);
}

module.exports = routes;