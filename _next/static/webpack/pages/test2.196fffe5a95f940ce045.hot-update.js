webpackHotUpdate_N_E("pages/test2",{

/***/ "./pages/test2.tsx":
/*!*************************!*\
  !*** ./pages/test2.tsx ***!
  \*************************/
/*! exports provided: Teaser, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Teaser\", function() { return Teaser; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _raster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../raster */ \"./raster/index.ts\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n\n\nvar _jsxFileName = \"/Users/andreasfaust/components/react-raster/pages/test2.tsx\",\n    _this = undefined;\n\n\n\n\n\nvar items = [{\n  name: \"Karl Marx\"\n}, {\n  name: \"Friedrich Engels\"\n}, {\n  name: \"Rosa Luxemburg\"\n}, {\n  name: \"Karl Liebknecht\"\n}, {\n  name: \"Clara Zetkin\"\n}, {\n  name: \"Ernst Toller\"\n}];\nvar container = {\n  hidden: {\n    opacity: 0\n  },\n  show: {\n    opacity: 1,\n    transition: {\n      staggerChildren: 0.3\n    }\n  }\n};\nvar listItem = {\n  hidden: {\n    opacity: 0\n  },\n  show: {\n    opacity: 1\n  }\n};\nvar Teaser = function Teaser(_ref) {\n  var item = _ref.item;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/\",\n    passHref: true,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_raster__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n      cols: 4,\n      style: \"\\n        background: blue;\\n        height: 400px;\\n        color: white;\\n      \",\n      alignY: \"center\",\n      alignX: \"center\",\n      component: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].a, {\n        variants: listItem\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 18\n      }, _this),\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n        children: item.name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 3\n  }, _this);\n};\n_c = Teaser;\n\nvar Testpage = function Testpage(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_raster__WEBPACK_IMPORTED_MODULE_3__[\"Grid\"], {\n    left: \"1.5vw\",\n    right: \"1.5vw\",\n    top: \"3vw\",\n    bottom: \"20vw\",\n    gutterX: \"1.5vw\",\n    gutterY: \"1.25vw\",\n    colspan: 12,\n    control: true,\n    component: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].div, {\n      variants: container,\n      initial: \"hidden\",\n      animate: \"show\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 9\n    }, _this),\n    children: items.map(function (item) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Teaser, {\n        item: item\n      }, item.name, false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 65,\n    columnNumber: 5\n  }, _this);\n};\n\n_c2 = Testpage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Testpage);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Teaser\");\n$RefreshReg$(_c2, \"Testpage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVzdDIudHN4P2ZjOGQiXSwibmFtZXMiOlsiaXRlbXMiLCJuYW1lIiwiY29udGFpbmVyIiwiaGlkZGVuIiwib3BhY2l0eSIsInNob3ciLCJ0cmFuc2l0aW9uIiwic3RhZ2dlckNoaWxkcmVuIiwibGlzdEl0ZW0iLCJUZWFzZXIiLCJpdGVtIiwiVGVzdHBhZ2UiLCJwcm9wcyIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFJQSxJQUFNQSxLQUFLLEdBQUcsQ0FDWjtBQUNFQyxNQUFJLEVBQUU7QUFEUixDQURZLEVBSVo7QUFDRUEsTUFBSSxFQUFFO0FBRFIsQ0FKWSxFQU9aO0FBQ0VBLE1BQUksRUFBRTtBQURSLENBUFksRUFVWjtBQUNFQSxNQUFJLEVBQUU7QUFEUixDQVZZLEVBYVo7QUFDRUEsTUFBSSxFQUFFO0FBRFIsQ0FiWSxFQWdCWjtBQUNFQSxNQUFJLEVBQUU7QUFEUixDQWhCWSxDQUFkO0FBcUJBLElBQU1DLFNBQVMsR0FBRztBQUNoQkMsUUFBTSxFQUFFO0FBQUVDLFdBQU8sRUFBRTtBQUFYLEdBRFE7QUFFaEJDLE1BQUksRUFBRTtBQUNKRCxXQUFPLEVBQUUsQ0FETDtBQUVKRSxjQUFVLEVBQUU7QUFDVkMscUJBQWUsRUFBRTtBQURQO0FBRlI7QUFGVSxDQUFsQjtBQVVBLElBQU1DLFFBQVEsR0FBRztBQUNmTCxRQUFNLEVBQUU7QUFBRUMsV0FBTyxFQUFFO0FBQVgsR0FETztBQUVmQyxNQUFJLEVBQUU7QUFBRUQsV0FBTyxFQUFFO0FBQVg7QUFGUyxDQUFqQjtBQUtPLElBQU1LLE1BQU0sR0FBRyxTQUFUQSxNQUFTO0FBQUEsTUFBR0MsSUFBSCxRQUFHQSxJQUFIO0FBQUEsc0JBQ3BCLHFFQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBZSxZQUFRLE1BQXZCO0FBQUEsMkJBQ0UscUVBQUMsMkNBQUQ7QUFDRSxVQUFJLEVBQUUsQ0FEUjtBQUVFLFdBQUssc0ZBRlA7QUFPRSxZQUFNLEVBQUMsUUFQVDtBQVFFLFlBQU0sRUFBQyxRQVJUO0FBU0UsZUFBUyxlQUFFLHFFQUFDLG9EQUFELENBQVEsQ0FBUjtBQUFVLGdCQUFRLEVBQUVGO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFUYjtBQUFBLDZCQVdFO0FBQUEsa0JBQUtFLElBQUksQ0FBQ1Q7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEb0I7QUFBQSxDQUFmO0tBQU1RLE07O0FBa0JiLElBQU1FLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBVztBQUMxQixzQkFDRSxxRUFBQyw0Q0FBRDtBQUNFLFFBQUksRUFBRSxPQURSO0FBRUUsU0FBSyxFQUFFLE9BRlQ7QUFHRSxPQUFHLEVBQUUsS0FIUDtBQUlFLFVBQU0sRUFBRSxNQUpWO0FBS0UsV0FBTyxFQUFFLE9BTFg7QUFNRSxXQUFPLEVBQUUsUUFOWDtBQU9FLFdBQU8sRUFBRSxFQVBYO0FBUUUsV0FBTyxNQVJUO0FBU0UsYUFBUyxlQUNQLHFFQUFDLG9EQUFELENBQVEsR0FBUjtBQUFZLGNBQVEsRUFBRVYsU0FBdEI7QUFBaUMsYUFBTyxFQUFDLFFBQXpDO0FBQWtELGFBQU8sRUFBQztBQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVko7QUFBQSxjQWFHRixLQUFLLENBQUNhLEdBQU4sQ0FBVSxVQUFDSCxJQUFEO0FBQUEsMEJBQ1QscUVBQUMsTUFBRDtBQUFRLFlBQUksRUFBRUE7QUFBZCxTQUF5QkEsSUFBSSxDQUFDVCxJQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFM7QUFBQSxLQUFWO0FBYkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBbUJELENBcEJEOztNQUFNVSxRO0FBc0JTQSx1RUFBZiIsImZpbGUiOiIuL3BhZ2VzL3Rlc3QyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IEdyaWQsIEJveCB9IGZyb20gXCIuLi9yYXN0ZXJcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7fVxuXG5jb25zdCBpdGVtcyA9IFtcbiAge1xuICAgIG5hbWU6IFwiS2FybCBNYXJ4XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkZyaWVkcmljaCBFbmdlbHNcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiUm9zYSBMdXhlbWJ1cmdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiS2FybCBMaWVia25lY2h0XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkNsYXJhIFpldGtpblwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJFcm5zdCBUb2xsZXJcIixcbiAgfSxcbl07XG5cbmNvbnN0IGNvbnRhaW5lciA9IHtcbiAgaGlkZGVuOiB7IG9wYWNpdHk6IDAgfSxcbiAgc2hvdzoge1xuICAgIG9wYWNpdHk6IDEsXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgc3RhZ2dlckNoaWxkcmVuOiAwLjMsXG4gICAgfSxcbiAgfSxcbn07XG5cbmNvbnN0IGxpc3RJdGVtID0ge1xuICBoaWRkZW46IHsgb3BhY2l0eTogMCB9LFxuICBzaG93OiB7IG9wYWNpdHk6IDEgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBUZWFzZXIgPSAoeyBpdGVtIH0pID0+IChcbiAgPExpbmsgaHJlZj1cIi9cIiBwYXNzSHJlZj5cbiAgICA8Qm94XG4gICAgICBjb2xzPXs0fVxuICAgICAgc3R5bGU9e2BcbiAgICAgICAgYmFja2dyb3VuZDogYmx1ZTtcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgYH1cbiAgICAgIGFsaWduWT1cImNlbnRlclwiXG4gICAgICBhbGlnblg9XCJjZW50ZXJcIlxuICAgICAgY29tcG9uZW50PXs8bW90aW9uLmEgdmFyaWFudHM9e2xpc3RJdGVtfSAvPn1cbiAgICA+XG4gICAgICA8aDI+e2l0ZW0ubmFtZX08L2gyPlxuICAgIDwvQm94PlxuICA8L0xpbms+XG4pO1xuXG5jb25zdCBUZXN0cGFnZSA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxHcmlkXG4gICAgICBsZWZ0PXtcIjEuNXZ3XCJ9XG4gICAgICByaWdodD17XCIxLjV2d1wifVxuICAgICAgdG9wPXtcIjN2d1wifVxuICAgICAgYm90dG9tPXtcIjIwdndcIn1cbiAgICAgIGd1dHRlclg9e1wiMS41dndcIn1cbiAgICAgIGd1dHRlclk9e1wiMS4yNXZ3XCJ9XG4gICAgICBjb2xzcGFuPXsxMn1cbiAgICAgIGNvbnRyb2xcbiAgICAgIGNvbXBvbmVudD17XG4gICAgICAgIDxtb3Rpb24uZGl2IHZhcmlhbnRzPXtjb250YWluZXJ9IGluaXRpYWw9XCJoaWRkZW5cIiBhbmltYXRlPVwic2hvd1wiIC8+XG4gICAgICB9XG4gICAgPlxuICAgICAge2l0ZW1zLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICA8VGVhc2VyIGl0ZW09e2l0ZW19IGtleT17aXRlbS5uYW1lfSAvPlxuICAgICAgKSl9XG4gICAgPC9HcmlkPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGVzdHBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/test2.tsx\n");

/***/ })

})