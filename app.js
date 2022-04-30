const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/test', (req, res) => res.send('Hello test!'))
app.listen(3000, () => console.log('Server ready'))




//docker run -d -p 3000:3000 --name node-app examplenode
//docker build -t examplenode .

//https://devops.cisel.ch/push-your-docker-containers-from-gitlab-to-amazon-ecr