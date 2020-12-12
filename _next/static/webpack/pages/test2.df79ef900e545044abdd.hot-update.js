webpackHotUpdate_N_E("pages/test2",{

/***/ "./pages/test2.tsx":
/*!*************************!*\
  !*** ./pages/test2.tsx ***!
  \*************************/
/*! exports provided: Teaser, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Teaser\", function() { return Teaser; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _raster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../raster */ \"./raster/index.ts\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n\n\nvar _jsxFileName = \"/Users/andreasfaust/components/react-raster/pages/test2.tsx\",\n    _this = undefined;\n\n\n\n\n\nvar items = [{\n  name: \"George\"\n}, {\n  name: \"Janet\"\n}, {\n  name: \"Emma\"\n}, {\n  name: \"Eve\"\n}, {\n  name: \"Charles\"\n}, {\n  name: \"Tracey\"\n}];\nvar container = {\n  hidden: {\n    opacity: 0\n  },\n  show: {\n    opacity: 1,\n    transition: {\n      staggerChildren: 0.3\n    }\n  }\n};\nvar listItem = {\n  hidden: {\n    opacity: 0\n  },\n  show: {\n    opacity: 1\n  }\n};\nvar Teaser = function Teaser(_ref) {\n  var item = _ref.item;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/\",\n    passHref: true,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_raster__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n      cols: 4,\n      style: \"background: green;\",\n      component: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].a, {\n        variants: listItem\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 20\n      }, _this),\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n        children: item.name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 47,\n    columnNumber: 5\n  }, _this);\n};\n_c = Teaser;\n\nvar Testpage = function Testpage(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_raster__WEBPACK_IMPORTED_MODULE_3__[\"Grid\"], {\n    tag: \"section\",\n    breakpoints: [0, 500, 768, 1024, 1200, 1400],\n    left: \"1.5vw\",\n    right: \"3vw\",\n    top: \"10vw\",\n    bottom: \"20vw\",\n    gutterX: [\"0px\", \"0px\", \"1.5vw\"],\n    colspan: 12,\n    alignX: [\"center\", \"right\", \"left\"],\n    control: true,\n    style: \"\\n        background: blue;\\n        &.bp-768 {\\n          // background: black;\\n        }\\n      \",\n    component: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].div, {\n      variants: container,\n      initial: \"hidden\",\n      animate: \"show\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 9\n    }, _this),\n    children: items.map(function (item) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Teaser, {\n        item: item\n      }, item.name, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 61,\n    columnNumber: 5\n  }, _this);\n};\n\n_c2 = Testpage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Testpage);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Teaser\");\n$RefreshReg$(_c2, \"Testpage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVzdDIudHN4P2ZjOGQiXSwibmFtZXMiOlsiaXRlbXMiLCJuYW1lIiwiY29udGFpbmVyIiwiaGlkZGVuIiwib3BhY2l0eSIsInNob3ciLCJ0cmFuc2l0aW9uIiwic3RhZ2dlckNoaWxkcmVuIiwibGlzdEl0ZW0iLCJUZWFzZXIiLCJpdGVtIiwiVGVzdHBhZ2UiLCJwcm9wcyIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFJQSxJQUFNQSxLQUFLLEdBQUcsQ0FDWjtBQUNFQyxNQUFJLEVBQUU7QUFEUixDQURZLEVBSVo7QUFDRUEsTUFBSSxFQUFFO0FBRFIsQ0FKWSxFQU9aO0FBQ0VBLE1BQUksRUFBRTtBQURSLENBUFksRUFVWjtBQUNFQSxNQUFJLEVBQUU7QUFEUixDQVZZLEVBYVo7QUFDRUEsTUFBSSxFQUFFO0FBRFIsQ0FiWSxFQWdCWjtBQUNFQSxNQUFJLEVBQUU7QUFEUixDQWhCWSxDQUFkO0FBcUJBLElBQU1DLFNBQVMsR0FBRztBQUNoQkMsUUFBTSxFQUFFO0FBQUVDLFdBQU8sRUFBRTtBQUFYLEdBRFE7QUFFaEJDLE1BQUksRUFBRTtBQUNKRCxXQUFPLEVBQUUsQ0FETDtBQUVKRSxjQUFVLEVBQUU7QUFDVkMscUJBQWUsRUFBRTtBQURQO0FBRlI7QUFGVSxDQUFsQjtBQVVBLElBQU1DLFFBQVEsR0FBRztBQUNmTCxRQUFNLEVBQUU7QUFBRUMsV0FBTyxFQUFFO0FBQVgsR0FETztBQUVmQyxNQUFJLEVBQUU7QUFBRUQsV0FBTyxFQUFFO0FBQVg7QUFGUyxDQUFqQjtBQUtPLElBQU1LLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQWM7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDbEMsc0JBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFlLFlBQVEsTUFBdkI7QUFBQSwyQkFDRSxxRUFBQywyQ0FBRDtBQUNFLFVBQUksRUFBRSxDQURSO0FBRUUsV0FBSyxzQkFGUDtBQUdFLGVBQVMsZUFBRSxxRUFBQyxvREFBRCxDQUFRLENBQVI7QUFBVSxnQkFBUSxFQUFFRjtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSGI7QUFBQSw2QkFLRTtBQUFBLGtCQUFLRSxJQUFJLENBQUNUO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFXRCxDQVpNO0tBQU1RLE07O0FBY2IsSUFBTUUsUUFBeUIsR0FBRyxTQUE1QkEsUUFBNEIsQ0FBQ0MsS0FBRCxFQUFXO0FBQzNDLHNCQUNFLHFFQUFDLDRDQUFEO0FBQ0UsT0FBRyxFQUFDLFNBRE47QUFFRSxlQUFXLEVBQUUsQ0FBQyxDQUFELEVBQUksR0FBSixFQUFTLEdBQVQsRUFBYyxJQUFkLEVBQW9CLElBQXBCLEVBQTBCLElBQTFCLENBRmY7QUFHRSxRQUFJLEVBQUUsT0FIUjtBQUlFLFNBQUssRUFBRSxLQUpUO0FBS0UsT0FBRyxFQUFFLE1BTFA7QUFNRSxVQUFNLEVBQUUsTUFOVjtBQU9FLFdBQU8sRUFBRSxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsT0FBZixDQVBYO0FBUUUsV0FBTyxFQUFFLEVBUlg7QUFTRSxVQUFNLEVBQUUsQ0FBQyxRQUFELEVBQVcsT0FBWCxFQUFvQixNQUFwQixDQVRWO0FBVUUsV0FBTyxNQVZUO0FBV0UsU0FBSyx1R0FYUDtBQWlCRSxhQUFTLGVBQ1AscUVBQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQVksY0FBUSxFQUFFVixTQUF0QjtBQUFpQyxhQUFPLEVBQUMsUUFBekM7QUFBa0QsYUFBTyxFQUFDO0FBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFsQko7QUFBQSxjQXFCR0YsS0FBSyxDQUFDYSxHQUFOLENBQVUsVUFBQ0gsSUFBRDtBQUFBLDBCQUNULHFFQUFDLE1BQUQ7QUFBUSxZQUFJLEVBQUVBO0FBQWQsU0FBeUJBLElBQUksQ0FBQ1QsSUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURTO0FBQUEsS0FBVjtBQXJCSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEyQkQsQ0E1QkQ7O01BQU1VLFE7QUE4QlNBLHVFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvdGVzdDIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgR3JpZCwgQm94IH0gZnJvbSBcIi4uL3Jhc3RlclwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuaW50ZXJmYWNlIFByb3BzIHt9XG5cbmNvbnN0IGl0ZW1zID0gW1xuICB7XG4gICAgbmFtZTogXCJHZW9yZ2VcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiSmFuZXRcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiRW1tYVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJFdmVcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQ2hhcmxlc1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJUcmFjZXlcIixcbiAgfSxcbl07XG5cbmNvbnN0IGNvbnRhaW5lciA9IHtcbiAgaGlkZGVuOiB7IG9wYWNpdHk6IDAgfSxcbiAgc2hvdzoge1xuICAgIG9wYWNpdHk6IDEsXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgc3RhZ2dlckNoaWxkcmVuOiAwLjMsXG4gICAgfSxcbiAgfSxcbn07XG5cbmNvbnN0IGxpc3RJdGVtID0ge1xuICBoaWRkZW46IHsgb3BhY2l0eTogMCB9LFxuICBzaG93OiB7IG9wYWNpdHk6IDEgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBUZWFzZXIgPSAoeyBpdGVtIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGluayBocmVmPVwiL1wiIHBhc3NIcmVmPlxuICAgICAgPEJveFxuICAgICAgICBjb2xzPXs0fVxuICAgICAgICBzdHlsZT17YGJhY2tncm91bmQ6IGdyZWVuO2B9XG4gICAgICAgIGNvbXBvbmVudD17PG1vdGlvbi5hIHZhcmlhbnRzPXtsaXN0SXRlbX0gLz59XG4gICAgICA+XG4gICAgICAgIDxoMj57aXRlbS5uYW1lfTwvaDI+XG4gICAgICA8L0JveD5cbiAgICA8L0xpbms+XG4gICk7XG59O1xuXG5jb25zdCBUZXN0cGFnZTogTmV4dFBhZ2U8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEdyaWRcbiAgICAgIHRhZz1cInNlY3Rpb25cIlxuICAgICAgYnJlYWtwb2ludHM9e1swLCA1MDAsIDc2OCwgMTAyNCwgMTIwMCwgMTQwMF19XG4gICAgICBsZWZ0PXtcIjEuNXZ3XCJ9XG4gICAgICByaWdodD17XCIzdndcIn1cbiAgICAgIHRvcD17XCIxMHZ3XCJ9XG4gICAgICBib3R0b209e1wiMjB2d1wifVxuICAgICAgZ3V0dGVyWD17W1wiMHB4XCIsIFwiMHB4XCIsIFwiMS41dndcIl19XG4gICAgICBjb2xzcGFuPXsxMn1cbiAgICAgIGFsaWduWD17W1wiY2VudGVyXCIsIFwicmlnaHRcIiwgXCJsZWZ0XCJdfVxuICAgICAgY29udHJvbFxuICAgICAgc3R5bGU9e2BcbiAgICAgICAgYmFja2dyb3VuZDogYmx1ZTtcbiAgICAgICAgJi5icC03Njgge1xuICAgICAgICAgIC8vIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgY29tcG9uZW50PXtcbiAgICAgICAgPG1vdGlvbi5kaXYgdmFyaWFudHM9e2NvbnRhaW5lcn0gaW5pdGlhbD1cImhpZGRlblwiIGFuaW1hdGU9XCJzaG93XCIgLz5cbiAgICAgIH1cbiAgICA+XG4gICAgICB7aXRlbXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgIDxUZWFzZXIgaXRlbT17aXRlbX0ga2V5PXtpdGVtLm5hbWV9IC8+XG4gICAgICApKX1cbiAgICA8L0dyaWQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZXN0cGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/test2.tsx\n");

/***/ })

})