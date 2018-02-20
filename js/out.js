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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {

    if (!document.createElement("canvas").getContext) return;

    var prefix = "drawings";
    var mandalas = ["mandala1.png", "mandala2.png", "mandala3.png", "mandala4.png", "mandala5.png", "mandala6.png", "mandala7.png", "mandala8.png", "mandala9.png", "mandala10.png", "mandala11.png", "mandala12.png", "mandala13.png", "mandala14.png", "mandala15.png", "mandala16.png", "mandala17.png", "mandala18.png", "mandala19.png", "mandala20.png", "mandala21.png", "mandala22.png", "mandala23.png", "mandala24.png", "mandala25.png", "mandala26.png", "mandala27.png", "mandala28.png", "mandala29.png", "mandala30.png", "mandala31.png", "mandala32.png", "mandala33.png", "mandala34.png"];

    var drawingBox = {

        loadRandomMandal: function loadRandomMandal() {
            this.clearCanvas(this.ctxColPage);
            var randomIndex = Math.floor(Math.random() * mandalas.length);
            this.outline.src = prefix + "/" + mandalas[randomIndex];
            console.log(this.outline.src);
        },

        drawOutline: function drawOutline() {
            this.ctxColPage.drawImage(this.outline, 110, 10, this.canvas.width - 110, this.canvas.height - 100);
        },

        enableDrawing: function enableDrawing(e) {
            this.mouseDown = true;
            var x = this.getX(e);
            var y = this.getY(e);
            this.ctx.beginPath(x, y);
        },

        disableDrawing: function disableDrawing() {
            this.mouseDown = false;
        },

        draw: function draw(event) {
            if (!this.mouseDown) return;
            var x = this.getX(event);
            var y = this.getY(event);

            this.ctx.lineTo(x, y);
            this.ctx.stroke();
        },

        getX: function getX(e) {
            var canvasEdge = this.canvas.getBoundingClientRect();

            if (e.offsetX) {
                return e.offsetX;
            } else if (e.clientX) {
                return e.clientX - canvasEdge.left;
            }
        },

        getY: function getY(e) {
            var canvasEdge = this.canvas.getBoundingClientRect();

            if (e.offsetX) {
                return e.offsetY;
            } else if (e.clientY) {
                return e.clientY - canvasEdge.left;
            }
        },

        clearCanvas: function clearCanvas(ctx) {
            ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        },

        changePenSize: function changePenSize(penSize) {
            this.ctx.lineWidth = penSize;
        },

        changeColor: function changeColor(e) {
            document.querySelector(".current").classList.remove("current");
            e.target.classList.add("current");
            this.currentColor = e.target;
            if (e.target.dataset.color) {
                this.ctx.strokeStyle = e.target.dataset.color;
                this.ctx.shadowColor = e.target.dataset.color;
            } else {
                this.ctx.strokeStyle = this.pattern;
                this.ctx.shadowColor = "transparent";
                this.dataPattern = this.currentColor.dataset.pattern;
                this.newPattern.src = this.dataPattern;
                this.pattern = this.ctx.createPattern(this.newPattern, "repeat");
            }
        },

        defaultStyle: function defaultStyle() {
            this.ctx.globalAlpha = 1;
            this.ctx.lineWidth = this.range.value;
            this.ctx.lineJoin = "round";
            this.ctx.lineCap = "round";
            this.ctx.strokeStyle = this.currentColor.dataset.color;
            this.ctx.globalCompositeOperation = "source-over";
            this.ctx.shadowBlur = 0;
        },

        markerStyle: function markerStyle() {},

        brushPenStyle: function brushPenStyle() {
            this.ctx.shadowBlur = 10;
            this.ctx.shadowColor = this.currentColor.dataset.color;
        },

        paintStyle: function paintStyle() {
            this.ctx.globalAlpha = 0.05;
        },

        eraserStyle: function eraserStyle() {
            this.ctx.globalCompositeOperation = "destination-out";
        },

        pencilStyle: function pencilStyle() {
            this.ctx.globalAlpha = 0.05;
            this.pattern = this.ctx.createPattern(this.img, "repeat");
            this.ctx.strokeStyle = this.pattern;
        },

        setTool: function setTool() {
            this.ctx.globalCompositeOperation = "destination-over";
            this.defaultStyle();
            switch ($(this.toolsSelect).val()) {
                case "eraser":
                    this.eraserStyle();
                    break;
                case "pencil":
                    this.pencilStyle();
                    break;
                case "paint":
                    this.paintStyle();
                    break;
                case "marker":
                    this.markerStyle();
                    break;
                // case "crayon":
                //     this.crayonStyle();
                //     break;
                case "brushPen":
                    this.brushPenStyle();
                    break;
            }
        },

        setupCanvas: function setupCanvas() {
            this.canvas.width = this.canvasBox.offsetWidth;
            this.canvas.height = this.canvasBox.offsetHeight;
            this.canvasColPage.width = this.canvasBox.offsetWidth;
            this.canvasColPage.height = this.canvasBox.offsetHeight;
            this.mouseDown = false;

            this.ctx = this.canvas.getContext("2d");
            this.ctxColPage = this.canvasColPage.getContext("2d");

            this.canvasColPage.onmousemove = this.draw.bind(this);
            this.canvasColPage.onmousedown = this.enableDrawing.bind(this);
            this.canvasColPage.onmouseup = this.disableDrawing.bind(this);
            this.canvasColPage.onmouseleave = this.disableDrawing.bind(this);
        },

        setSidebar: function setSidebar() {
            [].forEach.call(this.colors, function (color) {
                // for (color of this.colors)

                if (color.dataset.color) {
                    color.style.backgroundColor = color.dataset.color;
                } else {
                    color.style.backgroundImage = "url(" + color.dataset.pattern + ")";
                    color.style.backgroundSize = "3000%";
                    color.style.backgroundPosition = "right center";
                }

                color.onclick = this.changeColor.bind(this);
            }.bind(this));

            this.range.onchange = function (event) {
                this.rangeOutput.innerHTML = event.target.value;
                this.changePenSize(event.target.value);
            }.bind(this);
        },

        createOutline: function createOutline() {},

        init: function init() {
            var _this = this;

            this.canvasBox = document.getElementById("canvases");
            this.canvas = document.querySelector("#canvas2");
            this.canvasColPage = document.querySelector("#canvas1");
            this.ctxColPage = this.canvasColPage.getContext("2d");
            this.colors = document.querySelectorAll(".colors div");
            this.range = document.querySelector("input[type='range']");
            this.rangeOutput = document.querySelector("output strong");
            this.currentColor = document.querySelector(".current");

            this.clearButton = document.getElementById("clear");
            this.saveButton = document.getElementById("save");
            this.randomMandala = document.querySelector(".randomMandala");

            this.clearButton.onclick = function () {
                _this.clearCanvas(_this.ctx);
            };

            this.toolsSelect = document.getElementById("tools");
            this.toolsSelect.onchange = this.setTool.bind(this);

            this.img = document.createElement("img");
            this.img.src = "drawings/pencilTexture.png";

            this.imgCray = document.createElement("img");
            this.imgCray.src = "drawings/crayon.png";

            this.newPattern = document.createElement("img");
            this.outline = document.createElement("img");

            this.randomMandala.onclick = this.loadRandomMandal.bind(this);
            this.outline.onload = this.drawOutline.bind(this);

            this.setSidebar();
            this.setupCanvas();
            this.setTool();
        }

    };

    drawingBox.init();
})();

/***/ })
/******/ ]);