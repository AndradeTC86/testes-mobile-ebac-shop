

class guestHomeScreen {

    get enterStoreAdress(){
        return $('id:button_login_store')
    }

    async goToLogin(){
        this.enterStoreAdress.click()
    } 

}

module.exports = new guestHomeScreen();
