/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/submit-recipe-review/components/AddRecipeForm.js":
/*!*********************************************************************!*\
  !*** ./src/blocks/submit-recipe-review/components/AddRecipeForm.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddRecipeForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _starRating__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./starRating */ "./src/blocks/submit-recipe-review/components/starRating.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style.scss */ "./src/blocks/submit-recipe-review/style.scss");




class AddRecipeForm extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  state = {
    title: '',
    review: '',
    rating: 0,
    range: 0
  };
  addReview(e) {
    e.preventDefault();
    const newReview = {
      title: this.state.title,
      content: this.state.review,
      acf: {
        recipe_rating: parseInt(this.state.rating) || 0,
        recipe_range: this.state.range
      },
      // maybe you should validate better before doing this?
      status: 'publish'
    };

    // we can't assume any props are provided
    // ?. only calls the method if it exists
    if (this.props && this.props.addReview) {
      this.props.addReview(newReview);
    }
    this.setState({
      title: '',
      range: 0,
      review: '',
      rating: 0
    });
  }
  render() {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
      className: "new-review-form",
      onSubmit: e => this.addReview(e)
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Recipe Name:", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "text",
      value: this.state.title,
      onInput: e => this.setState({
        title: e.target.value
      })
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Cooking Time:", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "number",
      value: this.state.range,
      onChange: e => this.setState({
        range: e.target.value
      })
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Rating:", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_starRating__WEBPACK_IMPORTED_MODULE_1__["default"], {
      rating: this.state.rating,
      setRating: rating => this.setState({
        rating
      })
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Comments:", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("textarea", {
      value: this.state.review,
      onInput: e => this.setState({
        review: e.target.value
      })
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      type: "submit"
    }, "Add Your Review"));
  }
}
;

/***/ }),

/***/ "./src/blocks/submit-recipe-review/components/BlockApp.js":
/*!****************************************************************!*\
  !*** ./src/blocks/submit-recipe-review/components/BlockApp.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BlockApp)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RecipeList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RecipeList */ "./src/blocks/submit-recipe-review/components/RecipeList.js");
/* harmony import */ var _AddRecipeForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddRecipeForm */ "./src/blocks/submit-recipe-review/components/AddRecipeForm.js");


// import AddRecipeForm from "./AddRecipeForm";
// import RecipeList from "./RecipeList";


class BlockApp extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  state = {
    reviews: [],
    loggedIn: null
  };
  addReview(newReview) {
    const review = new wp.api.models.Review(newReview);
    review.save().done(data => {
      console.log('saved!', data);
      this.getReviews();
    }).fail(jqXHR => {
      console.error('failed!', jqXHR);
    });
  }
  getReviews(getReview) {
    const reviewCollection = new wp.api.collections.Review();
    reviewCollection.fetch().done(data => {
      console.log('recipe reviews!', data, reviewCollection);
      //store the models in our state
      this.setState({
        reviews: reviewCollection.models
      });
    }).fail(jqXHR => {
      console.error('failed :/', jqXHR);
    });
  }
  getLoggedInUSer() {
    const user = new wp.api.models.UsersMe(); //get logged in user
    user.fetch().done(user => {
      //logged in
      this.setState({
        loggedIn: true
      });
    }).fail(jqXHR => {
      //not logged in
      this.setState({
        loggedIn: false
      });
    });
  }
  componentDidMount() {
    this.getReviews();
    this.getLoggedInUSer();
  }
  render() {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Latest Reviews"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_RecipeList__WEBPACK_IMPORTED_MODULE_1__["default"], {
      reviews: this.state.reviews
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Submit a Review"), this.state.loggedIn === true && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_AddRecipeForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
      addReview: reviewObj => this.addReview(reviewObj)
    }), this.state.loggedIn === false && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "error-msg"
    }, "You must be logged in to submit a review"));
  }
}

/***/ }),

/***/ "./src/blocks/submit-recipe-review/components/RecipeCard.js":
/*!******************************************************************!*\
  !*** ./src/blocks/submit-recipe-review/components/RecipeCard.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RecipeCard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _starRating__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./starRating */ "./src/blocks/submit-recipe-review/components/starRating.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style.scss */ "./src/blocks/submit-recipe-review/style.scss");




class RecipeCard extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  render() {
    let {
      title,
      range,
      review,
      rating
    } = this.props;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "recipe_card"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "recipe_title"
    }, title), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "recipe_range"
    }, range), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_starRating__WEBPACK_IMPORTED_MODULE_1__["default"], {
      rating: rating,
      readonly: true
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "recipe_content",
      dangerouslySetInnerHTML: {
        __html: review
      }
    }));
  }
}

/***/ }),

/***/ "./src/blocks/submit-recipe-review/components/RecipeList.js":
/*!******************************************************************!*\
  !*** ./src/blocks/submit-recipe-review/components/RecipeList.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RecipeList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RecipeCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RecipeCard */ "./src/blocks/submit-recipe-review/components/RecipeCard.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style.scss */ "./src/blocks/submit-recipe-review/style.scss");




class RecipeList extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  render() {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "review-list"
    }, this.props.reviews.map(review => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_RecipeCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: review.attributes.title.rendered,
      range: review.attributes.acf.recipe_range,
      review: review.attributes.content.rendered,
      rating: review.attributes.acf.recipe_rating,
      key: review.attributes.id
    })));
  }
}

/***/ }),

/***/ "./src/blocks/submit-recipe-review/components/starRating.js":
/*!******************************************************************!*\
  !*** ./src/blocks/submit-recipe-review/components/starRating.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StarRating)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style.scss */ "./src/blocks/submit-recipe-review/style.scss");



function StarRating({
  rating,
  setRating,
  readonly
}) {
  const [hover, setHover] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(rating || 0);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: readonly ? 'readonly stars' : "stars"
  }, [1, 2, 3, 4, 5].map(star => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: star <= hover ? 'star on' : 'star off',
    onClick: () => {
      setRating(star);
    },
    onMouseEnter: () => setHover(star),
    onMouseLeave: () => setHover(rating)
  }, "*")));
}

/***/ }),

/***/ "./src/blocks/submit-recipe-review/view.js":
/*!*************************************************!*\
  !*** ./src/blocks/submit-recipe-review/view.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _components_BlockApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/BlockApp */ "./src/blocks/submit-recipe-review/components/BlockApp.js");



const blocks = document.querySelectorAll('.wp-block-ep-submit-recipe-review');
blocks.forEach(block => {
  (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(block).render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_BlockApp__WEBPACK_IMPORTED_MODULE_2__["default"], null));
});

/***/ }),

/***/ "./src/blocks/submit-recipe-review/style.scss":
/*!****************************************************!*\
  !*** ./src/blocks/submit-recipe-review/style.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/react-dom/client.js":
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



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

module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"blocks/submit-recipe-review/view": 0,
/******/ 			"blocks/submit-recipe-review/style-view": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkportfolio_list"] = globalThis["webpackChunkportfolio_list"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/submit-recipe-review/style-view"], () => (__webpack_require__("./src/blocks/submit-recipe-review/view.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=view.js.map