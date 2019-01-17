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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __webpack_require__(/*! express */ "express");
var post_1 = __webpack_require__(/*! ../models/post */ "./buildScripts/models/post.ts");
var PostController = (function () {
    function PostController() {
        this.router = express_1.Router();
        this.routes();
    }
    PostController.prototype.all = function (_, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, post_1.Post.find()];
                    case 1:
                        data = _a.sent();
                        return [2, res.status(200).json({ data: data, message: 'success' })];
                    case 2:
                        error_1 = _a.sent();
                        next(error_1);
                        return [3, 3];
                    case 3: return [2];
                }
            });
        });
    };
    PostController.prototype.one = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var slug, data, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        slug = req.params.slug;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, post_1.Post.findOne({ slug: slug })];
                    case 2:
                        data = _a.sent();
                        if (!data) {
                            throw new Error('Post not found');
                        }
                        return [2, res.status(200).json({ data: data, message: 'success' })];
                    case 3:
                        error_2 = _a.sent();
                        return [2, next(error_2.message)];
                    case 4: return [2];
                }
            });
        });
    };
    PostController.prototype.create = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, title, slug, content, featuredImage, category, published, post, data, error_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, title = _a.title, slug = _a.slug, content = _a.content, featuredImage = _a.featuredImage, category = _a.category, published = _a.published;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 4, , 5]);
                        return [4, new post_1.Post({
                                title: title,
                                slug: slug,
                                content: content,
                                featuredImage: featuredImage,
                                category: category,
                                published: published,
                            })];
                    case 2:
                        post = _b.sent();
                        return [4, post.save()];
                    case 3:
                        data = _b.sent();
                        res.status(201).json({ data: data, message: 'success' });
                        return [3, 5];
                    case 4:
                        error_3 = _b.sent();
                        return [2, next(error_3.message)];
                    case 5: return [2];
                }
            });
        });
    };
    PostController.prototype.update = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var slug, data, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        slug = req.body.slug;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, post_1.Post.findOneAndUpdate({ slug: slug }, req.body)];
                    case 2:
                        data = _a.sent();
                        res.status(200).json({ data: data, message: 'success' });
                        return [3, 4];
                    case 3:
                        error_4 = _a.sent();
                        return [2, next(error_4.message)];
                    case 4: return [2];
                }
            });
        });
    };
    PostController.prototype.delete = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var slug, data, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        slug = req.body.slug;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, post_1.Post.findOneAndRemove({ slug: slug })];
                    case 2:
                        data = _a.sent();
                        return [2, res.status(204).json({ data: data, message: 'success' })];
                    case 3:
                        error_5 = _a.sent();
                        return [2, next(error_5.message)];
                    case 4: return [2];
                }
            });
        });
    };
    PostController.prototype.routes = function () {
        this.router.get('/', this.all);
        this.router.get('/:slug', this.one);
        this.router.post('/', this.create);
        this.router.put('/:slug', this.update);
        this.router.delete('/:slug', this.delete);
    };
    return PostController;
}());
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
var express_1 = __webpack_require__(/*! express */ "express");
var user_1 = __webpack_require__(/*! ../models/user */ "./buildScripts/models/user.ts");
var UserController = (function () {
    function UserController() {
        this.router = express_1.Router();
        this.routes();
    }
    UserController.prototype.all = function (req, res) {
        user_1.User.find()
            .then(function (data) {
            return res.status(200).json({ data: data });
        })
            .catch(function (error) {
            res.status(500).json({ error: error });
            return error;
        });
    };
    UserController.prototype.one = function (req, res) {
        var username = req.params.username;
        user_1.User.findOne({ username: username })
            .then(function (data) {
            res.status(200).json({ data: data });
        })
            .catch(function (error) {
            res.status(500).json({ error: error });
        });
    };
    UserController.prototype.create = function (req, res) {
        var _a = req.body, firstName = _a.firstName, lastName = _a.lastName, username = _a.username, email = _a.email, password = _a.password;
        var user = new user_1.User({
            firstName: firstName,
            lastName: lastName,
            username: username,
            email: email,
            password: password,
        });
        user
            .save()
            .then(function (data) {
            res.status(201).json({ data: data });
        })
            .catch(function (error) {
            res.status(500).json({ error: error });
        });
    };
    UserController.prototype.update = function (req, res) {
        var username = req.params.username;
        user_1.User.findOneAndUpdate({ username: username }, req.body)
            .then(function (data) {
            res.status(200).json({ data: data });
        })
            .catch(function (error) {
            res.status(500).json({ error: error });
        });
    };
    UserController.prototype.delete = function (req, res) {
        var username = req.params.username;
        user_1.User.findOneAndRemove({ username: username })
            .then(function () {
            res.status(204).end();
        })
            .catch(function (error) {
            res.status(500).json({ error: error });
        });
    };
    UserController.prototype.routes = function () {
        this.router.get('/', this.all);
        this.router.get('/:username', this.one);
        this.router.post('/', this.create);
        this.router.put('/:username', this.update);
        this.router.delete('/:username', this.delete);
    };
    return UserController;
}());
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
var debug = __webpack_require__(/*! debug */ "debug");
var http = __webpack_require__(/*! http */ "http");
var srcServer_1 = __webpack_require__(/*! ./srcServer */ "./buildScripts/srcServer.ts");
var port = normalizePort(process.env.PORT || 3000);
console.log('here i am fuckkig out');
srcServer_1.default.set('port', port);
console.log("Server listening on port " + port);
var server = http.createServer(srcServer_1.default);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
function normalizePort(val) {
    var port = typeof val === 'string' ? parseInt(val, 10) : val;
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
    var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
}
function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string' ? "pipe " + addr : "port " + addr.port;
    debug("Listening on " + bind);
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
var mongoose_1 = __webpack_require__(/*! mongoose */ "mongoose");
var PostSchema = new mongoose_1.Schema({
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
var mongoose_1 = __webpack_require__(/*! mongoose */ "mongoose");
var UserSchema = new mongoose_1.Schema({
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
var bodyParser = __webpack_require__(/*! body-parser */ "body-parser");
var compression = __webpack_require__(/*! compression */ "compression");
var cookieParser = __webpack_require__(/*! cookie-parser */ "cookie-parser");
var cors = __webpack_require__(/*! cors */ "cors");
var express = __webpack_require__(/*! express */ "express");
var helmet = __webpack_require__(/*! helmet */ "helmet");
var mongoose = __webpack_require__(/*! mongoose */ "mongoose");
var logger = __webpack_require__(/*! morgan */ "morgan");
var PostController_1 = __webpack_require__(/*! ./controllers/PostController */ "./buildScripts/controllers/PostController.ts");
var UserController_1 = __webpack_require__(/*! ./controllers/UserController */ "./buildScripts/controllers/UserController.ts");
var postRouter = new PostController_1.PostController();
var userRouter = new UserController_1.UserController();
var Server = (function () {
    function Server() {
        this.app = express();
        this.config();
        this.routes();
    }
    Server.prototype.config = function () {
        var MONGO_URI = 'mongodb://localhost/tes';
        mongoose.connect(MONGO_URI || process.env.MONGODB_URI, { useNewUrlParser: true });
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        this.app.use(cookieParser());
        this.app.use(logger('dev'));
        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(cors());
        this.app.use(function (_, res, next) {
            res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
            res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
            res.header('Access-Control-Allow-Credentials', 'true');
            next();
        });
    };
    Server.prototype.routes = function () {
        var router = express.Router();
        this.app.use('/', router);
        this.app.use('/posts', postRouter.router);
        this.app.use('/users', userRouter.router);
    };
    return Server;
}());
exports.default = new Server().app;


/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./buildScripts/index ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\vscodeWorkSpace\boilerPlateApp\buildScripts\index */"./buildScripts/index.ts");


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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYnVpbGRTY3JpcHRzL2NvbnRyb2xsZXJzL1Bvc3RDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL2J1aWxkU2NyaXB0cy9jb250cm9sbGVycy9Vc2VyQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9idWlsZFNjcmlwdHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vYnVpbGRTY3JpcHRzL21vZGVscy9wb3N0LnRzIiwid2VicGFjazovLy8uL2J1aWxkU2NyaXB0cy9tb2RlbHMvdXNlci50cyIsIndlYnBhY2s6Ly8vLi9idWlsZFNjcmlwdHMvc3JjU2VydmVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImJvZHktcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29tcHJlc3Npb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb29raWUtcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImRlYnVnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImhlbG1ldFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vcmdhblwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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LG9DOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLG1DIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgeyBOZXh0RnVuY3Rpb24sIFJlcXVlc3QsIFJlc3BvbnNlLCBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IFBvc3QgfSBmcm9tICcuLi9tb2RlbHMvcG9zdCc7XG5cbmV4cG9ydCBjbGFzcyBQb3N0Q29udHJvbGxlciB7XG4gIHB1YmxpYyByb3V0ZXI6IFJvdXRlcjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnJvdXRlciA9IFJvdXRlcigpO1xuICAgIHRoaXMucm91dGVzKCk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgYWxsKFxuICAgIF86IFJlcXVlc3QsXG4gICAgcmVzOiBSZXNwb25zZSxcbiAgICBuZXh0OiBOZXh0RnVuY3Rpb24sXG4gICk6IFByb21pc2U8UmVzcG9uc2UgfCB2b2lkPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBQb3N0LmZpbmQoKTtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IGRhdGEsIG1lc3NhZ2U6ICdzdWNjZXNzJyB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgbmV4dChlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGFzeW5jIG9uZShcbiAgICByZXE6IFJlcXVlc3QsXG4gICAgcmVzOiBSZXNwb25zZSxcbiAgICBuZXh0OiBOZXh0RnVuY3Rpb24sXG4gICk6IFByb21pc2U8UmVzcG9uc2UgfCB2b2lkPiB7XG4gICAgY29uc3QgeyBzbHVnIH0gPSByZXEucGFyYW1zO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgUG9zdC5maW5kT25lKHsgc2x1ZyB9KTtcbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Bvc3Qgbm90IGZvdW5kJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBkYXRhLCBtZXNzYWdlOiAnc3VjY2VzcycgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBuZXh0KGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBjcmVhdGUoXG4gICAgcmVxOiBSZXF1ZXN0LFxuICAgIHJlczogUmVzcG9uc2UsXG4gICAgbmV4dDogTmV4dEZ1bmN0aW9uLFxuICApOiBQcm9taXNlPFJlc3BvbnNlIHwgdm9pZD4ge1xuICAgIGNvbnN0IHtcbiAgICAgIHRpdGxlLFxuICAgICAgc2x1ZyxcbiAgICAgIGNvbnRlbnQsXG4gICAgICBmZWF0dXJlZEltYWdlLFxuICAgICAgY2F0ZWdvcnksXG4gICAgICBwdWJsaXNoZWQsXG4gICAgfSA9IHJlcS5ib2R5O1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBwb3N0ID0gYXdhaXQgbmV3IFBvc3Qoe1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgc2x1ZyxcbiAgICAgICAgY29udGVudCxcbiAgICAgICAgZmVhdHVyZWRJbWFnZSxcbiAgICAgICAgY2F0ZWdvcnksXG4gICAgICAgIHB1Ymxpc2hlZCxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHBvc3Quc2F2ZSgpO1xuICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBkYXRhLCBtZXNzYWdlOiAnc3VjY2VzcycgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBuZXh0KGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBhc3luYyB1cGRhdGUoXG4gICAgcmVxOiBSZXF1ZXN0LFxuICAgIHJlczogUmVzcG9uc2UsXG4gICAgbmV4dDogTmV4dEZ1bmN0aW9uLFxuICApOiBQcm9taXNlPFJlc3BvbnNlIHwgdm9pZD4ge1xuICAgIGNvbnN0IHsgc2x1ZyB9ID0gcmVxLmJvZHk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBQb3N0LmZpbmRPbmVBbmRVcGRhdGUoeyBzbHVnIH0sIHJlcS5ib2R5KTtcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZGF0YSwgbWVzc2FnZTogJ3N1Y2Nlc3MnIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gbmV4dChlcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgZGVsZXRlKFxuICAgIHJlcTogUmVxdWVzdCxcbiAgICByZXM6IFJlc3BvbnNlLFxuICAgIG5leHQ6IE5leHRGdW5jdGlvbixcbiAgKTogUHJvbWlzZTxSZXNwb25zZSB8IHZvaWQ+IHtcbiAgICBjb25zdCB7IHNsdWcgfSA9IHJlcS5ib2R5O1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgUG9zdC5maW5kT25lQW5kUmVtb3ZlKHsgc2x1ZyB9KTtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwNCkuanNvbih7IGRhdGEsIG1lc3NhZ2U6ICdzdWNjZXNzJyB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIG5leHQoZXJyb3IubWVzc2FnZSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHJvdXRlcygpIHtcbiAgICB0aGlzLnJvdXRlci5nZXQoJy8nLCB0aGlzLmFsbCk7XG4gICAgdGhpcy5yb3V0ZXIuZ2V0KCcvOnNsdWcnLCB0aGlzLm9uZSk7XG4gICAgdGhpcy5yb3V0ZXIucG9zdCgnLycsIHRoaXMuY3JlYXRlKTtcbiAgICB0aGlzLnJvdXRlci5wdXQoJy86c2x1ZycsIHRoaXMudXBkYXRlKTtcbiAgICB0aGlzLnJvdXRlci5kZWxldGUoJy86c2x1ZycsIHRoaXMuZGVsZXRlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL21vZGVscy91c2VyJztcblxuZXhwb3J0IGNsYXNzIFVzZXJDb250cm9sbGVyIHtcbiAgcHVibGljIHJvdXRlcjogUm91dGVyO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucm91dGVyID0gUm91dGVyKCk7XG4gICAgdGhpcy5yb3V0ZXMoKTtcbiAgfVxuXG4gIHB1YmxpYyBhbGwocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKTogdm9pZCB7XG4gICAgVXNlci5maW5kKClcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IGRhdGEgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yIH0pO1xuICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBvbmUocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKTogdm9pZCB7XG4gICAgY29uc3QgeyB1c2VybmFtZSB9ID0gcmVxLnBhcmFtcztcblxuICAgIFVzZXIuZmluZE9uZSh7IHVzZXJuYW1lIH0pXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGRhdGEgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSk6IHZvaWQge1xuICAgIGNvbnN0IHsgZmlyc3ROYW1lLCBsYXN0TmFtZSwgdXNlcm5hbWUsIGVtYWlsLCBwYXNzd29yZCB9ID0gcmVxLmJvZHk7XG5cbiAgICBjb25zdCB1c2VyID0gbmV3IFVzZXIoe1xuICAgICAgZmlyc3ROYW1lLFxuICAgICAgbGFzdE5hbWUsXG4gICAgICB1c2VybmFtZSxcbiAgICAgIGVtYWlsLFxuICAgICAgcGFzc3dvcmQsXG4gICAgfSk7XG5cbiAgICB1c2VyXG4gICAgICAuc2F2ZSgpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IGRhdGEgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSk6IHZvaWQge1xuICAgIGNvbnN0IHsgdXNlcm5hbWUgfSA9IHJlcS5wYXJhbXM7XG5cbiAgICBVc2VyLmZpbmRPbmVBbmRVcGRhdGUoeyB1c2VybmFtZSB9LCByZXEuYm9keSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZGF0YSB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3IgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBkZWxldGUocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKTogdm9pZCB7XG4gICAgY29uc3QgeyB1c2VybmFtZSB9ID0gcmVxLnBhcmFtcztcblxuICAgIFVzZXIuZmluZE9uZUFuZFJlbW92ZSh7IHVzZXJuYW1lIH0pXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHJlcy5zdGF0dXMoMjA0KS5lbmQoKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3IgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8vIHNldCB1cCBvdXIgcm91dGVzXG4gIHB1YmxpYyByb3V0ZXMoKSB7XG4gICAgdGhpcy5yb3V0ZXIuZ2V0KCcvJywgdGhpcy5hbGwpO1xuICAgIHRoaXMucm91dGVyLmdldCgnLzp1c2VybmFtZScsIHRoaXMub25lKTtcbiAgICB0aGlzLnJvdXRlci5wb3N0KCcvJywgdGhpcy5jcmVhdGUpO1xuICAgIHRoaXMucm91dGVyLnB1dCgnLzp1c2VybmFtZScsIHRoaXMudXBkYXRlKTtcbiAgICB0aGlzLnJvdXRlci5kZWxldGUoJy86dXNlcm5hbWUnLCB0aGlzLmRlbGV0ZSk7XG4gIH1cbn1cbiIsIi8vIHRzbGludDpkaXNhYmxlXG5pbXBvcnQgKiBhcyBkZWJ1ZyBmcm9tICdkZWJ1Zyc7XG5pbXBvcnQgKiBhcyBodHRwIGZyb20gJ2h0dHAnO1xuXG5pbXBvcnQgU2VydmVyIGZyb20gJy4vc3JjU2VydmVyJztcblxuLy9kZWJ1ZygndHMtZXhwcmVzczpzZXJ2ZXInKTtcblxuY29uc3QgcG9ydCA9IG5vcm1hbGl6ZVBvcnQocHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwKTtcblxuY29uc29sZS5sb2coJ2hlcmUgaSBhbSBmdWNra2lnIG91dCcpO1xuU2VydmVyLnNldCgncG9ydCcsIHBvcnQpO1xuXG5jb25zb2xlLmxvZyhgU2VydmVyIGxpc3RlbmluZyBvbiBwb3J0ICR7cG9ydH1gKTtcblxuY29uc3Qgc2VydmVyID0gaHR0cC5jcmVhdGVTZXJ2ZXIoU2VydmVyKTtcbnNlcnZlci5saXN0ZW4ocG9ydCk7XG5zZXJ2ZXIub24oJ2Vycm9yJywgb25FcnJvcik7XG5zZXJ2ZXIub24oJ2xpc3RlbmluZycsIG9uTGlzdGVuaW5nKTtcblxuZnVuY3Rpb24gbm9ybWFsaXplUG9ydCh2YWw6IG51bWJlciB8IHN0cmluZyk6IG51bWJlciB8IHN0cmluZyB8IGJvb2xlYW4ge1xuICBjb25zdCBwb3J0OiBudW1iZXIgPSB0eXBlb2YgdmFsID09PSAnc3RyaW5nJyA/IHBhcnNlSW50KHZhbCwgMTApIDogdmFsO1xuICBpZiAoaXNOYU4ocG9ydCkpIHtcbiAgICByZXR1cm4gdmFsO1xuICB9IGVsc2UgaWYgKHBvcnQgPj0gMCkge1xuICAgIHJldHVybiBwb3J0O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvbkVycm9yKGVycm9yOiBOb2RlSlMuRXJybm9FeGNlcHRpb24pOiB2b2lkIHtcbiAgaWYgKGVycm9yLnN5c2NhbGwgIT09ICdsaXN0ZW4nKSB7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbiAgY29uc3QgYmluZCA9IHR5cGVvZiBwb3J0ID09PSAnc3RyaW5nJyA/ICdQaXBlICcgKyBwb3J0IDogJ1BvcnQgJyArIHBvcnQ7XG4gIHN3aXRjaCAoZXJyb3IuY29kZSkge1xuICAgIGNhc2UgJ0VBQ0NFUyc6XG4gICAgICBjb25zb2xlLmVycm9yKGAke2JpbmR9IHJlcXVpcmVzIGVsZXZhdGVkIHByaXZpbGVnZXNgKTtcbiAgICAgIHByb2Nlc3MuZXhpdCgxKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ0VBRERSSU5VU0UnOlxuICAgICAgY29uc29sZS5lcnJvcihgJHtiaW5kfSBpcyBhbHJlYWR5IGluIHVzZWApO1xuICAgICAgcHJvY2Vzcy5leGl0KDEpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IGVycm9yO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9uTGlzdGVuaW5nKCk6IHZvaWQge1xuICBjb25zdCBhZGRyID0gc2VydmVyLmFkZHJlc3MoKTtcbiAgY29uc3QgYmluZCA9IHR5cGVvZiBhZGRyID09PSAnc3RyaW5nJyA/IGBwaXBlICR7YWRkcn1gIDogYHBvcnQgJHthZGRyLnBvcnR9YDtcbiAgZGVidWcoYExpc3RlbmluZyBvbiAke2JpbmR9YCk7XG59XG4iLCJpbXBvcnQgeyBtb2RlbCwgU2NoZW1hIH0gZnJvbSAnbW9uZ29vc2UnO1xuXG4vLyBBbGwgdmFsaWRhdGlvbiBzaG91bGQgYmUgaGFuZGxlZCBpbiB0aGUgY29udHJvbGxlclxuLy8ga2VlcCBtb2RlbHMgYXMgbWluaW1hbCBhbmQgc2ltcGxlIGFzIHBvc3NpYmxlXG5cbmNvbnN0IFBvc3RTY2hlbWE6IFNjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICBjcmVhdGVkQXQ6IERhdGUsXG4gIHVwZGF0ZWRBdDogRGF0ZSxcbiAgdGl0bGU6IFN0cmluZyxcbiAgc2x1ZzogU3RyaW5nLFxuICBjb250ZW50OiBTdHJpbmcsXG4gIGZlYXR1cmVkSW1hZ2U6IFN0cmluZyxcbiAgY2F0ZWdvcnk6IFN0cmluZyxcbiAgcHVibGlzaGVkOiBCb29sZWFuLFxufSk7XG5cbmV4cG9ydCBjb25zdCBQb3N0ID0gbW9kZWwoJ1Bvc3QnLCBQb3N0U2NoZW1hKTtcbiIsImltcG9ydCB7IG1vZGVsLCBTY2hlbWEgfSBmcm9tICdtb25nb29zZSc7XG5cbmNvbnN0IFVzZXJTY2hlbWE6IFNjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICBjcmVhdGVkQXQ6IERhdGUsXG4gIHVwZGF0ZWRBdDogRGF0ZSxcbiAgZmlyc3ROYW1lOiBTdHJpbmcsXG4gIGxhc3ROYW1lOiBTdHJpbmcsXG4gIHVzZXJuYW1lOiBTdHJpbmcsXG4gIGVtYWlsOiBTdHJpbmcsXG4gIHBhc3N3b3JkOiBTdHJpbmcsXG4gIHBvc3RzOiBbXG4gICAge1xuICAgICAgdHlwZTogU2NoZW1hLlR5cGVzLk9iamVjdElkLFxuICAgICAgcmVmOiAnUG9zdCcsXG4gICAgfSxcbiAgXSxcbn0pO1xuXG5leHBvcnQgY29uc3QgVXNlciA9IG1vZGVsKCdVc2VyJywgVXNlclNjaGVtYSk7XG4iLCJpbXBvcnQgKiBhcyBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJztcbmltcG9ydCAqIGFzIGNvbXByZXNzaW9uIGZyb20gJ2NvbXByZXNzaW9uJztcbmltcG9ydCAqIGFzIGNvb2tpZVBhcnNlciBmcm9tICdjb29raWUtcGFyc2VyJztcbmltcG9ydCAqIGFzIGNvcnMgZnJvbSAnY29ycyc7XG5pbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0ICogYXMgaGVsbWV0IGZyb20gJ2hlbG1ldCc7XG5pbXBvcnQgKiBhcyBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQgKiBhcyBsb2dnZXIgZnJvbSAnbW9yZ2FuJztcblxuaW1wb3J0IHsgUG9zdENvbnRyb2xsZXIgfSBmcm9tICcuL2NvbnRyb2xsZXJzL1Bvc3RDb250cm9sbGVyJztcbmltcG9ydCB7IFVzZXJDb250cm9sbGVyIH0gZnJvbSAnLi9jb250cm9sbGVycy9Vc2VyQ29udHJvbGxlcic7XG5cbmNvbnN0IHBvc3RSb3V0ZXIgPSBuZXcgUG9zdENvbnRyb2xsZXIoKTtcbmNvbnN0IHVzZXJSb3V0ZXIgPSBuZXcgVXNlckNvbnRyb2xsZXIoKTtcblxuY2xhc3MgU2VydmVyIHtcbiAgcHVibGljIGFwcDogZXhwcmVzcy5BcHBsaWNhdGlvbjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmFwcCA9IGV4cHJlc3MoKTtcbiAgICB0aGlzLmNvbmZpZygpO1xuICAgIHRoaXMucm91dGVzKCk7XG4gIH1cblxuICBwdWJsaWMgY29uZmlnKCk6IHZvaWQge1xuICAgIGNvbnN0IE1PTkdPX1VSSTogc3RyaW5nID0gJ21vbmdvZGI6Ly9sb2NhbGhvc3QvdGVzJztcbiAgICBtb25nb29zZS5jb25uZWN0KE1PTkdPX1VSSSB8fCBwcm9jZXNzLmVudi5NT05HT0RCX1VSSSx7IHVzZU5ld1VybFBhcnNlcjogdHJ1ZSB9KTtcblxuICAgIHRoaXMuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSk7XG4gICAgdGhpcy5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcbiAgICB0aGlzLmFwcC51c2UoY29va2llUGFyc2VyKCkpO1xuICAgIHRoaXMuYXBwLnVzZShsb2dnZXIoJ2RldicpKTtcbiAgICB0aGlzLmFwcC51c2UoY29tcHJlc3Npb24oKSk7XG4gICAgdGhpcy5hcHAudXNlKGhlbG1ldCgpKTtcbiAgICB0aGlzLmFwcC51c2UoY29ycygpKTtcblxuICAgIHRoaXMuYXBwLnVzZSgoXywgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xuICAgICAgcmVzLmhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJywgJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MCcpO1xuICAgICAgcmVzLmhlYWRlcihcbiAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHMnLFxuICAgICAgICAnR0VULCBQT1NULCBQVVQsIERFTEVURSwgT1BUSU9OUycsXG4gICAgICApO1xuICAgICAgcmVzLmhlYWRlcihcbiAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnMnLFxuICAgICAgICAnT3JpZ2luLCBYLVJlcXVlc3RlZC1XaXRoLCBDb250ZW50LVR5cGUsIEFjY2VwdCwgQXV0aG9yaXphdGlvbiwgQWNjZXNzLUNvbnRyb2wtQWxsb3ctQ3JlZGVudGlhbHMnLFxuICAgICAgKTtcbiAgICAgIHJlcy5oZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LUNyZWRlbnRpYWxzJywgJ3RydWUnKTtcbiAgICAgIG5leHQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyByb3V0ZXMoKTogdm9pZCB7XG4gICAgY29uc3Qgcm91dGVyOiBleHByZXNzLlJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG4gICAgdGhpcy5hcHAudXNlKCcvJywgcm91dGVyKTtcbiAgICB0aGlzLmFwcC51c2UoJy9wb3N0cycsIHBvc3RSb3V0ZXIucm91dGVyKTtcbiAgICB0aGlzLmFwcC51c2UoJy91c2VycycsIHVzZXJSb3V0ZXIucm91dGVyKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgU2VydmVyKCkuYXBwO1xuXG5cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvbXByZXNzaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvb2tpZS1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkZWJ1Z1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImhlbG1ldFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vcmdhblwiKTsiXSwic291cmNlUm9vdCI6IiJ9