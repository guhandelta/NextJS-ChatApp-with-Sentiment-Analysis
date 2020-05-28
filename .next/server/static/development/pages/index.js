module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Chat.js":
/*!****************************!*\
  !*** ./components/Chat.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pusher-js */ "pusher-js");
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class Chat extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      chats: [] //Initialize the state with an empty chats array property

    });

    _defineProperty(this, "handleKeyUp", evt => {
      const value = evt.target.value;

      if (evt.keyCode === 13 && !evt.shiftKey) {
        const {
          activeUser: user
        } = this.props; // Construct a chat object containing the user sending the message (currently active user), message & timestamp

        const chat = {
          user,
          message: value,
          timestamp: +new Date()
        }; // Clear the textarea

        evt.target.value = ''; // Pass the chat object as payload, over a POST /message HTTP request

        axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/message', chat);
      }
    });
  }

  componentDidMount() {
    // Setup a Pusher connection when the component mounts
    this.pusher = new pusher_js__WEBPACK_IMPORTED_MODULE_2___default.a("3fb3abd288f0ac6c1f38", {
      cluster: "us2",
      encrypted: true
    }); // Setup a Channel subscription to a Pusher channel *chat-room* when the component mounts

    this.channel = this.pusher.subscribe('chat-room'); // Binding to the new-message event on the channel, which gets triggered when a new chat message comes in

    this.channel.bind('new-message', ({
      chat = null
    }) => {
      const {
        chats
      } = this.state;
      chat && chats.push(chat);
      this.setState({
        chats
      });
    }); // Binding the connected event on the Pusher client, on a fresh connection

    this.pusher.connection.bind('connected', () => {
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/messages') // Fetch all the chat messages from history by making a POST /messages HTTP request using the axios
      .then(response => {
        const chats = response.data.messages;
        this.setState({
          chats
        }); // Set the fetched messages to the state
      });
    });
  }

  componentWillUnmount() {
    this.pusher.disconnect();
  }

  render() {
    /* activeUser prop to identify the currently active user */
    return this.props.activeUser && __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
      className: "border-bottom border-gray w-100 d-flex align-items-center bg-white",
      style: {
        height: 90
      }
    }, __jsx("h2", {
      className: "text-dark mb-0 mx-4 px-2"
    }, this.props.activeUser)), __jsx("div", {
      className: "border-top border-gray w-100 px-4 d-flex align-items-center bg-light",
      style: {
        minHeight: 90
      }
    }, __jsx("textarea", {
      className: "form-control px-3 py-2",
      onKeyUp: this.handleKeyUp,
      placeholder: "Enter a chat message",
      style: {
        resize: 'none'
      }
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Chat);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Layout = props => __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("meta", {
  charSet: "utf-8"
}), __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1, shrink-to-fit=no"
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
  integrity: "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",
  crossOrigin: "anonymous"
}), __jsx("title", null, props.pageTitle || 'Chat with Sentiment Analysis')), props.children);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/index.js":
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/*! exports provided: Chat, Layout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Chat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Chat */ "./components/Chat.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Chat", function() { return _Chat__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout */ "./components/Layout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return _Layout__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components */ "./components/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class IndexPage extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      user: null
    });

    _defineProperty(this, "handleKeyUp", evt => {
      if (evt.keyCode === 13) {
        const user = evt.target.value;
        this.setState({
          user
        });
      }
    });
  }

  render() {
    const {
      user
    } = this.state;
    const nameInputStyles = {
      background: 'transparent',
      color: '#999',
      border: 0,
      borderBottom: '1px solid #666',
      borderRadius: 0,
      fontSize: '3rem',
      fontWeight: 500,
      boxShadow: 'none !important'
    };
    return __jsx(_components__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
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
    }, "Hello!"), " ", user) : `What is your name?`), !user && __jsx("input", {
      type: "text",
      className: "form-control mt-3 px-3 py-2",
      onKeyUp: this.handleKeyUp,
      autoComplete: "off",
      style: nameInputStyles
    }))), __jsx("section", {
      className: "col-md-4 position-relative d-flex flex-wrap h-100 align-items-start align-content-between bg-white px-0"
    }, user && __jsx(_components__WEBPACK_IMPORTED_MODULE_1__["Chat"], {
      activeUser: user
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (() => __jsx(IndexPage, null));

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! I:\Projects\nextjs-chat-app-with-sentiment-analysis\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "pusher-js":
/*!****************************!*\
  !*** external "pusher-js" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("pusher-js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DaGF0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwdXNoZXItanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbIkNoYXQiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNoYXRzIiwiZXZ0IiwidmFsdWUiLCJ0YXJnZXQiLCJrZXlDb2RlIiwic2hpZnRLZXkiLCJhY3RpdmVVc2VyIiwidXNlciIsInByb3BzIiwiY2hhdCIsIm1lc3NhZ2UiLCJ0aW1lc3RhbXAiLCJEYXRlIiwiYXhpb3MiLCJwb3N0IiwiY29tcG9uZW50RGlkTW91bnQiLCJwdXNoZXIiLCJQdXNoZXIiLCJwcm9jZXNzIiwiY2x1c3RlciIsImVuY3J5cHRlZCIsImNoYW5uZWwiLCJzdWJzY3JpYmUiLCJiaW5kIiwic3RhdGUiLCJwdXNoIiwic2V0U3RhdGUiLCJjb25uZWN0aW9uIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsIm1lc3NhZ2VzIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJkaXNjb25uZWN0IiwicmVuZGVyIiwiaGVpZ2h0IiwibWluSGVpZ2h0IiwiaGFuZGxlS2V5VXAiLCJyZXNpemUiLCJMYXlvdXQiLCJwYWdlVGl0bGUiLCJjaGlsZHJlbiIsIkluZGV4UGFnZSIsIm5hbWVJbnB1dFN0eWxlcyIsImJhY2tncm91bmQiLCJjb2xvciIsImJvcmRlciIsImJvcmRlckJvdHRvbSIsImJvcmRlclJhZGl1cyIsImZvbnRTaXplIiwiZm9udFdlaWdo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QyxJQUFJLEdBQ0csb0JBQ0M7QUFBTSxXQUFLLEVBQUU7QUFBRXNDLGFBQUssRUFBRTtBQUFUO0FBQWIsZ0JBREQsT0FDZ0R0QyxJQURoRCxDQURILEdBSUcsb0JBTmYsQ0FGSixFQVlLLENBQUNBLElBQUQsSUFBUztBQUFPLFVBQUksRUFBQyxNQUFaO0FBQW1CLGVBQVMsRUFBQyw2QkFBN0I7QUFBMkQsYUFBTyxFQUFFLEtBQUs4QixXQUF6RTtBQUFzRixrQkFBWSxFQUFDLEtBQW5HO0FBQXlHLFdBQUssRUFBRU07QUFBaEgsTUFaZCxDQURKLENBRkosRUFvQkk7QUFBUyxlQUFTLEVBQUM7QUFBbkIsT0FDS3BDLElBQUksSUFBSSxNQUFDLGdEQUFEO0FBQU0sZ0JBQVUsRUFBRUE7QUFBbEIsTUFEYixDQXBCSixDQUZKLENBRkosQ0FESjtBQW1DSDs7QUE1RDZCOztBQWdFbkIscUVBQ1gsTUFBQyxTQUFELE9BREosRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgUHVzaGVyIGZyb20gJ3B1c2hlci1qcyc7XHJcblxyXG5jbGFzcyBDaGF0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICBjaGF0czogW10gLy9Jbml0aWFsaXplIHRoZSBzdGF0ZSB3aXRoIGFuIGVtcHR5IGNoYXRzIGFycmF5IHByb3BlcnR5XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgLy8gU2V0dXAgYSBQdXNoZXIgY29ubmVjdGlvbiB3aGVuIHRoZSBjb21wb25lbnQgbW91bnRzXHJcbiAgICAgICAgdGhpcy5wdXNoZXIgPSBuZXcgUHVzaGVyKHByb2Nlc3MuZW52LlBVU0hFUl9BUFBfS0VZLCB7XHJcbiAgICAgICAgICAgIGNsdXN0ZXI6IHByb2Nlc3MuZW52LlBVU0hFUl9BUFBfQ0xVU1RFUixcclxuICAgICAgICAgICAgZW5jcnlwdGVkOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFNldHVwIGEgQ2hhbm5lbCBzdWJzY3JpcHRpb24gdG8gYSBQdXNoZXIgY2hhbm5lbCAqY2hhdC1yb29tKiB3aGVuIHRoZSBjb21wb25lbnQgbW91bnRzXHJcbiAgICAgICAgdGhpcy5jaGFubmVsID0gdGhpcy5wdXNoZXIuc3Vic2NyaWJlKCdjaGF0LXJvb20nKTtcclxuXHJcbiAgICAgICAgLy8gQmluZGluZyB0byB0aGUgbmV3LW1lc3NhZ2UgZXZlbnQgb24gdGhlIGNoYW5uZWwsIHdoaWNoIGdldHMgdHJpZ2dlcmVkIHdoZW4gYSBuZXcgY2hhdCBtZXNzYWdlIGNvbWVzIGluXHJcbiAgICAgICAgdGhpcy5jaGFubmVsLmJpbmQoJ25ldy1tZXNzYWdlJywgKHsgY2hhdCA9IG51bGwgfSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB7IGNoYXRzIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgICAgICBjaGF0ICYmIGNoYXRzLnB1c2goY2hhdCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjaGF0cyB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBCaW5kaW5nIHRoZSBjb25uZWN0ZWQgZXZlbnQgb24gdGhlIFB1c2hlciBjbGllbnQsIG9uIGEgZnJlc2ggY29ubmVjdGlvblxyXG4gICAgICAgIHRoaXMucHVzaGVyLmNvbm5lY3Rpb24uYmluZCgnY29ubmVjdGVkJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBheGlvcy5wb3N0KCcvbWVzc2FnZXMnKSAvLyBGZXRjaCBhbGwgdGhlIGNoYXQgbWVzc2FnZXMgZnJvbSBoaXN0b3J5IGJ5IG1ha2luZyBhIFBPU1QgL21lc3NhZ2VzIEhUVFAgcmVxdWVzdCB1c2luZyB0aGUgYXhpb3NcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGF0cyA9IHJlc3BvbnNlLmRhdGEubWVzc2FnZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNoYXRzIH0pOyAvLyBTZXQgdGhlIGZldGNoZWQgbWVzc2FnZXMgdG8gdGhlIHN0YXRlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5wdXNoZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUtleVVwID0gZXZ0ID0+IHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGV2dC50YXJnZXQudmFsdWU7XHJcblxyXG4gICAgICAgIGlmIChldnQua2V5Q29kZSA9PT0gMTMgJiYgIWV2dC5zaGlmdEtleSkge1xyXG4gICAgICAgICAgICBjb25zdCB7IGFjdGl2ZVVzZXI6IHVzZXIgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgICAgIC8vIENvbnN0cnVjdCBhIGNoYXQgb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHVzZXIgc2VuZGluZyB0aGUgbWVzc2FnZSAoY3VycmVudGx5IGFjdGl2ZSB1c2VyKSwgbWVzc2FnZSAmIHRpbWVzdGFtcFxyXG4gICAgICAgICAgICBjb25zdCBjaGF0ID0geyB1c2VyLCBtZXNzYWdlOiB2YWx1ZSwgdGltZXN0YW1wOiArbmV3IERhdGUgfTtcclxuICAgICAgICAgICAgLy8gQ2xlYXIgdGhlIHRleHRhcmVhXHJcbiAgICAgICAgICAgIGV2dC50YXJnZXQudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgLy8gUGFzcyB0aGUgY2hhdCBvYmplY3QgYXMgcGF5bG9hZCwgb3ZlciBhIFBPU1QgL21lc3NhZ2UgSFRUUCByZXF1ZXN0XHJcbiAgICAgICAgICAgIGF4aW9zLnBvc3QoJy9tZXNzYWdlJywgY2hhdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICAvKiBhY3RpdmVVc2VyIHByb3AgdG8gaWRlbnRpZnkgdGhlIGN1cnJlbnRseSBhY3RpdmUgdXNlciAqL1xyXG4gICAgICAgIHJldHVybiAodGhpcy5wcm9wcy5hY3RpdmVVc2VyICYmIDxGcmFnbWVudD5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLWJvdHRvbSBib3JkZXItZ3JheSB3LTEwMCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGJnLXdoaXRlXCIgc3R5bGU9e3sgaGVpZ2h0OiA5MCB9fT5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWRhcmsgbWItMCBteC00IHB4LTJcIj57dGhpcy5wcm9wcy5hY3RpdmVVc2VyfTwvaDI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItdG9wIGJvcmRlci1ncmF5IHctMTAwIHB4LTQgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBiZy1saWdodFwiIHN0eWxlPXt7IG1pbkhlaWdodDogOTAgfX0+XHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIHB4LTMgcHktMlwiIG9uS2V5VXA9e3RoaXMuaGFuZGxlS2V5VXB9IHBsYWNlaG9sZGVyPVwiRW50ZXIgYSBjaGF0IG1lc3NhZ2VcIiBzdHlsZT17eyByZXNpemU6ICdub25lJyB9fT48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9GcmFnbWVudD4pXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcblxyXG5jb25zdCBMYXlvdXQgPSBwcm9wcyA9PiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MSwgc2hyaW5rLXRvLWZpdD1ub1wiIC8+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4wLjAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgaW50ZWdyaXR5PVwic2hhMzg0LUduNTM4NHhxUTFhb1dYQSswNThSWFB4UGc2Znk0SVd2VE5oMEUyNjNYbUZjSmxTQXdpR2dGQVcvZEFpUzZKWG1cIiBjcm9zc09yaWdpbj1cImFub255bW91c1wiIC8+XHJcbiAgICAgICAgICAgIDx0aXRsZT57cHJvcHMucGFnZVRpdGxlIHx8ICdDaGF0IHdpdGggU2VudGltZW50IEFuYWx5c2lzJ308L3RpdGxlPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xyXG4iLCJpbXBvcnQgQ2hhdCBmcm9tICcuL0NoYXQnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi9MYXlvdXQnXHJcblxyXG5leHBvcnQgeyBDaGF0LCBMYXlvdXQgfVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDaGF0LCBMYXlvdXQgfSBmcm9tICcuLi9jb21wb25lbnRzJztcclxuXHJcbmNsYXNzIEluZGV4UGFnZSBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgc3RhdGUgPSB7IHVzZXI6IG51bGwgfVxyXG5cclxuICAgIGhhbmRsZUtleVVwID0gZXZ0ID0+IHtcclxuICAgICAgICBpZiAoZXZ0LmtleUNvZGUgPT09IDEzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBldnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdXNlciB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgdXNlciB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgY29uc3QgbmFtZUlucHV0U3R5bGVzID0ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICAgICAgICBjb2xvcjogJyM5OTknLFxyXG4gICAgICAgICAgICBib3JkZXI6IDAsXHJcbiAgICAgICAgICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjNjY2JyxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAwLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogJzNyZW0nLFxyXG4gICAgICAgICAgICBmb250V2VpZ2h0OiA1MDAsXHJcbiAgICAgICAgICAgIGJveFNoYWRvdzogJ25vbmUgIWltcG9ydGFudCdcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TGF5b3V0IHBhZ2VUaXRsZT1cIlJlYWx0aW1lIENoYXRcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgcG9zaXRpb24tYWJzb2x1dGUgaC0xMDAgYmctZGFya1wiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBwb3NpdGlvbi1hYnNvbHV0ZSB3LTEwMCBoLTEwMFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29sLW1kLTggZC1mbGV4IGZsZXgtcm93IGZsZXgtd3JhcCBhbGlnbi1pdGVtcy1jZW50ZXIgYWxpZ24tY29udGVudC1jZW50ZXIgcHgtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC01IG14LTVcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZC1ibG9jayB3LTEwMCBoMSB0ZXh0LWxpZ2h0XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiAtNTAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICg8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICcjOTk5JyB9fT5IZWxsbyE8L3NwYW4+IHt1c2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBgV2hhdCBpcyB5b3VyIG5hbWU/YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IXVzZXIgJiYgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG10LTMgcHgtMyBweS0yXCIgb25LZXlVcD17dGhpcy5oYW5kbGVLZXlVcH0gYXV0b0NvbXBsZXRlPVwib2ZmXCIgc3R5bGU9e25hbWVJbnB1dFN0eWxlc30gLz59XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbC1tZC00IHBvc2l0aW9uLXJlbGF0aXZlIGQtZmxleCBmbGV4LXdyYXAgaC0xMDAgYWxpZ24taXRlbXMtc3RhcnQgYWxpZ24tY29udGVudC1iZXR3ZWVuIGJnLXdoaXRlIHB4LTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyICYmIDxDaGF0IGFjdGl2ZVVzZXI9e3VzZXJ9IC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvbWFpbj5cclxuXHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXHJcbiAgICA8SW5kZXhQYWdlIC8+XHJcbik7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwdXNoZXItanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==