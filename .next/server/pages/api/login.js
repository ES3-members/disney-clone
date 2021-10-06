"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
exports.modules = {

/***/ "./lib/auth0.js":
/*!**********************!*\
  !*** ./lib/auth0.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ \"@auth0/nextjs-auth0\");\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__.initAuth0)({\n  secret: process.env.SESSION_COOKIE_SECRET,\n  issuerBaseURL: \"https://dev-7jcod1-n.us.auth0.com\",\n  baseURL: \"http://localhost:3000\",\n  clientID: \"exGd1Qs46FBMAkAEkLMYDDc9szsWU5cm\",\n  clientSecret: process.env.AUTH0_CLIENT_SECRET,\n  routes: {\n    callback: \"/api/callback\" || 0,\n    postLogoutRedirect: \"/\" || 0\n  },\n  authorizationParams: {\n    response_type: 'code',\n    scope: \"openid profile\"\n  },\n  session: {\n    absoluteDuration: process.env.SESSION_COOKIE_LIFETIME\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXV0aDAuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFQSxpRUFBZUEsOERBQVMsQ0FBQztBQUN2QkMsRUFBQUEsTUFBTSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMscUJBREc7QUFFdkJDLEVBQUFBLGFBQWEsRUFBRUgsbUNBRlE7QUFHdkJLLEVBQUFBLE9BQU8sRUFBRUwsdUJBSGM7QUFJdkJPLEVBQUFBLFFBQVEsRUFBRVAsa0NBSmE7QUFLdkJTLEVBQUFBLFlBQVksRUFBRVQsT0FBTyxDQUFDQyxHQUFSLENBQVlTLG1CQUxIO0FBTXZCQyxFQUFBQSxNQUFNLEVBQUU7QUFDTkMsSUFBQUEsUUFBUSxFQUNOWixlQUFBLElBQ0EsQ0FISTtBQUlOYyxJQUFBQSxrQkFBa0IsRUFDaEJkLEdBQUEsSUFDQSxDQUF1QjtBQU5uQixHQU5lO0FBY3ZCZ0IsRUFBQUEsbUJBQW1CLEVBQUU7QUFDbkJDLElBQUFBLGFBQWEsRUFBRSxNQURJO0FBRW5CQyxJQUFBQSxLQUFLLEVBQUVsQixnQkFBbUNtQjtBQUZ2QixHQWRFO0FBa0J2QkMsRUFBQUEsT0FBTyxFQUFFO0FBQ1BDLElBQUFBLGdCQUFnQixFQUFFckIsT0FBTyxDQUFDQyxHQUFSLENBQVlxQjtBQUR2QjtBQWxCYyxDQUFELENBQXhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGlzbmV5LWNsb25lLy4vbGliL2F1dGgwLmpzP2Q4ZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5pdEF1dGgwIH0gZnJvbSAnQGF1dGgwL25leHRqcy1hdXRoMCdcblxuZXhwb3J0IGRlZmF1bHQgaW5pdEF1dGgwKHtcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5TRVNTSU9OX0NPT0tJRV9TRUNSRVQsXG4gIGlzc3VlckJhc2VVUkw6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FVVEgwX0RPTUFJTixcbiAgYmFzZVVSTDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkwsXG4gIGNsaWVudElEOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BVVRIMF9DTElFTlRfSUQsXG4gIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuQVVUSDBfQ0xJRU5UX1NFQ1JFVCxcbiAgcm91dGVzOiB7XG4gICAgY2FsbGJhY2s6XG4gICAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19SRURJUkVDVF9VUkkgfHxcbiAgICAgICdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2NhbGxiYWNrJyxcbiAgICBwb3N0TG9nb3V0UmVkaXJlY3Q6XG4gICAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19QT1NUX0xPR09VVF9SRURJUkVDVF9VUkkgfHxcbiAgICAgICdodHRwOi8vbG9jYWxob3N0OjMwMDAnLFxuICB9LFxuICBhdXRob3JpemF0aW9uUGFyYW1zOiB7XG4gICAgcmVzcG9uc2VfdHlwZTogJ2NvZGUnLFxuICAgIHNjb3BlOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BVVRIMF9TQ09QRSxcbiAgfSxcbiAgc2Vzc2lvbjoge1xuICAgIGFic29sdXRlRHVyYXRpb246IHByb2Nlc3MuZW52LlNFU1NJT05fQ09PS0lFX0xJRkVUSU1FLFxuICB9LFxufSlcbiJdLCJuYW1lcyI6WyJpbml0QXV0aDAiLCJzZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiU0VTU0lPTl9DT09LSUVfU0VDUkVUIiwiaXNzdWVyQmFzZVVSTCIsIk5FWFRfUFVCTElDX0FVVEgwX0RPTUFJTiIsImJhc2VVUkwiLCJORVhUX1BVQkxJQ19CQVNFX1VSTCIsImNsaWVudElEIiwiTkVYVF9QVUJMSUNfQVVUSDBfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiQVVUSDBfQ0xJRU5UX1NFQ1JFVCIsInJvdXRlcyIsImNhbGxiYWNrIiwiTkVYVF9QVUJMSUNfUkVESVJFQ1RfVVJJIiwicG9zdExvZ291dFJlZGlyZWN0IiwiTkVYVF9QVUJMSUNfUE9TVF9MT0dPVVRfUkVESVJFQ1RfVVJJIiwiYXV0aG9yaXphdGlvblBhcmFtcyIsInJlc3BvbnNlX3R5cGUiLCJzY29wZSIsIk5FWFRfUFVCTElDX0FVVEgwX1NDT1BFIiwic2Vzc2lvbiIsImFic29sdXRlRHVyYXRpb24iLCJTRVNTSU9OX0NPT0tJRV9MSUZFVElNRSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/auth0.js\n");

/***/ }),

/***/ "./pages/api/login.js":
/*!****************************!*\
  !*** ./pages/api/login.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ login)\n/* harmony export */ });\n/* harmony import */ var _lib_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/auth0 */ \"./lib/auth0.js\");\n\nasync function login(req, res) {\n  try {\n    await _lib_auth0__WEBPACK_IMPORTED_MODULE_0__.default.handleLogin(req, res);\n  } catch (error) {\n    console.error(error);\n    res.status(error.status || 500).end(error.message);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvbG9naW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUVlLGVBQWVDLEtBQWYsQ0FBcUJDLEdBQXJCLEVBQTBCQyxHQUExQixFQUErQjtBQUM1QyxNQUFJO0FBQ0YsVUFBTUgsMkRBQUEsQ0FBa0JFLEdBQWxCLEVBQXVCQyxHQUF2QixDQUFOO0FBQ0QsR0FGRCxDQUVFLE9BQU9FLEtBQVAsRUFBYztBQUNkQyxJQUFBQSxPQUFPLENBQUNELEtBQVIsQ0FBY0EsS0FBZDtBQUNBRixJQUFBQSxHQUFHLENBQUNJLE1BQUosQ0FBV0YsS0FBSyxDQUFDRSxNQUFOLElBQWdCLEdBQTNCLEVBQWdDQyxHQUFoQyxDQUFvQ0gsS0FBSyxDQUFDSSxPQUExQztBQUNEO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kaXNuZXktY2xvbmUvLi9wYWdlcy9hcGkvbG9naW4uanM/MDM4NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXV0aDAgZnJvbSAnLi4vLi4vbGliL2F1dGgwJ1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBsb2dpbihyZXEsIHJlcykge1xuICB0cnkge1xuICAgIGF3YWl0IGF1dGgwLmhhbmRsZUxvZ2luKHJlcSwgcmVzKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgcmVzLnN0YXR1cyhlcnJvci5zdGF0dXMgfHwgNTAwKS5lbmQoZXJyb3IubWVzc2FnZSlcbiAgfVxufVxuIl0sIm5hbWVzIjpbImF1dGgwIiwibG9naW4iLCJyZXEiLCJyZXMiLCJoYW5kbGVMb2dpbiIsImVycm9yIiwiY29uc29sZSIsInN0YXR1cyIsImVuZCIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/login.js\n");

/***/ }),

/***/ "@auth0/nextjs-auth0":
/*!**************************************!*\
  !*** external "@auth0/nextjs-auth0" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@auth0/nextjs-auth0");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/login.js"));
module.exports = __webpack_exports__;

})();