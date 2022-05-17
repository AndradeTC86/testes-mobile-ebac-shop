const productsViewScreen = require('../screens/productView.screen')

describe('Product Flow', () => {

    it('should buy a product', async () => {
        let searchName = 'Camisa Polo'
        await productsViewScreen.waitProduct(searchName)
        await productsViewScreen.search()
        await productsViewScreen.searchBy(`${searchName}\n`)
        await productsViewScreen.productSelect()


        // expect(await productsViewScreen.product(searchName)).toExist()
    })
    
})