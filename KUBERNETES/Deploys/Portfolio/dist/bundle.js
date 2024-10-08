/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@emailjs/browser/es/api/sendPost.js":
/*!**********************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/api/sendPost.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sendPost: () => (/* binding */ sendPost)\n/* harmony export */ });\n/* harmony import */ var _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/EmailJSResponseStatus */ \"./node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js\");\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/store */ \"./node_modules/@emailjs/browser/es/store/store.js\");\n\n\nconst sendPost = (url, data, headers = {}) => {\n    return new Promise((resolve, reject) => {\n        const xhr = new XMLHttpRequest();\n        xhr.addEventListener('load', ({ target }) => {\n            const responseStatus = new _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__.EmailJSResponseStatus(target);\n            if (responseStatus.status === 200 || responseStatus.text === 'OK') {\n                resolve(responseStatus);\n            }\n            else {\n                reject(responseStatus);\n            }\n        });\n        xhr.addEventListener('error', ({ target }) => {\n            reject(new _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__.EmailJSResponseStatus(target));\n        });\n        xhr.open('POST', _store_store__WEBPACK_IMPORTED_MODULE_1__.store._origin + url, true);\n        Object.keys(headers).forEach((key) => {\n            xhr.setRequestHeader(key, headers[key]);\n        });\n        xhr.send(data);\n    });\n};\n\n\n//# sourceURL=webpack://romario-frontend/./node_modules/@emailjs/browser/es/api/sendPost.js?");

/***/ }),

/***/ "./node_modules/@emailjs/browser/es/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   init: () => (/* reexport safe */ _methods_init_init__WEBPACK_IMPORTED_MODULE_0__.init),\n/* harmony export */   send: () => (/* reexport safe */ _methods_send_send__WEBPACK_IMPORTED_MODULE_1__.send),\n/* harmony export */   sendForm: () => (/* reexport safe */ _methods_sendForm_sendForm__WEBPACK_IMPORTED_MODULE_2__.sendForm)\n/* harmony export */ });\n/* harmony import */ var _methods_init_init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./methods/init/init */ \"./node_modules/@emailjs/browser/es/methods/init/init.js\");\n/* harmony import */ var _methods_send_send__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./methods/send/send */ \"./node_modules/@emailjs/browser/es/methods/send/send.js\");\n/* harmony import */ var _methods_sendForm_sendForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./methods/sendForm/sendForm */ \"./node_modules/@emailjs/browser/es/methods/sendForm/sendForm.js\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    init: _methods_init_init__WEBPACK_IMPORTED_MODULE_0__.init,\n    send: _methods_send_send__WEBPACK_IMPORTED_MODULE_1__.send,\n    sendForm: _methods_sendForm_sendForm__WEBPACK_IMPORTED_MODULE_2__.sendForm,\n});\n\n\n//# sourceURL=webpack://romario-frontend/./node_modules/@emailjs/browser/es/index.js?");

/***/ }),

/***/ "./node_modules/@emailjs/browser/es/methods/init/init.js":
/*!***************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/methods/init/init.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   init: () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/store */ \"./node_modules/@emailjs/browser/es/store/store.js\");\n\n/**\n * Initiation\n * @param {string} publicKey - set the EmailJS public key\n * @param {string} origin - set the EmailJS origin\n */\nconst init = (publicKey, origin = 'https://api.emailjs.com') => {\n    _store_store__WEBPACK_IMPORTED_MODULE_0__.store._userID = publicKey;\n    _store_store__WEBPACK_IMPORTED_MODULE_0__.store._origin = origin;\n};\n\n\n//# sourceURL=webpack://romario-frontend/./node_modules/@emailjs/browser/es/methods/init/init.js?");

/***/ }),

/***/ "./node_modules/@emailjs/browser/es/methods/send/send.js":
/*!***************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/methods/send/send.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   send: () => (/* binding */ send)\n/* harmony export */ });\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/store */ \"./node_modules/@emailjs/browser/es/store/store.js\");\n/* harmony import */ var _utils_validateParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/validateParams */ \"./node_modules/@emailjs/browser/es/utils/validateParams.js\");\n/* harmony import */ var _api_sendPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/sendPost */ \"./node_modules/@emailjs/browser/es/api/sendPost.js\");\n\n\n\n/**\n * Send a template to the specific EmailJS service\n * @param {string} serviceID - the EmailJS service ID\n * @param {string} templateID - the EmailJS template ID\n * @param {object} templatePrams - the template params, what will be set to the EmailJS template\n * @param {string} publicKey - the EmailJS public key\n * @returns {Promise<EmailJSResponseStatus>}\n */\nconst send = (serviceID, templateID, templatePrams, publicKey) => {\n    const uID = publicKey || _store_store__WEBPACK_IMPORTED_MODULE_0__.store._userID;\n    (0,_utils_validateParams__WEBPACK_IMPORTED_MODULE_1__.validateParams)(uID, serviceID, templateID);\n    const params = {\n        lib_version: '3.6.2',\n        user_id: uID,\n        service_id: serviceID,\n        template_id: templateID,\n        template_params: templatePrams,\n    };\n    return (0,_api_sendPost__WEBPACK_IMPORTED_MODULE_2__.sendPost)('/api/v1.0/email/send', JSON.stringify(params), {\n        'Content-type': 'application/json',\n    });\n};\n\n\n//# sourceURL=webpack://romario-frontend/./node_modules/@emailjs/browser/es/methods/send/send.js?");

/***/ }),

/***/ "./node_modules/@emailjs/browser/es/methods/sendForm/sendForm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/methods/sendForm/sendForm.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sendForm: () => (/* binding */ sendForm)\n/* harmony export */ });\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/store */ \"./node_modules/@emailjs/browser/es/store/store.js\");\n/* harmony import */ var _utils_validateParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/validateParams */ \"./node_modules/@emailjs/browser/es/utils/validateParams.js\");\n/* harmony import */ var _api_sendPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/sendPost */ \"./node_modules/@emailjs/browser/es/api/sendPost.js\");\n\n\n\nconst findHTMLForm = (form) => {\n    let currentForm;\n    if (typeof form === 'string') {\n        currentForm = document.querySelector(form);\n    }\n    else {\n        currentForm = form;\n    }\n    if (!currentForm || currentForm.nodeName !== 'FORM') {\n        throw 'The 3rd parameter is expected to be the HTML form element or the style selector of form';\n    }\n    return currentForm;\n};\n/**\n * Send a form the specific EmailJS service\n * @param {string} serviceID - the EmailJS service ID\n * @param {string} templateID - the EmailJS template ID\n * @param {string | HTMLFormElement} form - the form element or selector\n * @param {string} publicKey - the EmailJS public key\n * @returns {Promise<EmailJSResponseStatus>}\n */\nconst sendForm = (serviceID, templateID, form, publicKey) => {\n    const uID = publicKey || _store_store__WEBPACK_IMPORTED_MODULE_0__.store._userID;\n    const currentForm = findHTMLForm(form);\n    (0,_utils_validateParams__WEBPACK_IMPORTED_MODULE_1__.validateParams)(uID, serviceID, templateID);\n    const formData = new FormData(currentForm);\n    formData.append('lib_version', '3.6.2');\n    formData.append('service_id', serviceID);\n    formData.append('template_id', templateID);\n    formData.append('user_id', uID);\n    return (0,_api_sendPost__WEBPACK_IMPORTED_MODULE_2__.sendPost)('/api/v1.0/email/send-form', formData);\n};\n\n\n//# sourceURL=webpack://romario-frontend/./node_modules/@emailjs/browser/es/methods/sendForm/sendForm.js?");

/***/ }),

/***/ "./node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EmailJSResponseStatus: () => (/* binding */ EmailJSResponseStatus)\n/* harmony export */ });\nclass EmailJSResponseStatus {\n    constructor(httpResponse) {\n        this.status = httpResponse.status;\n        this.text = httpResponse.responseText;\n    }\n}\n\n\n//# sourceURL=webpack://romario-frontend/./node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js?");

/***/ }),

/***/ "./node_modules/@emailjs/browser/es/store/store.js":
/*!*********************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/store/store.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   store: () => (/* binding */ store)\n/* harmony export */ });\nconst store = {\n    _origin: 'https://api.emailjs.com',\n};\n\n\n//# sourceURL=webpack://romario-frontend/./node_modules/@emailjs/browser/es/store/store.js?");

/***/ }),

/***/ "./node_modules/@emailjs/browser/es/utils/validateParams.js":
/*!******************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/validateParams.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   validateParams: () => (/* binding */ validateParams)\n/* harmony export */ });\nconst validateParams = (publicKey, serviceID, templateID) => {\n    if (!publicKey) {\n        throw 'The public key is required. Visit https://dashboard.emailjs.com/admin/account';\n    }\n    if (!serviceID) {\n        throw 'The service ID is required. Visit https://dashboard.emailjs.com/admin';\n    }\n    if (!templateID) {\n        throw 'The template ID is required. Visit https://dashboard.emailjs.com/admin/templates';\n    }\n    return true;\n};\n\n\n//# sourceURL=webpack://romario-frontend/./node_modules/@emailjs/browser/es/utils/validateParams.js?");

/***/ }),

/***/ "./src/styles/css/index.css":
/*!**********************************!*\
  !*** ./src/styles/css/index.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://romario-frontend/./src/styles/css/index.css?");

/***/ }),

/***/ "./src/scripts/email.js":
/*!******************************!*\
  !*** ./src/scripts/email.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _environment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environment.js */ \"./src/scripts/environment.js\");\n/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emailjs/browser */ \"./node_modules/@emailjs/browser/es/index.js\");\n\n\n\nclass Email {\n  static async send(templateParams) {\n    const hasSent = localStorage.getItem('hasSent')\n    if (!hasSent) {\n      (0,_emailjs_browser__WEBPACK_IMPORTED_MODULE_1__.send)(_environment_js__WEBPACK_IMPORTED_MODULE_0__.SERVICE_ID, _environment_js__WEBPACK_IMPORTED_MODULE_0__.TEMPLATE_ID, templateParams, _environment_js__WEBPACK_IMPORTED_MODULE_0__.PUBLIC_KEY)\n    } else {\n      throw new Error(\n        'Você ja enviou um email, se precisar enviar outro, aqui está: <a href=\"mailto:nromario482@gmail.com\">nromario482@gmail.com</a>'\n      )\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Email);\n\n\n//# sourceURL=webpack://romario-frontend/./src/scripts/email.js?");

/***/ }),

/***/ "./src/scripts/environment.js":
/*!************************************!*\
  !*** ./src/scripts/environment.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PUBLIC_KEY: () => (/* binding */ PUBLIC_KEY),\n/* harmony export */   SERVICE_ID: () => (/* binding */ SERVICE_ID),\n/* harmony export */   TEMPLATE_ID: () => (/* binding */ TEMPLATE_ID)\n/* harmony export */ });\nconst PUBLIC_KEY = \"MISSING_ENV_VAR\".PUBLIC_KEY\nconst TEMPLATE_ID = \"MISSING_ENV_VAR\".TEMPLATE_ID\nconst SERVICE_ID = \"MISSING_ENV_VAR\".SERVICE_ID\n\n\n\n\n//# sourceURL=webpack://romario-frontend/./src/scripts/environment.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _email_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./email.js */ \"./src/scripts/email.js\");\n/* harmony import */ var _toast_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toast.js */ \"./src/scripts/toast.js\");\n/* harmony import */ var _styles_css_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/css/index.css */ \"./src/styles/css/index.css\");\n/* harmony import */ var _public_assets_arrow_up_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/assets/arrow-up.svg */ \"./public/assets/arrow-up.svg\");\n/* harmony import */ var _public_assets_code_solid_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/assets/code-solid.svg */ \"./public/assets/code-solid.svg\");\n/* harmony import */ var _public_assets_css3_alt_brands_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/assets/css3-alt-brands.svg */ \"./public/assets/css3-alt-brands.svg\");\n/* harmony import */ var _public_assets_expand_arrows_alt_solid_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/assets/expand-arrows-alt-solid.svg */ \"./public/assets/expand-arrows-alt-solid.svg\");\n/* harmony import */ var _public_assets_file_download_solid_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/assets/file-download-solid.svg */ \"./public/assets/file-download-solid.svg\");\n/* harmony import */ var _public_assets_git_alt_brands_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../public/assets/git-alt-brands.svg */ \"./public/assets/git-alt-brands.svg\");\n/* harmony import */ var _public_assets_github_square_brands_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../public/assets/github-square-brands.svg */ \"./public/assets/github-square-brands.svg\");\n/* harmony import */ var _public_assets_hand_point_up_regular_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../public/assets/hand-point-up-regular.svg */ \"./public/assets/hand-point-up-regular.svg\");\n/* harmony import */ var _public_assets_whatsapp_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../public/assets/whatsapp.svg */ \"./public/assets/whatsapp.svg\");\n/* harmony import */ var _public_assets_html5_brands_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../public/assets/html5-brands.svg */ \"./public/assets/html5-brands.svg\");\n/* harmony import */ var _public_assets_icons8_node_js_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../public/assets/icons8-node-js.svg */ \"./public/assets/icons8-node-js.svg\");\n/* harmony import */ var _public_assets_js_square_brands_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../public/assets/js-square-brands.svg */ \"./public/assets/js-square-brands.svg\");\n/* harmony import */ var _public_assets_docker_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../public/assets/docker.svg */ \"./public/assets/docker.svg\");\n/* harmony import */ var _public_assets_linux_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../public/assets/linux.svg */ \"./public/assets/linux.svg\");\n/* harmony import */ var _public_assets_oracle_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../public/assets/oracle.svg */ \"./public/assets/oracle.svg\");\n/* harmony import */ var _public_assets_csharp_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../public/assets/csharp.svg */ \"./public/assets/csharp.svg\");\n/* harmony import */ var _public_assets_link_solid_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../public/assets/link-solid.svg */ \"./public/assets/link-solid.svg\");\n/* harmony import */ var _public_assets_linkedin_brands_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../public/assets/linkedin-brands.svg */ \"./public/assets/linkedin-brands.svg\");\n/* harmony import */ var _public_assets_palette_solid_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../public/assets/palette-solid.svg */ \"./public/assets/palette-solid.svg\");\n/* harmony import */ var _public_assets_react_brands_svg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../public/assets/react-brands.svg */ \"./public/assets/react-brands.svg\");\n/* harmony import */ var _public_assets_sass_brands_svg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../public/assets/sass-brands.svg */ \"./public/assets/sass-brands.svg\");\n/* harmony import */ var _public_assets_share_square_solid_svg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../public/assets/share-square-solid.svg */ \"./public/assets/share-square-solid.svg\");\n/* harmony import */ var _public_assets_sitemap_solid_svg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../public/assets/sitemap-solid.svg */ \"./public/assets/sitemap-solid.svg\");\n/* harmony import */ var _public_assets_typescript_brands_svg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../public/assets/typescript-brands.svg */ \"./public/assets/typescript-brands.svg\");\n/* harmony import */ var _public_assets_circle_check_solid_svg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../public/assets/circle-check-solid.svg */ \"./public/assets/circle-check-solid.svg\");\n/* harmony import */ var _public_assets_circle_exclamation_solid_svg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../public/assets/circle-exclamation-solid.svg */ \"./public/assets/circle-exclamation-solid.svg\");\n/* harmony import */ var _public_assets_nextjs_original_svg__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../public/assets/nextjs-original.svg */ \"./public/assets/nextjs-original.svg\");\n/* harmony import */ var _public_assets_bootstrap_brands_svg__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../public/assets/bootstrap-brands.svg */ \"./public/assets/bootstrap-brands.svg\");\n/* harmony import */ var _public_assets_retrogames_snapshot_png24__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../public/assets/retrogames-snapshot.png24 */ \"./public/assets/retrogames-snapshot.png24\");\n/* harmony import */ var _public_assets_changix_snapshot_png24__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../public/assets/changix-snapshot.png24 */ \"./public/assets/changix-snapshot.png24\");\n/* harmony import */ var _public_assets_easybank_snapshot_png24__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../public/assets/easybank-snapshot.png24 */ \"./public/assets/easybank-snapshot.png24\");\n/* harmony import */ var _public_assets_fylo_snapshot_png24__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../public/assets/fylo-snapshot.png24 */ \"./public/assets/fylo-snapshot.png24\");\n/* harmony import */ var _public_assets_fireblog_snapshot_png24__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../public/assets/fireblog-snapshot.png24 */ \"./public/assets/fireblog-snapshot.png24\");\n/* harmony import */ var _public_assets_fireswift_snapshot_png24__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../public/assets/fireswift-snapshot.png24 */ \"./public/assets/fireswift-snapshot.png24\");\n/* harmony import */ var _public_assets_ip_address_tracker_snapshot_png24__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../public/assets/ip-address-tracker-snapshot.png24 */ \"./public/assets/ip-address-tracker-snapshot.png24\");\n/* harmony import */ var _public_assets_country_searcher_snapshot_png24__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../public/assets/country-searcher-snapshot.png24 */ \"./public/assets/country-searcher-snapshot.png24\");\n/* harmony import */ var _public_assets_reactcommerce_snapshot_png24__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../../public/assets/reactcommerce-snapshot.png24 */ \"./public/assets/reactcommerce-snapshot.png24\");\n/* harmony import */ var _public_assets_space_tourism_snapshot_png24__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../public/assets/space-tourism-snapshot.png24 */ \"./public/assets/space-tourism-snapshot.png24\");\n/* harmony import */ var _public_assets_yourjob_snapshot_png24__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../../public/assets/yourjob-snapshot.png24 */ \"./public/assets/yourjob-snapshot.png24\");\n/* harmony import */ var _public_assets_icons8_mysql_svg__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../../public/assets/icons8-mysql.svg */ \"./public/assets/icons8-mysql.svg\");\n/* harmony import */ var _public_assets_icons8_python_svg__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../../public/assets/icons8-python.svg */ \"./public/assets/icons8-python.svg\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*************** Email sender ****************/\nconst emailForm = document.querySelector(\".emailForm\");\nconst resetBtn = document.querySelector(\".resetBtn\");\n\nconst handleFormSubmit = async (event) => {\n  event.preventDefault();\n  const templateParams = {\n    [event.target[0].name]: event.target[0].value,\n    [event.target[1].name]: event.target[1].value,\n    [event.target[2].name]: event.target[2].value,\n    [event.target[3].name]: event.target[3].value,\n  };\n  try {\n    for (const param in templateParams) {\n      if (!templateParams[param]) {\n        throw new Error(`Todos campos precisam ser preenchidos!`);\n      }\n    }\n    await _email_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].send(templateParams);\n    localStorage.setItem(\"hasSent\", true);\n    (0,_toast_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"sucesso\", \"Email enviado com sucesso!\");\n    resetBtn.click();\n  } catch (err) {\n    console.error(\"Exception while sending email => \" + err.message);\n    (0,_toast_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"aviso\", err.message);\n  }\n};\nemailForm.onsubmit = handleFormSubmit;\n\n/*************** Mobile menu ****************/\nconst menuMechanisms = (event) => {\n  if (window.innerWidth <= 700) {\n    if (event.target.alt === \"back to top\") return;\n    else {\n      window.document.body.classList.toggle(\"body--active\");\n\n      const spans = [...document.querySelectorAll(\".burguer\")];\n      spans.forEach((span, index) => {\n        if (index === 0) span.classList.toggle(\"close-left\");\n        else if (index === 1) span.classList.toggle(\"close-right\");\n        else span.classList.toggle(\"fade\");\n      });\n\n      const menu = document.querySelector(\".header__navList\");\n      menu.classList.toggle(\"header__mobile--active\");\n    }\n  }\n};\n\nconst mobileMenuBtn = document.querySelector(\".mobile-menu__container\");\nmobileMenuBtn.onclick = menuMechanisms;\n\n/*************** Smooth scroll on intern links ****************/\nconst internLinks = [...document.querySelectorAll('[href^=\"#')];\ninternLinks.forEach((link) => {\n  link.onclick = (event) => {\n    event.preventDefault();\n    if (\n      event.target.getAttribute(\"href\") === \"#header\" ||\n      event.target.alt === \"voltar ao topo\"\n    ) {\n      window.scroll({\n        top: 0,\n        behavior: \"smooth\",\n      });\n    } else {\n      // Makes menu close when click occurs on mobile\n      menuMechanisms(event);\n      const element = document.querySelector(event.target.getAttribute(\"href\"));\n      window.scroll({\n        top: element.offsetTop,\n        behavior: \"smooth\",\n      });\n    }\n  };\n});\n\n/*************** Animate on scroll ****************/\nconst addAnimationClasses = () => {\n  const animateDirections = {\n    right: \"animate-right\",\n    left: \"animate-left\",\n  };\n\n  const elementsToAnimate = Array.from(document.querySelectorAll(\"[data-aos]\"));\n  elementsToAnimate.forEach((element) => {\n    const animateDirection = element.getAttribute(\"data-direction\");\n    element.classList.add(animateDirections[animateDirection]);\n  });\n};\n\nconst animateOnScroll = () => {\n  const { scrollY, innerHeight } = window;\n  const elementsToAnimate = Array.from(document.querySelectorAll(\"[data-aos]\"));\n  elementsToAnimate.forEach((element) => {\n    if (\n      element.offsetTop - scrollY <=\n      innerHeight - (element.offsetTop - scrollY) / 7\n    ) {\n      element.classList.add(\"animated\");\n    }\n  });\n};\n\nwindow.onscroll = animateOnScroll;\nwindow.onload = () => {\n  addAnimationClasses();\n  // Delay to allow seeing the animation in presentational section\n  setTimeout(() => animateOnScroll(), 200);\n\n  // Force animate on whatsapp-me button\n  const whatsappMe = document.querySelector(\".whatsapp-me\");\n\n  whatsappMe.classList.add(\"animated\");\n};\n\n/*************** Display back to top button  ****************/\nwindow.addEventListener(\"scroll\", () => {\n  if (window.scrollY >= document.querySelector(\"#aboutme\").offsetTop)\n    document.querySelector(\".back-to-top\").classList.add(\"back-to-top--active\");\n  else {\n    if (document.querySelector(\".back-to-top--active\"))\n      document\n        .querySelector(\".back-to-top--active\")\n        .classList.remove(\"back-to-top--active\");\n  }\n});\n\n/*************** Set date difference in experiences  ****************/\nconst monthsDiff = (d1, d2) => {\n  let months;\n  months = (d2.getFullYear() - d1.getFullYear()) * 12;\n  months -= d1.getMonth();\n  months += d2.getMonth();\n  return months < 0 ? 0 : months;\n}\n\nconst experienceTwoFrom = document.querySelector(\".experience_2_from\");\nconst experienceTwoFromDateInISOString = experienceTwoFrom.innerHTML\n  .split(\"/\")\n  .reverse();\nexperienceTwoFromDateInISOString[1] = +experienceTwoFromDateInISOString[1] - 1;\nconst experienceTwoFromDate = new Date(...experienceTwoFromDateInISOString);\nconst experienceTwoFromToDatesDiff = monthsDiff(experienceTwoFromDate, new Date());\n\nconst experienceTwoFromToDiff = document.querySelector(\".experience_2_from_to_diff\");\nexperienceTwoFromToDiff.innerHTML = experienceTwoFromToDatesDiff + (experienceTwoFromToDatesDiff > 1 ? \" meses\" : \" mes\");\n\n\n//# sourceURL=webpack://romario-frontend/./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/toast.js":
/*!******************************!*\
  !*** ./src/scripts/toast.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst severities = {\n  aviso: 'assets/circle-exclamation-solid.svg',\n  sucesso: 'assets/circle-check-solid.svg'\n}\n\nconst toggleToast = (severity, content) => {\n  const toast = document.querySelector('.toast')\n  const toastTitle = document.querySelector('.toast__title h3')\n  const toastTitleIcons = Array.from(\n    document.querySelectorAll('.toast__title img')\n  )\n  const toastContent = document.querySelector('.toast__content p')\n  toastContent.innerHTML = content\n\n  toastTitle.textContent = severity\n  toastTitleIcons.forEach(icon => (icon.src = severities[severity]))\n  toastContent.innerHTML = content\n\n  toast.classList.add('toast--active')\n  setTimeout(() => toast.classList.remove('toast--active'), 5000)\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleToast);\n\n\n//# sourceURL=webpack://romario-frontend/./src/scripts/toast.js?");

/***/ }),

/***/ "./public/assets/arrow-up.svg":
/*!************************************!*\
  !*** ./public/assets/arrow-up.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/arrow-up.svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/arrow-up.svg?");

/***/ }),

/***/ "./public/assets/bootstrap-brands.svg":
/*!********************************************!*\
  !*** ./public/assets/bootstrap-brands.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/bootstrap-brands.svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/bootstrap-brands.svg?");

/***/ }),

/***/ "./public/assets/changix-snapshot.png24":
/*!**********************************************!*\
  !*** ./public/assets/changix-snapshot.png24 ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/changix-snapshot.png24\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/changix-snapshot.png24?");

/***/ }),

/***/ "./public/assets/circle-check-solid.svg":
/*!**********************************************!*\
  !*** ./public/assets/circle-check-solid.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/circle-check-solid.svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/circle-check-solid.svg?");

/***/ }),

/***/ "./public/assets/circle-exclamation-solid.svg":
/*!****************************************************!*\
  !*** ./public/assets/circle-exclamation-solid.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/circle-exclamation-solid.svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/circle-exclamation-solid.svg?");

/***/ }),

/***/ "./public/assets/code-solid.svg":
/*!**************************************!*\
  !*** ./public/assets/code-solid.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/code-solid.svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/code-solid.svg?");

/***/ }),

/***/ "./public/assets/country-searcher-snapshot.png24":
/*!*******************************************************!*\
  !*** ./public/assets/country-searcher-snapshot.png24 ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/country-searcher-snapshot.png24\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/country-searcher-snapshot.png24?");

/***/ }),

/***/ "./public/assets/csharp.svg":
/*!**********************************!*\
  !*** ./public/assets/csharp.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/csharp.svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/csharp.svg?");

/***/ }),

/***/ "./public/assets/css3-alt-brands.svg":
/*!*******************************************!*\
  !*** ./public/assets/css3-alt-brands.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/css3-alt-brands.svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/css3-alt-brands.svg?");

/***/ }),

/***/ "./public/assets/docker.svg":
/*!**********************************!*\
  !*** ./public/assets/docker.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/docker.svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/docker.svg?");

/***/ }),

/***/ "./public/assets/easybank-snapshot.png24":
/*!***********************************************!*\
  !*** ./public/assets/easybank-snapshot.png24 ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/easybank-snapshot.png24\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/easybank-snapshot.png24?");

/***/ }),

/***/ "./public/assets/expand-arrows-alt-solid.svg":
/*!***************************************************!*\
  !*** ./public/assets/expand-arrows-alt-solid.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/expand-arrows-alt-solid.svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/expand-arrows-alt-solid.svg?");

/***/ }),

/***/ "./public/assets/file-download-solid.svg":
/*!***********************************************!*\
  !*** ./public/assets/file-download-solid.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/file-download-solid.svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/file-download-solid.svg?");

/***/ }),

/***/ "./public/assets/fireblog-snapshot.png24":
/*!***********************************************!*\
  !*** ./public/assets/fireblog-snapshot.png24 ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/fireblog-snapshot.png24\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/fireblog-snapshot.png24?");

/***/ }),

/***/ "./public/assets/fireswift-snapshot.png24":
/*!************************************************!*\
  !*** ./public/assets/fireswift-snapshot.png24 ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/fireswift-snapshot.png24\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/fireswift-snapshot.png24?");

/***/ }),

/***/ "./public/assets/fylo-snapshot.png24":
/*!*******************************************!*\
  !*** ./public/assets/fylo-snapshot.png24 ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/fylo-snapshot.png24\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/fylo-snapshot.png24?");

/***/ }),

/***/ "./public/assets/git-alt-brands.svg":
/*!******************************************!*\
  !*** ./public/assets/git-alt-brands.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/git-alt-brands.svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/git-alt-brands.svg?");

/***/ }),

/***/ "./public/assets/github-square-brands.svg":
/*!************************************************!*\
  !*** ./public/assets/github-square-brands.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/github-square-brands.svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/github-square-brands.svg?");

/***/ }),

/***/ "./public/assets/hand-point-up-regular.svg":
/*!*************************************************!*\
  !*** ./public/assets/hand-point-up-regular.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/hand-point-up-regular.svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/hand-point-up-regular.svg?");

/***/ }),

/***/ "./public/assets/html5-brands.svg":
/*!****************************************!*\
  !*** ./public/assets/html5-brands.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/html5-brands.svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/html5-brands.svg?");

/***/ }),

/***/ "./public/assets/icons8-mysql.svg":
/*!****************************************!*\
  !*** ./public/assets/icons8-mysql.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/icons8-mysql.svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/icons8-mysql.svg?");

/***/ }),

/***/ "./public/assets/icons8-node-js.svg":
/*!******************************************!*\
  !*** ./public/assets/icons8-node-js.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/icons8-node-js.svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/icons8-node-js.svg?");

/***/ }),

/***/ "./public/assets/icons8-python.svg":
/*!*****************************************!*\
  !*** ./public/assets/icons8-python.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/icons8-python.svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/icons8-python.svg?");

/***/ }),

/***/ "./public/assets/ip-address-tracker-snapshot.png24":
/*!*********************************************************!*\
  !*** ./public/assets/ip-address-tracker-snapshot.png24 ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/ip-address-tracker-snapshot.png24\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/ip-address-tracker-snapshot.png24?");

/***/ }),

/***/ "./public/assets/js-square-brands.svg":
/*!********************************************!*\
  !*** ./public/assets/js-square-brands.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/js-square-brands.svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/js-square-brands.svg?");

/***/ }),

/***/ "./public/assets/link-solid.svg":
/*!**************************************!*\
  !*** ./public/assets/link-solid.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/link-solid.svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/link-solid.svg?");

/***/ }),

/***/ "./public/assets/linkedin-brands.svg":
/*!*******************************************!*\
  !*** ./public/assets/linkedin-brands.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/linkedin-brands.svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/linkedin-brands.svg?");

/***/ }),

/***/ "./public/assets/linux.svg":
/*!*********************************!*\
  !*** ./public/assets/linux.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/linux.svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/linux.svg?");

/***/ }),

/***/ "./public/assets/nextjs-original.svg":
/*!*******************************************!*\
  !*** ./public/assets/nextjs-original.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/nextjs-original.svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/nextjs-original.svg?");

/***/ }),

/***/ "./public/assets/oracle.svg":
/*!**********************************!*\
  !*** ./public/assets/oracle.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/oracle.svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/oracle.svg?");

/***/ }),

/***/ "./public/assets/palette-solid.svg":
/*!*****************************************!*\
  !*** ./public/assets/palette-solid.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/palette-solid.svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/palette-solid.svg?");

/***/ }),

/***/ "./public/assets/react-brands.svg":
/*!****************************************!*\
  !*** ./public/assets/react-brands.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/react-brands.svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/react-brands.svg?");

/***/ }),

/***/ "./public/assets/reactcommerce-snapshot.png24":
/*!****************************************************!*\
  !*** ./public/assets/reactcommerce-snapshot.png24 ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/reactcommerce-snapshot.png24\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/reactcommerce-snapshot.png24?");

/***/ }),

/***/ "./public/assets/retrogames-snapshot.png24":
/*!*************************************************!*\
  !*** ./public/assets/retrogames-snapshot.png24 ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/retrogames-snapshot.png24\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/retrogames-snapshot.png24?");

/***/ }),

/***/ "./public/assets/sass-brands.svg":
/*!***************************************!*\
  !*** ./public/assets/sass-brands.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/sass-brands.svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/sass-brands.svg?");

/***/ }),

/***/ "./public/assets/share-square-solid.svg":
/*!**********************************************!*\
  !*** ./public/assets/share-square-solid.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/share-square-solid.svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/share-square-solid.svg?");

/***/ }),

/***/ "./public/assets/sitemap-solid.svg":
/*!*****************************************!*\
  !*** ./public/assets/sitemap-solid.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/sitemap-solid.svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/sitemap-solid.svg?");

/***/ }),

/***/ "./public/assets/space-tourism-snapshot.png24":
/*!****************************************************!*\
  !*** ./public/assets/space-tourism-snapshot.png24 ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/space-tourism-snapshot.png24\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/space-tourism-snapshot.png24?");

/***/ }),

/***/ "./public/assets/typescript-brands.svg":
/*!*********************************************!*\
  !*** ./public/assets/typescript-brands.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/typescript-brands.svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/typescript-brands.svg?");

/***/ }),

/***/ "./public/assets/whatsapp.svg":
/*!************************************!*\
  !*** ./public/assets/whatsapp.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/whatsapp.svg\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/whatsapp.svg?");

/***/ }),

/***/ "./public/assets/yourjob-snapshot.png24":
/*!**********************************************!*\
  !*** ./public/assets/yourjob-snapshot.png24 ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/yourjob-snapshot.png24\";\n\n//# sourceURL=webpack://romario-frontend/./public/assets/yourjob-snapshot.png24?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;