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
        console.log('here');
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYnVpbGRTY3JpcHRzL2NvbnRyb2xsZXJzL1Bvc3RDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL2J1aWxkU2NyaXB0cy9jb250cm9sbGVycy9Vc2VyQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9idWlsZFNjcmlwdHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vYnVpbGRTY3JpcHRzL21vZGVscy9wb3N0LnRzIiwid2VicGFjazovLy8uL2J1aWxkU2NyaXB0cy9tb2RlbHMvdXNlci50cyIsIndlYnBhY2s6Ly8vLi9idWlsZFNjcmlwdHMvc3JjU2VydmVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImJvZHktcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29tcHJlc3Npb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb29raWUtcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImRlYnVnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImhlbG1ldFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vcmdhblwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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Ozs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLG1DIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgeyBOZXh0RnVuY3Rpb24sIFJlcXVlc3QsIFJlc3BvbnNlLCBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IFBvc3QgfSBmcm9tICcuLi9tb2RlbHMvcG9zdCc7XG5cbmV4cG9ydCBjbGFzcyBQb3N0Q29udHJvbGxlciB7XG4gIHB1YmxpYyByb3V0ZXI6IFJvdXRlcjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnJvdXRlciA9IFJvdXRlcigpO1xuICAgIHRoaXMucm91dGVzKCk7XG4gICAgY29uc29sZS5sb2coJ2hlcmUnKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBhbGwoXG4gICAgXzogUmVxdWVzdCxcbiAgICByZXM6IFJlc3BvbnNlLFxuICAgIG5leHQ6IE5leHRGdW5jdGlvbixcbiAgKTogUHJvbWlzZTxSZXNwb25zZSB8IHZvaWQ+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IFBvc3QuZmluZCgpO1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZGF0YSwgbWVzc2FnZTogJ3N1Y2Nlc3MnIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBuZXh0KGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgb25lKFxuICAgIHJlcTogUmVxdWVzdCxcbiAgICByZXM6IFJlc3BvbnNlLFxuICAgIG5leHQ6IE5leHRGdW5jdGlvbixcbiAgKTogUHJvbWlzZTxSZXNwb25zZSB8IHZvaWQ+IHtcbiAgICBjb25zdCB7IHNsdWcgfSA9IHJlcS5wYXJhbXM7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBQb3N0LmZpbmRPbmUoeyBzbHVnIH0pO1xuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUG9zdCBub3QgZm91bmQnKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IGRhdGEsIG1lc3NhZ2U6ICdzdWNjZXNzJyB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIG5leHQoZXJyb3IubWVzc2FnZSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGFzeW5jIGNyZWF0ZShcbiAgICByZXE6IFJlcXVlc3QsXG4gICAgcmVzOiBSZXNwb25zZSxcbiAgICBuZXh0OiBOZXh0RnVuY3Rpb24sXG4gICk6IFByb21pc2U8UmVzcG9uc2UgfCB2b2lkPiB7XG4gICAgY29uc3Qge1xuICAgICAgdGl0bGUsXG4gICAgICBzbHVnLFxuICAgICAgY29udGVudCxcbiAgICAgIGZlYXR1cmVkSW1hZ2UsXG4gICAgICBjYXRlZ29yeSxcbiAgICAgIHB1Ymxpc2hlZCxcbiAgICB9ID0gcmVxLmJvZHk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHBvc3QgPSBhd2FpdCBuZXcgUG9zdCh7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBzbHVnLFxuICAgICAgICBjb250ZW50LFxuICAgICAgICBmZWF0dXJlZEltYWdlLFxuICAgICAgICBjYXRlZ29yeSxcbiAgICAgICAgcHVibGlzaGVkLFxuICAgICAgfSk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcG9zdC5zYXZlKCk7XG4gICAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IGRhdGEsIG1lc3NhZ2U6ICdzdWNjZXNzJyB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIG5leHQoZXJyb3IubWVzc2FnZSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGFzeW5jIHVwZGF0ZShcbiAgICByZXE6IFJlcXVlc3QsXG4gICAgcmVzOiBSZXNwb25zZSxcbiAgICBuZXh0OiBOZXh0RnVuY3Rpb24sXG4gICk6IFByb21pc2U8UmVzcG9uc2UgfCB2b2lkPiB7XG4gICAgY29uc3QgeyBzbHVnIH0gPSByZXEuYm9keTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IFBvc3QuZmluZE9uZUFuZFVwZGF0ZSh7IHNsdWcgfSwgcmVxLmJvZHkpO1xuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBkYXRhLCBtZXNzYWdlOiAnc3VjY2VzcycgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBuZXh0KGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBkZWxldGUoXG4gICAgcmVxOiBSZXF1ZXN0LFxuICAgIHJlczogUmVzcG9uc2UsXG4gICAgbmV4dDogTmV4dEZ1bmN0aW9uLFxuICApOiBQcm9taXNlPFJlc3BvbnNlIHwgdm9pZD4ge1xuICAgIGNvbnN0IHsgc2x1ZyB9ID0gcmVxLmJvZHk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBQb3N0LmZpbmRPbmVBbmRSZW1vdmUoeyBzbHVnIH0pO1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjA0KS5qc29uKHsgZGF0YSwgbWVzc2FnZTogJ3N1Y2Nlc3MnIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gbmV4dChlcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcm91dGVzKCkge1xuICAgIHRoaXMucm91dGVyLmdldCgnLycsIHRoaXMuYWxsKTtcbiAgICB0aGlzLnJvdXRlci5nZXQoJy86c2x1ZycsIHRoaXMub25lKTtcbiAgICB0aGlzLnJvdXRlci5wb3N0KCcvJywgdGhpcy5jcmVhdGUpO1xuICAgIHRoaXMucm91dGVyLnB1dCgnLzpzbHVnJywgdGhpcy51cGRhdGUpO1xuICAgIHRoaXMucm91dGVyLmRlbGV0ZSgnLzpzbHVnJywgdGhpcy5kZWxldGUpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSwgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vbW9kZWxzL3VzZXInO1xuXG5leHBvcnQgY2xhc3MgVXNlckNvbnRyb2xsZXIge1xuICBwdWJsaWMgcm91dGVyOiBSb3V0ZXI7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5yb3V0ZXIgPSBSb3V0ZXIoKTtcbiAgICB0aGlzLnJvdXRlcygpO1xuICB9XG5cbiAgcHVibGljIGFsbChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpOiB2b2lkIHtcbiAgICBVc2VyLmZpbmQoKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZGF0YSB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3IgfSk7XG4gICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG9uZShyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpOiB2b2lkIHtcbiAgICBjb25zdCB7IHVzZXJuYW1lIH0gPSByZXEucGFyYW1zO1xuXG4gICAgVXNlci5maW5kT25lKHsgdXNlcm5hbWUgfSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZGF0YSB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3IgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGUocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKTogdm9pZCB7XG4gICAgY29uc3QgeyBmaXJzdE5hbWUsIGxhc3ROYW1lLCB1c2VybmFtZSwgZW1haWwsIHBhc3N3b3JkIH0gPSByZXEuYm9keTtcblxuICAgIGNvbnN0IHVzZXIgPSBuZXcgVXNlcih7XG4gICAgICBmaXJzdE5hbWUsXG4gICAgICBsYXN0TmFtZSxcbiAgICAgIHVzZXJuYW1lLFxuICAgICAgZW1haWwsXG4gICAgICBwYXNzd29yZCxcbiAgICB9KTtcblxuICAgIHVzZXJcbiAgICAgIC5zYXZlKClcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgZGF0YSB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3IgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGUocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKTogdm9pZCB7XG4gICAgY29uc3QgeyB1c2VybmFtZSB9ID0gcmVxLnBhcmFtcztcblxuICAgIFVzZXIuZmluZE9uZUFuZFVwZGF0ZSh7IHVzZXJuYW1lIH0sIHJlcS5ib2R5KVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBkYXRhIH0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvciB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGRlbGV0ZShyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpOiB2b2lkIHtcbiAgICBjb25zdCB7IHVzZXJuYW1lIH0gPSByZXEucGFyYW1zO1xuXG4gICAgVXNlci5maW5kT25lQW5kUmVtb3ZlKHsgdXNlcm5hbWUgfSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgcmVzLnN0YXR1cygyMDQpLmVuZCgpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvciB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLy8gc2V0IHVwIG91ciByb3V0ZXNcbiAgcHVibGljIHJvdXRlcygpIHtcbiAgICB0aGlzLnJvdXRlci5nZXQoJy8nLCB0aGlzLmFsbCk7XG4gICAgdGhpcy5yb3V0ZXIuZ2V0KCcvOnVzZXJuYW1lJywgdGhpcy5vbmUpO1xuICAgIHRoaXMucm91dGVyLnBvc3QoJy8nLCB0aGlzLmNyZWF0ZSk7XG4gICAgdGhpcy5yb3V0ZXIucHV0KCcvOnVzZXJuYW1lJywgdGhpcy51cGRhdGUpO1xuICAgIHRoaXMucm91dGVyLmRlbGV0ZSgnLzp1c2VybmFtZScsIHRoaXMuZGVsZXRlKTtcbiAgfVxufVxuIiwiLy8gdHNsaW50OmRpc2FibGVcbmltcG9ydCAqIGFzIGRlYnVnIGZyb20gJ2RlYnVnJztcbmltcG9ydCAqIGFzIGh0dHAgZnJvbSAnaHR0cCc7XG5pbXBvcnQgU2VydmVyIGZyb20gJy4vc3JjU2VydmVyJztcblxuLy9kZWJ1ZygndHMtZXhwcmVzczpzZXJ2ZXInKTtcblxuY29uc3QgcG9ydCA9IG5vcm1hbGl6ZVBvcnQocHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwKTtcblxuXG5TZXJ2ZXIuc2V0KCdwb3J0JywgcG9ydCk7XG5cbmNvbnNvbGUubG9nKGBTZXJ2ZXIgbGlzdGVuaW5nIG9uIHBvcnQgJHtwb3J0fWApO1xuXG5jb25zdCBzZXJ2ZXIgPSBodHRwLmNyZWF0ZVNlcnZlcihTZXJ2ZXIpO1xuc2VydmVyLmxpc3Rlbihwb3J0KTtcbnNlcnZlci5vbignZXJyb3InLCBvbkVycm9yKTtcbnNlcnZlci5vbignbGlzdGVuaW5nJywgb25MaXN0ZW5pbmcpO1xuXG5mdW5jdGlvbiBub3JtYWxpemVQb3J0KHZhbDogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyIHwgc3RyaW5nIHwgYm9vbGVhbiB7XG4gIGNvbnN0IHBvcnQ6IG51bWJlciA9IHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnID8gcGFyc2VJbnQodmFsLCAxMCkgOiB2YWw7XG4gIGlmIChpc05hTihwb3J0KSkge1xuICAgIHJldHVybiB2YWw7XG4gIH0gZWxzZSBpZiAocG9ydCA+PSAwKSB7XG4gICAgcmV0dXJuIHBvcnQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9uRXJyb3IoZXJyb3I6IE5vZGVKUy5FcnJub0V4Y2VwdGlvbik6IHZvaWQge1xuICBpZiAoZXJyb3Iuc3lzY2FsbCAhPT0gJ2xpc3RlbicpIHtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxuICBjb25zdCBiaW5kID0gdHlwZW9mIHBvcnQgPT09ICdzdHJpbmcnID8gJ1BpcGUgJyArIHBvcnQgOiAnUG9ydCAnICsgcG9ydDtcbiAgc3dpdGNoIChlcnJvci5jb2RlKSB7XG4gICAgY2FzZSAnRUFDQ0VTJzpcbiAgICAgIGNvbnNvbGUuZXJyb3IoYCR7YmluZH0gcmVxdWlyZXMgZWxldmF0ZWQgcHJpdmlsZWdlc2ApO1xuICAgICAgcHJvY2Vzcy5leGl0KDEpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnRUFERFJJTlVTRSc6XG4gICAgICBjb25zb2xlLmVycm9yKGAke2JpbmR9IGlzIGFscmVhZHkgaW4gdXNlYCk7XG4gICAgICBwcm9jZXNzLmV4aXQoMSk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgZXJyb3I7XG4gIH1cbn1cblxuZnVuY3Rpb24gb25MaXN0ZW5pbmcoKTogdm9pZCB7XG4gIGNvbnN0IGFkZHIgPSBzZXJ2ZXIuYWRkcmVzcygpO1xuICBjb25zdCBiaW5kID0gdHlwZW9mIGFkZHIgPT09ICdzdHJpbmcnID8gYHBpcGUgJHthZGRyfWAgOiBgcG9ydCAke2FkZHIucG9ydH1gO1xuICBkZWJ1ZyhgTGlzdGVuaW5nIG9uICR7YmluZH1gKTtcbn1cbiIsImltcG9ydCB7IG1vZGVsLCBTY2hlbWEgfSBmcm9tICdtb25nb29zZSc7XG5cbi8vIEFsbCB2YWxpZGF0aW9uIHNob3VsZCBiZSBoYW5kbGVkIGluIHRoZSBjb250cm9sbGVyXG4vLyBrZWVwIG1vZGVscyBhcyBtaW5pbWFsIGFuZCBzaW1wbGUgYXMgcG9zc2libGVcblxuY29uc3QgUG9zdFNjaGVtYTogU2NoZW1hID0gbmV3IFNjaGVtYSh7XG4gIGNyZWF0ZWRBdDogRGF0ZSxcbiAgdXBkYXRlZEF0OiBEYXRlLFxuICB0aXRsZTogU3RyaW5nLFxuICBzbHVnOiBTdHJpbmcsXG4gIGNvbnRlbnQ6IFN0cmluZyxcbiAgZmVhdHVyZWRJbWFnZTogU3RyaW5nLFxuICBjYXRlZ29yeTogU3RyaW5nLFxuICBwdWJsaXNoZWQ6IEJvb2xlYW4sXG59KTtcblxuZXhwb3J0IGNvbnN0IFBvc3QgPSBtb2RlbCgnUG9zdCcsIFBvc3RTY2hlbWEpO1xuIiwiaW1wb3J0IHsgbW9kZWwsIFNjaGVtYSB9IGZyb20gJ21vbmdvb3NlJztcblxuY29uc3QgVXNlclNjaGVtYTogU2NoZW1hID0gbmV3IFNjaGVtYSh7XG4gIGNyZWF0ZWRBdDogRGF0ZSxcbiAgdXBkYXRlZEF0OiBEYXRlLFxuICBmaXJzdE5hbWU6IFN0cmluZyxcbiAgbGFzdE5hbWU6IFN0cmluZyxcbiAgdXNlcm5hbWU6IFN0cmluZyxcbiAgZW1haWw6IFN0cmluZyxcbiAgcGFzc3dvcmQ6IFN0cmluZyxcbiAgcG9zdHM6IFtcbiAgICB7XG4gICAgICB0eXBlOiBTY2hlbWEuVHlwZXMuT2JqZWN0SWQsXG4gICAgICByZWY6ICdQb3N0JyxcbiAgICB9LFxuICBdLFxufSk7XG5cbmV4cG9ydCBjb25zdCBVc2VyID0gbW9kZWwoJ1VzZXInLCBVc2VyU2NoZW1hKTtcbiIsImltcG9ydCAqIGFzIGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInO1xuaW1wb3J0ICogYXMgY29tcHJlc3Npb24gZnJvbSAnY29tcHJlc3Npb24nO1xuaW1wb3J0ICogYXMgY29va2llUGFyc2VyIGZyb20gJ2Nvb2tpZS1wYXJzZXInO1xuaW1wb3J0ICogYXMgY29ycyBmcm9tICdjb3JzJztcbmltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgKiBhcyBoZWxtZXQgZnJvbSAnaGVsbWV0JztcbmltcG9ydCAqIGFzIG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCAqIGFzIGxvZ2dlciBmcm9tICdtb3JnYW4nO1xuLy9pbXBvcnQgKiBhcyByb3V0ZXIgZnJvbSAnLi9yb3V0ZXInO1xuaW1wb3J0ICogYXMgZXZuY29uZiBmcm9tICdkb3RlbnYnO1xuXG5pbXBvcnQgeyBQb3N0Q29udHJvbGxlciB9IGZyb20gJy4vY29udHJvbGxlcnMvUG9zdENvbnRyb2xsZXInO1xuaW1wb3J0IHsgVXNlckNvbnRyb2xsZXIgfSBmcm9tICcuL2NvbnRyb2xsZXJzL1VzZXJDb250cm9sbGVyJztcblxuY29uc3QgcG9zdFJvdXRlciA9IG5ldyBQb3N0Q29udHJvbGxlcigpO1xuY29uc3QgdXNlclJvdXRlciA9IG5ldyBVc2VyQ29udHJvbGxlcigpO1xuXG5jbGFzcyBTZXJ2ZXIge1xuICBwdWJsaWMgYXBwOiBleHByZXNzLkFwcGxpY2F0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYXBwID0gZXhwcmVzcygpO1xuICAgIHRoaXMuY29uZmlnKCk7XG4gICAgdGhpcy5yb3V0ZXMoKTtcbiAgfVxuXG4gIHB1YmxpYyBjb25maWcoKTogdm9pZCB7XG4gICAgY29uc3QgTU9OR09fVVJJOiBzdHJpbmcgPSAnbW9uZ29kYjovL2xvY2FsaG9zdC90ZXMnO1xuICAgIG1vbmdvb3NlLmNvbm5lY3QoTU9OR09fVVJJIHx8IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJLHsgdXNlTmV3VXJsUGFyc2VyOiB0cnVlIH0pO1xuXG4gICAgdGhpcy5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiB0cnVlIH0pKTtcbiAgICB0aGlzLmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xuICAgIHRoaXMuYXBwLnVzZShjb29raWVQYXJzZXIoKSk7XG4gICAgdGhpcy5hcHAudXNlKGxvZ2dlcignZGV2JykpO1xuICAgIHRoaXMuYXBwLnVzZShjb21wcmVzc2lvbigpKTtcbiAgICB0aGlzLmFwcC51c2UoaGVsbWV0KCkpO1xuICAgIHRoaXMuYXBwLnVzZShjb3JzKCkpO1xuXG4gICAgdGhpcy5hcHAudXNlKChfLCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XG4gICAgICByZXMuaGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCAnaHR0cDovL2xvY2FsaG9zdDo4MDgwJyk7XG4gICAgICByZXMuaGVhZGVyKFxuICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kcycsXG4gICAgICAgICdHRVQsIFBPU1QsIFBVVCwgREVMRVRFLCBPUFRJT05TJyxcbiAgICAgICk7XG4gICAgICByZXMuaGVhZGVyKFxuICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycycsXG4gICAgICAgICdPcmlnaW4sIFgtUmVxdWVzdGVkLVdpdGgsIENvbnRlbnQtVHlwZSwgQWNjZXB0LCBBdXRob3JpemF0aW9uLCBBY2Nlc3MtQ29udHJvbC1BbGxvdy1DcmVkZW50aWFscycsXG4gICAgICApO1xuICAgICAgcmVzLmhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctQ3JlZGVudGlhbHMnLCAndHJ1ZScpO1xuICAgICAgbmV4dCgpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHJvdXRlcygpOiB2b2lkIHtcbiAgICBjb25zdCByb3V0ZXI6IGV4cHJlc3MuUm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcbiAgICB0aGlzLmFwcC51c2UoJy8nLCByb3V0ZXIpO1xuICAgIHRoaXMuYXBwLnVzZSgnL3Bvc3RzJywgIHBvc3RSb3V0ZXIucm91dGVyKTtcbiAgICB0aGlzLmFwcC51c2UoJy91c2VycycsIHVzZXJSb3V0ZXIucm91dGVyKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgU2VydmVyKCkuYXBwO1xuXG5cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvbXByZXNzaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvb2tpZS1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkZWJ1Z1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImhlbG1ldFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vcmdhblwiKTsiXSwic291cmNlUm9vdCI6IiJ9