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
                let databaseRef = admin.database().ref();
                let usersRef = databaseRef.child("users");
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
class Server {
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }
    config() {
        const db = admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: "https://crafty-cairn-194009.firebaseio.com"
        });
        this.carPostRouter = new carPost_1.CarPost();
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
        this.app.use('/postCar', this.carPostRouter.router);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYnVpbGRTY3JpcHRzL2NvbnRyb2xsZXJzL2NhclBvc3QudHMiLCJ3ZWJwYWNrOi8vLy4vYnVpbGRTY3JpcHRzL2luZGV4LnRzIiwid2VicGFjazovLy8uL2J1aWxkU2NyaXB0cy9zcmNTZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZUFjY291bnRLZXkuanNvbjUiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYm9keS1wYXJzZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb21wcmVzc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvb2tpZS1wYXJzZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZGVidWdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UtYWRtaW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJoZWxtZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJodHRwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9yZ2FuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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RyxDQUFDOzs7Ozs7Ozs7Ozs7QUMvRGhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBLHdDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGlDIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgeyBOZXh0RnVuY3Rpb24sIFJlcXVlc3QsIFJlc3BvbnNlLCBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCAqIGFzIGFkbWluIGZyb20gJ2ZpcmViYXNlLWFkbWluJztcbmV4cG9ydCBjbGFzcyBDYXJQb3N0IHtcbiAgcHVibGljIHJvdXRlcjogUm91dGVyO1xuICBwdWJsaWMgZGF0YWJhc2VSZWY6YW55O1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnJvdXRlciA9IFJvdXRlcigpO1xuICAgIHRoaXMucm91dGVzKCk7XG5cblxuICB9XG4gIHB1YmxpYyBhc3luYyBjcmVhdGUoXG4gICAgcmVxOiBSZXF1ZXN0LFxuICAgIHJlczogUmVzcG9uc2UsXG4gICAgbmV4dDogTmV4dEZ1bmN0aW9uLFxuICApOiBQcm9taXNlPFJlc3BvbnNlIHwgdm9pZD4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGNhckNvbG91cixjdXN0b21lck5hbWUsY2FyTWFrZSxwaG9uZU51bWJlcixjYXJNaWxlYWdlLGNhbkRpcmVjdFNhbGUsY2FyWWVhcixjYXJNb2RlbCxlbWFpbFxuICAgIH0gPSByZXEuYm9keTtcbiAgICB0cnkge1xuICAgICAgbGV0IGRhdGFiYXNlUmVmID0gYWRtaW4uZGF0YWJhc2UoKS5yZWYoKTtcbiAgICAgIGxldCB1c2Vyc1JlZiA9IGRhdGFiYXNlUmVmLmNoaWxkKFwidXNlcnNcIik7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB1c2Vyc1JlZi5wdXNoKHtcbiAgICAgICAgXCJjYXJDb2xvdXJcIjpyZXEuYm9keS5jYXJDb2xvdXIsXG4gICAgICAgIFwiY3VzdG9tZXJOYW1lXCI6cmVxLmJvZHkuY3VzdG9tZXJOYW1lLFxuICAgICAgICBcImNhck1ha2VcIjpyZXEuYm9keS5jYXJNYWtlLFxuICAgICAgICBcInBob25lTnVtYmVyXCI6cmVxLmJvZHkucGhvbmVOdW1iZXIsXG4gICAgICAgIFwiY2FyTWlsZWFnZVwiOnJlcS5ib2R5LmNhck1pbGVhZ2UsXG4gICAgICAgIFwiY2FuRGlyZWN0U2FsZVwiOnJlcS5ib2R5LmNhbkRpcmVjdFNhbGUsXG4gICAgICAgIFwiY2FyWWVhclwiOnJlcS5ib2R5LmNhclllYXIsXG4gICAgICAgIFwiY2FyTW9kZWxcIjpyZXEuYm9keS5jYXJNb2RlbCxcbiAgICAgICAgXCJlbWFpbFwiOnJlcS5ib2R5LmVtYWlsLFxuICAgICAgICB9KTtcbiAgICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBkYXRhLCBtZXNzYWdlOiAnc3VjY2VzcycgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBuZXh0KGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByb3V0ZXMoKSB7XG4gICAgdGhpcy5yb3V0ZXIucG9zdCgnL2NhcicsIHRoaXMuY3JlYXRlKTtcbiAgfVxufVxuIiwiLy8gdHNsaW50OmRpc2FibGVcclxuaW1wb3J0ICogYXMgZGVidWcgZnJvbSAnZGVidWcnO1xyXG5pbXBvcnQgKiBhcyBodHRwIGZyb20gJ2h0dHAnO1xyXG5pbXBvcnQgU2VydmVyIGZyb20gJy4vc3JjU2VydmVyJztcclxuXHJcbi8vZGVidWcoJ3RzLWV4cHJlc3M6c2VydmVyJyk7XHJcblxyXG5jb25zdCBwb3J0ID0gbm9ybWFsaXplUG9ydChwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDApO1xyXG5cclxuXHJcblNlcnZlci5zZXQoJ3BvcnQnLCBwb3J0KTtcclxuXHJcbmNvbnNvbGUubG9nKGBTZXJ2ZXIgbGlzdGVuaW5nIG9uIHBvcnQgJHtwb3J0fWApO1xyXG5cclxuY29uc3Qgc2VydmVyID0gaHR0cC5jcmVhdGVTZXJ2ZXIoU2VydmVyKTtcclxuc2VydmVyLmxpc3Rlbihwb3J0KTtcclxuc2VydmVyLm9uKCdlcnJvcicsIG9uRXJyb3IpO1xyXG5zZXJ2ZXIub24oJ2xpc3RlbmluZycsIG9uTGlzdGVuaW5nKTtcclxuXHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZVBvcnQodmFsOiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXIgfCBzdHJpbmcgfCBib29sZWFuIHtcclxuICBjb25zdCBwb3J0OiBudW1iZXIgPSB0eXBlb2YgdmFsID09PSAnc3RyaW5nJyA/IHBhcnNlSW50KHZhbCwgMTApIDogdmFsO1xyXG4gIGlmIChpc05hTihwb3J0KSkge1xyXG4gICAgcmV0dXJuIHZhbDtcclxuICB9IGVsc2UgaWYgKHBvcnQgPj0gMCkge1xyXG4gICAgcmV0dXJuIHBvcnQ7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uRXJyb3IoZXJyb3I6IE5vZGVKUy5FcnJub0V4Y2VwdGlvbik6IHZvaWQge1xyXG4gIGlmIChlcnJvci5zeXNjYWxsICE9PSAnbGlzdGVuJykge1xyXG4gICAgdGhyb3cgZXJyb3I7XHJcbiAgfVxyXG4gIGNvbnN0IGJpbmQgPSB0eXBlb2YgcG9ydCA9PT0gJ3N0cmluZycgPyAnUGlwZSAnICsgcG9ydCA6ICdQb3J0ICcgKyBwb3J0O1xyXG4gIHN3aXRjaCAoZXJyb3IuY29kZSkge1xyXG4gICAgY2FzZSAnRUFDQ0VTJzpcclxuICAgICAgY29uc29sZS5lcnJvcihgJHtiaW5kfSByZXF1aXJlcyBlbGV2YXRlZCBwcml2aWxlZ2VzYCk7XHJcbiAgICAgIHByb2Nlc3MuZXhpdCgxKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICdFQUREUklOVVNFJzpcclxuICAgICAgY29uc29sZS5lcnJvcihgJHtiaW5kfSBpcyBhbHJlYWR5IGluIHVzZWApO1xyXG4gICAgICBwcm9jZXNzLmV4aXQoMSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBvbkxpc3RlbmluZygpOiB2b2lkIHtcclxuICBjb25zdCBhZGRyID0gc2VydmVyLmFkZHJlc3MoKTtcclxuICBjb25zdCBiaW5kID0gdHlwZW9mIGFkZHIgPT09ICdzdHJpbmcnID8gYHBpcGUgJHthZGRyfWAgOiBgcG9ydCAke2FkZHIucG9ydH1gO1xyXG4gIGRlYnVnKGBMaXN0ZW5pbmcgb24gJHtiaW5kfWApO1xyXG59XHJcbiIsImltcG9ydCAqIGFzIGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInO1xuaW1wb3J0ICogYXMgY29tcHJlc3Npb24gZnJvbSAnY29tcHJlc3Npb24nO1xuaW1wb3J0ICogYXMgY29va2llUGFyc2VyIGZyb20gJ2Nvb2tpZS1wYXJzZXInO1xuaW1wb3J0ICogYXMgY29ycyBmcm9tICdjb3JzJztcbmltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgKiBhcyBoZWxtZXQgZnJvbSAnaGVsbWV0JztcbmltcG9ydCAqIGFzIG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCAqIGFzIGxvZ2dlciBmcm9tICdtb3JnYW4nO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcbi8vaW1wb3J0ICogYXMgcm91dGVyIGZyb20gJy4vcm91dGVyJztcbmltcG9ydCAqIGFzIGV2bmNvbmYgZnJvbSAnZG90ZW52JztcblxuaW1wb3J0ICogYXMgYWRtaW4gZnJvbSAnZmlyZWJhc2UtYWRtaW4nO1xubGV0IHNlcnZpY2VBY2NvdW50ID0gcmVxdWlyZSgnIC4vLi4vLi4vc2VydmljZUFjY291bnRLZXkuanNvbjUnKTtcbi8vbGV0IGFjY291bnQgPSByZXF1aXJlKCcuLi9zZXJ2aWNlQWNjb3VudEtleS5qc29uJyk7XG5pbXBvcnQgeyBDYXJQb3N0IH0gZnJvbSAnLi9jb250cm9sbGVycy9jYXJQb3N0JztcblxuY2xhc3MgU2VydmVyIHtcbiAgcHVibGljIGFwcDogZXhwcmVzcy5BcHBsaWNhdGlvbjtcbiAgcHVibGljIGNhclBvc3RSb3V0ZXI6Q2FyUG9zdDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmFwcCA9IGV4cHJlc3MoKTtcbiAgICB0aGlzLmNvbmZpZygpO1xuICAgIHRoaXMucm91dGVzKCk7XG4gIH1cbiAgcHVibGljIGNvbmZpZygpOiB2b2lkIHtcbiAgICBjb25zdCBkYiA9IGFkbWluLmluaXRpYWxpemVBcHAoe1xuICAgICAgY3JlZGVudGlhbDphZG1pbi5jcmVkZW50aWFsLmNlcnQoc2VydmljZUFjY291bnQpLFxuICAgICAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9jcmFmdHktY2Fpcm4tMTk0MDA5LmZpcmViYXNlaW8uY29tXCJcbiAgICB9KTtcbiAgICB0aGlzLmNhclBvc3RSb3V0ZXIgPSBuZXcgQ2FyUG9zdCgpO1xuICAgIHRoaXMuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XG4gICAgdGhpcy5hcHAudXNlKGNvb2tpZVBhcnNlcigpKTtcbiAgICB0aGlzLmFwcC51c2UobG9nZ2VyKCdkZXYnKSk7XG4gICAgdGhpcy5hcHAudXNlKGNvbXByZXNzaW9uKCkpO1xuICAgIHRoaXMuYXBwLnVzZShoZWxtZXQoKSk7XG4gICAgdGhpcy5hcHAudXNlKGNvcnMoKSk7XG4gICAgdGhpcy5hcHAudXNlKChfLCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XG4gICAgICByZXMuaGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCAnaHR0cDovL2xvY2FsaG9zdDo4MDgwJyk7XG4gICAgICByZXMuaGVhZGVyKFxuICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kcycsXG4gICAgICAgICdHRVQsIFBPU1QsIFBVVCwgREVMRVRFLCBPUFRJT05TJyxcbiAgICAgICk7XG4gICAgICByZXMuaGVhZGVyKFxuICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycycsXG4gICAgICAgICdPcmlnaW4sIFgtUmVxdWVzdGVkLVdpdGgsIENvbnRlbnQtVHlwZSwgQWNjZXB0LCBBdXRob3JpemF0aW9uLCBBY2Nlc3MtQ29udHJvbC1BbGxvdy1DcmVkZW50aWFscycsXG4gICAgICApO1xuICAgICAgcmVzLmhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctQ3JlZGVudGlhbHMnLCAndHJ1ZScpO1xuICAgICAgbmV4dCgpO1xuICAgIH0pO1xuICB9XG4gIHB1YmxpYyByb3V0ZXMoKTogdm9pZCB7XG5cbiAgICBjb25zdCByb3V0ZXI6IGV4cHJlc3MuUm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcbiAgICB0aGlzLmFwcC51c2UoJy8nLCByb3V0ZXIpO1xuICAgIHRoaXMuYXBwLnVzZSgnL3Bvc3RDYXInLCAgdGhpcy5jYXJQb3N0Um91dGVyLnJvdXRlcik7XG4gICAgdGhpcy5hcHAuYWxsKCcvKicsIChyZXEsIHJlcykgPT4ge1xuICAgICAgcmVzLnNlbmRGaWxlKHBhdGgucmVzb2x2ZSgnYnVpbGRzY3JpcHRzL3B1YmxpYy9pbmRleC5odG1sJykpO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBTZXJ2ZXIoKS5hcHA7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ0eXBlXCI6IFwic2VydmljZV9hY2NvdW50XCIsXG5cdFwicHJvamVjdF9pZFwiOiBcImNyYWZ0eS1jYWlybi0xOTQwMDlcIixcblx0XCJwcml2YXRlX2tleV9pZFwiOiBcIjkyNTBlZWM1N2M0YzcwN2JiYzkzMWJlMGQ4NThkOTdjZWQ2OTE3MDhcIixcblx0XCJwcml2YXRlX2tleVwiOiBcIi0tLS0tQkVHSU4gUFJJVkFURSBLRVktLS0tLVxcbk1JSUV1d0lCQURBTkJna3Foa2lHOXcwQkFRRUZBQVNDQktVd2dnU2hBZ0VBQW9JQkFRQzNMQWVLSjhLOUpiRzZcXG5xT2JLSHJ6L0lCMWJuczlJNms5WlUwOEYrcU13TVRiUTkyU3N5V0tHd2dtMEJtOUJ3QWNSMUxLMDJWUXFKYy8wXFxuelY3NUFoZmhTTERVcnFndVpMOHk2RkJ5N3psUENlTm5OeGZBYkRvL1QrRUdhRWVxOFJ0NWdmclZZajhhTi9rcVxcbnpOaEZ5NEdZWEc0YkZpRGZITXV5a2lEWHF2dkJ6YzZwK2J3V2djTzExcDMvQ3ZYckpXNHoxWE5DY0RVZXRqbmRcXG5pbXVId2dML2lrcklsaGdZYVpYZm8xN3lwR0lzNnNSdm92N0dsZGtqS3FuT0tzTE80cmhKQjQzdk5CSGxuYW9sXFxuWE5QaCtYTHBZK214MVZ2VlJUOEVyZTdod0JsL0pQeWdaVDBHV2FPVUpGK0pCaytIOHM3QjZOeVY4Z0RJZ3UyelxcbjVScmp0cXBoQWdNQkFBRUNnZjltSGRGejVmVXJFN0FMR0NTeFB0dlo5V0c1dTZiczZhY3p4SCtSZXpqN3paTTdcXG5pSEhmbzdjVTJlWXhTQlBqNkRuS1QvN3MvM1JBeGwwbDdoUFZqSXBHdWRpaktha1B0MU1GOGw2Y1Z4ODdMSENxXFxuQ296R0FZT3Z0WEdQTUlEYzIzc2haTHhKaEtzQXNWbEJDV2p6RDhMUE4zT3Q2c1JWNlJpVHlVRTdFOE5OSHNYeVxcbmNkenc2STYzT1c3WkFtSm42NEVoZkt1Qm1NWU5tTDFaSm12cDdtTHZqdjFteXdNN1Z6cnBONStjdCtwWWt0Z2dcXG51dnYxZmVLOXVXcVlVTHIvakVZdWtJNlFBK1BvektkeVBjU1g2WlpJdTFHUlFYYmd6bEZIcjhYeWoyOEZpckxJXFxuUFgwTm1LNjFmaURxNmFEQ1hZVHpJTUVEaHI1a0JpR2JqSnlYOTZFQ2dZRUEyZW5RRldTbzZ6ZTR1U05tQVBINlxcbjV0U3RsUHB2eWR2RkRkVjd3S0lnUnZIUzVLOC9Pd0JMUVFSNkZ5bDFCV3hsL1FRNjllOWVzNTFLTStKUkdFamVcXG45MEx0S1F4UG1GcUlqNEZ6WEljeVJZVDJXS21QcjlLRWJPUmVoMlZDLzJ4ekR4eDBjK3JSWTdkUWlpQjlBc1Q5XFxuaVE3cXUxS093VjhuRWRxZksrMThyOWtDZ1lFQTF5L0ZNV2tLejJraThWbTVjKzdpenlrNlliZC8vbGRCZVZrZ1xcblFJOElCM1FxdVgzT1FiMDFKa1ZONXdpWlhJeUt5QXJrZERDNTZISlhuVG5yenArQW9TZmNUUWlLZFJXNzljYzFcXG5aeWhXNWhQOTE4NnlIUlR0Y2I2OTBlS1NCOFVnb29uTnlCOUFjeDA5bXVFYUFjWGhKcVFIV0lGV1Z0QXIwMzlJXFxuNktWdXdja0NnWUVBckVpbEVTVGlRQVZ2OEQvQ1Y2RDR3eU1Ha2JCbVRXdUpvZVJVMFBuZEZ2bjl5SHVkUENLQlxcblhNZ1RWdGlhQWsydlhKakpuTU5CVmpSWEJDbzcvejB0dXNPWkNVa0liT1cyN2U1a3JKVGU5QU9wV0hQR2ZEV3VcXG5LUUZza3hOR0l2YzFDSTl3cW16T1cwNEZTUTlpaHB3RDd5WnlBdVBFcGJGN0RDeVNoNEpkZ0JFQ2dZQVZ3bVBiXFxuU2pib29FWURSOEprQWJ6M204Q21qdXFuYW1WWmd2U3E4b3VxVFVuZ3RlTDhiTWlLRlNuNmVia2dUYW5lN3BNSlxcbldNQUR6RVFseHV5Y1dTNmxuU1UrdU9WZlQ1SlJHUkxDV3FibTN4Q2xHT2FUNEVEZVpwNUZNZmI0U0N1em8rR21cXG5JZHJmaVE1b3NlaHlVM01mK0NneC8rb2VIekMvVXppcEpjbGNXUUtCZ0NRWEVkL2h4eDhESDh3T21TVytKQlplXFxuUmdDR0FTZkltcmZ4NTBCMjJrMW90N0Q0am9xMDZqa1FERjBCaVVvQVVLWlB6RXVzOVlndEgzd21VbndCQUlOK1xcbnQzY3NzOGN5RVJxVUk2c2R1NUdTam43VlFPRUJRTWlUWFViMjdVeVVRRVAxL3BOYjZWUFdzUnUvclZDRit5NWZcXG5WZ29tckpFeVRpUUw1MGZKYU1BaVxcbi0tLS0tRU5EIFBSSVZBVEUgS0VZLS0tLS1cXG5cIixcblx0XCJjbGllbnRfZW1haWxcIjogXCJmaXJlYmFzZS1hZG1pbnNkay00c21ncEBjcmFmdHktY2Fpcm4tMTk0MDA5LmlhbS5nc2VydmljZWFjY291bnQuY29tXCIsXG5cdFwiY2xpZW50X2lkXCI6IFwiMTAyMTg0NTEwNjc1MTgzODg2NTU3XCIsXG5cdFwiYXV0aF91cmlcIjogXCJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20vby9vYXV0aDIvYXV0aFwiLFxuXHRcInRva2VuX3VyaVwiOiBcImh0dHBzOi8vb2F1dGgyLmdvb2dsZWFwaXMuY29tL3Rva2VuXCIsXG5cdFwiYXV0aF9wcm92aWRlcl94NTA5X2NlcnRfdXJsXCI6IFwiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vb2F1dGgyL3YxL2NlcnRzXCIsXG5cdFwiY2xpZW50X3g1MDlfY2VydF91cmxcIjogXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9yb2JvdC92MS9tZXRhZGF0YS94NTA5L2ZpcmViYXNlLWFkbWluc2RrLTRzbWdwJTQwY3JhZnR5LWNhaXJuLTE5NDAwOS5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbVwiXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29tcHJlc3Npb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29va2llLXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRlYnVnXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UtYWRtaW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaGVsbWV0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9yZ2FuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==