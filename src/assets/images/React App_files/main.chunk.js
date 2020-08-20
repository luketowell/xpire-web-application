(this["webpackJsonpxpire-web-application"] = this["webpackJsonpxpire-web-application"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/css/style.css":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/css/style.css ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".Header {\n  margin: auto;\n  text-align: center;\n  padding: 10px; }\n  .Header img {\n    object-fit: contain;\n    margin-left: -9rem;\n    position: absolute; }\n  .Header .header-text {\n    margin-top: 22rem; }\n\n.NavLinks {\n  margin-left: 2.5rem;\n  list-style-type: none;\n  overflow: hidden;\n  padding-bottom: 2rem; }\n  .NavLinks li {\n    display: inline-block;\n    color: #777;\n    padding: 1rem;\n    font-size: 2rem;\n    border-right: 2px Solid #777; }\n    .NavLinks li a {\n      text-decoration: none; }\n      .NavLinks li a:visited {\n        color: #777; }\n      .NavLinks li a:hover {\n        text-decoration: underline;\n        color: black; }\n    .NavLinks li:last-child {\n      border-right: none; }\n\n.category {\n  width: 100%;\n  padding-top: 2rem;\n  display: block; }\n  .category:hover {\n    cursor: pointer; }\n  .category .categoryThumbnail {\n    height: 150px; }\n\n.ItemList {\n  background: #D3D3D3;\n  border: solid 2px #777;\n  border-radius: 10px;\n  overflow-y: scroll;\n  max-height: 50rem; }\n\n.ItemCard {\n  display: inline-block;\n  position: relative;\n  border: solid 1px #777;\n  border-radius: 10px;\n  text-align: left;\n  width: 95%;\n  margin: 1rem auto;\n  background: #fff;\n  overflow: hidden; }\n  .ItemCard .ItemImage {\n    padding: 0.5rem;\n    float: left; }\n  .ItemCard .ItemText {\n    position: absolute;\n    margin: 0;\n    top: 25%;\n    left: 15%;\n    overflow: hidden; }\n\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit; }\n\nhtml {\n  font-size: 62.5%; }\n\nbody {\n  box-sizing: border-box; }\n\nbody {\n  font-family: \"Lato\", sans-serif;\n  font-weight: 400;\n  line-height: 1.7;\n  color: #777;\n  box-sizing: border-box;\n  padding: 3rem; }\n\n.row {\n  max-width: 100%;\n  margin-bottom: 8rem; }\n  .row:last-child {\n    margin-bottom: 0; }\n  .row::after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .row [class^=\"col-\"] {\n    float: left; }\n    .row [class^=\"col-\"]:not(:last-child) {\n      margin-right: 6rem; }\n  .row .col-1-of-2 {\n    width: calc((100% - 6rem) / 2); }\n  .row .col-1-of-3 {\n    width: calc((100% - 2 * 6rem) / 3); }\n  .row .col-1-of-4 {\n    width: calc((100% - 3 * 6rem) / 4); }\n  .row .col-2-of-3 {\n    width: calc( (2 * (100% - 2 * 6rem) / 3) + 6rem); }\n  .row .col-2-of-4 {\n    width: calc( (2 * (100% - 3 * 6rem) / 4) + 6rem); }\n  .row .col-3-of-4 {\n    width: calc( (3 * (100% - 3 * 6rem) / 4) + 2 *6rem); }\n\n.PageContent {\n  margin: auto;\n  padding: 2rem 0;\n  width: 75%;\n  text-align: center; }\n  .PageContent p {\n    font-size: 2rem; }\n\n.LoginPage {\n  padding-top: 15rem;\n  margin: auto;\n  text-align: center; }\n  .LoginPage .text button {\n    margin: 3rem;\n    padding: 2rem;\n    padding-left: 3rem;\n    padding-right: 3rem;\n    text-transform: uppercase;\n    background-color: white;\n    border: 2px Solid #777;\n    border-radius: 1rem;\n    box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.3); }\n    .LoginPage .text button:hover {\n      background-color: #D3D3D3;\n      color: #fff;\n      transform: translateY(-0.3rem);\n      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2); }\n    .LoginPage .text button:active {\n      transform: translateY(-0.1rem);\n      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2); }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Navigation/Navigation */ "./src/components/Navigation/Navigation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
var _jsxFileName = "/Users/luketowell/Development/Xpire/xpire-web-application/src/App.js";





function App() {
  console.log(`app running in the ${_constants__WEBPACK_IMPORTED_MODULE_3__["ENV"]} environment`);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/assets/images/asda.png":
/*!************************************!*\
  !*** ./src/assets/images/asda.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/asda.5def45c1.png";

/***/ }),

/***/ "./src/assets/images/logo.png":
/*!************************************!*\
  !*** ./src/assets/images/logo.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/logo.4fb6f248.png";

/***/ }),

/***/ "./src/assets/mocks/user.js":
/*!**********************************!*\
  !*** ./src/assets/mocks/user.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const user = {
  userName: "sgltowel",
  name: "Luke Towell",
  storeId: "4128"
};
/* harmony default export */ __webpack_exports__["default"] = (user);

/***/ }),

/***/ "./src/components/Category/Category.js":
/*!*********************************************!*\
  !*** ./src/components/Category/Category.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _assets_images_asda_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/asda.png */ "./src/assets/images/asda.png");
/* harmony import */ var _assets_images_asda_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_asda_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions/item */ "./src/redux/actions/item.js");
var _jsxFileName = "/Users/luketowell/Development/Xpire/xpire-web-application/src/components/Category/Category.js";





class Category extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    this.renderImage = categoryData => {
      if (categoryData.image_url) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: categoryData.image_url,
          alt: "Category thumbnail Image",
          className: "categoryThumbnail",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 17
          }
        });
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _assets_images_asda_png__WEBPACK_IMPORTED_MODULE_2___default.a,
        alt: "Category thumbnail Image",
        className: "categoryThumbnail",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 13
        }
      });
    };
  }

  render() {
    const {
      categoryData
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "category",
      onClick: () => {
        this.props.getCategoryItems(categoryData.id);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }
    }, categoryData.name), this.renderImage(categoryData));
  }

}

const mapStateToProps = state => {
  return {
    items: state.items
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  getCategoryItems: _redux_actions_item__WEBPACK_IMPORTED_MODULE_3__["getCategoryItems"]
})(Category));

/***/ }),

/***/ "./src/components/Category/CategoryContainer.js":
/*!******************************************************!*\
  !*** ./src/components/Category/CategoryContainer.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/actions/item */ "./src/redux/actions/item.js");
/* harmony import */ var _Category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Category */ "./src/components/Category/Category.js");
var _jsxFileName = "/Users/luketowell/Development/Xpire/xpire-web-application/src/components/Category/CategoryContainer.js";





class CategoryContainer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    this.renderContainers = () => {
      let {
        items
      } = this.props;

      if (items.categoryStatus === "pending") {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 17
          }
        }, "Loading...");
      } else if (items.categories === "failed") {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 17
          }
        }, "There has been an issue retrieving your containers from the DB.");
      } else {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "row",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 17
          }
        }, items.categories.map((category, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "col-1-of-3",
          key: index,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 25
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Category__WEBPACK_IMPORTED_MODULE_3__["default"], {
          categoryData: category,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 29
          }
        }))));
      }
    };
  }

  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    console.log(this.props);
    return this.renderContainers();
  }

}

const mapStateToProps = state => {
  return {
    items: state.items
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  getCategories: _redux_actions_item__WEBPACK_IMPORTED_MODULE_2__["getCategories"]
})(CategoryContainer));

/***/ }),

/***/ "./src/components/Header/Header.js":
/*!*****************************************!*\
  !*** ./src/components/Header/Header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navigation_NavLinks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Navigation/NavLinks */ "./src/components/Navigation/NavLinks.js");
/* harmony import */ var _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/logo.png */ "./src/assets/images/logo.png");
/* harmony import */ var _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_logo_png__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/luketowell/Development/Xpire/xpire-web-application/src/components/Header/Header.js";




class Header extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "Header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_2___default.a,
      height: 200,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "header-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navigation_NavLinks__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 21
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 21
      }
    }, this.props.name)));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/ItemList/ItemCard.js":
/*!*********************************************!*\
  !*** ./src/components/ItemList/ItemCard.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _jsxFileName = "/Users/luketowell/Development/Xpire/xpire-web-application/src/components/ItemList/ItemCard.js";



class ItemCard extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "ItemCard",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "ItemImage",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: this.props.itemDetails.img_url,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 21
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "ItemText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 21
      }
    }, "Item Name: ", this.props.itemDetails.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 21
      }
    }, "Item UPC: ", this.props.itemDetails.item_upc)));
  }

}

const mapStateToProps = state => {
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(ItemCard));

/***/ }),

/***/ "./src/components/ItemList/ItemList.js":
/*!*********************************************!*\
  !*** ./src/components/ItemList/ItemList.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ItemCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ItemCard */ "./src/components/ItemList/ItemCard.js");
var _jsxFileName = "/Users/luketowell/Development/Xpire/xpire-web-application/src/components/ItemList/ItemList.js";




class ItemList extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    this.renderItemList = () => {
      let {
        items
      } = this.props;
      console.log(items.categoryItems.length);

      if (items.categoryItems.length === 0 && items.categoryItemsStatus === "completed") {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 17
          }
        }, "There are no items listed for this category");
      } else if (items.categoryItemsStatus === "failed") {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 17
          }
        }, "We have been unable to retrieve your items from the Database");
      } else if (items.categoryItemsStatus === "Pending") {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 17
          }
        }, "Loading item information...");
      } else if (items.categoryItemsStatus === "") {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 17
          }
        }, "Please select a category to view item details for your store.");
      } else {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 17
          }
        }, items.categoryItems.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ItemCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
          itemDetails: item,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 21
          }
        })));
      }
    };
  }

  render() {
    let {
      items
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "ItemList",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }
    }, this.renderItemList());
  }

}

const mapStateToProps = state => {
  return {
    items: state.items
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {})(ItemList));

/***/ }),

/***/ "./src/components/Navigation/NavLinks.js":
/*!***********************************************!*\
  !*** ./src/components/Navigation/NavLinks.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/luketowell/Development/Xpire/xpire-web-application/src/components/Navigation/NavLinks.js";



class NavLinks extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "NavLinks",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/home",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 25
      }
    }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/metrics",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 25
      }
    }, "Metrics")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/storeinfo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 25
      }
    }, "Store Info"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (NavLinks);

/***/ }),

/***/ "./src/components/Navigation/Navigation.js":
/*!*************************************************!*\
  !*** ./src/components/Navigation/Navigation.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages */ "./src/pages/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _jsxFileName = "/Users/luketowell/Development/Xpire/xpire-web-application/src/components/Navigation/Navigation.js";





class Navigation extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      exact: true,
      path: "/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 23
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages__WEBPACK_IMPORTED_MODULE_2__["Login"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 27
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PrivateRoute, {
      path: "/home",
      authed: this.props.auth.userAuthed,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 23
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages__WEBPACK_IMPORTED_MODULE_2__["Home"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 27
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PrivateRoute, {
      path: "/metrics",
      authed: this.props.auth.userAuthed,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 23
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages__WEBPACK_IMPORTED_MODULE_2__["Metrics"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 27
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PrivateRoute, {
      path: "/storeinfo",
      authed: this.props.auth.userAuthed,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 23
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages__WEBPACK_IMPORTED_MODULE_2__["StoreInfo"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 27
      }
    })))));
  }

}

function PrivateRoute({
  authed,
  children,
  ...rest
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], Object.assign({}, rest, {
    render: ({
      location
    }) => authed ? children : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
      to: {
        pathname: "/",
        state: {
          from: location
        }
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 13
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }));
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, {})(Navigation));

/***/ }),

/***/ "./src/components/TextComponents/HomeText.js":
/*!***************************************************!*\
  !*** ./src/components/TextComponents/HomeText.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
/* harmony import */ var _redux_actions_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions/auth */ "./src/redux/actions/auth.js");
/* harmony import */ var _utils_currentStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/currentStore */ "./src/utils/currentStore.js");
var _jsxFileName = "/Users/luketowell/Development/Xpire/xpire-web-application/src/components/TextComponents/HomeText.js";






class HomeText extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    let {
      user,
      stores
    } = this.props.auth;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }
    }, "Hello ", user.name, ", welcome to Xpire!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }
    }, "Your one stop shop for in store food wastage."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }
    }, "Your current store is ", Object(_utils_currentStore__WEBPACK_IMPORTED_MODULE_4__["default"])(this.props.auth)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_2__["default"], {
      options: stores,
      value: stores.filter(stores => stores.value === Object(_utils_currentStore__WEBPACK_IMPORTED_MODULE_4__["default"])(this.props.auth)),
      onChange: selected => this.props.setChosenStore(selected),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }
    }));
  }

}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    items: state.items
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  setChosenStore: _redux_actions_auth__WEBPACK_IMPORTED_MODULE_3__["setChosenStore"]
})(HomeText));

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: ENV, HOST_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENV", function() { return ENV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOST_URL", function() { return HOST_URL; });
const ENV = "local";
const HOST_URL = "http://localhost:8080";

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./style.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/css/style.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./style.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/css/style.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./style.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/css/style.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./redux */ "./src/redux/index.js");
var _jsxFileName = "/Users/luketowell/Development/Xpire/xpire-web-application/src/index.js";






Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
  store: _redux__WEBPACK_IMPORTED_MODULE_5__["default"],
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }
})), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header/Header */ "./src/components/Header/Header.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_TextComponents_HomeText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/TextComponents/HomeText */ "./src/components/TextComponents/HomeText.js");
/* harmony import */ var _redux_actions_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/actions/auth */ "./src/redux/actions/auth.js");
/* harmony import */ var _components_Category_Category__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Category/Category */ "./src/components/Category/Category.js");
/* harmony import */ var _components_Category_CategoryContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Category/CategoryContainer */ "./src/components/Category/CategoryContainer.js");
/* harmony import */ var _components_ItemList_ItemList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ItemList/ItemList */ "./src/components/ItemList/ItemList.js");
var _jsxFileName = "/Users/luketowell/Development/Xpire/xpire-web-application/src/pages/home.js";









class Home extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    this.props.getStores();
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
      name: "Home",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "PageContent",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TextComponents_HomeText__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Category_CategoryContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ItemList_ItemList__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }
    })));
  }

}

const mapStateToProps = state => {
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, {
  getStores: _redux_actions_auth__WEBPACK_IMPORTED_MODULE_4__["getStores"]
})(Home));

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: Home, Login, Metrics, StoreInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/pages/home.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Home", function() { return _home__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login */ "./src/pages/login.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return _login__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _metrics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./metrics */ "./src/pages/metrics.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Metrics", function() { return _metrics__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _storeInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storeInfo */ "./src/pages/storeInfo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StoreInfo", function() { return _storeInfo__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ }),

/***/ "./src/pages/login.js":
/*!****************************!*\
  !*** ./src/pages/login.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/actions/auth */ "./src/redux/actions/auth.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/logo.png */ "./src/assets/images/logo.png");
/* harmony import */ var _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_logo_png__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/luketowell/Development/Xpire/xpire-web-application/src/pages/login.js";






class Login extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    this.loginClicked = () => {
      console.log("clicked");
      this.props.authUser();
    };
  }

  render() {
    console.log(this.props.auth);

    if (this.props.auth.userAuthed) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Redirect"], {
        to: "/home",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 17
        }
      });
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "LoginPage",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "Logo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_4___default.a,
      height: 200,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: () => this.loginClicked(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }
    }, "Sign In")));
  }

}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  authUser: _redux_actions_auth__WEBPACK_IMPORTED_MODULE_2__["authUser"],
  getStores: _redux_actions_auth__WEBPACK_IMPORTED_MODULE_2__["getStores"]
})(Login));

/***/ }),

/***/ "./src/pages/metrics.js":
/*!******************************!*\
  !*** ./src/pages/metrics.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header/Header */ "./src/components/Header/Header.js");
var _jsxFileName = "/Users/luketowell/Development/Xpire/xpire-web-application/src/pages/metrics.js";



class Metrics extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
      name: "Metrics",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 13
      }
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Metrics);

/***/ }),

/***/ "./src/pages/storeInfo.js":
/*!********************************!*\
  !*** ./src/pages/storeInfo.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header/Header */ "./src/components/Header/Header.js");
var _jsxFileName = "/Users/luketowell/Development/Xpire/xpire-web-application/src/pages/storeInfo.js";



class StoreInfo extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
      name: "Store Information",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 13
      }
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (StoreInfo);

/***/ }),

/***/ "./src/redux/actionTypes.js":
/*!**********************************!*\
  !*** ./src/redux/actionTypes.js ***!
  \**********************************/
/*! exports provided: USER_AUTH, GET_STORES_PENDING, GET_STORES_SUCCESS, GET_STORES_FAILED, SET_CHOSEN_STORE, GET_ITEMS_PENDING, GET_ITEMS_SUCCESS, GET_ITEMS_FAILED, GET_ITEMS_BY_CATEGORY_PENDING, GET_ITEMS_BY_CATEGORY_SUCCESS, GET_ITEMS_BY_CATEGORY_FAILED, GET_CATEGORIES_PENDING, GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAILED, GET_STATUS_PENDING, GET_STATUS_SUCCESS, GET_STATUS_FAILED, GET_ACTION_PENDING, GET_ACTION_SUCCESS, GET_ACTION_FAILED, POST_ACTION_PENDING, POST_ACTION_SUCCESS, POST_ACTION_FAILED, POST_ITEM_PENDING, POST_ITEM_SUCCESS, POST_ITEM_FAILED, FIND_ITEM_PENDING, FIND_ITEM_SUCCESS, FIND_ITEM_FAILED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_AUTH", function() { return USER_AUTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_STORES_PENDING", function() { return GET_STORES_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_STORES_SUCCESS", function() { return GET_STORES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_STORES_FAILED", function() { return GET_STORES_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CHOSEN_STORE", function() { return SET_CHOSEN_STORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ITEMS_PENDING", function() { return GET_ITEMS_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ITEMS_SUCCESS", function() { return GET_ITEMS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ITEMS_FAILED", function() { return GET_ITEMS_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ITEMS_BY_CATEGORY_PENDING", function() { return GET_ITEMS_BY_CATEGORY_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ITEMS_BY_CATEGORY_SUCCESS", function() { return GET_ITEMS_BY_CATEGORY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ITEMS_BY_CATEGORY_FAILED", function() { return GET_ITEMS_BY_CATEGORY_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CATEGORIES_PENDING", function() { return GET_CATEGORIES_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CATEGORIES_SUCCESS", function() { return GET_CATEGORIES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CATEGORIES_FAILED", function() { return GET_CATEGORIES_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_STATUS_PENDING", function() { return GET_STATUS_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_STATUS_SUCCESS", function() { return GET_STATUS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_STATUS_FAILED", function() { return GET_STATUS_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ACTION_PENDING", function() { return GET_ACTION_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ACTION_SUCCESS", function() { return GET_ACTION_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ACTION_FAILED", function() { return GET_ACTION_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_ACTION_PENDING", function() { return POST_ACTION_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_ACTION_SUCCESS", function() { return POST_ACTION_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_ACTION_FAILED", function() { return POST_ACTION_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_ITEM_PENDING", function() { return POST_ITEM_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_ITEM_SUCCESS", function() { return POST_ITEM_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_ITEM_FAILED", function() { return POST_ITEM_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIND_ITEM_PENDING", function() { return FIND_ITEM_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIND_ITEM_SUCCESS", function() { return FIND_ITEM_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIND_ITEM_FAILED", function() { return FIND_ITEM_FAILED; });
//Auth Actions
//LOGIN
const USER_AUTH = 'USER_AUTH'; //Get Store List

const GET_STORES_PENDING = 'GET_STORES_PENDING';
const GET_STORES_SUCCESS = 'GET_STORES_SUCCESS';
const GET_STORES_FAILED = 'GET_STORES_FAILED'; //Set Store

const SET_CHOSEN_STORE = 'SET_CHOSEN_STORE'; //Item Actions
//get items for store

const GET_ITEMS_PENDING = 'GET_ITEMS_PENDING';
const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
const GET_ITEMS_FAILED = 'GET_ITEMS_FAILED'; // get Items by Category

const GET_ITEMS_BY_CATEGORY_PENDING = "GET_ITEMS_BY_CATEGORY_PENDING";
const GET_ITEMS_BY_CATEGORY_SUCCESS = "GET_ITEMS_BY_CATEGORY_SUCCESS";
const GET_ITEMS_BY_CATEGORY_FAILED = "GET_ITEMS_BY_CATEGORY_FAILED"; //get categories

const GET_CATEGORIES_PENDING = 'GET_CATEGORIES_PENDING';
const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS';
const GET_CATEGORIES_FAILED = 'GET_CATEGORIES_FAILED'; //get status

const GET_STATUS_PENDING = 'GET_STATUS_PENDING';
const GET_STATUS_SUCCESS = 'GET_STATUS_SUCCESS';
const GET_STATUS_FAILED = 'GET_STATUS_FAILED'; //get individual action

const GET_ACTION_PENDING = 'GET_ACTION_PENDING';
const GET_ACTION_SUCCESS = 'GET_ACTION_SUCCESS';
const GET_ACTION_FAILED = 'GET_ACTION_FAILED'; //post new action

const POST_ACTION_PENDING = 'POST_ACTION_PENDING';
const POST_ACTION_SUCCESS = 'POST_ACTION_SUCCESS';
const POST_ACTION_FAILED = 'POST_ACTION_FAILED'; //post new item

const POST_ITEM_PENDING = 'POST_ITEM_PENDING';
const POST_ITEM_SUCCESS = 'POST_ITEM_SUCCESS';
const POST_ITEM_FAILED = 'POST_ITEM_FAILED'; //search for item details

const FIND_ITEM_PENDING = 'FIND_ITEM_PENDING';
const FIND_ITEM_SUCCESS = 'FIND_ITEM_SUCCESS';
const FIND_ITEM_FAILED = 'FIND_ITEM_FAILED';

/***/ }),

/***/ "./src/redux/actions/auth.js":
/*!***********************************!*\
  !*** ./src/redux/actions/auth.js ***!
  \***********************************/
/*! exports provided: authUser, getStores, setChosenStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authUser", function() { return authUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStores", function() { return getStores; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setChosenStore", function() { return setChosenStore; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/request */ "./src/utils/request.js");


const authUser = () => {
  console.log("auth user action");
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["USER_AUTH"]
  };
};
const getStores = () => {
  console.log("Retrieving stores from the database");
  return dispatch => {
    dispatch({
      type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["GET_STORES_PENDING"]
    });
    Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])("/store/all", "GET").then(response => {
      dispatch({
        type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["GET_STORES_SUCCESS"],
        payload: response
      });
    }).catch(error => {
      console.log(error);
      dispatch({
        type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["GET_STORES_FAILED"],
        payload: error
      });
    });
  };
};
const setChosenStore = store => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SET_CHOSEN_STORE"],
    payload: store.value
  };
};

/***/ }),

/***/ "./src/redux/actions/item.js":
/*!***********************************!*\
  !*** ./src/redux/actions/item.js ***!
  \***********************************/
/*! exports provided: authUser, getCategories, getCategoryItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authUser", function() { return authUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategories", function() { return getCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategoryItems", function() { return getCategoryItems; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/request */ "./src/utils/request.js");
/* harmony import */ var _utils_currentStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/currentStore */ "./src/utils/currentStore.js");



const authUser = () => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["USER_AUTH"]
  };
};
const getCategories = () => {
  return (dispatch, getState) => {
    dispatch({
      type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["GET_CATEGORIES_PENDING"]
    });
    Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])('/itemcategory/all', 'GET').then(response => {
      dispatch({
        type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["GET_CATEGORIES_SUCCESS"],
        payload: response
      });
    }).catch(error => {
      dispatch({
        type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["GET_CATEGORIES_FAILED"],
        payload: error
      });
    });
  };
};
const getCategoryItems = categoryId => {
  return (dispatch, getState) => {
    console.log("getCategoryItems request, catId = " + categoryId);
    let storeId = Object(_utils_currentStore__WEBPACK_IMPORTED_MODULE_2__["default"])(getState().auth);
    dispatch({
      type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["GET_ITEMS_BY_CATEGORY_PENDING"]
    });
    Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])(`/storeitemsummary/${storeId}/${categoryId}`, "GET").then(response => {
      dispatch({
        type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["GET_ITEMS_BY_CATEGORY_SUCCESS"],
        payload: response
      });
    }).catch(error => {
      dispatch({
        type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["GET_ITEMS_BY_CATEGORY_FAILED"],
        payload: error
      });
    });
  };
};

/***/ }),

/***/ "./src/redux/index.js":
/*!****************************!*\
  !*** ./src/redux/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _reducers_appReducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/appReducers */ "./src/redux/reducers/appReducers.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");



const Store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers_appReducers__WEBPACK_IMPORTED_MODULE_1__["default"], Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Store);

/***/ }),

/***/ "./src/redux/reducers/appReducers.js":
/*!*******************************************!*\
  !*** ./src/redux/reducers/appReducers.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth */ "./src/redux/reducers/auth.js");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item */ "./src/redux/reducers/item.js");



const appReducers = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  auth: _auth__WEBPACK_IMPORTED_MODULE_1__["default"],
  items: _item__WEBPACK_IMPORTED_MODULE_2__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (appReducers);

/***/ }),

/***/ "./src/redux/reducers/auth.js":
/*!************************************!*\
  !*** ./src/redux/reducers/auth.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_mocks_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/mocks/user */ "./src/assets/mocks/user.js");


const {
  USER_AUTH,
  GET_STORES_PENDING,
  GET_STORES_SUCCESS,
  GET_STORES_FAILED,
  SET_CHOSEN_STORE
} = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");

const initialState = {
  userAuthed: false,
  storesStatus: "complete",
  stores: [],
  error: "",
  user: {},
  chosenStore: false
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_AUTH:
      return { ...state,
        userAuthed: true,
        user: _assets_mocks_user__WEBPACK_IMPORTED_MODULE_0__["default"]
      };

    case GET_STORES_PENDING:
      return { ...state,
        storesStatus: "pending"
      };

    case GET_STORES_SUCCESS:
      return { ...state,
        storesStatus: "completed",
        stores: action.payload
      };

    case GET_STORES_FAILED:
      return { ...state,
        storesStatus: "failed",
        error: action.payload.message
      };

    case SET_CHOSEN_STORE:
      return { ...state,
        chosenStore: action.payload
      };

    default:
      {
        return { ...state
        };
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (AuthReducer);

/***/ }),

/***/ "./src/redux/reducers/item.js":
/*!************************************!*\
  !*** ./src/redux/reducers/item.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");

const initialState = {
  categoryItems: [],
  categories: [],
  status: [],
  individualAction: {},
  addedAction: {},
  chosenCategory: {},
  categoryStatus: "completed",
  categoryItemsStatus: ""
};

const ItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["GET_CATEGORIES_PENDING"]:
      return { ...state,
        categoryStatus: "pending"
      };

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["GET_CATEGORIES_SUCCESS"]:
      return { ...state,
        categoryStatus: "completed",
        categories: action.payload
      };

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["GET_CATEGORIES_FAILED"]:
      return { ...state,
        categoryStatus: "failed",
        error: action.payload.message
      };

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["GET_ITEMS_BY_CATEGORY_PENDING"]:
      return { ...state,
        categoryItemsStatus: "pending"
      };

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["GET_ITEMS_BY_CATEGORY_SUCCESS"]:
      return { ...state,
        categoryItemsStatus: "completed",
        categoryItems: action.payload
      };

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["GET_ITEMS_BY_CATEGORY_FAILED"]:
      return { ...state,
        categoryItemsStatus: "failed",
        error: action.payload.message
      };

    default:
      {
        return { ...state
        };
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (ItemReducer);

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    }).catch(error => {
      console.error(error.message);
    });
  }
}

/***/ }),

/***/ "./src/utils/currentStore.js":
/*!***********************************!*\
  !*** ./src/utils/currentStore.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const displayCurrentStore = authObject => {
  if (authObject.chosenStore) {
    return authObject.chosenStore;
  }

  return authObject.user.storeId;
};

/* harmony default export */ __webpack_exports__["default"] = (displayCurrentStore);

/***/ }),

/***/ "./src/utils/request.js":
/*!******************************!*\
  !*** ./src/utils/request.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.js");



const request = async (url, requestType, data = {}) => {
  let request = await axios__WEBPACK_IMPORTED_MODULE_0___default()({
    baseURL: _constants__WEBPACK_IMPORTED_MODULE_1__["HOST_URL"],
    url: url,
    method: requestType,
    data: data
  }).then(response => {
    return response.data;
  }).catch(error => {
    throw error;
  });
  return request;
};

/* harmony default export */ __webpack_exports__["default"] = (request);

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/luketowell/Development/Xpire/xpire-web-application/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/luketowell/Development/Xpire/xpire-web-application/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/luketowell/Development/Xpire/xpire-web-application/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",1]]]);
//# sourceMappingURL=main.chunk.js.map