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
const logger = __webpack_require__(/*! morgan */ "morgan");
const path = __webpack_require__(/*! path */ "path");
const admin = __webpack_require__(/*! firebase-admin */ "firebase-admin");
let serviceAccount = __webpack_require__(/*!  ./../../serviceAccountKey.json5 */ "./serviceAccountKey.json5");
const PostController_1 = __webpack_require__(/*! ./controllers/PostController */ "./buildScripts/controllers/PostController.ts");
const postRouter = new PostController_1.PostController();
class Server {
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }
    config() {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount)
        });
        const db = admin.firestore();
        console.log(db);
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

/***/ "firebase-admin":
/*!*********************************!*\
  !*** external "firebase-admin" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase-admin");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYnVpbGRTY3JpcHRzL2NvbnRyb2xsZXJzL1Bvc3RDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL2J1aWxkU2NyaXB0cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9idWlsZFNjcmlwdHMvbW9kZWxzL3Bvc3QudHMiLCJ3ZWJwYWNrOi8vLy4vYnVpbGRTY3JpcHRzL3NyY1NlcnZlci50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlQWNjb3VudEtleS5qc29uNSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvbXByZXNzaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29va2llLXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkZWJ1Z1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS1hZG1pblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImhlbG1ldFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vcmdhblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSxnRUFBa0U7QUFDbEUsMEZBQXNDO0FBRXRDLE1BQWEsY0FBYztJQUd6QjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsZ0JBQU0sRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVZLEdBQUcsQ0FBQyxDQUFVLEVBQUUsR0FBYSxFQUFFLElBQWtCOztZQUM1RCxJQUFJO2dCQUNGLE1BQU0sSUFBSSxHQUFHLE1BQU0sV0FBSSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUMvQixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO2FBQzNEO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2I7UUFDSCxDQUFDO0tBQUE7SUFFWSxHQUFHLENBQ2QsR0FBWSxFQUNaLEdBQWEsRUFDYixJQUFrQjs7WUFFbEIsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7WUFDNUIsSUFBSTtnQkFDRixNQUFNLElBQUksR0FBRyxNQUFNLFdBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUMxQyxJQUFJLENBQUMsSUFBSSxFQUFFO29CQUNULE1BQU0sSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztpQkFDbkM7Z0JBQ0QsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQzthQUMzRDtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNkLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUM1QjtRQUNILENBQUM7S0FBQTtJQUVZLE1BQU0sQ0FDakIsR0FBWSxFQUNaLEdBQWEsRUFDYixJQUFrQjs7WUFFbEIsTUFBTSxFQUNKLEtBQUssRUFDTCxJQUFJLEVBQ0osT0FBTyxFQUNQLGFBQWEsRUFDYixRQUFRLEVBQ1IsU0FBUyxHQUNWLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztZQUNiLElBQUk7Z0JBQ0YsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLFdBQUksQ0FBQztvQkFDMUIsS0FBSztvQkFDTCxJQUFJO29CQUNKLE9BQU87b0JBQ1AsYUFBYTtvQkFDYixRQUFRO29CQUNSLFNBQVM7aUJBQ1YsQ0FBQyxDQUFDO2dCQUNILE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUMvQixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQzthQUNwRDtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNkLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUM1QjtRQUNILENBQUM7S0FBQTtJQUVZLE1BQU0sQ0FDakIsR0FBWSxFQUNaLEdBQWEsRUFDYixJQUFrQjs7WUFFbEIsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7WUFDMUIsSUFBSTtnQkFDRixNQUFNLElBQUksR0FBRyxNQUFNLFdBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDN0QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7YUFDcEQ7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDZCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDNUI7UUFDSCxDQUFDO0tBQUE7SUFFWSxNQUFNLENBQ2pCLEdBQVksRUFDWixHQUFhLEVBQ2IsSUFBa0I7O1lBRWxCLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1lBQzFCLElBQUk7Z0JBQ0YsTUFBTSxJQUFJLEdBQUcsTUFBTSxXQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUNuRCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO2FBQzNEO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ2QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzVCO1FBQ0gsQ0FBQztLQUFBO0lBRU0sTUFBTTtRQUNYLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1QyxDQUFDO0NBQ0Y7QUFuR0Qsd0NBbUdDOzs7Ozs7Ozs7Ozs7Ozs7QUNyR0Qsd0RBQStCO0FBQy9CLHFEQUE2QjtBQUM3QiwwRkFBaUM7QUFJakMsTUFBTSxJQUFJLEdBQUcsYUFBYSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDO0FBS3JELE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLElBQUksRUFBRSxDQUFDLENBQUM7QUFFaEQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxtQkFBTSxDQUFDLENBQUM7QUFDekMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ2hCLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQzVCLE1BQU0sQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBRXBDLFNBQVMsYUFBYSxDQUFDLEdBQW9CO0lBQ3pDLE1BQU0sSUFBSSxHQUFXLE9BQU8sR0FBRyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQ3ZFLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ2YsT0FBTyxHQUFHLENBQUM7S0FDWjtTQUFNLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRTtRQUNwQixPQUFPLElBQUksQ0FBQztLQUNiO1NBQU07UUFDTCxPQUFPLEtBQUssQ0FBQztLQUNkO0FBQ0gsQ0FBQztBQUVELFNBQVMsT0FBTyxDQUFDLEtBQTRCO0lBQzNDLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxRQUFRLEVBQUU7UUFDOUIsTUFBTSxLQUFLLENBQUM7S0FDYjtJQUNELE1BQU0sSUFBSSxHQUFHLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUN4RSxRQUFRLEtBQUssQ0FBQyxJQUFJLEVBQUU7UUFDbEIsS0FBSyxRQUFRO1lBQ1gsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksK0JBQStCLENBQUMsQ0FBQztZQUN0RCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLE1BQU07UUFDUixLQUFLLFlBQVk7WUFDZixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxvQkFBb0IsQ0FBQyxDQUFDO1lBQzNDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEIsTUFBTTtRQUNSO1lBQ0UsTUFBTSxLQUFLLENBQUM7S0FDZjtBQUNILENBQUM7QUFFRCxTQUFTLFdBQVc7SUFDbEIsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzlCLE1BQU0sSUFBSSxHQUFHLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDN0UsS0FBSyxDQUFDLGdCQUFnQixJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ2hDLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3JERCxtRUFBeUM7QUFLekMsTUFBTSxVQUFVLEdBQVcsSUFBSSxpQkFBTSxDQUFDO0lBQ3BDLFNBQVMsRUFBRSxJQUFJO0lBQ2YsU0FBUyxFQUFFLElBQUk7SUFDZixLQUFLLEVBQUUsTUFBTTtJQUNiLElBQUksRUFBRSxNQUFNO0lBQ1osT0FBTyxFQUFFLE1BQU07SUFDZixhQUFhLEVBQUUsTUFBTTtJQUNyQixRQUFRLEVBQUUsTUFBTTtJQUNoQixTQUFTLEVBQUUsT0FBTztDQUNuQixDQUFDLENBQUM7QUFFVSxZQUFJLEdBQUcsZ0JBQUssQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2hCOUMseUVBQTBDO0FBQzFDLDBFQUEyQztBQUMzQywrRUFBOEM7QUFDOUMscURBQTZCO0FBQzdCLDhEQUFtQztBQUNuQywyREFBaUM7QUFFakMsMkRBQWlDO0FBQ2pDLHFEQUE2QjtBQUk3QiwwRUFBd0M7QUFDeEMsSUFBSSxjQUFjLEdBQUcsbUJBQU8sQ0FBQyxtRUFBa0MsQ0FBQyxDQUFDO0FBR2pFLGlJQUE4RDtBQUM5RCxNQUFNLFVBQVUsR0FBRyxJQUFJLCtCQUFjLEVBQUUsQ0FBQztBQUV4QyxNQUFNLE1BQU07SUFFVjtRQUNFLElBQUksQ0FBQyxHQUFHLEdBQUcsT0FBTyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2QsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFDTSxNQUFNO1FBQ1gsS0FBSyxDQUFDLGFBQWEsQ0FBQztZQUNsQixVQUFVLEVBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO1NBQ2pELENBQUMsQ0FBQztRQUVILE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBcUIsRUFBRSxJQUEwQixFQUFFLEVBQUU7WUFDcEUsR0FBRyxDQUFDLE1BQU0sQ0FBQyw2QkFBNkIsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDO1lBQ25FLEdBQUcsQ0FBQyxNQUFNLENBQ1IsOEJBQThCLEVBQzlCLGlDQUFpQyxDQUNsQyxDQUFDO1lBQ0YsR0FBRyxDQUFDLE1BQU0sQ0FDUiw4QkFBOEIsRUFDOUIsaUdBQWlHLENBQ2xHLENBQUM7WUFDRixHQUFHLENBQUMsTUFBTSxDQUFDLGtDQUFrQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3ZELElBQUksRUFBRSxDQUFDO1FBQ1QsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sTUFBTTtRQUNYLE1BQU0sTUFBTSxHQUFtQixPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQzlCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLENBQUM7UUFDakUsQ0FBQyxDQUFDLENBQUM7SUFDSCxDQUFDO0NBQ0Y7QUFFRCxrQkFBZSxJQUFJLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQzs7Ozs7Ozs7Ozs7O0FDaEVoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxpQyIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IHsgTmV4dEZ1bmN0aW9uLCBSZXF1ZXN0LCBSZXNwb25zZSwgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBQb3N0IH0gZnJvbSAnLi4vbW9kZWxzL3Bvc3QnO1xuXG5leHBvcnQgY2xhc3MgUG9zdENvbnRyb2xsZXIge1xuICBwdWJsaWMgcm91dGVyOiBSb3V0ZXI7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5yb3V0ZXIgPSBSb3V0ZXIoKTtcbiAgICB0aGlzLnJvdXRlcygpO1xuICAgIGNvbnNvbGUubG9nKCdoZXJlJyk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgYWxsKF86IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbiwpOiBQcm9taXNlPFJlc3BvbnNlIHwgdm9pZD4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgUG9zdC5maW5kKCk7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBkYXRhLCBtZXNzYWdlOiAnc3VjY2VzcycgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIG5leHQoZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBvbmUoXG4gICAgcmVxOiBSZXF1ZXN0LFxuICAgIHJlczogUmVzcG9uc2UsXG4gICAgbmV4dDogTmV4dEZ1bmN0aW9uLFxuICApOiBQcm9taXNlPFJlc3BvbnNlIHwgdm9pZD4ge1xuICAgIGNvbnN0IHsgc2x1ZyB9ID0gcmVxLnBhcmFtcztcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IFBvc3QuZmluZE9uZSh7IHNsdWcgfSk7XG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQb3N0IG5vdCBmb3VuZCcpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZGF0YSwgbWVzc2FnZTogJ3N1Y2Nlc3MnIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gbmV4dChlcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgY3JlYXRlKFxuICAgIHJlcTogUmVxdWVzdCxcbiAgICByZXM6IFJlc3BvbnNlLFxuICAgIG5leHQ6IE5leHRGdW5jdGlvbixcbiAgKTogUHJvbWlzZTxSZXNwb25zZSB8IHZvaWQ+IHtcbiAgICBjb25zdCB7XG4gICAgICB0aXRsZSxcbiAgICAgIHNsdWcsXG4gICAgICBjb250ZW50LFxuICAgICAgZmVhdHVyZWRJbWFnZSxcbiAgICAgIGNhdGVnb3J5LFxuICAgICAgcHVibGlzaGVkLFxuICAgIH0gPSByZXEuYm9keTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcG9zdCA9IGF3YWl0IG5ldyBQb3N0KHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIHNsdWcsXG4gICAgICAgIGNvbnRlbnQsXG4gICAgICAgIGZlYXR1cmVkSW1hZ2UsXG4gICAgICAgIGNhdGVnb3J5LFxuICAgICAgICBwdWJsaXNoZWQsXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBwb3N0LnNhdmUoKTtcbiAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgZGF0YSwgbWVzc2FnZTogJ3N1Y2Nlc3MnIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gbmV4dChlcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgdXBkYXRlKFxuICAgIHJlcTogUmVxdWVzdCxcbiAgICByZXM6IFJlc3BvbnNlLFxuICAgIG5leHQ6IE5leHRGdW5jdGlvbixcbiAgKTogUHJvbWlzZTxSZXNwb25zZSB8IHZvaWQ+IHtcbiAgICBjb25zdCB7IHNsdWcgfSA9IHJlcS5ib2R5O1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgUG9zdC5maW5kT25lQW5kVXBkYXRlKHsgc2x1ZyB9LCByZXEuYm9keSk7XG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGRhdGEsIG1lc3NhZ2U6ICdzdWNjZXNzJyB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIG5leHQoZXJyb3IubWVzc2FnZSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGFzeW5jIGRlbGV0ZShcbiAgICByZXE6IFJlcXVlc3QsXG4gICAgcmVzOiBSZXNwb25zZSxcbiAgICBuZXh0OiBOZXh0RnVuY3Rpb24sXG4gICk6IFByb21pc2U8UmVzcG9uc2UgfCB2b2lkPiB7XG4gICAgY29uc3QgeyBzbHVnIH0gPSByZXEuYm9keTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IFBvc3QuZmluZE9uZUFuZFJlbW92ZSh7IHNsdWcgfSk7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDQpLmpzb24oeyBkYXRhLCBtZXNzYWdlOiAnc3VjY2VzcycgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBuZXh0KGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByb3V0ZXMoKSB7XG4gICAgdGhpcy5yb3V0ZXIuZ2V0KCcvJywgdGhpcy5hbGwpO1xuICAgIHRoaXMucm91dGVyLmdldCgnLzpzbHVnJywgdGhpcy5vbmUpO1xuICAgIHRoaXMucm91dGVyLnBvc3QoJy8nLCB0aGlzLmNyZWF0ZSk7XG4gICAgdGhpcy5yb3V0ZXIucHV0KCcvOnNsdWcnLCB0aGlzLnVwZGF0ZSk7XG4gICAgdGhpcy5yb3V0ZXIuZGVsZXRlKCcvOnNsdWcnLCB0aGlzLmRlbGV0ZSk7XG4gIH1cbn1cblxuIiwiLy8gdHNsaW50OmRpc2FibGVcclxuaW1wb3J0ICogYXMgZGVidWcgZnJvbSAnZGVidWcnO1xyXG5pbXBvcnQgKiBhcyBodHRwIGZyb20gJ2h0dHAnO1xyXG5pbXBvcnQgU2VydmVyIGZyb20gJy4vc3JjU2VydmVyJztcclxuXHJcbi8vZGVidWcoJ3RzLWV4cHJlc3M6c2VydmVyJyk7XHJcblxyXG5jb25zdCBwb3J0ID0gbm9ybWFsaXplUG9ydChwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDApO1xyXG5cclxuXHJcbi8vU2VydmVyLnNldCgncG9ydCcsIHBvcnQpO1xyXG5cclxuY29uc29sZS5sb2coYFNlcnZlciBsaXN0ZW5pbmcgb24gcG9ydCAke3BvcnR9YCk7XHJcblxyXG5jb25zdCBzZXJ2ZXIgPSBodHRwLmNyZWF0ZVNlcnZlcihTZXJ2ZXIpO1xyXG5zZXJ2ZXIubGlzdGVuKCk7XHJcbnNlcnZlci5vbignZXJyb3InLCBvbkVycm9yKTtcclxuc2VydmVyLm9uKCdsaXN0ZW5pbmcnLCBvbkxpc3RlbmluZyk7XHJcblxyXG5mdW5jdGlvbiBub3JtYWxpemVQb3J0KHZhbDogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyIHwgc3RyaW5nIHwgYm9vbGVhbiB7XHJcbiAgY29uc3QgcG9ydDogbnVtYmVyID0gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgPyBwYXJzZUludCh2YWwsIDEwKSA6IHZhbDtcclxuICBpZiAoaXNOYU4ocG9ydCkpIHtcclxuICAgIHJldHVybiB2YWw7XHJcbiAgfSBlbHNlIGlmIChwb3J0ID49IDApIHtcclxuICAgIHJldHVybiBwb3J0O1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBvbkVycm9yKGVycm9yOiBOb2RlSlMuRXJybm9FeGNlcHRpb24pOiB2b2lkIHtcclxuICBpZiAoZXJyb3Iuc3lzY2FsbCAhPT0gJ2xpc3RlbicpIHtcclxuICAgIHRocm93IGVycm9yO1xyXG4gIH1cclxuICBjb25zdCBiaW5kID0gdHlwZW9mIHBvcnQgPT09ICdzdHJpbmcnID8gJ1BpcGUgJyArIHBvcnQgOiAnUG9ydCAnICsgcG9ydDtcclxuICBzd2l0Y2ggKGVycm9yLmNvZGUpIHtcclxuICAgIGNhc2UgJ0VBQ0NFUyc6XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoYCR7YmluZH0gcmVxdWlyZXMgZWxldmF0ZWQgcHJpdmlsZWdlc2ApO1xyXG4gICAgICBwcm9jZXNzLmV4aXQoMSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnRUFERFJJTlVTRSc6XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoYCR7YmluZH0gaXMgYWxyZWFkeSBpbiB1c2VgKTtcclxuICAgICAgcHJvY2Vzcy5leGl0KDEpO1xyXG4gICAgICBicmVhaztcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHRocm93IGVycm9yO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gb25MaXN0ZW5pbmcoKTogdm9pZCB7XHJcbiAgY29uc3QgYWRkciA9IHNlcnZlci5hZGRyZXNzKCk7XHJcbiAgY29uc3QgYmluZCA9IHR5cGVvZiBhZGRyID09PSAnc3RyaW5nJyA/IGBwaXBlICR7YWRkcn1gIDogYHBvcnQgJHthZGRyLnBvcnR9YDtcclxuICBkZWJ1ZyhgTGlzdGVuaW5nIG9uICR7YmluZH1gKTtcclxufVxyXG4iLCJpbXBvcnQgeyBtb2RlbCwgU2NoZW1hIH0gZnJvbSAnbW9uZ29vc2UnO1xuXG4vLyBBbGwgdmFsaWRhdGlvbiBzaG91bGQgYmUgaGFuZGxlZCBpbiB0aGUgY29udHJvbGxlclxuLy8ga2VlcCBtb2RlbHMgYXMgbWluaW1hbCBhbmQgc2ltcGxlIGFzIHBvc3NpYmxlXG5cbmNvbnN0IFBvc3RTY2hlbWE6IFNjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICBjcmVhdGVkQXQ6IERhdGUsXG4gIHVwZGF0ZWRBdDogRGF0ZSxcbiAgdGl0bGU6IFN0cmluZyxcbiAgc2x1ZzogU3RyaW5nLFxuICBjb250ZW50OiBTdHJpbmcsXG4gIGZlYXR1cmVkSW1hZ2U6IFN0cmluZyxcbiAgY2F0ZWdvcnk6IFN0cmluZyxcbiAgcHVibGlzaGVkOiBCb29sZWFuLFxufSk7XG5cbmV4cG9ydCBjb25zdCBQb3N0ID0gbW9kZWwoJ1Bvc3QnLCBQb3N0U2NoZW1hKTtcbiIsImltcG9ydCAqIGFzIGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInO1xuaW1wb3J0ICogYXMgY29tcHJlc3Npb24gZnJvbSAnY29tcHJlc3Npb24nO1xuaW1wb3J0ICogYXMgY29va2llUGFyc2VyIGZyb20gJ2Nvb2tpZS1wYXJzZXInO1xuaW1wb3J0ICogYXMgY29ycyBmcm9tICdjb3JzJztcbmltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgKiBhcyBoZWxtZXQgZnJvbSAnaGVsbWV0JztcbmltcG9ydCAqIGFzIG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCAqIGFzIGxvZ2dlciBmcm9tICdtb3JnYW4nO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcbi8vaW1wb3J0ICogYXMgcm91dGVyIGZyb20gJy4vcm91dGVyJztcbmltcG9ydCAqIGFzIGV2bmNvbmYgZnJvbSAnZG90ZW52JztcblxuaW1wb3J0ICogYXMgYWRtaW4gZnJvbSAnZmlyZWJhc2UtYWRtaW4nO1xubGV0IHNlcnZpY2VBY2NvdW50ID0gcmVxdWlyZSgnIC4vLi4vLi4vc2VydmljZUFjY291bnRLZXkuanNvbjUnKTtcbi8vbGV0IGFjY291bnQgPSByZXF1aXJlKCcuLi9zZXJ2aWNlQWNjb3VudEtleS5qc29uJyk7XG5cbmltcG9ydCB7IFBvc3RDb250cm9sbGVyIH0gZnJvbSAnLi9jb250cm9sbGVycy9Qb3N0Q29udHJvbGxlcic7XG5jb25zdCBwb3N0Um91dGVyID0gbmV3IFBvc3RDb250cm9sbGVyKCk7XG5cbmNsYXNzIFNlcnZlciB7XG4gIHB1YmxpYyBhcHA6IGV4cHJlc3MuQXBwbGljYXRpb247XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYXBwID0gZXhwcmVzcygpO1xuICAgIHRoaXMuY29uZmlnKCk7XG4gICAgdGhpcy5yb3V0ZXMoKTtcbiAgfVxuICBwdWJsaWMgY29uZmlnKCk6IHZvaWQge1xuICAgIGFkbWluLmluaXRpYWxpemVBcHAoe1xuICAgICAgY3JlZGVudGlhbDphZG1pbi5jcmVkZW50aWFsLmNlcnQoc2VydmljZUFjY291bnQpXG4gICAgfSk7XG5cbiAgICBjb25zdCBkYiA9IGFkbWluLmZpcmVzdG9yZSgpO1xuICAgIGNvbnNvbGUubG9nKGRiKTtcbiAgICB0aGlzLmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xuICAgIHRoaXMuYXBwLnVzZShjb29raWVQYXJzZXIoKSk7XG4gICAgdGhpcy5hcHAudXNlKGxvZ2dlcignZGV2JykpO1xuICAgIHRoaXMuYXBwLnVzZShjb21wcmVzc2lvbigpKTtcbiAgICB0aGlzLmFwcC51c2UoaGVsbWV0KCkpO1xuICAgIHRoaXMuYXBwLnVzZShjb3JzKCkpO1xuICAgIHRoaXMuYXBwLnVzZSgoXywgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xuICAgICAgcmVzLmhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJywgJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MCcpO1xuICAgICAgcmVzLmhlYWRlcihcbiAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHMnLFxuICAgICAgICAnR0VULCBQT1NULCBQVVQsIERFTEVURSwgT1BUSU9OUycsXG4gICAgICApO1xuICAgICAgcmVzLmhlYWRlcihcbiAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnMnLFxuICAgICAgICAnT3JpZ2luLCBYLVJlcXVlc3RlZC1XaXRoLCBDb250ZW50LVR5cGUsIEFjY2VwdCwgQXV0aG9yaXphdGlvbiwgQWNjZXNzLUNvbnRyb2wtQWxsb3ctQ3JlZGVudGlhbHMnLFxuICAgICAgKTtcbiAgICAgIHJlcy5oZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LUNyZWRlbnRpYWxzJywgJ3RydWUnKTtcbiAgICAgIG5leHQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyByb3V0ZXMoKTogdm9pZCB7XG4gICAgY29uc3Qgcm91dGVyOiBleHByZXNzLlJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG4gICAgdGhpcy5hcHAudXNlKCcvJywgcm91dGVyKTtcbiAgICB0aGlzLmFwcC51c2UoJy9wb3N0cycsICBwb3N0Um91dGVyLnJvdXRlcik7XG4gICAgdGhpcy5hcHAuYWxsKCcvKicsIChyZXEsIHJlcykgPT4ge1xuICAgICAgcmVzLnNlbmRGaWxlKHBhdGgucmVzb2x2ZSgnYnVpbGRzY3JpcHRzL3B1YmxpYy9pbmRleC5odG1sJykpO1xuICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgU2VydmVyKCkuYXBwO1xuXG5cbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInR5cGVcIjogXCJzZXJ2aWNlX2FjY291bnRcIixcblx0XCJwcm9qZWN0X2lkXCI6IFwiYmV5by04ZjllY1wiLFxuXHRcInByaXZhdGVfa2V5X2lkXCI6IFwiYzgzNDVlNmY0MjU0ZDNmNDU1YzNmNmRiZjA2NGRhMDczMzRhZTgyNVwiLFxuXHRcInByaXZhdGVfa2V5XCI6IFwiLS0tLS1CRUdJTiBQUklWQVRFIEtFWS0tLS0tXFxuTUlJRXZRSUJBREFOQmdrcWhraUc5dzBCQVFFRkFBU0NCS2N3Z2dTakFnRUFBb0lCQVFDMElhdGJXRm4raHdyYVxcbkxXY1JwU0M4UHIyZ3ZvZlM5bHYwbWZ2RHlQSUVKWURjZnhpSlo0SlNjbVh2TDR0MFVIRjFNSzhzbXhmVktrOTNcXG5OYXl4RitKQk1xZjlaSzVrRXRjd1B1T1ZOZlg5Y1JDb1hEbnZDRzRkVHZVd2l2MDM5cmxuS0Nnb0wzT0N4Y2Q4XFxucWFyR2ZIbkFpaE9GZ3RnS1UxUnhjK09OSlFNTGtKZXBkalhKUUJWV29QRG1TUFkwYTQxLy96aWlpa1kxNERjV1xcbjhQOHJKbm9wMXNaVmZleWY4VjBjN3oxb1lwWkxwTVZvTWROa3pabkl2bUx6NU8rbXEyM2FJMGp1bkx5L2VYYXVcXG5lbEVYTkNLZkl6Tm5aM0JOUUtSSURBWk1SYW8zVENmUGt3RFF4MHROb0J1QnVEQ0JOTXJyQTFuUURoaDFsYzUvXFxuRzdRdzNzR3pBZ01CQUFFQ2dnRUFEdFF3djZIV2lCekU0M0RXYWRPZXVNWGFKWWdFaXNwTGgvenAzQ25JUEFMUlxcbnMycVJITFZWTzFxb2twZ1JrbW5tNm9vRXBHeEF6NFIwQUp2VGFNd2tZay84YldDaTkwdTlHYW5XWVhFTThhZ2pcXG5yTUIrNThpRURDSDFEd3g2SVJKM2NUVzk3SStrek9ZTVJmSjZibXhPak8reEFMamtvU0Q2dENaTUJ0RnBDVVFOXFxuYmdTcGMwZy9GU1NXc2ZOUjhtanJQSDFHb2lyc1I4Qy84dlovcUxkeDlsRlR3ZXNqWWpvMkcreVdGdERtZm45UlxcbkFpRDMrZGVxL09MRDg1akdsN1dmWUMycWNlVzEzZlM1YmJaejY5NWRaYlUrbjZTWExOc29rVXlZUjcwRFJ5QThcXG5nRkRjUmVIVUpGalNMOFBQM0k5YzRYemwwalB6MnpzWnUyU2FtQlFteVFLQmdRRGlOSExnSWZmcG5yR0o5TWdGXFxuVVo5ZVlZemVDTWJ6cG5xaDdOYXFJZ29NUmRaOEt0ZVIzMUYwVExwVWNDRTV5dC9CMVY0cTM0cjNMeWQyWWdCL1xcbktsblJXV0lpSHNxQ2xHbWZjWi81RkswT3NtVlRaenlJWlB1dm5Vd0tYakpYQTFwazV1TmdNNE0wNnBFcGRRWllcXG4wMUI2N3BVbG10aG1XcTNOUFM5NjIzSUM2UUtCZ1FETDI2U01DcVA2RlZENWc2SDhuR2QyK214NjZLVk9GV2JZXFxucU9RenJ4WDFyZ0ZZaWtnM0pjNlhrSlU3ajViYjlVNjhxWXhvUmtPRllsUitmQnduQXB1SXdlYTEwcDhNUXEzL1xcbkoybERyWnhFZEdMaHpSbnpnT0JGVFZwYngxdTVqOEJXRm91RmtIVWtQZXcxNmlhNHF6OXJSTmR5N0lUMU91VytcXG5zWXhvVHUybU93S0JnUUNaMThuNUhhRWFSay9BMzdYWnlEVjNYeWtMS1RVR0tNZG1zVWtkMUtDNDBCYWJ4QmR3XFxub2swbnA3ZGlEaERLMld0c3pNeUtwQlpESHRMYjlMTVp5WmZraGNIMEtyVFlNay9Ubk5lTDg3L3ZLdTAyMkJPWFxcblAvYmM3VUgyR3pKcGMySmJGWnkycE5JcmZ3elRBVUFiMFR2L0g1eFlRd1BDT1JIVGNEV0dmUkVCWVFLQmdHWkJcXG4xUFpTV0JLWUlyZ21hVmozYzRiZzh3MXNLWTlUZVBWeE1wY2lXbGVVWXlSd3FPelEwQ0tDNmZpb2ZEbjFnUHR0XFxuNlBwZFZIMVI1NlJTeVNSZ1VIaDNHeTFWYTJhUkJBcWJVRmdjZStoeW9TODIzSytpazl6dmdrWExhSjFhR0ZhV1xcbmxJSDVCbW1aamlVMVFSc2MrNERwVlZGV2h4TWo2aDZQblNpdGZ0UUZBb0dBV1hLWXduMGM4RGlaWk1NOFV5ZnBcXG5pbEQ4RkVISzcyWk5IUXpoQVd5dEcwN0QwdHV5M3JLUWhjQTBEbTUvTkdkN1hwNGJDWWtjcDdKQ0FhSlkrcitLXFxubnEwNWZtTGxlYVM3NWNvSTlmYWVZdjhYNGw1bzltUUYrU1pOdlVXbmlHRmp2am5pK3RwZFVtRnNWZVYzUXRHTFxcbmJZVm4ydVFtVHFLQ1hyWlhsNTNCUHdnPVxcbi0tLS0tRU5EIFBSSVZBVEUgS0VZLS0tLS1cXG5cIixcblx0XCJjbGllbnRfZW1haWxcIjogXCJ1cHdvcmstZnJlZWxhbmNlckBiZXlvLThmOWVjLmlhbS5nc2VydmljZWFjY291bnQuY29tXCIsXG5cdFwiY2xpZW50X2lkXCI6IFwiMTA5NjAzNTM1NDIwODQzMjI0MzY0XCIsXG5cdFwiYXV0aF91cmlcIjogXCJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20vby9vYXV0aDIvYXV0aFwiLFxuXHRcInRva2VuX3VyaVwiOiBcImh0dHBzOi8vb2F1dGgyLmdvb2dsZWFwaXMuY29tL3Rva2VuXCIsXG5cdFwiYXV0aF9wcm92aWRlcl94NTA5X2NlcnRfdXJsXCI6IFwiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vb2F1dGgyL3YxL2NlcnRzXCIsXG5cdFwiY2xpZW50X3g1MDlfY2VydF91cmxcIjogXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9yb2JvdC92MS9tZXRhZGF0YS94NTA5L3Vwd29yay1mcmVlbGFuY2VyJTQwYmV5by04ZjllYy5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbVwiXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29tcHJlc3Npb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29va2llLXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRlYnVnXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UtYWRtaW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaGVsbWV0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9yZ2FuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==