webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components */ "./components/index.js");







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var IndexPage = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(IndexPage, _Component);

  var _super = _createSuper(IndexPage);

  function IndexPage() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, IndexPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      user: null
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleKeyUp", function (evt) {
      if (evt.keyCode === 13) {
        var user = evt.target.value;

        _this.setState({
          user: user
        });
      }
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(IndexPage, [{
    key: "render",
    value: function render() {
      var user = this.state.user;
      var nameInputStyles = {
        background: 'transparent',
        color: '#999',
        border: 0,
        borderBottom: '1px solid #666',
        borderRadius: 0,
        fontSize: '3rem',
        fontWeight: 500,
        boxShadow: 'none !important'
      };
      return __jsx(_components__WEBPACK_IMPORTED_MODULE_8__["Layout"], {
        pageTitle: "Realtime Chat"
      }, __jsx("main", {
        className: "container-fluid position-absolute h-100 bg-dark"
      }, __jsx("div", {
        className: "row position-absolute w-100 h-100"
      }, __jsx("section", {
        className: "col-md-8 d-flex flex-row flex-wrap align-items-center align-content-center px-5"
      }, __jsx("div", {
        className: "px-5 mx-5"
      }, __jsx("span", {
        className: "d-block w-100 h1 text-light",
        style: {
          marginTop: -50
        }
      }, user ? __jsx("span", null, __jsx("span", {
        style: {
          color: '#999'
        }
      }, "Hello!"), " ", user) : "What is your name?"), !user && __jsx("input", {
        type: "text",
        className: "form-control mt-3 px-3 py-2",
        onKeyUp: this.handleKeyUp,
        autoComplete: "off",
        style: nameInputStyles
      }))), __jsx("section", {
        className: "col-md-4 position-relative d-flex flex-wrap h-100 align-items-start align-content-between bg-white px-0"
      }, user && __jsx(_components__WEBPACK_IMPORTED_MODULE_8__["Chat"], {
        activeUser: user
      })))));
    }
  }]);

  return IndexPage;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx(IndexPage, null);
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJJbmRleFBhZ2UiLCJ1c2VyIiwiZXZ0Iiwia2V5Q29kZSIsInRhcmdldCIsInZhbHVlIiwic2V0U3RhdGUiLCJzdGF0ZSIsIm5hbWVJbnB1dFN0eWxlcyIsImJhY2tncm91bmQiLCJjb2xvciIsImJvcmRlciIsImJvcmRlckJvdHRvbSIsImJvcmRlclJhZGl1cyIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImJveFNoYWRvdyIsIm1hcmdpblRvcCIsImhhbmRsZUtleVVwIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7SUFFTUEsUzs7Ozs7Ozs7Ozs7Ozs7OztnTkFFTTtBQUFFQyxVQUFJLEVBQUU7QUFBUixLOztzTkFFTSxVQUFBQyxHQUFHLEVBQUk7QUFDakIsVUFBSUEsR0FBRyxDQUFDQyxPQUFKLEtBQWdCLEVBQXBCLEVBQXdCO0FBQ3BCLFlBQU1GLElBQUksR0FBR0MsR0FBRyxDQUFDRSxNQUFKLENBQVdDLEtBQXhCOztBQUNBLGNBQUtDLFFBQUwsQ0FBYztBQUFFTCxjQUFJLEVBQUpBO0FBQUYsU0FBZDtBQUNIO0FBQ0osSzs7Ozs7Ozs2QkFFUTtBQUFBLFVBQ0dBLElBREgsR0FDWSxLQUFLTSxLQURqQixDQUNHTixJQURIO0FBR0wsVUFBTU8sZUFBZSxHQUFHO0FBQ3BCQyxrQkFBVSxFQUFFLGFBRFE7QUFFcEJDLGFBQUssRUFBRSxNQUZhO0FBR3BCQyxjQUFNLEVBQUUsQ0FIWTtBQUlwQkMsb0JBQVksRUFBRSxnQkFKTTtBQUtwQkMsb0JBQVksRUFBRSxDQUxNO0FBTXBCQyxnQkFBUSxFQUFFLE1BTlU7QUFPcEJDLGtCQUFVLEVBQUUsR0FQUTtBQVFwQkMsaUJBQVMsRUFBRTtBQVJTLE9BQXhCO0FBV0EsYUFDSSxNQUFDLGtEQUFEO0FBQVEsaUJBQVMsRUFBQztBQUFsQixTQUVJO0FBQU0saUJBQVMsRUFBQztBQUFoQixTQUVJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBRUk7QUFBUyxpQkFBUyxFQUFDO0FBQW5CLFNBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FFSTtBQUFNLGlCQUFTLEVBQUMsNkJBQWhCO0FBQThDLGFBQUssRUFBRTtBQUFFQyxtQkFBUyxFQUFFLENBQUM7QUFBZDtBQUFyRCxTQUVRaEIsSUFBSSxHQUNHLG9CQUNDO0FBQU0sYUFBSyxFQUFFO0FBQUVTLGVBQUssRUFBRTtBQUFUO0FBQWIsa0JBREQsT0FDZ0RULElBRGhELENBREgsdUJBRlosQ0FGSixFQVlLLENBQUNBLElBQUQsSUFBUztBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLGlCQUFTLEVBQUMsNkJBQTdCO0FBQTJELGVBQU8sRUFBRSxLQUFLaUIsV0FBekU7QUFBc0Ysb0JBQVksRUFBQyxLQUFuRztBQUF5RyxhQUFLLEVBQUVWO0FBQWhILFFBWmQsQ0FESixDQUZKLEVBb0JJO0FBQVMsaUJBQVMsRUFBQztBQUFuQixTQUNLUCxJQUFJLElBQUksTUFBQyxnREFBRDtBQUFNLGtCQUFVLEVBQUVBO0FBQWxCLFFBRGIsQ0FwQkosQ0FGSixDQUZKLENBREo7QUFtQ0g7Ozs7RUE1RG1Ca0IsK0M7O0FBZ0VUO0FBQUEsU0FDWCxNQUFDLFNBQUQsT0FEVztBQUFBLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmUxOTFkZTc0NWU5NzQ3NThlYTM1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDaGF0LCBMYXlvdXQgfSBmcm9tICcuLi9jb21wb25lbnRzJztcclxuXHJcbmNsYXNzIEluZGV4UGFnZSBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgc3RhdGUgPSB7IHVzZXI6IG51bGwgfVxyXG5cclxuICAgIGhhbmRsZUtleVVwID0gZXZ0ID0+IHtcclxuICAgICAgICBpZiAoZXZ0LmtleUNvZGUgPT09IDEzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBldnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdXNlciB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgdXNlciB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgY29uc3QgbmFtZUlucHV0U3R5bGVzID0ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICAgICAgICBjb2xvcjogJyM5OTknLFxyXG4gICAgICAgICAgICBib3JkZXI6IDAsXHJcbiAgICAgICAgICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjNjY2JyxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAwLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogJzNyZW0nLFxyXG4gICAgICAgICAgICBmb250V2VpZ2h0OiA1MDAsXHJcbiAgICAgICAgICAgIGJveFNoYWRvdzogJ25vbmUgIWltcG9ydGFudCdcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TGF5b3V0IHBhZ2VUaXRsZT1cIlJlYWx0aW1lIENoYXRcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgcG9zaXRpb24tYWJzb2x1dGUgaC0xMDAgYmctZGFya1wiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBwb3NpdGlvbi1hYnNvbHV0ZSB3LTEwMCBoLTEwMFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29sLW1kLTggZC1mbGV4IGZsZXgtcm93IGZsZXgtd3JhcCBhbGlnbi1pdGVtcy1jZW50ZXIgYWxpZ24tY29udGVudC1jZW50ZXIgcHgtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC01IG14LTVcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZC1ibG9jayB3LTEwMCBoMSB0ZXh0LWxpZ2h0XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiAtNTAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICg8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICcjOTk5JyB9fT5IZWxsbyE8L3NwYW4+IHt1c2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBgV2hhdCBpcyB5b3VyIG5hbWU/YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IXVzZXIgJiYgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG10LTMgcHgtMyBweS0yXCIgb25LZXlVcD17dGhpcy5oYW5kbGVLZXlVcH0gYXV0b0NvbXBsZXRlPVwib2ZmXCIgc3R5bGU9e25hbWVJbnB1dFN0eWxlc30gLz59XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbC1tZC00IHBvc2l0aW9uLXJlbGF0aXZlIGQtZmxleCBmbGV4LXdyYXAgaC0xMDAgYWxpZ24taXRlbXMtc3RhcnQgYWxpZ24tY29udGVudC1iZXR3ZWVuIGJnLXdoaXRlIHB4LTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyICYmIDxDaGF0IGFjdGl2ZVVzZXI9e3VzZXJ9IC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvbWFpbj5cclxuXHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXHJcbiAgICA8SW5kZXhQYWdlIC8+XHJcbik7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=