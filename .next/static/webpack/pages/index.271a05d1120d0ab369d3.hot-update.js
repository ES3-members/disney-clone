"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/Link */ \"./node_modules/next/Link.js\");\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/Image */ \"./node_modules/next/Image.js\");\n/* harmony import */ var next_Image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_Image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Section */ \"./components/Section.js\");\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/NavBar */ \"./components/NavBar.js\");\n/* harmony import */ var _public_disney_button_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/disney-button.png */ \"./public/disney-button.png\");\n/* harmony import */ var _public_marvel_button_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/marvel-button.png */ \"./public/marvel-button.png\");\n/* harmony import */ var _public_natgeo_button_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/natgeo-button.png */ \"./public/natgeo-button.png\");\n/* harmony import */ var _public_star_wars_button_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/star-wars-button.png */ \"./public/star-wars-button.png\");\n/* harmony import */ var _public_pixar_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/pixar.png */ \"./public/pixar.png\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/yabekaito/Desktop/git/disney-clone-graphcms/pages/index.js\",\n    _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\nvar Home = function Home(_ref) {\n  var videos = _ref.videos,\n      account = _ref.account;\n\n  var randomVideo = function randomVideo(videos) {\n    return videos[Math.floor(Math.random() * videos.length)];\n  };\n\n  var filterVideos = function filterVideos(videos, genre) {\n    return videos.filter(function (video) {\n      return video.tags.includes(genre);\n    });\n  };\n\n  var unSeenVideos = function unSeenVideos(videos) {\n    return videos.filter(function (video) {\n      return video.seen == false || video.seen == null;\n    });\n  };\n\n  console.log('not seen:', videos.filter(function (video) {\n    return video.seen == false || video.seen == null;\n  }));\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_4__.default, {\n      account: account\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"app\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"main-video\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          src: randomVideo(videos).thumbnail.url,\n          alt: randomVideo(videos).title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"video-feed\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_1___default()), {\n          href: \"#disney\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"franchise\",\n            id: \"disney\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Image__WEBPACK_IMPORTED_MODULE_2___default()), {\n              src: _public_disney_button_png__WEBPACK_IMPORTED_MODULE_5__.default\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 95,\n              columnNumber: 29\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 94,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_1___default()), {\n          href: \"#pixar\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"franchise\",\n            id: \"pixar\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Image__WEBPACK_IMPORTED_MODULE_2___default()), {\n              src: _public_pixar_png__WEBPACK_IMPORTED_MODULE_9__.default\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 100,\n              columnNumber: 29\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 99,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_1___default()), {\n          href: \"#star-wars\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"franchise\",\n            id: \"star-wars\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Image__WEBPACK_IMPORTED_MODULE_2___default()), {\n              src: _public_star_wars_button_png__WEBPACK_IMPORTED_MODULE_8__.default\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 105,\n              columnNumber: 29\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 104,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 103,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_1___default()), {\n          href: \"#nat-geo\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"franchise\",\n            id: \"nat-geo\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Image__WEBPACK_IMPORTED_MODULE_2___default()), {\n              src: _public_natgeo_button_png__WEBPACK_IMPORTED_MODULE_7__.default\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 110,\n              columnNumber: 29\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 109,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 108,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_1___default()), {\n          href: \"#marvel\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"franchise\",\n            id: \"marvel\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Image__WEBPACK_IMPORTED_MODULE_2___default()), {\n              src: _public_marvel_button_png__WEBPACK_IMPORTED_MODULE_6__.default\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 115,\n              columnNumber: 29\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 114,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 113,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Section__WEBPACK_IMPORTED_MODULE_3__.default, {\n        genre: 'Recommended for you',\n        videos: unSeenVideos(videos)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Section__WEBPACK_IMPORTED_MODULE_3__.default, {\n        genre: 'Family',\n        videos: filterVideos(videos, 'family')\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 120,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Section__WEBPACK_IMPORTED_MODULE_3__.default, {\n        genre: 'Thriller',\n        videos: filterVideos(videos, 'thriller')\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 121,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Section__WEBPACK_IMPORTED_MODULE_3__.default, {\n        genre: 'Classic',\n        videos: filterVideos(videos, 'classic')\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 122,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Section__WEBPACK_IMPORTED_MODULE_3__.default, {\n        id: \"pixar\",\n        genre: 'Pixar',\n        videos: filterVideos(videos, 'pixar')\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Section__WEBPACK_IMPORTED_MODULE_3__.default, {\n        id: \"marvel\",\n        genre: 'Marvel',\n        videos: filterVideos(videos, 'thriller')\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 124,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Section__WEBPACK_IMPORTED_MODULE_3__.default, {\n        id: \"nat-geo\",\n        genre: 'National Geographic',\n        videos: filterVideos(videos, 'national-geographic')\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 125,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Section__WEBPACK_IMPORTED_MODULE_3__.default, {\n        id: \"disney\",\n        genre: 'Disney',\n        videos: filterVideos(videos, 'disney')\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 127,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Section__WEBPACK_IMPORTED_MODULE_3__.default, {\n        id: \"star-wars\",\n        genre: 'Star Wars',\n        videos: filterVideos(videos, 'star-wars')\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 128,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true);\n};\n\n_c = Home;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzPzQ0ZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtncWwsIEdyYXBoUUxDbGllbnR9IGZyb20gJ2dyYXBocWwtcmVxdWVzdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvTGluaydcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L0ltYWdlJ1xuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VjdGlvblwiXG5pbXBvcnQgTmF2QmFyIGZyb20gXCIuLi9jb21wb25lbnRzL05hdkJhclwiXG5pbXBvcnQgZGlzbmV5TG9nbyBmcm9tICcuLi9wdWJsaWMvZGlzbmV5LWJ1dHRvbi5wbmcnXG5pbXBvcnQgbWFydmVsTG9nbyBmcm9tICcuLi9wdWJsaWMvbWFydmVsLWJ1dHRvbi5wbmcnXG5pbXBvcnQgbmF0Z2VvTG9nbyBmcm9tICcuLi9wdWJsaWMvbmF0Z2VvLWJ1dHRvbi5wbmcnXG5pbXBvcnQgc3RhcndhcnNMb2dvIGZyb20gJy4uL3B1YmxpYy9zdGFyLXdhcnMtYnV0dG9uLnBuZydcbmltcG9ydCBwaXhhckxvZ28gZnJvbSAnLi4vcHVibGljL3BpeGFyLnBuZydcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHVybCA9IHByb2Nlc3MuZW52LkVORFBPSU5UXG4gICAgY29uc3QgZ3JhcGhRTENsaWVudCA9IG5ldyBHcmFwaFFMQ2xpZW50KHVybCwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYEJlYXJlciAke3Byb2Nlc3MuZW52LkdSQVBIX0NNU19UT0tFTn1gXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgdmlkZW9zUXVlcnkgPSBncWxgXG4gICAgcXVlcnkge1xuICAgICAgdmlkZW9zIHtcbiAgICAgICAgY3JlYXRlZEF0LFxuICAgICAgICBpZCxcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBzZWVuLFxuICAgICAgICBzbHVnLFxuICAgICAgICB0YWdzLFxuICAgICAgICB0aHVtYm5haWwge1xuICAgICAgICAgIHVybFxuICAgICAgICB9LFxuICAgICAgICBtcDQge1xuICAgICAgICAgIHVybFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBgXG5cbiAgICBjb25zdCBhY2NvdW50UXVlcnkgPSBncWxgXG4gICAgcXVlcnkge1xuICAgIGFjY291bnQod2hlcmU6IHsgaWQ6IFwiY2t1Y29nb2UwZ2N5NDA5ODY3cGVmc2Zrb1wifSkge1xuICAgICAgdXNlcm5hbWVcbiAgICAgIGF2YXRhciB7XG4gICAgICAgIHVybFxuICAgICAgfVxuICAgIH1cbiAgfVxuICBgXG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ3JhcGhRTENsaWVudC5yZXF1ZXN0KHZpZGVvc1F1ZXJ5KVxuICAgIGNvbnN0IHZpZGVvcyA9IGRhdGEudmlkZW9zXG4gICAgY29uc3QgYWNjb3VudERhdGEgPSBhd2FpdCBncmFwaFFMQ2xpZW50LnJlcXVlc3QoYWNjb3VudFF1ZXJ5KVxuICAgIGNvbnN0IGFjY291bnQgPSBhY2NvdW50RGF0YS5hY2NvdW50XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgdmlkZW9zLFxuICAgICAgICAgICAgYWNjb3VudFxuICAgICAgICB9XG4gICAgfVxufVxuXG5cbmNvbnN0IEhvbWUgPSAoe3ZpZGVvcywgYWNjb3VudH0pID0+IHtcblxuXG4gICAgY29uc3QgcmFuZG9tVmlkZW8gPSAodmlkZW9zKSA9PiB7XG4gICAgICAgIHJldHVybiB2aWRlb3NbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdmlkZW9zLmxlbmd0aCldXG4gICAgfVxuXG4gICAgY29uc3QgZmlsdGVyVmlkZW9zID0gKHZpZGVvcywgZ2VucmUpID0+IHtcbiAgICAgICAgcmV0dXJuIHZpZGVvcy5maWx0ZXIoKHZpZGVvKSA9PiB2aWRlby50YWdzLmluY2x1ZGVzKGdlbnJlKSlcbiAgICB9XG5cbiAgICBjb25zdCB1blNlZW5WaWRlb3MgPSAodmlkZW9zKSA9PiB7XG4gICAgICAgIHJldHVybiB2aWRlb3MuZmlsdGVyKHZpZGVvID0+IHZpZGVvLnNlZW4gPT0gZmFsc2UgfHwgdmlkZW8uc2VlbiA9PSBudWxsKVxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKCdub3Qgc2VlbjonLCB2aWRlb3MuZmlsdGVyKHZpZGVvID0+IHZpZGVvLnNlZW4gPT0gZmFsc2UgfHwgdmlkZW8uc2VlbiA9PSBudWxsKSlcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxOYXZCYXIgYWNjb3VudD17YWNjb3VudH0vPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tdmlkZW9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3JhbmRvbVZpZGVvKHZpZGVvcykudGh1bWJuYWlsLnVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e3JhbmRvbVZpZGVvKHZpZGVvcykudGl0bGV9Lz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8tZmVlZFwiPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI2Rpc25leVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmcmFuY2hpc2VcIiBpZD1cImRpc25leVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2Rpc25leUxvZ299Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjcGl4YXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnJhbmNoaXNlXCIgaWQ9XCJwaXhhclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e3BpeGFyTG9nb30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNzdGFyLXdhcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnJhbmNoaXNlXCIgaWQ9XCJzdGFyLXdhcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtzdGFyd2Fyc0xvZ299Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjbmF0LWdlb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmcmFuY2hpc2VcIiBpZD1cIm5hdC1nZW9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtuYXRnZW9Mb2dvfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI21hcnZlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmcmFuY2hpc2VcIiBpZD1cIm1hcnZlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e21hcnZlbExvZ299Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPFNlY3Rpb24gZ2VucmU9eydSZWNvbW1lbmRlZCBmb3IgeW91J30gdmlkZW9zPXt1blNlZW5WaWRlb3ModmlkZW9zKX0vPlxuICAgICAgICAgICAgICAgIDxTZWN0aW9uIGdlbnJlPXsnRmFtaWx5J30gdmlkZW9zPXtmaWx0ZXJWaWRlb3ModmlkZW9zLCAnZmFtaWx5Jyl9Lz5cbiAgICAgICAgICAgICAgICA8U2VjdGlvbiBnZW5yZT17J1RocmlsbGVyJ30gdmlkZW9zPXtmaWx0ZXJWaWRlb3ModmlkZW9zLCAndGhyaWxsZXInKX0vPlxuICAgICAgICAgICAgICAgIDxTZWN0aW9uIGdlbnJlPXsnQ2xhc3NpYyd9IHZpZGVvcz17ZmlsdGVyVmlkZW9zKHZpZGVvcywgJ2NsYXNzaWMnKX0vPlxuICAgICAgICAgICAgICAgIDxTZWN0aW9uIGlkPVwicGl4YXJcIiBnZW5yZT17J1BpeGFyJ30gdmlkZW9zPXtmaWx0ZXJWaWRlb3ModmlkZW9zLCAncGl4YXInKX0vPlxuICAgICAgICAgICAgICAgIDxTZWN0aW9uIGlkPVwibWFydmVsXCIgZ2VucmU9eydNYXJ2ZWwnfSB2aWRlb3M9e2ZpbHRlclZpZGVvcyh2aWRlb3MsICd0aHJpbGxlcicpfS8+XG4gICAgICAgICAgICAgICAgPFNlY3Rpb24gaWQ9XCJuYXQtZ2VvXCIgZ2VucmU9eydOYXRpb25hbCBHZW9ncmFwaGljJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICB2aWRlb3M9e2ZpbHRlclZpZGVvcyh2aWRlb3MsICduYXRpb25hbC1nZW9ncmFwaGljJyl9Lz5cbiAgICAgICAgICAgICAgICA8U2VjdGlvbiBpZD1cImRpc25leVwiIGdlbnJlPXsnRGlzbmV5J30gdmlkZW9zPXtmaWx0ZXJWaWRlb3ModmlkZW9zLCAnZGlzbmV5Jyl9Lz5cbiAgICAgICAgICAgICAgICA8U2VjdGlvbiBpZD1cInN0YXItd2Fyc1wiIGdlbnJlPXsnU3RhciBXYXJzJ30gdmlkZW9zPXtmaWx0ZXJWaWRlb3ModmlkZW9zLCAnc3Rhci13YXJzJyl9Lz5cblxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG5cblxuXG5cblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6WyJMaW5rIiwiSW1hZ2UiLCJTZWN0aW9uIiwiTmF2QmFyIiwiZGlzbmV5TG9nbyIsIm1hcnZlbExvZ28iLCJuYXRnZW9Mb2dvIiwic3RhcndhcnNMb2dvIiwicGl4YXJMb2dvIiwiSG9tZSIsInZpZGVvcyIsImFjY291bnQiLCJyYW5kb21WaWRlbyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsImZpbHRlclZpZGVvcyIsImdlbnJlIiwiZmlsdGVyIiwidmlkZW8iLCJ0YWdzIiwiaW5jbHVkZXMiLCJ1blNlZW5WaWRlb3MiLCJzZWVuIiwiY29uc29sZSIsImxvZyIsInRodW1ibmFpbCIsInVybCIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});