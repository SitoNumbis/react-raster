webpackHotUpdate_N_E("pages/test2",{

/***/ "./pages/test2.tsx":
/*!*************************!*\
  !*** ./pages/test2.tsx ***!
  \*************************/
/*! exports provided: ExampleTeaser, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ExampleTeaser\", function() { return ExampleTeaser; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _raster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../raster */ \"./raster/index.ts\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n\n\nvar _jsxFileName = \"/Users/andreasfaust/components/react-raster/pages/test2.tsx\",\n    _this = undefined;\n\n\n\n\n\nvar items = [\"Karl Marx\", \"Friedrich Engels\", \"Rosa Luxemburg\", \"Karl Liebknecht\", \"Clara Zetkin\", \"Ernst Toller\"];\nvar containerVariants = {\n  hidden: {\n    opacity: 0\n  },\n  show: {\n    opacity: 1,\n    transition: {\n      staggerChildren: 0.3\n    }\n  }\n};\nvar listItem = {\n  hidden: {\n    opacity: 0\n  },\n  show: {\n    opacity: 1\n  }\n};\nvar ExampleTeaser = function ExampleTeaser(_ref) {\n  var item = _ref.item;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/\",\n    passHref: true,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_raster__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n      cols: 4,\n      style: \"\\n        background: blue;\\n        height: 400px;\\n        color: white;\\n      \",\n      alignY: \"center\",\n      alignX: \"center\",\n      component: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].a, {\n        variants: listItem\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 18\n      }, _this),\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n        children: item\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 3\n  }, _this);\n};\n_c = ExampleTeaser;\n\nvar ExampleGrid = function ExampleGrid(_ref2) {\n  var children = _ref2.children;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_raster__WEBPACK_IMPORTED_MODULE_3__[\"Grid\"], {\n    left: \"1.5vw\",\n    right: \"1.5vw\",\n    top: \"3vw\",\n    bottom: \"20vw\",\n    gutterX: \"1.5vw\",\n    gutterY: \"1.25vw\",\n    colspan: 12,\n    control: true,\n    component: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].div, {\n      variants: containerVariants,\n      initial: \"hidden\",\n      animate: \"show\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }, _this),\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 49,\n    columnNumber: 3\n  }, _this);\n};\n\n_c2 = ExampleGrid;\n\nvar ExamplePage = function ExamplePage() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ExampleGrid, {\n    children: items.map(function (item) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ExampleTeaser, {\n        item: item\n      }, item, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 72,\n    columnNumber: 5\n  }, _this);\n};\n\n_c3 = ExamplePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ExamplePage);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"ExampleTeaser\");\n$RefreshReg$(_c2, \"ExampleGrid\");\n$RefreshReg$(_c3, \"ExamplePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVzdDIudHN4P2ZjOGQiXSwibmFtZXMiOlsiaXRlbXMiLCJjb250YWluZXJWYXJpYW50cyIsImhpZGRlbiIsIm9wYWNpdHkiLCJzaG93IiwidHJhbnNpdGlvbiIsInN0YWdnZXJDaGlsZHJlbiIsImxpc3RJdGVtIiwiRXhhbXBsZVRlYXNlciIsIml0ZW0iLCJFeGFtcGxlR3JpZCIsImNoaWxkcmVuIiwiRXhhbXBsZVBhZ2UiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHLENBQ1osV0FEWSxFQUVaLGtCQUZZLEVBR1osZ0JBSFksRUFJWixpQkFKWSxFQUtaLGNBTFksRUFNWixjQU5ZLENBQWQ7QUFTQSxJQUFNQyxpQkFBaUIsR0FBRztBQUN4QkMsUUFBTSxFQUFFO0FBQUVDLFdBQU8sRUFBRTtBQUFYLEdBRGdCO0FBRXhCQyxNQUFJLEVBQUU7QUFDSkQsV0FBTyxFQUFFLENBREw7QUFFSkUsY0FBVSxFQUFFO0FBQ1ZDLHFCQUFlLEVBQUU7QUFEUDtBQUZSO0FBRmtCLENBQTFCO0FBVUEsSUFBTUMsUUFBUSxHQUFHO0FBQ2ZMLFFBQU0sRUFBRTtBQUFFQyxXQUFPLEVBQUU7QUFBWCxHQURPO0FBRWZDLE1BQUksRUFBRTtBQUFFRCxXQUFPLEVBQUU7QUFBWDtBQUZTLENBQWpCO0FBS08sSUFBTUssYUFBYSxHQUFHLFNBQWhCQSxhQUFnQjtBQUFBLE1BQUdDLElBQUgsUUFBR0EsSUFBSDtBQUFBLHNCQUMzQixxRUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQWUsWUFBUSxNQUF2QjtBQUFBLDJCQUNFLHFFQUFDLDJDQUFEO0FBQ0UsVUFBSSxFQUFFLENBRFI7QUFFRSxXQUFLLHNGQUZQO0FBT0UsWUFBTSxFQUFDLFFBUFQ7QUFRRSxZQUFNLEVBQUMsUUFSVDtBQVNFLGVBQVMsZUFBRSxxRUFBQyxvREFBRCxDQUFRLENBQVI7QUFBVSxnQkFBUSxFQUFFRjtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVGI7QUFBQSw2QkFXRTtBQUFBLGtCQUFLRTtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUQyQjtBQUFBLENBQXRCO0tBQU1ELGE7O0FBa0JiLElBQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsTUFBR0MsUUFBSCxTQUFHQSxRQUFIO0FBQUEsc0JBQ2xCLHFFQUFDLDRDQUFEO0FBQ0UsUUFBSSxFQUFFLE9BRFI7QUFFRSxTQUFLLEVBQUUsT0FGVDtBQUdFLE9BQUcsRUFBRSxLQUhQO0FBSUUsVUFBTSxFQUFFLE1BSlY7QUFLRSxXQUFPLEVBQUUsT0FMWDtBQU1FLFdBQU8sRUFBRSxRQU5YO0FBT0UsV0FBTyxFQUFFLEVBUFg7QUFRRSxXQUFPLE1BUlQ7QUFTRSxhQUFTLGVBQ1AscUVBQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQ0UsY0FBUSxFQUFFVixpQkFEWjtBQUVFLGFBQU8sRUFBQyxRQUZWO0FBR0UsYUFBTyxFQUFDO0FBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZKO0FBQUEsY0FpQkdVO0FBakJIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEa0I7QUFBQSxDQUFwQjs7TUFBTUQsVzs7QUFzQk4sSUFBTUUsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QixzQkFDRSxxRUFBQyxXQUFEO0FBQUEsY0FDR1osS0FBSyxDQUFDYSxHQUFOLENBQVUsVUFBQ0osSUFBRDtBQUFBLDBCQUNULHFFQUFDLGFBQUQ7QUFBZSxZQUFJLEVBQUVBO0FBQXJCLFNBQWdDQSxJQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFM7QUFBQSxLQUFWO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBT0QsQ0FSRDs7TUFBTUcsVztBQVVTQSwwRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3Rlc3QyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IEdyaWQsIEJveCB9IGZyb20gXCIuLi9yYXN0ZXJcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmNvbnN0IGl0ZW1zID0gW1xuICBcIkthcmwgTWFyeFwiLFxuICBcIkZyaWVkcmljaCBFbmdlbHNcIixcbiAgXCJSb3NhIEx1eGVtYnVyZ1wiLFxuICBcIkthcmwgTGllYmtuZWNodFwiLFxuICBcIkNsYXJhIFpldGtpblwiLFxuICBcIkVybnN0IFRvbGxlclwiLFxuXTtcblxuY29uc3QgY29udGFpbmVyVmFyaWFudHMgPSB7XG4gIGhpZGRlbjogeyBvcGFjaXR5OiAwIH0sXG4gIHNob3c6IHtcbiAgICBvcGFjaXR5OiAxLFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIHN0YWdnZXJDaGlsZHJlbjogMC4zLFxuICAgIH0sXG4gIH0sXG59O1xuXG5jb25zdCBsaXN0SXRlbSA9IHtcbiAgaGlkZGVuOiB7IG9wYWNpdHk6IDAgfSxcbiAgc2hvdzogeyBvcGFjaXR5OiAxIH0sXG59O1xuXG5leHBvcnQgY29uc3QgRXhhbXBsZVRlYXNlciA9ICh7IGl0ZW0gfSkgPT4gKFxuICA8TGluayBocmVmPVwiL1wiIHBhc3NIcmVmPlxuICAgIDxCb3hcbiAgICAgIGNvbHM9ezR9XG4gICAgICBzdHlsZT17YFxuICAgICAgICBiYWNrZ3JvdW5kOiBibHVlO1xuICAgICAgICBoZWlnaHQ6IDQwMHB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBgfVxuICAgICAgYWxpZ25ZPVwiY2VudGVyXCJcbiAgICAgIGFsaWduWD1cImNlbnRlclwiXG4gICAgICBjb21wb25lbnQ9ezxtb3Rpb24uYSB2YXJpYW50cz17bGlzdEl0ZW19IC8+fVxuICAgID5cbiAgICAgIDxoMj57aXRlbX08L2gyPlxuICAgIDwvQm94PlxuICA8L0xpbms+XG4pO1xuXG5jb25zdCBFeGFtcGxlR3JpZCA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPEdyaWRcbiAgICBsZWZ0PXtcIjEuNXZ3XCJ9XG4gICAgcmlnaHQ9e1wiMS41dndcIn1cbiAgICB0b3A9e1wiM3Z3XCJ9XG4gICAgYm90dG9tPXtcIjIwdndcIn1cbiAgICBndXR0ZXJYPXtcIjEuNXZ3XCJ9XG4gICAgZ3V0dGVyWT17XCIxLjI1dndcIn1cbiAgICBjb2xzcGFuPXsxMn1cbiAgICBjb250cm9sXG4gICAgY29tcG9uZW50PXtcbiAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgIHZhcmlhbnRzPXtjb250YWluZXJWYXJpYW50c31cbiAgICAgICAgaW5pdGlhbD1cImhpZGRlblwiXG4gICAgICAgIGFuaW1hdGU9XCJzaG93XCJcbiAgICAgIC8+XG4gICAgfVxuICA+XG4gICAge2NoaWxkcmVufVxuICA8L0dyaWQ+XG4pO1xuXG5jb25zdCBFeGFtcGxlUGFnZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8RXhhbXBsZUdyaWQ+XG4gICAgICB7aXRlbXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgIDxFeGFtcGxlVGVhc2VyIGl0ZW09e2l0ZW19IGtleT17aXRlbX0gLz5cbiAgICAgICkpfVxuICAgIDwvRXhhbXBsZUdyaWQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFeGFtcGxlUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/test2.tsx\n");

/***/ })

})