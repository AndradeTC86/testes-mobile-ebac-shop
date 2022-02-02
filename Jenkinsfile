pipeline {
    agent any

    stages {
        stage('Clonar o repositorio') {
            steps {
               git branch: 'main', url: 'https://github.com/AndradeTC86/testes-mobile-ebac-shop.git'
            }
        }
        stage('Instalar dependencias') {
            steps {
               powershell 'npm install'
            }
        }
        stage('Credenciais do browserstack') {
            steps {
               browserstack('256245f9-da4c-42e6-baa0-e9b5ccc662ae') {
                    // some block
                 }
            }
        }
        stage('Executar Testes') {
            steps {
              powershell 'npm test' 
            }
        }
    }
}