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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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
}), __jsx("title", null, props.pageTitle || 'Realtime Chat')), props.children);

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

/***/ 3:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DaGF0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwdXNoZXItanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbIkNoYXQiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNoYXRzIiwiZXZ0IiwidmFsdWUiLCJ0YXJnZXQiLCJrZXlDb2RlIiwic2hpZnRLZXkiLCJhY3RpdmVVc2VyIiwidXNlciIsInByb3BzIiwiY2hhdCIsIm1lc3NhZ2UiLCJ0aW1lc3RhbXAiLCJEYXRlIiwiYXhpb3MiLCJwb3N0IiwiY29tcG9uZW50RGlkTW91bnQiLCJwdXNoZXIiLCJQdXNoZXIiLCJwcm9jZXNzIiwiY2x1c3RlciIsImVuY3J5cHRlZCIsImNoYW5uZWwiLCJzdWJzY3JpYmUiLCJiaW5kIiwic3RhdGUiLCJwdXNoIiwic2V0U3RhdGUiLCJjb25uZWN0aW9uIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsIm1lc3NhZ2VzIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJkaXNjb25uZWN0IiwicmVuZGVyIiwiaGVpZ2h0IiwibWluSGVpZ2h0IiwiaGFuZGxlS2V5VXAiLCJyZXNpemUiLCJMYXlvdXQiLCJwYWdlVGl0bGUiLCJjaGlsZHJlbiIsIkluZGV4UGFnZSIsIm5hbWVJbnB1dFN0eWxlcyIsImJhY2tncm91bmQiLCJjb2xvciIsImJvcmRlciIsImJvcmRlckJvdHRvbSIsImJvcmRlclJhZGl1cyIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImJveFNoYWRvdyIsIm1hcmdpblRvcCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxJQUFOLFNBQW1CQyw0Q0FBSyxDQUFDQyxTQUF6QixDQUFtQztBQUFBO0FBQUE7O0FBQUEsbUNBRXZCO0FBQ0pDLFdBQUssRUFBRSxFQURILENBQ007O0FBRE4sS0FGdUI7O0FBQUEseUNBcUNqQkMsR0FBRyxJQUFJO0FBQ2pCLFlBQU1DLEtBQUssR0FBR0QsR0FBRyxDQUFDRSxNQUFKLENBQVdELEtBQXpCOztBQUVBLFVBQUlELEdBQUcsQ0FBQ0csT0FBSixLQUFnQixFQUFoQixJQUFzQixDQUFDSCxHQUFHLENBQUNJLFFBQS9CLEVBQXlDO0FBQ3JDLGNBQU07QUFBRUMsb0JBQVUsRUFBRUM7QUFBZCxZQUF1QixLQUFLQyxLQUFsQyxDQURxQyxDQUVyQzs7QUFDQSxjQUFNQyxJQUFJLEdBQUc7QUFBRUYsY0FBRjtBQUFRRyxpQkFBTyxFQUFFUixLQUFqQjtBQUF3QlMsbUJBQVMsRUFBRSxDQUFDLElBQUlDLElBQUo7QUFBcEMsU0FBYixDQUhxQyxDQUlyQzs7QUFDQVgsV0FBRyxDQUFDRSxNQUFKLENBQVdELEtBQVgsR0FBbUIsRUFBbkIsQ0FMcUMsQ0FNckM7O0FBQ0FXLG9EQUFLLENBQUNDLElBQU4sQ0FBVyxVQUFYLEVBQXVCTCxJQUF2QjtBQUNIO0FBQ0osS0FqRDhCO0FBQUE7O0FBTS9CTSxtQkFBaUIsR0FBRztBQUNoQjtBQUNBLFNBQUtDLE1BQUwsR0FBYyxJQUFJQyxnREFBSixDQUFXQyxzQkFBWCxFQUF1QztBQUNqREMsYUFBTyxFQUFFRCxLQUR3QztBQUVqREUsZUFBUyxFQUFFO0FBRnNDLEtBQXZDLENBQWQsQ0FGZ0IsQ0FPaEI7O0FBQ0EsU0FBS0MsT0FBTCxHQUFlLEtBQUtMLE1BQUwsQ0FBWU0sU0FBWixDQUFzQixXQUF0QixDQUFmLENBUmdCLENBVWhCOztBQUNBLFNBQUtELE9BQUwsQ0FBYUUsSUFBYixDQUFrQixhQUFsQixFQUFpQyxDQUFDO0FBQUVkLFVBQUksR0FBRztBQUFULEtBQUQsS0FBcUI7QUFDbEQsWUFBTTtBQUFFVDtBQUFGLFVBQVksS0FBS3dCLEtBQXZCO0FBQ0FmLFVBQUksSUFBSVQsS0FBSyxDQUFDeUIsSUFBTixDQUFXaEIsSUFBWCxDQUFSO0FBQ0EsV0FBS2lCLFFBQUwsQ0FBYztBQUFFMUI7QUFBRixPQUFkO0FBQ0gsS0FKRCxFQVhnQixDQWdCaEI7O0FBQ0EsU0FBS2dCLE1BQUwsQ0FBWVcsVUFBWixDQUF1QkosSUFBdkIsQ0FBNEIsV0FBNUIsRUFBeUMsTUFBTTtBQUMzQ1Ysa0RBQUssQ0FBQ0MsSUFBTixDQUFXLFdBQVgsRUFBd0I7QUFBeEIsT0FDS2MsSUFETCxDQUNVQyxRQUFRLElBQUk7QUFDZCxjQUFNN0IsS0FBSyxHQUFHNkIsUUFBUSxDQUFDQyxJQUFULENBQWNDLFFBQTVCO0FBQ0EsYUFBS0wsUUFBTCxDQUFjO0FBQUUxQjtBQUFGLFNBQWQsRUFGYyxDQUVZO0FBQzdCLE9BSkw7QUFLSCxLQU5EO0FBUUg7O0FBRURnQyxzQkFBb0IsR0FBRztBQUNuQixTQUFLaEIsTUFBTCxDQUFZaUIsVUFBWjtBQUNIOztBQWdCREMsUUFBTSxHQUFHO0FBQ0w7QUFDQSxXQUFRLEtBQUsxQixLQUFMLENBQVdGLFVBQVgsSUFBeUIsTUFBQyw4Q0FBRCxRQUU3QjtBQUFLLGVBQVMsRUFBQyxvRUFBZjtBQUFvRixXQUFLLEVBQUU7QUFBRTZCLGNBQU0sRUFBRTtBQUFWO0FBQTNGLE9BQ0k7QUFBSSxlQUFTLEVBQUM7QUFBZCxPQUEwQyxLQUFLM0IsS0FBTCxDQUFXRixVQUFyRCxDQURKLENBRjZCLEVBTTdCO0FBQUssZUFBUyxFQUFDLHNFQUFmO0FBQXNGLFdBQUssRUFBRTtBQUFFOEIsaUJBQVMsRUFBRTtBQUFiO0FBQTdGLE9BQ0k7QUFBVSxlQUFTLEVBQUMsd0JBQXBCO0FBQTZDLGFBQU8sRUFBRSxLQUFLQyxXQUEzRDtBQUF3RSxpQkFBVyxFQUFDLHNCQUFwRjtBQUEyRyxXQUFLLEVBQUU7QUFBRUMsY0FBTSxFQUFFO0FBQVY7QUFBbEgsTUFESixDQU42QixDQUFqQztBQVdIOztBQWhFOEI7O0FBb0VwQnpDLG1FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hFQTtBQUNBOztBQUVBLE1BQU0wQyxNQUFNLEdBQUcvQixLQUFLLElBQ2hCLE1BQUMsOENBQUQsUUFDSSxNQUFDLGdEQUFELFFBQ0k7QUFBTSxTQUFPLEVBQUM7QUFBZCxFQURKLEVBRUk7QUFBTSxNQUFJLEVBQUMsVUFBWDtBQUFzQixTQUFPLEVBQUM7QUFBOUIsRUFGSixFQUdJO0FBQU0sS0FBRyxFQUFDLFlBQVY7QUFBdUIsTUFBSSxFQUFDLHVFQUE1QjtBQUFvRyxXQUFTLEVBQUMseUVBQTlHO0FBQXdMLGFBQVcsRUFBQztBQUFwTSxFQUhKLEVBSUkscUJBQVFBLEtBQUssQ0FBQ2dDLFNBQU4sSUFBbUIsZUFBM0IsQ0FKSixDQURKLEVBT0toQyxLQUFLLENBQUNpQyxRQVBYLENBREo7O0FBWWVGLHFFQUFmLEU7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7QUFFQSxNQUFNRyxTQUFOLFNBQXdCM0MsK0NBQXhCLENBQWtDO0FBQUE7QUFBQTs7QUFBQSxtQ0FFdEI7QUFBRVEsVUFBSSxFQUFFO0FBQVIsS0FGc0I7O0FBQUEseUNBSWhCTixHQUFHLElBQUk7QUFDakIsVUFBSUEsR0FBRyxDQUFDRyxPQUFKLEtBQWdCLEVBQXBCLEVBQXdCO0FBQ3BCLGNBQU1HLElBQUksR0FBR04sR0FBRyxDQUFDRSxNQUFKLENBQVdELEtBQXhCO0FBQ0EsYUFBS3dCLFFBQUwsQ0FBYztBQUFFbkI7QUFBRixTQUFkO0FBQ0g7QUFDSixLQVQ2QjtBQUFBOztBQVc5QjJCLFFBQU0sR0FBRztBQUNMLFVBQU07QUFBRTNCO0FBQUYsUUFBVyxLQUFLaUIsS0FBdEI7QUFFQSxVQUFNbUIsZUFBZSxHQUFHO0FBQ3BCQyxnQkFBVSxFQUFFLGFBRFE7QUFFcEJDLFdBQUssRUFBRSxNQUZhO0FBR3BCQyxZQUFNLEVBQUUsQ0FIWTtBQUlwQkMsa0JBQVksRUFBRSxnQkFKTTtBQUtwQkMsa0JBQVksRUFBRSxDQUxNO0FBTXBCQyxjQUFRLEVBQUUsTUFOVTtBQU9wQkMsZ0JBQVUsRUFBRSxHQVBRO0FBUXBCQyxlQUFTLEVBQUU7QUFSUyxLQUF4QjtBQVdBLFdBQ0ksTUFBQyxrREFBRDtBQUFRLGVBQVMsRUFBQztBQUFsQixPQUVJO0FBQU0sZUFBUyxFQUFDO0FBQWhCLE9BRUk7QUFBSyxlQUFTLEVBQUM7QUFBZixPQUVJO0FBQVMsZUFBUyxFQUFDO0FBQW5CLE9BQ0k7QUFBSyxlQUFTLEVBQUM7QUFBZixPQUVJO0FBQU0sZUFBUyxFQUFDLDZCQUFoQjtBQUE4QyxXQUFLLEVBQUU7QUFBRUMsaUJBQVMsRUFBRSxDQUFDO0FBQWQ7QUFBckQsT0FFUTdDLElBQUksR0FDRyxvQkFDQztBQUFNLFdBQUssRUFBRTtBQUFFc0MsYUFBSyxFQUFFO0FBQVQ7QUFBYixnQkFERCxPQUNnRHRDLElBRGhELENBREgsR0FJRyxvQkFOZixDQUZKLEVBWUssQ0FBQ0EsSUFBRCxJQUFTO0FBQU8sVUFBSSxFQUFDLE1BQVo7QUFBbUIsZUFBUyxFQUFDLDZCQUE3QjtBQUEyRCxhQUFPLEVBQUUsS0FBSzhCLFdBQXpFO0FBQXNGLGtCQUFZLEVBQUMsS0FBbkc7QUFBeUcsV0FBSyxFQUFFTTtBQUFoSCxNQVpkLENBREosQ0FGSixFQW9CSTtBQUFTLGVBQVMsRUFBQztBQUFuQixPQUNLcEMsSUFBSSxJQUFJLE1BQUMsZ0RBQUQ7QUFBTSxnQkFBVSxFQUFFQTtBQUFsQixNQURiLENBcEJKLENBRkosQ0FGSixDQURKO0FBbUNIOztBQTVENkI7O0FBZ0VuQixxRUFDWCxNQUFDLFNBQUQsT0FESixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25FQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBQdXNoZXIgZnJvbSAncHVzaGVyLWpzJztcclxuXHJcbmNsYXNzIENoYXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIGNoYXRzOiBbXSAvL0luaXRpYWxpemUgdGhlIHN0YXRlIHdpdGggYW4gZW1wdHkgY2hhdHMgYXJyYXkgcHJvcGVydHlcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICAvLyBTZXR1cCBhIFB1c2hlciBjb25uZWN0aW9uIHdoZW4gdGhlIGNvbXBvbmVudCBtb3VudHNcclxuICAgICAgICB0aGlzLnB1c2hlciA9IG5ldyBQdXNoZXIocHJvY2Vzcy5lbnYuUFVTSEVSX0FQUF9LRVksIHtcclxuICAgICAgICAgICAgY2x1c3RlcjogcHJvY2Vzcy5lbnYuUFVTSEVSX0FQUF9DTFVTVEVSLFxyXG4gICAgICAgICAgICBlbmNyeXB0ZWQ6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gU2V0dXAgYSBDaGFubmVsIHN1YnNjcmlwdGlvbiB0byBhIFB1c2hlciBjaGFubmVsICpjaGF0LXJvb20qIHdoZW4gdGhlIGNvbXBvbmVudCBtb3VudHNcclxuICAgICAgICB0aGlzLmNoYW5uZWwgPSB0aGlzLnB1c2hlci5zdWJzY3JpYmUoJ2NoYXQtcm9vbScpO1xyXG5cclxuICAgICAgICAvLyBCaW5kaW5nIHRvIHRoZSBuZXctbWVzc2FnZSBldmVudCBvbiB0aGUgY2hhbm5lbCwgd2hpY2ggZ2V0cyB0cmlnZ2VyZWQgd2hlbiBhIG5ldyBjaGF0IG1lc3NhZ2UgY29tZXMgaW5cclxuICAgICAgICB0aGlzLmNoYW5uZWwuYmluZCgnbmV3LW1lc3NhZ2UnLCAoeyBjaGF0ID0gbnVsbCB9KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgY2hhdHMgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgICAgIGNoYXQgJiYgY2hhdHMucHVzaChjaGF0KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNoYXRzIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIEJpbmRpbmcgdGhlIGNvbm5lY3RlZCBldmVudCBvbiB0aGUgUHVzaGVyIGNsaWVudCwgb24gYSBmcmVzaCBjb25uZWN0aW9uXHJcbiAgICAgICAgdGhpcy5wdXNoZXIuY29ubmVjdGlvbi5iaW5kKCdjb25uZWN0ZWQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGF4aW9zLnBvc3QoJy9tZXNzYWdlcycpIC8vIEZldGNoIGFsbCB0aGUgY2hhdCBtZXNzYWdlcyBmcm9tIGhpc3RvcnkgYnkgbWFraW5nIGEgUE9TVCAvbWVzc2FnZXMgSFRUUCByZXF1ZXN0IHVzaW5nIHRoZSBheGlvc1xyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoYXRzID0gcmVzcG9uc2UuZGF0YS5tZXNzYWdlcztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY2hhdHMgfSk7IC8vIFNldCB0aGUgZmV0Y2hlZCBtZXNzYWdlcyB0byB0aGUgc3RhdGVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICB0aGlzLnB1c2hlci5kaXNjb25uZWN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlS2V5VXAgPSBldnQgPT4ge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gZXZ0LnRhcmdldC52YWx1ZTtcclxuXHJcbiAgICAgICAgaWYgKGV2dC5rZXlDb2RlID09PSAxMyAmJiAhZXZ0LnNoaWZ0S2V5KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgYWN0aXZlVXNlcjogdXNlciB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICAgICAgLy8gQ29uc3RydWN0IGEgY2hhdCBvYmplY3QgY29udGFpbmluZyB0aGUgdXNlciBzZW5kaW5nIHRoZSBtZXNzYWdlIChjdXJyZW50bHkgYWN0aXZlIHVzZXIpLCBtZXNzYWdlICYgdGltZXN0YW1wXHJcbiAgICAgICAgICAgIGNvbnN0IGNoYXQgPSB7IHVzZXIsIG1lc3NhZ2U6IHZhbHVlLCB0aW1lc3RhbXA6ICtuZXcgRGF0ZSB9O1xyXG4gICAgICAgICAgICAvLyBDbGVhciB0aGUgdGV4dGFyZWFcclxuICAgICAgICAgICAgZXZ0LnRhcmdldC52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICAvLyBQYXNzIHRoZSBjaGF0IG9iamVjdCBhcyBwYXlsb2FkLCBvdmVyIGEgUE9TVCAvbWVzc2FnZSBIVFRQIHJlcXVlc3RcclxuICAgICAgICAgICAgYXhpb3MucG9zdCgnL21lc3NhZ2UnLCBjaGF0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIC8qIGFjdGl2ZVVzZXIgcHJvcCB0byBpZGVudGlmeSB0aGUgY3VycmVudGx5IGFjdGl2ZSB1c2VyICovXHJcbiAgICAgICAgcmV0dXJuICh0aGlzLnByb3BzLmFjdGl2ZVVzZXIgJiYgPEZyYWdtZW50PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItYm90dG9tIGJvcmRlci1ncmF5IHctMTAwIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgYmctd2hpdGVcIiBzdHlsZT17eyBoZWlnaHQ6IDkwIH19PlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtZGFyayBtYi0wIG14LTQgcHgtMlwiPnt0aGlzLnByb3BzLmFjdGl2ZVVzZXJ9PC9oMj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci10b3AgYm9yZGVyLWdyYXkgdy0xMDAgcHgtNCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGJnLWxpZ2h0XCIgc3R5bGU9e3sgbWluSGVpZ2h0OiA5MCB9fT5cclxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgcHgtMyBweS0yXCIgb25LZXlVcD17dGhpcy5oYW5kbGVLZXlVcH0gcGxhY2Vob2xkZXI9XCJFbnRlciBhIGNoYXQgbWVzc2FnZVwiIHN0eWxlPXt7IHJlc2l6ZTogJ25vbmUnIH19PjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L0ZyYWdtZW50PilcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXQ7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuXHJcbmNvbnN0IExheW91dCA9IHByb3BzID0+IChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLCBzaHJpbmstdG8tZml0PW5vXCIgLz5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjAuMC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiBpbnRlZ3JpdHk9XCJzaGEzODQtR241Mzg0eHFRMWFvV1hBKzA1OFJYUHhQZzZmeTRJV3ZUTmgwRTI2M1htRmNKbFNBd2lHZ0ZBVy9kQWlTNkpYbVwiIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCIgLz5cclxuICAgICAgICAgICAgPHRpdGxlPntwcm9wcy5wYWdlVGl0bGUgfHwgJ1JlYWx0aW1lIENoYXQnfTwvdGl0bGU+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIDwvRnJhZ21lbnQ+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcbiIsImltcG9ydCBDaGF0IGZyb20gJy4vQ2hhdCdcclxuaW1wb3J0IExheW91dCBmcm9tICcuL0xheW91dCdcclxuXHJcbmV4cG9ydCB7IENoYXQsIExheW91dCB9XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENoYXQsIExheW91dCB9IGZyb20gJy4uL2NvbXBvbmVudHMnO1xyXG5cclxuY2xhc3MgSW5kZXhQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGF0ZSA9IHsgdXNlcjogbnVsbCB9XHJcblxyXG4gICAgaGFuZGxlS2V5VXAgPSBldnQgPT4ge1xyXG4gICAgICAgIGlmIChldnQua2V5Q29kZSA9PT0gMTMpIHtcclxuICAgICAgICAgICAgY29uc3QgdXNlciA9IGV2dC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB1c2VyIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyB1c2VyIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICBjb25zdCBuYW1lSW5wdXRTdHlsZXMgPSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgICAgICAgIGNvbG9yOiAnIzk5OScsXHJcbiAgICAgICAgICAgIGJvcmRlcjogMCxcclxuICAgICAgICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICM2NjYnLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IDAsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAnM3JlbScsXHJcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcclxuICAgICAgICAgICAgYm94U2hhZG93OiAnbm9uZSAhaW1wb3J0YW50J1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxMYXlvdXQgcGFnZVRpdGxlPVwiUmVhbHRpbWUgQ2hhdFwiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBwb3NpdGlvbi1hYnNvbHV0ZSBoLTEwMCBiZy1kYXJrXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHBvc2l0aW9uLWFic29sdXRlIHctMTAwIGgtMTAwXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb2wtbWQtOCBkLWZsZXggZmxleC1yb3cgZmxleC13cmFwIGFsaWduLWl0ZW1zLWNlbnRlciBhbGlnbi1jb250ZW50LWNlbnRlciBweC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTUgbXgtNVwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkLWJsb2NrIHctMTAwIGgxIHRleHQtbGlnaHRcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IC01MCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gKDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogJyM5OTknIH19PkhlbGxvITwvc3Bhbj4ge3VzZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGBXaGF0IGlzIHlvdXIgbmFtZT9gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshdXNlciAmJiA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbXQtMyBweC0zIHB5LTJcIiBvbktleVVwPXt0aGlzLmhhbmRsZUtleVVwfSBhdXRvQ29tcGxldGU9XCJvZmZcIiBzdHlsZT17bmFtZUlucHV0U3R5bGVzfSAvPn1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29sLW1kLTQgcG9zaXRpb24tcmVsYXRpdmUgZC1mbGV4IGZsZXgtd3JhcCBoLTEwMCBhbGlnbi1pdGVtcy1zdGFydCBhbGlnbi1jb250ZW50LWJldHdlZW4gYmctd2hpdGUgcHgtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXIgJiYgPENoYXQgYWN0aXZlVXNlcj17dXNlcn0gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9tYWluPlxyXG5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcclxuICAgIDxJbmRleFBhZ2UgLz5cclxuKTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInB1c2hlci1qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9