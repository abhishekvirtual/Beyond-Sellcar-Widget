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
                });
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
__webpack_require__(/*! ./public/css/main.css */ "./buildScripts/public/css/main.css");
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

/***/ "./buildScripts/public/css/main.css":
/*!******************************************!*\
  !*** ./buildScripts/public/css/main.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\r\n/* ==========================================================================\r\n   #FONT\r\n   ========================================================================== */\r\n.font-robo {\r\n  font-family: \"Roboto\", \"Arial\", \"Helvetica Neue\", sans-serif;\r\n}\r\n\r\n.font-poppins {\r\n  font-family: \"Poppins\", \"Arial\", \"Helvetica Neue\", sans-serif;\r\n}\r\n\r\n/* ==========================================================================\r\n   #GRID\r\n   ========================================================================== */\r\n.row {\r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: -moz-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-flex-wrap: wrap;\r\n  -ms-flex-wrap: wrap;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.row-space {\r\n  -webkit-box-pack: justify;\r\n  -webkit-justify-content: space-between;\r\n  -moz-box-pack: justify;\r\n  -ms-flex-pack: justify;\r\n  justify-content: space-between;\r\n}\r\n\r\n.col-2 {\r\n  width: -webkit-calc((100% - 30px) / 2);\r\n  width: -moz-calc((100% - 30px) / 2);\r\n  width: calc((100% - 30px) / 2);\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .col-2 {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n/* ==========================================================================\r\n   #BOX-SIZING\r\n   ========================================================================== */\r\n/**\r\n * More sensible default box-sizing:\r\n * css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice\r\n */\r\nhtml {\r\n  -webkit-box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n}\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n*, *:before, *:after {\r\n  -webkit-box-sizing: inherit;\r\n  -moz-box-sizing: inherit;\r\n  box-sizing: inherit;\r\n}\r\n\r\n/* ==========================================================================\r\n   #RESET\r\n   ========================================================================== */\r\n/**\r\n * A very simple reset that sits on top of Normalize.css.\r\n */\r\nbody,\r\nh1, h2, h3, h4, h5, h6,\r\nblockquote, p, pre,\r\ndl, dd, ol, ul,\r\nfigure,\r\nhr,\r\nfieldset, legend {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n/**\r\n * Remove trailing margins from nested lists.\r\n */\r\nli > ol,\r\nli > ul {\r\n  margin-bottom: 0;\r\n}\r\n\r\n/**\r\n * Remove default table spacing.\r\n */\r\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}\r\n\r\n/**\r\n * 1. Reset Chrome and Firefox behaviour which sets a `min-width: min-content;`\r\n *    on fieldsets.\r\n */\r\nfieldset {\r\n  min-width: 0;\r\n  /* [1] */\r\n  border: 0;\r\n}\r\n\r\nbutton {\r\n  outline: none;\r\n  background: none;\r\n  border: none;\r\n}\r\n\r\n/* ==========================================================================\r\n   #PAGE WRAPPER\r\n   ========================================================================== */\r\n.page-wrapper {\r\n  min-height: 100vh;\r\n}\r\n\r\nbody {\r\n  font-family: \"Poppins\", \"Arial\", \"Helvetica Neue\", sans-serif;\r\n  font-weight: 400;\r\n  font-size: 14px;\r\n}\r\n\r\nh1, h2, h3, h4, h5, h6 {\r\n  font-weight: 400;\r\n}\r\n\r\nh1 {\r\n  font-size: 36px;\r\n}\r\n\r\nh2 {\r\n  font-size: 30px;\r\n}\r\n\r\nh3 {\r\n  font-size: 24px;\r\n}\r\n\r\nh4 {\r\n  font-size: 18px;\r\n}\r\n\r\nh5 {\r\n  font-size: 15px;\r\n}\r\n\r\nh6 {\r\n  font-size: 13px;\r\n}\r\n\r\n/* ==========================================================================\r\n   #BACKGROUND\r\n   ========================================================================== */\r\n.bg-blue {\r\n  background: #2c6ed5;\r\n}\r\n\r\n.bg-red {\r\n  background: #fa4251;\r\n}\r\n\r\n.bg-gra-01 {\r\n  background: -webkit-gradient(linear, left bottom, left top, from(#fbc2eb), to(#a18cd1));\r\n  background: -webkit-linear-gradient(bottom, #fbc2eb 0%, #a18cd1 100%);\r\n  background: -moz-linear-gradient(bottom, #fbc2eb 0%, #a18cd1 100%);\r\n  background: -o-linear-gradient(bottom, #fbc2eb 0%, #a18cd1 100%);\r\n  background: linear-gradient(to top, #fbc2eb 0%, #a18cd1 100%);\r\n}\r\n\r\n.bg-gra-02 {\r\n  background: -webkit-gradient(linear, left bottom, right top, from(#fc2c77), to(#6c4079));\r\n  background: -webkit-linear-gradient(bottom left, #fc2c77 0%, #6c4079 100%);\r\n  background: -moz-linear-gradient(bottom left, #fc2c77 0%, #6c4079 100%);\r\n  background: -o-linear-gradient(bottom left, #fc2c77 0%, #6c4079 100%);\r\n  background: linear-gradient(to top right, #fc2c77 0%, #6c4079 100%);\r\n}\r\n\r\n/* ==========================================================================\r\n   #SPACING\r\n   ========================================================================== */\r\n.p-t-100 {\r\n  padding-top: 100px;\r\n}\r\n\r\n.p-t-130 {\r\n  padding-top: 130px;\r\n}\r\n\r\n.p-t-180 {\r\n  padding-top: 180px;\r\n}\r\n\r\n.p-t-20 {\r\n  padding-top: 20px;\r\n}\r\n\r\n.p-t-15 {\r\n  padding-top: 15px;\r\n}\r\n\r\n.p-t-10 {\r\n  padding-top: 10px;\r\n}\r\n\r\n.p-t-30 {\r\n  padding-top: 30px;\r\n}\r\n\r\n.p-b-100 {\r\n  padding-bottom: 100px;\r\n}\r\n\r\n.m-r-45 {\r\n  margin-right: 45px;\r\n}\r\n\r\n/* ==========================================================================\r\n   #WRAPPER\r\n   ========================================================================== */\r\n.wrapper {\r\n  margin: 0 auto;\r\n}\r\n\r\n.wrapper--w960 {\r\n  max-width: 960px;\r\n}\r\n\r\n.wrapper--w780 {\r\n  max-width: 780px;\r\n}\r\n\r\n.wrapper--w680 {\r\n  max-width: 680px;\r\n}\r\n\r\n/* ==========================================================================\r\n   #BUTTON\r\n   ========================================================================== */\r\n.btn {\r\n  display: inline-block;\r\n  line-height: 50px;\r\n  padding: 0 50px;\r\n  -webkit-transition: all 0.4s ease;\r\n  -o-transition: all 0.4s ease;\r\n  -moz-transition: all 0.4s ease;\r\n  transition: all 0.4s ease;\r\n  cursor: pointer;\r\n  font-size: 18px;\r\n  color: #fff;\r\n  font-family: \"Poppins\", \"Arial\", \"Helvetica Neue\", sans-serif;\r\n}\r\n\r\n.btn--radius {\r\n  -webkit-border-radius: 3px;\r\n  -moz-border-radius: 3px;\r\n  border-radius: 3px;\r\n}\r\n\r\n.btn--radius-2 {\r\n  -webkit-border-radius: 5px;\r\n  -moz-border-radius: 5px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.btn--pill {\r\n  -webkit-border-radius: 20px;\r\n  -moz-border-radius: 20px;\r\n  border-radius: 20px;\r\n}\r\n\r\n.btn--green {\r\n  background: #57b846;\r\n}\r\n\r\n.btn--green:hover {\r\n  background: #4dae3c;\r\n}\r\n\r\n.btn--blue {\r\n  background: #4272d7;\r\n}\r\n\r\n.btn--blue:hover {\r\n  background: #3868cd;\r\n}\r\n\r\n/* ==========================================================================\r\n   #DATE PICKER\r\n   ========================================================================== */\r\ntd.active {\r\n  background-color: #2c6ed5;\r\n}\r\n\r\ninput[type=\"date\" i] {\r\n  padding: 14px;\r\n}\r\n\r\n.table-condensed td, .table-condensed th {\r\n  font-size: 14px;\r\n  font-family: \"Roboto\", \"Arial\", \"Helvetica Neue\", sans-serif;\r\n  font-weight: 400;\r\n}\r\n\r\n.daterangepicker td {\r\n  width: 40px;\r\n  height: 30px;\r\n}\r\n\r\n.daterangepicker {\r\n  border: none;\r\n  -webkit-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);\r\n  -moz-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);\r\n  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);\r\n  display: none;\r\n  border: 1px solid #e0e0e0;\r\n  margin-top: 5px;\r\n}\r\n\r\n.daterangepicker::after, .daterangepicker::before {\r\n  display: none;\r\n}\r\n\r\n.daterangepicker thead tr th {\r\n  padding: 10px 0;\r\n}\r\n\r\n.daterangepicker .table-condensed th select {\r\n  border: 1px solid #ccc;\r\n  -webkit-border-radius: 3px;\r\n  -moz-border-radius: 3px;\r\n  border-radius: 3px;\r\n  font-size: 14px;\r\n  padding: 5px;\r\n  outline: none;\r\n}\r\n\r\n/* ==========================================================================\r\n   #FORM\r\n   ========================================================================== */\r\ninput {\r\n  outline: none;\r\n  margin: 0;\r\n  border: none;\r\n  -webkit-box-shadow: none;\r\n  -moz-box-shadow: none;\r\n  box-shadow: none;\r\n  width: 100%;\r\n  font-size: 14px;\r\n  font-family: inherit;\r\n}\r\n\r\n.input--style-4 {\r\n  line-height: 50px;\r\n  background: #fafafa;\r\n  -webkit-box-shadow: inset 0px 1px 3px 0px rgba(0, 0, 0, 0.08);\r\n  -moz-box-shadow: inset 0px 1px 3px 0px rgba(0, 0, 0, 0.08);\r\n  box-shadow: inset 0px 1px 3px 0px rgba(0, 0, 0, 0.08);\r\n  -webkit-border-radius: 5px;\r\n  -moz-border-radius: 5px;\r\n  border-radius: 5px;\r\n  padding: 0 20px;\r\n  font-size: 16px;\r\n  color: #666;\r\n  -webkit-transition: all 0.4s ease;\r\n  -o-transition: all 0.4s ease;\r\n  -moz-transition: all 0.4s ease;\r\n  transition: all 0.4s ease;\r\n}\r\n\r\n.input--style-4::-webkit-input-placeholder {\r\n  /* WebKit, Blink, Edge */\r\n  color: #666;\r\n}\r\n\r\n.input--style-4:-moz-placeholder {\r\n  /* Mozilla Firefox 4 to 18 */\r\n  color: #666;\r\n  opacity: 1;\r\n}\r\n\r\n.input--style-4::-moz-placeholder {\r\n  /* Mozilla Firefox 19+ */\r\n  color: #666;\r\n  opacity: 1;\r\n}\r\n\r\n.input--style-4:-ms-input-placeholder {\r\n  /* Internet Explorer 10-11 */\r\n  color: #666;\r\n}\r\n\r\n.input--style-4:-ms-input-placeholder {\r\n  /* Microsoft Edge */\r\n  color: #666;\r\n}\r\n\r\n.label {\r\n  font-size: 16px;\r\n  color: #555;\r\n  text-transform: capitalize;\r\n  display: block;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.radio-container {\r\n  display: inline-block;\r\n  position: relative;\r\n  padding-left: 30px;\r\n  cursor: pointer;\r\n  font-size: 16px;\r\n  color: #666;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n.radio-container input {\r\n  position: absolute;\r\n  opacity: 0;\r\n  cursor: pointer;\r\n}\r\n\r\n.radio-container input:checked ~ .checkmark {\r\n  background-color: #e5e5e5;\r\n}\r\n\r\n.radio-container input:checked ~ .checkmark:after {\r\n  display: block;\r\n}\r\n\r\n.radio-container .checkmark:after {\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n  -moz-transform: translate(-50%, -50%);\r\n  -ms-transform: translate(-50%, -50%);\r\n  -o-transform: translate(-50%, -50%);\r\n  transform: translate(-50%, -50%);\r\n  width: 12px;\r\n  height: 12px;\r\n  -webkit-border-radius: 50%;\r\n  -moz-border-radius: 50%;\r\n  border-radius: 50%;\r\n  background: #57b846;\r\n}\r\n\r\n.checkmark {\r\n  position: absolute;\r\n  top: 50%;\r\n  -webkit-transform: translateY(-50%);\r\n  -moz-transform: translateY(-50%);\r\n  -ms-transform: translateY(-50%);\r\n  -o-transform: translateY(-50%);\r\n  transform: translateY(-50%);\r\n  left: 0;\r\n  height: 20px;\r\n  width: 20px;\r\n  background-color: #e5e5e5;\r\n  -webkit-border-radius: 50%;\r\n  -moz-border-radius: 50%;\r\n  border-radius: 50%;\r\n  -webkit-box-shadow: inset 0px 1px 3px 0px rgba(0, 0, 0, 0.08);\r\n  -moz-box-shadow: inset 0px 1px 3px 0px rgba(0, 0, 0, 0.08);\r\n  box-shadow: inset 0px 1px 3px 0px rgba(0, 0, 0, 0.08);\r\n}\r\n\r\n.checkmark:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  display: none;\r\n}\r\n\r\n.input-group {\r\n  position: relative;\r\n  margin-bottom: 22px;\r\n}\r\n\r\n.input-group-icon {\r\n  position: relative;\r\n}\r\n\r\n.input-icon {\r\n  position: absolute;\r\n  font-size: 18px;\r\n  color: #999;\r\n  right: 18px;\r\n  top: 50%;\r\n  -webkit-transform: translateY(-50%);\r\n  -moz-transform: translateY(-50%);\r\n  -ms-transform: translateY(-50%);\r\n  -o-transform: translateY(-50%);\r\n  transform: translateY(-50%);\r\n  cursor: pointer;\r\n}\r\n\r\n/* ==========================================================================\r\n   #SELECT2\r\n   ========================================================================== */\r\n.select--no-search .select2-search {\r\n  display: none !important;\r\n}\r\n\r\n.rs-select2 .select2-container {\r\n  width: 100% !important;\r\n  outline: none;\r\n  background: #fafafa;\r\n  -webkit-box-shadow: inset 0px 1px 3px 0px rgba(0, 0, 0, 0.08);\r\n  -moz-box-shadow: inset 0px 1px 3px 0px rgba(0, 0, 0, 0.08);\r\n  box-shadow: inset 0px 1px 3px 0px rgba(0, 0, 0, 0.08);\r\n  -webkit-border-radius: 5px;\r\n  -moz-border-radius: 5px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.rs-select2 .select2-container .select2-selection--single {\r\n  outline: none;\r\n  border: none;\r\n  height: 50px;\r\n  background: transparent;\r\n}\r\n\r\n.rs-select2 .select2-container .select2-selection--single .select2-selection__rendered {\r\n  line-height: 50px;\r\n  padding-left: 0;\r\n  color: #555;\r\n  font-size: 16px;\r\n  font-family: inherit;\r\n  padding-left: 22px;\r\n  padding-right: 50px;\r\n}\r\n\r\n.rs-select2 .select2-container .select2-selection--single .select2-selection__arrow {\r\n  height: 50px;\r\n  right: 20px;\r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: -moz-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n  -webkit-justify-content: center;\r\n  -moz-box-pack: center;\r\n  -ms-flex-pack: center;\r\n  justify-content: center;\r\n  -webkit-box-align: center;\r\n  -webkit-align-items: center;\r\n  -moz-box-align: center;\r\n  -ms-flex-align: center;\r\n  align-items: center;\r\n}\r\n\r\n.rs-select2 .select2-container .select2-selection--single .select2-selection__arrow b {\r\n  display: none;\r\n}\r\n\r\n.rs-select2 .select2-container .select2-selection--single .select2-selection__arrow:after {\r\n  font-family: \"Material-Design-Iconic-Font\";\r\n  content: '\\f2f9';\r\n  font-size: 24px;\r\n  color: #999;\r\n  -webkit-transition: all 0.4s ease;\r\n  -o-transition: all 0.4s ease;\r\n  -moz-transition: all 0.4s ease;\r\n  transition: all 0.4s ease;\r\n}\r\n\r\n.rs-select2 .select2-container.select2-container--open .select2-selection--single .select2-selection__arrow::after {\r\n  -webkit-transform: rotate(-180deg);\r\n  -moz-transform: rotate(-180deg);\r\n  -ms-transform: rotate(-180deg);\r\n  -o-transform: rotate(-180deg);\r\n  transform: rotate(-180deg);\r\n}\r\n\r\n.select2-container--open .select2-dropdown--below {\r\n  border: none;\r\n  -webkit-border-radius: 3px;\r\n  -moz-border-radius: 3px;\r\n  border-radius: 3px;\r\n  -webkit-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);\r\n  -moz-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);\r\n  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);\r\n  border: 1px solid #e0e0e0;\r\n  margin-top: 5px;\r\n  overflow: hidden;\r\n}\r\n\r\n.select2-container--default .select2-results__option {\r\n  padding-left: 22px;\r\n}\r\n\r\n/* ==========================================================================\r\n   #TITLE\r\n   ========================================================================== */\r\n.title {\r\n  font-size: 24px;\r\n  color: #525252;\r\n  font-weight: 400;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n/* ==========================================================================\r\n   #CARD\r\n   ========================================================================== */\r\n.card {\r\n  -webkit-border-radius: 3px;\r\n  -moz-border-radius: 3px;\r\n  border-radius: 3px;\r\n  background: #fff;\r\n}\r\n\r\n.card-4 {\r\n  background: #fff;\r\n  -webkit-border-radius: 10px;\r\n  -moz-border-radius: 10px;\r\n  border-radius: 10px;\r\n  -webkit-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);\r\n  -moz-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);\r\n  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);\r\n}\r\n\r\n.card-4 .card-body {\r\n  padding: 57px 65px;\r\n  padding-bottom: 65px;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .card-4 .card-body {\r\n    padding: 50px 40px;\r\n  }\r\n}\r\n", ""]);



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

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYnVpbGRTY3JpcHRzL2NvbnRyb2xsZXJzL2NhclBvc3QudHMiLCJ3ZWJwYWNrOi8vLy4vYnVpbGRTY3JpcHRzL2luZGV4LnRzIiwid2VicGFjazovLy8uL2J1aWxkU2NyaXB0cy9wdWJsaWMvY3NzL21haW4uY3NzIiwid2VicGFjazovLy8uL2J1aWxkU2NyaXB0cy9zcmNTZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlQWNjb3VudEtleS5qc29uNSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvbXByZXNzaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29va2llLXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkZWJ1Z1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS1hZG1pblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImhlbG1ldFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb3JnYW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVxdWVzdC1wcm9taXNlLW5hdGl2ZVwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IHsgTmV4dEZ1bmN0aW9uLCBSZXF1ZXN0LCBSZXNwb25zZSwgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgKiBhcyByZXF1ZXN0IGZyb20gXCJyZXF1ZXN0LXByb21pc2UtbmF0aXZlXCI7XG5pbXBvcnQgKiBhcyBhZG1pbiBmcm9tICdmaXJlYmFzZS1hZG1pbic7XG5pbXBvcnQgeyBwcm9taXNlcyB9IGZyb20gJ2ZzJztcbmV4cG9ydCBjbGFzcyBDYXJQb3N0IHtcbiAgcHVibGljIHJvdXRlcjogUm91dGVyO1xuICBwdWJsaWMgZGF0YWJhc2VSZWY6YW55O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucm91dGVyID0gUm91dGVyKCk7XG4gICAgdGhpcy5yb3V0ZXMoKTtcbiAgfVxuICBwdWJsaWMgYXN5bmMgY3JlYXRlKFxuICAgIHJlcTogUmVxdWVzdCxcbiAgICByZXM6IFJlc3BvbnNlLFxuICAgIG5leHQ6IE5leHRGdW5jdGlvbixcbiAgKTogUHJvbWlzZTxSZXNwb25zZSB8IHZvaWQ+IHtcbiAgICBjb25zdCB7XG4gICAgICBjYXJDb2xvdXIsY3VzdG9tZXJOYW1lLGNhck1ha2UscGhvbmVOdW1iZXIsY2FyTWlsZWFnZSxjYW5EaXJlY3RTYWxlLGNhclllYXIsY2FyTW9kZWwsZW1haWxcbiAgICB9ID0gcmVxLmJvZHk7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBkYXRhcyA9IHtcbiAgICAgICAgXCJjYXJDb2xvdXJcIjpyZXEuYm9keS5jYXJDb2xvdXIsXG4gICAgICAgIFwiY3VzdG9tZXJOYW1lXCI6cmVxLmJvZHkuY3VzdG9tZXJOYW1lLFxuICAgICAgICBcImNhck1ha2VcIjpyZXEuYm9keS5jYXJNYWtlLFxuICAgICAgICBcInBob25lTnVtYmVyXCI6cmVxLmJvZHkucGhvbmVOdW1iZXIsXG4gICAgICAgIFwiY2FyTWlsZWFnZVwiOnJlcS5ib2R5LmNhck1pbGVhZ2UsXG4gICAgICAgIFwiY2FuRGlyZWN0U2FsZVwiOnJlcS5ib2R5LmNhbkRpcmVjdFNhbGUsXG4gICAgICAgIFwiY2FyWWVhclwiOnJlcS5ib2R5LmNhclllYXIsXG4gICAgICAgIFwiY2FyTW9kZWxcIjpyZXEuYm9keS5jYXJNb2RlbCxcbiAgICAgICAgXCJlbWFpbFwiOnJlcS5ib2R5LmVtYWlsLFxuICAgICAgICB9XG4gICAgICBsZXQgZGF0YWJhc2VSZWYgPSBhZG1pbi5kYXRhYmFzZSgpLnJlZigpO1xuICAgICAgbGV0IHVzZXJzUmVmID0gZGF0YWJhc2VSZWYuY2hpbGQoXCJ1c2Vyc1wiKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IHVzZXJzUmVmLnB1c2goZGF0YXMpLnRoZW4oKHNuYXApPT57XG5cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgYm9keToge1widGV4dFwiOiBgPGh0dHBzOi8vYWxlcnQtc3lzdGVtLmNvbS9hbGVydHMvMTIzNHwgJHtyZXEuYm9keS5jYW5EaXJlY3RTYWxlfTogJHtyZXEuYm9keS5jYXJZZWFyfSwsJHtyZXEuYm9keS5jYXJNb2RlbH0sJHtyZXEuYm9keS5jYXJZZWFyfSwke3JlcS5ib2R5LmNhckNvbG91cn0oJHtyZXEuYm9keS5jYXJNaWxlYWdlfS8ke3JlcS5ib2R5LmN1c3RvbWVyTmFtZX0pPmB9LFxuICAgICAgICAgIGpzb246IHRydWUsXG4gICAgICAgICAgdXJpOiAnaHR0cHM6Ly9ob29rcy5zbGFjay5jb20vc2VydmljZXMvVEZLVjRSUDZVL0JGTEdLTlRMNC9EVGZkcVE4T2x3YlEzM2c4Nmp4MEllUzgnLFxuICAgICAgICB9O1xuICAvL2h0dHBzOi8vaG9va3Muc2xhY2suY29tL3NlcnZpY2VzL1RFUjYyTEhHOC9CRjVUQ1AwNzkvMnlUZDhmMEp4WFVMRnJ1SmVtdWE5bDlkIC8vY2xpZW50IGNoZW5uZWxcbiAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlcXVlc3Qob3B0aW9ucykudGhlbihkYXRhPT57XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgfSkuY2F0Y2goZXJyPT57XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICB9KTtcblxuICAgICAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IGRhdGEsIG1lc3NhZ2U6ICdzdWNjZXNzJyB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIG5leHQoZXJyb3IubWVzc2FnZSk7XG4gICAgfVxuICB9XG5cblxuICBwdWJsaWMgYXN5bmMgY3JlYXRlTGVhZChcbiAgICByZXE6IFJlcXVlc3QsXG4gICAgcmVzOiBSZXNwb25zZSxcbiAgICBuZXh0OiBOZXh0RnVuY3Rpb24sXG4gICk6IFByb21pc2U8UmVzcG9uc2UgfCB2b2lkPiB7XG4gICAgY29uc3Qge1xuICAgICAgY29uc2lnblByaWNlLGRlYWxlclByaWNlLGRlYWxlcm9ubHksY29uc2lnbm9ubHksY29uc2lnbmRlYWxlclxuICAgIH0gPSByZXEuYm9keTtcbiAgICB0cnkge1xuICAgICAgbGV0IGRiID0gYWRtaW4uZGF0YWJhc2UoKS5yZWYoKTtcbiAgICAgIGxldCB1c2Vyc1JlZiA9IGRiLmNoaWxkKFwibGVhZHNcIik7XG4gICAgICBsZXQgZGF0YXMgPSB7XG4gICAgICAgIFwiY29uc2lnblByaWNlXCI6cmVxLmJvZHkuY29uc2lnblByaWNlLFxuICAgICAgICBcImRlYWxlclByaWNlXCI6cmVxLmJvZHkuZGVhbGVyUHJpY2UsXG4gICAgICAgIFwiZGVhbGVyb25seVwiOnJlcS5ib2R5LmRlYWxlcm9ubHksXG4gICAgICAgIFwiY29uc2lnbm9ubHlcIjpyZXEuYm9keS5jb25zaWdub25seSxcbiAgICAgICAgXCJjb25zaWduZGVhbGVyXCI6cmVxLmJvZHkuY29uc2lnbmRlYWxlcixcbiAgICAgICB9XG4gICAgICAgY29uc3QgZGF0YSA9IHVzZXJzUmVmLnB1c2goZGF0YXMpO1xuICAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgZGF0YSwgbWVzc2FnZTogJ3N1Y2Nlc3MnIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gbmV4dChlcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuXG4gIHB1YmxpYyByb3V0ZXMoKSB7XG4gICAgdGhpcy5yb3V0ZXIucG9zdCgnL2NhcicsIHRoaXMuY3JlYXRlKTtcbiAgICB0aGlzLnJvdXRlci5wb3N0KCcvbGVhZHMnLCB0aGlzLmNyZWF0ZUxlYWQpO1xuICB9XG59XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZVxuXG5pbXBvcnQgKiBhcyBkZWJ1ZyBmcm9tICdkZWJ1Zyc7XG5pbXBvcnQgKiBhcyBodHRwIGZyb20gJ2h0dHAnO1xuaW1wb3J0IFNlcnZlciBmcm9tICcuL3NyY1NlcnZlcic7XG5pbXBvcnQgJy4vcHVibGljL2Nzcy9tYWluLmNzcyc7XG4vL2RlYnVnKCd0cy1leHByZXNzOnNlcnZlcicpO1xuXG5jb25zdCBwb3J0ID0gbm9ybWFsaXplUG9ydChwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDApO1xuXG5cblNlcnZlci5zZXQoJ3BvcnQnLCBwb3J0KTtcblxuY29uc29sZS5sb2coYFNlcnZlciBsaXN0ZW5pbmcgb24gcG9ydCAke3BvcnR9YCk7XG5cbmNvbnN0IHNlcnZlciA9IGh0dHAuY3JlYXRlU2VydmVyKFNlcnZlcik7XG5zZXJ2ZXIubGlzdGVuKHBvcnQpO1xuc2VydmVyLm9uKCdlcnJvcicsIG9uRXJyb3IpO1xuc2VydmVyLm9uKCdsaXN0ZW5pbmcnLCBvbkxpc3RlbmluZyk7XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVBvcnQodmFsOiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXIgfCBzdHJpbmcgfCBib29sZWFuIHtcbiAgY29uc3QgcG9ydDogbnVtYmVyID0gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgPyBwYXJzZUludCh2YWwsIDEwKSA6IHZhbDtcbiAgaWYgKGlzTmFOKHBvcnQpKSB7XG4gICAgcmV0dXJuIHZhbDtcbiAgfSBlbHNlIGlmIChwb3J0ID49IDApIHtcbiAgICByZXR1cm4gcG9ydDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gb25FcnJvcihlcnJvcjogTm9kZUpTLkVycm5vRXhjZXB0aW9uKTogdm9pZCB7XG4gIGlmIChlcnJvci5zeXNjYWxsICE9PSAnbGlzdGVuJykge1xuICAgIHRocm93IGVycm9yO1xuICB9XG4gIGNvbnN0IGJpbmQgPSB0eXBlb2YgcG9ydCA9PT0gJ3N0cmluZycgPyAnUGlwZSAnICsgcG9ydCA6ICdQb3J0ICcgKyBwb3J0O1xuICBzd2l0Y2ggKGVycm9yLmNvZGUpIHtcbiAgICBjYXNlICdFQUNDRVMnOlxuICAgICAgY29uc29sZS5lcnJvcihgJHtiaW5kfSByZXF1aXJlcyBlbGV2YXRlZCBwcml2aWxlZ2VzYCk7XG4gICAgICBwcm9jZXNzLmV4aXQoMSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdFQUREUklOVVNFJzpcbiAgICAgIGNvbnNvbGUuZXJyb3IoYCR7YmluZH0gaXMgYWxyZWFkeSBpbiB1c2VgKTtcbiAgICAgIHByb2Nlc3MuZXhpdCgxKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5mdW5jdGlvbiBvbkxpc3RlbmluZygpOiB2b2lkIHtcbiAgY29uc3QgYWRkciA9IHNlcnZlci5hZGRyZXNzKCk7XG4gIGNvbnN0IGJpbmQgPSB0eXBlb2YgYWRkciA9PT0gJ3N0cmluZycgPyBgcGlwZSAke2FkZHJ9YCA6IGBwb3J0ICR7YWRkci5wb3J0fWA7XG4gIGRlYnVnKGBMaXN0ZW5pbmcgb24gJHtiaW5kfWApO1xufVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXHJcXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbiAgICNGT05UXFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG4uZm9udC1yb2JvIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgXFxcIkFyaWFsXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvbnQtcG9wcGlucyB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBcXFwiQXJpYWxcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbiAgICNHUklEXFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG4ucm93IHtcXHJcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcclxcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcclxcbiAgZGlzcGxheTogLW1vei1ib3g7XFxyXFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIC1tcy1mbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxufVxcclxcblxcclxcbi5yb3ctc3BhY2Uge1xcclxcbiAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcXHJcXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgLW1vei1ib3gtcGFjazoganVzdGlmeTtcXHJcXG4gIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5jb2wtMiB7XFxyXFxuICB3aWR0aDogLXdlYmtpdC1jYWxjKCgxMDAlIC0gMzBweCkgLyAyKTtcXHJcXG4gIHdpZHRoOiAtbW96LWNhbGMoKDEwMCUgLSAzMHB4KSAvIDIpO1xcclxcbiAgd2lkdGg6IGNhbGMoKDEwMCUgLSAzMHB4KSAvIDIpO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXHJcXG4gIC5jb2wtMiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbiAgICNCT1gtU0laSU5HXFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG4vKipcXHJcXG4gKiBNb3JlIHNlbnNpYmxlIGRlZmF1bHQgYm94LXNpemluZzpcXHJcXG4gKiBjc3MtdHJpY2tzLmNvbS9pbmhlcml0aW5nLWJveC1zaXppbmctcHJvYmFibHktc2xpZ2h0bHktYmV0dGVyLWJlc3QtcHJhY3RpY2VcXHJcXG4gKi9cXHJcXG5odG1sIHtcXHJcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xcclxcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBpbmhlcml0O1xcclxcbiAgLW1vei1ib3gtc2l6aW5nOiBpbmhlcml0O1xcclxcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4gICAjUkVTRVRcXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcbi8qKlxcclxcbiAqIEEgdmVyeSBzaW1wbGUgcmVzZXQgdGhhdCBzaXRzIG9uIHRvcCBvZiBOb3JtYWxpemUuY3NzLlxcclxcbiAqL1xcclxcbmJvZHksXFxyXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNixcXHJcXG5ibG9ja3F1b3RlLCBwLCBwcmUsXFxyXFxuZGwsIGRkLCBvbCwgdWwsXFxyXFxuZmlndXJlLFxcclxcbmhyLFxcclxcbmZpZWxkc2V0LCBsZWdlbmQge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUmVtb3ZlIHRyYWlsaW5nIG1hcmdpbnMgZnJvbSBuZXN0ZWQgbGlzdHMuXFxyXFxuICovXFxyXFxubGkgPiBvbCxcXHJcXG5saSA+IHVsIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFJlbW92ZSBkZWZhdWx0IHRhYmxlIHNwYWNpbmcuXFxyXFxuICovXFxyXFxudGFibGUge1xcclxcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBSZXNldCBDaHJvbWUgYW5kIEZpcmVmb3ggYmVoYXZpb3VyIHdoaWNoIHNldHMgYSBgbWluLXdpZHRoOiBtaW4tY29udGVudDtgXFxyXFxuICogICAgb24gZmllbGRzZXRzLlxcclxcbiAqL1xcclxcbmZpZWxkc2V0IHtcXHJcXG4gIG1pbi13aWR0aDogMDtcXHJcXG4gIC8qIFsxXSAqL1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuICAgI1BBR0UgV1JBUFBFUlxcclxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuLnBhZ2Utd3JhcHBlciB7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBcXFwiQXJpYWxcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG59XFxyXFxuXFxyXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICBmb250LXNpemU6IDM2cHg7XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuaDMge1xcclxcbiAgZm9udC1zaXplOiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oNCB7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxufVxcclxcblxcclxcbmg1IHtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuaDYge1xcclxcbiAgZm9udC1zaXplOiAxM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbiAgICNCQUNLR1JPVU5EXFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG4uYmctYmx1ZSB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMmM2ZWQ1O1xcclxcbn1cXHJcXG5cXHJcXG4uYmctcmVkIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNmYTQyNTE7XFxyXFxufVxcclxcblxcclxcbi5iZy1ncmEtMDEge1xcclxcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgYm90dG9tLCBsZWZ0IHRvcCwgZnJvbSgjZmJjMmViKSwgdG8oI2ExOGNkMSkpO1xcclxcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoYm90dG9tLCAjZmJjMmViIDAlLCAjYTE4Y2QxIDEwMCUpO1xcclxcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoYm90dG9tLCAjZmJjMmViIDAlLCAjYTE4Y2QxIDEwMCUpO1xcclxcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KGJvdHRvbSwgI2ZiYzJlYiAwJSwgI2ExOGNkMSAxMDAlKTtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICNmYmMyZWIgMCUsICNhMThjZDEgMTAwJSk7XFxyXFxufVxcclxcblxcclxcbi5iZy1ncmEtMDIge1xcclxcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgYm90dG9tLCByaWdodCB0b3AsIGZyb20oI2ZjMmM3NyksIHRvKCM2YzQwNzkpKTtcXHJcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGJvdHRvbSBsZWZ0LCAjZmMyYzc3IDAlLCAjNmM0MDc5IDEwMCUpO1xcclxcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoYm90dG9tIGxlZnQsICNmYzJjNzcgMCUsICM2YzQwNzkgMTAwJSk7XFxyXFxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoYm90dG9tIGxlZnQsICNmYzJjNzcgMCUsICM2YzQwNzkgMTAwJSk7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAjZmMyYzc3IDAlLCAjNmM0MDc5IDEwMCUpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbiAgICNTUEFDSU5HXFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG4ucC10LTEwMCB7XFxyXFxuICBwYWRkaW5nLXRvcDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5wLXQtMTMwIHtcXHJcXG4gIHBhZGRpbmctdG9wOiAxMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnAtdC0xODAge1xcclxcbiAgcGFkZGluZy10b3A6IDE4MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucC10LTIwIHtcXHJcXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucC10LTE1IHtcXHJcXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucC10LTEwIHtcXHJcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucC10LTMwIHtcXHJcXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucC1iLTEwMCB7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5tLXItNDUge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA0NXB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbiAgICNXUkFQUEVSXFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG4ud3JhcHBlciB7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLndyYXBwZXItLXc5NjAge1xcclxcbiAgbWF4LXdpZHRoOiA5NjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLndyYXBwZXItLXc3ODAge1xcclxcbiAgbWF4LXdpZHRoOiA3ODBweDtcXHJcXG59XFxyXFxuXFxyXFxuLndyYXBwZXItLXc2ODAge1xcclxcbiAgbWF4LXdpZHRoOiA2ODBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4gICAjQlVUVE9OXFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG4uYnRuIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xcclxcbiAgcGFkZGluZzogMCA1MHB4O1xcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xcclxcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcXHJcXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIFxcXCJBcmlhbFxcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5idG4tLXJhZGl1cyB7XFxyXFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gIC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLS1yYWRpdXMtMiB7XFxyXFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLS1waWxsIHtcXHJcXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIC1tb3otYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5idG4tLWdyZWVuIHtcXHJcXG4gIGJhY2tncm91bmQ6ICM1N2I4NDY7XFxyXFxufVxcclxcblxcclxcbi5idG4tLWdyZWVuOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICM0ZGFlM2M7XFxyXFxufVxcclxcblxcclxcbi5idG4tLWJsdWUge1xcclxcbiAgYmFja2dyb3VuZDogIzQyNzJkNztcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi0tYmx1ZTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMzg2OGNkO1xcclxcbn1cXHJcXG5cXHJcXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbiAgICNEQVRFIFBJQ0tFUlxcclxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxudGQuYWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYzZlZDU7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcImRhdGVcXFwiIGldIHtcXHJcXG4gIHBhZGRpbmc6IDE0cHg7XFxyXFxufVxcclxcblxcclxcbi50YWJsZS1jb25kZW5zZWQgdGQsIC50YWJsZS1jb25kZW5zZWQgdGgge1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBcXFwiQXJpYWxcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmRhdGVyYW5nZXBpY2tlciB0ZCB7XFxyXFxuICB3aWR0aDogNDBweDtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRhdGVyYW5nZXBpY2tlciB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA4cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcXHJcXG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDhweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcclxcbiAgYm94LXNoYWRvdzogMHB4IDhweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XFxyXFxuICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5kYXRlcmFuZ2VwaWNrZXI6OmFmdGVyLCAuZGF0ZXJhbmdlcGlja2VyOjpiZWZvcmUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhdGVyYW5nZXBpY2tlciB0aGVhZCB0ciB0aCB7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDA7XFxyXFxufVxcclxcblxcclxcbi5kYXRlcmFuZ2VwaWNrZXIgLnRhYmxlLWNvbmRlbnNlZCB0aCBzZWxlY3Qge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXHJcXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbiAgICNGT1JNXFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5pbnB1dCB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xcclxcbiAgLW1vei1ib3gtc2hhZG93OiBub25lO1xcclxcbiAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC0tc3R5bGUtNCB7XFxyXFxuICBsaW5lLWhlaWdodDogNTBweDtcXHJcXG4gIGJhY2tncm91bmQ6ICNmYWZhZmE7XFxyXFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDBweCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xcclxcbiAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwcHggMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xcclxcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHBhZGRpbmc6IDAgMjBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGNvbG9yOiAjNjY2O1xcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xcclxcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcXHJcXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC0tc3R5bGUtNDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XFxyXFxuICAvKiBXZWJLaXQsIEJsaW5rLCBFZGdlICovXFxyXFxuICBjb2xvcjogIzY2NjtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LS1zdHlsZS00Oi1tb3otcGxhY2Vob2xkZXIge1xcclxcbiAgLyogTW96aWxsYSBGaXJlZm94IDQgdG8gMTggKi9cXHJcXG4gIGNvbG9yOiAjNjY2O1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LS1zdHlsZS00OjotbW96LXBsYWNlaG9sZGVyIHtcXHJcXG4gIC8qIE1vemlsbGEgRmlyZWZveCAxOSsgKi9cXHJcXG4gIGNvbG9yOiAjNjY2O1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LS1zdHlsZS00Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxyXFxuICAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xcclxcbiAgY29sb3I6ICM2NjY7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC0tc3R5bGUtNDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xcclxcbiAgLyogTWljcm9zb2Z0IEVkZ2UgKi9cXHJcXG4gIGNvbG9yOiAjNjY2O1xcclxcbn1cXHJcXG5cXHJcXG4ubGFiZWwge1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgY29sb3I6ICM1NTU7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmFkaW8tY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMzBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGNvbG9yOiAjNjY2O1xcclxcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnJhZGlvLWNvbnRhaW5lciBpbnB1dCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucmFkaW8tY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XFxyXFxufVxcclxcblxcclxcbi5yYWRpby1jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6YWZ0ZXIge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5yYWRpby1jb250YWluZXIgLmNoZWNrbWFyazphZnRlciB7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIHdpZHRoOiAxMnB4O1xcclxcbiAgaGVpZ2h0OiAxMnB4O1xcclxcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGJhY2tncm91bmQ6ICM1N2I4NDY7XFxyXFxufVxcclxcblxcclxcbi5jaGVja21hcmsge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXHJcXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcclxcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXHJcXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XFxyXFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwcHggMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcXHJcXG4gIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XFxyXFxuICBib3gtc2hhZG93OiBpbnNldCAwcHggMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrbWFyazphZnRlciB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1ncm91cCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtZ3JvdXAtaWNvbiB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1pY29uIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGNvbG9yOiAjOTk5O1xcclxcbiAgcmlnaHQ6IDE4cHg7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcclxcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxyXFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcclxcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbiAgICNTRUxFQ1QyXFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG4uc2VsZWN0LS1uby1zZWFyY2ggLnNlbGVjdDItc2VhcmNoIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLnJzLXNlbGVjdDIgLnNlbGVjdDItY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcXHJcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XFxyXFxuICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDBweCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xcclxcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XFxyXFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucnMtc2VsZWN0MiAuc2VsZWN0Mi1jb250YWluZXIgLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4ucnMtc2VsZWN0MiAuc2VsZWN0Mi1jb250YWluZXIgLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUgLnNlbGVjdDItc2VsZWN0aW9uX19yZW5kZXJlZCB7XFxyXFxuICBsaW5lLWhlaWdodDogNTBweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMDtcXHJcXG4gIGNvbG9yOiAjNTU1O1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDIycHg7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucnMtc2VsZWN0MiAuc2VsZWN0Mi1jb250YWluZXIgLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUgLnNlbGVjdDItc2VsZWN0aW9uX19hcnJvdyB7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICByaWdodDogMjBweDtcXHJcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcclxcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcclxcbiAgZGlzcGxheTogLW1vei1ib3g7XFxyXFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxyXFxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgLW1vei1ib3gtcGFjazogY2VudGVyO1xcclxcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcclxcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcXHJcXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucnMtc2VsZWN0MiAuc2VsZWN0Mi1jb250YWluZXIgLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUgLnNlbGVjdDItc2VsZWN0aW9uX19hcnJvdyBiIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5ycy1zZWxlY3QyIC5zZWxlY3QyLWNvbnRhaW5lciAuc2VsZWN0Mi1zZWxlY3Rpb24tLXNpbmdsZSAuc2VsZWN0Mi1zZWxlY3Rpb25fX2Fycm93OmFmdGVyIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWF0ZXJpYWwtRGVzaWduLUljb25pYy1Gb250XFxcIjtcXHJcXG4gIGNvbnRlbnQ6ICdcXFxcZjJmOSc7XFxyXFxuICBmb250LXNpemU6IDI0cHg7XFxyXFxuICBjb2xvcjogIzk5OTtcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcXHJcXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XFxyXFxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4ucnMtc2VsZWN0MiAuc2VsZWN0Mi1jb250YWluZXIuc2VsZWN0Mi1jb250YWluZXItLW9wZW4gLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUgLnNlbGVjdDItc2VsZWN0aW9uX19hcnJvdzo6YWZ0ZXIge1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcXHJcXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XFxyXFxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XFxyXFxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0Mi1jb250YWluZXItLW9wZW4gLnNlbGVjdDItZHJvcGRvd24tLWJlbG93IHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA4cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcXHJcXG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDhweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcclxcbiAgYm94LXNoYWRvdzogMHB4IDhweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcXHJcXG4gIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3QyLWNvbnRhaW5lci0tZGVmYXVsdCAuc2VsZWN0Mi1yZXN1bHRzX19vcHRpb24ge1xcclxcbiAgcGFkZGluZy1sZWZ0OiAyMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbiAgICNUSVRMRVxcclxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuLnRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gIGNvbG9yOiAjNTI1MjUyO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuICAgI0NBUkRcXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcbi5jYXJkIHtcXHJcXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC00IHtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAtbW96LWJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggOHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxyXFxuICAtbW96LWJveC1zaGFkb3c6IDBweCA4cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCA4cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtNCAuY2FyZC1ib2R5IHtcXHJcXG4gIHBhZGRpbmc6IDU3cHggNjVweDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiA2NXB4O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXHJcXG4gIC5jYXJkLTQgLmNhcmQtYm9keSB7XFxyXFxuICAgIHBhZGRpbmc6IDUwcHggNDBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcblxuIiwiaW1wb3J0ICogYXMgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcic7XHJcbmltcG9ydCAqIGFzIGNvbXByZXNzaW9uIGZyb20gJ2NvbXByZXNzaW9uJztcclxuaW1wb3J0ICogYXMgY29va2llUGFyc2VyIGZyb20gJ2Nvb2tpZS1wYXJzZXInO1xyXG5pbXBvcnQgKiBhcyBjb3JzIGZyb20gJ2NvcnMnO1xyXG5pbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgKiBhcyBoZWxtZXQgZnJvbSAnaGVsbWV0JztcclxuaW1wb3J0ICogYXMgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5pbXBvcnQgKiBhcyBsb2dnZXIgZnJvbSAnbW9yZ2FuJztcclxuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcclxuXHJcbi8vaW1wb3J0ICogYXMgcm91dGVyIGZyb20gJy4vcm91dGVyJztcclxuaW1wb3J0ICogYXMgZXZuY29uZiBmcm9tICdkb3RlbnYnO1xyXG5cclxuaW1wb3J0ICogYXMgYWRtaW4gZnJvbSAnZmlyZWJhc2UtYWRtaW4nO1xyXG5sZXQgc2VydmljZUFjY291bnQgPSByZXF1aXJlKCcgLi8uLi8uLi9zZXJ2aWNlQWNjb3VudEtleS5qc29uNScpO1xyXG4vL2xldCBhY2NvdW50ID0gcmVxdWlyZSgnLi4vc2VydmljZUFjY291bnRLZXkuanNvbicpO1xyXG5pbXBvcnQgeyBDYXJQb3N0IH0gZnJvbSAnLi9jb250cm9sbGVycy9jYXJQb3N0JztcclxuXHJcbmNsYXNzIFNlcnZlciB7XHJcbiAgcHVibGljIGFwcDogZXhwcmVzcy5BcHBsaWNhdGlvbjtcclxuICBwdWJsaWMgY2FyUG9zdFJvdXRlcjpDYXJQb3N0O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuYXBwID0gZXhwcmVzcygpO1xyXG4gICAgdGhpcy5jb25maWcoKTtcclxuICAgIHRoaXMucm91dGVzKCk7XHJcbiAgfVxyXG4gIHB1YmxpYyBjb25maWcoKTogdm9pZCB7XHJcbiAgICBjb25zdCBkYiA9IGFkbWluLmluaXRpYWxpemVBcHAoe1xyXG4gICAgICBjcmVkZW50aWFsOmFkbWluLmNyZWRlbnRpYWwuY2VydChzZXJ2aWNlQWNjb3VudCksXHJcbiAgICAgIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vY3JhZnR5LWNhaXJuLTE5NDAwOS5maXJlYmFzZWlvLmNvbVwiXHJcbiAgICB9KTtcclxuICAgIHRoaXMuY2FyUG9zdFJvdXRlciA9IG5ldyBDYXJQb3N0KCk7XHJcbiAgICB0aGlzLmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xyXG4gICAgdGhpcy5hcHAudXNlKGNvb2tpZVBhcnNlcigpKTtcclxuICAgIHRoaXMuYXBwLnVzZShsb2dnZXIoJ2RldicpKTtcclxuICAgIHRoaXMuYXBwLnVzZShjb21wcmVzc2lvbigpKTtcclxuICAgIHRoaXMuYXBwLnVzZShoZWxtZXQoKSk7XHJcbiAgICB0aGlzLmFwcC51c2UoY29ycygpKTtcclxuICAgIHRoaXMuYXBwLnVzZSgoXywgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xyXG4gICAgICByZXMuaGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCAnaHR0cDovL2xvY2FsaG9zdDo4MDgwJyk7XHJcbiAgICAgIHJlcy5oZWFkZXIoXHJcbiAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHMnLFxyXG4gICAgICAgICdHRVQsIFBPU1QsIFBVVCwgREVMRVRFLCBPUFRJT05TJyxcclxuICAgICAgKTtcclxuICAgICAgcmVzLmhlYWRlcihcclxuICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycycsXHJcbiAgICAgICAgJ09yaWdpbiwgWC1SZXF1ZXN0ZWQtV2l0aCwgQ29udGVudC1UeXBlLCBBY2NlcHQsIEF1dGhvcml6YXRpb24sIEFjY2Vzcy1Db250cm9sLUFsbG93LUNyZWRlbnRpYWxzJyxcclxuICAgICAgKTtcclxuICAgICAgcmVzLmhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctQ3JlZGVudGlhbHMnLCAndHJ1ZScpO1xyXG4gICAgICBuZXh0KCk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgcHVibGljIHJvdXRlcygpOiB2b2lkIHtcclxuXHJcbiAgICBjb25zdCByb3V0ZXI6IGV4cHJlc3MuUm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxuICAgIHRoaXMuYXBwLnVzZSgnLycsIHJvdXRlcik7XHJcbiAgICB0aGlzLmFwcC51c2UoJy9wb3N0Q2FyJywgIHRoaXMuY2FyUG9zdFJvdXRlci5yb3V0ZXIpO1xyXG4gICAgdGhpcy5hcHAuYWxsKCcvKicsIChyZXEsIHJlcykgPT4ge1xyXG4gICAgICByZXMuc2VuZEZpbGUocGF0aC5yZXNvbHZlKCdidWlsZHNjcmlwdHMvcHVibGljL2luZGV4Lmh0bWwnKSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFNlcnZlcigpLmFwcDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuICdAbWVkaWEgJyArIGl0ZW1bMl0gKyAneycgKyBjb250ZW50ICsgJ30nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9ICcoJyArIGl0ZW1bMl0gKyAnKSBhbmQgKCcgKyBtZWRpYVF1ZXJ5ICsgJyknO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuICByZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufSIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInR5cGVcIjogXCJzZXJ2aWNlX2FjY291bnRcIixcblx0XCJwcm9qZWN0X2lkXCI6IFwiY3JhZnR5LWNhaXJuLTE5NDAwOVwiLFxuXHRcInByaXZhdGVfa2V5X2lkXCI6IFwiOTI1MGVlYzU3YzRjNzA3YmJjOTMxYmUwZDg1OGQ5N2NlZDY5MTcwOFwiLFxuXHRcInByaXZhdGVfa2V5XCI6IFwiLS0tLS1CRUdJTiBQUklWQVRFIEtFWS0tLS0tXFxuTUlJRXV3SUJBREFOQmdrcWhraUc5dzBCQVFFRkFBU0NCS1V3Z2dTaEFnRUFBb0lCQVFDM0xBZUtKOEs5SmJHNlxcbnFPYktIcnovSUIxYm5zOUk2azlaVTA4RitxTXdNVGJROTJTc3lXS0d3Z20wQm05QndBY1IxTEswMlZRcUpjLzBcXG56Vjc1QWhmaFNMRFVycWd1Wkw4eTZGQnk3emxQQ2VObk54ZkFiRG8vVCtFR2FFZXE4UnQ1Z2ZyVllqOGFOL2txXFxuek5oRnk0R1lYRzRiRmlEZkhNdXlraURYcXZ2QnpjNnArYndXZ2NPMTFwMy9DdlhySlc0ejFYTkNjRFVldGpuZFxcbmltdUh3Z0wvaWtySWxoZ1lhWlhmbzE3eXBHSXM2c1J2b3Y3R2xka2pLcW5PS3NMTzRyaEpCNDN2TkJIbG5hb2xcXG5YTlBoK1hMcFkrbXgxVnZWUlQ4RXJlN2h3QmwvSlB5Z1pUMEdXYU9VSkYrSkJrK0g4czdCNk55VjhnRElndTJ6XFxuNVJyanRxcGhBZ01CQUFFQ2dmOW1IZEZ6NWZVckU3QUxHQ1N4UHR2WjlXRzV1NmJzNmFjenhIK1Jlemo3elpNN1xcbmlISGZvN2NVMmVZeFNCUGo2RG5LVC83cy8zUkF4bDBsN2hQVmpJcEd1ZGlqS2FrUHQxTUY4bDZjVng4N0xIQ3FcXG5Db3pHQVlPdnRYR1BNSURjMjNzaFpMeEpoS3NBc1ZsQkNXanpEOExQTjNPdDZzUlY2UmlUeVVFN0U4Tk5Ic1h5XFxuY2R6dzZJNjNPVzdaQW1KbjY0RWhmS3VCbU1ZTm1MMVpKbXZwN21Mdmp2MW15d003VnpycE41K2N0K3BZa3RnZ1xcbnV2djFmZUs5dVdxWVVMci9qRVl1a0k2UUErUG96S2R5UGNTWDZaWkl1MUdSUVhiZ3psRkhyOFh5ajI4RmlyTElcXG5QWDBObUs2MWZpRHE2YURDWFlUeklNRURocjVrQmlHYmpKeVg5NkVDZ1lFQTJlblFGV1NvNnplNHVTTm1BUEg2XFxuNXRTdGxQcHZ5ZHZGRGRWN3dLSWdSdkhTNUs4L093QkxRUVI2RnlsMUJXeGwvUVE2OWU5ZXM1MUtNK0pSR0VqZVxcbjkwTHRLUXhQbUZxSWo0RnpYSWN5UllUMldLbVByOUtFYk9SZWgyVkMvMnh6RHh4MGMrclJZN2RRaWlCOUFzVDlcXG5pUTdxdTFLT3dWOG5FZHFmSysxOHI5a0NnWUVBMXkvRk1Xa0t6MmtpOFZtNWMrN2l6eWs2WWJkLy9sZEJlVmtnXFxuUUk4SUIzUXF1WDNPUWIwMUprVk41d2laWEl5S3lBcmtkREM1NkhKWG5UbnJ6cCtBb1NmY1RRaUtkUlc3OWNjMVxcblp5aFc1aFA5MTg2eUhSVHRjYjY5MGVLU0I4VWdvb25OeUI5QWN4MDltdUVhQWNYaEpxUUhXSUZXVnRBcjAzOUlcXG42S1Z1d2NrQ2dZRUFyRWlsRVNUaVFBVnY4RC9DVjZENHd5TUdrYkJtVFd1Sm9lUlUwUG5kRnZuOXlIdWRQQ0tCXFxuWE1nVFZ0aWFBazJ2WEpqSm5NTkJWalJYQkNvNy96MHR1c09aQ1VrSWJPVzI3ZTVrckpUZTlBT3BXSFBHZkRXdVxcbktRRnNreE5HSXZjMUNJOXdxbXpPVzA0RlNROWlocHdEN3laeUF1UEVwYkY3REN5U2g0SmRnQkVDZ1lBVndtUGJcXG5TamJvb0VZRFI4SmtBYnozbThDbWp1cW5hbVZaZ3ZTcThvdXFUVW5ndGVMOGJNaUtGU242ZWJrZ1RhbmU3cE1KXFxuV01BRHpFUWx4dXljV1M2bG5TVSt1T1ZmVDVKUkdSTENXcWJtM3hDbEdPYVQ0RURlWnA1Rk1mYjRTQ3V6bytHbVxcbklkcmZpUTVvc2VoeVUzTWYrQ2d4LytvZUh6Qy9VemlwSmNsY1dRS0JnQ1FYRWQvaHh4OERIOHdPbVNXK0pCWmVcXG5SZ0NHQVNmSW1yZng1MEIyMmsxb3Q3RDRqb3EwNmprUURGMEJpVW9BVUtaUHpFdXM5WWd0SDN3bVVud0JBSU4rXFxudDNjc3M4Y3lFUnFVSTZzZHU1R1NqbjdWUU9FQlFNaVRYVWIyN1V5VVFFUDEvcE5iNlZQV3NSdS9yVkNGK3k1ZlxcblZnb21ySkV5VGlRTDUwZkphTUFpXFxuLS0tLS1FTkQgUFJJVkFURSBLRVktLS0tLVxcblwiLFxuXHRcImNsaWVudF9lbWFpbFwiOiBcImZpcmViYXNlLWFkbWluc2RrLTRzbWdwQGNyYWZ0eS1jYWlybi0xOTQwMDkuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb21cIixcblx0XCJjbGllbnRfaWRcIjogXCIxMDIxODQ1MTA2NzUxODM4ODY1NTdcIixcblx0XCJhdXRoX3VyaVwiOiBcImh0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbS9vL29hdXRoMi9hdXRoXCIsXG5cdFwidG9rZW5fdXJpXCI6IFwiaHR0cHM6Ly9vYXV0aDIuZ29vZ2xlYXBpcy5jb20vdG9rZW5cIixcblx0XCJhdXRoX3Byb3ZpZGVyX3g1MDlfY2VydF91cmxcIjogXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjEvY2VydHNcIixcblx0XCJjbGllbnRfeDUwOV9jZXJ0X3VybFwiOiBcImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3JvYm90L3YxL21ldGFkYXRhL3g1MDkvZmlyZWJhc2UtYWRtaW5zZGstNHNtZ3AlNDBjcmFmdHktY2Fpcm4tMTk0MDA5LmlhbS5nc2VydmljZWFjY291bnQuY29tXCJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb21wcmVzc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb29raWUtcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGVidWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS1hZG1pblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJoZWxtZXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb3JnYW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZXF1ZXN0LXByb21pc2UtbmF0aXZlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=