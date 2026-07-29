"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.avatarUpload = exports.upload = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const storage = multer_1.default.diskStorage({
    destination: "public/uploads/snaps",
    filename: (req, file, cb) => {
        const unique = Date.now() + "-" + Math.round(Math.random() * 1e9);
        // cb is used to specify the filename for the uploaded file
        // if filename failed, it will return an error to the client
        // i set null , so it will not return an error and continue to save the file
        cb(null, unique + path_1.default.extname(file.originalname));
    }
});
exports.upload = (0, multer_1.default)({ storage });
// Store the Profile Avatar in a separate folder
const avatarStorage = multer_1.default.diskStorage({
    destination: "public/uploads/avatars",
    filename: (req, file, cb) => {
        const unique = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, unique + path_1.default.extname(file.originalname));
    }
});
exports.avatarUpload = (0, multer_1.default)({ storage: avatarStorage });
//# sourceMappingURL=upload.js.map