// Ł A D O W A N I E
(function() {

if(!document.createElement("canvas").getContext) return;

    var canvasLeft = document.getElementById('canvas-element1');
    var ctxLeft = canvasLeft.getContext('2d');

    function radians(degrees) {
        return degrees * Math.PI / 180;
    }

// **** lekcja 1 - prostokty i linie
//     //ustawianie styli
//     ctxLeft.fillStyle = "#448af3"; //wypełnienie
//     ctxLeft.strokeStyle = "#f344f1"; //kolor lini
//     ctxLeft.lineWidth = 30; //grubość lini
//     ctxLeft.lineJoin = "round"; //bevel, miter
//     ctxLeft.lineCap = "round"; //butt, square - zwiększa długość
//
//     //rysowanie linii
//     ctxLeft.beginPath(); //tworzenie nowej ścieżki
//     ctxLeft.moveTo(50, 50);
//     ctxLeft.lineTo(50, 150);
//     ctxLeft.stroke();
//
//     ctxLeft.lineTo(150, 150);
//     ctxLeft.stroke();
//
//     //rysowanie prostokątów
//     ctxLeft.lineWidth = 10;
//     ctxLeft.strokeStyle = "green";
//     ctxLeft.lineJoin = "round";
//
//     ctxLeft.beginPath();
//     ctxLeft.rect(200, 200, 100, 100); //przesunięcia, rozmiar
//     ctxLeft.fill();
//     ctxLeft.stroke();
//
//     // ctxLeft.fillRect(200, 200, 100, 100);
//     // ctxLeft.strokeRect(200, 200, 100, 100);
//
//     ctxLeft.clearRect(200, 200, 50, 50) //czyści połowę

// **** lekcja 2 - koła i łuki
//     ctxLeft.fillStyle = "#448af3";
//     ctxLeft.strokeStyle = "#f344f1";
//     ctxLeft.lineWidth = 5;
//
//     // ctxLeft.beginPath();
//     // ctxLeft.moveTo(50, 50);
//     // ctxLeft.arcTo(180, 50, 180, 200, 120);
//     // ctxLeft.stroke();
//
//     ctxLeft.beginPath();
//     ctxLeft.arc(canvasLeft.width / 2, canvasLeft.height / 2, 50, 0, radians(180)); //współrzędne środku, promień łuku, kąt od którego zaczynamy i na którym kończymy
//     ctxLeft.closePath();
//     ctxLeft.stroke();

// **** lekcja 3 - zapisywanie stanu
//     ctxLeft.fillStyle = "#448af3";
//     ctxLeft.strokeStyle = "#f344f1";
//     ctxLeft.lineWidth = 5;
//
//     ctxLeft.fillRect(50, 50, 100, 100);
//     ctxLeft.save(); //zapisuje style i transformacje
//
//     ctxLeft.fillStyle = "red";
//     ctxLeft.fillRect(100, 100, 100, 100);
//
//     ctxLeft.restore(); //przywraca wcześniejsze style
//     ctxLeft.fillRect(150, 150, 100, 100);

// **** lekcja 4 - krzywe
//     ctxLeft.fillStyle = "#448af3";
//     ctxLeft.strokeStyle = "#f344f1";
//     ctxLeft.lineWidth = 5;
//
//     ctxLeft.beginPath();
//     ctxLeft.moveTo(200, 200);
//     ctxLeft.bezierCurveTo(250, 100, 450, 100, 400, 200); //2 punkty kontrolne
//     ctxLeft.stroke();

// **** lekcja 5 - tekst
//     ctxLeft.fillStyle = "#448af3";
//     ctxLeft.strokeStyle = "#f344f1";
//     ctxLeft.lineWidth = 5;
//
//     var centerX = canvasLeft.width / 2;
//     var centerY = canvasLeft.height / 2;
//
//     ctxLeft.font = "italic 72px Arial";
//     ctxLeft.textAlign = "center"; // start, end, center, left, right
//     ctxLeft.textBaseline = "middle"; //alphabetic, middle, hanging, ideographic, bottom, top
//     ctxLeft.strokeText("Test", centerX, centerY);
//     ctxLeft.fillText("Test", centerX, centerY)

// **** lekcja 6 - globalCompositeOPeration
// **** lekcja 7 - cień, wzorki, gradienty

//     ctxLeft.fillStyle = "#448af3";
//     ctxLeft.strokeStyle = "#f344f1";
//     ctxLeft.lineWidth = 5;
//
//     ctxLeft.save();
//
//     //cień
//     ctxLeft.shadowColor = "rgba(0,0,0,.5)";
//     ctxLeft.shadowOffsetX = 2; // odsunięcie w poziomie
//     ctxLeft.shadowOffsetY = 2; // odsunięcie w pionie
//     ctxLeft.shadowBlur = 5; // rozmycie
//
//     ctxLeft.fillRect(20, 20, 100, 100);
//
//     ctxLeft.restore();
//
//     //gradient liniowy
//     var gradient = ctxLeft.createLinearGradient(150, 150, 400, 400);
//     gradient.addColorStop(0, "red");
//     gradient.addColorStop(0.5, "yellow");
//     gradient.addColorStop(1, "blue");
//
//     ctxLeft.fillStyle = gradient;
//     ctxLeft.fillRect(150, 150, 200, 200);
//
//     //gradient kołowy
//     var radialGradient = ctxLeft.createRadialGradient(300, 100, 10, 300, 120, 50);
//     radialGradient.addColorStop(0, "red");
//     radialGradient.addColorStop(0.5, "blue");
//     radialGradient.addColorStop(1, "green");
//
//     ctxLeft.fillStyle = radialGradient;
//     ctxLeft.arc(300, 100, 50, 0, radians(360));
//     ctxLeft.fill();
//
//     //wzorki
//     var img = document.createElement("img");
//
//     img.onload = function () {
//         var pattern = ctxLeft.createPattern(img, "repaet");
//
//         ctxLeft.fillStyle = pattern;
//         ctxLeft.fillRect(0, 0, canvasLeft.width, canvasLeft.height);
//     }
//
//     img.src = 'link';

// **** lekcja 8 - rysowanie obrazów
//     var giraffe = document.querySelector("giraffe");
//
//     window.onload = function() {
//         ctxLeft.drawImage(giraffe, 10, 10); //obrazek, przesunięcie
//         ctxLeft.drawImage(giraffe, 10, 10, 300, 225) //rozmiar obrazka
//         ctxLeft.drawImage(giraffe, 200, 100, 100, 100, 10, 10, ) //przeszliśmy 200, 100, wycieliśmy 100, 100, chcemy umieścić 10 od prawej i lewej
//     }

//**** lekcja 9  - maska przycinająca
//
//     var giraffe = document.querySelector("#giraffe");
//
//     window.onload = funtion() {
//         ctxLeft.beginPath();
//         ctxLeft.arc(canvasLeft.width/2, canvasLeft.height /2, 120, 0, 2*Math.PI);
//         // ctxLeft.rect(canvasLeft.width / 2, canvasLeft.height / 2, 200, 100);
//         ctxLeft.clip();
//         ctxLeft.drawImage(giraffe, 0, 0);
//     }

    

// function loadCanvas(dataURL) {
//     //load image from data url
//     var imageObj = new Image();
//     imageObj.onload = function() {
//         contextCanvasLeft.drawImage(this, 0, 0);
//     };
//
//     imageObj.src = dataURL;
// }
//
// loadCanvas("images/pexels-photo-207665.jpeg");
//
// function renderLinks (categories) {
//     categories.forEach((category) => {
//         let optgroup = $("<optgroup>").attr("label",category.title);
//         category.links.forEach(link => {
//             let option = $("<option>").attr("value",link.url).text(link.title);
//             optgroup.append(option);
//         });
//         $("#drawingsSelect").append(optgroup);
//     });
//
// }
//
// $.ajax({
//     url: db/drawing.json
// }).done(function(response){
//     renderLinks(response);
// }).fail(function(error) {
//     console.log(error);
// });

// //C Z C I O N K A
// contextCanvasLeft.font = '40px Calbri';
// contextCanvasLeft.fillStyle = 'blue';
// contextCanvasLeft.fillText('Hello world!', 150, 100);
//
// //L I N I A
// contextCanvasLeft.beginPath(); //rozpoczęcie ścieżki
// contextCanvasLeft.moveTo(100, 150); //rozpoczęcie, kontekst point np: kursor
// contextCanvasLeft.lineTo(450, 50); //rysowanie lini prostej z pozycji moveTo do pozycji lineTo
// contextCanvasLeft.lineWidth = 15; //grubość lini
// contextCanvasLeft.strokeStyle = "red"; //kolor linii
// contextCanvasLeft.lineCap = 'round'; // zaokrąglone square i butt równo
// contextCanvasLeft.stroke(); //wywołuje linię
//
// //Ł U K
// var x = canvasLeft.width / 2; //promień x
// var y = canvasLeft.height / 2; //promień y
// var radius = 75;
// var startAngle = 1.1 * Math.PI;
// var endAngle = 1.9 * Math.PI;
// var counterClockwise = false;
//
// //arc
// contextCanvasLeft.beginPath();
// contextCanvasLeft.arc(x, y, radius, startAngle, endAngle, counterClockwise);
// contextCanvasLeft.lineWidth = 15;
// contextCanvasLeft.strokeStyle = 'black';
// contextCanvasLeft.stroke();
//
// //brezzier
// contextCanvasLeft.beginPath();
// contextCanvasLeft.moveTo(188, 130);
// contextCanvasLeft.bezierCurveTo(140, 10, 388, 10, 388, 170);
// contextCanvasLeft.lineWidth = 10;
// contextCanvasLeft.strokeStyle = 'green';
// contextCanvasLeft.stroke();
//
// //Ł Ą C Z E N I A - miter, round, bevel
// contextCanvasLeft.beginPath();
// contextCanvasLeft.moveTo(239, 150);
// contextCanvasLeft.lineTo(289, 50);
// contextCanvasLeft.lineTo(339, 150);
// contextCanvasLeft.lineJoin = 'round';
// contextCanvasLeft.stroke();
//
// //bezierCurve
// contextCanvasLeft.beginPath();
// contextCanvasLeft.moveTo(170, 80);
// contextCanvasLeft.bezierCurveTo(130, 100, 130, 150, 230, 150);
// contextCanvasLeft.bezierCurveTo(250, 180, 320, 180, 340, 150);
// contextCanvasLeft.bezierCurveTo(420, 150, 420, 120, 390, 100);
// contextCanvasLeft.bezierCurveTo(430, 40, 370, 30, 340, 50);
// contextCanvasLeft.bezierCurveTo(320, 5, 250, 20, 250, 50);
// contextCanvasLeft.bezierCurveTo(200, 5, 150, 20, 170, 80);
//
// // complete custom shape
// contextCanvasLeft.closePath();
// contextCanvasLeft.lineWidth = 5;
// contextCanvasLeft.fillStyle = 'yellow';
// contextCanvasLeft.fill();
// contextCanvasLeft.strokeStyle = 'blue';
// contextCanvasLeft.stroke();
// //
// //Z A P I S Y W A N I E
// var dataURL = canvasLeft.toDataURL();
// document.getElementById('canvasImg').src = dataURL;
// //U S U W A N I E
// document.getElementById('clear').addEventListener('click', function() {
//     contextCanvasLeft.clearRect(0, 0, canvasLeft.width, canvasLeft.height);
// }, false);

// //square
// contextCanvasLeft.beginPath();
// contextCanvasLeft.rect(188, 50, 200, 100);
// contextCanvasLeft.fillStyle = 'yellow';
// contextCanvasLeft.fill();
// contextCanvasLeft.lineWidth = 7;
// contextCanvasLeft.strokeStyle = 'red';
// contextCanvasLeft.stroke();
//
// //circle
// var centerX = 100;
// var centerY = 100;
// var radius = 70;
//
// contextCanvasLeft.beginPath();
// contextCanvasLeft.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
// contextCanvasLeft.fillStyle = 'green';
// contextCanvasLeft.fill();
// contextCanvasLeft.lineWidth = 5;
// contextCanvasLeft.strokeStyle = 'yellow';
// contextCanvasLeft.stroke();

// //półkoło
// contextCanvasLeft.beginPath();
// contextCanvasLeft.arc(288, 75, 70, 0, Math.PI, false);
// contextCanvasLeft.closePath();
// contextCanvasLeft.lineWidth = 5;
// contextCanvasLeft.fillStyle = "red";
// contextCanvasLeft.fill();
// contextCanvasLeft.strokeStyle = '#550000';
// contextCanvasLeft.stroke();

// //pattern
// var imageObj = new Image();
// imageObj.onload = function() {
//     var pattern = contextCanvasLeft.createPattern(imageObj, 'repeat');
//
//     contextCanvasLeft.rect(0, 0, canvasLeft.width, canvasLeft.height);
//     contextCanvasLeft.fillStyle = pattern;
//     contextCanvasLeft.fill();
// };
// imageObj.src = 'https://www.html5canvastutorials.com/demos/assets/wood-pattern.png';

// // A N I M A C J E
// window.requestAnimFrame = (function(callback) {
//     return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
//         function(callback) {
//             window.setTimeout(callback, 1000 / 60);
//         };
// })();
//
// function drawRectangle(myRectangle, context) {
//     context.beginPath();
//     context.rect(myRectangle.x, myRectangle.y, myRectangle.width, myRectangle.height);
//     context.fillStyle = "blue";
//     context.fill();
//     context.lineWidth = myRectangle.borderWidth;
//     context.strokeStyle = 'black';
//     context.stroke();
// }
//
// function animate(myRectngle, canvas, context, startTime) {
//
//     //update
//     var time = (new Date()).getTime() - startTime;
//     var linearSpeed = 100;
//
//     //pixels/seconds
//     var newX = linearSpeed * time/100;
//     if(newX < canvas.width - myRectngle.width - myRectngle.borderWidth / 2) {
//         myRectngle.x = newX;
//     }
//
//     //clear
//     context.clearRect(0, 0, canvas.width, canvas.height);
//
//     //draw
//     drawRectangle(myRectngle, context);
//
//     //request new frame
//     requestAnimFrame(function() {
//         animate(myRectngle, canvas, context, startTime);
//     });
// }
//
//     var myRectangle = {
//         x:0,
//         y: 75,
//         width: 100,
//         height: 50,
//         borderWidth: 5
//     };
//
//     drawRectangle(myRectangle, contextCanvasLeft);
//
//     setTimeout(function() {
//         var startTime = (new Date()).getTime();
//         animate(myRectangle, canvasLeft, contextCanvasLeft, startTime);
//     }, 1000);
//

// //wklejanie obrazka
// var x = 10;
// var y = 30;
// var width = 200;
// var height = 137;
// var imageObj = new Image();
//
// imageObj.onload = function () {
//     contextCanvasLeft.drawImage(imageObj, x, y, width, height);
// };
//
// imageObj.src = 'https://www.html5canvastutorials.com/demos/assets/darth-vader.jpg';
//

// var width = window.innerWidth;
// var height = window.innerHeight - 25;
//
// // first we need Konva core things: stage and layer
// var stage = new Konva.Stage({
//     container: 'container',
//     width: width,
//     height: height
// });
//
// var layer = new Konva.Layer();
// stage.add(layer);
//
//
// // then we are going to draw into special canvas element
// var canvas = document.createElement('canvas');
// canvas.width = stage.width() / 2;
// canvas.height = stage.height() / 2;
//
// // creted canvas we can add to layer as "Konva.Image" element
// var image = new Konva.Image({
//     image: canvas,
//     x : stage.width() / 4,
//     y : stage.height() / 4,
//     stroke: 'green',
//     shadowBlur: 5
// });
// layer.add(image);
// stage.draw();
//
// // Good. Now we need to get access to context element
// var context = canvas.getContext('2d');
// context.strokeStyle = "#df4b26";
// context.lineJoin = "round";
// context.lineWidth = 5;
//
//
// var isPaint = false;
// var lastPointerPosition;
// var mode = 'brush';
//
//
// // now we need to bind some events
// // we need to start drawing on mousedown
// // and stop drawing on mouseup
// stage.on('contentMousedown.proto', function() {
//     isPaint = true;
//     lastPointerPosition = stage.getPointerPosition();
//
// });
//
// stage.on('contentMouseup.proto', function() {
//     isPaint = false;
// });
//
// // and core function - drawing
// stage.on('contentMousemove.proto', function() {
//
//     if (!isPaint) {
//         return;
//     }
//
//     if (mode === 'brush') {
//         context.globalCompositeOperation = 'source-over';
//     }
//     if (mode === 'eraser') {
//         context.globalCompositeOperation = 'destination-out';
//     }
//     context.beginPath();
//
//     var localPos = {
//         x: lastPointerPosition.x - image.x(),
//         y: lastPointerPosition.y - image.y()
//     };
//     context.moveTo(localPos.x, localPos.y);
//     var pos = stage.getPointerPosition();
//     localPos = {
//         x: pos.x - image.x(),
//         y: pos.y - image.y()
//     };
//     context.lineTo(localPos.x, localPos.y);
//     context.closePath();
//     context.stroke();
//
//
//     lastPointerPosition = pos;
//     layer.draw();
// });
//
//
//
// var select = document.getElementById('tool');
// select.addEventListener('change', function() {
//     mode = select.value;
// });

})();