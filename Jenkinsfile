pipeline{
    agent any
    stages {
        stage('Package Storybook'){
            steps{
                sh 'docker build -t react-app --no-cache .'
                sh 'docker tag react-app localhost:5000/react-app'
                sh 'docker push localhost:5000/react-app'
                sh 'docker rmi -f react-app localhost:5000/react-app'
            }
        }
        stage('Deploy Storybook')
        {
            steps
            {
                catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE')
                {
                    sh 'docker stop storybook'
                    sh 'docker rm storybook'
                }
                sh 'docker run -d -p 6006:6006 --name storybook localhost:5000/react-app:latest'
            }
        }
        
    }
}