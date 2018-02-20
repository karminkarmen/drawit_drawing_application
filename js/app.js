(function () {

    if (!document.createElement("canvas").getContext) return;


    var drawingBox = {

        enableDrawing: function (e) {
            this.mouseDown = true;
            var x = this.getX(e);
            var y = this.getY(e);
            this.ctx.beginPath(x, y);
        },

        disableDrawing: function () {
            this.mouseDown = false;
        },

        draw: function (event) {
            if (!this.mouseDown) return;
            var x = this.getX(event);
            var y = this.getY(event);

            this.ctx.lineTo(x, y);
            this.ctx.stroke();
        },

        getX: function (e) {
            var canvasEdge = this.canvas.getBoundingClientRect();

            if (e.offsetX) {
                return e.offsetX;
            } else if (e.clientX) {
                return e.clientX - canvasEdge.left;
            }
        },

        getY: function (e) {
            var canvasEdge = this.canvas.getBoundingClientRect();

            if (e.offsetX) {
                return e.offsetY;
            } else if (e.clientY) {
                return e.clientY - canvasEdge.left;
            }
        },

        clearCanvas: function () {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        },

        changePenSize: function (penSize) {
            this.ctx.lineWidth = penSize;
        },

        changeColor: function (e) {
            document.querySelector(".current").classList.remove("current");
            e.target.classList.add("current");
            this.currentColor = e.target;
            if(e.target.dataset.color) {
                this.ctx.strokeStyle = e.target.dataset.color;
                this.ctx.shadowColor = e.target.dataset.color;
            } else {
                this.dataPattern = this.currentColor.dataset.pattern;
                this.newPattern.src = this.dataPattern;
                this.pattern = this.ctx.createPattern(this.newPattern, "repeat");
                this.ctx.strokeStyle = this.pattern;
                this.ctx.shadowColor = "transparent";
            }
        },

        defaultStyle: function () {
            this.ctx.globalAlpha = 1;
            this.ctx.lineWidth = this.range.value;
            this.ctx.lineJoin = "round";
            this.ctx.lineCap = "round";
            this.ctx.strokeStyle = this.currentColor.dataset.color;
            this.ctx.globalCompositeOperation = "source-over";
            this.ctx.shadowBlur = 0;
        },

        crayonStyle: function () {

        },

        markerStyle: function () {
            this.ctx.lineJoin = this.ctx.lineCap = 'round';
            this.ctx.shadowBlur = 10;
            this.ctx.shadowColor = this.currentColor.dataset.color;
        },

        paintStyle: function () {
            this.ctx.globalAlpha = 0.05;
        },

        eraserStyle: function () {
            this.ctx.globalCompositeOperation = "destination-out";
        },

        pencilStyle: function() {
            this.ctx.globalAlpha = 0.05;
            this.pattern = this.ctx.createPattern(this.img, "repeat");
            this.ctx.strokeStyle = this.pattern;
        },

        setTool: function () {
            this.ctx.globalCompositeOperation = "destination-over";
            this.defaultStyle();
            switch($(this.toolsSelect).val()) {
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
                case "crayon":
                    this.crayonStyle();
                    break;
            }
        },


        setupCanvas: function () {
            this.canvas.width = this.canvasBox.offsetWidth;
            this.canvas.height = this.canvasBox.offsetHeight;
            this.canvasColPage.width = this.canvasBox.offsetWidth;
            this.canvasColPage.height = this.canvasBox.offsetHeight;
            this.mouseDown = false;

            this.ctx = this.canvas.getContext("2d");
            this.ctxColPage = this.canvasColPage.getContext("2d");

            this.canvas.onmousemove = this.draw.bind(this);
            this.canvas.onmousedown = this.enableDrawing.bind(this);
            this.canvas.onmouseup = this.disableDrawing.bind(this);
            this.canvas.onmouseleave = this.disableDrawing.bind(this);

            this.createOutline();

        },

        setSidebar: function () {
            [].forEach.call(this.colors, function (color) {

                if(color.dataset.color) {
                    color.style.backgroundColor = color.dataset.color;
                } else {
                    color.style.backgroundImage = `url(${color.dataset.pattern})`;
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

        createOutline: function () {
            this.outline.src = "drawings/celestial_2016_lg.png";
            this.ctxColPage.drawImage(this.outline, 110, 10, this.canvas.width-110, this.canvas.height-110);
        },


        init: function () {
            this.canvasBox = document.getElementById("canvases");
            this.canvas = document.querySelector("#canvas2");
            this.canvasColPage = document.querySelector("#canvas1");
            this.colors = document.querySelectorAll(".colors div");
            this.range = document.querySelector("input[type='range']");
            this.rangeOutput = document.querySelector("output strong");
            this.currentColor = document.querySelector(".current");

            this.clearButton = document.getElementById("clear");
            this.saveButton = document.getElementById("save");
            this.clearButton.onclick = this.clearCanvas.bind(this);

            this.toolsSelect = document.getElementById("tools");
            this.toolsSelect.onchange = this.setTool.bind(this);

            this.img = document.createElement("img");
            this.img.src = "drawings/pencilTexture.png";

            this.newPattern = document.createElement("img");
            this.outline = document.createElement("img");


            this.setSidebar();
            this.setupCanvas();
            this.setTool();

        }

    };

    drawingBox.init();

})();