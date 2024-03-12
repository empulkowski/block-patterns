/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/submit-review/components/BlockApp.js":
/*!*********************************************************!*\
  !*** ./src/blocks/submit-review/components/BlockApp.js ***!
  \*********************************************************/
/***/ (() => {

// import React from "react";
// import AddReviewForm from "./AddReviewForm";
// import ReviewList from "./ReviewList";
//
// export default class BlockApp extends React.Component {
// 	state = {
// 		reviews: [],
// 		loggedIn: null,
// 	};
// addReview(newReview){
// 	const review = new wp.api.models.Review(newReview);
// 	review.save().done(data => {
// 		console.log('saved!', data);
// 	}).fail(jqXHR => {
// 		console.error('failed!' , jqXHR)
// 	});
// }
//
// getReviews(getReview) {
// const reviewCollection = new wp.api.collections.Review();
// reviewCollection.fetch()
// .done(data => {
// 		console.log('reviews!', data, reviewCollection);
// 		//store the models in our state
// 	this.setState({reviews: reviewCollection.models})
// 	})
// 	.fail(jqXHR => {
// 		console.error('failed!' , jqXHR)
// 	});
// }
//
//
// getLoggedInUSer() {
// 	const user = new wp.api.models.UsersMe(); //get logged in user
// 	user.fetch()
// 		.done(user => {
// 			//logged in
// 			this.setState({loggedIn: true});
//
// 		})
// 		.fail(jqXHR=> {
// 			//not logged in
// 		this.setState({loggedIn: false});
// 	})
// }
//
//
//
// componentDidMount() {
// 	this.getReviews();
// 	this.getLoggedInUSer();
// }
//
// 	render() {
// 		return (
// 			<div>
// 				<h3>Latest Reviews</h3>
// 		<ReviewList reviews={this.state.reviews} />
// 				<hr />
// 				<h3>Submit a Review</h3>
// 				{this.state.loggedIn === true && <AddReviewForm addReview={reviewObj => this.addReview(reviewObj)}/>}
// 				{this.state.loggedIn === true && <div className="error-msg">You must be logged in to submit a review</div>}
//
// 			</div>
// 		);
// 				}}

/***/ }),

/***/ "./node_modules/react-dom/client.js":
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var m = __webpack_require__(/*! react-dom */ "react-dom");
if (false) {} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  exports.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  exports.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = window["ReactDOM"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************************************!*\
  !*** ./src/blocks/submit-review/view.js ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _components_BlockApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/BlockApp */ "./src/blocks/submit-review/components/BlockApp.js");
/* harmony import */ var _components_BlockApp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_BlockApp__WEBPACK_IMPORTED_MODULE_2__);



const blocks = document.querySelectorAll('.wp-block-ep-submit-review');
blocks.forEach(block => {
  (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(block).render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)((_components_BlockApp__WEBPACK_IMPORTED_MODULE_2___default()), null));
});
})();

/******/ })()
;
//# sourceMappingURL=view.js.map