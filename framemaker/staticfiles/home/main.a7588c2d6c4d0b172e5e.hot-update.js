/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatetest"]("main",{

/***/ "./src/components/upload.js":
/*!**********************************!*\
  !*** ./src/components/upload.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/message/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/upload/index.js\");\n/* harmony import */ var antd_img_crop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd-img-crop */ \"./node_modules/antd-img-crop/dist/antd-img-crop.esm.js\");\n/* harmony import */ var _avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./avatar */ \"./src/components/avatar.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/button/index.js\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/icons/DownloadOutlined.js\");\n\n\n\n\n\n\n\nconst UploadPic = () => {\n  const [fileList, setFileList] = react__WEBPACK_IMPORTED_MODULE_0__.useState([]);\n  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);\n  const domain = \"http://127.0.0.1:8000/\";\n\n  const download = e => {\n    console.log(e.target.href);\n    fetch(e.target.href, {\n      method: \"GET\",\n      headers: {}\n    }).then(response => {\n      response.arrayBuffer().then(function (buffer) {\n        const url = window.URL.createObjectURL(new Blob([buffer]));\n      });\n    }).catch(err => {\n      console.log(err);\n    });\n  };\n\n  const onChange = ({\n    fileList: newFileList\n  }) => {\n    setFileList(newFileList);\n    console.log(newFileList[0].response);\n\n    if (newFileList[0].status !== 'uploading') {\n      console.log(info.file, info.fileList);\n    }\n\n    if (newFileList[0].status === 'done') {\n      antd__WEBPACK_IMPORTED_MODULE_3__.default.success(`${info.file.name} file uploaded successfully.`);\n    } else if (newFileList[0].status === 'error') {\n      antd__WEBPACK_IMPORTED_MODULE_3__.default.error(`${info.file.name} file upload failed.`);\n    }\n\n    setOpen(true);\n  };\n\n  const onPreview = async file => {\n    let src = file.url;\n\n    if (!src) {\n      src = await new Promise(resolve => {\n        const reader = new FileReader();\n        reader.readAsDataURL(file.originFileObj);\n\n        reader.onload = () => resolve(reader.result);\n\n        console.log(\"helllllo\" + reader.result);\n      });\n    }\n\n    const image = new Image();\n    image.src = src;\n    const imgWindow = window.open(src);\n    imgWindow.document.write(image.outerHTML);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd_img_crop__WEBPACK_IMPORTED_MODULE_1__.default, {\n    rotate: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_4__.default, {\n    action: `${domain}/upload/`,\n    listType: \"picture-card\",\n    fileList: fileList,\n    onChange: onChange,\n    onPreview: onPreview,\n    name: \"image\"\n  }, fileList.length < 1 && '+ Upload')), open ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_avatar__WEBPACK_IMPORTED_MODULE_2__.default, {\n    src: `${domain}/media/${fileList[fileList.length - 1].response}`\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n    href: `${domain}/media/${fileList[fileList.length - 1].response}`,\n    download: true,\n    onClick: e => download(e)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_5__.default, {\n    type: \"primary\",\n    shape: \"round\",\n    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.default, null),\n    size: \"large\"\n  }, \"\\u062F\\u0627\\u0646\\u0644\\u0648\\u062F\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"br\", null)) : null);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UploadPic);\n\n//# sourceURL=webpack://test/./src/components/upload.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a823ba2c5e12880ac764")
/******/ })();
/******/ 
/******/ }
);