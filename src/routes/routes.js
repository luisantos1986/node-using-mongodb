const { addnewProduct, 
        getProductWithID,
        getProducts 
    } = require('../controllers/controllers.js')

const routes = (app) => {
    app.route('/products')
        // get multiple products
        .get(getProducts)
        
        // Post endpoint
        .post(addnewProduct);
    app.route('/products/:ProductID')
        // get a specifict product with ID
        .get(getProductWithID);
    
    
}

module.exports = routes;