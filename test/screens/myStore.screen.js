

class myStoreScreen {

    get #myStoreLogo(){
        return $('~My store')
    }
    
    get #myStoreName(){
        return $('id:toolbar_subtitle')
    }

    async getStoreLogo(){
        await this.#myStoreLogo.waitForExist({ timeout: 10000 })
        return await this.#myStoreLogo.isDisplayed()
    }

    async getStoreName(){
        await this.#myStoreName.waitForExist({ timeout: 10000 })
        return await this.#myStoreName.getText()
    }
    
    

}

module.exports = new myStoreScreen();
