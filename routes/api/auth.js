const express = require("express");

const ctrl = require("../../controllers/index")

const {validateBody} = require("../../middlewares");

const schemas = require("../../schemas/users");

const router = express.Router();

router.post("/register", validateBody(schemas.registerSchema), ctrl.register)

module.exports = router;