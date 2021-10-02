pipeline{
    agent any
    stages {
        stage('Install dependencies..'){
            steps{
                sh 'npm install'
            }
        }
        stage('Install'){
            steps{
                sh 'yarn build '
            }
        }
    }
}