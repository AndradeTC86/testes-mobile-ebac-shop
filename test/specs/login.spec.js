const guestHomeScreen = require("../screens/guestHome.screen");

describe('Acessar Admin Panel', () => {
    
    it('Deve realizar o login com sucesso', async () => {
        
        await guestHomeScreen.goToLogin()
        
        setTimeout(()=>
        {
            console.log('abriu')
        }, 10000)
    });


});