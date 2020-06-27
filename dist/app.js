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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/menu */ \"./src/js/menu.js\");\n/* harmony import */ var _js_Instructions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/Instructions */ \"./src/js/Instructions.js\");\n/* harmony import */ var _js_setGame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/setGame */ \"./src/js/setGame.js\");\n/* harmony import */ var _js_getName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/getName */ \"./src/js/getName.js\");\n/* harmony import */ var _js_Room__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/Room */ \"./src/js/Room.js\");\n/* harmony import */ var _js_Space__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/Space */ \"./src/js/Space.js\");\n/* harmony import */ var _js_Scores__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/Scores */ \"./src/js/Scores.js\");\n/* harmony import */ var _js_End__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/End */ \"./src/js/End.js\");\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module './css/style.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\n\n\n\n\n\n\n\n\nvar config = {\n  width: 800,\n  height: 480,\n  backgroundColor: 0x000000,\n  scene: [_js_setGame__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _js_menu__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _js_getName__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _js_Instructions__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _js_Room__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _js_Space__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _js_Scores__WEBPACK_IMPORTED_MODULE_6__[\"default\"], _js_End__WEBPACK_IMPORTED_MODULE_7__[\"default\"]],\n  pixelArt: true,\n  physics: {\n    default: \"arcade\",\n    arcade: {\n      debug: false,\n    },\n  },\n};\nlet cursors;\nlet human;\nlet game = new Phaser.Game(config);\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/js/End.js":
/*!***********************!*\
  !*** ./src/js/End.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass End extends Phaser.Scene {\n  constructor() {\n    super(\"end\");\n  }\n\n  create() {\n    this.background = this.add.tileSprite(\n      0,\n      0,\n      this.game.config.width,\n      this.game.config.height,\n      \"menu\"\n    );\n    this.background.setOrigin(0, 0);\n    this.congratsText = this.add.text(\n      this.game.config.width / 2,\n      220,\n      \"Well done... you are a new hero!\",\n      { fontSize: 24 }\n    );\n    this.congratsText.setOrigin(0.5, 0);\n\n    const backtButton = this.add.text(this.game.config.width / 2, 430, \"BACK\", {\n      fontSize: 24,\n    });\n    backtButton.setOrigin(0.5, 0);\n    backtButton.setInteractive();\n\n    backtButton.on(\"pointerdown\", () => {\n      this.game.sound.stopAll();\n      this.scene.start(\"menu\");\n    });\n  }\n\n  update() {\n    this.background.tilePositionY -= 2.5;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (End);\n\n\n//# sourceURL=webpack:///./src/js/End.js?");

/***/ }),

/***/ "./src/js/Instructions.js":
/*!********************************!*\
  !*** ./src/js/Instructions.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Instructions extends Phaser.Scene {\n  constructor() {\n    super(\"instructions\");\n  }\n  create() {\n    this.background = this.add.tileSprite(\n      0,\n      0,\n      this.game.config.width,\n      this.game.config.height,\n      \"menu\"\n    );\n    this.background.setOrigin(0, 0);\n\n    this.instructionsTitle = this.add.text(\n      this.game.config.width / 2,\n      50,\n      \"How to play\",\n      { fontSize: 34 }\n    );\n    this.instructionsTitle.setOrigin(0.5, 0);\n\n    this.instruction1 = this.add.text(\n      this.game.config.width / 2,\n      110,\n      \"1) Drive the ship with your keyboard arrows\",\n      { fontSize: 18 }\n    );\n    this.instruction1.setOrigin(0.5, 0);\n\n    this.instruction2 = this.add.text(\n      this.game.config.width / 2,\n      140,\n      \"2) Use the spacebar to shot and kill the viruses\",\n      { fontSize: 18 }\n    );\n    this.instruction2.setOrigin(0.5, 0);\n\n    this.instruction3 = this.add.text(\n      this.game.config.width / 2,\n      170,\n      \"3) Collect all spheres around you in order to finish the level\",\n      { fontSize: 18 }\n    );\n    this.instruction3.setOrigin(0.5, 0);\n\n    this.instruction4 = this.add.text(\n      this.game.config.width / 2,\n      200,\n      \"4) Every time you pass a level, a new portal is opened\",\n      { fontSize: 18 }\n    );\n    this.instruction4.setOrigin(0.5, 0);\n\n    this.instruction5 = this.add.text(\n      this.game.config.width / 2,\n      230,\n      \"5) Kill as much viruses as you can in order to get a higher score\",\n      { fontSize: 18 }\n    );\n    this.instruction5.setOrigin(0.5, 0);\n\n    this.instruction6 = this.add.text(\n      this.game.config.width / 2,\n      260,\n      \"6) Enjoy!\",\n      { fontSize: 18 }\n    );\n    this.instruction6.setOrigin(0.5, 0);\n\n    const backtButton = this.add.text(this.game.config.width / 2, 430, \"BACK\", {\n      fontSize: 24,\n    });\n    backtButton.setOrigin(0.5, 0);\n    backtButton.setInteractive();\n\n    backtButton.on(\"pointerdown\", () => {\n      this.game.sound.stopAll();\n      this.scene.start(\"menu\");\n    });\n  }\n\n  update() {\n    this.background.tilePositionY -= 2.5;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Instructions);\n\n\n//# sourceURL=webpack:///./src/js/Instructions.js?");

/***/ }),

/***/ "./src/js/Room.js":
/*!************************!*\
  !*** ./src/js/Room.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Room extends Phaser.Scene {\n  constructor() {\n    super(\"room\");\n  }\n\n  loadSpace() {\n    this.music.pause(this.musicConfig);\n    this.scene.start(\"space\");\n  }\n\n  addBalls() {\n    this.ball1 = this.physics.add.sprite(100, 100, \"ball\");\n    this.ball2 = this.physics.add.sprite(700, 100, \"ball\");\n    this.ball3 = this.physics.add.sprite(100, 400, \"ball\");\n    this.ball4 = this.physics.add.sprite(700, 400, \"ball\");\n  }\n\n  setBackground() {\n    this.background = this.add.tileSprite(\n      0,\n      0,\n      this.game.config.width,\n      this.game.config.height,\n      \"background1\"\n    );\n    this.background.setOrigin(0, 0);\n  }\n\n  addPlayer() {\n    this.player = this.physics.add.sprite(400, 240, \"human\");\n    this.player.setScale(2);\n    this.player.setBounce(0.2);\n    this.player.setCollideWorldBounds(true);\n  }\n\n  overlaps() {\n    if (this.game.completed === 0) {\n      this.physics.add.overlap(\n        this.player,\n        this.ball1,\n        this.loadSpace,\n        null,\n        this\n      );\n    } else if (this.game.completed === 1) {\n      this.physics.add.overlap(\n        this.player,\n        this.ball2,\n        this.loadSpace,\n        null,\n        this\n      );\n    } else if (this.game.completed === 2) {\n      this.physics.add.overlap(\n        this.player,\n        this.ball3,\n        this.loadSpace,\n        null,\n        this\n      );\n    } else if (this.game.completed === 3) {\n      this.physics.add.overlap(\n        this.player,\n        this.ball4,\n        this.loadSpace,\n        null,\n        this\n      );\n    }\n  }\n\n  sceneMusic() {\n    this.music = this.sound.add(\"music_scene1\");\n    this.musicConfig = {\n      mute: false,\n      volume: 1,\n      rate: 1,\n      detune: 0,\n      seek: 0,\n      loop: false,\n      delay: 0,\n    };\n    this.music.play(this.musicConfig);\n  }\n\n  ballAnimations() {\n    this.anims.create({\n      key: \"ball1\",\n      frames: this.anims.generateFrameNumbers(\"ball\", { start: 0, end: 1 }),\n      frameRate: 20,\n      repeat: -1,\n    });\n    this.anims.create({\n      key: \"ball2\",\n      frames: this.anims.generateFrameNumbers(\"ball\", { start: 2, end: 3 }),\n      frameRate: 20,\n      repeat: -1,\n    });\n    this.anims.create({\n      key: \"ball3\",\n      frames: this.anims.generateFrameNumbers(\"ball\", { start: 4, end: 5 }),\n      frameRate: 20,\n      repeat: -1,\n    });\n    this.anims.create({\n      key: \"ball4\",\n      frames: this.anims.generateFrameNumbers(\"ball\", { start: 6, end: 7 }),\n      frameRate: 20,\n      repeat: -1,\n    });\n  }\n\n  humanAnimations() {\n    this.anims.create({\n      key: \"stop\",\n      frames: [{ key: \"human\", frame: 1 }],\n      frameRate: 20,\n    });\n\n    this.anims.create({\n      key: \"down\",\n      frames: this.anims.generateFrameNumbers(\"human\", { start: 0, end: 2 }),\n      frameRate: 20,\n      repeat: -1,\n    });\n\n    this.anims.create({\n      key: \"left\",\n      frames: this.anims.generateFrameNumbers(\"human\", { start: 3, end: 5 }),\n      frameRate: 10,\n      repeat: -1,\n    });\n\n    this.anims.create({\n      key: \"right\",\n      frames: this.anims.generateFrameNumbers(\"human\", { start: 6, end: 8 }),\n      frameRate: 10,\n      repeat: -1,\n    });\n\n    this.anims.create({\n      key: \"up\",\n      frames: this.anims.generateFrameNumbers(\"human\", { start: 9, end: 11 }),\n      frameRate: 10,\n      repeat: -1,\n    });\n  }\n\n  explodeAnimation() {\n    this.anims.create({\n      key: \"explode\",\n      frames: this.anims.generateFrameNumbers(\"explosion\"),\n      frameRate: 20,\n      repeat: 0,\n      hideOnComplete: true,\n    });\n  }\n  beamAnimation() {\n    this.anims.create({\n      key: \"beam_anim\",\n      frames: this.anims.generateFrameNumbers(\"beam\"),\n      frameRate: 20,\n      repeat: -1,\n    });\n  }\n\n  playBallsAnimation() {\n    if (this.game.completed === 0) {\n      this.ball1.anims.play(\"ball1\", true);\n    } else if (this.game.completed === 1) {\n      this.ball2.anims.play(\"ball2\", true);\n    } else if (this.game.completed === 2) {\n      this.ball3.anims.play(\"ball3\", true);\n    } else if (this.game.completed === 3) {\n      this.ball4.anims.play(\"ball4\", true);\n    } else {\n      this.ball1.anims.play(\"ball1\", true);\n      this.ball2.anims.play(\"ball2\", true);\n      this.ball3.anims.play(\"ball3\", true);\n      this.ball4.anims.play(\"ball4\", true);\n    }\n  }\n\n  PlayerMovementControl() {\n    this.player.setVelocity(0);\n    if (this.cursors.down.isDown) {\n      this.player.setVelocityY(+160);\n\n      this.player.anims.play(\"down\", true);\n    } else if (this.cursors.left.isDown) {\n      this.player.setVelocityX(-160);\n\n      this.player.anims.play(\"left\", true);\n    } else if (this.cursors.right.isDown) {\n      this.player.setVelocityX(160);\n\n      this.player.anims.play(\"right\", true);\n    } else if (this.cursors.up.isDown) {\n      this.player.setVelocityY(-160);\n\n      this.player.anims.play(\"up\", true);\n    } else {\n      this.player.setVelocityX(0);\n      this.player.anims.play(\"stop\", false);\n    }\n\n    if (this.cursors.up.isDown && this.player.body.touching.down) {\n      this.player.setVelocityY(-330);\n    }\n  }\n\n  create() {\n    //ADDING BACKGROUND\n    this.setBackground();\n\n    //ADDING BALLS\n    this.addBalls();\n\n    //BALLS ANIMATIONS\n    this.ballAnimations();\n\n    //ADDING HUMAN\n\n    this.addPlayer();\n\n    //HUMAN ANIMATIONS\n    this.humanAnimations();\n\n    //HUMAN OVERLAP\n    this.overlaps();\n\n    //CURSORS VARIABLE\n    this.cursors = this.input.keyboard.createCursorKeys();\n\n    //SCENE MUSIC\n\n    this.sceneMusic();\n\n    //EXPLODE ANIMATION\n\n    this.explodeAnimation();\n\n    //BEAM ANIMATION\n    this.beamAnimation();\n  }\n\n  update() {\n    this.playBallsAnimation();\n    this.PlayerMovementControl();\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Room);\n\n\n//# sourceURL=webpack:///./src/js/Room.js?");

/***/ }),

/***/ "./src/js/Scores.js":
/*!**************************!*\
  !*** ./src/js/Scores.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Scores extends Phaser.Scene {\n  constructor() {\n    super(\"scores\");\n  }\n\n  displayBetterScores(betterScores) {\n    let tableContainer = document.createElement(\"div\");\n    tableContainer.setAttribute(\"id\", \"tableContainer\");\n    let table = document.createElement(\"table\");\n    let row1 = document.createElement(\"tr\");\n    let playerNameTitle = document.createElement(\"th\");\n    playerNameTitle.textContent = \"Player\";\n    let playerScoreTitle = document.createElement(\"th\");\n    playerScoreTitle.textContent = \"Score\";\n    row1.appendChild(playerNameTitle);\n    row1.appendChild(playerScoreTitle);\n    table.appendChild(row1);\n\n    for (let i = 0; i < 10; i += 1) {\n      let rowRecord = document.createElement(\"tr\");\n      let playerName = document.createElement(\"td\");\n      playerName.textContent = betterScores[i].user;\n      let playerScore = document.createElement(\"td\");\n      playerScore.textContent = betterScores[i].score;\n      rowRecord.appendChild(playerName);\n      rowRecord.appendChild(playerScore);\n      table.appendChild(rowRecord);\n    }\n    tableContainer.appendChild(table);\n    document.body.appendChild(tableContainer);\n  }\n\n  getBetterScores(betterScores) {\n    let records = betterScores.result;\n\n    let swapped;\n    do {\n      swapped = false;\n\n      for (var i = 0; i < records.length; i++) {\n        if (records[i] != undefined && records[i + 1] != undefined) {\n          if (records[i].score < records[i + 1].score) {\n            let tmp = records[i];\n            records[i] = records[i + 1];\n            records[i + 1] = tmp;\n            swapped = true;\n          }\n        }\n      }\n    } while (swapped);\n    this.displayBetterScores(records);\n  }\n\n  async get() {\n    let response = await fetch(\n      \"https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/\",\n      { mode: \"cors\" }\n    );\n    let data = await response.json();\n    this.getBetterScores(data);\n  }\n\n  create() {\n    this.background = this.add.tileSprite(\n      0,\n      0,\n      this.game.config.width,\n      this.game.config.height,\n      \"menu\"\n    );\n    this.background.setOrigin(0, 0);\n\n    this.scoreTitle = this.add.text(\n      this.game.config.width / 2,\n      50,\n      \"Leader Board\",\n      { fontSize: 34 }\n    );\n    this.scoreTitle.setOrigin(0.5, 0);\n\n    const backtButton = this.add.text(this.game.config.width / 2, 430, \"BACK\", {\n      fontSize: 24,\n    });\n    backtButton.setOrigin(0.5, 0);\n    backtButton.setInteractive();\n\n    backtButton.on(\"pointerdown\", () => {\n      this.game.sound.stopAll();\n      document\n        .querySelector(\"#tableContainer\")\n        .parentNode.removeChild(document.querySelector(\"#tableContainer\"));\n      this.scene.start(\"menu\");\n    });\n\n    this.get();\n  }\n\n  update() {\n    this.background.tilePositionY -= 2.5;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Scores);\n\n\n//# sourceURL=webpack:///./src/js/Scores.js?");

/***/ }),

/***/ "./src/js/Space.js":
/*!*************************!*\
  !*** ./src/js/Space.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module './beam'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _explosion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./explosion */ \"./src/js/explosion.js\");\n/* istanbul ignore next */\n\n\n\nclass Space extends Phaser.Scene {\n  constructor() {\n    super({ key: \"space\" });\n  }\n\n  scoreGraphic() {\n    var graphics = this.add.graphics();\n    graphics.fillStyle(0x000000, 1);\n    graphics.beginPath();\n    graphics.moveTo(0, 0);\n    graphics.lineTo(this.game.config.width, 0);\n    graphics.lineTo(this.game.config.width, 20);\n    graphics.lineTo(0, 20);\n    graphics.lineTo(0, 0);\n    graphics.closePath();\n    graphics.fillPath();\n  }\n\n  async addScoreToApi() {\n    var url =\n      \"https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/\";\n    var data = { user: this.game.playerName, score: this.game.score };\n\n    fetch(url, {\n      method: \"POST\",\n      body: JSON.stringify(data),\n      headers: {\n        \"Content-Type\": \"application/json\",\n      },\n    })\n      .then((res) => res.json())\n      .catch((error) => console.error(\"Error:\", error))\n      .then((response) => console.log(\"Success:\", response));\n  }\n\n  pickPowerUp(player, powerUp) {\n    this.collect -= 1;\n    if (this.collect < 0) {\n      this.music.pause(this.musicConfig);\n      this.game.completed += 1;\n      if (this.game.completed === 4) {\n        this.victory.play();\n        this.addScoreToApi();\n        this.scene.start(\"end\");\n      } else {\n        this.ghost.play();\n        this.scene.start(\"room\");\n      }\n    }\n    powerUp.disableBody(true, true);\n    this.pickupSound.play();\n  }\n\n  resetPlayer() {\n    var x = this.game.config.width / 2 - 8;\n    var y = this.game.config.height + 64;\n    this.player.enableBody(true, x, y, true, true);\n    this.player.alpha = 0.5;\n    var tween = this.tweens.add({\n      targets: this.player,\n      y: this.game.config.height - 64,\n      ease: \"Power1\",\n      duration: 1500,\n      repeat: false,\n      onComplete: function () {\n        this.player.alpha = 1;\n      },\n      callbackScope: this,\n    });\n  }\n\n  resetShipPos(virus) {\n    virus.y = 0;\n    var randomX = Phaser.Math.Between(0, this.game.config.width);\n    virus.x = randomX;\n  }\n\n  hurtPlayer(player, enemy) {\n    this.resetShipPos(enemy);\n    if (this.player.alpha < 1) {\n      return;\n    }\n    var explosion = new _explosion__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this, player.x, player.y);\n    player.disableBody(true, true);\n    this.explosionSound.play();\n    this.time.addEvent({\n      delay: 1000,\n      callback: this.resetPlayer,\n      callbackScope: this,\n      loop: false,\n    });\n    this.lifes -= 1;\n    if (this.lifes === 0) {\n      this.game.score = 0;\n      this.music.pause(this.musicConfig);\n      this.ghost.play();\n      this.scene.start(\"room\");\n    }\n  }\n\n  zeroPad(number, size) {\n    var stringNumber = String(number);\n    while (stringNumber.length < (size || 2)) {\n      stringNumber = \"0\" + stringNumber;\n    }\n    return stringNumber;\n  }\n\n  hitEnemy(projectile, enemy) {\n    var explosion = new _explosion__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this, enemy.x, enemy.y);\n    projectile.destroy();\n    this.resetShipPos(enemy);\n    this.game.score += 15;\n    this.scoreLabel.text = \"SCORE \" + this.zeroPad(this.game.score, 6);\n    this.explosionSound.play();\n  }\n\n  amountEnemies() {\n    if (this.game.completed === 0) {\n      return 5;\n    } else if (this.game.completed === 1) {\n      return 2;\n    } else if (this.game.completed === 2) {\n      return 3;\n    } else if (this.game.completed === 3) {\n      return 4;\n    }\n  }\n\n  enemiesSpriteControl() {\n    if (this.game.completed === 0) {\n      return this.physics.add.sprite(16, 16, \"green_virus\");\n    } else if (this.game.completed === 1) {\n      return this.physics.add.sprite(16, 16, \"pink_virus\");\n    } else if (this.game.completed === 2) {\n      return this.physics.add.sprite(16, 16, \"red_virus\");\n    } else if (this.game.completed === 3) {\n      return this.physics.add.sprite(16, 16, \"pink_virus\");\n    }\n  }\n\n  enemiesScaleControl() {\n    if (this.game.completed === 0) {\n      return 1;\n    } else if (this.game.completed === 1) {\n      return 2;\n    } else if (this.game.completed === 2) {\n      return 2;\n    } else if (this.game.completed === 3) {\n      return 1;\n    }\n  }\n\n  virusVelocityControl() {\n    if (this.game.completed === 0) {\n      return [200, 200];\n    } else if (this.game.completed === 1) {\n      return [250, 250];\n    } else if (this.game.completed === 2) {\n      return [300, 300];\n    } else if (this.game.completed === 3) {\n      return [300, 300];\n    }\n  }\n\n  setEnemies() {\n    this.enemies = this.physics.add.group();\n    this.maxVirus = this.amountEnemies();\n    for (var i = 0; i <= this.maxVirus; i++) {\n      this.virus = this.enemiesSpriteControl();\n      this.virus.setScale(this.enemiesScaleControl());\n      this.virusScale;\n      this.enemies.add(this.virus);\n      this.virus.setRandomPosition(\n        0,\n        0,\n        this.game.config.width,\n        this.game.config.height\n      );\n      this.virus.setVelocity(\n        this.virusVelocityControl()[0],\n        this.virusVelocityControl()[1]\n      );\n\n      //this.virus.setVelocity(200, 200); //\n      this.virus.setCollideWorldBounds(true);\n      this.virus.setBounce(1);\n    }\n  }\n\n  backgroundLevelControl() {\n    if (this.game.completed === 0) {\n      return \"background2\";\n    } else if (this.game.completed === 1) {\n      return \"background3\";\n    } else if (this.game.completed === 2) {\n      return \"background4\";\n    } else if (this.game.completed === 3) {\n      return \"background5\";\n    }\n  }\n\n  setBackground() {\n    let backgroundLevel = this.backgroundLevelControl();\n    this.background = this.add.tileSprite(\n      0,\n      0,\n      this.game.config.width,\n      this.game.config.height,\n      backgroundLevel\n    );\n    this.background.setOrigin(0, 0);\n  }\n\n  powerUpsAnimations() {\n    this.anims.create({\n      key: \"red\",\n      frames: this.anims.generateFrameNumbers(\"power-up\", { start: 0, end: 1 }),\n      frameRate: 20,\n      repeat: -1,\n    });\n\n    this.anims.create({\n      key: \"gray\",\n      frames: this.anims.generateFrameNumbers(\"power-up\", { start: 2, end: 3 }),\n      frameRate: 20,\n      repeat: -1,\n    });\n  }\n\n  setPowerUps() {\n    this.powerUps = this.physics.add.group();\n    var maxObjects = 15;\n    this.powerUpsAnimations();\n    for (var i = 0; i <= maxObjects; i++) {\n      this.powerUp = this.physics.add.sprite(16, 16, \"power-up\");\n      this.powerUps.add(this.powerUp);\n      this.powerUp.setRandomPosition(\n        0,\n        0,\n        this.game.config.width,\n        this.game.config.height\n      );\n      if (Math.random() > 0.5) {\n        this.powerUp.play(\"red\");\n      } else {\n        this.powerUp.play(\"gray\");\n      }\n\n      this.powerUp.setVelocity(100, 100);\n      this.powerUp.setCollideWorldBounds(true);\n      this.powerUp.setBounce(1);\n    }\n  }\n\n  addPlayer() {\n    this.player = this.physics.add.sprite(\n      this.game.config.width / 2 - 8,\n      this.game.config.height - 64,\n      \"ship\"\n    );\n    this.player.setScale(2);\n    this.player.setCollideWorldBounds(true);\n  }\n  firstPlayerState() {\n    this.player.disableBody(true, true);\n    this.time.addEvent({\n      delay: 1000,\n      callback: this.resetPlayer,\n      callbackScope: this,\n      loop: false,\n    });\n  }\n\n  playerPowerUpsOverlap() {\n    this.physics.add.overlap(\n      this.player,\n      this.powerUps,\n      this.pickPowerUp,\n      null,\n      this\n    );\n  }\n\n  playerEnemiesOverlap() {\n    this.physics.add.overlap(\n      this.player,\n      this.enemies,\n      this.hurtPlayer,\n      null,\n      this\n    );\n  }\n\n  projectilesEnemiesOverlap() {\n    this.physics.add.overlap(\n      this.projectiles,\n      this.enemies,\n      this.hitEnemy,\n      null,\n      this\n    );\n  }\n\n  musicLevelControl() {\n    if (this.game.completed === 0) {\n      return \"music_scene2\";\n    } else if (this.game.completed === 1) {\n      return \"music_scene3\";\n    } else if (this.game.completed === 2) {\n      return \"music_scene4\";\n    } else if (this.game.completed === 3) {\n      return \"music_scene5\";\n    }\n  }\n  setAudio() {\n    this.beamSound = this.sound.add(\"audio_beam\");\n    this.explosionSound = this.sound.add(\"audio_explosion\");\n    this.pickupSound = this.sound.add(\"audio_pickup\");\n    this.ghost = this.sound.add(\"backRoom\");\n    this.victory = this.sound.add(\"victory\");\n\n    this.music = this.sound.add(this.musicLevelControl());\n    let volumen = 1;\n    if (this.game.completed === 3) {\n      volumen = 3;\n    }\n    this.musicConfig = {\n      mute: false,\n\n      volume: volumen,\n      rate: 1,\n      detune: 0,\n      seek: 0,\n      loop: false,\n      delay: 0,\n    };\n    this.music.play(this.musicConfig);\n  }\n  destroyShip(pointer, gameObject) {\n    gameObject.setTexture(\"explosion\");\n    gameObject.play(\"explode\");\n  }\n  shootBeam() {\n    var beam = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module './beam'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this);\n    this.beamSound.play();\n  }\n\n  createScoreLabel() {\n    this.scoreLabel = this.add.bitmapText(10, 5, \"pixelFont\", \"SCORE\", 16); // font size de 16\n    this.scoreLabel.text = \"SCORE \" + this.zeroPad(this.game.score, 6);\n  }\n  create() {\n    this.lifes = 5;\n    this.collect = 15;\n    this.cursorKeys = this.input.keyboard.createCursorKeys();\n    this.spacebar = this.input.keyboard.addKey(\n      Phaser.Input.Keyboard.KeyCodes.SPACE\n    );\n\n    this.setBackground();\n    this.setEnemies();\n\n    this.input.on(\"gameobjectdown\", this.destroyShip, this); //pending\n    this.setPowerUps();\n\n    this.addPlayer();\n    this.firstPlayerState();\n\n    this.projectiles = this.add.group();\n\n    this.physics.add.collider(this.projectiles, this.powerUps, function (\n      projectile,\n      powerUp\n    ) {\n      projectile.destroy();\n    });\n\n    this.playerPowerUpsOverlap();\n    this.playerEnemiesOverlap();\n    this.projectilesEnemiesOverlap();\n\n    this.setAudio();\n\n    this.anims.create({\n      key: \"thrust\",\n      frames: this.anims.generateFrameNumbers(\"ship\"),\n      frameRate: 20,\n      repeat: -1,\n    });\n    this.scoreGraphic();\n    this.createScoreLabel();\n  }\n\n  update() {\n    this.player.anims.play(\"thrust\", true);\n\n    this.background.tilePositionY -= 2.5;\n    this.movePlayerManager();\n    if (Phaser.Input.Keyboard.JustDown(this.spacebar)) {\n      if (this.player.active) {\n        this.shootBeam();\n      }\n    }\n\n    for (var i = 0; i < this.projectiles.getChildren().length; i++) {\n      var beam = this.projectiles.getChildren()[i];\n      beam.update();\n    }\n  }\n\n  movePlayerManager() {\n    this.player.setVelocity(0);\n    if (this.cursorKeys.left.isDown) {\n      this.player.setVelocityX(-200);\n    } else if (this.cursorKeys.right.isDown) {\n      this.player.setVelocityX(200);\n    }\n    if (this.cursorKeys.up.isDown) {\n      this.player.setVelocityY(-200);\n    } else if (this.cursorKeys.down.isDown) {\n      this.player.setVelocityY(200);\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Space);\n\n\n//# sourceURL=webpack:///./src/js/Space.js?");

/***/ }),

/***/ "./src/js/explosion.js":
/*!*****************************!*\
  !*** ./src/js/explosion.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Explosion extends Phaser.GameObjects.Sprite {\n  constructor(scene, x, y) {\n    super(scene, x, y, \"explosion\");\n    scene.add.existing(this);\n    this.play(\"explode\");\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Explosion);\n\n\n//# sourceURL=webpack:///./src/js/explosion.js?");

/***/ }),

/***/ "./src/js/getName.js":
/*!***************************!*\
  !*** ./src/js/getName.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass GetName extends Phaser.Scene {\n  constructor() {\n    super(\"getName\");\n  }\n\n  inputNameField() {\n    let div = document.createElement(\"div\");\n    div.setAttribute(\"id\", \"playerNameBox\");\n    let input = document.createElement(\"input\");\n    input.setAttribute(\"id\", \"playerName\");\n    div.appendChild(input);\n    document.body.appendChild(div);\n  }\n\n  nameValidation() {\n    let input = document.querySelector(\"#playerName\");\n    if (!input.value.trim().length) {\n      input.style.background = \"red\";\n    } else {\n      this.game.playerName = input.value;\n      this.game.score = 0;\n      this.game.completed = 0;\n      input.parentNode.removeChild(input);\n      this.game.sound.stopAll();\n      this.scene.start(\"room\");\n    }\n  }\n\n  create() {\n    this.background = this.add.tileSprite(\n      0,\n      0,\n      this.game.config.width,\n      this.game.config.height,\n      \"menu\"\n    );\n    this.background.setOrigin(0, 0);\n\n    this.titleName = this.add.text(400, 150, \"Your Name\", {\n      fontSize: 24,\n    });\n    this.titleName.setOrigin(0.5);\n\n    const playButton = this.add.text(this.game.config.width / 2, 250, \"PLAY\", {\n      fontSize: 24,\n    });\n    playButton.setOrigin(0.5, 0);\n    playButton.setInteractive();\n\n    playButton.on(\"pointerdown\", () => {\n      this.nameValidation();\n    });\n\n    this.inputNameField();\n\n    const backtButton = this.add.text(this.game.config.width / 2, 430, \"BACK\", {\n      fontSize: 24,\n    });\n    backtButton.setOrigin(0.5, 0);\n    backtButton.setInteractive();\n\n    backtButton.on(\"pointerdown\", () => {\n      this.game.sound.stopAll();\n      document\n        .querySelector(\"#playerNameBox\")\n        .parentNode.removeChild(document.querySelector(\"#playerNameBox\"));\n      this.scene.start(\"menu\");\n    });\n  }\n\n  update() {\n    this.background.tilePositionY -= 2.5;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GetName);\n\n\n//# sourceURL=webpack:///./src/js/getName.js?");

/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Menu extends Phaser.Scene {\n  constructor() {\n    super(\"menu\");\n  }\n\n  create() {\n    this.background = this.add.tileSprite(\n      0,\n      0,\n      this.game.config.width,\n      this.game.config.height,\n      \"menu\"\n    );\n    this.background.setOrigin(0, 0);\n\n    this.music = this.sound.add(\"music_menu\");\n    this.musicConfig = {\n      mute: false,\n      volume: 1,\n      rate: 1,\n      detune: 0,\n      seek: 0,\n      loop: false,\n      delay: 0,\n    };\n    this.music.play(this.musicConfig);\n\n    this.gameTitle = this.add.text(\n      this.game.config.width / 2,\n      100,\n      \"KILLING COVID 19\",\n      { fontSize: 34 }\n    );\n    this.gameTitle.setOrigin(0.5, 0);\n\n    const startButton = this.add.text(\n      this.game.config.width / 2,\n      200,\n      \"START\",\n      { fontSize: 24 }\n    );\n    startButton.setOrigin(0.5, 0);\n    startButton.setInteractive();\n\n    startButton.on(\"pointerdown\", () => {\n      this.scene.start(\"getName\");\n    });\n\n    const instructionsButton = this.add.text(\n      this.game.config.width / 2,\n      250,\n      \"HOW TO PLAY\",\n      { fontSize: 24 }\n    );\n    instructionsButton.setOrigin(0.5, 0);\n    instructionsButton.setInteractive();\n\n    instructionsButton.on(\"pointerdown\", () => {\n      this.scene.start(\"instructions\");\n    });\n\n    const scoresButton = this.add.text(\n      this.game.config.width / 2,\n      300,\n      \"SCORES\",\n      { fontSize: 24 }\n    );\n    scoresButton.setOrigin(0.5, 0);\n    scoresButton.setInteractive();\n\n    scoresButton.on(\"pointerdown\", () => {\n      this.scene.start(\"scores\");\n    });\n\n    const creditsButton = this.add.text(\n      this.game.config.width / 2,\n      350,\n      \"CREDITS\",\n      { fontSize: 24 }\n    );\n    creditsButton.setOrigin(0.5, 0);\n    creditsButton.setInteractive();\n\n    creditsButton.on(\"pointerdown\", () => {});\n  }\n\n  update() {\n    this.background.tilePositionY -= 2.5;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\n\n\n//# sourceURL=webpack:///./src/js/menu.js?");

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