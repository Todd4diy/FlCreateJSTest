(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.pctRect = function() {
	this.initialize(img.pctRect);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,207,208);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Box = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.instance = new lib.pctRect();
	this.instance.parent = this;
	this.instance.setTransform(-31,-31,0.3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Box, new cjs.Rectangle(-31,-31,62,62.3), null);


// stage content:
(lib.Test = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var box;
		init()
		
		
		function init(){
			box = new lib.Box();//**lib
			box.x= canvas.width/2;
			box.y= canvas.height/2;
			this.stage.addChild(box);//**this.stage
			addMouseEvt();
			//exportRoot.txt.visible = false
		}
		
		/*//====KeyboaedEvent====
		type:"keyup",""keydown"
		func: window.addEventListener(@type,@func.bind(this));
		*/
		function addKeyEvt(){
			window.addEventListener("keyup",  onKeyboard.bind(this));
		}
		
		function onKeyboard(evt){
			switch (evt.keyCode){
				case 32:onPause();break;
			}
			
		}
		
		function onPause(){
			createjs.Tween.removeTweens(exportRoot.box)
		}
		
		/*//====MouseEvent====
		type:"mousedown","click","pressup"
		func: 
			@target.addEventListener(@type,@func)
		*/
		function addMouseEvt(){
			box.addEventListener("pressup",onPreesUp)
			
		}
		
		function removeMouseEvt(){
			box.removeEventListener("pressup",onPreesUp)
		}
		
		function onPreesUp(evt){
			console.log("onPreesUp");
			
			playBox()
			removeMouseEvt()
			addKeyEvt();
			
		}
		
		
		/*//====Tween===
		Sample:http://andysaia.com/blog/tweenjs/
		func:
			createjs.Tween.get(@target-,{loop:true}-)
			-.to({@property},@dur-,@ease-)-
			-.wait(@delay)-
			-.call(@func-,@parmas)-
		*/
		function playBox(){
			console.log("playBox");
			//var box = exportRoot.box
			createjs.Tween.get(box/*,{loop:true}*/)
			.to({x:0,y:0},500,createjs.Ease.sineIn)
			.to({x:box.x,y:box.y},500,createjs.Ease.sineOut)
			.wait(500)
			.to({alpha:0.3},300,createjs.Ease.sineIn)
			.to({rotation:135},500,createjs.Ease.sineIn)
			.to({rotation:0},500,createjs.Ease.sineOut)
			.to({alpha:1},300,createjs.Ease.sineOut)
			.call(onPlayOver,[1])
			.on("change", onUpdate)//onUpdate
			;
		} 
		
		function onUpdate(){
			console.log(box.x)
			exportRoot.txt.text=Math.floor(box.x);
		}
		function onPlayOver(value){
			console.log("onPlayOver::"+value)
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 圖層_4
	this.txt = new cjs.Text("Text", "16px 'Arial'", "#FFFF00");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 20;
	this.txt.lineWidth = 100;
	this.txt.parent = this;
	this.txt.setTransform(437,328.5);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(660,526.5,104,21.9);
// library properties:
lib.properties = {
	id: '75D1CE7A2A95FB44A950BC01822ADE5E',
	width: 550,
	height: 400,
	fps: 60,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/pctRect.png?1656247696476", id:"pctRect"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['75D1CE7A2A95FB44A950BC01822ADE5E'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;