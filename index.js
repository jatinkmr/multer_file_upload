const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

const fs = require('fs')

// getting the path for upload folder
const fileUploadingFolder = __dirname + "/uploads"

app.use('/', (req, res) => {
    res.status(200).send('Welcome to your home Page!!')
})

// check is folder exist if not then create folder
if (!fs.existsSync(fileUploadingFolder)) {
    fs.mkdirSync(fileUploadingFolder)
}

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT} port`)
})
