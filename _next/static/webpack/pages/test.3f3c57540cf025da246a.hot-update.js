webpackHotUpdate_N_E("pages/test",{

/***/ "./pages/test.tsx":
/*!************************!*\
  !*** ./pages/test.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _raster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../raster */ \"./raster/index.ts\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n\n\n\nvar _jsxFileName = \"/Users/andreasfaust/components/react-raster/pages/test.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar ImageBox = function ImageBox() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_raster__WEBPACK_IMPORTED_MODULE_3__[\"Box\"] // top={0.5}\n  // left={0.5}\n  , {\n    cols: 2,\n    alignY: \"center\",\n    onClick: function onClick() {\n      console.log(\"HALLO!\");\n    },\n    style: \"\\n      background: pink;\\n      height: 300px;\\n\\n      img {\\n        display: block;\\n        width: 100%;\\n      }\\n    \"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = ImageBox;\n\nvar Testpage = function Testpage(props) {\n  _s();\n\n  var boxRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef();\n  var gridRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef();\n  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {// console.log(boxRef.current);\n    // console.log(gridRef.current);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].div, {\n      initial: {\n        y: 50,\n        opacity: 0\n      },\n      variants: variants,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_raster__WEBPACK_IMPORTED_MODULE_3__[\"Grid\"], {\n        tag: \"section\",\n        breakpoints: [0, 500, 768, 1024, 1200, 1400],\n        left: \"1.5vw\",\n        right: \"3vw\",\n        top: \"10vw\",\n        bottom: \"20vw\",\n        gutterX: [\"0px\", \"0px\", \"1.5vw\"] // gutterY={\"3vw\"}\n        ,\n        colspan: 12,\n        alignX: [\"center\", \"right\", \"left\"] // alignY={\"center\"}\n        ,\n        control: true // component={\n        // }\n        // styleOuter={`width: 80%;`}\n        ,\n        style: \"\\n        background: blue;\\n        &.bp-768 {\\n          // background: black;\\n        }\\n      \" // cssMode=\"flex\"\n        ,\n        ref: gridRef,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_raster__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n          cols: [1, 2],\n          bottom: 1,\n          style: \"background: red;\",\n          children: \"Hallo\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_raster__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n          cols: [2, 3],\n          bottom: 1,\n          style: \"background: red;\",\n          children: \"Hallo\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          href: \"/\",\n          passHref: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_raster__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n            style: \"background: green;\",\n            component: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].a, {\n              initial: {\n                y: 50,\n                opacity: 0\n              },\n              animate: {\n                y: 0,\n                opacity: 1\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 88,\n              columnNumber: 17\n            }, _this),\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n              children: \"DEPP!\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 94,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 85,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_raster__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n          cols: [4, 5],\n          bottom: 1,\n          style: \"background: red;\",\n          children: \"Hallo\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Testpage, \"+hKORm3PB9qcbpDrqbrvDvno3RM=\");\n\n_c2 = Testpage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Testpage);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ImageBox\");\n$RefreshReg$(_c2, \"Testpage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVzdC50c3g/NTRlMSJdLCJuYW1lcyI6WyJJbWFnZUJveCIsImNvbnNvbGUiLCJsb2ciLCJUZXN0cGFnZSIsInByb3BzIiwiYm94UmVmIiwiUmVhY3QiLCJ1c2VSZWYiLCJncmlkUmVmIiwidXNlRWZmZWN0IiwieSIsIm9wYWNpdHkiLCJ2YXJpYW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXO0FBQUEsc0JBQ2YscUVBQUMsMkNBQUQsQ0FDRTtBQUNBO0FBRkY7QUFHRSxRQUFJLEVBQUUsQ0FIUjtBQUlFLFVBQU0sRUFBRSxRQUpWO0FBS0UsV0FBTyxFQUFFLG1CQUFNO0FBQ2JDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVo7QUFDRCxLQVBIO0FBUUUsU0FBSztBQVJQO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEZTtBQUFBLENBQWpCOztLQUFNRixROztBQXlCTixJQUFNRyxRQUF5QixHQUFHLFNBQTVCQSxRQUE0QixDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDM0MsTUFBTUMsTUFBTSxHQUFHQyw0Q0FBSyxDQUFDQyxNQUFOLEVBQWY7QUFDQSxNQUFNQyxPQUFPLEdBQUdGLDRDQUFLLENBQUNDLE1BQU4sRUFBaEI7QUFFQUQsOENBQUssQ0FBQ0csU0FBTixDQUFnQixZQUFNLENBQ3BCO0FBQ0E7QUFDRCxHQUhELEVBR0csRUFISDtBQUtBLHNCQUNFO0FBQUEsMkJBSUUscUVBQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQ0UsYUFBTyxFQUFFO0FBQ1BDLFNBQUMsRUFBRSxFQURJO0FBRVBDLGVBQU8sRUFBRTtBQUZGLE9BRFg7QUFLRSxjQUFRLEVBQUVDLFFBTFo7QUFBQSw2QkFPRSxxRUFBQyw0Q0FBRDtBQUNFLFdBQUcsRUFBQyxTQUROO0FBRUUsbUJBQVcsRUFBRSxDQUFDLENBQUQsRUFBSSxHQUFKLEVBQVMsR0FBVCxFQUFjLElBQWQsRUFBb0IsSUFBcEIsRUFBMEIsSUFBMUIsQ0FGZjtBQUdFLFlBQUksRUFBRSxPQUhSO0FBSUUsYUFBSyxFQUFFLEtBSlQ7QUFLRSxXQUFHLEVBQUUsTUFMUDtBQU1FLGNBQU0sRUFBRSxNQU5WO0FBT0UsZUFBTyxFQUFFLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxPQUFmLENBUFgsQ0FRRTtBQVJGO0FBU0UsZUFBTyxFQUFFLEVBVFg7QUFVRSxjQUFNLEVBQUUsQ0FBQyxRQUFELEVBQVcsT0FBWCxFQUFvQixNQUFwQixDQVZWLENBV0U7QUFYRjtBQVlFLGVBQU8sTUFaVCxDQWFFO0FBQ0E7QUFDQTtBQWZGO0FBZ0JFLGFBQUssdUdBaEJQLENBc0JFO0FBdEJGO0FBdUJFLFdBQUcsRUFBRUosT0F2QlA7QUFBQSxnQ0F5QkUscUVBQUMsMkNBQUQ7QUFBSyxjQUFJLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFYO0FBQW1CLGdCQUFNLEVBQUUsQ0FBM0I7QUFBOEIsZUFBSyxvQkFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBekJGLGVBNEJFLHFFQUFDLDJDQUFEO0FBQUssY0FBSSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBWDtBQUFtQixnQkFBTSxFQUFFLENBQTNCO0FBQThCLGVBQUssb0JBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTVCRixlQStCRSxxRUFBQyxnREFBRDtBQUFNLGNBQUksRUFBQyxHQUFYO0FBQWUsa0JBQVEsTUFBdkI7QUFBQSxpQ0FDRSxxRUFBQywyQ0FBRDtBQUNFLGlCQUFLLHNCQURQO0FBRUUscUJBQVMsZUFDUCxxRUFBQyxvREFBRCxDQUFRLENBQVI7QUFDRSxxQkFBTyxFQUFFO0FBQUVFLGlCQUFDLEVBQUUsRUFBTDtBQUFTQyx1QkFBTyxFQUFFO0FBQWxCLGVBRFg7QUFFRSxxQkFBTyxFQUFFO0FBQUVELGlCQUFDLEVBQUUsQ0FBTDtBQUFRQyx1QkFBTyxFQUFFO0FBQWpCO0FBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFISjtBQUFBLG1DQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBL0JGLGVBNENFLHFFQUFDLDJDQUFEO0FBQUssY0FBSSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBWDtBQUFtQixnQkFBTSxFQUFFLENBQTNCO0FBQThCLGVBQUssb0JBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTVDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkYsbUJBREY7QUFxSEQsQ0E5SEQ7O0dBQU1SLFE7O01BQUFBLFE7QUFnSVNBLHVFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvdGVzdC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBHcmlkLCBCb3ggfSBmcm9tIFwiLi4vcmFzdGVyXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5jb25zdCBJbWFnZUJveCA9ICgpID0+IChcbiAgPEJveFxuICAgIC8vIHRvcD17MC41fVxuICAgIC8vIGxlZnQ9ezAuNX1cbiAgICBjb2xzPXsyfVxuICAgIGFsaWduWT17XCJjZW50ZXJcIn1cbiAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIkhBTExPIVwiKTtcbiAgICB9fVxuICAgIHN0eWxlPXtgXG4gICAgICBiYWNrZ3JvdW5kOiBwaW5rO1xuICAgICAgaGVpZ2h0OiAzMDBweDtcblxuICAgICAgaW1nIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIGB9XG4gID5cbiAgICB7LyogPGltZyBzcmM9e2ltYWdlMn0gYWx0PSdTYW1wbGUgSW1hZ2UnIC8+ICovfVxuICA8L0JveD5cbik7XG5cbmludGVyZmFjZSBQcm9wcyB7fVxuXG5jb25zdCBUZXN0cGFnZTogTmV4dFBhZ2U8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IGJveFJlZiA9IFJlYWN0LnVzZVJlZigpO1xuICBjb25zdCBncmlkUmVmID0gUmVhY3QudXNlUmVmKCk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhib3hSZWYuY3VycmVudCk7XG4gICAgLy8gY29uc29sZS5sb2coZ3JpZFJlZi5jdXJyZW50KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHsvKiA8Qm94IGNvbHM9e1sxLCAyXX0gYm90dG9tPXsxfSBzdHlsZT17YGJhY2tncm91bmQ6IHJlZDtgfT5cbiAgICAgICAgSGFsbG9cbiAgICAgIDwvQm94PiAqL31cbiAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgIGluaXRpYWw9e3tcbiAgICAgICAgICB5OiA1MCxcbiAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICB9fVxuICAgICAgICB2YXJpYW50cz17dmFyaWFudHN9XG4gICAgICA+XG4gICAgICAgIDxHcmlkXG4gICAgICAgICAgdGFnPVwic2VjdGlvblwiXG4gICAgICAgICAgYnJlYWtwb2ludHM9e1swLCA1MDAsIDc2OCwgMTAyNCwgMTIwMCwgMTQwMF19XG4gICAgICAgICAgbGVmdD17XCIxLjV2d1wifVxuICAgICAgICAgIHJpZ2h0PXtcIjN2d1wifVxuICAgICAgICAgIHRvcD17XCIxMHZ3XCJ9XG4gICAgICAgICAgYm90dG9tPXtcIjIwdndcIn1cbiAgICAgICAgICBndXR0ZXJYPXtbXCIwcHhcIiwgXCIwcHhcIiwgXCIxLjV2d1wiXX1cbiAgICAgICAgICAvLyBndXR0ZXJZPXtcIjN2d1wifVxuICAgICAgICAgIGNvbHNwYW49ezEyfVxuICAgICAgICAgIGFsaWduWD17W1wiY2VudGVyXCIsIFwicmlnaHRcIiwgXCJsZWZ0XCJdfVxuICAgICAgICAgIC8vIGFsaWduWT17XCJjZW50ZXJcIn1cbiAgICAgICAgICBjb250cm9sXG4gICAgICAgICAgLy8gY29tcG9uZW50PXtcbiAgICAgICAgICAvLyB9XG4gICAgICAgICAgLy8gc3R5bGVPdXRlcj17YHdpZHRoOiA4MCU7YH1cbiAgICAgICAgICBzdHlsZT17YFxuICAgICAgICBiYWNrZ3JvdW5kOiBibHVlO1xuICAgICAgICAmLmJwLTc2OCB7XG4gICAgICAgICAgLy8gYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICAgICAgLy8gY3NzTW9kZT1cImZsZXhcIlxuICAgICAgICAgIHJlZj17Z3JpZFJlZn1cbiAgICAgICAgPlxuICAgICAgICAgIDxCb3ggY29scz17WzEsIDJdfSBib3R0b209ezF9IHN0eWxlPXtgYmFja2dyb3VuZDogcmVkO2B9PlxuICAgICAgICAgICAgSGFsbG9cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8Qm94IGNvbHM9e1syLCAzXX0gYm90dG9tPXsxfSBzdHlsZT17YGJhY2tncm91bmQ6IHJlZDtgfT5cbiAgICAgICAgICAgIEhhbGxvXG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBwYXNzSHJlZj5cbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgc3R5bGU9e2BiYWNrZ3JvdW5kOiBncmVlbjtgfVxuICAgICAgICAgICAgICBjb21wb25lbnQ9e1xuICAgICAgICAgICAgICAgIDxtb3Rpb24uYVxuICAgICAgICAgICAgICAgICAgaW5pdGlhbD17eyB5OiA1MCwgb3BhY2l0eTogMCB9fVxuICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17eyB5OiAwLCBvcGFjaXR5OiAxIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8aDE+REVQUCE8L2gxPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxCb3ggY29scz17WzQsIDVdfSBib3R0b209ezF9IHN0eWxlPXtgYmFja2dyb3VuZDogcmVkO2B9PlxuICAgICAgICAgICAgSGFsbG9cbiAgICAgICAgICA8L0JveD5cblxuICAgICAgICAgIHsvKiA8TGluayBocmVmPVwiL1wiIHBhc3NIcmVmPlxuICAgICAgICA8Qm94XG4gICAgICAgICAgcmVmPXtib3hSZWZ9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiQm94LS0yXCJcbiAgICAgICAgICB0YWc9XCJhXCJcbiAgICAgICAgICBjb2xzPXtbNV19XG4gICAgICAgICAgbGVmdD17WzBdfVxuICAgICAgICAgIGFsaWduWD1cImNlbnRlclwiXG4gICAgICAgICAgc3R5bGU9e2BcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHBpbms7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgIGB9XG4gICAgICAgID5cbiAgICAgICAgICA8Qm94IGNvbHM9ezJ9IHRhZz1cImgyXCIgY2xhc3NOYW1lPVwiQm94LS0zXCI+XG4gICAgICAgICAgICBIYWxsbyFcbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8Qm94IGNvbHM9ezJ9IHRhZz1cImgyXCIgY2xhc3NOYW1lPVwiQm94LS00XCI+XG4gICAgICAgICAgICBIYWxsbyFcbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0xpbms+XG4gICAgICA8Qm94XG4gICAgICAgIHJlZj17Ym94UmVmfVxuICAgICAgICBjbGFzc05hbWU9XCJCb3gtLTFcIlxuICAgICAgICBjb2xzPXtbNF19XG4gICAgICAgIGxlZnQ9e1syXX1cbiAgICAgICAgcmlnaHQ9e1sxXX1cbiAgICAgICAgYWxpZ25ZPVwiY2VudGVyXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiSEFMTE8hXCIpO1xuICAgICAgICB9fVxuICAgICAgICBzdHlsZT17YFxuICAgICAgICAgIGJhY2tncm91bmQ6IHllbGxvdztcbiAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcbiAgICAgICAgICBcbiAgICAgICAgICAuYnAtNzY4ICYmIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgID5cbiAgICAgICAgPEltYWdlQm94IC8+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBjbGFzc05hbWU9XCJCb3gtLTNcIlxuICAgICAgICAgIGNvbHM9e1sxXX1cbiAgICAgICAgICBsZWZ0PXtbMV19XG4gICAgICAgICAgYWxpZ25ZPVwiY2VudGVyXCJcbiAgICAgICAgICBzdHlsZT17YFxuICAgICAgICAgICAgYmFja2dyb3VuZDogZ3JlZW47XG4gICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgIGB9XG4gICAgICAgIC8+XG4gICAgICA8L0JveD4gKi99XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvbW90aW9uLmRpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRlc3RwYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/test.tsx\n");

/***/ })

})