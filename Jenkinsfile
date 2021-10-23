pipeline{
    agent any
    stages {
       
        stage('Deploy Storybook')
        {
            steps
            {
                catchError
                {
                    sh 'docker stop storybook'
                    sh 'docker rm storybook'
                }
                sh 'docker run -d -p 6006:6006 --name storybook localhost:5000/react-app:latest'
            }
        }
        
    }
}