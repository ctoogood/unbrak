webpackHotUpdate("commons",{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/components.scss":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--14-oneOf-1-1!./node_modules/postcss-loader/src??postcss-3!./node_modules/sass-loader/dist/cjs.js??ref--14-oneOf-1-3!./src/components/components.scss ***!
  \********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "header {\n  overflow: hidden;\n  padding: 1rem;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1); }\n\n.header__title {\n  height: 7rem;\n  position: absolute;\n  left: 50%;\n  transform: translate(-50%, 0); }\n  .header__title img {\n    height: 50px;\n    margin: 0; }\n  @media only screen and (min-width: 700px) {\n    .header__title {\n      position: relative;\n      left: 0%; } }\n\n.header__links {\n  display: none;\n  position: relative;\n  margin-left: 3rem;\n  top: -20px; }\n  .header__links > * {\n    margin-left: 1.5rem; }\n    .header__links > *:hover {\n      text-decoration: underline; }\n  .header__links:last-child {\n    right: 0; }\n  @media only screen and (min-width: 700px) {\n    .header__links {\n      display: inline; } }\n\n.header__active {\n  font-weight: bolder; }\n\n.header__content {\n  max-width: 1400px;\n  margin: auto;\n  position: relative;\n  height: 3.5rem; }\n\n.header__cart {\n  position: absolute;\n  right: 0;\n  top: 10px; }\n  .header__cart img {\n    height: 25px;\n    margin: 0; }\n\n.header__menuIcon {\n  border: none;\n  background: none;\n  outline: none;\n  position: fixed;\n  top: 15px;\n  padding: .5rem;\n  cursor: pointer;\n  z-index: 6; }\n  @media only screen and (min-width: 700px) {\n    .header__menuIcon {\n      display: none; } }\n\n.line {\n  width: 2rem;\n  height: 2px;\n  display: block;\n  margin: 6px auto;\n  transition: all 0.3s ease-in-out;\n  border-radius: 30px;\n  background-color: #656565; }\n\n.clicked-menu .line {\n  background-color: white; }\n\n.clicked-menu .line:nth-child(2) {\n  opacity: 0; }\n\n.clicked-menu .line:nth-child(1) {\n  transform: translateY(7px) rotate(45deg); }\n\n.clicked-menu .line:nth-child(3) {\n  transform: translateY(-9px) rotate(-45deg); }\n\n.menu__main {\n  height: 100%;\n  width: 75%;\n  position: fixed;\n  top: 0;\n  left: -75%;\n  background-color: #41484E;\n  color: white;\n  padding-top: 5rem;\n  z-index: 5;\n  transition: opacity 700ms step-start, transform 700ms cubic-bezier(0.8, 0, 0.55, 0.94), visibility 700ms step-start, background-color 700ms cubic-bezier(0.8, 0, 0.55, 0.94); }\n\n.menu__list {\n  list-style-type: none;\n  opacity: 0;\n  font-size: 1.5rem;\n  transition: opacity 700ms cubic-bezier(0.8, 0, 0.55, 0.94) 300ms; }\n  @media only screen and (min-width: 700px) {\n    .menu__list {\n      padding-left: 5rem; } }\n\n.menu__listItem {\n  margin-top: 1.5rem;\n  display: block;\n  font-weight: 300;\n  letter-spacing: 5px;\n  transition: all 0.3s linear;\n  position: relative; }\n\n.menu__listItem {\n  position: relative;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content; }\n\n.menu__listItem:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 1px;\n  bottom: 0;\n  left: 0;\n  background-color: #FFFFFF;\n  visibility: hidden;\n  transform: scaleX(0);\n  transition: all 0.3s ease-in-out 0s; }\n\n.menu__listItem:hover:before {\n  visibility: visible;\n  transform: scaleX(1); }\n\n.is-active {\n  transform: translate3d(100%, 0, 0); }\n  .is-active .menu__list {\n    opacity: 1; }\n\n.hero__main {\n  position: relative;\n  z-index: -1; }\n\n.hero__background {\n  width: 100%; }\n", "", {"version":3,"sources":["C:/Users/calum/Web Dev/Gatsby/unbrak/src/components/C:/Users/calum/Web Dev/Gatsby/unbrak/src/components/C:/Users/calum/Web Dev/Gatsby/unbrak/src/components/components.scss"],"names":[],"mappings":"AAEA;EACI,iBAAgB;EAChB,cAAa;EACb,2CAAuC,EAAA;;AAG3C;EACI,aAAY;EACZ,mBAAkB;EAClB,UAAQ;EACR,8BAA4B,EAAA;EAJhC;IAOQ,aAAY;IACZ,UAAQ,EAAA;EAGZ;IAXJ;MAYQ,mBAAkB;MAClB,SACJ,EAAA,EACH;;AAED;EACI,cAAa;EACb,mBAAkB;EAClB,kBAAiB;EACjB,WAAS,EAAA;EAJb;IAOQ,oBAAkB,EAAA;IAP1B;MAUY,2BAA0B,EAAA;EAVtC;IAeQ,SAAO,EAAA;EAGX;IAlBJ;MAmBQ,gBAAe,EAAA,EAEtB;;AAED;EACI,oBAAkB,EAAA;;AAGtB;EACI,kBAAiB;EACjB,aAAY;EACZ,mBAAkB;EAClB,eAAc,EAAA;;AAIlB;EACI,mBAAkB;EAClB,SAAQ;EACR,UAAQ,EAAA;EAHZ;IAMQ,aAAY;IACZ,UAAQ,EAAA;;AAIhB;EACI,aAAW;EACX,iBAAe;EACf,cAAY;EACZ,gBAAc;EACd,UAAQ;EACR,eAAa;EACb,gBAAc;EACd,WAAU,EAAA;EAEV;IAVJ;MAWQ,cAAa,EAAA,EAIpB;;AAED;EACI,YAAU;EACV,YAAU;EACV,eAAc;EACd,iBAAgB;EAChB,iCAAgC;EAChC,oBAAmB;EACnB,0BAAyB,EAAA;;AAG3B;EACI,wBAAuB,EAAA;;AAG3B;EACE,WAAU,EAAA;;AAGb;EACO,yCAAwC,EAAA;;AAG/C;EACO,2CAA0C,EAAA;;AAIlD;EACI,aAAW;EACX,WAAS;EACT,gBAAe;EACf,OAAK;EACL,WAAS;EACT,0BAAyB;EACzB,aAAW;EACX,kBAAgB;EAChB,WAAU;EACV,6KAA4K,EAAA;;AAIhL;EACI,sBAAqB;EACrB,WAAS;EACT,kBAAiB;EAEjB,iEAAgE,EAAA;EAEhE;IAPJ;MAQQ,mBAAkB,EAAA,EAEzB;;AAED;EACI,mBAAiB;EACjB,eAAc;EACd,iBAAgB;EAChB,oBAAkB;EAClB,4BAA2B;EAC3B,mBAAkB,EAAA;;AAGtB;EACI,mBAAkB;EAClB,2BAAiB;EAAjB,wBAAiB;EAAjB,mBAAiB,EAAA;;AAGrB;EACI,YAAW;EACX,mBAAkB;EAClB,YAAW;EACX,YAAW;EACX,UAAS;EACT,QAAO;EACP,0BAAyB;EACzB,mBAAkB;EAClB,qBAAoB;EACpB,oCAAmC,EAAA;;AAGrC;EACE,oBAAmB;EACnB,qBAAoB,EAAA;;AAKxB;EACI,mCAAgC,EAAA;EADpC;IAIQ,WAAU,EAAA;;AAMlB;EACI,mBAAkB;EAClB,YAAW,EAAA;;AAGf;EACI,YAAW,EAAA","file":"components.scss","sourcesContent":["//HEADER\r\n\r\nheader {\r\n    overflow: hidden;\r\n    padding: 1rem;\r\n    box-shadow: 0px 2px 2px rgba(0,0,0,0.1);\r\n}\r\n\r\n.header__title {\r\n    height: 7rem;\r\n    position: absolute;\r\n    left:50%;\r\n    transform: translate(-50%,0);\r\n\r\n    img {\r\n        height: 50px;\r\n        margin:0;\r\n    }\r\n\r\n    @media only screen and (min-width:700px) {\r\n        position: relative;\r\n        left:0%\r\n    }\r\n}\r\n\r\n.header__links {\r\n    display: none;\r\n    position: relative;\r\n    margin-left: 3rem;\r\n    top:-20px;\r\n\r\n    & > * {\r\n        margin-left:1.5rem;\r\n\r\n        &:hover {\r\n            text-decoration: underline;\r\n        }\r\n    }\r\n\r\n    &:last-child {\r\n        right:0;\r\n    }\r\n\r\n    @media only screen and (min-width:700px) {\r\n        display: inline;\r\n    }\r\n}\r\n\r\n.header__active {\r\n    font-weight:bolder;\r\n}\r\n\r\n.header__content {\r\n    max-width: 1400px;\r\n    margin: auto;\r\n    position: relative;\r\n    height: 3.5rem;\r\n}\r\n\r\n\r\n.header__cart {\r\n    position: absolute;\r\n    right: 0;\r\n    top:10px;\r\n\r\n    img {\r\n        height: 25px;\r\n        margin:0;\r\n    }\r\n}\r\n\r\n.header__menuIcon {\r\n    border:none;\r\n    background:none;\r\n    outline:none;\r\n    position:fixed;\r\n    top:15px;\r\n    padding:.5rem;\r\n    cursor:pointer;\r\n    z-index: 6;\r\n\r\n    @media only screen and (min-width:700px) {\r\n        display: none;\r\n    }\r\n\r\n    \r\n}\r\n\r\n.line {\r\n    width:2rem;\r\n    height:2px;\r\n    display: block;\r\n    margin: 6px auto;\r\n    transition: all 0.3s ease-in-out;\r\n    border-radius: 30px;\r\n    background-color: #656565;\r\n  }\r\n\r\n  .clicked-menu .line {\r\n      background-color: white;\r\n  }\r\n\r\n  .clicked-menu .line:nth-child(2){\r\n    opacity: 0;\r\n  }\r\n  \r\n .clicked-menu .line:nth-child(1){\r\n        transform: translateY(7px) rotate(45deg);\r\n    }\r\n      \r\n .clicked-menu .line:nth-child(3){\r\n        transform: translateY(-9px) rotate(-45deg);\r\n    \r\n}\r\n\r\n.menu__main {\r\n    height:100%;\r\n    width:75%;\r\n    position: fixed;\r\n    top:0;\r\n    left:-75%;\r\n    background-color: #41484E;\r\n    color:white;\r\n    padding-top:5rem;\r\n    z-index: 5;\r\n    transition: opacity 700ms step-start, transform 700ms cubic-bezier(0.8, 0, 0.55, 0.94), visibility 700ms step-start, background-color 700ms cubic-bezier(0.8, 0, 0.55, 0.94);\r\n\r\n}\r\n\r\n.menu__list {\r\n    list-style-type: none;\r\n    opacity:0;\r\n    font-size: 1.5rem;\r\n\r\n    transition: opacity 700ms cubic-bezier(0.8, 0, 0.55, 0.94) 300ms;\r\n\r\n    @media only screen and (min-width:700px) {\r\n        padding-left: 5rem;\r\n    }\r\n}\r\n\r\n.menu__listItem {\r\n    margin-top:1.5rem;\r\n    display: block;\r\n    font-weight: 300;\r\n    letter-spacing:5px;\r\n    transition: all 0.3s linear;\r\n    position: relative;\r\n}\r\n\r\n.menu__listItem {\r\n    position: relative;\r\n    width:fit-content;\r\n}\r\n\r\n.menu__listItem:before {\r\n    content: \"\";\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 1px;\r\n    bottom: 0;\r\n    left: 0;\r\n    background-color: #FFFFFF;\r\n    visibility: hidden;\r\n    transform: scaleX(0);\r\n    transition: all 0.3s ease-in-out 0s;\r\n  }\r\n\r\n  .menu__listItem:hover:before {\r\n    visibility: visible;\r\n    transform: scaleX(1);\r\n  }\r\n\r\n\r\n\r\n.is-active {\r\n    transform: translate3d(100%,0,0);\r\n\r\n    .menu__list {\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n// HERO IMAGE\r\n\r\n.hero__main {\r\n    position: relative;\r\n    z-index: -1;\r\n}\r\n\r\n.hero__background {\r\n    width: 100%;;\r\n}"],"sourceRoot":""}]);

// exports


/***/ })

})
//# sourceMappingURL=commons.7c43524bd14482194b95.hot-update.js.map