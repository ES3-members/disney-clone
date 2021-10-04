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
exports.id = "pages/api/changeToSeen";
exports.ids = ["pages/api/changeToSeen"];
exports.modules = {

/***/ "./pages/api/changeToSeen.js":
/*!***********************************!*\
  !*** ./pages/api/changeToSeen.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-request */ \"graphql-request\");\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async ({\n  body\n}, res) => {\n  const url = process.env.ENDPOINT;\n  const graphcms = new graphql_request__WEBPACK_IMPORTED_MODULE_0__.GraphQLClient(url, {\n    headers: {\n      \"Authorization\": `Bearer ${process.env.GRAPH_CMS_TOKEN}`\n    }\n  });\n  await graphcms.request(`\n        mutation($slug: String!) {\n          updateVideo(where: \n            { slug: $slug}, \n            data: { seen: true}\n          ) {\n            id,\n            title,\n            seen\n          }\n        }\n        `, {\n    slug: body.slug\n  });\n  await graphcms.request(`mutation publishVideo($slug: String) {\n        publishVideo(where: { slug: $slug}, to: PUBLISHED) {\n            slug\n            }\n        }`, {\n    slug: body.slug\n  });\n  res.status(201).json({\n    slug: body.slug\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvY2hhbmdlVG9TZWVuLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUEsaUVBQWUsT0FBTztBQUFFQyxFQUFBQTtBQUFGLENBQVAsRUFBZ0JDLEdBQWhCLEtBQXdCO0FBQ25DLFFBQU1DLEdBQUcsR0FBR0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFFBQXhCO0FBQ0EsUUFBTUMsUUFBUSxHQUFHLElBQUlQLDBEQUFKLENBQWtCRyxHQUFsQixFQUF1QjtBQUNwQ0ssSUFBQUEsT0FBTyxFQUFFO0FBQUUsdUJBQW1CLFVBQVNKLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSSxlQUFnQjtBQUExRDtBQUQyQixHQUF2QixDQUFqQjtBQUlBLFFBQU1GLFFBQVEsQ0FBQ0csT0FBVCxDQUNEO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQVpVLEVBYUY7QUFBRUMsSUFBQUEsSUFBSSxFQUFFVixJQUFJLENBQUNVO0FBQWIsR0FiRSxDQUFOO0FBZ0JBLFFBQU1KLFFBQVEsQ0FBQ0csT0FBVCxDQUNEO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsVUFMVSxFQU1GO0FBQUVDLElBQUFBLElBQUksRUFBRVYsSUFBSSxDQUFDVTtBQUFiLEdBTkUsQ0FBTjtBQVNBVCxFQUFBQSxHQUFHLENBQUNVLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFRixJQUFBQSxJQUFJLEVBQUVWLElBQUksQ0FBQ1U7QUFBYixHQUFyQjtBQUNILENBaENEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGlzbmV5LWNsb25lLy4vcGFnZXMvYXBpL2NoYW5nZVRvU2Vlbi5qcz85YWEzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyYXBoUUxDbGllbnQgfSBmcm9tICdncmFwaHFsLXJlcXVlc3QnXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jICh7IGJvZHl9LCByZXMpID0+IHtcbiAgICBjb25zdCB1cmwgPSBwcm9jZXNzLmVudi5FTkRQT0lOVFxuICAgIGNvbnN0IGdyYXBoY21zID0gbmV3IEdyYXBoUUxDbGllbnQodXJsLCB7XG4gICAgICAgIGhlYWRlcnM6IHsgXCJBdXRob3JpemF0aW9uXCIgOiBgQmVhcmVyICR7cHJvY2Vzcy5lbnYuR1JBUEhfQ01TX1RPS0VOfWB9XG4gICAgfSlcblxuICAgIGF3YWl0IGdyYXBoY21zLnJlcXVlc3QoXG4gICAgICAgIGBcbiAgICAgICAgbXV0YXRpb24oJHNsdWc6IFN0cmluZyEpIHtcbiAgICAgICAgICB1cGRhdGVWaWRlbyh3aGVyZTogXG4gICAgICAgICAgICB7IHNsdWc6ICRzbHVnfSwgXG4gICAgICAgICAgICBkYXRhOiB7IHNlZW46IHRydWV9XG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgICAgc2VlblxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBgLFxuICAgICAgICB7IHNsdWc6IGJvZHkuc2x1ZyB9XG4gICAgKVxuXG4gICAgYXdhaXQgZ3JhcGhjbXMucmVxdWVzdChcbiAgICAgICAgYG11dGF0aW9uIHB1Ymxpc2hWaWRlbygkc2x1ZzogU3RyaW5nKSB7XG4gICAgICAgIHB1Ymxpc2hWaWRlbyh3aGVyZTogeyBzbHVnOiAkc2x1Z30sIHRvOiBQVUJMSVNIRUQpIHtcbiAgICAgICAgICAgIHNsdWdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWAsXG4gICAgICAgIHsgc2x1ZzogYm9keS5zbHVnIH1cbiAgICApXG5cbiAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IHNsdWc6IGJvZHkuc2x1ZyB9KVxufVxuXG4iXSwibmFtZXMiOlsiR3JhcGhRTENsaWVudCIsImJvZHkiLCJyZXMiLCJ1cmwiLCJwcm9jZXNzIiwiZW52IiwiRU5EUE9JTlQiLCJncmFwaGNtcyIsImhlYWRlcnMiLCJHUkFQSF9DTVNfVE9LRU4iLCJyZXF1ZXN0Iiwic2x1ZyIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/changeToSeen.js\n");

/***/ }),

/***/ "graphql-request":
/*!**********************************!*\
  !*** external "graphql-request" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("graphql-request");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/changeToSeen.js"));
module.exports = __webpack_exports__;

})();