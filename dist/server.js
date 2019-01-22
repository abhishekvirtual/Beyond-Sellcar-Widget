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

/***/ "./buildScripts/controllers/carPost.ts":
/*!*********************************************!*\
  !*** ./buildScripts/controllers/carPost.ts ***!
  \*********************************************/
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
const admin = __webpack_require__(/*! firebase-admin */ "firebase-admin");
class CarPost {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { carColour, customerName, carMake, phoneNumber, carMileage, canDirectSale, carYear, carModel, email } = req.body;
            try {
                var db = admin.database().ref();
                var usersRef = db.child("users");
                const data = usersRef.push({
                    "carColour": req.body.carColour,
                    "customerName": req.body.customerName,
                    "carMake": req.body.carMake,
                    "phoneNumber": req.body.phoneNumber,
                    "carMileage": req.body.carMileage,
                    "canDirectSale": req.body.canDirectSale,
                    "carYear": req.body.carYear,
                    "carModel": req.body.carModel,
                    "email": req.body.email,
                });
                res.status(201).json({ data, message: 'success' });
            }
            catch (error) {
                return next(error.message);
            }
        });
    }
    routes() {
        this.router.post('/car', this.create);
    }
}
exports.CarPost = CarPost;


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
srcServer_1.default.set('port', port);
console.log(`Server listening on port ${port}`);
const server = http.createServer(srcServer_1.default);
server.listen(port);
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
const carPost_1 = __webpack_require__(/*! ./controllers/carPost */ "./buildScripts/controllers/carPost.ts");
const carPostRouter = new carPost_1.CarPost();
class Server {
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }
    config() {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: "https://crafty-cairn-194009.firebaseio.com"
        });
        const db = admin.firestore();
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
        this.app.use('/postCar', carPostRouter.router);
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
	"project_id": "crafty-cairn-194009",
	"private_key_id": "9250eec57c4c707bbc931be0d858d97ced691708",
	"private_key": "-----BEGIN PRIVATE KEY-----\nMIIEuwIBADANBgkqhkiG9w0BAQEFAASCBKUwggShAgEAAoIBAQC3LAeKJ8K9JbG6\nqObKHrz/IB1bns9I6k9ZU08F+qMwMTbQ92SsyWKGwgm0Bm9BwAcR1LK02VQqJc/0\nzV75AhfhSLDUrqguZL8y6FBy7zlPCeNnNxfAbDo/T+EGaEeq8Rt5gfrVYj8aN/kq\nzNhFy4GYXG4bFiDfHMuykiDXqvvBzc6p+bwWgcO11p3/CvXrJW4z1XNCcDUetjnd\nimuHwgL/ikrIlhgYaZXfo17ypGIs6sRvov7GldkjKqnOKsLO4rhJB43vNBHlnaol\nXNPh+XLpY+mx1VvVRT8Ere7hwBl/JPygZT0GWaOUJF+JBk+H8s7B6NyV8gDIgu2z\n5RrjtqphAgMBAAECgf9mHdFz5fUrE7ALGCSxPtvZ9WG5u6bs6aczxH+Rezj7zZM7\niHHfo7cU2eYxSBPj6DnKT/7s/3RAxl0l7hPVjIpGudijKakPt1MF8l6cVx87LHCq\nCozGAYOvtXGPMIDc23shZLxJhKsAsVlBCWjzD8LPN3Ot6sRV6RiTyUE7E8NNHsXy\ncdzw6I63OW7ZAmJn64EhfKuBmMYNmL1ZJmvp7mLvjv1mywM7VzrpN5+ct+pYktgg\nuvv1feK9uWqYULr/jEYukI6QA+PozKdyPcSX6ZZIu1GRQXbgzlFHr8Xyj28FirLI\nPX0NmK61fiDq6aDCXYTzIMEDhr5kBiGbjJyX96ECgYEA2enQFWSo6ze4uSNmAPH6\n5tStlPpvydvFDdV7wKIgRvHS5K8/OwBLQQR6Fyl1BWxl/QQ69e9es51KM+JRGEje\n90LtKQxPmFqIj4FzXIcyRYT2WKmPr9KEbOReh2VC/2xzDxx0c+rRY7dQiiB9AsT9\niQ7qu1KOwV8nEdqfK+18r9kCgYEA1y/FMWkKz2ki8Vm5c+7izyk6Ybd//ldBeVkg\nQI8IB3QquX3OQb01JkVN5wiZXIyKyArkdDC56HJXnTnrzp+AoSfcTQiKdRW79cc1\nZyhW5hP9186yHRTtcb690eKSB8UgoonNyB9Acx09muEaAcXhJqQHWIFWVtAr039I\n6KVuwckCgYEArEilESTiQAVv8D/CV6D4wyMGkbBmTWuJoeRU0PndFvn9yHudPCKB\nXMgTVtiaAk2vXJjJnMNBVjRXBCo7/z0tusOZCUkIbOW27e5krJTe9AOpWHPGfDWu\nKQFskxNGIvc1CI9wqmzOW04FSQ9ihpwD7yZyAuPEpbF7DCySh4JdgBECgYAVwmPb\nSjbooEYDR8JkAbz3m8CmjuqnamVZgvSq8ouqTUngteL8bMiKFSn6ebkgTane7pMJ\nWMADzEQlxuycWS6lnSU+uOVfT5JRGRLCWqbm3xClGOaT4EDeZp5FMfb4SCuzo+Gm\nIdrfiQ5osehyU3Mf+Cgx/+oeHzC/UzipJclcWQKBgCQXEd/hxx8DH8wOmSW+JBZe\nRgCGASfImrfx50B22k1ot7D4joq06jkQDF0BiUoAUKZPzEus9YgtH3wmUnwBAIN+\nt3css8cyERqUI6sdu5GSjn7VQOEBQMiTXUb27UyUQEP1/pNb6VPWsRu/rVCF+y5f\nVgomrJEyTiQL50fJaMAi\n-----END PRIVATE KEY-----\n",
	"client_email": "firebase-adminsdk-4smgp@crafty-cairn-194009.iam.gserviceaccount.com",
	"client_id": "102184510675183886557",
	"auth_uri": "https://accounts.google.com/o/oauth2/auth",
	"token_uri": "https://oauth2.googleapis.com/token",
	"auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
	"client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-4smgp%40crafty-cairn-194009.iam.gserviceaccount.com"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYnVpbGRTY3JpcHRzL2NvbnRyb2xsZXJzL2NhclBvc3QudHMiLCJ3ZWJwYWNrOi8vLy4vYnVpbGRTY3JpcHRzL2luZGV4LnRzIiwid2VicGFjazovLy8uL2J1aWxkU2NyaXB0cy9zcmNTZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZUFjY291bnRLZXkuanNvbjUiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYm9keS1wYXJzZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb21wcmVzc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvb2tpZS1wYXJzZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZGVidWdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UtYWRtaW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJoZWxtZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJodHRwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9yZ2FuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QU0sRUFBRSxDQUFDLEdBQUcsQ0FBQzs7Ozs7Ozs7Ozs7O0FDaEVoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxpQyIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IHsgTmV4dEZ1bmN0aW9uLCBSZXF1ZXN0LCBSZXNwb25zZSwgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgKiBhcyBhZG1pbiBmcm9tICdmaXJlYmFzZS1hZG1pbic7XG5cblxuZXhwb3J0IGNsYXNzIENhclBvc3Qge1xuICBwdWJsaWMgcm91dGVyOiBSb3V0ZXI7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5yb3V0ZXIgPSBSb3V0ZXIoKTtcbiAgICB0aGlzLnJvdXRlcygpO1xuICB9XG4gIHB1YmxpYyBhc3luYyBjcmVhdGUoXG4gICAgcmVxOiBSZXF1ZXN0LFxuICAgIHJlczogUmVzcG9uc2UsXG4gICAgbmV4dDogTmV4dEZ1bmN0aW9uLFxuICApOiBQcm9taXNlPFJlc3BvbnNlIHwgdm9pZD4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGNhckNvbG91cixjdXN0b21lck5hbWUsY2FyTWFrZSxwaG9uZU51bWJlcixjYXJNaWxlYWdlLGNhbkRpcmVjdFNhbGUsY2FyWWVhcixjYXJNb2RlbCxlbWFpbFxuICAgIH0gPSByZXEuYm9keTtcbiAgICB0cnkge1xuICAgICAgdmFyIGRiID0gYWRtaW4uZGF0YWJhc2UoKS5yZWYoKTtcbiAgICAgIHZhciB1c2Vyc1JlZiA9IGRiLmNoaWxkKFwidXNlcnNcIik7XG4gICAgICBjb25zdCBkYXRhID0gdXNlcnNSZWYucHVzaCh7XG4gICAgICAgXCJjYXJDb2xvdXJcIjpyZXEuYm9keS5jYXJDb2xvdXIsXG4gICAgICAgXCJjdXN0b21lck5hbWVcIjpyZXEuYm9keS5jdXN0b21lck5hbWUsXG4gICAgICAgXCJjYXJNYWtlXCI6cmVxLmJvZHkuY2FyTWFrZSxcbiAgICAgICBcInBob25lTnVtYmVyXCI6cmVxLmJvZHkucGhvbmVOdW1iZXIsXG4gICAgICAgXCJjYXJNaWxlYWdlXCI6cmVxLmJvZHkuY2FyTWlsZWFnZSxcbiAgICAgICBcImNhbkRpcmVjdFNhbGVcIjpyZXEuYm9keS5jYW5EaXJlY3RTYWxlLFxuICAgICAgIFwiY2FyWWVhclwiOnJlcS5ib2R5LmNhclllYXIsXG4gICAgICAgXCJjYXJNb2RlbFwiOnJlcS5ib2R5LmNhck1vZGVsLFxuICAgICAgIFwiZW1haWxcIjpyZXEuYm9keS5lbWFpbCxcbiAgICAgIH0pO1xuICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBkYXRhLCBtZXNzYWdlOiAnc3VjY2VzcycgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBuZXh0KGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByb3V0ZXMoKSB7XG4gICAgdGhpcy5yb3V0ZXIucG9zdCgnL2NhcicsIHRoaXMuY3JlYXRlKTtcbiAgfVxufVxuIiwiLy8gdHNsaW50OmRpc2FibGVcbmltcG9ydCAqIGFzIGRlYnVnIGZyb20gJ2RlYnVnJztcbmltcG9ydCAqIGFzIGh0dHAgZnJvbSAnaHR0cCc7XG5pbXBvcnQgU2VydmVyIGZyb20gJy4vc3JjU2VydmVyJztcblxuLy9kZWJ1ZygndHMtZXhwcmVzczpzZXJ2ZXInKTtcblxuY29uc3QgcG9ydCA9IG5vcm1hbGl6ZVBvcnQocHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwKTtcblxuXG5TZXJ2ZXIuc2V0KCdwb3J0JywgcG9ydCk7XG5cbmNvbnNvbGUubG9nKGBTZXJ2ZXIgbGlzdGVuaW5nIG9uIHBvcnQgJHtwb3J0fWApO1xuXG5jb25zdCBzZXJ2ZXIgPSBodHRwLmNyZWF0ZVNlcnZlcihTZXJ2ZXIpO1xuc2VydmVyLmxpc3Rlbihwb3J0KTtcbnNlcnZlci5vbignZXJyb3InLCBvbkVycm9yKTtcbnNlcnZlci5vbignbGlzdGVuaW5nJywgb25MaXN0ZW5pbmcpO1xuXG5mdW5jdGlvbiBub3JtYWxpemVQb3J0KHZhbDogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyIHwgc3RyaW5nIHwgYm9vbGVhbiB7XG4gIGNvbnN0IHBvcnQ6IG51bWJlciA9IHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnID8gcGFyc2VJbnQodmFsLCAxMCkgOiB2YWw7XG4gIGlmIChpc05hTihwb3J0KSkge1xuICAgIHJldHVybiB2YWw7XG4gIH0gZWxzZSBpZiAocG9ydCA+PSAwKSB7XG4gICAgcmV0dXJuIHBvcnQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9uRXJyb3IoZXJyb3I6IE5vZGVKUy5FcnJub0V4Y2VwdGlvbik6IHZvaWQge1xuICBpZiAoZXJyb3Iuc3lzY2FsbCAhPT0gJ2xpc3RlbicpIHtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxuICBjb25zdCBiaW5kID0gdHlwZW9mIHBvcnQgPT09ICdzdHJpbmcnID8gJ1BpcGUgJyArIHBvcnQgOiAnUG9ydCAnICsgcG9ydDtcbiAgc3dpdGNoIChlcnJvci5jb2RlKSB7XG4gICAgY2FzZSAnRUFDQ0VTJzpcbiAgICAgIGNvbnNvbGUuZXJyb3IoYCR7YmluZH0gcmVxdWlyZXMgZWxldmF0ZWQgcHJpdmlsZWdlc2ApO1xuICAgICAgcHJvY2Vzcy5leGl0KDEpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnRUFERFJJTlVTRSc6XG4gICAgICBjb25zb2xlLmVycm9yKGAke2JpbmR9IGlzIGFscmVhZHkgaW4gdXNlYCk7XG4gICAgICBwcm9jZXNzLmV4aXQoMSk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgZXJyb3I7XG4gIH1cbn1cblxuZnVuY3Rpb24gb25MaXN0ZW5pbmcoKTogdm9pZCB7XG4gIGNvbnN0IGFkZHIgPSBzZXJ2ZXIuYWRkcmVzcygpO1xuICBjb25zdCBiaW5kID0gdHlwZW9mIGFkZHIgPT09ICdzdHJpbmcnID8gYHBpcGUgJHthZGRyfWAgOiBgcG9ydCAke2FkZHIucG9ydH1gO1xuICBkZWJ1ZyhgTGlzdGVuaW5nIG9uICR7YmluZH1gKTtcbn1cbiIsImltcG9ydCAqIGFzIGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInO1xuaW1wb3J0ICogYXMgY29tcHJlc3Npb24gZnJvbSAnY29tcHJlc3Npb24nO1xuaW1wb3J0ICogYXMgY29va2llUGFyc2VyIGZyb20gJ2Nvb2tpZS1wYXJzZXInO1xuaW1wb3J0ICogYXMgY29ycyBmcm9tICdjb3JzJztcbmltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgKiBhcyBoZWxtZXQgZnJvbSAnaGVsbWV0JztcbmltcG9ydCAqIGFzIG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCAqIGFzIGxvZ2dlciBmcm9tICdtb3JnYW4nO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcbi8vaW1wb3J0ICogYXMgcm91dGVyIGZyb20gJy4vcm91dGVyJztcbmltcG9ydCAqIGFzIGV2bmNvbmYgZnJvbSAnZG90ZW52JztcblxuaW1wb3J0ICogYXMgYWRtaW4gZnJvbSAnZmlyZWJhc2UtYWRtaW4nO1xubGV0IHNlcnZpY2VBY2NvdW50ID0gcmVxdWlyZSgnIC4vLi4vLi4vc2VydmljZUFjY291bnRLZXkuanNvbjUnKTtcbi8vbGV0IGFjY291bnQgPSByZXF1aXJlKCcuLi9zZXJ2aWNlQWNjb3VudEtleS5qc29uJyk7XG5cbmltcG9ydCB7IENhclBvc3QgfSBmcm9tICcuL2NvbnRyb2xsZXJzL2NhclBvc3QnO1xuY29uc3QgY2FyUG9zdFJvdXRlciA9IG5ldyBDYXJQb3N0KCk7XG5cbmNsYXNzIFNlcnZlciB7XG4gIHB1YmxpYyBhcHA6IGV4cHJlc3MuQXBwbGljYXRpb247XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYXBwID0gZXhwcmVzcygpO1xuICAgIHRoaXMuY29uZmlnKCk7XG4gICAgdGhpcy5yb3V0ZXMoKTtcbiAgfVxuICBwdWJsaWMgY29uZmlnKCk6IHZvaWQge1xuICAgIGFkbWluLmluaXRpYWxpemVBcHAoe1xuICAgICAgY3JlZGVudGlhbDphZG1pbi5jcmVkZW50aWFsLmNlcnQoc2VydmljZUFjY291bnQpLFxuICAgICAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9jcmFmdHktY2Fpcm4tMTk0MDA5LmZpcmViYXNlaW8uY29tXCJcbiAgICB9KTtcblxuICAgIGNvbnN0IGRiID0gYWRtaW4uZmlyZXN0b3JlKCk7XG4gICAgdGhpcy5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcbiAgICB0aGlzLmFwcC51c2UoY29va2llUGFyc2VyKCkpO1xuICAgIHRoaXMuYXBwLnVzZShsb2dnZXIoJ2RldicpKTtcbiAgICB0aGlzLmFwcC51c2UoY29tcHJlc3Npb24oKSk7XG4gICAgdGhpcy5hcHAudXNlKGhlbG1ldCgpKTtcbiAgICB0aGlzLmFwcC51c2UoY29ycygpKTtcbiAgICB0aGlzLmFwcC51c2UoKF8sIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcbiAgICAgIHJlcy5oZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsICdodHRwOi8vbG9jYWxob3N0OjgwODAnKTtcbiAgICAgIHJlcy5oZWFkZXIoXG4gICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1NZXRob2RzJyxcbiAgICAgICAgJ0dFVCwgUE9TVCwgUFVULCBERUxFVEUsIE9QVElPTlMnLFxuICAgICAgKTtcbiAgICAgIHJlcy5oZWFkZXIoXG4gICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzJyxcbiAgICAgICAgJ09yaWdpbiwgWC1SZXF1ZXN0ZWQtV2l0aCwgQ29udGVudC1UeXBlLCBBY2NlcHQsIEF1dGhvcml6YXRpb24sIEFjY2Vzcy1Db250cm9sLUFsbG93LUNyZWRlbnRpYWxzJyxcbiAgICAgICk7XG4gICAgICByZXMuaGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1DcmVkZW50aWFscycsICd0cnVlJyk7XG4gICAgICBuZXh0KCk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgcm91dGVzKCk6IHZvaWQge1xuICAgIGNvbnN0IHJvdXRlcjogZXhwcmVzcy5Sb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuICAgIHRoaXMuYXBwLnVzZSgnLycsIHJvdXRlcik7XG4gICAgdGhpcy5hcHAudXNlKCcvcG9zdENhcicsICBjYXJQb3N0Um91dGVyLnJvdXRlcik7XG4gICAgdGhpcy5hcHAuYWxsKCcvKicsIChyZXEsIHJlcykgPT4ge1xuICAgICAgcmVzLnNlbmRGaWxlKHBhdGgucmVzb2x2ZSgnYnVpbGRzY3JpcHRzL3B1YmxpYy9pbmRleC5odG1sJykpO1xuICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgU2VydmVyKCkuYXBwO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwidHlwZVwiOiBcInNlcnZpY2VfYWNjb3VudFwiLFxuXHRcInByb2plY3RfaWRcIjogXCJjcmFmdHktY2Fpcm4tMTk0MDA5XCIsXG5cdFwicHJpdmF0ZV9rZXlfaWRcIjogXCI5MjUwZWVjNTdjNGM3MDdiYmM5MzFiZTBkODU4ZDk3Y2VkNjkxNzA4XCIsXG5cdFwicHJpdmF0ZV9rZXlcIjogXCItLS0tLUJFR0lOIFBSSVZBVEUgS0VZLS0tLS1cXG5NSUlFdXdJQkFEQU5CZ2txaGtpRzl3MEJBUUVGQUFTQ0JLVXdnZ1NoQWdFQUFvSUJBUUMzTEFlS0o4SzlKYkc2XFxucU9iS0hyei9JQjFibnM5STZrOVpVMDhGK3FNd01UYlE5MlNzeVdLR3dnbTBCbTlCd0FjUjFMSzAyVlFxSmMvMFxcbnpWNzVBaGZoU0xEVXJxZ3VaTDh5NkZCeTd6bFBDZU5uTnhmQWJEby9UK0VHYUVlcThSdDVnZnJWWWo4YU4va3FcXG56TmhGeTRHWVhHNGJGaURmSE11eWtpRFhxdnZCemM2cCtid1dnY08xMXAzL0N2WHJKVzR6MVhOQ2NEVWV0am5kXFxuaW11SHdnTC9pa3JJbGhnWWFaWGZvMTd5cEdJczZzUnZvdjdHbGRraktxbk9Lc0xPNHJoSkI0M3ZOQkhsbmFvbFxcblhOUGgrWExwWStteDFWdlZSVDhFcmU3aHdCbC9KUHlnWlQwR1dhT1VKRitKQmsrSDhzN0I2TnlWOGdESWd1MnpcXG41UnJqdHFwaEFnTUJBQUVDZ2Y5bUhkRno1ZlVyRTdBTEdDU3hQdHZaOVdHNXU2YnM2YWN6eEgrUmV6ajd6Wk03XFxuaUhIZm83Y1UyZVl4U0JQajZEbktULzdzLzNSQXhsMGw3aFBWaklwR3VkaWpLYWtQdDFNRjhsNmNWeDg3TEhDcVxcbkNvekdBWU92dFhHUE1JRGMyM3NoWkx4SmhLc0FzVmxCQ1dqekQ4TFBOM090NnNSVjZSaVR5VUU3RThOTkhzWHlcXG5jZHp3Nkk2M09XN1pBbUpuNjRFaGZLdUJtTVlObUwxWkptdnA3bUx2anYxbXl3TTdWenJwTjUrY3QrcFlrdGdnXFxudXZ2MWZlSzl1V3FZVUxyL2pFWXVrSTZRQStQb3pLZHlQY1NYNlpaSXUxR1JRWGJnemxGSHI4WHlqMjhGaXJMSVxcblBYME5tSzYxZmlEcTZhRENYWVR6SU1FRGhyNWtCaUdiakp5WDk2RUNnWUVBMmVuUUZXU282emU0dVNObUFQSDZcXG41dFN0bFBwdnlkdkZEZFY3d0tJZ1J2SFM1SzgvT3dCTFFRUjZGeWwxQld4bC9RUTY5ZTllczUxS00rSlJHRWplXFxuOTBMdEtReFBtRnFJajRGelhJY3lSWVQyV0ttUHI5S0ViT1JlaDJWQy8yeHpEeHgwYytyUlk3ZFFpaUI5QXNUOVxcbmlRN3F1MUtPd1Y4bkVkcWZLKzE4cjlrQ2dZRUExeS9GTVdrS3oya2k4Vm01Yys3aXp5azZZYmQvL2xkQmVWa2dcXG5RSThJQjNRcXVYM09RYjAxSmtWTjV3aVpYSXlLeUFya2REQzU2SEpYblRucnpwK0FvU2ZjVFFpS2RSVzc5Y2MxXFxuWnloVzVoUDkxODZ5SFJUdGNiNjkwZUtTQjhVZ29vbk55QjlBY3gwOW11RWFBY1hoSnFRSFdJRldWdEFyMDM5SVxcbjZLVnV3Y2tDZ1lFQXJFaWxFU1RpUUFWdjhEL0NWNkQ0d3lNR2tiQm1UV3VKb2VSVTBQbmRGdm45eUh1ZFBDS0JcXG5YTWdUVnRpYUFrMnZYSmpKbk1OQlZqUlhCQ283L3owdHVzT1pDVWtJYk9XMjdlNWtySlRlOUFPcFdIUEdmRFd1XFxuS1FGc2t4TkdJdmMxQ0k5d3Ftek9XMDRGU1E5aWhwd0Q3eVp5QXVQRXBiRjdEQ3lTaDRKZGdCRUNnWUFWd21QYlxcblNqYm9vRVlEUjhKa0FiejNtOENtanVxbmFtVlpndlNxOG91cVRVbmd0ZUw4Yk1pS0ZTbjZlYmtnVGFuZTdwTUpcXG5XTUFEekVRbHh1eWNXUzZsblNVK3VPVmZUNUpSR1JMQ1dxYm0zeENsR09hVDRFRGVacDVGTWZiNFNDdXpvK0dtXFxuSWRyZmlRNW9zZWh5VTNNZitDZ3gvK29lSHpDL1V6aXBKY2xjV1FLQmdDUVhFZC9oeHg4REg4d09tU1crSkJaZVxcblJnQ0dBU2ZJbXJmeDUwQjIyazFvdDdENGpvcTA2amtRREYwQmlVb0FVS1pQekV1czlZZ3RIM3dtVW53QkFJTitcXG50M2NzczhjeUVScVVJNnNkdTVHU2puN1ZRT0VCUU1pVFhVYjI3VXlVUUVQMS9wTmI2VlBXc1J1L3JWQ0YreTVmXFxuVmdvbXJKRXlUaVFMNTBmSmFNQWlcXG4tLS0tLUVORCBQUklWQVRFIEtFWS0tLS0tXFxuXCIsXG5cdFwiY2xpZW50X2VtYWlsXCI6IFwiZmlyZWJhc2UtYWRtaW5zZGstNHNtZ3BAY3JhZnR5LWNhaXJuLTE5NDAwOS5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbVwiLFxuXHRcImNsaWVudF9pZFwiOiBcIjEwMjE4NDUxMDY3NTE4Mzg4NjU1N1wiLFxuXHRcImF1dGhfdXJpXCI6IFwiaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tL28vb2F1dGgyL2F1dGhcIixcblx0XCJ0b2tlbl91cmlcIjogXCJodHRwczovL29hdXRoMi5nb29nbGVhcGlzLmNvbS90b2tlblwiLFxuXHRcImF1dGhfcHJvdmlkZXJfeDUwOV9jZXJ0X3VybFwiOiBcImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL29hdXRoMi92MS9jZXJ0c1wiLFxuXHRcImNsaWVudF94NTA5X2NlcnRfdXJsXCI6IFwiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vcm9ib3QvdjEvbWV0YWRhdGEveDUwOS9maXJlYmFzZS1hZG1pbnNkay00c21ncCU0MGNyYWZ0eS1jYWlybi0xOTQwMDkuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb21cIlxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvbXByZXNzaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvb2tpZS1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkZWJ1Z1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlLWFkbWluXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImhlbG1ldFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vcmdhblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=