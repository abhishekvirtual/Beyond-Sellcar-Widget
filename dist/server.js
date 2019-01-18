/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./buildScripts/controllers/PostController.ts":
/*!****************************************************!*\
  !*** ./buildScripts/controllers/PostController.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __webpack_require__(/*! express */ "express");
const post_1 = __webpack_require__(/*! ../models/post */ "./buildScripts/models/post.ts");
class PostController {
    constructor() {
        this.router = express_1.Router();
        this.routes();
        console.log('here');
    }
    all(_, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield post_1.Post.find();
                return res.status(200).json({ data, message: 'success' });
            }
            catch (error) {
                next(error);
            }
        });
    }
    one(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { slug } = req.params;
            try {
                const data = yield post_1.Post.findOne({ slug });
                if (!data) {
                    throw new Error('Post not found');
                }
                return res.status(200).json({ data, message: 'success' });
            }
            catch (error) {
                return next(error.message);
            }
        });
    }
    create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, slug, content, featuredImage, category, published, } = req.body;
            try {
                const post = yield new post_1.Post({
                    title,
                    slug,
                    content,
                    featuredImage,
                    category,
                    published,
                });
                const data = yield post.save();
                res.status(201).json({ data, message: 'success' });
            }
            catch (error) {
                return next(error.message);
            }
        });
    }
    update(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { slug } = req.body;
            try {
                const data = yield post_1.Post.findOneAndUpdate({ slug }, req.body);
                res.status(200).json({ data, message: 'success' });
            }
            catch (error) {
                return next(error.message);
            }
        });
    }
    delete(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { slug } = req.body;
            try {
                const data = yield post_1.Post.findOneAndRemove({ slug });
                return res.status(204).json({ data, message: 'success' });
            }
            catch (error) {
                return next(error.message);
            }
        });
    }
    routes() {
        this.router.get('/', this.all);
        this.router.get('/:slug', this.one);
        this.router.post('/', this.create);
        this.router.put('/:slug', this.update);
        this.router.delete('/:slug', this.delete);
    }
}
exports.PostController = PostController;


/***/ }),

/***/ "./buildScripts/controllers/UserController.ts":
/*!****************************************************!*\
  !*** ./buildScripts/controllers/UserController.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __webpack_require__(/*! express */ "express");
const user_1 = __webpack_require__(/*! ../models/user */ "./buildScripts/models/user.ts");
class UserController {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    all(req, res) {
        user_1.User.find()
            .then((data) => {
            return res.status(200).json({ data });
        })
            .catch((error) => {
            res.status(500).json({ error });
            return error;
        });
    }
    one(req, res) {
        const { username } = req.params;
        user_1.User.findOne({ username })
            .then((data) => {
            res.status(200).json({ data });
        })
            .catch((error) => {
            res.status(500).json({ error });
        });
    }
    create(req, res) {
        const { firstName, lastName, username, email, password } = req.body;
        const user = new user_1.User({
            firstName,
            lastName,
            username,
            email,
            password,
        });
        user
            .save()
            .then((data) => {
            res.status(201).json({ data });
        })
            .catch((error) => {
            res.status(500).json({ error });
        });
    }
    update(req, res) {
        const { username } = req.params;
        user_1.User.findOneAndUpdate({ username }, req.body)
            .then((data) => {
            res.status(200).json({ data });
        })
            .catch((error) => {
            res.status(500).json({ error });
        });
    }
    delete(req, res) {
        const { username } = req.params;
        user_1.User.findOneAndRemove({ username })
            .then(() => {
            res.status(204).end();
        })
            .catch((error) => {
            res.status(500).json({ error });
        });
    }
    routes() {
        this.router.get('/', this.all);
        this.router.get('/:username', this.one);
        this.router.post('/', this.create);
        this.router.put('/:username', this.update);
        this.router.delete('/:username', this.delete);
    }
}
exports.UserController = UserController;


/***/ }),

/***/ "./buildScripts/index.ts":
/*!*******************************!*\
  !*** ./buildScripts/index.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const debug = __webpack_require__(/*! debug */ "debug");
const http = __webpack_require__(/*! http */ "http");
const srcServer_1 = __webpack_require__(/*! ./srcServer */ "./buildScripts/srcServer.ts");
const port = normalizePort(process.env.PORT || 3000);
console.log(`Server listening on port ${port}`);
const server = http.createServer(srcServer_1.default);
server.listen();
server.on('error', onError);
server.on('listening', onListening);
function normalizePort(val) {
    const port = typeof val === 'string' ? parseInt(val, 10) : val;
    if (isNaN(port)) {
        return val;
    }
    else if (port >= 0) {
        return port;
    }
    else {
        return false;
    }
}
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(`${bind} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(`${bind} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
}
function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
    debug(`Listening on ${bind}`);
}


/***/ }),

/***/ "./buildScripts/models/post.ts":
/*!*************************************!*\
  !*** ./buildScripts/models/post.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __webpack_require__(/*! mongoose */ "mongoose");
const PostSchema = new mongoose_1.Schema({
    createdAt: Date,
    updatedAt: Date,
    title: String,
    slug: String,
    content: String,
    featuredImage: String,
    category: String,
    published: Boolean,
});
exports.Post = mongoose_1.model('Post', PostSchema);


/***/ }),

/***/ "./buildScripts/models/user.ts":
/*!*************************************!*\
  !*** ./buildScripts/models/user.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __webpack_require__(/*! mongoose */ "mongoose");
const UserSchema = new mongoose_1.Schema({
    createdAt: Date,
    updatedAt: Date,
    firstName: String,
    lastName: String,
    username: String,
    email: String,
    password: String,
    posts: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Post',
        },
    ],
});
exports.User = mongoose_1.model('User', UserSchema);


/***/ }),

/***/ "./buildScripts/srcServer.ts":
/*!***********************************!*\
  !*** ./buildScripts/srcServer.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = __webpack_require__(/*! body-parser */ "body-parser");
const compression = __webpack_require__(/*! compression */ "compression");
const cookieParser = __webpack_require__(/*! cookie-parser */ "cookie-parser");
const cors = __webpack_require__(/*! cors */ "cors");
const express = __webpack_require__(/*! express */ "express");
const helmet = __webpack_require__(/*! helmet */ "helmet");
const mongoose = __webpack_require__(/*! mongoose */ "mongoose");
const logger = __webpack_require__(/*! morgan */ "morgan");
const path = __webpack_require__(/*! path */ "path");
let dataBaseSetting = __webpack_require__(/*!  ./../../serviceAccountKey.json5 */ "./serviceAccountKey.json5");
console.log(dataBaseSetting);
const PostController_1 = __webpack_require__(/*! ./controllers/PostController */ "./buildScripts/controllers/PostController.ts");
const UserController_1 = __webpack_require__(/*! ./controllers/UserController */ "./buildScripts/controllers/UserController.ts");
const postRouter = new PostController_1.PostController();
const userRouter = new UserController_1.UserController();
class Server {
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }
    config() {
        const MONGO_URI = 'mongodb://localhost/tes';
        mongoose.connect(MONGO_URI || process.env.MONGODB_URI, { useNewUrlParser: true });
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        this.app.use(cookieParser());
        this.app.use(logger('dev'));
        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(cors());
        this.app.use((_, res, next) => {
            res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
            res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
            res.header('Access-Control-Allow-Credentials', 'true');
            next();
        });
    }
    routes() {
        const router = express.Router();
        this.app.use('/', router);
        this.app.use('/posts', postRouter.router);
        this.app.use('/users', userRouter.router);
        this.app.all('/*', (req, res) => {
            res.sendFile(path.resolve('buildscripts/public/index.html'));
        });
    }
}
exports.default = new Server().app;


/***/ }),

/***/ "./serviceAccountKey.json5":
/*!*********************************!*\
  !*** ./serviceAccountKey.json5 ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"type": "service_account",
	"project_id": "beyo-8f9ec",
	"private_key_id": "c8345e6f4254d3f455c3f6dbf064da07334ae825",
	"private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC0IatbWFn+hwra\nLWcRpSC8Pr2gvofS9lv0mfvDyPIEJYDcfxiJZ4JScmXvL4t0UHF1MK8smxfVKk93\nNayxF+JBMqf9ZK5kEtcwPuOVNfX9cRCoXDnvCG4dTvUwiv039rlnKCgoL3OCxcd8\nqarGfHnAihOFgtgKU1Rxc+ONJQMLkJepdjXJQBVWoPDmSPY0a41//ziiikY14DcW\n8P8rJnop1sZVfeyf8V0c7z1oYpZLpMVoMdNkzZnIvmLz5O+mq23aI0junLy/eXau\nelEXNCKfIzNnZ3BNQKRIDAZMRao3TCfPkwDQx0tNoBuBuDCBNMrrA1nQDhh1lc5/\nG7Qw3sGzAgMBAAECggEADtQwv6HWiBzE43DWadOeuMXaJYgEispLh/zp3CnIPALR\ns2qRHLVVO1qokpgRkmnm6ooEpGxAz4R0AJvTaMwkYk/8bWCi90u9GanWYXEM8agj\nrMB+58iEDCH1Dwx6IRJ3cTW97I+kzOYMRfJ6bmxOjO+xALjkoSD6tCZMBtFpCUQN\nbgSpc0g/FSSWsfNR8mjrPH1GoirsR8C/8vZ/qLdx9lFTwesjYjo2G+yWFtDmfn9R\nAiD3+deq/OLD85jGl7WfYC2qceW13fS5bbZz695dZbU+n6SXLNsokUyYR70DRyA8\ngFDcReHUJFjSL8PP3I9c4Xzl0jPz2zsZu2SamBQmyQKBgQDiNHLgIffpnrGJ9MgF\nUZ9eYYzeCMbzpnqh7NaqIgoMRdZ8KteR31F0TLpUcCE5yt/B1V4q34r3Lyd2YgB/\nKlnRWWIiHsqClGmfcZ/5FK0OsmVTZzyIZPuvnUwKXjJXA1pk5uNgM4M06pEpdQZY\n01B67pUlmthmWq3NPS9623IC6QKBgQDL26SMCqP6FVD5g6H8nGd2+mx66KVOFWbY\nqOQzrxX1rgFYikg3Jc6XkJU7j5bb9U68qYxoRkOFYlR+fBwnApuIwea10p8MQq3/\nJ2lDrZxEdGLhzRnzgOBFTVpbx1u5j8BWFouFkHUkPew16ia4qz9rRNdy7IT1OuW+\nsYxoTu2mOwKBgQCZ18n5HaEaRk/A37XZyDV3XykLKTUGKMdmsUkd1KC40BabxBdw\nok0np7diDhDK2WtszMyKpBZDHtLb9LMZyZfkhcH0KrTYMk/TnNeL87/vKu022BOX\nP/bc7UH2GzJpc2JbFZy2pNIrfwzTAUAb0Tv/H5xYQwPCORHTcDWGfREBYQKBgGZB\n1PZSWBKYIrgmaVj3c4bg8w1sKY9TePVxMpciWleUYyRwqOzQ0CKC6fiofDn1gPtt\n6PpdVH1R56RSySRgUHh3Gy1Va2aRBAqbUFgce+hyoS823K+ik9zvgkXLaJ1aGFaW\nlIH5BmmZjiU1QRsc+4DpVVFWhxMj6h6PnSitftQFAoGAWXKYwn0c8DiZZMM8Uyfp\nilD8FEHK72ZNHQzhAWytG07D0tuy3rKQhcA0Dm5/NGd7Xp4bCYkcp7JCAaJY+r+K\nnq05fmLleaS75coI9faeYv8X4l5o9mQF+SZNvUWniGFjvjni+tpdUmFsVeV3QtGL\nbYVn2uQmTqKCXrZXl53BPwg=\n-----END PRIVATE KEY-----\n",
	"client_email": "upwork-freelancer@beyo-8f9ec.iam.gserviceaccount.com",
	"client_id": "109603535420843224364",
	"auth_uri": "https://accounts.google.com/o/oauth2/auth",
	"token_uri": "https://oauth2.googleapis.com/token",
	"auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
	"client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/upwork-freelancer%40beyo-8f9ec.iam.gserviceaccount.com"
}

/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./buildScripts/index ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\vscodeWorkSpace\Beyond-Sellcar-Widget\buildScripts\index */"./buildScripts/index.ts");


/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "debug":
/*!************************!*\
  !*** external "debug" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYnVpbGRTY3JpcHRzL2NvbnRyb2xsZXJzL1Bvc3RDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL2J1aWxkU2NyaXB0cy9jb250cm9sbGVycy9Vc2VyQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9idWlsZFNjcmlwdHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vYnVpbGRTY3JpcHRzL21vZGVscy9wb3N0LnRzIiwid2VicGFjazovLy8uL2J1aWxkU2NyaXB0cy9tb2RlbHMvdXNlci50cyIsIndlYnBhY2s6Ly8vLi9idWlsZFNjcmlwdHMvc3JjU2VydmVyLnRzIiwid2VicGFjazovLy8uL3NlcnZpY2VBY2NvdW50S2V5Lmpzb241Iiwid2VicGFjazovLy9leHRlcm5hbCBcImJvZHktcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29tcHJlc3Npb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb29raWUtcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImRlYnVnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImhlbG1ldFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vcmdhblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FB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QUFDO0lBRU0sTUFBTTtRQUNYLE1BQU0sTUFBTSxHQUFtQixPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDOUIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGdDQUFnQyxDQUFDLENBQUMsQ0FBQztRQUNqRSxDQUFDLENBQUMsQ0FBQztJQUNILENBQUM7Q0FDRjtBQUVELGtCQUFlLElBQUksTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDOzs7Ozs7Ozs7Ozs7QUN6RWhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBLHdDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGlDIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgeyBOZXh0RnVuY3Rpb24sIFJlcXVlc3QsIFJlc3BvbnNlLCBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IFBvc3QgfSBmcm9tICcuLi9tb2RlbHMvcG9zdCc7XG5cbmV4cG9ydCBjbGFzcyBQb3N0Q29udHJvbGxlciB7XG4gIHB1YmxpYyByb3V0ZXI6IFJvdXRlcjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnJvdXRlciA9IFJvdXRlcigpO1xuICAgIHRoaXMucm91dGVzKCk7XG4gICAgY29uc29sZS5sb2coJ2hlcmUnKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBhbGwoXzogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uLCk6IFByb21pc2U8UmVzcG9uc2UgfCB2b2lkPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBQb3N0LmZpbmQoKTtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IGRhdGEsIG1lc3NhZ2U6ICdzdWNjZXNzJyB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgbmV4dChlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGFzeW5jIG9uZShcbiAgICByZXE6IFJlcXVlc3QsXG4gICAgcmVzOiBSZXNwb25zZSxcbiAgICBuZXh0OiBOZXh0RnVuY3Rpb24sXG4gICk6IFByb21pc2U8UmVzcG9uc2UgfCB2b2lkPiB7XG4gICAgY29uc3QgeyBzbHVnIH0gPSByZXEucGFyYW1zO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgUG9zdC5maW5kT25lKHsgc2x1ZyB9KTtcbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Bvc3Qgbm90IGZvdW5kJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBkYXRhLCBtZXNzYWdlOiAnc3VjY2VzcycgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBuZXh0KGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBjcmVhdGUoXG4gICAgcmVxOiBSZXF1ZXN0LFxuICAgIHJlczogUmVzcG9uc2UsXG4gICAgbmV4dDogTmV4dEZ1bmN0aW9uLFxuICApOiBQcm9taXNlPFJlc3BvbnNlIHwgdm9pZD4ge1xuICAgIGNvbnN0IHtcbiAgICAgIHRpdGxlLFxuICAgICAgc2x1ZyxcbiAgICAgIGNvbnRlbnQsXG4gICAgICBmZWF0dXJlZEltYWdlLFxuICAgICAgY2F0ZWdvcnksXG4gICAgICBwdWJsaXNoZWQsXG4gICAgfSA9IHJlcS5ib2R5O1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBwb3N0ID0gYXdhaXQgbmV3IFBvc3Qoe1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgc2x1ZyxcbiAgICAgICAgY29udGVudCxcbiAgICAgICAgZmVhdHVyZWRJbWFnZSxcbiAgICAgICAgY2F0ZWdvcnksXG4gICAgICAgIHB1Ymxpc2hlZCxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHBvc3Quc2F2ZSgpO1xuICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBkYXRhLCBtZXNzYWdlOiAnc3VjY2VzcycgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBuZXh0KGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBhc3luYyB1cGRhdGUoXG4gICAgcmVxOiBSZXF1ZXN0LFxuICAgIHJlczogUmVzcG9uc2UsXG4gICAgbmV4dDogTmV4dEZ1bmN0aW9uLFxuICApOiBQcm9taXNlPFJlc3BvbnNlIHwgdm9pZD4ge1xuICAgIGNvbnN0IHsgc2x1ZyB9ID0gcmVxLmJvZHk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBQb3N0LmZpbmRPbmVBbmRVcGRhdGUoeyBzbHVnIH0sIHJlcS5ib2R5KTtcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZGF0YSwgbWVzc2FnZTogJ3N1Y2Nlc3MnIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gbmV4dChlcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgZGVsZXRlKFxuICAgIHJlcTogUmVxdWVzdCxcbiAgICByZXM6IFJlc3BvbnNlLFxuICAgIG5leHQ6IE5leHRGdW5jdGlvbixcbiAgKTogUHJvbWlzZTxSZXNwb25zZSB8IHZvaWQ+IHtcbiAgICBjb25zdCB7IHNsdWcgfSA9IHJlcS5ib2R5O1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgUG9zdC5maW5kT25lQW5kUmVtb3ZlKHsgc2x1ZyB9KTtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwNCkuanNvbih7IGRhdGEsIG1lc3NhZ2U6ICdzdWNjZXNzJyB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIG5leHQoZXJyb3IubWVzc2FnZSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHJvdXRlcygpIHtcbiAgICB0aGlzLnJvdXRlci5nZXQoJy8nLCB0aGlzLmFsbCk7XG4gICAgdGhpcy5yb3V0ZXIuZ2V0KCcvOnNsdWcnLCB0aGlzLm9uZSk7XG4gICAgdGhpcy5yb3V0ZXIucG9zdCgnLycsIHRoaXMuY3JlYXRlKTtcbiAgICB0aGlzLnJvdXRlci5wdXQoJy86c2x1ZycsIHRoaXMudXBkYXRlKTtcbiAgICB0aGlzLnJvdXRlci5kZWxldGUoJy86c2x1ZycsIHRoaXMuZGVsZXRlKTtcbiAgfVxufVxuXG4iLCJpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSwgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vbW9kZWxzL3VzZXInO1xuXG5leHBvcnQgY2xhc3MgVXNlckNvbnRyb2xsZXIge1xuICBwdWJsaWMgcm91dGVyOiBSb3V0ZXI7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5yb3V0ZXIgPSBSb3V0ZXIoKTtcbiAgICB0aGlzLnJvdXRlcygpO1xuICB9XG5cbiAgcHVibGljIGFsbChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpOiB2b2lkIHtcbiAgICBVc2VyLmZpbmQoKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZGF0YSB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3IgfSk7XG4gICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG9uZShyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpOiB2b2lkIHtcbiAgICBjb25zdCB7IHVzZXJuYW1lIH0gPSByZXEucGFyYW1zO1xuXG4gICAgVXNlci5maW5kT25lKHsgdXNlcm5hbWUgfSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZGF0YSB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3IgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGUocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKTogdm9pZCB7XG4gICAgY29uc3QgeyBmaXJzdE5hbWUsIGxhc3ROYW1lLCB1c2VybmFtZSwgZW1haWwsIHBhc3N3b3JkIH0gPSByZXEuYm9keTtcblxuICAgIGNvbnN0IHVzZXIgPSBuZXcgVXNlcih7XG4gICAgICBmaXJzdE5hbWUsXG4gICAgICBsYXN0TmFtZSxcbiAgICAgIHVzZXJuYW1lLFxuICAgICAgZW1haWwsXG4gICAgICBwYXNzd29yZCxcbiAgICB9KTtcblxuICAgIHVzZXJcbiAgICAgIC5zYXZlKClcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgZGF0YSB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3IgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGUocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKTogdm9pZCB7XG4gICAgY29uc3QgeyB1c2VybmFtZSB9ID0gcmVxLnBhcmFtcztcblxuICAgIFVzZXIuZmluZE9uZUFuZFVwZGF0ZSh7IHVzZXJuYW1lIH0sIHJlcS5ib2R5KVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBkYXRhIH0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvciB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGRlbGV0ZShyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpOiB2b2lkIHtcbiAgICBjb25zdCB7IHVzZXJuYW1lIH0gPSByZXEucGFyYW1zO1xuXG4gICAgVXNlci5maW5kT25lQW5kUmVtb3ZlKHsgdXNlcm5hbWUgfSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgcmVzLnN0YXR1cygyMDQpLmVuZCgpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvciB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLy8gc2V0IHVwIG91ciByb3V0ZXNcbiAgcHVibGljIHJvdXRlcygpIHtcbiAgICB0aGlzLnJvdXRlci5nZXQoJy8nLCB0aGlzLmFsbCk7XG4gICAgdGhpcy5yb3V0ZXIuZ2V0KCcvOnVzZXJuYW1lJywgdGhpcy5vbmUpO1xuICAgIHRoaXMucm91dGVyLnBvc3QoJy8nLCB0aGlzLmNyZWF0ZSk7XG4gICAgdGhpcy5yb3V0ZXIucHV0KCcvOnVzZXJuYW1lJywgdGhpcy51cGRhdGUpO1xuICAgIHRoaXMucm91dGVyLmRlbGV0ZSgnLzp1c2VybmFtZScsIHRoaXMuZGVsZXRlKTtcbiAgfVxufVxuIiwiLy8gdHNsaW50OmRpc2FibGVcbmltcG9ydCAqIGFzIGRlYnVnIGZyb20gJ2RlYnVnJztcbmltcG9ydCAqIGFzIGh0dHAgZnJvbSAnaHR0cCc7XG5pbXBvcnQgU2VydmVyIGZyb20gJy4vc3JjU2VydmVyJztcblxuLy9kZWJ1ZygndHMtZXhwcmVzczpzZXJ2ZXInKTtcblxuY29uc3QgcG9ydCA9IG5vcm1hbGl6ZVBvcnQocHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwKTtcblxuXG4vL1NlcnZlci5zZXQoJ3BvcnQnLCBwb3J0KTtcblxuY29uc29sZS5sb2coYFNlcnZlciBsaXN0ZW5pbmcgb24gcG9ydCAke3BvcnR9YCk7XG5cbmNvbnN0IHNlcnZlciA9IGh0dHAuY3JlYXRlU2VydmVyKFNlcnZlcik7XG5zZXJ2ZXIubGlzdGVuKCk7XG5zZXJ2ZXIub24oJ2Vycm9yJywgb25FcnJvcik7XG5zZXJ2ZXIub24oJ2xpc3RlbmluZycsIG9uTGlzdGVuaW5nKTtcblxuZnVuY3Rpb24gbm9ybWFsaXplUG9ydCh2YWw6IG51bWJlciB8IHN0cmluZyk6IG51bWJlciB8IHN0cmluZyB8IGJvb2xlYW4ge1xuICBjb25zdCBwb3J0OiBudW1iZXIgPSB0eXBlb2YgdmFsID09PSAnc3RyaW5nJyA/IHBhcnNlSW50KHZhbCwgMTApIDogdmFsO1xuICBpZiAoaXNOYU4ocG9ydCkpIHtcbiAgICByZXR1cm4gdmFsO1xuICB9IGVsc2UgaWYgKHBvcnQgPj0gMCkge1xuICAgIHJldHVybiBwb3J0O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvbkVycm9yKGVycm9yOiBOb2RlSlMuRXJybm9FeGNlcHRpb24pOiB2b2lkIHtcbiAgaWYgKGVycm9yLnN5c2NhbGwgIT09ICdsaXN0ZW4nKSB7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbiAgY29uc3QgYmluZCA9IHR5cGVvZiBwb3J0ID09PSAnc3RyaW5nJyA/ICdQaXBlICcgKyBwb3J0IDogJ1BvcnQgJyArIHBvcnQ7XG4gIHN3aXRjaCAoZXJyb3IuY29kZSkge1xuICAgIGNhc2UgJ0VBQ0NFUyc6XG4gICAgICBjb25zb2xlLmVycm9yKGAke2JpbmR9IHJlcXVpcmVzIGVsZXZhdGVkIHByaXZpbGVnZXNgKTtcbiAgICAgIHByb2Nlc3MuZXhpdCgxKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ0VBRERSSU5VU0UnOlxuICAgICAgY29uc29sZS5lcnJvcihgJHtiaW5kfSBpcyBhbHJlYWR5IGluIHVzZWApO1xuICAgICAgcHJvY2Vzcy5leGl0KDEpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IGVycm9yO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9uTGlzdGVuaW5nKCk6IHZvaWQge1xuICBjb25zdCBhZGRyID0gc2VydmVyLmFkZHJlc3MoKTtcbiAgY29uc3QgYmluZCA9IHR5cGVvZiBhZGRyID09PSAnc3RyaW5nJyA/IGBwaXBlICR7YWRkcn1gIDogYHBvcnQgJHthZGRyLnBvcnR9YDtcbiAgZGVidWcoYExpc3RlbmluZyBvbiAke2JpbmR9YCk7XG59XG4iLCJpbXBvcnQgeyBtb2RlbCwgU2NoZW1hIH0gZnJvbSAnbW9uZ29vc2UnO1xuXG4vLyBBbGwgdmFsaWRhdGlvbiBzaG91bGQgYmUgaGFuZGxlZCBpbiB0aGUgY29udHJvbGxlclxuLy8ga2VlcCBtb2RlbHMgYXMgbWluaW1hbCBhbmQgc2ltcGxlIGFzIHBvc3NpYmxlXG5cbmNvbnN0IFBvc3RTY2hlbWE6IFNjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICBjcmVhdGVkQXQ6IERhdGUsXG4gIHVwZGF0ZWRBdDogRGF0ZSxcbiAgdGl0bGU6IFN0cmluZyxcbiAgc2x1ZzogU3RyaW5nLFxuICBjb250ZW50OiBTdHJpbmcsXG4gIGZlYXR1cmVkSW1hZ2U6IFN0cmluZyxcbiAgY2F0ZWdvcnk6IFN0cmluZyxcbiAgcHVibGlzaGVkOiBCb29sZWFuLFxufSk7XG5cbmV4cG9ydCBjb25zdCBQb3N0ID0gbW9kZWwoJ1Bvc3QnLCBQb3N0U2NoZW1hKTtcbiIsImltcG9ydCB7IG1vZGVsLCBTY2hlbWEgfSBmcm9tICdtb25nb29zZSc7XG5cbmNvbnN0IFVzZXJTY2hlbWE6IFNjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICBjcmVhdGVkQXQ6IERhdGUsXG4gIHVwZGF0ZWRBdDogRGF0ZSxcbiAgZmlyc3ROYW1lOiBTdHJpbmcsXG4gIGxhc3ROYW1lOiBTdHJpbmcsXG4gIHVzZXJuYW1lOiBTdHJpbmcsXG4gIGVtYWlsOiBTdHJpbmcsXG4gIHBhc3N3b3JkOiBTdHJpbmcsXG4gIHBvc3RzOiBbXG4gICAge1xuICAgICAgdHlwZTogU2NoZW1hLlR5cGVzLk9iamVjdElkLFxuICAgICAgcmVmOiAnUG9zdCcsXG4gICAgfSxcbiAgXSxcbn0pO1xuXG5leHBvcnQgY29uc3QgVXNlciA9IG1vZGVsKCdVc2VyJywgVXNlclNjaGVtYSk7XG4iLCJpbXBvcnQgKiBhcyBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJztcbmltcG9ydCAqIGFzIGNvbXByZXNzaW9uIGZyb20gJ2NvbXByZXNzaW9uJztcbmltcG9ydCAqIGFzIGNvb2tpZVBhcnNlciBmcm9tICdjb29raWUtcGFyc2VyJztcbmltcG9ydCAqIGFzIGNvcnMgZnJvbSAnY29ycyc7XG5pbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0ICogYXMgaGVsbWV0IGZyb20gJ2hlbG1ldCc7XG5pbXBvcnQgKiBhcyBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQgKiBhcyBsb2dnZXIgZnJvbSAnbW9yZ2FuJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG4vL2ltcG9ydCAqIGFzIHJvdXRlciBmcm9tICcuL3JvdXRlcic7XG5pbXBvcnQgKiBhcyBldm5jb25mIGZyb20gJ2RvdGVudic7XG5pbXBvcnQgKiBhcyBhZG1pbiBmcm9tICdmaXJlYmFzZS1hZG1pbic7XG5cbmxldCBkYXRhQmFzZVNldHRpbmcgPSByZXF1aXJlKCcgLi8uLi8uLi9zZXJ2aWNlQWNjb3VudEtleS5qc29uNScpO1xuXG5cbmNvbnNvbGUubG9nKGRhdGFCYXNlU2V0dGluZyk7XG4vL2xldCBhY2NvdW50ID0gcmVxdWlyZSgnLi4vc2VydmljZUFjY291bnRLZXkuanNvbicpO1xuXG5cbmltcG9ydCB7IFBvc3RDb250cm9sbGVyIH0gZnJvbSAnLi9jb250cm9sbGVycy9Qb3N0Q29udHJvbGxlcic7XG5pbXBvcnQgeyBVc2VyQ29udHJvbGxlciB9IGZyb20gJy4vY29udHJvbGxlcnMvVXNlckNvbnRyb2xsZXInO1xuXG5jb25zdCBwb3N0Um91dGVyID0gbmV3IFBvc3RDb250cm9sbGVyKCk7XG5jb25zdCB1c2VyUm91dGVyID0gbmV3IFVzZXJDb250cm9sbGVyKCk7XG5cbmNsYXNzIFNlcnZlciB7XG4gIHB1YmxpYyBhcHA6IGV4cHJlc3MuQXBwbGljYXRpb247XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5hcHAgPSBleHByZXNzKCk7XG4gICAgdGhpcy5jb25maWcoKTtcbiAgICB0aGlzLnJvdXRlcygpO1xuICB9XG5cbiAgcHVibGljIGNvbmZpZygpOiB2b2lkIHtcbiAgICBjb25zdCBNT05HT19VUkk6IHN0cmluZyA9ICdtb25nb2RiOi8vbG9jYWxob3N0L3Rlcyc7XG4gICAgbW9uZ29vc2UuY29ubmVjdChNT05HT19VUkkgfHwgcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkseyB1c2VOZXdVcmxQYXJzZXI6IHRydWUgfSk7XG5cbiAgICB0aGlzLmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUgfSkpO1xuICAgIHRoaXMuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XG4gICAgdGhpcy5hcHAudXNlKGNvb2tpZVBhcnNlcigpKTtcbiAgICB0aGlzLmFwcC51c2UobG9nZ2VyKCdkZXYnKSk7XG4gICAgdGhpcy5hcHAudXNlKGNvbXByZXNzaW9uKCkpO1xuICAgIHRoaXMuYXBwLnVzZShoZWxtZXQoKSk7XG4gICAgdGhpcy5hcHAudXNlKGNvcnMoKSk7XG5cbiAgICB0aGlzLmFwcC51c2UoKF8sIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcbiAgICAgIHJlcy5oZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsICdodHRwOi8vbG9jYWxob3N0OjgwODAnKTtcbiAgICAgIHJlcy5oZWFkZXIoXG4gICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1NZXRob2RzJyxcbiAgICAgICAgJ0dFVCwgUE9TVCwgUFVULCBERUxFVEUsIE9QVElPTlMnLFxuICAgICAgKTtcbiAgICAgIHJlcy5oZWFkZXIoXG4gICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzJyxcbiAgICAgICAgJ09yaWdpbiwgWC1SZXF1ZXN0ZWQtV2l0aCwgQ29udGVudC1UeXBlLCBBY2NlcHQsIEF1dGhvcml6YXRpb24sIEFjY2Vzcy1Db250cm9sLUFsbG93LUNyZWRlbnRpYWxzJyxcbiAgICAgICk7XG4gICAgICByZXMuaGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1DcmVkZW50aWFscycsICd0cnVlJyk7XG4gICAgICBuZXh0KCk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgcm91dGVzKCk6IHZvaWQge1xuICAgIGNvbnN0IHJvdXRlcjogZXhwcmVzcy5Sb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuICAgIHRoaXMuYXBwLnVzZSgnLycsIHJvdXRlcik7XG4gICAgdGhpcy5hcHAudXNlKCcvcG9zdHMnLCAgcG9zdFJvdXRlci5yb3V0ZXIpO1xuICAgIHRoaXMuYXBwLnVzZSgnL3VzZXJzJywgdXNlclJvdXRlci5yb3V0ZXIpO1xuICAgIHRoaXMuYXBwLmFsbCgnLyonLCAocmVxLCByZXMpID0+IHtcbiAgICAgIHJlcy5zZW5kRmlsZShwYXRoLnJlc29sdmUoJ2J1aWxkc2NyaXB0cy9wdWJsaWMvaW5kZXguaHRtbCcpKTtcbiAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFNlcnZlcigpLmFwcDtcblxuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ0eXBlXCI6IFwic2VydmljZV9hY2NvdW50XCIsXG5cdFwicHJvamVjdF9pZFwiOiBcImJleW8tOGY5ZWNcIixcblx0XCJwcml2YXRlX2tleV9pZFwiOiBcImM4MzQ1ZTZmNDI1NGQzZjQ1NWMzZjZkYmYwNjRkYTA3MzM0YWU4MjVcIixcblx0XCJwcml2YXRlX2tleVwiOiBcIi0tLS0tQkVHSU4gUFJJVkFURSBLRVktLS0tLVxcbk1JSUV2UUlCQURBTkJna3Foa2lHOXcwQkFRRUZBQVNDQktjd2dnU2pBZ0VBQW9JQkFRQzBJYXRiV0ZuK2h3cmFcXG5MV2NScFNDOFByMmd2b2ZTOWx2MG1mdkR5UElFSllEY2Z4aUpaNEpTY21Ydkw0dDBVSEYxTUs4c214ZlZLazkzXFxuTmF5eEYrSkJNcWY5Wks1a0V0Y3dQdU9WTmZYOWNSQ29YRG52Q0c0ZFR2VXdpdjAzOXJsbktDZ29MM09DeGNkOFxcbnFhckdmSG5BaWhPRmd0Z0tVMVJ4YytPTkpRTUxrSmVwZGpYSlFCVldvUERtU1BZMGE0MS8vemlpaWtZMTREY1dcXG44UDhySm5vcDFzWlZmZXlmOFYwYzd6MW9ZcFpMcE1Wb01kTmt6Wm5Jdm1MejVPK21xMjNhSTBqdW5MeS9lWGF1XFxuZWxFWE5DS2ZJek5uWjNCTlFLUklEQVpNUmFvM1RDZlBrd0RReDB0Tm9CdUJ1RENCTk1yckExblFEaGgxbGM1L1xcbkc3UXczc0d6QWdNQkFBRUNnZ0VBRHRRd3Y2SFdpQnpFNDNEV2FkT2V1TVhhSllnRWlzcExoL3pwM0NuSVBBTFJcXG5zMnFSSExWVk8xcW9rcGdSa21ubTZvb0VwR3hBejRSMEFKdlRhTXdrWWsvOGJXQ2k5MHU5R2FuV1lYRU04YWdqXFxuck1CKzU4aUVEQ0gxRHd4NklSSjNjVFc5N0kra3pPWU1SZko2Ym14T2pPK3hBTGprb1NENnRDWk1CdEZwQ1VRTlxcbmJnU3BjMGcvRlNTV3NmTlI4bWpyUEgxR29pcnNSOEMvOHZaL3FMZHg5bEZUd2VzallqbzJHK3lXRnREbWZuOVJcXG5BaUQzK2RlcS9PTEQ4NWpHbDdXZllDMnFjZVcxM2ZTNWJiWno2OTVkWmJVK242U1hMTnNva1V5WVI3MERSeUE4XFxuZ0ZEY1JlSFVKRmpTTDhQUDNJOWM0WHpsMGpQejJ6c1p1MlNhbUJRbXlRS0JnUURpTkhMZ0lmZnBuckdKOU1nRlxcblVaOWVZWXplQ01ienBucWg3TmFxSWdvTVJkWjhLdGVSMzFGMFRMcFVjQ0U1eXQvQjFWNHEzNHIzTHlkMllnQi9cXG5LbG5SV1dJaUhzcUNsR21mY1ovNUZLME9zbVZUWnp5SVpQdXZuVXdLWGpKWEExcGs1dU5nTTRNMDZwRXBkUVpZXFxuMDFCNjdwVWxtdGhtV3EzTlBTOTYyM0lDNlFLQmdRREwyNlNNQ3FQNkZWRDVnNkg4bkdkMitteDY2S1ZPRldiWVxcbnFPUXpyeFgxcmdGWWlrZzNKYzZYa0pVN2o1YmI5VTY4cVl4b1JrT0ZZbFIrZkJ3bkFwdUl3ZWExMHA4TVFxMy9cXG5KMmxEclp4RWRHTGh6Um56Z09CRlRWcGJ4MXU1ajhCV0ZvdUZrSFVrUGV3MTZpYTRxejlyUk5keTdJVDFPdVcrXFxuc1l4b1R1Mm1Pd0tCZ1FDWjE4bjVIYUVhUmsvQTM3WFp5RFYzWHlrTEtUVUdLTWRtc1VrZDFLQzQwQmFieEJkd1xcbm9rMG5wN2RpRGhESzJXdHN6TXlLcEJaREh0TGI5TE1aeVpma2hjSDBLclRZTWsvVG5OZUw4Ny92S3UwMjJCT1hcXG5QL2JjN1VIMkd6SnBjMkpiRlp5MnBOSXJmd3pUQVVBYjBUdi9INXhZUXdQQ09SSFRjRFdHZlJFQllRS0JnR1pCXFxuMVBaU1dCS1lJcmdtYVZqM2M0Ymc4dzFzS1k5VGVQVnhNcGNpV2xlVVl5UndxT3pRMENLQzZmaW9mRG4xZ1B0dFxcbjZQcGRWSDFSNTZSU3lTUmdVSGgzR3kxVmEyYVJCQXFiVUZnY2UraHlvUzgyM0sraWs5enZna1hMYUoxYUdGYVdcXG5sSUg1Qm1tWmppVTFRUnNjKzREcFZWRldoeE1qNmg2UG5TaXRmdFFGQW9HQVdYS1l3bjBjOERpWlpNTThVeWZwXFxuaWxEOEZFSEs3MlpOSFF6aEFXeXRHMDdEMHR1eTNyS1FoY0EwRG01L05HZDdYcDRiQ1lrY3A3SkNBYUpZK3IrS1xcbm5xMDVmbUxsZWFTNzVjb0k5ZmFlWXY4WDRsNW85bVFGK1NaTnZVV25pR0ZqdmpuaSt0cGRVbUZzVmVWM1F0R0xcXG5iWVZuMnVRbVRxS0NYclpYbDUzQlB3Zz1cXG4tLS0tLUVORCBQUklWQVRFIEtFWS0tLS0tXFxuXCIsXG5cdFwiY2xpZW50X2VtYWlsXCI6IFwidXB3b3JrLWZyZWVsYW5jZXJAYmV5by04ZjllYy5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbVwiLFxuXHRcImNsaWVudF9pZFwiOiBcIjEwOTYwMzUzNTQyMDg0MzIyNDM2NFwiLFxuXHRcImF1dGhfdXJpXCI6IFwiaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tL28vb2F1dGgyL2F1dGhcIixcblx0XCJ0b2tlbl91cmlcIjogXCJodHRwczovL29hdXRoMi5nb29nbGVhcGlzLmNvbS90b2tlblwiLFxuXHRcImF1dGhfcHJvdmlkZXJfeDUwOV9jZXJ0X3VybFwiOiBcImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL29hdXRoMi92MS9jZXJ0c1wiLFxuXHRcImNsaWVudF94NTA5X2NlcnRfdXJsXCI6IFwiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vcm9ib3QvdjEvbWV0YWRhdGEveDUwOS91cHdvcmstZnJlZWxhbmNlciU0MGJleW8tOGY5ZWMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb21cIlxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvbXByZXNzaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvb2tpZS1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkZWJ1Z1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImhlbG1ldFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vcmdhblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=