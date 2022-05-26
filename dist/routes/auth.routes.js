"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const register_1 = require("../controllers/auth/register");
const validateRegister_1 = require("../controllers/auth/validators/validateRegister");
const router = (0, express_1.Router)();
router.post('/auth/register', validateRegister_1.validateRegister, register_1.register);
exports.default = router;
