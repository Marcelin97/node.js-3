const { body, validationResult } = require("express-validator");

exports.userValidationRules = (req, res, next) => {
  return [
    // title
    body("title")
        .notEmpty()
        // If not title, stop here
        .bail()
        .withMessage("Title is required"),
    // description
    body("description")
        .isLength({ min: 6 })
        .withMessage("Description should be 6 letters min"),
  ];
  // * Proceed to next middleware
  next();
};

exports.validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

  return res.status(422).json({
    errors: extractedErrors,
  });
};
