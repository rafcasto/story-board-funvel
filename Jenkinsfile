pipeline{
    agent any
    stages {
        stage('Install dependencies..'){
            steps{
                sh 'sudo npm install'
            }
        }
        stage('Install'){
            steps{
                sh 'yarn build '
            }
        }
    }
}