const productsViewScreen = require('../screens/productView.screen')

describe('Product Flow', () => {

    it('should buy a product', async () => {
        let name = 'Camisa Polo'
        let searchName = 'testea'
        await productsViewScreen.waitProduct(name)
        await productsViewScreen.search()
        await productsViewScreen.searchBy(`${searchName}\n`)
        await productsViewScreen.productSelect()
        await productsViewScreen.productAdd()
        await productsViewScreen.goToCArt()
        expect (await productsViewScreen.waitTotal()).toExist()
    
    })
    
})