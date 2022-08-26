const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.use('/', (req, res) => {
    res.status(200).send('Welcome to your home Page!!')
})

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT} port`)
})
