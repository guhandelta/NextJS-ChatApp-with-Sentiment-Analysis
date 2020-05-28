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
/* harmony import */ var _ChatMessages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ChatMessages */ "./components/ChatMessages.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const SAD_EMOJI = [55357, 56864];
const HAPPY_EMOJI = [55357, 56832];
const NEUTRAL_EMOJI = [55357, 56848];

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
    }, this.state.chats.map((chat, index) => {
      // Iterate through the chatsarray propertities, in the state, to check if...
      //... the sender of the message is the same as the currently active user and use that to determine the position of the...
      //... displayed chat message
      const previous = Math.max(0, index - 1);
      const previousChat = this.state.chats[previous];
      const position = chat.user === this.props.activeUser ? "right" : "left"; // Current chat message is the first in the list

      const isFirst = previous === index; // Current chat message directly follows a message from another user

      const inSequence = chat.user === previousChat.user; // Current chat message has a delay of over 1 minute from the previous message of the same user

      const hasDelay = Math.ceil((chat.timestamp - previousChat.timestamp) / (1000 * 60)) > 1; // Set the mood of the user while typing the message to either happy, sad or neutral using the earlier defined constants...
      //...using the sentiment score in the chat object

      const mood = chat.sentiment > 0 ? HAPPY_EMOJI : chat.sentiment === 0 ? NEUTRAL_EMOJI : SAD_EMOJI;
      return (// Global_Objects/String/fromCodePoint
        // String.fromCodePoint(...mood) => fn() added in ES6 to get the emoji from the code points defined in constants earlier
        __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          key: index
        }, (isFirst || !inSequence || hasDelay) && __jsx("div", {
          className: `d-block w-100 font-weight-bold text-dark mt-4 pb-1 px-1 text-${position}`,
          style: {
            fontSize: '0.9rem'
          }
        }, __jsx("span", {
          className: "d-block",
          style: {
            fontSize: '1.6rem'
          }
        }, String.fromCodePoint(...mood)), __jsx("span", null, chat.user || 'Anonymous')), __jsx(_ChatMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
          message: chat.message,
          position: position
        }))
      );
    }), __jsx("textarea", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DaGF0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2hhdE1lc3NhZ2VzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwdXNoZXItanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbIlNBRF9FTU9KSSIsIkhBUFBZX0VNT0pJIiwiTkVVVFJBTF9FTU9KSSIsIkNoYXQiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNoYXRzIiwiZXZ0IiwidmFsdWUiLCJ0YXJnZXQiLCJrZXlDb2RlIiwic2hpZnRLZXkiLCJhY3RpdmVVc2VyIiwidXNlciIsInByb3BzIiwiY2hhdCIsIm1lc3NhZ2UiLCJ0aW1lc3RhbXAiLCJEYXRlIiwiYXhpb3MiLCJwb3N0IiwiY29tcG9uZW50RGlkTW91bnQiLCJwdXNoZXIiLCJQdXNoZXIiLCJwcm9jZXNzIiwiY2x1c3RlciIsImVuY3J5cHRlZCIsImNoYW5uZWwiLCJzdWJzY3JpYmUiLCJiaW5kIiwic3RhdGUiLCJwdXNoIiwic2V0U3RhdGUiLCJjb25uZWN0aW9uIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsIm1lc3NhZ2VzIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJkaXNjb25uZWN0IiwicmVuZGVyIiwiaGVpZ2h0IiwibWluSGVpZ2h0IiwibWFwIiwiaW5kZXgiLCJwcmV2aW91cyIsIk1hdGgiLCJtYXgiLCJwcmV2aW91c0NoYXQiLCJwb3NpdGlvbiIsImlzRmlyc3QiLCJpblNlcXVlbmNlIiwiaGFzRGVsYXkiLCJjZWlsIiwibW9vZCIsInNlbnRpbWVudCIsImZvbnRTaXplIiwiU3RyaW5nIiwiZnJvbUNvZGVQb2ludCIsImhhbmRsZUtleVVwIiwicmVzaXplIiwiQ2hhdE1lc3NhZ2VzIiwiaXNSaWdodCIsInRvTG93ZXJDYXNlIiwiYWxpZ24iLCJqdXN0aWZ5IiwibWVzc2FnZUJveFN0eWxlcyIsIm1heFdpZHRoIiwiZmxleEdyb3ciLCJtZXNzYWdlU3R5bGVzIiwiZm9udFdlaWdodCIsImxpbmVIZWlnaHQiLCJ3aGl0ZVNwYWNlIiwiTGF5b3V0IiwicGFnZVRpdGxlIiwiY2hpbGRyZW4iLCJJbmRleFBhZ2UiLCJuYW1lSW5wdXRTdHlsZXMiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJib3JkZXIiLCJib3JkZXJCb3R0b20iLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJtYXJnaW5Ub3AiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFB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QUFBUyxlQUFTLEVBQUM7QUFBbkIsT0FDS2hFLElBQUksSUFBSSxNQUFDLGdEQUFEO0FBQU0sZ0JBQVUsRUFBRUE7QUFBbEIsTUFEYixDQXBCSixDQUZKLENBRkosQ0FESjtBQW1DSDs7QUE1RDZCOztBQWdFbkIscUVBQ1gsTUFBQyxTQUFELE9BREosRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgUHVzaGVyIGZyb20gJ3B1c2hlci1qcyc7XHJcblxyXG5pbXBvcnQgQ2hhdE1lc3NhZ2VzIGZyb20gJy4vQ2hhdE1lc3NhZ2VzJztcclxuXHJcbmNvbnN0IFNBRF9FTU9KSSA9IFs1NTM1NywgNTY4NjRdO1xyXG5jb25zdCBIQVBQWV9FTU9KSSA9IFs1NTM1NywgNTY4MzJdO1xyXG5jb25zdCBORVVUUkFMX0VNT0pJID0gWzU1MzU3LCA1Njg0OF07XHJcblxyXG5jbGFzcyBDaGF0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICBjaGF0czogW10gLy9Jbml0aWFsaXplIHRoZSBzdGF0ZSB3aXRoIGFuIGVtcHR5IGNoYXRzIGFycmF5IHByb3BlcnR5XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgLy8gU2V0dXAgYSBQdXNoZXIgY29ubmVjdGlvbiB3aGVuIHRoZSBjb21wb25lbnQgbW91bnRzXHJcbiAgICAgICAgdGhpcy5wdXNoZXIgPSBuZXcgUHVzaGVyKHByb2Nlc3MuZW52LlBVU0hFUl9BUFBfS0VZLCB7XHJcbiAgICAgICAgICAgIGNsdXN0ZXI6IHByb2Nlc3MuZW52LlBVU0hFUl9BUFBfQ0xVU1RFUixcclxuICAgICAgICAgICAgZW5jcnlwdGVkOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFNldHVwIGEgQ2hhbm5lbCBzdWJzY3JpcHRpb24gdG8gYSBQdXNoZXIgY2hhbm5lbCAqY2hhdC1yb29tKiB3aGVuIHRoZSBjb21wb25lbnQgbW91bnRzXHJcbiAgICAgICAgdGhpcy5jaGFubmVsID0gdGhpcy5wdXNoZXIuc3Vic2NyaWJlKCdjaGF0LXJvb20nKTtcclxuXHJcbiAgICAgICAgLy8gQmluZGluZyB0byB0aGUgbmV3LW1lc3NhZ2UgZXZlbnQgb24gdGhlIGNoYW5uZWwsIHdoaWNoIGdldHMgdHJpZ2dlcmVkIHdoZW4gYSBuZXcgY2hhdCBtZXNzYWdlIGNvbWVzIGluXHJcbiAgICAgICAgdGhpcy5jaGFubmVsLmJpbmQoJ25ldy1tZXNzYWdlJywgKHsgY2hhdCA9IG51bGwgfSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB7IGNoYXRzIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgICAgICBjaGF0ICYmIGNoYXRzLnB1c2goY2hhdCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjaGF0cyB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBCaW5kaW5nIHRoZSBjb25uZWN0ZWQgZXZlbnQgb24gdGhlIFB1c2hlciBjbGllbnQsIG9uIGEgZnJlc2ggY29ubmVjdGlvblxyXG4gICAgICAgIHRoaXMucHVzaGVyLmNvbm5lY3Rpb24uYmluZCgnY29ubmVjdGVkJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBheGlvcy5wb3N0KCcvbWVzc2FnZXMnKSAvLyBGZXRjaCBhbGwgdGhlIGNoYXQgbWVzc2FnZXMgZnJvbSBoaXN0b3J5IGJ5IG1ha2luZyBhIFBPU1QgL21lc3NhZ2VzIEhUVFAgcmVxdWVzdCB1c2luZyB0aGUgYXhpb3NcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGF0cyA9IHJlc3BvbnNlLmRhdGEubWVzc2FnZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNoYXRzIH0pOyAvLyBTZXQgdGhlIGZldGNoZWQgbWVzc2FnZXMgdG8gdGhlIHN0YXRlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5wdXNoZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUtleVVwID0gZXZ0ID0+IHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGV2dC50YXJnZXQudmFsdWU7XHJcblxyXG4gICAgICAgIGlmIChldnQua2V5Q29kZSA9PT0gMTMgJiYgIWV2dC5zaGlmdEtleSkge1xyXG4gICAgICAgICAgICBjb25zdCB7IGFjdGl2ZVVzZXI6IHVzZXIgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgICAgIC8vIENvbnN0cnVjdCBhIGNoYXQgb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHVzZXIgc2VuZGluZyB0aGUgbWVzc2FnZSAoY3VycmVudGx5IGFjdGl2ZSB1c2VyKSwgbWVzc2FnZSAmIHRpbWVzdGFtcFxyXG4gICAgICAgICAgICBjb25zdCBjaGF0ID0geyB1c2VyLCBtZXNzYWdlOiB2YWx1ZSwgdGltZXN0YW1wOiArbmV3IERhdGUgfTtcclxuICAgICAgICAgICAgLy8gQ2xlYXIgdGhlIHRleHRhcmVhXHJcbiAgICAgICAgICAgIGV2dC50YXJnZXQudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgLy8gUGFzcyB0aGUgY2hhdCBvYmplY3QgYXMgcGF5bG9hZCwgb3ZlciBhIFBPU1QgL21lc3NhZ2UgSFRUUCByZXF1ZXN0XHJcbiAgICAgICAgICAgIGF4aW9zLnBvc3QoJy9tZXNzYWdlJywgY2hhdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICAvKiBhY3RpdmVVc2VyIHByb3AgdG8gaWRlbnRpZnkgdGhlIGN1cnJlbnRseSBhY3RpdmUgdXNlciAqL1xyXG4gICAgICAgIHJldHVybiAodGhpcy5wcm9wcy5hY3RpdmVVc2VyICYmIDxGcmFnbWVudD5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLWJvdHRvbSBib3JkZXItZ3JheSB3LTEwMCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGJnLXdoaXRlXCIgc3R5bGU9e3sgaGVpZ2h0OiA5MCB9fT5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWRhcmsgbWItMCBteC00IHB4LTJcIj57dGhpcy5wcm9wcy5hY3RpdmVVc2VyfTwvaDI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItdG9wIGJvcmRlci1ncmF5IHctMTAwIHB4LTQgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBiZy1saWdodFwiIHN0eWxlPXt7IG1pbkhlaWdodDogOTAgfX0+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jaGF0cy5tYXAoKGNoYXQsIGluZGV4KSA9PiB7ICAvLyBJdGVyYXRlIHRocm91Z2ggdGhlIGNoYXRzYXJyYXkgcHJvcGVydGl0aWVzLCBpbiB0aGUgc3RhdGUsIHRvIGNoZWNrIGlmLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgLy8uLi4gdGhlIHNlbmRlciBvZiB0aGUgbWVzc2FnZSBpcyB0aGUgc2FtZSBhcyB0aGUgY3VycmVudGx5IGFjdGl2ZSB1c2VyIGFuZCB1c2UgdGhhdCB0byBkZXRlcm1pbmUgdGhlIHBvc2l0aW9uIG9mIHRoZS4uLlxyXG4gICAgICAgICAgICAgICAgICAgIC8vLi4uIGRpc3BsYXllZCBjaGF0IG1lc3NhZ2VcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJldmlvdXMgPSBNYXRoLm1heCgwLCBpbmRleCAtIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzQ2hhdCA9IHRoaXMuc3RhdGUuY2hhdHNbcHJldmlvdXNdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gY2hhdC51c2VyID09PSB0aGlzLnByb3BzLmFjdGl2ZVVzZXIgPyBcInJpZ2h0XCIgOiBcImxlZnRcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ3VycmVudCBjaGF0IG1lc3NhZ2UgaXMgdGhlIGZpcnN0IGluIHRoZSBsaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNGaXJzdCA9IHByZXZpb3VzID09PSBpbmRleDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBDdXJyZW50IGNoYXQgbWVzc2FnZSBkaXJlY3RseSBmb2xsb3dzIGEgbWVzc2FnZSBmcm9tIGFub3RoZXIgdXNlclxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluU2VxdWVuY2UgPSBjaGF0LnVzZXIgPT09IHByZXZpb3VzQ2hhdC51c2VyO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEN1cnJlbnQgY2hhdCBtZXNzYWdlIGhhcyBhIGRlbGF5IG9mIG92ZXIgMSBtaW51dGUgZnJvbSB0aGUgcHJldmlvdXMgbWVzc2FnZSBvZiB0aGUgc2FtZSB1c2VyXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaGFzRGVsYXkgPSBNYXRoLmNlaWwoKGNoYXQudGltZXN0YW1wIC0gcHJldmlvdXNDaGF0LnRpbWVzdGFtcCkgLyAoMTAwMCAqIDYwKSkgPiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNldCB0aGUgbW9vZCBvZiB0aGUgdXNlciB3aGlsZSB0eXBpbmcgdGhlIG1lc3NhZ2UgdG8gZWl0aGVyIGhhcHB5LCBzYWQgb3IgbmV1dHJhbCB1c2luZyB0aGUgZWFybGllciBkZWZpbmVkIGNvbnN0YW50cy4uLlxyXG4gICAgICAgICAgICAgICAgICAgIC8vLi4udXNpbmcgdGhlIHNlbnRpbWVudCBzY29yZSBpbiB0aGUgY2hhdCBvYmplY3RcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb29kID0gY2hhdC5zZW50aW1lbnQgPiAwID8gSEFQUFlfRU1PSkkgOiAoY2hhdC5zZW50aW1lbnQgPT09IDAgPyBORVVUUkFMX0VNT0pJIDogU0FEX0VNT0pJKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gR2xvYmFsX09iamVjdHMvU3RyaW5nL2Zyb21Db2RlUG9pbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3RyaW5nLmZyb21Db2RlUG9pbnQoLi4ubW9vZCkgPT4gZm4oKSBhZGRlZCBpbiBFUzYgdG8gZ2V0IHRoZSBlbW9qaSBmcm9tIHRoZSBjb2RlIHBvaW50cyBkZWZpbmVkIGluIGNvbnN0YW50cyBlYXJsaWVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGcmFnbWVudCBrZXk9e2luZGV4fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KGlzRmlyc3QgfHwgIWluU2VxdWVuY2UgfHwgaGFzRGVsYXkpICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGQtYmxvY2sgdy0xMDAgZm9udC13ZWlnaHQtYm9sZCB0ZXh0LWRhcmsgbXQtNCBwYi0xIHB4LTEgdGV4dC0ke3Bvc2l0aW9ufWB9IHN0eWxlPXt7IGZvbnRTaXplOiAnMC45cmVtJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZC1ibG9ja1wiIHN0eWxlPXt7IGZvbnRTaXplOiAnMS42cmVtJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtTdHJpbmcuZnJvbUNvZGVQb2ludCguLi5tb29kKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Y2hhdC51c2VyIHx8ICdBbm9ueW1vdXMnfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoYXRNZXNzYWdlcyBtZXNzYWdlPXtjaGF0Lm1lc3NhZ2V9IHBvc2l0aW9uPXtwb3NpdGlvbn0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgcHgtMyBweS0yXCIgb25LZXlVcD17dGhpcy5oYW5kbGVLZXlVcH0gcGxhY2Vob2xkZXI9XCJFbnRlciBhIGNoYXQgbWVzc2FnZVwiIHN0eWxlPXt7IHJlc2l6ZTogJ25vbmUnIH19PjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L0ZyYWdtZW50PilcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXQ7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBDaGF0TWVzc2FnZXMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICAvLyBUaGlzIGNvbXBvbmVudCByZXF1aXJlcyB0d28gcHJvcHM6IG1lc3NhZ2UgZm9yIHRoZSBjaGF0IG1lc3NhZ2UgYW5kIHBvc2l0aW9uIG9mIHRoZSBtZXNzYWdlIC0+IGVpdGhlciByaWdodCBvciBsZWZ0LC4uLlxyXG4gICAgICAgIC8vLi4uIHJlc3BlY3RpdmUgdG8gdGhlIHVzZXIncyBzY3JlZW5cclxuICAgICAgICBjb25zdCB7IHBvc2l0aW9uID0gJ2xlZnQnLCBtZXNzYWdlIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IGlzUmlnaHQgPSBwb3NpdGlvbi50b0xvd2VyQ2FzZSgpID09PSAncmlnaHQnO1xyXG5cclxuICAgICAgICBjb25zdCBhbGlnbiA9IGlzUmlnaHQgPyAndGV4dC1yaWdodCcgOiAndGV4dC1sZWZ0JztcclxuICAgICAgICBjb25zdCBqdXN0aWZ5ID0gaXNSaWdodCA/ICdqdXN0aWZ5LWNvbnRlbnQtZW5kJyA6ICdqdXN0aWZ5LWNvbnRlbnQtc3RhcnQnO1xyXG5cclxuICAgICAgICBjb25zdCBtZXNzYWdlQm94U3R5bGVzID0ge1xyXG4gICAgICAgICAgICBtYXhXaWR0aDogJzcwJScsXHJcbiAgICAgICAgICAgIGZsZXhHcm93OiAwXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgbWVzc2FnZVN0eWxlcyA9IHtcclxuICAgICAgICAgICAgZm9udFdlaWdodDogNTAwLFxyXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiAxLjQsXHJcbiAgICAgICAgICAgIHdoaXRlU3BhY2U6ICdwcmUtd3JhcCdcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBEaXNwbGF5IHRoZSBtZXNzYWdlLCBmcm9tIHRoZSBwcm9wc1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17YHctMTAwIG15LTEgZC1mbGV4ICR7anVzdGlmeX1gfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1saWdodCByb3VuZGVkIGJvcmRlciBib3JkZXItZ3JheSBwLTJcIiBzdHlsZT17bWVzc2FnZUJveFN0eWxlc30+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BkLWJsb2NrIHRleHQtc2Vjb25kYXJ5ICR7YWxpZ259YH0gc3R5bGU9e21lc3NhZ2VTdHlsZXN9PlxyXG4gICAgICAgICAgICAgICAgICAgIHttZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXRNZXNzYWdlcztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5cclxuY29uc3QgTGF5b3V0ID0gcHJvcHMgPT4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIHNocmluay10by1maXQ9bm9cIiAvPlxyXG4gICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMC4wL2Nzcy9ib290c3RyYXAubWluLmNzc1wiIGludGVncml0eT1cInNoYTM4NC1HbjUzODR4cVExYW9XWEErMDU4UlhQeFBnNmZ5NElXdlROaDBFMjYzWG1GY0psU0F3aUdnRkFXL2RBaVM2SlhtXCIgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIiAvPlxyXG4gICAgICAgICAgICA8dGl0bGU+e3Byb3BzLnBhZ2VUaXRsZSB8fCAnQ2hhdCB3aXRoIFNlbnRpbWVudCBBbmFseXNpcyd9PC90aXRsZT5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgPC9GcmFnbWVudD5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuIiwiaW1wb3J0IENoYXQgZnJvbSAnLi9DaGF0J1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vTGF5b3V0J1xyXG5pbXBvcnQgQ2hhdE1lc3NhZ2VzIGZyb20gJy4vQ2hhdE1lc3NhZ2VzJ1xyXG5cclxuZXhwb3J0IHsgQ2hhdCwgTGF5b3V0LCBDaGF0TWVzc2FnZXMgfVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDaGF0LCBMYXlvdXQgfSBmcm9tICcuLi9jb21wb25lbnRzJztcclxuXHJcbmNsYXNzIEluZGV4UGFnZSBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgc3RhdGUgPSB7IHVzZXI6IG51bGwgfVxyXG5cclxuICAgIGhhbmRsZUtleVVwID0gZXZ0ID0+IHtcclxuICAgICAgICBpZiAoZXZ0LmtleUNvZGUgPT09IDEzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBldnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdXNlciB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgdXNlciB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgY29uc3QgbmFtZUlucHV0U3R5bGVzID0ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICAgICAgICBjb2xvcjogJyM5OTknLFxyXG4gICAgICAgICAgICBib3JkZXI6IDAsXHJcbiAgICAgICAgICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjNjY2JyxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAwLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogJzNyZW0nLFxyXG4gICAgICAgICAgICBmb250V2VpZ2h0OiA1MDAsXHJcbiAgICAgICAgICAgIGJveFNoYWRvdzogJ25vbmUgIWltcG9ydGFudCdcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TGF5b3V0IHBhZ2VUaXRsZT1cIlJlYWx0aW1lIENoYXRcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgcG9zaXRpb24tYWJzb2x1dGUgaC0xMDAgYmctZGFya1wiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBwb3NpdGlvbi1hYnNvbHV0ZSB3LTEwMCBoLTEwMFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29sLW1kLTggZC1mbGV4IGZsZXgtcm93IGZsZXgtd3JhcCBhbGlnbi1pdGVtcy1jZW50ZXIgYWxpZ24tY29udGVudC1jZW50ZXIgcHgtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC01IG14LTVcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZC1ibG9jayB3LTEwMCBoMSB0ZXh0LWxpZ2h0XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiAtNTAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICg8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICcjOTk5JyB9fT5IZWxsbyE8L3NwYW4+IHt1c2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBgV2hhdCBpcyB5b3VyIG5hbWU/YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IXVzZXIgJiYgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG10LTMgcHgtMyBweS0yXCIgb25LZXlVcD17dGhpcy5oYW5kbGVLZXlVcH0gYXV0b0NvbXBsZXRlPVwib2ZmXCIgc3R5bGU9e25hbWVJbnB1dFN0eWxlc30gLz59XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbC1tZC00IHBvc2l0aW9uLXJlbGF0aXZlIGQtZmxleCBmbGV4LXdyYXAgaC0xMDAgYWxpZ24taXRlbXMtc3RhcnQgYWxpZ24tY29udGVudC1iZXR3ZWVuIGJnLXdoaXRlIHB4LTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyICYmIDxDaGF0IGFjdGl2ZVVzZXI9e3VzZXJ9IC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvbWFpbj5cclxuXHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXHJcbiAgICA8SW5kZXhQYWdlIC8+XHJcbik7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwdXNoZXItanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==