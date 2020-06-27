/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/game.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module './js/menu'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module './js/Instructions'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _js_setGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/setGame */ \"./src/js/setGame.js\");\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module './js/getName'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module './js/Room'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module './js/Space'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module './js/Scores'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module './js/End'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module './css/style.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\n\n\n\n\n\n\n\n\nvar config = {\n  width: 800,\n  height: 480,\n  backgroundColor: 0x000000,\n  scene: [_js_setGame__WEBPACK_IMPORTED_MODULE_1__[\"default\"], !(function webpackMissingModule() { var e = new Error(\"Cannot find module './js/menu'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error(\"Cannot find module './js/getName'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error(\"Cannot find module './js/Instructions'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error(\"Cannot find module './js/Room'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error(\"Cannot find module './js/Space'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error(\"Cannot find module './js/Scores'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error(\"Cannot find module './js/End'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],\n  pixelArt: true,\n  physics: {\n    default: \"arcade\",\n    arcade: {\n      debug: false,\n    },\n  },\n};\nlet cursors;\nlet human;\nlet game = new Phaser.Game(config);\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/js/setGame.js":
/*!***************************!*\
  !*** ./src/js/setGame.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass setGame extends Phaser.Scene {\n  constructor() {\n    super(\"setGame\");\n  }\n\n  loadImages() {\n    this.load.image(\"menu\", \"../src/assets/images/menu.png\");\n    this.load.image(\"background1\", \"../src/assets/images/background1.jpg\");\n    this.load.image(\"background2\", \"../src/assets/images/background2.jpg\");\n    this.load.image(\"background3\", \"../src/assets/images/background3.jpg\");\n    this.load.image(\"background4\", \"../src/assets/images/background4.png\");\n    this.load.image(\"background5\", \"../src/assets/images/Background-4.png\");\n  }\n\n  loadSprites() {\n    this.load.spritesheet(\"ball\", \"../src/assets/images/balls.png\", {\n      frameWidth: 128,\n      frameHeight: 128,\n    });\n    this.load.spritesheet(\"human\", \"../src/assets/images/human.png\", {\n      frameWidth: 32,\n      frameHeight: 32,\n    });\n    this.load.spritesheet(\n      \"green_virus\",\n      \"../src/assets/spritesheets/Green_Virus.png\",\n      {\n        frameWidth: 50,\n        frameHeight: 50,\n      }\n    );\n    this.load.spritesheet(\n      \"blue_virus\",\n      \"../src/assets/spritesheets/Blue_Virus.png\",\n      {\n        frameWidth: 50,\n        frameHeight: 50,\n      }\n    );\n    this.load.spritesheet(\n      \"red_virus\",\n      \"../src/assets/spritesheets/Red_Virus.png\",\n      {\n        frameWidth: 50,\n        frameHeight: 50,\n      }\n    );\n    this.load.spritesheet(\n      \"pink_virus\",\n      \"../src/assets/spritesheets/Pink_Virus.png\",\n      {\n        frameWidth: 50,\n        frameHeight: 50,\n      }\n    );\n    this.load.spritesheet(\n      \"explosion\",\n      \"../src/assets/spritesheets/explosion.png\",\n      {\n        frameWidth: 16,\n        frameHeight: 16,\n      }\n    );\n\n    this.load.spritesheet(\n      \"power-up\",\n      \"../src/assets/spritesheets/power-up.png\",\n      {\n        frameWidth: 16,\n        frameHeight: 16,\n      }\n    );\n\n    this.load.spritesheet(\"ship\", \"../src/assets/spritesheets/ship.png\", {\n      frameWidth: 16,\n      frameHeight: 24,\n    });\n\n    this.load.spritesheet(\"beam\", \"../src/assets/spritesheets/beam.png\", {\n      frameWidth: 16,\n      frameHeight: 16,\n    });\n  }\n\n  loadAudio() {\n    this.load.audio(\"music_menu\", \"../src/assets/sounds/SkyPortal.mp3\");\n    this.load.audio(\n      \"music_scene1\",\n      \"../src/assets/sounds/ObservingTheStar.ogg\"\n    );\n    this.load.audio(\"backRoom\", \"../src/assets/sounds/ghost.wav\");\n    this.load.audio(\n      \"music_scene2\",\n      \"../src/assets/sounds/sci-fi_platformer12.ogg\",\n      \"../src/assets/sounds/sci-fi_platformer12.mp3\"\n    );\n    this.load.audio(\"music_scene3\", \"../src/assets/sounds/action3.ogg\");\n    this.load.audio(\"music_scene4\", \"../src/assets/sounds/retro.wav\");\n    this.load.audio(\"music_scene5\", \"../src/assets/sounds/ScifiAction.mp3\");\n    this.load.audio(\"victory\", \"../src/assets/sounds/Heavy_ConceptB.wav\");\n    this.load.audio(\n      \"audio_beam\",\n      \"../src/assets/sounds/beam.ogg\",\n      \"../src/assets/sounds/beam.mp3\"\n    );\n    this.load.audio(\n      \"audio_explosion\",\n      \"../src/assets/sounds/explosion.ogg\",\n      \"../src/assets/sounds/explosion.mp3\"\n    );\n    this.load.audio(\n      \"audio_pickup\",\n      \"../src/assets/sounds/pickup.ogg\",\n      \"../src/assets/sounds/pickup.mp3\"\n    );\n  }\n\n  preload() {\n    this.loadImages();\n    this.loadSprites();\n    this.loadAudio();\n    this.load.bitmapFont(\n      \"pixelFont\",\n      \"../src/assets/font/font.png\",\n      \"../src/assets/font/font.xml\"\n    );\n  }\n\n  create() {\n    this.scene.start(\"menu\");\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (setGame);\n\n\n//# sourceURL=webpack:///./src/js/setGame.js?");

/***/ })

/******/ });