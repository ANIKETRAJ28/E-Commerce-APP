const validateUser = (req, res, next) => {
    if(
        !req.body.UserName ||
        !req.body.UserEmail ||
        !req.body.UserPassword
    ) return res.status(400).json({
        data: {},
        message: "Missing mandatory items for creation of the user",
        success: false,
        err: {error: "Missing username or useremail or userpassowrd"}
    });
    next();
}

module.exports = {
    validateUser
}