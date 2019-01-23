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
const request = __webpack_require__(/*! request-promise-native */ "request-promise-native");
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
                let datas = {
                    "carColour": req.body.carColour,
                    "customerName": req.body.customerName,
                    "carMake": req.body.carMake,
                    "phoneNumber": req.body.phoneNumber,
                    "carMileage": req.body.carMileage,
                    "canDirectSale": req.body.canDirectSale,
                    "carYear": req.body.carYear,
                    "carModel": req.body.carModel,
                    "email": req.body.email,
                };
                let databaseRef = admin.database().ref();
                let usersRef = databaseRef.child("users");
                const data = usersRef.push(datas).then((snap) => {
                    this.docKey = snap.key;
                });
                console.log(this.docKey);
                const options = {
                    method: 'POST',
                    body: { "text": `<https://alert-system.com/alerts/1234| ${req.body.canDirectSale}: ${req.body.carYear},,${req.body.carModel},${req.body.carYear},${req.body.carColour}(${req.body.carMileage}/${req.body.customerName})>` },
                    json: true,
                    uri: 'https://hooks.slack.com/services/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',
                };
                const result = yield request(options).then(data => {
                    console.log(data);
                }).catch(err => {
                    console.log(err);
                });
                res.status(201).json({ data, message: 'success' });
            }
            catch (error) {
                return next(error.message);
            }
        });
    }
    createLead(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { consignPrice, dealerPrice, dealeronly, consignonly, consigndealer } = req.body;
            try {
                let db = admin.database().ref();
                let usersRef = db.child("leads");
                let datas = {
                    "consignPrice": req.body.consignPrice,
                    "dealerPrice": req.body.dealerPrice,
                    "dealeronly": req.body.dealeronly,
                    "consignonly": req.body.consignonly,
                    "consigndealer": req.body.consigndealer,
                };
                const data = usersRef.push(datas);
                res.status(201).json({ data, message: 'success' });
            }
            catch (error) {
                return next(error.message);
            }
        });
    }
    routes() {
        this.router.post('/car', this.create);
        this.router.post('/leads', this.createLead);
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

/***/ }),

/***/ "request-promise-native":
/*!*****************************************!*\
  !*** external "request-promise-native" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("request-promise-native");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYnVpbGRTY3JpcHRzL2NvbnRyb2xsZXJzL2NhclBvc3QudHMiLCJ3ZWJwYWNrOi8vLy4vYnVpbGRTY3JpcHRzL2luZGV4LnRzIiwid2VicGFjazovLy8uL2J1aWxkU2NyaXB0cy9zcmNTZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZUFjY291bnRLZXkuanNvbjUiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYm9keS1wYXJzZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb21wcmVzc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvb2tpZS1wYXJzZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZGVidWdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UtYWRtaW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJoZWxtZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJodHRwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9yZ2FuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlcXVlc3QtcHJvbWlzZS1uYXRpdmVcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtB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OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgeyBOZXh0RnVuY3Rpb24sIFJlcXVlc3QsIFJlc3BvbnNlLCBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCAqIGFzIHJlcXVlc3QgZnJvbSBcInJlcXVlc3QtcHJvbWlzZS1uYXRpdmVcIjtcbmltcG9ydCAqIGFzIGFkbWluIGZyb20gJ2ZpcmViYXNlLWFkbWluJztcbmltcG9ydCB7IHByb21pc2VzIH0gZnJvbSAnZnMnO1xuZXhwb3J0IGNsYXNzIENhclBvc3Qge1xuICBwdWJsaWMgcm91dGVyOiBSb3V0ZXI7XG4gIHB1YmxpYyBkYXRhYmFzZVJlZjphbnk7XG4gICBkb2NLZXk6c3RyaW5nO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnJvdXRlciA9IFJvdXRlcigpO1xuICAgIHRoaXMucm91dGVzKCk7XG4gIH1cbiAgcHVibGljIGFzeW5jIGNyZWF0ZShcbiAgICByZXE6IFJlcXVlc3QsXG4gICAgcmVzOiBSZXNwb25zZSxcbiAgICBuZXh0OiBOZXh0RnVuY3Rpb24sXG4gICk6IFByb21pc2U8UmVzcG9uc2UgfCB2b2lkPiB7XG4gICAgY29uc3Qge1xuICAgICAgY2FyQ29sb3VyLGN1c3RvbWVyTmFtZSxjYXJNYWtlLHBob25lTnVtYmVyLGNhck1pbGVhZ2UsY2FuRGlyZWN0U2FsZSxjYXJZZWFyLGNhck1vZGVsLGVtYWlsXG4gICAgfSA9IHJlcS5ib2R5O1xuICAgIHRyeSB7XG4gICAgICBsZXQgZGF0YXMgPSB7XG4gICAgICAgIFwiY2FyQ29sb3VyXCI6cmVxLmJvZHkuY2FyQ29sb3VyLFxuICAgICAgICBcImN1c3RvbWVyTmFtZVwiOnJlcS5ib2R5LmN1c3RvbWVyTmFtZSxcbiAgICAgICAgXCJjYXJNYWtlXCI6cmVxLmJvZHkuY2FyTWFrZSxcbiAgICAgICAgXCJwaG9uZU51bWJlclwiOnJlcS5ib2R5LnBob25lTnVtYmVyLFxuICAgICAgICBcImNhck1pbGVhZ2VcIjpyZXEuYm9keS5jYXJNaWxlYWdlLFxuICAgICAgICBcImNhbkRpcmVjdFNhbGVcIjpyZXEuYm9keS5jYW5EaXJlY3RTYWxlLFxuICAgICAgICBcImNhclllYXJcIjpyZXEuYm9keS5jYXJZZWFyLFxuICAgICAgICBcImNhck1vZGVsXCI6cmVxLmJvZHkuY2FyTW9kZWwsXG4gICAgICAgIFwiZW1haWxcIjpyZXEuYm9keS5lbWFpbCxcbiAgICAgICAgfVxuICAgICAgbGV0IGRhdGFiYXNlUmVmID0gYWRtaW4uZGF0YWJhc2UoKS5yZWYoKTtcbiAgICAgIGxldCB1c2Vyc1JlZiA9IGRhdGFiYXNlUmVmLmNoaWxkKFwidXNlcnNcIik7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB1c2Vyc1JlZi5wdXNoKGRhdGFzKS50aGVuKChzbmFwKT0+e1xuICAgICAgICAgICAgdGhpcy5kb2NLZXkgPSBzbmFwLmtleTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZG9jS2V5KTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBib2R5OiB7XCJ0ZXh0XCI6IGA8aHR0cHM6Ly9hbGVydC1zeXN0ZW0uY29tL2FsZXJ0cy8xMjM0fCAke3JlcS5ib2R5LmNhbkRpcmVjdFNhbGV9OiAke3JlcS5ib2R5LmNhclllYXJ9LCwke3JlcS5ib2R5LmNhck1vZGVsfSwke3JlcS5ib2R5LmNhclllYXJ9LCR7cmVxLmJvZHkuY2FyQ29sb3VyfSgke3JlcS5ib2R5LmNhck1pbGVhZ2V9LyR7cmVxLmJvZHkuY3VzdG9tZXJOYW1lfSk+YH0sXG4gICAgICAgICAganNvbjogdHJ1ZSxcbiAgICAgICAgICB1cmk6ICdodHRwczovL2hvb2tzLnNsYWNrLmNvbS9zZXJ2aWNlcy9URktWNFJQNlUvQkZMR0tOVEw0L0RUZmRxUThPbHdiUTMzZzg2angwSWVTOCcsXG4gICAgICAgIH07XG4gIC8vaHR0cHM6Ly9ob29rcy5zbGFjay5jb20vc2VydmljZXMvVEVSNjJMSEc4L0JGNVRDUDA3OS8yeVRkOGYwSnhYVUxGcnVKZW11YTlsOWQgLy9jbGllbnQgY2hlbm5lbFxuICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVxdWVzdChvcHRpb25zKS50aGVuKGRhdGE9PntcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICB9KS5jYXRjaChlcnI9PntcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgIH0pO1xuXG4gICAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgZGF0YSwgbWVzc2FnZTogJ3N1Y2Nlc3MnIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gbmV4dChlcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuXG4gIHB1YmxpYyBhc3luYyBjcmVhdGVMZWFkKFxuICAgIHJlcTogUmVxdWVzdCxcbiAgICByZXM6IFJlc3BvbnNlLFxuICAgIG5leHQ6IE5leHRGdW5jdGlvbixcbiAgKTogUHJvbWlzZTxSZXNwb25zZSB8IHZvaWQ+IHtcbiAgICBjb25zdCB7XG4gICAgICBjb25zaWduUHJpY2UsZGVhbGVyUHJpY2UsZGVhbGVyb25seSxjb25zaWdub25seSxjb25zaWduZGVhbGVyXG4gICAgfSA9IHJlcS5ib2R5O1xuICAgIHRyeSB7XG4gICAgICBsZXQgZGIgPSBhZG1pbi5kYXRhYmFzZSgpLnJlZigpO1xuICAgICAgbGV0IHVzZXJzUmVmID0gZGIuY2hpbGQoXCJsZWFkc1wiKTtcbiAgICAgIGxldCBkYXRhcyA9IHtcbiAgICAgICAgXCJjb25zaWduUHJpY2VcIjpyZXEuYm9keS5jb25zaWduUHJpY2UsXG4gICAgICAgIFwiZGVhbGVyUHJpY2VcIjpyZXEuYm9keS5kZWFsZXJQcmljZSxcbiAgICAgICAgXCJkZWFsZXJvbmx5XCI6cmVxLmJvZHkuZGVhbGVyb25seSxcbiAgICAgICAgXCJjb25zaWdub25seVwiOnJlcS5ib2R5LmNvbnNpZ25vbmx5LFxuICAgICAgICBcImNvbnNpZ25kZWFsZXJcIjpyZXEuYm9keS5jb25zaWduZGVhbGVyLFxuICAgICAgIH1cbiAgICAgICBjb25zdCBkYXRhID0gdXNlcnNSZWYucHVzaChkYXRhcyk7XG4gICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBkYXRhLCBtZXNzYWdlOiAnc3VjY2VzcycgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBuZXh0KGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG5cbiAgcHVibGljIHJvdXRlcygpIHtcbiAgICB0aGlzLnJvdXRlci5wb3N0KCcvY2FyJywgdGhpcy5jcmVhdGUpO1xuICAgIHRoaXMucm91dGVyLnBvc3QoJy9sZWFkcycsIHRoaXMuY3JlYXRlTGVhZCk7XG4gIH1cbn1cbiIsIi8vIHRzbGludDpkaXNhYmxlXG5pbXBvcnQgKiBhcyBkZWJ1ZyBmcm9tICdkZWJ1Zyc7XG5pbXBvcnQgKiBhcyBodHRwIGZyb20gJ2h0dHAnO1xuaW1wb3J0IFNlcnZlciBmcm9tICcuL3NyY1NlcnZlcic7XG4vL2ltcG9ydCAnLi4vc3JjL2Nzcy9tYWluLmNzcyc7XG4vL2RlYnVnKCd0cy1leHByZXNzOnNlcnZlcicpO1xuXG5jb25zdCBwb3J0ID0gbm9ybWFsaXplUG9ydChwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDApO1xuXG5cblNlcnZlci5zZXQoJ3BvcnQnLCBwb3J0KTtcblxuY29uc29sZS5sb2coYFNlcnZlciBsaXN0ZW5pbmcgb24gcG9ydCAke3BvcnR9YCk7XG5cbmNvbnN0IHNlcnZlciA9IGh0dHAuY3JlYXRlU2VydmVyKFNlcnZlcik7XG5zZXJ2ZXIubGlzdGVuKHBvcnQpO1xuc2VydmVyLm9uKCdlcnJvcicsIG9uRXJyb3IpO1xuc2VydmVyLm9uKCdsaXN0ZW5pbmcnLCBvbkxpc3RlbmluZyk7XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVBvcnQodmFsOiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXIgfCBzdHJpbmcgfCBib29sZWFuIHtcbiAgY29uc3QgcG9ydDogbnVtYmVyID0gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgPyBwYXJzZUludCh2YWwsIDEwKSA6IHZhbDtcbiAgaWYgKGlzTmFOKHBvcnQpKSB7XG4gICAgcmV0dXJuIHZhbDtcbiAgfSBlbHNlIGlmIChwb3J0ID49IDApIHtcbiAgICByZXR1cm4gcG9ydDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gb25FcnJvcihlcnJvcjogTm9kZUpTLkVycm5vRXhjZXB0aW9uKTogdm9pZCB7XG4gIGlmIChlcnJvci5zeXNjYWxsICE9PSAnbGlzdGVuJykge1xuICAgIHRocm93IGVycm9yO1xuICB9XG4gIGNvbnN0IGJpbmQgPSB0eXBlb2YgcG9ydCA9PT0gJ3N0cmluZycgPyAnUGlwZSAnICsgcG9ydCA6ICdQb3J0ICcgKyBwb3J0O1xuICBzd2l0Y2ggKGVycm9yLmNvZGUpIHtcbiAgICBjYXNlICdFQUNDRVMnOlxuICAgICAgY29uc29sZS5lcnJvcihgJHtiaW5kfSByZXF1aXJlcyBlbGV2YXRlZCBwcml2aWxlZ2VzYCk7XG4gICAgICBwcm9jZXNzLmV4aXQoMSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdFQUREUklOVVNFJzpcbiAgICAgIGNvbnNvbGUuZXJyb3IoYCR7YmluZH0gaXMgYWxyZWFkeSBpbiB1c2VgKTtcbiAgICAgIHByb2Nlc3MuZXhpdCgxKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5mdW5jdGlvbiBvbkxpc3RlbmluZygpOiB2b2lkIHtcbiAgY29uc3QgYWRkciA9IHNlcnZlci5hZGRyZXNzKCk7XG4gIGNvbnN0IGJpbmQgPSB0eXBlb2YgYWRkciA9PT0gJ3N0cmluZycgPyBgcGlwZSAke2FkZHJ9YCA6IGBwb3J0ICR7YWRkci5wb3J0fWA7XG4gIGRlYnVnKGBMaXN0ZW5pbmcgb24gJHtiaW5kfWApO1xufVxuIiwiaW1wb3J0ICogYXMgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcic7XG5pbXBvcnQgKiBhcyBjb21wcmVzc2lvbiBmcm9tICdjb21wcmVzc2lvbic7XG5pbXBvcnQgKiBhcyBjb29raWVQYXJzZXIgZnJvbSAnY29va2llLXBhcnNlcic7XG5pbXBvcnQgKiBhcyBjb3JzIGZyb20gJ2NvcnMnO1xuaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCAqIGFzIGhlbG1ldCBmcm9tICdoZWxtZXQnO1xuaW1wb3J0ICogYXMgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0ICogYXMgbG9nZ2VyIGZyb20gJ21vcmdhbic7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuXG4vL2ltcG9ydCAqIGFzIHJvdXRlciBmcm9tICcuL3JvdXRlcic7XG5pbXBvcnQgKiBhcyBldm5jb25mIGZyb20gJ2RvdGVudic7XG5cbmltcG9ydCAqIGFzIGFkbWluIGZyb20gJ2ZpcmViYXNlLWFkbWluJztcbmxldCBzZXJ2aWNlQWNjb3VudCA9IHJlcXVpcmUoJyAuLy4uLy4uL3NlcnZpY2VBY2NvdW50S2V5Lmpzb241Jyk7XG4vL2xldCBhY2NvdW50ID0gcmVxdWlyZSgnLi4vc2VydmljZUFjY291bnRLZXkuanNvbicpO1xuaW1wb3J0IHsgQ2FyUG9zdCB9IGZyb20gJy4vY29udHJvbGxlcnMvY2FyUG9zdCc7XG5cbmNsYXNzIFNlcnZlciB7XG4gIHB1YmxpYyBhcHA6IGV4cHJlc3MuQXBwbGljYXRpb247XG4gIHB1YmxpYyBjYXJQb3N0Um91dGVyOkNhclBvc3Q7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5hcHAgPSBleHByZXNzKCk7XG4gICAgdGhpcy5jb25maWcoKTtcbiAgICB0aGlzLnJvdXRlcygpO1xuICB9XG4gIHB1YmxpYyBjb25maWcoKTogdm9pZCB7XG4gICAgY29uc3QgZGIgPSBhZG1pbi5pbml0aWFsaXplQXBwKHtcbiAgICAgIGNyZWRlbnRpYWw6YWRtaW4uY3JlZGVudGlhbC5jZXJ0KHNlcnZpY2VBY2NvdW50KSxcbiAgICAgIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vY3JhZnR5LWNhaXJuLTE5NDAwOS5maXJlYmFzZWlvLmNvbVwiXG4gICAgfSk7XG4gICAgdGhpcy5jYXJQb3N0Um91dGVyID0gbmV3IENhclBvc3QoKTtcbiAgICB0aGlzLmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xuICAgIHRoaXMuYXBwLnVzZShjb29raWVQYXJzZXIoKSk7XG4gICAgdGhpcy5hcHAudXNlKGxvZ2dlcignZGV2JykpO1xuICAgIHRoaXMuYXBwLnVzZShjb21wcmVzc2lvbigpKTtcbiAgICB0aGlzLmFwcC51c2UoaGVsbWV0KCkpO1xuICAgIHRoaXMuYXBwLnVzZShjb3JzKCkpO1xuICAgIHRoaXMuYXBwLnVzZSgoXywgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xuICAgICAgcmVzLmhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJywgJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MCcpO1xuICAgICAgcmVzLmhlYWRlcihcbiAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHMnLFxuICAgICAgICAnR0VULCBQT1NULCBQVVQsIERFTEVURSwgT1BUSU9OUycsXG4gICAgICApO1xuICAgICAgcmVzLmhlYWRlcihcbiAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnMnLFxuICAgICAgICAnT3JpZ2luLCBYLVJlcXVlc3RlZC1XaXRoLCBDb250ZW50LVR5cGUsIEFjY2VwdCwgQXV0aG9yaXphdGlvbiwgQWNjZXNzLUNvbnRyb2wtQWxsb3ctQ3JlZGVudGlhbHMnLFxuICAgICAgKTtcbiAgICAgIHJlcy5oZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LUNyZWRlbnRpYWxzJywgJ3RydWUnKTtcbiAgICAgIG5leHQoKTtcbiAgICB9KTtcbiAgfVxuICBwdWJsaWMgcm91dGVzKCk6IHZvaWQge1xuXG4gICAgY29uc3Qgcm91dGVyOiBleHByZXNzLlJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG4gICAgdGhpcy5hcHAudXNlKCcvJywgcm91dGVyKTtcbiAgICB0aGlzLmFwcC51c2UoJy9wb3N0Q2FyJywgIHRoaXMuY2FyUG9zdFJvdXRlci5yb3V0ZXIpO1xuICAgIHRoaXMuYXBwLmFsbCgnLyonLCAocmVxLCByZXMpID0+IHtcbiAgICAgIHJlcy5zZW5kRmlsZShwYXRoLnJlc29sdmUoJ2J1aWxkc2NyaXB0cy9wdWJsaWMvaW5kZXguaHRtbCcpKTtcbiAgICB9KTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgbmV3IFNlcnZlcigpLmFwcDtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInR5cGVcIjogXCJzZXJ2aWNlX2FjY291bnRcIixcblx0XCJwcm9qZWN0X2lkXCI6IFwiY3JhZnR5LWNhaXJuLTE5NDAwOVwiLFxuXHRcInByaXZhdGVfa2V5X2lkXCI6IFwiOTI1MGVlYzU3YzRjNzA3YmJjOTMxYmUwZDg1OGQ5N2NlZDY5MTcwOFwiLFxuXHRcInByaXZhdGVfa2V5XCI6IFwiLS0tLS1CRUdJTiBQUklWQVRFIEtFWS0tLS0tXFxuTUlJRXV3SUJBREFOQmdrcWhraUc5dzBCQVFFRkFBU0NCS1V3Z2dTaEFnRUFBb0lCQVFDM0xBZUtKOEs5SmJHNlxcbnFPYktIcnovSUIxYm5zOUk2azlaVTA4RitxTXdNVGJROTJTc3lXS0d3Z20wQm05QndBY1IxTEswMlZRcUpjLzBcXG56Vjc1QWhmaFNMRFVycWd1Wkw4eTZGQnk3emxQQ2VObk54ZkFiRG8vVCtFR2FFZXE4UnQ1Z2ZyVllqOGFOL2txXFxuek5oRnk0R1lYRzRiRmlEZkhNdXlraURYcXZ2QnpjNnArYndXZ2NPMTFwMy9DdlhySlc0ejFYTkNjRFVldGpuZFxcbmltdUh3Z0wvaWtySWxoZ1lhWlhmbzE3eXBHSXM2c1J2b3Y3R2xka2pLcW5PS3NMTzRyaEpCNDN2TkJIbG5hb2xcXG5YTlBoK1hMcFkrbXgxVnZWUlQ4RXJlN2h3QmwvSlB5Z1pUMEdXYU9VSkYrSkJrK0g4czdCNk55VjhnRElndTJ6XFxuNVJyanRxcGhBZ01CQUFFQ2dmOW1IZEZ6NWZVckU3QUxHQ1N4UHR2WjlXRzV1NmJzNmFjenhIK1Jlemo3elpNN1xcbmlISGZvN2NVMmVZeFNCUGo2RG5LVC83cy8zUkF4bDBsN2hQVmpJcEd1ZGlqS2FrUHQxTUY4bDZjVng4N0xIQ3FcXG5Db3pHQVlPdnRYR1BNSURjMjNzaFpMeEpoS3NBc1ZsQkNXanpEOExQTjNPdDZzUlY2UmlUeVVFN0U4Tk5Ic1h5XFxuY2R6dzZJNjNPVzdaQW1KbjY0RWhmS3VCbU1ZTm1MMVpKbXZwN21Mdmp2MW15d003VnpycE41K2N0K3BZa3RnZ1xcbnV2djFmZUs5dVdxWVVMci9qRVl1a0k2UUErUG96S2R5UGNTWDZaWkl1MUdSUVhiZ3psRkhyOFh5ajI4RmlyTElcXG5QWDBObUs2MWZpRHE2YURDWFlUeklNRURocjVrQmlHYmpKeVg5NkVDZ1lFQTJlblFGV1NvNnplNHVTTm1BUEg2XFxuNXRTdGxQcHZ5ZHZGRGRWN3dLSWdSdkhTNUs4L093QkxRUVI2RnlsMUJXeGwvUVE2OWU5ZXM1MUtNK0pSR0VqZVxcbjkwTHRLUXhQbUZxSWo0RnpYSWN5UllUMldLbVByOUtFYk9SZWgyVkMvMnh6RHh4MGMrclJZN2RRaWlCOUFzVDlcXG5pUTdxdTFLT3dWOG5FZHFmSysxOHI5a0NnWUVBMXkvRk1Xa0t6MmtpOFZtNWMrN2l6eWs2WWJkLy9sZEJlVmtnXFxuUUk4SUIzUXF1WDNPUWIwMUprVk41d2laWEl5S3lBcmtkREM1NkhKWG5UbnJ6cCtBb1NmY1RRaUtkUlc3OWNjMVxcblp5aFc1aFA5MTg2eUhSVHRjYjY5MGVLU0I4VWdvb25OeUI5QWN4MDltdUVhQWNYaEpxUUhXSUZXVnRBcjAzOUlcXG42S1Z1d2NrQ2dZRUFyRWlsRVNUaVFBVnY4RC9DVjZENHd5TUdrYkJtVFd1Sm9lUlUwUG5kRnZuOXlIdWRQQ0tCXFxuWE1nVFZ0aWFBazJ2WEpqSm5NTkJWalJYQkNvNy96MHR1c09aQ1VrSWJPVzI3ZTVrckpUZTlBT3BXSFBHZkRXdVxcbktRRnNreE5HSXZjMUNJOXdxbXpPVzA0RlNROWlocHdEN3laeUF1UEVwYkY3REN5U2g0SmRnQkVDZ1lBVndtUGJcXG5TamJvb0VZRFI4SmtBYnozbThDbWp1cW5hbVZaZ3ZTcThvdXFUVW5ndGVMOGJNaUtGU242ZWJrZ1RhbmU3cE1KXFxuV01BRHpFUWx4dXljV1M2bG5TVSt1T1ZmVDVKUkdSTENXcWJtM3hDbEdPYVQ0RURlWnA1Rk1mYjRTQ3V6bytHbVxcbklkcmZpUTVvc2VoeVUzTWYrQ2d4LytvZUh6Qy9VemlwSmNsY1dRS0JnQ1FYRWQvaHh4OERIOHdPbVNXK0pCWmVcXG5SZ0NHQVNmSW1yZng1MEIyMmsxb3Q3RDRqb3EwNmprUURGMEJpVW9BVUtaUHpFdXM5WWd0SDN3bVVud0JBSU4rXFxudDNjc3M4Y3lFUnFVSTZzZHU1R1NqbjdWUU9FQlFNaVRYVWIyN1V5VVFFUDEvcE5iNlZQV3NSdS9yVkNGK3k1ZlxcblZnb21ySkV5VGlRTDUwZkphTUFpXFxuLS0tLS1FTkQgUFJJVkFURSBLRVktLS0tLVxcblwiLFxuXHRcImNsaWVudF9lbWFpbFwiOiBcImZpcmViYXNlLWFkbWluc2RrLTRzbWdwQGNyYWZ0eS1jYWlybi0xOTQwMDkuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb21cIixcblx0XCJjbGllbnRfaWRcIjogXCIxMDIxODQ1MTA2NzUxODM4ODY1NTdcIixcblx0XCJhdXRoX3VyaVwiOiBcImh0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbS9vL29hdXRoMi9hdXRoXCIsXG5cdFwidG9rZW5fdXJpXCI6IFwiaHR0cHM6Ly9vYXV0aDIuZ29vZ2xlYXBpcy5jb20vdG9rZW5cIixcblx0XCJhdXRoX3Byb3ZpZGVyX3g1MDlfY2VydF91cmxcIjogXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjEvY2VydHNcIixcblx0XCJjbGllbnRfeDUwOV9jZXJ0X3VybFwiOiBcImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3JvYm90L3YxL21ldGFkYXRhL3g1MDkvZmlyZWJhc2UtYWRtaW5zZGstNHNtZ3AlNDBjcmFmdHktY2Fpcm4tMTk0MDA5LmlhbS5nc2VydmljZWFjY291bnQuY29tXCJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb21wcmVzc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb29raWUtcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGVidWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS1hZG1pblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJoZWxtZXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb3JnYW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZXF1ZXN0LXByb21pc2UtbmF0aXZlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=