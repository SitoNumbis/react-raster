webpackHotUpdate_N_E("pages/index",{

/***/ "./src/Box/StyledBox.tsx":
/*!*******************************!*\
  !*** ./src/Box/StyledBox.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _utils_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/container */ \"./src/utils/container.tsx\");\n\n\n\n\nvar _jsxFileName = \"/Users/andreasfaust/web/react-raster/src/Box/StyledBox.tsx\",\n    _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _templateObject4() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"\\n        width: \", \"%;\\n        height: \", \";\\n        \\n        padding-left: calc(\", \" / 2);\\n        padding-right: calc(\", \" / 2);\\n        padding-top: calc(\", \" / 2);\\n        padding-bottom: calc(\", \" / 2);\\n\\n        margin-left: \", \";\\n        margin-right: \", \";\\n        margin-top: \", \";\\n        margin-bottom: \", \";\\n\\n        order: \", \";\\n      \"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"\\n        \", \"\\n        position: relative;\\n        grid-column: auto / span \", \";\\n        left: \", \";\\n        margin-left: \", \";\\n        margin-right: \", \";\\n        margin-top: \", \";\\n        margin-bottom: \", \";\\n        align-content: \", \";\\n        align-items: \", \";\\n        padding: \", \";\\n        order: \", \";\\n        height: \", \";\\n        \", \"\\n      \"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"\\n        \", \"\\n        \", \"\\n        \", \"\\n      \"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"\\n      grid-template-columns: repeat(\", \", 1fr);\\n      grid-auto-columns: \", \"fr;\\n      grid-auto-rows: min-content;\\n      grid-column-gap: \", \";\\n      grid-row-gap: \", \";\\n    \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar GridLayout = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_utils_container__WEBPACK_IMPORTED_MODULE_5__[\"default\"]).withConfig({\n  displayName: \"StyledBox__GridLayout\",\n  componentId: \"sc-126t470-0\"\n})([\"box-sizing:border-box;\", \";\", \" \", \" \", \" \", \"\"], function (props) {\n  return props.hasChildBoxes && \"display: grid;\";\n}, function (props) {\n  return props.hasChildBoxes && props.media.map(function (media, index) {\n    return media(_templateObject(), function (props) {\n      return props.colspan[index];\n    }, function (props) {\n      return props.colspan[index];\n    }, props.gutterX[index], props.gutterY[index]);\n  });\n}, function (props) {\n  return !props.hasChildBoxes && props.media.map(function (media, index) {\n    if (props.alignX[index] === \"flex-start\" && props.alignY[index] === \"flex-start\") return \"\";\n    return media(_templateObject2(), (props.alignX[index] || props.alignY[index]) && \"display: flex;\", props.alignX[index] && \"justify-content: \".concat(props.alignX[index], \";\"), props.alignY[index] && \"align-items: \".concat(props.alignY[index], \";\"));\n  });\n}, function (props) {\n  return props.media.map(function (media, index) {\n    return media(_templateObject3(), !props.colspan[index] ? \"display: none;\" : \"\", props.cols[index], props.rest[index], props.left[index], props.right[index], props.top[index], props.bottom[index], props.alignY[index], props.alignY[index], props.padding[index], props.order[index], props.height[index], props.customStyles[index]);\n  });\n}, function (props) {\n  return props.tag === \"img\" && props.controlIsVisible && \"\\n    box-shadow: 0 0 999em \".concat(props.controlColor, \" inset;\\n  \");\n});\n_c = GridLayout;\nvar FlexBox = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_utils_container__WEBPACK_IMPORTED_MODULE_5__[\"default\"]).withConfig({\n  displayName: \"StyledBox__FlexBox\",\n  componentId: \"sc-126t470-1\"\n})([\"display:flex;box-sizing:border-box;\", \"\"], function (props) {\n  return props.media.map(function (media, index) {\n    return media(_templateObject4(), props.cols[index], props.height[index], props.gutterX[index], props.gutterX[index], props.gutterY[index], props.gutterY[index], props.left[index], props.right[index], props.top[index], props.bottom[index], props.order[index]);\n  });\n});\n_c2 = FlexBox;\nvar StyledBox = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(_c3 = function _c3(props, ref) {\n  switch (props.cssMode) {\n    case \"flex\":\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(FlexBox, _objectSpread(_objectSpread({}, props), {}, {\n        ref: ref\n      }), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 121,\n        columnNumber: 14\n      }, _this);\n\n    case \"grid\":\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(GridLayout, _objectSpread(_objectSpread({}, props), {}, {\n        ref: ref\n      }), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 14\n      }, _this);\n  }\n});\n_c4 = StyledBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StyledBox);\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"GridLayout\");\n$RefreshReg$(_c2, \"FlexBox\");\n$RefreshReg$(_c3, \"StyledBox$React.forwardRef\");\n$RefreshReg$(_c4, \"StyledBox\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0JveC9TdHlsZWRCb3gudHN4PzZjZDkiXSwibmFtZXMiOlsiR3JpZExheW91dCIsInN0eWxlZCIsIkNvbnRhaW5lciIsInByb3BzIiwiaGFzQ2hpbGRCb3hlcyIsIm1lZGlhIiwibWFwIiwiaW5kZXgiLCJjb2xzcGFuIiwiZ3V0dGVyWCIsImd1dHRlclkiLCJhbGlnblgiLCJhbGlnblkiLCJjb2xzIiwicmVzdCIsImxlZnQiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsInBhZGRpbmciLCJvcmRlciIsImhlaWdodCIsImN1c3RvbVN0eWxlcyIsInRhZyIsImNvbnRyb2xJc1Zpc2libGUiLCJjb250cm9sQ29sb3IiLCJGbGV4Qm94IiwiU3R5bGVkQm94IiwiUmVhY3QiLCJmb3J3YXJkUmVmIiwicmVmIiwiY3NzTW9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBK0JBLElBQU1BLFVBQVUsR0FBR0MsaUVBQU0sQ0FBQ0Msd0RBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSx1REFFWixVQUFDQyxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxhQUFOLElBQXVCLGdCQUFsQztBQUFBLENBRlksRUFJWixVQUFDRCxLQUFEO0FBQUEsU0FDQUEsS0FBSyxDQUFDQyxhQUFOLElBQ0FELEtBQUssQ0FBQ0UsS0FBTixDQUFZQyxHQUFaLENBQWdCLFVBQUNELEtBQUQsRUFBUUUsS0FBUixFQUFrQjtBQUNoQyxXQUFPRixLQUFQLG9CQUNnQyxVQUFDRixLQUFEO0FBQUEsYUFBV0EsS0FBSyxDQUFDSyxPQUFOLENBQWNELEtBQWQsQ0FBWDtBQUFBLEtBRGhDLEVBRXFCLFVBQUNKLEtBQUQ7QUFBQSxhQUFXQSxLQUFLLENBQUNLLE9BQU4sQ0FBY0QsS0FBZCxDQUFYO0FBQUEsS0FGckIsRUFJbUJKLEtBQUssQ0FBQ00sT0FB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TixDQUFjSCxLQUFkLENBUHpCLEVBU2lCSixLQUFLLENBQUNZLElBQU4sQ0FBV1IsS0FBWCxDQVRqQixFQVVrQkosS0FBSyxDQUFDYSxLQUFOLENBQVlULEtBQVosQ0FWbEIsRUFXZ0JKLEtBQUssQ0FBQ2MsR0FBTixDQUFVVixLQUFWLENBWGhCLEVBWW1CSixLQUFLLENBQUNlLE1BQU4sQ0FBYVgsS0FBYixDQVpuQixFQWNXSixLQUFLLENBQUNpQixLQUFOLENBQVliLEtBQVosQ0FkWDtBQWdCRCxHQWpCRCxDQURBO0FBQUEsQ0FKUyxDQUFiO01BQU1tQixPO0FBeUJOLElBQU1DLFNBQVMsZ0JBQUdDLDRDQUFLLENBQUNDLFVBQU4sT0FBcUMsYUFBQzFCLEtBQUQsRUFBUTJCLEdBQVIsRUFBZ0I7QUFDckUsVUFBUTNCLEtBQUssQ0FBQzRCLE9BQWQ7QUFDRSxTQUFLLE1BQUw7QUFDRSwwQkFBTyxxRUFBQyxPQUFELGtDQUFhNUIsS0FBYjtBQUFvQixXQUFHLEVBQUUyQjtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7O0FBQ0YsU0FBSyxNQUFMO0FBQ0UsMEJBQU8scUVBQUMsVUFBRCxrQ0FBZ0IzQixLQUFoQjtBQUF1QixXQUFHLEVBQUUyQjtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFKSjtBQU1ELENBUGlCLENBQWxCO01BQU1ILFM7QUFTU0Esd0VBQWYiLCJmaWxlIjoiLi9zcmMvQm94L1N0eWxlZEJveC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi91dGlscy9jb250YWluZXJcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgYWxpZ25YOiBzdHJpbmdbXTtcbiAgYWxpZ25ZOiBzdHJpbmdbXTtcbiAgYXR0cnM6IG9iamVjdDtcbiAgYm90dG9tOiBzdHJpbmdbXTtcbiAgYnJlYWtwb2ludHM6IG51bWJlcltdO1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xuICBjbGFzc05hbWU6IHN0cmluZztcbiAgY29sczogbnVtYmVyW107XG4gIGNvbHNwYW46IG51bWJlcltdO1xuICBjb21wb25lbnQ/OiBSZWFjdC5SZWFjdEVsZW1lbnQ7XG4gIGNvbnRyb2xDb2xvcjogc3RyaW5nO1xuICBjb250cm9sSXNWaXNpYmxlOiBib29sZWFuO1xuICBjc3NNb2RlOiBcImdyaWRcIiB8IFwiZmxleFwiO1xuICBjdXN0b21TdHlsZXM/OiBzdHJpbmdbXTtcbiAgZ3V0dGVyWDogc3RyaW5nW107XG4gIGd1dHRlclk6IHN0cmluZ1tdO1xuICBoYXNDaGlsZEJveGVzOiBib29sZWFuO1xuICBoZWlnaHQ6IHN0cmluZ1tdO1xuICBsZWZ0OiBzdHJpbmdbXTtcbiAgbWVkaWE6IGFueVtdO1xuICBwYWRkaW5nOiBzdHJpbmdbXTtcbiAgcmVzdDogc3RyaW5nW107XG4gIHJpZ2h0OiBzdHJpbmdbXTtcbiAgdGFnOiBzdHJpbmc7XG4gIHRvcDogc3RyaW5nW107XG4gIG9yZGVyOiBudW1iZXJbXTtcbn1cblxuY29uc3QgR3JpZExheW91dCA9IHN0eWxlZChDb250YWluZXIpPFByb3BzPmBcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgJHsocHJvcHMpID0+IHByb3BzLmhhc0NoaWxkQm94ZXMgJiYgXCJkaXNwbGF5OiBncmlkO1wifTtcblxuICAkeyhwcm9wcykgPT5cbiAgICBwcm9wcy5oYXNDaGlsZEJveGVzICYmXG4gICAgcHJvcHMubWVkaWEubWFwKChtZWRpYSwgaW5kZXgpID0+IHtcbiAgICAgIHJldHVybiBtZWRpYWBcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KCR7KHByb3BzKSA9PiBwcm9wcy5jb2xzcGFuW2luZGV4XX0sIDFmcik7XG4gICAgICBncmlkLWF1dG8tY29sdW1uczogJHsocHJvcHMpID0+IHByb3BzLmNvbHNwYW5baW5kZXhdfWZyO1xuICAgICAgZ3JpZC1hdXRvLXJvd3M6IG1pbi1jb250ZW50O1xuICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiAke3Byb3BzLmd1dHRlclhbaW5kZXhdfTtcbiAgICAgIGdyaWQtcm93LWdhcDogJHtwcm9wcy5ndXR0ZXJZW2luZGV4XX07XG4gICAgYDtcbiAgICB9KX1cbiAgJHsocHJvcHMpID0+XG4gICAgIXByb3BzLmhhc0NoaWxkQm94ZXMgJiZcbiAgICBwcm9wcy5tZWRpYS5tYXAoKG1lZGlhLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBwcm9wcy5hbGlnblhbaW5kZXhdID09PSBcImZsZXgtc3RhcnRcIiAmJlxuICAgICAgICBwcm9wcy5hbGlnbllbaW5kZXhdID09PSBcImZsZXgtc3RhcnRcIlxuICAgICAgKVxuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgIHJldHVybiBtZWRpYWBcbiAgICAgICAgJHsocHJvcHMuYWxpZ25YW2luZGV4XSB8fCBwcm9wcy5hbGlnbllbaW5kZXhdKSAmJiBgZGlzcGxheTogZmxleDtgfVxuICAgICAgICAke3Byb3BzLmFsaWduWFtpbmRleF0gJiYgYGp1c3RpZnktY29udGVudDogJHtwcm9wcy5hbGlnblhbaW5kZXhdfTtgfVxuICAgICAgICAke3Byb3BzLmFsaWduWVtpbmRleF0gJiYgYGFsaWduLWl0ZW1zOiAke3Byb3BzLmFsaWduWVtpbmRleF19O2B9XG4gICAgICBgO1xuICAgIH0pfVxuICAgIFxuICAkeyhwcm9wcykgPT5cbiAgICBwcm9wcy5tZWRpYS5tYXAoKG1lZGlhLCBpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIG1lZGlhYFxuICAgICAgICAkeyFwcm9wcy5jb2xzcGFuW2luZGV4XSA/IFwiZGlzcGxheTogbm9uZTtcIiA6IFwiXCJ9XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZ3JpZC1jb2x1bW46IGF1dG8gLyBzcGFuICR7cHJvcHMuY29sc1tpbmRleF19O1xuICAgICAgICBsZWZ0OiAke3Byb3BzLnJlc3RbaW5kZXhdfTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6ICR7cHJvcHMubGVmdFtpbmRleF19O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6ICR7cHJvcHMucmlnaHRbaW5kZXhdfTtcbiAgICAgICAgbWFyZ2luLXRvcDogJHtwcm9wcy50b3BbaW5kZXhdfTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogJHtwcm9wcy5ib3R0b21baW5kZXhdfTtcbiAgICAgICAgYWxpZ24tY29udGVudDogJHtwcm9wcy5hbGlnbllbaW5kZXhdfTtcbiAgICAgICAgYWxpZ24taXRlbXM6ICR7cHJvcHMuYWxpZ25ZW2luZGV4XX07XG4gICAgICAgIHBhZGRpbmc6ICR7cHJvcHMucGFkZGluZ1tpbmRleF19O1xuICAgICAgICBvcmRlcjogJHtwcm9wcy5vcmRlcltpbmRleF19O1xuICAgICAgICBoZWlnaHQ6ICR7cHJvcHMuaGVpZ2h0W2luZGV4XX07XG4gICAgICAgICR7cHJvcHMuY3VzdG9tU3R5bGVzW2luZGV4XX1cbiAgICAgIGA7XG4gICAgfSl9XG5cbiAgJHsocHJvcHMpID0+XG4gICAgcHJvcHMudGFnID09PSBcImltZ1wiICYmXG4gICAgcHJvcHMuY29udHJvbElzVmlzaWJsZSAmJlxuICAgIGBcbiAgICBib3gtc2hhZG93OiAwIDAgOTk5ZW0gJHtwcm9wcy5jb250cm9sQ29sb3J9IGluc2V0O1xuICBgfVxuYDtcblxuY29uc3QgRmxleEJveCA9IHN0eWxlZChDb250YWluZXIpPFByb3BzPmBcbiAgZGlzcGxheTogZmxleDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAkeyhwcm9wcykgPT5cbiAgICBwcm9wcy5tZWRpYS5tYXAoKG1lZGlhLCBpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIG1lZGlhYFxuICAgICAgICB3aWR0aDogJHtwcm9wcy5jb2xzW2luZGV4XX0lO1xuICAgICAgICBoZWlnaHQ6ICR7cHJvcHMuaGVpZ2h0W2luZGV4XX07XG4gICAgICAgIFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IGNhbGMoJHtwcm9wcy5ndXR0ZXJYW2luZGV4XX0gLyAyKTtcbiAgICAgICAgcGFkZGluZy1yaWdodDogY2FsYygke3Byb3BzLmd1dHRlclhbaW5kZXhdfSAvIDIpO1xuICAgICAgICBwYWRkaW5nLXRvcDogY2FsYygke3Byb3BzLmd1dHRlcllbaW5kZXhdfSAvIDIpO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYygke3Byb3BzLmd1dHRlcllbaW5kZXhdfSAvIDIpO1xuXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAke3Byb3BzLmxlZnRbaW5kZXhdfTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAke3Byb3BzLnJpZ2h0W2luZGV4XX07XG4gICAgICAgIG1hcmdpbi10b3A6ICR7cHJvcHMudG9wW2luZGV4XX07XG4gICAgICAgIG1hcmdpbi1ib3R0b206ICR7cHJvcHMuYm90dG9tW2luZGV4XX07XG5cbiAgICAgICAgb3JkZXI6ICR7cHJvcHMub3JkZXJbaW5kZXhdfTtcbiAgICAgIGA7XG4gICAgfSl9XG5gO1xuXG5jb25zdCBTdHlsZWRCb3ggPSBSZWFjdC5mb3J3YXJkUmVmPEhUTUxFbGVtZW50LCBQcm9wcz4oKHByb3BzLCByZWYpID0+IHtcbiAgc3dpdGNoIChwcm9wcy5jc3NNb2RlKSB7XG4gICAgY2FzZSBcImZsZXhcIjpcbiAgICAgIHJldHVybiA8RmxleEJveCB7Li4ucHJvcHN9IHJlZj17cmVmfSAvPjtcbiAgICBjYXNlIFwiZ3JpZFwiOlxuICAgICAgcmV0dXJuIDxHcmlkTGF5b3V0IHsuLi5wcm9wc30gcmVmPXtyZWZ9IC8+O1xuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgU3R5bGVkQm94O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Box/StyledBox.tsx\n");

/***/ })

})