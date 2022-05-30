require('dotenv').config()

const { generalConf } = require('./general.conf')

let capabilities = process.env.PLATFORM === 'android' ? {
    capabilities: [{
        app : `${process.env.ANDROID_APP_ID}`,
        device : 'Motorola Moto G9 Play',
        os_version : '10.0',  
        project : 'Aula de Device Farm',
        build : '1.0',
        name: 'test_login_loja_ebac'
    }]
} : {
    capabilities: [{
        app: "bs://41284836bbf6b825b3be0d98b1197fc94052ee4c",
        project: "Aula de CI em Mobile",
        build: 'EBAC Test iOS',
        name: 'ebac_test',
        device: 'iPhone 12 Pro',
        os_version: "14",
        'browserstack.debug': true
    }]
}

let bsConf = {
    ...generalConf,
    ...capabilities,
    user: process.env.BS_USER,
    key: process.env.BS_KEY,
    services: ['browserstack']
}

module.exports = { bsConf }