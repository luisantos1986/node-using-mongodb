const { addnewProduct, 
        getProductWithID,
        getProducts,
        updateProduct,
        deleteProduct
    } = require('../controllers/controllers.js')

const routes = (app) => {
    app.route('/products')
        // get multiple products
        .get(getProducts)

        // Post endpoint
        .post(addnewProduct);
    app.route('/products/:ProductID')
        // get a specifict product with ID
        .get(getProductWithID)

        // updating a specific Product
        .put(updateProduct)
        
        // deleting a specific product
        .delete(deleteProduct);
        
    
    
}

module.exports = routes;