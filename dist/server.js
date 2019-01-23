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
                let usersRef = databaseRef.child("carSellListings");
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
            databaseURL: "https://beyo-8f9ec.firebaseio.com"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYnVpbGRTY3JpcHRzL2NvbnRyb2xsZXJzL2NhclBvc3QudHMiLCJ3ZWJwYWNrOi8vLy4vYnVpbGRTY3JpcHRzL2luZGV4LnRzIiwid2VicGFjazovLy8uL2J1aWxkU2NyaXB0cy9wdWJsaWMvY3NzL21haW4uY3NzIiwid2VicGFjazovLy8uL2J1aWxkU2NyaXB0cy9zcmNTZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlQWNjb3VudEtleS5qc29uNSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvbXByZXNzaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29va2llLXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkZWJ1Z1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS1hZG1pblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImhlbG1ldFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb3JnYW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVxdWVzdC1wcm9taXNlLW5hdGl2ZVwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBLHdDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgeyBOZXh0RnVuY3Rpb24sIFJlcXVlc3QsIFJlc3BvbnNlLCBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCAqIGFzIHJlcXVlc3QgZnJvbSBcInJlcXVlc3QtcHJvbWlzZS1uYXRpdmVcIjtcbmltcG9ydCAqIGFzIGFkbWluIGZyb20gJ2ZpcmViYXNlLWFkbWluJztcbmltcG9ydCB7IHByb21pc2VzIH0gZnJvbSAnZnMnO1xuZXhwb3J0IGNsYXNzIENhclBvc3Qge1xuICBwdWJsaWMgcm91dGVyOiBSb3V0ZXI7XG4gIHB1YmxpYyBkYXRhYmFzZVJlZjphbnk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5yb3V0ZXIgPSBSb3V0ZXIoKTtcbiAgICB0aGlzLnJvdXRlcygpO1xuICB9XG4gIHB1YmxpYyBhc3luYyBjcmVhdGUoXG4gICAgcmVxOiBSZXF1ZXN0LFxuICAgIHJlczogUmVzcG9uc2UsXG4gICAgbmV4dDogTmV4dEZ1bmN0aW9uLFxuICApOiBQcm9taXNlPFJlc3BvbnNlIHwgdm9pZD4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGNhckNvbG91cixjdXN0b21lck5hbWUsY2FyTWFrZSxwaG9uZU51bWJlcixjYXJNaWxlYWdlLGNhbkRpcmVjdFNhbGUsY2FyWWVhcixjYXJNb2RlbCxlbWFpbFxuICAgIH0gPSByZXEuYm9keTtcbiAgICB0cnkge1xuICAgICAgbGV0IGRhdGFzID0ge1xuICAgICAgICBcImNhckNvbG91clwiOnJlcS5ib2R5LmNhckNvbG91cixcbiAgICAgICAgXCJjdXN0b21lck5hbWVcIjpyZXEuYm9keS5jdXN0b21lck5hbWUsXG4gICAgICAgIFwiY2FyTWFrZVwiOnJlcS5ib2R5LmNhck1ha2UsXG4gICAgICAgIFwicGhvbmVOdW1iZXJcIjpyZXEuYm9keS5waG9uZU51bWJlcixcbiAgICAgICAgXCJjYXJNaWxlYWdlXCI6cmVxLmJvZHkuY2FyTWlsZWFnZSxcbiAgICAgICAgXCJjYW5EaXJlY3RTYWxlXCI6cmVxLmJvZHkuY2FuRGlyZWN0U2FsZSxcbiAgICAgICAgXCJjYXJZZWFyXCI6cmVxLmJvZHkuY2FyWWVhcixcbiAgICAgICAgXCJjYXJNb2RlbFwiOnJlcS5ib2R5LmNhck1vZGVsLFxuICAgICAgICBcImVtYWlsXCI6cmVxLmJvZHkuZW1haWwsXG4gICAgICAgIH1cbiAgICAgIGxldCBkYXRhYmFzZVJlZiA9IGFkbWluLmRhdGFiYXNlKCkucmVmKCk7XG4gICAgICBsZXQgdXNlcnNSZWYgPSBkYXRhYmFzZVJlZi5jaGlsZChcImNhclNlbGxMaXN0aW5nc1wiKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IHVzZXJzUmVmLnB1c2goZGF0YXMpLnRoZW4oKHNuYXApPT57XG5cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgYm9keToge1widGV4dFwiOiBgPGh0dHBzOi8vYWxlcnQtc3lzdGVtLmNvbS9hbGVydHMvMTIzNHwgJHtyZXEuYm9keS5jYW5EaXJlY3RTYWxlfTogJHtyZXEuYm9keS5jYXJZZWFyfSwsJHtyZXEuYm9keS5jYXJNb2RlbH0sJHtyZXEuYm9keS5jYXJZZWFyfSwke3JlcS5ib2R5LmNhckNvbG91cn0oJHtyZXEuYm9keS5jYXJNaWxlYWdlfS8ke3JlcS5ib2R5LmN1c3RvbWVyTmFtZX0pPmB9LFxuICAgICAgICAgIGpzb246IHRydWUsXG4gICAgICAgICAgdXJpOiAnaHR0cHM6Ly9ob29rcy5zbGFjay5jb20vc2VydmljZXMvVEVSNjJMSEc4L0JGNVRDUDA3OS8yeVRkOGYwSnhYVUxGcnVKZW11YTlsOWQnLFxuICAgICAgICB9O1xuICAvL2h0dHBzOi8vaG9va3Muc2xhY2suY29tL3NlcnZpY2VzL1RFUjYyTEhHOC9CRjVUQ1AwNzkvMnlUZDhmMEp4WFVMRnJ1SmVtdWE5bDlkIC8vY2xpZW50IGNoZW5uZWxcbiAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlcXVlc3Qob3B0aW9ucykudGhlbihkYXRhPT57XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgfSkuY2F0Y2goZXJyPT57XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICB9KTtcblxuICAgICAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IGRhdGEsIG1lc3NhZ2U6ICdzdWNjZXNzJyB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIG5leHQoZXJyb3IubWVzc2FnZSk7XG4gICAgfVxuICB9XG5cblxuICBwdWJsaWMgYXN5bmMgY3JlYXRlTGVhZChcbiAgICByZXE6IFJlcXVlc3QsXG4gICAgcmVzOiBSZXNwb25zZSxcbiAgICBuZXh0OiBOZXh0RnVuY3Rpb24sXG4gICk6IFByb21pc2U8UmVzcG9uc2UgfCB2b2lkPiB7XG4gICAgY29uc3Qge1xuICAgICAgY29uc2lnblByaWNlLGRlYWxlclByaWNlLGRlYWxlcm9ubHksY29uc2lnbm9ubHksY29uc2lnbmRlYWxlclxuICAgIH0gPSByZXEuYm9keTtcbiAgICB0cnkge1xuICAgICAgbGV0IGRiID0gYWRtaW4uZGF0YWJhc2UoKS5yZWYoKTtcbiAgICAgIGxldCB1c2Vyc1JlZiA9IGRiLmNoaWxkKFwibGVhZHNcIik7XG4gICAgICBsZXQgZGF0YXMgPSB7XG4gICAgICAgIFwiY29uc2lnblByaWNlXCI6cmVxLmJvZHkuY29uc2lnblByaWNlLFxuICAgICAgICBcImRlYWxlclByaWNlXCI6cmVxLmJvZHkuZGVhbGVyUHJpY2UsXG4gICAgICAgIFwiZGVhbGVyb25seVwiOnJlcS5ib2R5LmRlYWxlcm9ubHksXG4gICAgICAgIFwiY29uc2lnbm9ubHlcIjpyZXEuYm9keS5jb25zaWdub25seSxcbiAgICAgICAgXCJjb25zaWduZGVhbGVyXCI6cmVxLmJvZHkuY29uc2lnbmRlYWxlcixcbiAgICAgICB9XG4gICAgICAgY29uc3QgZGF0YSA9IHVzZXJzUmVmLnB1c2goZGF0YXMpO1xuICAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgZGF0YSwgbWVzc2FnZTogJ3N1Y2Nlc3MnIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gbmV4dChlcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuXG4gIHB1YmxpYyByb3V0ZXMoKSB7XG4gICAgdGhpcy5yb3V0ZXIucG9zdCgnL2NhcicsIHRoaXMuY3JlYXRlKTtcbiAgICB0aGlzLnJvdXRlci5wb3N0KCcvbGVhZHMnLCB0aGlzLmNyZWF0ZUxlYWQpO1xuICB9XG59XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZVxuXG5pbXBvcnQgKiBhcyBkZWJ1ZyBmcm9tICdkZWJ1Zyc7XG5pbXBvcnQgKiBhcyBodHRwIGZyb20gJ2h0dHAnO1xuaW1wb3J0IFNlcnZlciBmcm9tICcuL3NyY1NlcnZlcic7XG5pbXBvcnQgJy4vcHVibGljL2Nzcy9tYWluLmNzcyc7XG4vL2RlYnVnKCd0cy1leHByZXNzOnNlcnZlcicpO1xuXG5jb25zdCBwb3J0ID0gbm9ybWFsaXplUG9ydChwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDApO1xuXG5cblNlcnZlci5zZXQoJ3BvcnQnLCBwb3J0KTtcblxuY29uc29sZS5sb2coYFNlcnZlciBsaXN0ZW5pbmcgb24gcG9ydCAke3BvcnR9YCk7XG5cbmNvbnN0IHNlcnZlciA9IGh0dHAuY3JlYXRlU2VydmVyKFNlcnZlcik7XG5zZXJ2ZXIubGlzdGVuKHBvcnQpO1xuc2VydmVyLm9uKCdlcnJvcicsIG9uRXJyb3IpO1xuc2VydmVyLm9uKCdsaXN0ZW5pbmcnLCBvbkxpc3RlbmluZyk7XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVBvcnQodmFsOiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXIgfCBzdHJpbmcgfCBib29sZWFuIHtcbiAgY29uc3QgcG9ydDogbnVtYmVyID0gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgPyBwYXJzZUludCh2YWwsIDEwKSA6IHZhbDtcbiAgaWYgKGlzTmFOKHBvcnQpKSB7XG4gICAgcmV0dXJuIHZhbDtcbiAgfSBlbHNlIGlmIChwb3J0ID49IDApIHtcbiAgICByZXR1cm4gcG9ydDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gb25FcnJvcihlcnJvcjogTm9kZUpTLkVycm5vRXhjZXB0aW9uKTogdm9pZCB7XG4gIGlmIChlcnJvci5zeXNjYWxsICE9PSAnbGlzdGVuJykge1xuICAgIHRocm93IGVycm9yO1xuICB9XG4gIGNvbnN0IGJpbmQgPSB0eXBlb2YgcG9ydCA9PT0gJ3N0cmluZycgPyAnUGlwZSAnICsgcG9ydCA6ICdQb3J0ICcgKyBwb3J0O1xuICBzd2l0Y2ggKGVycm9yLmNvZGUpIHtcbiAgICBjYXNlICdFQUNDRVMnOlxuICAgICAgY29uc29sZS5lcnJvcihgJHtiaW5kfSByZXF1aXJlcyBlbGV2YXRlZCBwcml2aWxlZ2VzYCk7XG4gICAgICBwcm9jZXNzLmV4aXQoMSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdFQUREUklOVVNFJzpcbiAgICAgIGNvbnNvbGUuZXJyb3IoYCR7YmluZH0gaXMgYWxyZWFkeSBpbiB1c2VgKTtcbiAgICAgIHByb2Nlc3MuZXhpdCgxKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5mdW5jdGlvbiBvbkxpc3RlbmluZygpOiB2b2lkIHtcbiAgY29uc3QgYWRkciA9IHNlcnZlci5hZGRyZXNzKCk7XG4gIGNvbnN0IGJpbmQgPSB0eXBlb2YgYWRkciA9PT0gJ3N0cmluZycgPyBgcGlwZSAke2FkZHJ9YCA6IGBwb3J0ICR7YWRkci5wb3J0fWA7XG4gIGRlYnVnKGBMaXN0ZW5pbmcgb24gJHtiaW5kfWApO1xufVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXHJcXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbiAgICNGT05UXFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG4uZm9udC1yb2JvIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgXFxcIkFyaWFsXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvbnQtcG9wcGlucyB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBcXFwiQXJpYWxcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbiAgICNHUklEXFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG4ucm93IHtcXHJcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcclxcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcclxcbiAgZGlzcGxheTogLW1vei1ib3g7XFxyXFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIC1tcy1mbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxufVxcclxcblxcclxcbi5yb3ctc3BhY2Uge1xcclxcbiAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcXHJcXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgLW1vei1ib3gtcGFjazoganVzdGlmeTtcXHJcXG4gIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5jb2wtMiB7XFxyXFxuICB3aWR0aDogLXdlYmtpdC1jYWxjKCgxMDAlIC0gMzBweCkgLyAyKTtcXHJcXG4gIHdpZHRoOiAtbW96LWNhbGMoKDEwMCUgLSAzMHB4KSAvIDIpO1xcclxcbiAgd2lkdGg6IGNhbGMoKDEwMCUgLSAzMHB4KSAvIDIpO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXHJcXG4gIC5jb2wtMiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbiAgICNCT1gtU0laSU5HXFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG4vKipcXHJcXG4gKiBNb3JlIHNlbnNpYmxlIGRlZmF1bHQgYm94LXNpemluZzpcXHJcXG4gKiBjc3MtdHJpY2tzLmNvbS9pbmhlcml0aW5nLWJveC1zaXppbmctcHJvYmFibHktc2xpZ2h0bHktYmV0dGVyLWJlc3QtcHJhY3RpY2VcXHJcXG4gKi9cXHJcXG5odG1sIHtcXHJcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xcclxcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBpbmhlcml0O1xcclxcbiAgLW1vei1ib3gtc2l6aW5nOiBpbmhlcml0O1xcclxcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4gICAjUkVTRVRcXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcbi8qKlxcclxcbiAqIEEgdmVyeSBzaW1wbGUgcmVzZXQgdGhhdCBzaXRzIG9uIHRvcCBvZiBOb3JtYWxpemUuY3NzLlxcclxcbiAqL1xcclxcbmJvZHksXFxyXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNixcXHJcXG5ibG9ja3F1b3RlLCBwLCBwcmUsXFxyXFxuZGwsIGRkLCBvbCwgdWwsXFxyXFxuZmlndXJlLFxcclxcbmhyLFxcclxcbmZpZWxkc2V0LCBsZWdlbmQge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUmVtb3ZlIHRyYWlsaW5nIG1hcmdpbnMgZnJvbSBuZXN0ZWQgbGlzdHMuXFxyXFxuICovXFxyXFxubGkgPiBvbCxcXHJcXG5saSA+IHVsIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFJlbW92ZSBkZWZhdWx0IHRhYmxlIHNwYWNpbmcuXFxyXFxuICovXFxyXFxudGFibGUge1xcclxcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBSZXNldCBDaHJvbWUgYW5kIEZpcmVmb3ggYmVoYXZpb3VyIHdoaWNoIHNldHMgYSBgbWluLXdpZHRoOiBtaW4tY29udGVudDtgXFxyXFxuICogICAgb24gZmllbGRzZXRzLlxcclxcbiAqL1xcclxcbmZpZWxkc2V0IHtcXHJcXG4gIG1pbi13aWR0aDogMDtcXHJcXG4gIC8qIFsxXSAqL1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuICAgI1BBR0UgV1JBUFBFUlxcclxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuLnBhZ2Utd3JhcHBlciB7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBcXFwiQXJpYWxcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG59XFxyXFxuXFxyXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICBmb250LXNpemU6IDM2cHg7XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuaDMge1xcclxcbiAgZm9udC1zaXplOiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oNCB7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxufVxcclxcblxcclxcbmg1IHtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuaDYge1xcclxcbiAgZm9udC1zaXplOiAxM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbiAgICNCQUNLR1JPVU5EXFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG4uYmctYmx1ZSB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMmM2ZWQ1O1xcclxcbn1cXHJcXG5cXHJcXG4uYmctcmVkIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNmYTQyNTE7XFxyXFxufVxcclxcblxcclxcbi5iZy1ncmEtMDEge1xcclxcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgYm90dG9tLCBsZWZ0IHRvcCwgZnJvbSgjZmJjMmViKSwgdG8oI2ExOGNkMSkpO1xcclxcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoYm90dG9tLCAjZmJjMmViIDAlLCAjYTE4Y2QxIDEwMCUpO1xcclxcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoYm90dG9tLCAjZmJjMmViIDAlLCAjYTE4Y2QxIDEwMCUpO1xcclxcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KGJvdHRvbSwgI2ZiYzJlYiAwJSwgI2ExOGNkMSAxMDAlKTtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICNmYmMyZWIgMCUsICNhMThjZDEgMTAwJSk7XFxyXFxufVxcclxcblxcclxcbi5iZy1ncmEtMDIge1xcclxcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgYm90dG9tLCByaWdodCB0b3AsIGZyb20oI2ZjMmM3NyksIHRvKCM2YzQwNzkpKTtcXHJcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGJvdHRvbSBsZWZ0LCAjZmMyYzc3IDAlLCAjNmM0MDc5IDEwMCUpO1xcclxcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoYm90dG9tIGxlZnQsICNmYzJjNzcgMCUsICM2YzQwNzkgMTAwJSk7XFxyXFxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoYm90dG9tIGxlZnQsICNmYzJjNzcgMCUsICM2YzQwNzkgMTAwJSk7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAjZmMyYzc3IDAlLCAjNmM0MDc5IDEwMCUpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbiAgICNTUEFDSU5HXFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG4ucC10LTEwMCB7XFxyXFxuICBwYWRkaW5nLXRvcDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5wLXQtMTMwIHtcXHJcXG4gIHBhZGRpbmctdG9wOiAxMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnAtdC0xODAge1xcclxcbiAgcGFkZGluZy10b3A6IDE4MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucC10LTIwIHtcXHJcXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucC10LTE1IHtcXHJcXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucC10LTEwIHtcXHJcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucC10LTMwIHtcXHJcXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucC1iLTEwMCB7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5tLXItNDUge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA0NXB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbiAgICNXUkFQUEVSXFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG4ud3JhcHBlciB7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLndyYXBwZXItLXc5NjAge1xcclxcbiAgbWF4LXdpZHRoOiA5NjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLndyYXBwZXItLXc3ODAge1xcclxcbiAgbWF4LXdpZHRoOiA3ODBweDtcXHJcXG59XFxyXFxuXFxyXFxuLndyYXBwZXItLXc2ODAge1xcclxcbiAgbWF4LXdpZHRoOiA2ODBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4gICAjQlVUVE9OXFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG4uYnRuIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xcclxcbiAgcGFkZGluZzogMCA1MHB4O1xcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xcclxcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcXHJcXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIFxcXCJBcmlhbFxcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5idG4tLXJhZGl1cyB7XFxyXFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gIC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLS1yYWRpdXMtMiB7XFxyXFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLS1waWxsIHtcXHJcXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIC1tb3otYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5idG4tLWdyZWVuIHtcXHJcXG4gIGJhY2tncm91bmQ6ICM1N2I4NDY7XFxyXFxufVxcclxcblxcclxcbi5idG4tLWdyZWVuOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICM0ZGFlM2M7XFxyXFxufVxcclxcblxcclxcbi5idG4tLWJsdWUge1xcclxcbiAgYmFja2dyb3VuZDogIzQyNzJkNztcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi0tYmx1ZTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMzg2OGNkO1xcclxcbn1cXHJcXG5cXHJcXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbiAgICNEQVRFIFBJQ0tFUlxcclxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxudGQuYWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYzZlZDU7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcImRhdGVcXFwiIGldIHtcXHJcXG4gIHBhZGRpbmc6IDE0cHg7XFxyXFxufVxcclxcblxcclxcbi50YWJsZS1jb25kZW5zZWQgdGQsIC50YWJsZS1jb25kZW5zZWQgdGgge1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBcXFwiQXJpYWxcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmRhdGVyYW5nZXBpY2tlciB0ZCB7XFxyXFxuICB3aWR0aDogNDBweDtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRhdGVyYW5nZXBpY2tlciB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA4cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcXHJcXG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDhweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcclxcbiAgYm94LXNoYWRvdzogMHB4IDhweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XFxyXFxuICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5kYXRlcmFuZ2VwaWNrZXI6OmFmdGVyLCAuZGF0ZXJhbmdlcGlja2VyOjpiZWZvcmUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhdGVyYW5nZXBpY2tlciB0aGVhZCB0ciB0aCB7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDA7XFxyXFxufVxcclxcblxcclxcbi5kYXRlcmFuZ2VwaWNrZXIgLnRhYmxlLWNvbmRlbnNlZCB0aCBzZWxlY3Qge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXHJcXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbiAgICNGT1JNXFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5pbnB1dCB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xcclxcbiAgLW1vei1ib3gtc2hhZG93OiBub25lO1xcclxcbiAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC0tc3R5bGUtNCB7XFxyXFxuICBsaW5lLWhlaWdodDogNTBweDtcXHJcXG4gIGJhY2tncm91bmQ6ICNmYWZhZmE7XFxyXFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDBweCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xcclxcbiAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwcHggMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xcclxcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHBhZGRpbmc6IDAgMjBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGNvbG9yOiAjNjY2O1xcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xcclxcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcXHJcXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC0tc3R5bGUtNDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XFxyXFxuICAvKiBXZWJLaXQsIEJsaW5rLCBFZGdlICovXFxyXFxuICBjb2xvcjogIzY2NjtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LS1zdHlsZS00Oi1tb3otcGxhY2Vob2xkZXIge1xcclxcbiAgLyogTW96aWxsYSBGaXJlZm94IDQgdG8gMTggKi9cXHJcXG4gIGNvbG9yOiAjNjY2O1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LS1zdHlsZS00OjotbW96LXBsYWNlaG9sZGVyIHtcXHJcXG4gIC8qIE1vemlsbGEgRmlyZWZveCAxOSsgKi9cXHJcXG4gIGNvbG9yOiAjNjY2O1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LS1zdHlsZS00Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxyXFxuICAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xcclxcbiAgY29sb3I6ICM2NjY7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC0tc3R5bGUtNDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xcclxcbiAgLyogTWljcm9zb2Z0IEVkZ2UgKi9cXHJcXG4gIGNvbG9yOiAjNjY2O1xcclxcbn1cXHJcXG5cXHJcXG4ubGFiZWwge1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgY29sb3I6ICM1NTU7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmFkaW8tY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMzBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGNvbG9yOiAjNjY2O1xcclxcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnJhZGlvLWNvbnRhaW5lciBpbnB1dCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucmFkaW8tY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XFxyXFxufVxcclxcblxcclxcbi5yYWRpby1jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6YWZ0ZXIge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5yYWRpby1jb250YWluZXIgLmNoZWNrbWFyazphZnRlciB7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIHdpZHRoOiAxMnB4O1xcclxcbiAgaGVpZ2h0OiAxMnB4O1xcclxcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGJhY2tncm91bmQ6ICM1N2I4NDY7XFxyXFxufVxcclxcblxcclxcbi5jaGVja21hcmsge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXHJcXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcclxcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXHJcXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XFxyXFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwcHggMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcXHJcXG4gIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XFxyXFxuICBib3gtc2hhZG93OiBpbnNldCAwcHggMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrbWFyazphZnRlciB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1ncm91cCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtZ3JvdXAtaWNvbiB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1pY29uIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGNvbG9yOiAjOTk5O1xcclxcbiAgcmlnaHQ6IDE4cHg7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcclxcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxyXFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcclxcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbiAgICNTRUxFQ1QyXFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG4uc2VsZWN0LS1uby1zZWFyY2ggLnNlbGVjdDItc2VhcmNoIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLnJzLXNlbGVjdDIgLnNlbGVjdDItY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcXHJcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XFxyXFxuICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDBweCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xcclxcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XFxyXFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucnMtc2VsZWN0MiAuc2VsZWN0Mi1jb250YWluZXIgLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4ucnMtc2VsZWN0MiAuc2VsZWN0Mi1jb250YWluZXIgLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUgLnNlbGVjdDItc2VsZWN0aW9uX19yZW5kZXJlZCB7XFxyXFxuICBsaW5lLWhlaWdodDogNTBweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMDtcXHJcXG4gIGNvbG9yOiAjNTU1O1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDIycHg7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucnMtc2VsZWN0MiAuc2VsZWN0Mi1jb250YWluZXIgLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUgLnNlbGVjdDItc2VsZWN0aW9uX19hcnJvdyB7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICByaWdodDogMjBweDtcXHJcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcclxcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcclxcbiAgZGlzcGxheTogLW1vei1ib3g7XFxyXFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxyXFxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgLW1vei1ib3gtcGFjazogY2VudGVyO1xcclxcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcclxcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcXHJcXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucnMtc2VsZWN0MiAuc2VsZWN0Mi1jb250YWluZXIgLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUgLnNlbGVjdDItc2VsZWN0aW9uX19hcnJvdyBiIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5ycy1zZWxlY3QyIC5zZWxlY3QyLWNvbnRhaW5lciAuc2VsZWN0Mi1zZWxlY3Rpb24tLXNpbmdsZSAuc2VsZWN0Mi1zZWxlY3Rpb25fX2Fycm93OmFmdGVyIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWF0ZXJpYWwtRGVzaWduLUljb25pYy1Gb250XFxcIjtcXHJcXG4gIGNvbnRlbnQ6ICdcXFxcZjJmOSc7XFxyXFxuICBmb250LXNpemU6IDI0cHg7XFxyXFxuICBjb2xvcjogIzk5OTtcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcXHJcXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XFxyXFxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4ucnMtc2VsZWN0MiAuc2VsZWN0Mi1jb250YWluZXIuc2VsZWN0Mi1jb250YWluZXItLW9wZW4gLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUgLnNlbGVjdDItc2VsZWN0aW9uX19hcnJvdzo6YWZ0ZXIge1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcXHJcXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XFxyXFxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XFxyXFxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0Mi1jb250YWluZXItLW9wZW4gLnNlbGVjdDItZHJvcGRvd24tLWJlbG93IHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA4cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcXHJcXG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDhweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcclxcbiAgYm94LXNoYWRvdzogMHB4IDhweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcXHJcXG4gIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3QyLWNvbnRhaW5lci0tZGVmYXVsdCAuc2VsZWN0Mi1yZXN1bHRzX19vcHRpb24ge1xcclxcbiAgcGFkZGluZy1sZWZ0OiAyMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbiAgICNUSVRMRVxcclxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuLnRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gIGNvbG9yOiAjNTI1MjUyO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuICAgI0NBUkRcXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcbi5jYXJkIHtcXHJcXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC00IHtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAtbW96LWJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggOHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxyXFxuICAtbW96LWJveC1zaGFkb3c6IDBweCA4cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCA4cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtNCAuY2FyZC1ib2R5IHtcXHJcXG4gIHBhZGRpbmc6IDU3cHggNjVweDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiA2NXB4O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXHJcXG4gIC5jYXJkLTQgLmNhcmQtYm9keSB7XFxyXFxuICAgIHBhZGRpbmc6IDUwcHggNDBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcblxuIiwiaW1wb3J0ICogYXMgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcic7XG5pbXBvcnQgKiBhcyBjb21wcmVzc2lvbiBmcm9tICdjb21wcmVzc2lvbic7XG5pbXBvcnQgKiBhcyBjb29raWVQYXJzZXIgZnJvbSAnY29va2llLXBhcnNlcic7XG5pbXBvcnQgKiBhcyBjb3JzIGZyb20gJ2NvcnMnO1xuaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCAqIGFzIGhlbG1ldCBmcm9tICdoZWxtZXQnO1xuaW1wb3J0ICogYXMgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0ICogYXMgbG9nZ2VyIGZyb20gJ21vcmdhbic7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuXG4vL2ltcG9ydCAqIGFzIHJvdXRlciBmcm9tICcuL3JvdXRlcic7XG5pbXBvcnQgKiBhcyBldm5jb25mIGZyb20gJ2RvdGVudic7XG5cbmltcG9ydCAqIGFzIGFkbWluIGZyb20gJ2ZpcmViYXNlLWFkbWluJztcbmxldCBzZXJ2aWNlQWNjb3VudCA9IHJlcXVpcmUoJyAuLy4uLy4uL3NlcnZpY2VBY2NvdW50S2V5Lmpzb241Jyk7XG4vL2xldCBhY2NvdW50ID0gcmVxdWlyZSgnLi4vc2VydmljZUFjY291bnRLZXkuanNvbicpO1xuaW1wb3J0IHsgQ2FyUG9zdCB9IGZyb20gJy4vY29udHJvbGxlcnMvY2FyUG9zdCc7XG5cbmNsYXNzIFNlcnZlciB7XG4gIHB1YmxpYyBhcHA6IGV4cHJlc3MuQXBwbGljYXRpb247XG4gIHB1YmxpYyBjYXJQb3N0Um91dGVyOkNhclBvc3Q7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5hcHAgPSBleHByZXNzKCk7XG4gICAgdGhpcy5jb25maWcoKTtcbiAgICB0aGlzLnJvdXRlcygpO1xuICB9XG4gIHB1YmxpYyBjb25maWcoKTogdm9pZCB7XG4gICAgY29uc3QgZGIgPSBhZG1pbi5pbml0aWFsaXplQXBwKHtcbiAgICAgIGNyZWRlbnRpYWw6YWRtaW4uY3JlZGVudGlhbC5jZXJ0KHNlcnZpY2VBY2NvdW50KSxcbiAgICAgIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vYmV5by04ZjllYy5maXJlYmFzZWlvLmNvbVwiXG4gICAgfSk7XG4gICAgdGhpcy5jYXJQb3N0Um91dGVyID0gbmV3IENhclBvc3QoKTtcbiAgICB0aGlzLmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xuICAgIHRoaXMuYXBwLnVzZShjb29raWVQYXJzZXIoKSk7XG4gICAgdGhpcy5hcHAudXNlKGxvZ2dlcignZGV2JykpO1xuICAgIHRoaXMuYXBwLnVzZShjb21wcmVzc2lvbigpKTtcbiAgICB0aGlzLmFwcC51c2UoaGVsbWV0KCkpO1xuICAgIHRoaXMuYXBwLnVzZShjb3JzKCkpO1xuICAgIHRoaXMuYXBwLnVzZSgoXywgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xuICAgICAgcmVzLmhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJywgJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MCcpO1xuICAgICAgcmVzLmhlYWRlcihcbiAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHMnLFxuICAgICAgICAnR0VULCBQT1NULCBQVVQsIERFTEVURSwgT1BUSU9OUycsXG4gICAgICApO1xuICAgICAgcmVzLmhlYWRlcihcbiAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnMnLFxuICAgICAgICAnT3JpZ2luLCBYLVJlcXVlc3RlZC1XaXRoLCBDb250ZW50LVR5cGUsIEFjY2VwdCwgQXV0aG9yaXphdGlvbiwgQWNjZXNzLUNvbnRyb2wtQWxsb3ctQ3JlZGVudGlhbHMnLFxuICAgICAgKTtcbiAgICAgIHJlcy5oZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LUNyZWRlbnRpYWxzJywgJ3RydWUnKTtcbiAgICAgIG5leHQoKTtcbiAgICB9KTtcbiAgfVxuICBwdWJsaWMgcm91dGVzKCk6IHZvaWQge1xuXG4gICAgY29uc3Qgcm91dGVyOiBleHByZXNzLlJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG4gICAgdGhpcy5hcHAudXNlKCcvJywgcm91dGVyKTtcbiAgICB0aGlzLmFwcC51c2UoJy9wb3N0Q2FyJywgIHRoaXMuY2FyUG9zdFJvdXRlci5yb3V0ZXIpO1xuICAgIHRoaXMuYXBwLmFsbCgnLyonLCAocmVxLCByZXMpID0+IHtcbiAgICAgIHJlcy5zZW5kRmlsZShwYXRoLnJlc29sdmUoJ2J1aWxkc2NyaXB0cy9wdWJsaWMvaW5kZXguaHRtbCcpKTtcbiAgICB9KTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgbmV3IFNlcnZlcigpLmFwcDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiAnQG1lZGlhICcgKyBpdGVtWzJdICsgJ3snICsgY29udGVudCArICd9JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgfVxuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSAnKCcgKyBpdGVtWzJdICsgJykgYW5kICgnICsgbWVkaWFRdWVyeSArICcpJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJztcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcbiAgcmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ0eXBlXCI6IFwic2VydmljZV9hY2NvdW50XCIsXG5cdFwicHJvamVjdF9pZFwiOiBcImJleW8tOGY5ZWNcIixcblx0XCJwcml2YXRlX2tleV9pZFwiOiBcImM4MzQ1ZTZmNDI1NGQzZjQ1NWMzZjZkYmYwNjRkYTA3MzM0YWU4MjVcIixcblx0XCJwcml2YXRlX2tleVwiOiBcIi0tLS0tQkVHSU4gUFJJVkFURSBLRVktLS0tLVxcbk1JSUV2UUlCQURBTkJna3Foa2lHOXcwQkFRRUZBQVNDQktjd2dnU2pBZ0VBQW9JQkFRQzBJYXRiV0ZuK2h3cmFcXG5MV2NScFNDOFByMmd2b2ZTOWx2MG1mdkR5UElFSllEY2Z4aUpaNEpTY21Ydkw0dDBVSEYxTUs4c214ZlZLazkzXFxuTmF5eEYrSkJNcWY5Wks1a0V0Y3dQdU9WTmZYOWNSQ29YRG52Q0c0ZFR2VXdpdjAzOXJsbktDZ29MM09DeGNkOFxcbnFhckdmSG5BaWhPRmd0Z0tVMVJ4YytPTkpRTUxrSmVwZGpYSlFCVldvUERtU1BZMGE0MS8vemlpaWtZMTREY1dcXG44UDhySm5vcDFzWlZmZXlmOFYwYzd6MW9ZcFpMcE1Wb01kTmt6Wm5Jdm1MejVPK21xMjNhSTBqdW5MeS9lWGF1XFxuZWxFWE5DS2ZJek5uWjNCTlFLUklEQVpNUmFvM1RDZlBrd0RReDB0Tm9CdUJ1RENCTk1yckExblFEaGgxbGM1L1xcbkc3UXczc0d6QWdNQkFBRUNnZ0VBRHRRd3Y2SFdpQnpFNDNEV2FkT2V1TVhhSllnRWlzcExoL3pwM0NuSVBBTFJcXG5zMnFSSExWVk8xcW9rcGdSa21ubTZvb0VwR3hBejRSMEFKdlRhTXdrWWsvOGJXQ2k5MHU5R2FuV1lYRU04YWdqXFxuck1CKzU4aUVEQ0gxRHd4NklSSjNjVFc5N0kra3pPWU1SZko2Ym14T2pPK3hBTGprb1NENnRDWk1CdEZwQ1VRTlxcbmJnU3BjMGcvRlNTV3NmTlI4bWpyUEgxR29pcnNSOEMvOHZaL3FMZHg5bEZUd2VzallqbzJHK3lXRnREbWZuOVJcXG5BaUQzK2RlcS9PTEQ4NWpHbDdXZllDMnFjZVcxM2ZTNWJiWno2OTVkWmJVK242U1hMTnNva1V5WVI3MERSeUE4XFxuZ0ZEY1JlSFVKRmpTTDhQUDNJOWM0WHpsMGpQejJ6c1p1MlNhbUJRbXlRS0JnUURpTkhMZ0lmZnBuckdKOU1nRlxcblVaOWVZWXplQ01ienBucWg3TmFxSWdvTVJkWjhLdGVSMzFGMFRMcFVjQ0U1eXQvQjFWNHEzNHIzTHlkMllnQi9cXG5LbG5SV1dJaUhzcUNsR21mY1ovNUZLME9zbVZUWnp5SVpQdXZuVXdLWGpKWEExcGs1dU5nTTRNMDZwRXBkUVpZXFxuMDFCNjdwVWxtdGhtV3EzTlBTOTYyM0lDNlFLQmdRREwyNlNNQ3FQNkZWRDVnNkg4bkdkMitteDY2S1ZPRldiWVxcbnFPUXpyeFgxcmdGWWlrZzNKYzZYa0pVN2o1YmI5VTY4cVl4b1JrT0ZZbFIrZkJ3bkFwdUl3ZWExMHA4TVFxMy9cXG5KMmxEclp4RWRHTGh6Um56Z09CRlRWcGJ4MXU1ajhCV0ZvdUZrSFVrUGV3MTZpYTRxejlyUk5keTdJVDFPdVcrXFxuc1l4b1R1Mm1Pd0tCZ1FDWjE4bjVIYUVhUmsvQTM3WFp5RFYzWHlrTEtUVUdLTWRtc1VrZDFLQzQwQmFieEJkd1xcbm9rMG5wN2RpRGhESzJXdHN6TXlLcEJaREh0TGI5TE1aeVpma2hjSDBLclRZTWsvVG5OZUw4Ny92S3UwMjJCT1hcXG5QL2JjN1VIMkd6SnBjMkpiRlp5MnBOSXJmd3pUQVVBYjBUdi9INXhZUXdQQ09SSFRjRFdHZlJFQllRS0JnR1pCXFxuMVBaU1dCS1lJcmdtYVZqM2M0Ymc4dzFzS1k5VGVQVnhNcGNpV2xlVVl5UndxT3pRMENLQzZmaW9mRG4xZ1B0dFxcbjZQcGRWSDFSNTZSU3lTUmdVSGgzR3kxVmEyYVJCQXFiVUZnY2UraHlvUzgyM0sraWs5enZna1hMYUoxYUdGYVdcXG5sSUg1Qm1tWmppVTFRUnNjKzREcFZWRldoeE1qNmg2UG5TaXRmdFFGQW9HQVdYS1l3bjBjOERpWlpNTThVeWZwXFxuaWxEOEZFSEs3MlpOSFF6aEFXeXRHMDdEMHR1eTNyS1FoY0EwRG01L05HZDdYcDRiQ1lrY3A3SkNBYUpZK3IrS1xcbm5xMDVmbUxsZWFTNzVjb0k5ZmFlWXY4WDRsNW85bVFGK1NaTnZVV25pR0ZqdmpuaSt0cGRVbUZzVmVWM1F0R0xcXG5iWVZuMnVRbVRxS0NYclpYbDUzQlB3Zz1cXG4tLS0tLUVORCBQUklWQVRFIEtFWS0tLS0tXFxuXCIsXG5cdFwiY2xpZW50X2VtYWlsXCI6IFwidXB3b3JrLWZyZWVsYW5jZXJAYmV5by04ZjllYy5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbVwiLFxuXHRcImNsaWVudF9pZFwiOiBcIjEwOTYwMzUzNTQyMDg0MzIyNDM2NFwiLFxuXHRcImF1dGhfdXJpXCI6IFwiaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tL28vb2F1dGgyL2F1dGhcIixcblx0XCJ0b2tlbl91cmlcIjogXCJodHRwczovL29hdXRoMi5nb29nbGVhcGlzLmNvbS90b2tlblwiLFxuXHRcImF1dGhfcHJvdmlkZXJfeDUwOV9jZXJ0X3VybFwiOiBcImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL29hdXRoMi92MS9jZXJ0c1wiLFxuXHRcImNsaWVudF94NTA5X2NlcnRfdXJsXCI6IFwiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vcm9ib3QvdjEvbWV0YWRhdGEveDUwOS91cHdvcmstZnJlZWxhbmNlciU0MGJleW8tOGY5ZWMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb21cIlxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvbXByZXNzaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvb2tpZS1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkZWJ1Z1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlLWFkbWluXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImhlbG1ldFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vcmdhblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlcXVlc3QtcHJvbWlzZS1uYXRpdmVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==