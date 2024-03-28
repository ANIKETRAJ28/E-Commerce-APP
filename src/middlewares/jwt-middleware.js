const JWT = require("passport-jwt");
const User = require("../models/user");

const JWTStratergy = JWT.Strategy;
const ExtractJWT = JWT.ExtractJwt;

const opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: "eCommerce_secret"
};

const passportAuth = (passport) => {
    try {
        passport.use(new JWTStratergy(opts, async(jwt_payload, done) => {
            const user = await User.findById(jwt_payload.id);
            if(!user) {
                done(null, false);
            } else {
                done(null, user);
            }
        }));
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = {
    passportAuth
}