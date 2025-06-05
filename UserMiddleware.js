const joi = require("joi");

const signupvalidation = (req, res, next) => {
    const schema = joi.object({
        username: joi.string().min(3).max(100).required(),
        email: joi.string().email().required(),
        password: joi.string().min(4).max(70).required(),
        yourchoice: joi.string().min(4).max(70).required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(490).json({ message: "Validation error", error });
    }

    next();
};

const signinvalidation = (req, res, next) => {
    const schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().min(4).max(70).required()
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(490).json({ message: "Validation error", error });
    }

    next();
};

module.exports = { signupvalidation, signinvalidation };
