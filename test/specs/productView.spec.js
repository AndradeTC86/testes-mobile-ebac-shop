const productsViewScreen = require('../screens/productView.screen')

describe('Product List', () => {
    
    it('should list products', () => {
        expect(await productsViewScreen.product("camisa Batman")).toExist()
        expect(await productsViewScreen.productlist()).toBeElementsArrayOfSize(10)
    });

});