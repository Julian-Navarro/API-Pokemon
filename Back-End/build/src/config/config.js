"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB_PORT = exports.DB_NAME = exports.DB_PASSWORD = exports.DB_HOST = exports.PORT = void 0;
exports.PORT = process.env.PORT || 3001;
exports.DB_HOST = process.env.DB_HOST || "localhost";
exports.DB_PASSWORD = process.env.DB_PASSWORD || "BVBadmin";
exports.DB_NAME = process.env.DB_NAME || "surveyForm";
exports.DB_PORT = process.env.DB_PORT || 5432;
