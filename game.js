

/*var canvas;
var context;
var queue;
var WIDTH = 1024;
var HEIGHT = 768;
var stage;

window.onload = function()
{
    /*
     *      Set up the Canvas with Size and height
     *
     */
     var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();
var stage = new createjs.Stage("myCanvas");
    /*var canvas = document.getElementById('myCanvas');
    context = canvas.getContext('2d');
    context.canvas.width = WIDTH;
    context.canvas.height = HEIGHT;
    stage = new createjs.Stage("myCanvas");

    /*
     *      Set up the Asset Queue and load sounds
     *
     */
    /*queue = new createjs.LoadQueue(false);
    queue.installPlugin(createjs.Sound);
    queue.on("complete", queueLoaded, this);
    createjs.Sound.alternateExtensions = ["ogg"];

    /*
     *      Create a load manifest for all assets
     *
     */
    /*queue.loadManifest([
        {id: 'backgroundImage', src: 'assets/background.png'},
    ]);
    queue.load();

    /*
     *      Create a timer that updates once per second
     *
     */

/*}

/*function queueLoaded(event)
{
    var backgroundImage = new createjs.Bitmap(queue.getResult("backgroundImage"))
    stage.addChild(backgroundImage);
}