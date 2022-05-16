class ProductViewScreen {
    
    get #products(){
        return $$(`-ios predicate string: name CONTAINS 'R$'`)
    }

    async productlist(){
        return await this.#products
    }
    
    async product(name){
        let selector = `-ios predicate string:name CONTAINS '${name}'`
        await $(selector).waiForDisplayed({timeout: 10000})
        return await $(selector)
    }
}

module.exports = new ProductViewScreen()