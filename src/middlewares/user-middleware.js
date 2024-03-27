const validateUserSignUp = (req, res, next) => {
    if(
        !req.body.UserName ||
        !req.body.UserEmail ||
        !req.body.UserPassword
    ) throw {
        message: "Missing username or useremail or userpassowrd"
    };
    next();
}

const validateUserSignIn = (req, res, next) => {
    if(
        !req.body.UserEmail ||
        !req.body.UserPassword
    ) throw {
        message: "Missing useremail or userpassowrd"
    };
    next();
}

module.exports = {
    validateUserSignUp,
    validateUserSignIn
}