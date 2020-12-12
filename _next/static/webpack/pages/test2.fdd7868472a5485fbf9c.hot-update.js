webpackHotUpdate_N_E("pages/test2",{

/***/ "./pages/test2.tsx":
/*!*************************!*\
  !*** ./pages/test2.tsx ***!
  \*************************/
/*! exports provided: Teaser, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Teaser\", function() { return Teaser; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _raster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../raster */ \"./raster/index.ts\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n\n\nvar _jsxFileName = \"/Users/andreasfaust/components/react-raster/pages/test2.tsx\",\n    _this = undefined;\n\n\n\n\n\nvar items = [{\n  name: \"George\"\n}, {\n  name: \"Janet\"\n}, {\n  name: \"Emma\"\n}, {\n  name: \"Eve\"\n}, {\n  name: \"Charles\"\n}, {\n  name: \"Tracey\"\n}];\nvar container = {\n  hidden: {\n    opacity: 0\n  },\n  show: {\n    opacity: 1,\n    transition: {\n      staggerChildren: 0.3\n    }\n  }\n};\nvar listItem = {\n  hidden: {\n    opacity: 0\n  },\n  show: {\n    opacity: 1\n  }\n};\nvar Teaser = function Teaser(_ref) {\n  var item = _ref.item;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/\",\n    passHref: true,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_raster__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n      cols: 4,\n      style: \"\\n        background: blue;\\n        height: 400px;\\n      \",\n      alignY: \"center\",\n      alignX: \"center\",\n      component: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].a, {\n        variants: listItem\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 18\n      }, _this),\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n        children: item.name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 3\n  }, _this);\n};\n_c = Teaser;\n\nvar Testpage = function Testpage(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_raster__WEBPACK_IMPORTED_MODULE_3__[\"Grid\"], {\n    tag: \"section\",\n    breakpoints: [0, 500, 768, 1024, 1200, 1400],\n    left: \"1.5vw\",\n    right: \"3vw\",\n    top: \"10vw\",\n    bottom: \"20vw\",\n    gutterX: \"1.5vw\",\n    gutterY: \"1.25vw\",\n    colspan: 12,\n    control: true,\n    component: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].div, {\n      variants: container,\n      initial: \"hidden\",\n      animate: \"show\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 9\n    }, _this),\n    children: items.map(function (item) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Teaser, {\n        item: item\n      }, item.name, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 64,\n    columnNumber: 5\n  }, _this);\n};\n\n_c2 = Testpage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Testpage);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Teaser\");\n$RefreshReg$(_c2, \"Testpage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVzdDIudHN4P2ZjOGQiXSwibmFtZXMiOlsiaXRlbXMiLCJuYW1lIiwiY29udGFpbmVyIiwiaGlkZGVuIiwib3BhY2l0eSIsInNob3ciLCJ0cmFuc2l0aW9uIiwic3RhZ2dlckNoaWxkcmVuIiwibGlzdEl0ZW0iLCJUZWFzZXIiLCJpdGVtIiwiVGVzdHBhZ2UiLCJwcm9wcyIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFJQSxJQUFNQSxLQUFLLEdBQUcsQ0FDWjtBQUNFQyxNQUFJLEVBQUU7QUFEUixDQURZLEVBSVo7QUFDRUEsTUFBSSxFQUFFO0FBRFIsQ0FKWSxFQU9aO0FBQ0VBLE1BQUksRUFBRTtBQURSLENBUFksRUFVWjtBQUNFQSxNQUFJLEVBQUU7QUFEUixDQVZZLEVBYVo7QUFDRUEsTUFBSSxFQUFFO0FBRFIsQ0FiWSxFQWdCWjtBQUNFQSxNQUFJLEVBQUU7QUFEUixDQWhCWSxDQUFkO0FBcUJBLElBQU1DLFNBQVMsR0FBRztBQUNoQkMsUUFBTSxFQUFFO0FBQUVDLFdBQU8sRUFBRTtBQUFYLEdBRFE7QUFFaEJDLE1BQUksRUFBRTtBQUNKRCxXQUFPLEVBQUUsQ0FETDtBQUVKRSxjQUFVLEVBQUU7QUFDVkMscUJBQWUsRUFBRTtBQURQO0FBRlI7QUFGVSxDQUFsQjtBQVVBLElBQU1DLFFBQVEsR0FBRztBQUNmTCxRQUFNLEVBQUU7QUFBRUMsV0FBTyxFQUFFO0FBQVgsR0FETztBQUVmQyxNQUFJLEVBQUU7QUFBRUQsV0FBTyxFQUFFO0FBQVg7QUFGUyxDQUFqQjtBQUtPLElBQU1LLE1BQU0sR0FBRyxTQUFUQSxNQUFTO0FBQUEsTUFBR0MsSUFBSCxRQUFHQSxJQUFIO0FBQUEsc0JBQ3BCLHFFQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBZSxZQUFRLE1BQXZCO0FBQUEsMkJBQ0UscUVBQUMsMkNBQUQ7QUFDRSxVQUFJLEVBQUUsQ0FEUjtBQUVFLFdBQUssK0RBRlA7QUFNRSxZQUFNLEVBQUMsUUFOVDtBQU9FLFlBQU0sRUFBQyxRQVBUO0FBUUUsZUFBUyxlQUFFLHFFQUFDLG9EQUFELENBQVEsQ0FBUjtBQUFVLGdCQUFRLEVBQUVGO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSYjtBQUFBLDZCQVVFO0FBQUEsa0JBQUtFLElBQUksQ0FBQ1Q7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEb0I7QUFBQSxDQUFmO0tBQU1RLE07O0FBaUJiLElBQU1FLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBVztBQUMxQixzQkFDRSxxRUFBQyw0Q0FBRDtBQUNFLE9BQUcsRUFBQyxTQUROO0FBRUUsZUFBVyxFQUFFLENBQUMsQ0FBRCxFQUFJLEdBQUosRUFBUyxHQUFULEVBQWMsSUFBZCxFQUFvQixJQUFwQixFQUEwQixJQUExQixDQUZmO0FBR0UsUUFBSSxFQUFFLE9BSFI7QUFJRSxTQUFLLEVBQUUsS0FKVDtBQUtFLE9BQUcsRUFBRSxNQUxQO0FBTUUsVUFBTSxFQUFFLE1BTlY7QUFPRSxXQUFPLEVBQUUsT0FQWDtBQVFFLFdBQU8sRUFBRSxRQVJYO0FBU0UsV0FBTyxFQUFFLEVBVFg7QUFVRSxXQUFPLE1BVlQ7QUFXRSxhQUFTLGVBQ1AscUVBQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQVksY0FBUSxFQUFFVixTQUF0QjtBQUFpQyxhQUFPLEVBQUMsUUFBekM7QUFBa0QsYUFBTyxFQUFDO0FBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFaSjtBQUFBLGNBZUdGLEtBQUssQ0FBQ2EsR0FBTixDQUFVLFVBQUNILElBQUQ7QUFBQSwwQkFDVCxxRUFBQyxNQUFEO0FBQVEsWUFBSSxFQUFFQTtBQUFkLFNBQXlCQSxJQUFJLENBQUNULElBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEUztBQUFBLEtBQVY7QUFmSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFxQkQsQ0F0QkQ7O01BQU1VLFE7QUF3QlNBLHVFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvdGVzdDIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgR3JpZCwgQm94IH0gZnJvbSBcIi4uL3Jhc3RlclwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuaW50ZXJmYWNlIFByb3BzIHt9XG5cbmNvbnN0IGl0ZW1zID0gW1xuICB7XG4gICAgbmFtZTogXCJHZW9yZ2VcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiSmFuZXRcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiRW1tYVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJFdmVcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQ2hhcmxlc1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJUcmFjZXlcIixcbiAgfSxcbl07XG5cbmNvbnN0IGNvbnRhaW5lciA9IHtcbiAgaGlkZGVuOiB7IG9wYWNpdHk6IDAgfSxcbiAgc2hvdzoge1xuICAgIG9wYWNpdHk6IDEsXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgc3RhZ2dlckNoaWxkcmVuOiAwLjMsXG4gICAgfSxcbiAgfSxcbn07XG5cbmNvbnN0IGxpc3RJdGVtID0ge1xuICBoaWRkZW46IHsgb3BhY2l0eTogMCB9LFxuICBzaG93OiB7IG9wYWNpdHk6IDEgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBUZWFzZXIgPSAoeyBpdGVtIH0pID0+IChcbiAgPExpbmsgaHJlZj1cIi9cIiBwYXNzSHJlZj5cbiAgICA8Qm94XG4gICAgICBjb2xzPXs0fVxuICAgICAgc3R5bGU9e2BcbiAgICAgICAgYmFja2dyb3VuZDogYmx1ZTtcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICAgIGB9XG4gICAgICBhbGlnblk9XCJjZW50ZXJcIlxuICAgICAgYWxpZ25YPVwiY2VudGVyXCJcbiAgICAgIGNvbXBvbmVudD17PG1vdGlvbi5hIHZhcmlhbnRzPXtsaXN0SXRlbX0gLz59XG4gICAgPlxuICAgICAgPGgyPntpdGVtLm5hbWV9PC9oMj5cbiAgICA8L0JveD5cbiAgPC9MaW5rPlxuKTtcblxuY29uc3QgVGVzdHBhZ2UgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8R3JpZFxuICAgICAgdGFnPVwic2VjdGlvblwiXG4gICAgICBicmVha3BvaW50cz17WzAsIDUwMCwgNzY4LCAxMDI0LCAxMjAwLCAxNDAwXX1cbiAgICAgIGxlZnQ9e1wiMS41dndcIn1cbiAgICAgIHJpZ2h0PXtcIjN2d1wifVxuICAgICAgdG9wPXtcIjEwdndcIn1cbiAgICAgIGJvdHRvbT17XCIyMHZ3XCJ9XG4gICAgICBndXR0ZXJYPXtcIjEuNXZ3XCJ9XG4gICAgICBndXR0ZXJZPXtcIjEuMjV2d1wifVxuICAgICAgY29sc3Bhbj17MTJ9XG4gICAgICBjb250cm9sXG4gICAgICBjb21wb25lbnQ9e1xuICAgICAgICA8bW90aW9uLmRpdiB2YXJpYW50cz17Y29udGFpbmVyfSBpbml0aWFsPVwiaGlkZGVuXCIgYW5pbWF0ZT1cInNob3dcIiAvPlxuICAgICAgfVxuICAgID5cbiAgICAgIHtpdGVtcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgPFRlYXNlciBpdGVtPXtpdGVtfSBrZXk9e2l0ZW0ubmFtZX0gLz5cbiAgICAgICkpfVxuICAgIDwvR3JpZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRlc3RwYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/test2.tsx\n");

/***/ })

})