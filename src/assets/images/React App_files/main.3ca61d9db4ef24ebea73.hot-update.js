webpackHotUpdate('main', {
    /***/ './src/components/ItemList/ItemList.js':
        /*!*********************************************!*\
  !*** ./src/components/ItemList/ItemList.js ***!
  \*********************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! react */ './node_modules/react/index.js'
            );
            /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
                react__WEBPACK_IMPORTED_MODULE_0__
            );
            /* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! react-redux */ './node_modules/react-redux/es/index.js'
            );
            /* harmony import */ var _ItemCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                /*! ./ItemCard */ './src/components/ItemList/ItemCard.js'
            );
            var _jsxFileName =
                '/Users/luketowell/Development/Xpire/xpire-web-application/src/components/ItemList/ItemList.js';

            class ItemList extends react__WEBPACK_IMPORTED_MODULE_0__[
                'Component'
            ] {
                constructor(...args) {
                    super(...args);

                    this.renderItemList = () => {
                        let { items } = this.props;
                        console.log(items.categoryItems.length);

                        if (
                            items.categoryItems.length === 0 &&
                            items.categoryItemsStatus === 'completed'
                        ) {
                            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                'p',
                                {
                                    __self: this,
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 12,
                                        columnNumber: 17,
                                    },
                                },
                                'There are no items listed for this category'
                            );
                        } else if (items.categoryItemsStatus === 'failed') {
                            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                'p',
                                {
                                    __self: this,
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 17,
                                        columnNumber: 17,
                                    },
                                },
                                'We have been unable to retrieve your items from the Database'
                            );
                        } else if (items.categoryItemsStatus === 'Pending') {
                            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                'p',
                                {
                                    __self: this,
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 22,
                                        columnNumber: 17,
                                    },
                                },
                                'Loading item information...'
                            );
                        } else if (items.categoryItemsStatus === '') {
                            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                'p',
                                {
                                    __self: this,
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 27,
                                        columnNumber: 17,
                                    },
                                },
                                'Please select a category to view item details for your store.'
                            );
                        } else {
                            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                'div',
                                {
                                    __self: this,
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 32,
                                        columnNumber: 17,
                                    },
                                },
                                items.categoryItems.map((item) =>
                                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        _ItemCard__WEBPACK_IMPORTED_MODULE_2__[
                                            'default'
                                        ],
                                        {
                                            itemDetails: item,
                                            __self: this,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 34,
                                                columnNumber: 21,
                                            },
                                        }
                                    )
                                )
                            );
                        }
                    };
                }

                render() {
                    let { items } = this.props;
                    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'div',
                        {
                            className: 'ItemList',
                            __self: this,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 44,
                                columnNumber: 13,
                            },
                        },
                        this.renderItemList()
                    );
                }
            }

            const mapStateToProps = (state) => {
                return {
                    items: state.items,
                };
            };

            /* harmony default export */ __webpack_exports__[
                'default'
            ] = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__['connect'])(
                mapStateToProps,
                {}
            )(ItemList);

            /***/
        },
});
//# sourceMappingURL=main.3ca61d9db4ef24ebea73.hot-update.js.map
