const homecontroller = async (req, res, next) => {
    try {
        res.status(200).send('Welcome to Home Page Controller !!')
    } catch (error) {
        next(error)
    }
};

const singleUploadController = async (req, res, next) => {
    try {
        const file = req.file
        if (!file) {
            const error = new Error('Please upload a file')
            error.httpStatusCode = 400
            return next(error)
        }
        res.status(200).json({
            error: false,
            message: 'File uploaded successfully',
            fileData: file
        })
    } catch (error) {
        next(error)
    }
};


module.exports = {
    homecontroller,
    singleUploadController
};