webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _raster__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../raster */ \"./raster/index.ts\");\n/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-select */ \"./node_modules/react-select/dist/react-select.browser.esm.js\");\n/* harmony import */ var _components_github_logo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/github-logo */ \"./components/github-logo.tsx\");\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/andreasfaust/components/react-raster/pages/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar gridProps = {\n  colspan: 12,\n  breakpoints: [0, 500, 768, 1024, 1200, 1400],\n  left: \"3vw\",\n  right: \"3vw\",\n  gutterX: \"1.5vw\",\n  gutterY: \"3vw\",\n  control: true\n};\n\nvar Startpage = function Startpage(props) {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(\"grid\"),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState, 2),\n      mode = _React$useState2[0],\n      setMode = _React$useState2[1];\n\n  function onSelect(_ref) {\n    var value = _ref.value;\n    setMode(value);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"nav\", {\n      className: \"jsx-1882836677\" + \" \" + \"topnav\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_components_github_logo__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(react_select__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        instanceId: \"a\\xF6lfksdlkgh\" // fixes id-bug with NextJs\n        ,\n        className: \"modeSelect\",\n        placeholder: \"CSS Grid Layout\",\n        options: [{\n          label: \"CSS Grid Layout\",\n          value: \"grid\"\n        }, {\n          label: \"Flexbox\",\n          value: \"flex\"\n        }],\n        onChange: onSelect\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"])(_raster__WEBPACK_IMPORTED_MODULE_5__[\"Grid\"], _objectSpread(_objectSpread({\n      tag: \"header\"\n    }, gridProps), {}, {\n      alignY: \"center\",\n      alignX: \"center\",\n      cssMode: mode,\n      key: mode + \"header\",\n      style: \"\\n          background-image: url(\".concat(\"\" + \"/header-bg.jpg\", \");\\n          background-size: cover;\\n          background-position: center bottom;\\n          background-repeat: no-repeat;\\n          height: 66.666vh;\\n        \"),\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 7\n      },\n      __self: _this\n    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_raster__WEBPACK_IMPORTED_MODULE_5__[\"Box\"], {\n      className: \"logo\",\n      cols: [8, 6, 4, 4, 3, 2],\n      tag: \"img\",\n      attrs: {\n        src: \"\" + \"/react-raster-logo.svg\",\n        alt: \"Logo\"\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 9\n    }, _this)), /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"])(_raster__WEBPACK_IMPORTED_MODULE_5__[\"Grid\"], _objectSpread(_objectSpread({\n      tag: \"section\"\n    }, gridProps), {}, {\n      alignX: \"center\",\n      alignY: \"center\",\n      cssMode: mode,\n      key: mode + \"section-1\",\n      bottom: \"5vh\",\n      style: \"\\n          min-height: 33.333vh;\\n        \",\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 7\n      },\n      __self: _this\n    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_raster__WEBPACK_IMPORTED_MODULE_5__[\"Box\"], {\n      tag: \"h1\",\n      cols: [12, 8, 7, 6],\n      style: \"\\n            justify-content: center;\\n          \",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"pre\", {\n        className: \"jsx-1882836677\",\n        children: \"react-raster\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 11\n      }, _this), \" is an advanced grid-system based on styled-components.\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"br\", {\n        className: \"jsx-1882836677\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"span\", {\n        role: \"img\",\n        \"aria-label\": \"kissing cat\",\n        className: \"jsx-1882836677\",\n        children: \"\\uD83D\\uDE3D\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_raster__WEBPACK_IMPORTED_MODULE_5__[\"Box\"], {\n      className: \"hints\",\n      cols: [12],\n      top: 0.5,\n      alignX: \"center\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_raster__WEBPACK_IMPORTED_MODULE_5__[\"Box\"], {\n        className: \"hint\",\n        cols: [12, 12, 5, 4],\n        left: [0, 0, 0, 1],\n        alignX: [\"center\", \"center\", \"right\"],\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"img\", {\n          src: \"\" + \"/scale.svg\",\n          alt: \"Scale icon\",\n          className: \"jsx-1882836677\" + \" \" + \"hintIcon\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"small\", {\n          className: \"jsx-1882836677\",\n          children: \"Scale your Viewport to see the layout changing!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_raster__WEBPACK_IMPORTED_MODULE_5__[\"Box\"], {\n        className: \"hint\",\n        cols: [12, 12, 5, 4],\n        alignX: [\"center\", \"center\", \"left\"],\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"img\", {\n          src: \"\" + \"/esc.svg\",\n          alt: \"Escape icon\",\n          className: \"jsx-1882836677\" + \" \" + \"hintIcon\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 111,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"small\", {\n          className: \"jsx-1882836677\",\n          children: [\"Press \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"pre\", {\n            className: \"jsx-1882836677\",\n            children: \"ESC\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 117,\n            columnNumber: 21\n          }, _this), \" to see the column-grid\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 116,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_raster__WEBPACK_IMPORTED_MODULE_5__[\"Box\"], {\n      className: \"hints\",\n      cols: [12],\n      top: 0.5,\n      alignX: \"center\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 9\n    }, _this)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      id: \"1882836677\",\n      children: \"@font-face{font-family:\\\"Italic\\\";src:url(\\\"\".concat(\"\", \"/alegreya-italic.woff2\\\") format(\\\"woff2\\\");}@font-face{font-family:\\\"Plex\\\";src:url(\\\"\").concat(\"\", \"/plex-mono.woff\\\") format(\\\"woff\\\");}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZWFzZmF1c3QvY29tcG9uZW50cy9yZWFjdC1yYXN0ZXIvcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBIeUIsQUFHZ0MsQUFLRixtQkFFSCxFQUxDLG9FQU1uQixVQUxBIiwiZmlsZSI6Ii9Vc2Vycy9hbmRyZWFzZmF1c3QvY29tcG9uZW50cy9yZWFjdC1yYXN0ZXIvcGFnZXMvaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgR3JpZCwgQm94IH0gZnJvbSBcIi4uL3Jhc3RlclwiO1xuaW1wb3J0IFNlbGVjdCBmcm9tIFwicmVhY3Qtc2VsZWN0XCI7XG5pbXBvcnQgR2l0SHViIGZyb20gXCIuLi9jb21wb25lbnRzL2dpdGh1Yi1sb2dvXCI7XG5cbmNvbnN0IGdyaWRQcm9wcyA9IHtcbiAgY29sc3BhbjogMTIsXG4gIGJyZWFrcG9pbnRzOiBbMCwgNTAwLCA3NjgsIDEwMjQsIDEyMDAsIDE0MDBdLFxuICBsZWZ0OiBcIjN2d1wiLFxuICByaWdodDogXCIzdndcIixcbiAgZ3V0dGVyWDogXCIxLjV2d1wiLFxuICBndXR0ZXJZOiBcIjN2d1wiLFxuICBjb250cm9sOiB0cnVlLFxufTtcblxuaW50ZXJmYWNlIFByb3BzIHt9XG5cbmNvbnN0IFN0YXJ0cGFnZTogTmV4dFBhZ2U8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFttb2RlLCBzZXRNb2RlXSA9IFJlYWN0LnVzZVN0YXRlPFwiZ3JpZFwiIHwgXCJmbGV4XCI+KFwiZ3JpZFwiKTtcbiAgZnVuY3Rpb24gb25TZWxlY3QoeyB2YWx1ZSB9KSB7XG4gICAgc2V0TW9kZSh2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJ0b3BuYXZcIj5cbiAgICAgICAgPEdpdEh1YiAvPlxuICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgaW5zdGFuY2VJZD1cImHDtmxma3NkbGtnaFwiIC8vIGZpeGVzIGlkLWJ1ZyB3aXRoIE5leHRKc1xuICAgICAgICAgIGNsYXNzTmFtZT1cIm1vZGVTZWxlY3RcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ1NTIEdyaWQgTGF5b3V0XCJcbiAgICAgICAgICBvcHRpb25zPXtbXG4gICAgICAgICAgICB7IGxhYmVsOiBcIkNTUyBHcmlkIExheW91dFwiLCB2YWx1ZTogXCJncmlkXCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwiRmxleGJveFwiLCB2YWx1ZTogXCJmbGV4XCIgfSxcbiAgICAgICAgICBdfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvblNlbGVjdH1cbiAgICAgICAgLz5cbiAgICAgIDwvbmF2PlxuICAgICAgPEdyaWRcbiAgICAgICAgdGFnPVwiaGVhZGVyXCJcbiAgICAgICAgey4uLmdyaWRQcm9wc31cbiAgICAgICAgYWxpZ25ZPXtcImNlbnRlclwifVxuICAgICAgICBhbGlnblg9e1wiY2VudGVyXCJ9XG4gICAgICAgIGNzc01vZGU9e21vZGV9XG4gICAgICAgIGtleT17bW9kZSArIFwiaGVhZGVyXCJ9XG4gICAgICAgIHN0eWxlPXtgXG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7XG4gICAgICAgICAgICBwcm9jZXNzLmVudi5wcm9kdWN0aW9uUGF0aCArIFwiL2hlYWRlci1iZy5qcGdcIlxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGJvdHRvbTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgIGhlaWdodDogNjYuNjY2dmg7XG4gICAgICAgIGB9XG4gICAgICA+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBjbGFzc05hbWU9XCJsb2dvXCJcbiAgICAgICAgICBjb2xzPXtbOCwgNiwgNCwgNCwgMywgMl19XG4gICAgICAgICAgdGFnPVwiaW1nXCJcbiAgICAgICAgICBhdHRycz17e1xuICAgICAgICAgICAgc3JjOiBwcm9jZXNzLmVudi5wcm9kdWN0aW9uUGF0aCArIFwiL3JlYWN0LXJhc3Rlci1sb2dvLnN2Z1wiLFxuICAgICAgICAgICAgYWx0OiBcIkxvZ29cIixcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWRcbiAgICAgICAgdGFnPVwic2VjdGlvblwiXG4gICAgICAgIHsuLi5ncmlkUHJvcHN9XG4gICAgICAgIGFsaWduWD17XCJjZW50ZXJcIn1cbiAgICAgICAgYWxpZ25ZPXtcImNlbnRlclwifVxuICAgICAgICBjc3NNb2RlPXttb2RlfVxuICAgICAgICBrZXk9e21vZGUgKyBcInNlY3Rpb24tMVwifVxuICAgICAgICBib3R0b209XCI1dmhcIlxuICAgICAgICBzdHlsZT17YFxuICAgICAgICAgIG1pbi1oZWlnaHQ6IDMzLjMzM3ZoO1xuICAgICAgICBgfVxuICAgICAgPlxuICAgICAgICA8Qm94XG4gICAgICAgICAgdGFnPVwiaDFcIlxuICAgICAgICAgIGNvbHM9e1sxMiwgOCwgNywgNl19XG4gICAgICAgICAgc3R5bGU9e2BcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGB9XG4gICAgICAgID5cbiAgICAgICAgICA8cHJlPnJlYWN0LXJhc3RlcjwvcHJlPiBpcyBhbiBhZHZhbmNlZCBncmlkLXN5c3RlbSBiYXNlZCBvblxuICAgICAgICAgIHN0eWxlZC1jb21wb25lbnRzLlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxzcGFuIHJvbGU9XCJpbWdcIiBhcmlhLWxhYmVsPVwia2lzc2luZyBjYXRcIj5cbiAgICAgICAgICAgIPCfmL1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8Qm94IGNsYXNzTmFtZT1cImhpbnRzXCIgY29scz17WzEyXX0gdG9wPXswLjV9IGFsaWduWD1cImNlbnRlclwiPlxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpbnRcIlxuICAgICAgICAgICAgY29scz17WzEyLCAxMiwgNSwgNF19XG4gICAgICAgICAgICBsZWZ0PXtbMCwgMCwgMCwgMV19XG4gICAgICAgICAgICBhbGlnblg9e1tcImNlbnRlclwiLCBcImNlbnRlclwiLCBcInJpZ2h0XCJdfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGludEljb25cIlxuICAgICAgICAgICAgICBzcmM9e3Byb2Nlc3MuZW52LnByb2R1Y3Rpb25QYXRoICsgXCIvc2NhbGUuc3ZnXCJ9XG4gICAgICAgICAgICAgIGFsdD1cIlNjYWxlIGljb25cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxzbWFsbD5TY2FsZSB5b3VyIFZpZXdwb3J0IHRvIHNlZSB0aGUgbGF5b3V0IGNoYW5naW5nITwvc21hbGw+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGludFwiXG4gICAgICAgICAgICBjb2xzPXtbMTIsIDEyLCA1LCA0XX1cbiAgICAgICAgICAgIGFsaWduWD17W1wiY2VudGVyXCIsIFwiY2VudGVyXCIsIFwibGVmdFwiXX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpbnRJY29uXCJcbiAgICAgICAgICAgICAgc3JjPXtwcm9jZXNzLmVudi5wcm9kdWN0aW9uUGF0aCArIFwiL2VzYy5zdmdcIn1cbiAgICAgICAgICAgICAgYWx0PVwiRXNjYXBlIGljb25cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxzbWFsbD5cbiAgICAgICAgICAgICAgUHJlc3MgPHByZT5FU0M8L3ByZT4gdG8gc2VlIHRoZSBjb2x1bW4tZ3JpZFxuICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPVwiaGludHNcIiBjb2xzPXtbMTJdfSB0b3A9ezAuNX0gYWxpZ25YPVwiY2VudGVyXCI+PC9Cb3g+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJJdGFsaWNcIjtcbiAgICAgICAgICBzcmM6IHVybChcIiR7cHJvY2Vzcy5lbnYucHJvZHVjdGlvblBhdGh9L2FsZWdyZXlhLWl0YWxpYy53b2ZmMlwiKVxuICAgICAgICAgICAgZm9ybWF0KFwid29mZjJcIik7XG4gICAgICAgIH1cbiAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiUGxleFwiO1xuICAgICAgICAgIHNyYzogdXJsKFwiJHtwcm9jZXNzLmVudi5wcm9kdWN0aW9uUGF0aH0vcGxleC1tb25vLndvZmZcIilcbiAgICAgICAgICAgIGZvcm1hdChcIndvZmZcIik7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXJ0cGFnZTtcbiJdfQ== */\\n/*@ sourceURL=/Users/andreasfaust/components/react-raster/pages/index.tsx */\")\n    }, void 0, false, void 0, _this)]\n  }, void 0, true);\n};\n\n_s(Startpage, \"Eda44pYGXqiM56mEZveGixEIRfE=\");\n\n_c = Startpage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Startpage);\n\nvar _c;\n\n$RefreshReg$(_c, \"Startpage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiZ3JpZFByb3BzIiwiY29sc3BhbiIsImJyZWFrcG9pbnRzIiwibGVmdCIsInJpZ2h0IiwiZ3V0dGVyWCIsImd1dHRlclkiLCJjb250cm9sIiwiU3RhcnRwYWdlIiwicHJvcHMiLCJSZWFjdCIsInVzZVN0YXRlIiwibW9kZSIsInNldE1vZGUiLCJvblNlbGVjdCIsInZhbHVlIiwibGFiZWwiLCJwcm9jZXNzIiwic3JjIiwiYWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUc7QUFDaEJDLFNBQU8sRUFBRSxFQURPO0FBRWhCQyxhQUFXLEVBQUUsQ0FBQyxDQUFELEVBQUksR0FBSixFQUFTLEdBQVQsRUFBYyxJQUFkLEVBQW9CLElBQXBCLEVBQTBCLElBQTFCLENBRkc7QUFHaEJDLE1BQUksRUFBRSxLQUhVO0FBSWhCQyxPQUFLLEVBQUUsS0FKUztBQUtoQkMsU0FBTyxFQUFFLE9BTE87QUFNaEJDLFNBQU8sRUFBRSxLQU5PO0FBT2hCQyxTQUFPLEVBQUU7QUFQTyxDQUFsQjs7QUFZQSxJQUFNQyxTQUEwQixHQUFHLFNBQTdCQSxTQUE2QixDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSx3QkFDcEJDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZ0MsTUFBaEMsQ0FEb0I7QUFBQTtBQUFBLE1BQ3JDQyxJQURxQztBQUFBLE1BQy9CQyxPQUQrQjs7QUFFNUMsV0FBU0MsUUFBVCxPQUE2QjtBQUFBLFFBQVRDLEtBQVMsUUFBVEEsS0FBUztBQUMzQkYsV0FBTyxDQUFDRSxLQUFELENBQVA7QUFDRDs7QUFDRCxzQkFDRTtBQUFBLDRCQUNFO0FBQUEsMENBQWUsUUFBZjtBQUFBLDhCQUNFLHFFQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLHFFQUFDLG9EQUFE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QUMsMkNBQUQ7QUFDRSxpQkFBUyxFQUFDLE1BRFo7QUFFRSxZQUFJLEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLENBQVQsRUFBWSxDQUFaLENBRlI7QUFHRSxjQUFNLEVBQUUsQ0FBQyxRQUFELEVBQVcsUUFBWCxFQUFxQixNQUFyQixDQUhWO0FBQUEsZ0NBS0U7QUFFRSxhQUFHLEVBQUVBLEVBQUEsR0FBNkIsVUFGcEM7QUFHRSxhQUFHLEVBQUMsYUFITjtBQUFBLDhDQUNZO0FBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRixlQVVFO0FBQUE7QUFBQSw0Q0FDUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUExQkYsZUF1REUscUVBQUMsMkNBQUQ7QUFBSyxlQUFTLEVBQUMsT0FBZjtBQUF1QixVQUFJLEVBQUUsQ0FBQyxFQUFELENBQTdCO0FBQW1DLFNBQUcsRUFBRSxHQUF4QztBQUE2QyxZQUFNLEVBQUM7QUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXZERixDQXpDRjtBQUFBO0FBQUEsc0VBcUdrQkEsRUFyR2xCLG9HQTBHa0JBLEVBMUdsQjtBQUFBO0FBQUEsa0JBREY7QUFpSEQsQ0F0SEQ7O0dBQU1ULFM7O0tBQUFBLFM7QUF3SFNBLHdFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgR3JpZCwgQm94IH0gZnJvbSBcIi4uL3Jhc3RlclwiO1xuaW1wb3J0IFNlbGVjdCBmcm9tIFwicmVhY3Qtc2VsZWN0XCI7XG5pbXBvcnQgR2l0SHViIGZyb20gXCIuLi9jb21wb25lbnRzL2dpdGh1Yi1sb2dvXCI7XG5cbmNvbnN0IGdyaWRQcm9wcyA9IHtcbiAgY29sc3BhbjogMTIsXG4gIGJyZWFrcG9pbnRzOiBbMCwgNTAwLCA3NjgsIDEwMjQsIDEyMDAsIDE0MDBdLFxuICBsZWZ0OiBcIjN2d1wiLFxuICByaWdodDogXCIzdndcIixcbiAgZ3V0dGVyWDogXCIxLjV2d1wiLFxuICBndXR0ZXJZOiBcIjN2d1wiLFxuICBjb250cm9sOiB0cnVlLFxufTtcblxuaW50ZXJmYWNlIFByb3BzIHt9XG5cbmNvbnN0IFN0YXJ0cGFnZTogTmV4dFBhZ2U8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFttb2RlLCBzZXRNb2RlXSA9IFJlYWN0LnVzZVN0YXRlPFwiZ3JpZFwiIHwgXCJmbGV4XCI+KFwiZ3JpZFwiKTtcbiAgZnVuY3Rpb24gb25TZWxlY3QoeyB2YWx1ZSB9KSB7XG4gICAgc2V0TW9kZSh2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJ0b3BuYXZcIj5cbiAgICAgICAgPEdpdEh1YiAvPlxuICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgaW5zdGFuY2VJZD1cImHDtmxma3NkbGtnaFwiIC8vIGZpeGVzIGlkLWJ1ZyB3aXRoIE5leHRKc1xuICAgICAgICAgIGNsYXNzTmFtZT1cIm1vZGVTZWxlY3RcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ1NTIEdyaWQgTGF5b3V0XCJcbiAgICAgICAgICBvcHRpb25zPXtbXG4gICAgICAgICAgICB7IGxhYmVsOiBcIkNTUyBHcmlkIExheW91dFwiLCB2YWx1ZTogXCJncmlkXCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwiRmxleGJveFwiLCB2YWx1ZTogXCJmbGV4XCIgfSxcbiAgICAgICAgICBdfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvblNlbGVjdH1cbiAgICAgICAgLz5cbiAgICAgIDwvbmF2PlxuICAgICAgPEdyaWRcbiAgICAgICAgdGFnPVwiaGVhZGVyXCJcbiAgICAgICAgey4uLmdyaWRQcm9wc31cbiAgICAgICAgYWxpZ25ZPXtcImNlbnRlclwifVxuICAgICAgICBhbGlnblg9e1wiY2VudGVyXCJ9XG4gICAgICAgIGNzc01vZGU9e21vZGV9XG4gICAgICAgIGtleT17bW9kZSArIFwiaGVhZGVyXCJ9XG4gICAgICAgIHN0eWxlPXtgXG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7XG4gICAgICAgICAgICBwcm9jZXNzLmVudi5wcm9kdWN0aW9uUGF0aCArIFwiL2hlYWRlci1iZy5qcGdcIlxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGJvdHRvbTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgIGhlaWdodDogNjYuNjY2dmg7XG4gICAgICAgIGB9XG4gICAgICA+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBjbGFzc05hbWU9XCJsb2dvXCJcbiAgICAgICAgICBjb2xzPXtbOCwgNiwgNCwgNCwgMywgMl19XG4gICAgICAgICAgdGFnPVwiaW1nXCJcbiAgICAgICAgICBhdHRycz17e1xuICAgICAgICAgICAgc3JjOiBwcm9jZXNzLmVudi5wcm9kdWN0aW9uUGF0aCArIFwiL3JlYWN0LXJhc3Rlci1sb2dvLnN2Z1wiLFxuICAgICAgICAgICAgYWx0OiBcIkxvZ29cIixcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWRcbiAgICAgICAgdGFnPVwic2VjdGlvblwiXG4gICAgICAgIHsuLi5ncmlkUHJvcHN9XG4gICAgICAgIGFsaWduWD17XCJjZW50ZXJcIn1cbiAgICAgICAgYWxpZ25ZPXtcImNlbnRlclwifVxuICAgICAgICBjc3NNb2RlPXttb2RlfVxuICAgICAgICBrZXk9e21vZGUgKyBcInNlY3Rpb24tMVwifVxuICAgICAgICBib3R0b209XCI1dmhcIlxuICAgICAgICBzdHlsZT17YFxuICAgICAgICAgIG1pbi1oZWlnaHQ6IDMzLjMzM3ZoO1xuICAgICAgICBgfVxuICAgICAgPlxuICAgICAgICA8Qm94XG4gICAgICAgICAgdGFnPVwiaDFcIlxuICAgICAgICAgIGNvbHM9e1sxMiwgOCwgNywgNl19XG4gICAgICAgICAgc3R5bGU9e2BcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGB9XG4gICAgICAgID5cbiAgICAgICAgICA8cHJlPnJlYWN0LXJhc3RlcjwvcHJlPiBpcyBhbiBhZHZhbmNlZCBncmlkLXN5c3RlbSBiYXNlZCBvblxuICAgICAgICAgIHN0eWxlZC1jb21wb25lbnRzLlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxzcGFuIHJvbGU9XCJpbWdcIiBhcmlhLWxhYmVsPVwia2lzc2luZyBjYXRcIj5cbiAgICAgICAgICAgIPCfmL1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8Qm94IGNsYXNzTmFtZT1cImhpbnRzXCIgY29scz17WzEyXX0gdG9wPXswLjV9IGFsaWduWD1cImNlbnRlclwiPlxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpbnRcIlxuICAgICAgICAgICAgY29scz17WzEyLCAxMiwgNSwgNF19XG4gICAgICAgICAgICBsZWZ0PXtbMCwgMCwgMCwgMV19XG4gICAgICAgICAgICBhbGlnblg9e1tcImNlbnRlclwiLCBcImNlbnRlclwiLCBcInJpZ2h0XCJdfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGludEljb25cIlxuICAgICAgICAgICAgICBzcmM9e3Byb2Nlc3MuZW52LnByb2R1Y3Rpb25QYXRoICsgXCIvc2NhbGUuc3ZnXCJ9XG4gICAgICAgICAgICAgIGFsdD1cIlNjYWxlIGljb25cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxzbWFsbD5TY2FsZSB5b3VyIFZpZXdwb3J0IHRvIHNlZSB0aGUgbGF5b3V0IGNoYW5naW5nITwvc21hbGw+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGludFwiXG4gICAgICAgICAgICBjb2xzPXtbMTIsIDEyLCA1LCA0XX1cbiAgICAgICAgICAgIGFsaWduWD17W1wiY2VudGVyXCIsIFwiY2VudGVyXCIsIFwibGVmdFwiXX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpbnRJY29uXCJcbiAgICAgICAgICAgICAgc3JjPXtwcm9jZXNzLmVudi5wcm9kdWN0aW9uUGF0aCArIFwiL2VzYy5zdmdcIn1cbiAgICAgICAgICAgICAgYWx0PVwiRXNjYXBlIGljb25cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxzbWFsbD5cbiAgICAgICAgICAgICAgUHJlc3MgPHByZT5FU0M8L3ByZT4gdG8gc2VlIHRoZSBjb2x1bW4tZ3JpZFxuICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPVwiaGludHNcIiBjb2xzPXtbMTJdfSB0b3A9ezAuNX0gYWxpZ25YPVwiY2VudGVyXCI+PC9Cb3g+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJJdGFsaWNcIjtcbiAgICAgICAgICBzcmM6IHVybChcIiR7cHJvY2Vzcy5lbnYucHJvZHVjdGlvblBhdGh9L2FsZWdyZXlhLWl0YWxpYy53b2ZmMlwiKVxuICAgICAgICAgICAgZm9ybWF0KFwid29mZjJcIik7XG4gICAgICAgIH1cbiAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiUGxleFwiO1xuICAgICAgICAgIHNyYzogdXJsKFwiJHtwcm9jZXNzLmVudi5wcm9kdWN0aW9uUGF0aH0vcGxleC1tb25vLndvZmZcIilcbiAgICAgICAgICAgIGZvcm1hdChcIndvZmZcIik7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXJ0cGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})