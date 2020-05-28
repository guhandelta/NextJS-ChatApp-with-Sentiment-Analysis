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

/***/ "./components/ChatMessages.js":
/*!************************************!*\
  !*** ./components/ChatMessages.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class ChatMessages extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    // This component requires two props: message for the chat message and position of the message -> either right or left,...
    //... respective to the user's screen
    const {
      position = 'left',
      message
    } = this.props;
    const isRight = position.toLowerCase() === 'right';
    const align = isRight ? 'text-right' : 'text-left';
    const justify = isRight ? 'justify-content-end' : 'justify-content-start';
    const messageBoxStyles = {
      maxWidth: '70%',
      flexGrow: 0
    };
    const messageStyles = {
      fontWeight: 500,
      lineHeight: 1.4,
      whiteSpace: 'pre-wrap'
    }; // Display the message, from the props

    return __jsx("div", {
      className: `w-100 my-1 d-flex ${justify}`
    }, __jsx("div", {
      className: "bg-light rounded border border-gray p-2",
      style: messageBoxStyles
    }, __jsx("span", {
      className: `d-block text-secondary ${align}`,
      style: messageStyles
    }, message)));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ChatMessages);

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
/*! exports provided: Chat, Layout, ChatMessages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Chat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Chat */ "./components/Chat.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Chat", function() { return _Chat__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout */ "./components/Layout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return _Layout__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _ChatMessages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChatMessages */ "./components/ChatMessages.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChatMessages", function() { return _ChatMessages__WEBPACK_IMPORTED_MODULE_2__["default"]; });






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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DaGF0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2hhdE1lc3NhZ2VzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwdXNoZXItanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbIkNoYXQiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNoYXRzIiwiZXZ0IiwidmFsdWUiLCJ0YXJnZXQiLCJrZXlDb2RlIiwic2hpZnRLZXkiLCJhY3RpdmVVc2VyIiwidXNlciIsInByb3BzIiwiY2hhdCIsIm1lc3NhZ2UiLCJ0aW1lc3RhbXAiLCJEYXRlIiwiYXhpb3MiLCJwb3N0IiwiY29tcG9uZW50RGlkTW91bnQiLCJwdXNoZXIiLCJQdXNoZXIiLCJwcm9jZXNzIiwiY2x1c3RlciIsImVuY3J5cHRlZCIsImNoYW5uZWwiLCJzdWJzY3JpYmUiLCJiaW5kIiwic3RhdGUiLCJwdXNoIiwic2V0U3RhdGUiLCJjb25uZWN0aW9uIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsIm1lc3NhZ2VzIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJkaXNjb25uZWN0IiwicmVuZGVyIiwiaGVpZ2h0IiwibWluSGVpZ2h0IiwiaGFuZGxlS2V5VXAiLCJyZXNpemUiLCJDaGF0TWVzc2FnZXMiLCJwb3NpdGlvbiIsImlzUmlnaHQiLCJ0b0xvd2VyQ2FzZSIsImFsaWduIiwianVzdGlmeSIsIm1lc3NhZ2VCb3hTdHlsZXMiLCJtYXhXaWR0aCIsImZsZXhHcm93IiwibWVzc2FnZVN0eWxlcyIsImZvbnRXZWlnaHQiLCJsaW5lSGVpZ2h0Iiwid2hpdGVTcGFjZSIsIkxheW91dCIsInBhZ2VUaXRsZSIsImNoaWxkcmVuIiwiSW5kZXhQYWdlIiwibmFtZUlucHV0U3R5bGVzIiwiYmFja2dyb3VuZCIsImNvbG9yIiwiYm9yZGVyIiwiYm9yZGVyQm90dG9tIiwiYm9yZGVyUmFkaXVzIiwiZm9udFNpemUiLCJib3hTaGFkb3ciLCJtYXJnaW5Ub3AiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsSUFBTixTQUFtQkMsNENBQUssQ0FBQ0MsU0FBekIsQ0FBbUM7QUFBQTtBQUFBOztBQUFBLG1DQUV2QjtBQUNKQyxXQUFLLEVBQUUsRUFESCxDQUNNOztBQUROLEtBRnVCOztBQUFB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ckQsT0FFUXpELElBQUksR0FDRyxvQkFDQztBQUFNLFdBQUssRUFBRTtBQUFFbUQsYUFBSyxFQUFFO0FBQVQ7QUFBYixnQkFERCxPQUNnRG5ELElBRGhELENBREgsR0FJRyxvQkFOZixDQUZKLEVBWUssQ0FBQ0EsSUFBRCxJQUFTO0FBQU8sVUFBSSxFQUFDLE1BQVo7QUFBbUIsZUFBUyxFQUFDLDZCQUE3QjtBQUEyRCxhQUFPLEVBQUUsS0FBSzhCLFdBQXpFO0FBQXNGLGtCQUFZLEVBQUMsS0FBbkc7QUFBeUcsV0FBSyxFQUFFbUI7QUFBaEgsTUFaZCxDQURKLENBRkosRUFvQkk7QUFBUyxlQUFTLEVBQUM7QUFBbkIsT0FDS2pELElBQUksSUFBSSxNQUFDLGdEQUFEO0FBQU0sZ0JBQVUsRUFBRUE7QUFBbEIsTUFEYixDQXBCSixDQUZKLENBRkosQ0FESjtBQW1DSDs7QUE1RDZCOztBQWdFbkIscUVBQ1gsTUFBQyxTQUFELE9BREosRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgUHVzaGVyIGZyb20gJ3B1c2hlci1qcyc7XHJcblxyXG5jbGFzcyBDaGF0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICBjaGF0czogW10gLy9Jbml0aWFsaXplIHRoZSBzdGF0ZSB3aXRoIGFuIGVtcHR5IGNoYXRzIGFycmF5IHByb3BlcnR5XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgLy8gU2V0dXAgYSBQdXNoZXIgY29ubmVjdGlvbiB3aGVuIHRoZSBjb21wb25lbnQgbW91bnRzXHJcbiAgICAgICAgdGhpcy5wdXNoZXIgPSBuZXcgUHVzaGVyKHByb2Nlc3MuZW52LlBVU0hFUl9BUFBfS0VZLCB7XHJcbiAgICAgICAgICAgIGNsdXN0ZXI6IHByb2Nlc3MuZW52LlBVU0hFUl9BUFBfQ0xVU1RFUixcclxuICAgICAgICAgICAgZW5jcnlwdGVkOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFNldHVwIGEgQ2hhbm5lbCBzdWJzY3JpcHRpb24gdG8gYSBQdXNoZXIgY2hhbm5lbCAqY2hhdC1yb29tKiB3aGVuIHRoZSBjb21wb25lbnQgbW91bnRzXHJcbiAgICAgICAgdGhpcy5jaGFubmVsID0gdGhpcy5wdXNoZXIuc3Vic2NyaWJlKCdjaGF0LXJvb20nKTtcclxuXHJcbiAgICAgICAgLy8gQmluZGluZyB0byB0aGUgbmV3LW1lc3NhZ2UgZXZlbnQgb24gdGhlIGNoYW5uZWwsIHdoaWNoIGdldHMgdHJpZ2dlcmVkIHdoZW4gYSBuZXcgY2hhdCBtZXNzYWdlIGNvbWVzIGluXHJcbiAgICAgICAgdGhpcy5jaGFubmVsLmJpbmQoJ25ldy1tZXNzYWdlJywgKHsgY2hhdCA9IG51bGwgfSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB7IGNoYXRzIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgICAgICBjaGF0ICYmIGNoYXRzLnB1c2goY2hhdCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjaGF0cyB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBCaW5kaW5nIHRoZSBjb25uZWN0ZWQgZXZlbnQgb24gdGhlIFB1c2hlciBjbGllbnQsIG9uIGEgZnJlc2ggY29ubmVjdGlvblxyXG4gICAgICAgIHRoaXMucHVzaGVyLmNvbm5lY3Rpb24uYmluZCgnY29ubmVjdGVkJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBheGlvcy5wb3N0KCcvbWVzc2FnZXMnKSAvLyBGZXRjaCBhbGwgdGhlIGNoYXQgbWVzc2FnZXMgZnJvbSBoaXN0b3J5IGJ5IG1ha2luZyBhIFBPU1QgL21lc3NhZ2VzIEhUVFAgcmVxdWVzdCB1c2luZyB0aGUgYXhpb3NcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGF0cyA9IHJlc3BvbnNlLmRhdGEubWVzc2FnZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNoYXRzIH0pOyAvLyBTZXQgdGhlIGZldGNoZWQgbWVzc2FnZXMgdG8gdGhlIHN0YXRlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5wdXNoZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUtleVVwID0gZXZ0ID0+IHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGV2dC50YXJnZXQudmFsdWU7XHJcblxyXG4gICAgICAgIGlmIChldnQua2V5Q29kZSA9PT0gMTMgJiYgIWV2dC5zaGlmdEtleSkge1xyXG4gICAgICAgICAgICBjb25zdCB7IGFjdGl2ZVVzZXI6IHVzZXIgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgICAgIC8vIENvbnN0cnVjdCBhIGNoYXQgb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHVzZXIgc2VuZGluZyB0aGUgbWVzc2FnZSAoY3VycmVudGx5IGFjdGl2ZSB1c2VyKSwgbWVzc2FnZSAmIHRpbWVzdGFtcFxyXG4gICAgICAgICAgICBjb25zdCBjaGF0ID0geyB1c2VyLCBtZXNzYWdlOiB2YWx1ZSwgdGltZXN0YW1wOiArbmV3IERhdGUgfTtcclxuICAgICAgICAgICAgLy8gQ2xlYXIgdGhlIHRleHRhcmVhXHJcbiAgICAgICAgICAgIGV2dC50YXJnZXQudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgLy8gUGFzcyB0aGUgY2hhdCBvYmplY3QgYXMgcGF5bG9hZCwgb3ZlciBhIFBPU1QgL21lc3NhZ2UgSFRUUCByZXF1ZXN0XHJcbiAgICAgICAgICAgIGF4aW9zLnBvc3QoJy9tZXNzYWdlJywgY2hhdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICAvKiBhY3RpdmVVc2VyIHByb3AgdG8gaWRlbnRpZnkgdGhlIGN1cnJlbnRseSBhY3RpdmUgdXNlciAqL1xyXG4gICAgICAgIHJldHVybiAodGhpcy5wcm9wcy5hY3RpdmVVc2VyICYmIDxGcmFnbWVudD5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLWJvdHRvbSBib3JkZXItZ3JheSB3LTEwMCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGJnLXdoaXRlXCIgc3R5bGU9e3sgaGVpZ2h0OiA5MCB9fT5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWRhcmsgbWItMCBteC00IHB4LTJcIj57dGhpcy5wcm9wcy5hY3RpdmVVc2VyfTwvaDI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItdG9wIGJvcmRlci1ncmF5IHctMTAwIHB4LTQgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBiZy1saWdodFwiIHN0eWxlPXt7IG1pbkhlaWdodDogOTAgfX0+XHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIHB4LTMgcHktMlwiIG9uS2V5VXA9e3RoaXMuaGFuZGxlS2V5VXB9IHBsYWNlaG9sZGVyPVwiRW50ZXIgYSBjaGF0IG1lc3NhZ2VcIiBzdHlsZT17eyByZXNpemU6ICdub25lJyB9fT48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9GcmFnbWVudD4pXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgQ2hhdE1lc3NhZ2VzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgLy8gVGhpcyBjb21wb25lbnQgcmVxdWlyZXMgdHdvIHByb3BzOiBtZXNzYWdlIGZvciB0aGUgY2hhdCBtZXNzYWdlIGFuZCBwb3NpdGlvbiBvZiB0aGUgbWVzc2FnZSAtPiBlaXRoZXIgcmlnaHQgb3IgbGVmdCwuLi5cclxuICAgICAgICAvLy4uLiByZXNwZWN0aXZlIHRvIHRoZSB1c2VyJ3Mgc2NyZWVuXHJcbiAgICAgICAgY29uc3QgeyBwb3NpdGlvbiA9ICdsZWZ0JywgbWVzc2FnZSB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCBpc1JpZ2h0ID0gcG9zaXRpb24udG9Mb3dlckNhc2UoKSA9PT0gJ3JpZ2h0JztcclxuXHJcbiAgICAgICAgY29uc3QgYWxpZ24gPSBpc1JpZ2h0ID8gJ3RleHQtcmlnaHQnIDogJ3RleHQtbGVmdCc7XHJcbiAgICAgICAgY29uc3QganVzdGlmeSA9IGlzUmlnaHQgPyAnanVzdGlmeS1jb250ZW50LWVuZCcgOiAnanVzdGlmeS1jb250ZW50LXN0YXJ0JztcclxuXHJcbiAgICAgICAgY29uc3QgbWVzc2FnZUJveFN0eWxlcyA9IHtcclxuICAgICAgICAgICAgbWF4V2lkdGg6ICc3MCUnLFxyXG4gICAgICAgICAgICBmbGV4R3JvdzogMFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2VTdHlsZXMgPSB7XHJcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcclxuICAgICAgICAgICAgbGluZUhlaWdodDogMS40LFxyXG4gICAgICAgICAgICB3aGl0ZVNwYWNlOiAncHJlLXdyYXAnXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gRGlzcGxheSB0aGUgbWVzc2FnZSwgZnJvbSB0aGUgcHJvcHNcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2B3LTEwMCBteS0xIGQtZmxleCAke2p1c3RpZnl9YH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctbGlnaHQgcm91bmRlZCBib3JkZXIgYm9yZGVyLWdyYXkgcC0yXCIgc3R5bGU9e21lc3NhZ2VCb3hTdHlsZXN9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgZC1ibG9jayB0ZXh0LXNlY29uZGFyeSAke2FsaWdufWB9IHN0eWxlPXttZXNzYWdlU3R5bGVzfT5cclxuICAgICAgICAgICAgICAgICAgICB7bWVzc2FnZX1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0TWVzc2FnZXM7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuXHJcbmNvbnN0IExheW91dCA9IHByb3BzID0+IChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLCBzaHJpbmstdG8tZml0PW5vXCIgLz5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjAuMC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiBpbnRlZ3JpdHk9XCJzaGEzODQtR241Mzg0eHFRMWFvV1hBKzA1OFJYUHhQZzZmeTRJV3ZUTmgwRTI2M1htRmNKbFNBd2lHZ0ZBVy9kQWlTNkpYbVwiIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCIgLz5cclxuICAgICAgICAgICAgPHRpdGxlPntwcm9wcy5wYWdlVGl0bGUgfHwgJ0NoYXQgd2l0aCBTZW50aW1lbnQgQW5hbHlzaXMnfTwvdGl0bGU+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIDwvRnJhZ21lbnQ+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcbiIsImltcG9ydCBDaGF0IGZyb20gJy4vQ2hhdCdcclxuaW1wb3J0IExheW91dCBmcm9tICcuL0xheW91dCdcclxuaW1wb3J0IENoYXRNZXNzYWdlcyBmcm9tICcuL0NoYXRNZXNzYWdlcydcclxuXHJcbmV4cG9ydCB7IENoYXQsIExheW91dCwgQ2hhdE1lc3NhZ2VzIH1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ2hhdCwgTGF5b3V0IH0gZnJvbSAnLi4vY29tcG9uZW50cyc7XHJcblxyXG5jbGFzcyBJbmRleFBhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHN0YXRlID0geyB1c2VyOiBudWxsIH1cclxuXHJcbiAgICBoYW5kbGVLZXlVcCA9IGV2dCA9PiB7XHJcbiAgICAgICAgaWYgKGV2dC5rZXlDb2RlID09PSAxMykge1xyXG4gICAgICAgICAgICBjb25zdCB1c2VyID0gZXZ0LnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHVzZXIgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IHVzZXIgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIGNvbnN0IG5hbWVJbnB1dFN0eWxlcyA9IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgICAgICAgY29sb3I6ICcjOTk5JyxcclxuICAgICAgICAgICAgYm9yZGVyOiAwLFxyXG4gICAgICAgICAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQgIzY2NicsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogMCxcclxuICAgICAgICAgICAgZm9udFNpemU6ICczcmVtJyxcclxuICAgICAgICAgICAgZm9udFdlaWdodDogNTAwLFxyXG4gICAgICAgICAgICBib3hTaGFkb3c6ICdub25lICFpbXBvcnRhbnQnXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPExheW91dCBwYWdlVGl0bGU9XCJSZWFsdGltZSBDaGF0XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIHBvc2l0aW9uLWFic29sdXRlIGgtMTAwIGJnLWRhcmtcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcG9zaXRpb24tYWJzb2x1dGUgdy0xMDAgaC0xMDBcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbC1tZC04IGQtZmxleCBmbGV4LXJvdyBmbGV4LXdyYXAgYWxpZ24taXRlbXMtY2VudGVyIGFsaWduLWNvbnRlbnQtY2VudGVyIHB4LTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNSBteC01XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImQtYmxvY2sgdy0xMDAgaDEgdGV4dC1saWdodFwiIHN0eWxlPXt7IG1hcmdpblRvcDogLTUwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAoPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAnIzk5OScgfX0+SGVsbG8hPC9zcGFuPiB7dXNlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYFdoYXQgaXMgeW91ciBuYW1lP2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyF1c2VyICYmIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBtdC0zIHB4LTMgcHktMlwiIG9uS2V5VXA9e3RoaXMuaGFuZGxlS2V5VXB9IGF1dG9Db21wbGV0ZT1cIm9mZlwiIHN0eWxlPXtuYW1lSW5wdXRTdHlsZXN9IC8+fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb2wtbWQtNCBwb3NpdGlvbi1yZWxhdGl2ZSBkLWZsZXggZmxleC13cmFwIGgtMTAwIGFsaWduLWl0ZW1zLXN0YXJ0IGFsaWduLWNvbnRlbnQtYmV0d2VlbiBiZy13aGl0ZSBweC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlciAmJiA8Q2hhdCBhY3RpdmVVc2VyPXt1c2VyfSAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L21haW4+XHJcblxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxyXG4gICAgPEluZGV4UGFnZSAvPlxyXG4pO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHVzaGVyLWpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=