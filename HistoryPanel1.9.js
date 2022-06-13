(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.whatText = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {normal:0,comment:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.label = new cjs.Text("what", "normal 400 12px 'tk-niveau-grotesk'", "#333333");
	this.label.name = "label";
	this.label.lineHeight = 16;
	this.label.lineWidth = 100;
	this.label.parent = this;
	this.label.setTransform(2,2);
	if(!lib.properties.webfonts['tk-niveau-grotesk']) {
		lib.webFontTxtInst['tk-niveau-grotesk'] = lib.webFontTxtInst['tk-niveau-grotesk'] || [];
		lib.webFontTxtInst['tk-niveau-grotesk'].push(this.label);
	}

	this.timeline.addTween(cjs.Tween.get(this.label).wait(1).to({color:"#888888"},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,104,19.9);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiVCWIAAkrIErAAIAAErg");
	this.shape.setTransform(15,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,30,30), null);


(lib.an_TextInput = function(options) {
	this.initialize();
	this._element = new $.an.TextInput(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.milstoneFlag = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#606060").s().p("AAXAgIgdgIQgOABgGAEQAAABgBAAQAAABAAAAQAAABgBAAQAAABABAAIgng4QAUgPASAGIAaAJQAVAAAIgHIApA6QgPAHgOAAQgIAAgIgDg");
	this.shape.setTransform(8.65,3.4755);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#606060").ss(1,0,2).p("Agmg5IBNBz");
	this.shape_1.setTransform(3.875,6.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.milstoneFlag, new cjs.Rectangle(-1,0,16.4,13.7), null);


(lib.inputFrame = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("A1/htMAr/AAAIAADbMgr/AAAg");
	this.shape.setTransform(140.8,11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A1/BuIAAjbMAr/AAAIAADbg");
	this.shape_1.setTransform(140.8,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.inputFrame, new cjs.Rectangle(-1,-1,283.6,24), null);


(lib.higCheckbox = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {on:0,"on":13,off:14,"off":29};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this["checkState"] = "ON";
	}
	this.frame_13 = function() {
		this.stop();
		this["checkState"] = "ON";
		
		this.parent.updateLabel(this);
	}
	this.frame_14 = function() {
		this["checkState"] = "OFF";
	}
	this.frame_29 = function() {
		this.stop();
		this["checkState"] = "OFF";
		this.parent.updateLabel(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(13).call(this.frame_13).wait(1).call(this.frame_14).wait(15).call(this.frame_29).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgoApQgQgRAAgYQAAgXAQgRQARgQAXAAQAYAAARAQQAQARAAAXQAAAYgQARQgRAQgYAAQgXAAgRgQg");
	this.shape.setTransform(7.975,8.025,1,1,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FB5160").s().p("AhFBQQghAAgYgXQgXgYAAghQAAggAXgYQAYgXAhAAICLAAQAhAAAXAXQAYAYAAAgQAAAhgYAYQgXAXghAAgAAdgnQgQAQAAAXQAAAYAQARQASARAXAAQAYAAARgRQAQgRAAgYQAAgXgQgQQgRgRgYAAQgXAAgSARg");
	this.shape_1.setTransform(15,8,1,1,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E35F5C").s().p("AhFBQQghAAgYgXQgXgYAAghQAAggAXgYQAYgXAhAAICLAAQAhAAAXAXQAYAYAAAgQAAAhgYAYQgXAXghAAgAhagnQgQAQAAAXQAAAYAQARQARARAZAAQAXAAARgRQAQgRAAgYQAAgXgQgQQgRgRgXAAQgZAAgRARg");
	this.shape_2.setTransform(15,8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CD6B59").s().p("AhFBQQghAAgYgXQgXgYAAghQAAggAXgYQAYgXAhAAICLAAQAhAAAXAXQAYAYAAAgQAAAhgYAYQgXAXghAAgAhGgnQgQAQgBAXQABAYAQARQARARAYAAQAYAAAPgRQARgRAAgYQAAgXgRgQQgPgRgYAAQgYAAgRARg");
	this.shape_3.setTransform(15,8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B87756").s().p("AhFBQQghAAgYgXQgXgYAAghQAAggAXgYQAYgXAhAAICLAAQAhAAAXAXQAYAYAAAgQAAAhgYAYQgXAXghAAgAg1gnQgRAQAAAXQAAAYARARQARARAYAAQAXAAAQgRQARgRAAgYQAAgXgRgQQgQgRgXAAQgYAAgRARg");
	this.shape_4.setTransform(15,8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A68154").s().p("AhFBQQghAAgYgXQgXgYAAghQAAggAXgYQAYgXAhAAICLAAQAhAAAXAXQAYAYAAAgQAAAhgYAYQgXAXghAAgAglgnQgRAQAAAXQAAAYARARQARARAXAAQAYAAARgRQAQgRAAgYQAAgXgQgQQgRgRgYAAQgXAAgRARg");
	this.shape_5.setTransform(15,8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#968A51").s().p("AhFBQQghAAgYgXQgXgYAAghQAAggAXgYQAYgXAhAAICLAAQAhAAAXAXQAYAYAAAgQAAAhgYAYQgXAXghAAgAgXgnQgQAQAAAXQAAAYAQARQARARAXAAQAXAAASgRQAQgRAAgYQAAgXgQgQQgSgRgXAAQgXAAgRARg");
	this.shape_6.setTransform(15,8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#87924F").s().p("AhFBQQghAAgYgXQgXgYAAghQAAggAXgYQAYgXAhAAICLAAQAhAAAXAXQAYAYAAAgQAAAhgYAYQgXAXghAAgAgKgnQgRAQAAAXQAAAYARARQAQARAXAAQAYAAARgRQARgRAAgYQAAgXgRgQQgRgRgYAAQgXAAgQARg");
	this.shape_7.setTransform(15,8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7B994D").s().p("AhFBQQghAAgYgXQgXgYAAghQAAggAXgYQAYgXAhAAICLAAQAhAAAXAXQAYAYAAAgQAAAhgYAYQgXAXghAAgAAAgnQgRAQAAAXQAAAYARARQAQARAYAAQAYAAAQgRQARgRAAgYQAAgXgRgQQgQgRgYAAQgYAAgQARg");
	this.shape_8.setTransform(15,8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#709F4C").s().p("AhFBQQghAAgYgXQgXgYAAghQAAggAXgYQAYgXAhAAICLAAQAhAAAXAXQAYAYAAAgQAAAhgYAYQgXAXghAAgAAIgnQgPAQAAAXQAAAYAPARQARARAZAAQAXAAARgRQAQgRAAgYQAAgXgQgQQgRgRgXAAQgZAAgRARg");
	this.shape_9.setTransform(15,8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#67A44A").s().p("AhFBQQghAAgYgXQgXgYAAghQAAggAXgYQAYgXAhAAICLAAQAhAAAXAXQAYAYAAAgQAAAhgYAYQgXAXghAAgAAQgnQgQAQAAAXQAAAYAQARQARARAXAAQAYAAARgRQARgRAAgYQAAgXgRgQQgRgRgYAAQgXAAgRARg");
	this.shape_10.setTransform(15,8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#61A849").s().p("AhFBQQghAAgYgXQgXgYAAghQAAggAXgYQAYgXAhAAICLAAQAhAAAXAXQAYAYAAAgQAAAhgYAYQgXAXghAAgAAWgnQgRAQAAAXQAAAYARARQAQARAYAAQAYAAARgRQAQgRAAgYQAAgXgQgQQgRgRgYAAQgYAAgQARg");
	this.shape_11.setTransform(15,8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#5CAB49").s().p("AhFBQQghAAgYgXQgXgYAAghQAAggAXgYQAYgXAhAAICLAAQAhAAAXAXQAYAYAAAgQAAAhgYAYQgXAXghAAgAAZgnQgQAQAAAXQAAAYAQARQARARAZAAQAXAAARgRQARgRAAgYQAAgXgRgQQgRgRgXAAQgZAAgRARg");
	this.shape_12.setTransform(15,8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#59AC48").s().p("AhFBQQghAAgYgXQgXgYAAghQAAggAXgYQAYgXAhAAICLAAQAhAAAXAXQAYAYAAAgQAAAhgYAYQgXAXghAAgAAcgnQgQAQgBAXQABAYAQARQARARAYAAQAYAAAQgRQARgRAAgYQAAgXgRgQQgQgRgYAAQgYAAgRARg");
	this.shape_13.setTransform(15,8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#58AD48").s().p("AhFBQQghAAgYgXQgXgYAAghQAAggAXgYQAYgXAhAAICLAAQAhAAAXAXQAYAYAAAgQAAAhgYAYQgXAXghAAgAhugnQgQAQAAAXQAAAYAQARQARARAYAAQAYAAARgRQARgRAAgYQAAgXgRgQQgRgRgYAAQgYAAgRARg");
	this.shape_14.setTransform(15,8,1,1,0,0,180);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6DA14B").s().p("AhFBQQghAAgYgXQgXgYAAghQAAggAXgYQAYgXAhAAICLAAQAhAAAXAXQAYAYAAAgQAAAhgYAYQgXAXghAAgAALgnQgPAQAAAXQAAAYAPARQARARAYAAQAXAAARgRQARgRAAgYQAAgXgRgQQgRgRgXAAQgYAAgRARg");
	this.shape_15.setTransform(15,8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#81964E").s().p("AhFBQQghAAgYgXQgXgYAAghQAAggAXgYQAYgXAhAAICLAAQAhAAAXAXQAYAYAAAgQAAAhgYAYQgXAXghAAgAgFgnQgQAQAAAXQAAAYAQARQAQARAYAAQAXAAASgRQAQgRAAgYQAAgXgQgQQgSgRgXAAQgYAAgQARg");
	this.shape_16.setTransform(15,8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#938C51").s().p("AhFBQQghAAgYgXQgXgYAAghQAAggAXgYQAYgXAhAAICLAAQAhAAAXAXQAYAYAAAgQAAAhgYAYQgXAXghAAgAgUgnQgRAQAAAXQAAAYARARQARARAWAAQAYAAARgRQARgRAAgYQAAgXgRgQQgRgRgYAAQgWAAgRARg");
	this.shape_17.setTransform(15,8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#A38253").s().p("AhFBQQghAAgYgXQgXgYAAghQAAggAXgYQAYgXAhAAICLAAQAhAAAXAXQAYAYAAAgQAAAhgYAYQgXAXghAAgAgjgnQgQAQAAAXQAAAYAQARQARARAYAAQAXAAARgRQAQgRAAgYQAAgXgQgQQgRgRgXAAQgYAAgRARg");
	this.shape_18.setTransform(15,8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B37A55").s().p("AhFBQQghAAgYgXQgXgYAAghQAAggAXgYQAYgXAhAAICLAAQAhAAAXAXQAYAYAAAgQAAAhgYAYQgXAXghAAgAgwgnQgQAQAAAXQAAAYAQARQARARAYAAQAXAAARgRQAQgRAAgYQAAgXgQgQQgRgRgXAAQgYAAgRARg");
	this.shape_19.setTransform(15,8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C07257").s().p("AhFBQQghAAgYgXQgXgYAAghQAAggAXgYQAYgXAhAAICLAAQAhAAAXAXQAYAYAAAgQAAAhgYAYQgXAXghAAgAg8gnQgQAQAAAXQAAAYAQARQASARAYAAQAWAAARgRQAQgRAAgYQAAgXgQgQQgRgRgWAAQgYAAgSARg");
	this.shape_20.setTransform(15,8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D8655B").s().p("AhFBQQghAAgYgXQgXgYAAghQAAggAXgYQAYgXAhAAICLAAQAhAAAXAXQAYAYAAAgQAAAhgYAYQgXAXghAAgAhQgnQgQAQAAAXQAAAYAQARQARARAZAAQAXAAAQgRQAQgRAAgYQAAgXgQgQQgQgRgXAAQgZAAgRARg");
	this.shape_21.setTransform(15,8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E1605C").s().p("AhFBQQghAAgYgXQgXgYAAghQAAggAXgYQAYgXAhAAICLAAQAhAAAXAXQAYAYAAAgQAAAhgYAYQgXAXghAAgAhYgnQgQAQAAAXQAAAYAQARQASARAYAAQAXAAARgRQAPgRAAgYQAAgXgPgQQgRgRgXAAQgYAAgSARg");
	this.shape_22.setTransform(15,8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E95B5D").s().p("AhFBQQghAAgYgXQgXgYAAghQAAggAXgYQAYgXAhAAICLAAQAhAAAXAXQAYAYAAAgQAAAhgYAYQgXAXghAAgAhegnQgRAQAAAXQAAAYARARQAQARAYAAQAYAAARgRQAPgRAAgYQAAgXgPgQQgRgRgYAAQgYAAgQARg");
	this.shape_23.setTransform(15,8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EF585E").s().p("AhFBQQghAAgYgXQgXgYAAghQAAggAXgYQAYgXAhAAICLAAQAhAAAXAXQAYAYAAAgQAAAhgYAYQgXAXghAAgAhkgnQgRAQAAAXQAAAYARARQARARAYAAQAYAAARgRQAQgRAAgYQAAgXgQgQQgRgRgYAAQgYAAgRARg");
	this.shape_24.setTransform(15,8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F4555F").s().p("AhFBQQghAAgYgXQgXgYAAghQAAggAXgYQAYgXAhAAICLAAQAhAAAXAXQAYAYAAAgQAAAhgYAYQgXAXghAAgAhpgnQgQAQAAAXQAAAYAQARQASARAYAAQAXAAARgRQAQgRAAgYQAAgXgQgQQgRgRgXAAQgYAAgSARg");
	this.shape_25.setTransform(15,8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F85360").s().p("AhFBQQghAAgYgXQgXgYAAghQAAggAXgYQAYgXAhAAICLAAQAhAAAXAXQAYAYAAAgQAAAhgYAYQgXAXghAAgAhsgnQgQAQAAAXQAAAYAQARQARARAZAAQAXAAARgRQAQgRAAgYQAAgXgQgQQgRgRgXAAQgZAAgRARg");
	this.shape_26.setTransform(15,8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FA5160").s().p("AhFBQQghAAgYgXQgXgYAAghQAAggAXgYQAYgXAhAAICLAAQAhAAAXAXQAYAYAAAgQAAAhgYAYQgXAXghAAgAhtgnQgRAQAAAXQAAAYARARQARARAXAAQAYAAARgRQARgRAAgYQAAgXgRgQQgRgRgYAAQgXAAgRARg");
	this.shape_27.setTransform(15,8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FB5160").s().p("AhFBQQghAAgYgXQgXgYAAghQAAggAXgYQAYgXAhAAICLAAQAhAAAXAXQAYAYAAAgQAAAhgYAYQgXAXghAAgAAegnQgRAQAAAXQAAAYARARQARARAXAAQAYAAARgRQAQgRAAgYQAAgXgQgQQgRgRgYAAQgXAAgRARg");
	this.shape_28.setTransform(15,8,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape,p:{skewY:180,x:7.975}}]}).to({state:[{t:this.shape_2},{t:this.shape,p:{skewY:0,x:10.025}}]},1).to({state:[{t:this.shape_3},{t:this.shape,p:{skewY:0,x:11.975}}]},1).to({state:[{t:this.shape_4},{t:this.shape,p:{skewY:0,x:13.675}}]},1).to({state:[{t:this.shape_5},{t:this.shape,p:{skewY:0,x:15.275}}]},1).to({state:[{t:this.shape_6},{t:this.shape,p:{skewY:0,x:16.675}}]},1).to({state:[{t:this.shape_7},{t:this.shape,p:{skewY:0,x:17.925}}]},1).to({state:[{t:this.shape_8},{t:this.shape,p:{skewY:0,x:18.975}}]},1).to({state:[{t:this.shape_9},{t:this.shape,p:{skewY:0,x:19.925}}]},1).to({state:[{t:this.shape_10},{t:this.shape,p:{skewY:0,x:20.625}}]},1).to({state:[{t:this.shape_11},{t:this.shape,p:{skewY:0,x:21.225}}]},1).to({state:[{t:this.shape_12},{t:this.shape,p:{skewY:0,x:21.625}}]},1).to({state:[{t:this.shape_13},{t:this.shape,p:{skewY:0,x:21.875}}]},1).to({state:[{t:this.shape_14},{t:this.shape,p:{skewY:180,x:21.975}}]},1).to({state:[{t:this.shape_14},{t:this.shape,p:{skewY:180,x:21.975}}]},1).to({state:[{t:this.shape_15},{t:this.shape,p:{skewY:0,x:20.175}}]},1).to({state:[{t:this.shape_16},{t:this.shape,p:{skewY:0,x:18.475}}]},1).to({state:[{t:this.shape_17},{t:this.shape,p:{skewY:0,x:16.925}}]},1).to({state:[{t:this.shape_18},{t:this.shape,p:{skewY:0,x:15.525}}]},1).to({state:[{t:this.shape_19},{t:this.shape,p:{skewY:0,x:14.175}}]},1).to({state:[{t:this.shape_20},{t:this.shape,p:{skewY:0,x:13.025}}]},1).to({state:[{t:this.shape_3},{t:this.shape,p:{skewY:0,x:11.975}}]},1).to({state:[{t:this.shape_21},{t:this.shape,p:{skewY:0,x:11.025}}]},1).to({state:[{t:this.shape_22},{t:this.shape,p:{skewY:0,x:10.225}}]},1).to({state:[{t:this.shape_23},{t:this.shape,p:{skewY:0,x:9.525}}]},1).to({state:[{t:this.shape_24},{t:this.shape,p:{skewY:0,x:8.975}}]},1).to({state:[{t:this.shape_25},{t:this.shape,p:{skewY:0,x:8.525}}]},1).to({state:[{t:this.shape_26},{t:this.shape,p:{skewY:0,x:8.225}}]},1).to({state:[{t:this.shape_27},{t:this.shape,p:{skewY:0,x:8.025}}]},1).to({state:[{t:this.shape_28},{t:this.shape,p:{skewY:180,x:7.975}}]},1).wait(1));

	// Layer_3
	this.textLabel = new cjs.Text("Checkbox Label", "normal 400 11px 'Roboto'", "#333333");
	this.textLabel.name = "textLabel";
	this.textLabel.lineHeight = 17;
	this.textLabel.lineWidth = 155;
	this.textLabel.parent = this;
	this.textLabel.setTransform(34.95,1.75);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.textLabel);
	}

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,255,255,0.008)").s().p("ArtBkIAAjHIXbAAIAADHg");
	this.shape_29.setTransform(105,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.textLabel}]}).wait(30));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.2,192,20.2);


(lib.grip = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.498)").s().p("EgAsBOIMAAAicPIBZAAMAAACcPg");
	this.shape.setTransform(4.5,500);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.grip, new cjs.Rectangle(0,0,9,1000), null);


(lib.expanderIcon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {collapse:0,expand:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("AA3AAQAAAXgQAQQgQAQgXAAQgWAAgQgQQgQgQAAgXQAAgWAQgQQAQgQAWAAQAXAAAQAQQAQAQAAAWgAgUAAIAsAA");
	this.shape.setTransform(5.5,5.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(1,1,1).p("AA3AAQAAAXgQAQQgQAQgXAAQgWAAgQgQQgQgQAAgXQAAgWAQgQQAQgQAWAAQAXAAAQAQQAQAQAAAWgAACgWIAAAWIAWAAAACAAIAAAXAgUAAIAWAA");
	this.shape_1.setTransform(5.5,5.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,13,13);


(lib.error = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGAjQgDgDAAgEQAAgEADgDQADgDADAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgDAAgDgDgAgIAIIAAgtIAQAAIAAAtg");
	this.shape.setTransform(6.8,6.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFAA00").s().p("Ag5A8QgFAAgDgFQgDgFADgFIA5hjQADgFAFAAQAGAAADAFIA5BjQADAFgCAFQgDAFgGAAg");
	this.shape_1.setTransform(6.7818,5.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.error, new cjs.Rectangle(0,0,13.6,12), null);


(lib.descriptionText = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"normal":0,"comment":1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.label = new cjs.Text("description", "normal 300 12px 'tk-niveau-grotesk'", "#333333");
	this.label.name = "label";
	this.label.lineHeight = 16;
	this.label.lineWidth = 217;
	this.label.parent = this;
	this.label.setTransform(2,2);
	if(!lib.properties.webfonts['tk-niveau-grotesk']) {
		lib.webFontTxtInst['tk-niveau-grotesk'] = lib.webFontTxtInst['tk-niveau-grotesk'] || [];
		lib.webFontTxtInst['tk-niveau-grotesk'].push(this.label);
	}

	this.timeline.addTween(cjs.Tween.get(this.label).wait(1).to({color:"#888888"},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,221,19.9);


(lib.colorDot = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#40658B").ss(1,1,1).p("ABQAAQAAAigXAXQgYAXghAAQggAAgYgXQgXgXAAgiQAAggAXgYQAYgXAgAAQAhAAAYAXQAXAYAAAgg");
	this.shape.setTransform(8,8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#99CCFF").s().p("Ag4A5QgXgYAAghQAAggAXgYQAYgXAgAAQAhAAAYAXQAXAYAAAgQAAAhgXAYQgYAXghAAQggAAgYgXg");
	this.shape_1.setTransform(8,8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#398861").ss(1,1,1).p("ABQAAQAAAigXAXQgYAXghAAQggAAgYgXQgXgXAAgiQAAggAXgYQAYgXAgAAQAhAAAYAXQAXAYAAAgg");
	this.shape_2.setTransform(8,8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#99FFCC").s().p("Ag4A5QgXgYAAghQAAggAXgYQAYgXAgAAQAhAAAYAXQAXAYAAAgQAAAhgXAYQgYAXghAAQggAAgYgXg");
	this.shape_3.setTransform(8,8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#6F6F31").ss(1,1,1).p("ABQAAQAAAigXAXQgYAXghAAQggAAgYgXQgXgXAAgiQAAggAXgYQAYgXAgAAQAhAAAYAXQAXAYAAAgg");
	this.shape_4.setTransform(8,8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFCC").s().p("Ag4A5QgXgYAAghQAAggAXgYQAYgXAgAAQAhAAAYAXQAXAYAAAgQAAAhgXAYQgYAXghAAQggAAgYgXg");
	this.shape_5.setTransform(8,8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#6E4D2C").ss(1,1,1).p("ABQAAQAAAigXAXQgYAXghAAQggAAgYgXQgXgXAAgiQAAggAXgYQAYgXAgAAQAhAAAYAXQAXAYAAAgg");
	this.shape_6.setTransform(8,8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCC99").s().p("Ag4A5QgXgYAAghQAAggAXgYQAYgXAgAAQAhAAAYAXQAXAYAAAgQAAAhgXAYQgYAXghAAQggAAgYgXg");
	this.shape_7.setTransform(8,8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#7A4B4B").ss(1,1,1).p("ABQAAQAAAigXAXQgYAXghAAQggAAgYgXQgXgXAAgiQAAggAXgYQAYgXAgAAQAhAAAYAXQAXAYAAAgg");
	this.shape_8.setTransform(8,8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCCCC").s().p("Ag4A5QgXgYAAghQAAggAXgYQAYgXAgAAQAhAAAYAXQAXAYAAAgQAAAhgXAYQgYAXghAAQggAAgYgXg");
	this.shape_9.setTransform(8,8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#643F64").ss(1,1,1).p("ABQAAQAAAigXAXQgYAXghAAQggAAgYgXQgXgXAAgiQAAggAXgYQAYgXAgAAQAhAAAYAXQAXAYAAAgg");
	this.shape_10.setTransform(8,8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFCCFF").s().p("Ag4A5QgXgYAAghQAAggAXgYQAYgXAgAAQAhAAAYAXQAXAYAAAgQAAAhgXAYQgYAXghAAQggAAgYgXg");
	this.shape_11.setTransform(8,8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,18,18);


(lib.colorComment = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Isolation_Mode
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99CCFF").s().p("AAHAiIg3AAQgMAAgKgJQgJgJAAgNIAAgvQAAgNAJgJQAKgJAMAAIBhAAQANAAAJAJQAJAJAAANIAAAvQAAANgJAJQgJAJgNAAIgJAAQgGARgNALQgNAMgQACQAPgTAAgXg");
	this.shape.setTransform(8,7.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#99FFCC").s().p("AAHAiIg3AAQgMAAgKgJQgJgJAAgNIAAgvQAAgNAJgJQAKgJAMAAIBhAAQANAAAJAJQAJAJAAANIAAAvQAAANgJAJQgJAJgNAAIgJAAQgGARgNALQgNAMgQACQAPgTAAgXg");
	this.shape_1.setTransform(8,7.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFCC").s().p("AAHAiIg3AAQgMAAgKgJQgJgJAAgNIAAgvQAAgNAJgJQAKgJAMAAIBhAAQANAAAJAJQAJAJAAANIAAAvQAAANgJAJQgJAJgNAAIgJAAQgGARgNALQgNAMgQACQAPgTAAgXg");
	this.shape_2.setTransform(8,7.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC99").s().p("AAHAiIg3AAQgMAAgKgJQgJgJAAgNIAAgvQAAgNAJgJQAKgJAMAAIBhAAQANAAAJAJQAJAJAAANIAAAvQAAANgJAJQgJAJgNAAIgJAAQgGARgNALQgNAMgQACQAPgTAAgXg");
	this.shape_3.setTransform(8,7.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCCCC").s().p("AAHAiIg3AAQgMAAgKgJQgJgJAAgNIAAgvQAAgNAJgJQAKgJAMAAIBhAAQANAAAJAJQAJAJAAANIAAAvQAAANgJAJQgJAJgNAAIgJAAQgGARgNALQgNAMgQACQAPgTAAgXg");
	this.shape_4.setTransform(8,7.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCCFF").s().p("AAHAiIg3AAQgMAAgKgJQgJgJAAgNIAAgvQAAgNAJgJQAKgJAMAAIBhAAQANAAAJAJQAJAJAAANIAAAvQAAANgJAJQgJAJgNAAIgJAAQgGARgNALQgNAMgQACQAPgTAAgXg");
	this.shape_5.setTransform(8,7.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16,15.3);


(lib.closeButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1.5,1,1).p("Ag7g7IA7A7IA8A8AA8g7Ig8A7Ig7A8");
	this.shape.setTransform(10,10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.008)").s().p("AhjBkIAAjHIDHAAIAADHgAA8A8Ig8g8IA8g7Ig8A7Ig7g7IA7A7Ig7A8IA7g8gAAAAAg");
	this.shape_1.setTransform(10,10);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(228,228,228,0.498)").s().p("AhjBkIAAjHIDHAAIAADHgAA8A8Ig8g8IA8g7Ig8A7Ig7g7IA7A7Ig7A8IA7g8gAAAAAg");
	this.shape_2.setTransform(10,10);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#990000").ss(1.5,1,1).p("Ag7g7IA7A7IA8A8AA8g7Ig8A7Ig7A8");
	this.shape_3.setTransform(10,10);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(204,204,204,0.8)").s().p("AhjBkIAAjHIDHAAIAADHgAA8A8Ig8g8IA8g7Ig8A7Ig7g7IA7A7Ig7A8IA7g8gAAAAAg");
	this.shape_4.setTransform(10,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20,20);


(lib.button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.label = new cjs.Text("label", "normal 400 11px 'Roboto'", "#0099FF");
	this.label.name = "label";
	this.label.textAlign = "center";
	this.label.lineHeight = 17;
	this.label.lineWidth = 66;
	this.label.parent = this;
	this.label.setTransform(36,3);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.label);
	}

	this.timeline.addTween(cjs.Tween.get(this.label).wait(3));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0099FF").ss(1,1,1).p("Ak1hjIJrAAQAoAAAAAoIAAB3QAAAogoAAIprAAQgoAAAAgoIAAh3QAAgoAoAAg");
	this.shape.setTransform(35,10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ak1BkQgoAAAAgoIAAh3QAAgoAoAAIJrAAQAoAAAAAoIAAB3QAAAogoAAg");
	this.shape_1.setTransform(35,10);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,153,255,0.149)").s().p("Ak1BkQgoAAAAgoIAAh3QAAgoAoAAIJrAAQAoAAAAAoIAAB3QAAAogoAAg");
	this.shape_2.setTransform(35,10);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,152,254,0.047)").s().p("Ak1BkQgoAAAAgoIAAh3QAAgoAoAAIJrAAQAoAAAAAoIAAB3QAAAogoAAg");
	this.shape_3.setTransform(35,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,72,22);


(lib.bgHitbox = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5F5F5").s().p("EgXbBOIMAAAicPMAu3AAAMAAACcPg");
	this.shape.setTransform(150,500);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(0,0,300,1000), null);


(lib.version = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {milestone:0,milestoneError:1,error:2,"normal":3};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var root = this;
		var initType;
		var myIndex;
		var errorState;
		var milestoneState;
		
		this.mouseChildren = false;
		
		this.setVersion = function(type = "version", index = 1, error = false, milestone = false){ 
			initType = type;
			myIndex = index;
			errorState = error;
			milestoneState = milestone;
			
			//set version label
			root.visible = (type !== "comment");
			root.milestone.alpha = (type == "version")?1:.2;
			root.label.visible = (type == "version");
			root.label.text = "v"+index;
			//set icon state
			if(error == true && milestone == true){
				root.gotoAndStop("milestoneError");
			}else if(milestone == true){
				root.gotoAndStop("milestone");
			}else if(error == true){
				root.gotoAndStop("error");
				root.addEventListener("mouseover", hoverMilestone);
				root.addEventListener("mouseout", outMilestone);
				root.addEventListener("mousedown", clickMilestone);
			}else{
				root.gotoAndStop("normal");
				root.addEventListener("mouseover", hoverMilestone);
				root.addEventListener("mouseout", outMilestone);
				root.addEventListener("mousedown", clickMilestone);
			}
		}
		
		function hoverMilestone(evt){
			if(errorState == false && milestoneState == false){		
				root.gotoAndStop("milestone");
				root.milestone.alpha = .2;
			}else if(errorState == true){
				root.gotoAndStop("milestoneError");
				root.milestone.alpha = .2;
			}
		}
		function outMilestone(evt){
			if(errorState == false && milestoneState == false){		
				root.gotoAndStop("normal");
			}else if(errorState == true){
				root.gotoAndStop("error");
			}
		}
		function clickMilestone(evt){
			removeMouse();
			if(errorState == false && milestoneState == false){		
				root.gotoAndStop("milestone");
				root.milestone.alpha = 1;
				root.parent.parent.parent.showInput(root.parent.description.label);
			}else if(errorState == true){
				root.gotoAndStop("milestoneError");
				root.milestone.alpha = 1;
				root.parent.parent.parent.showInput(root.parent.description.label);
			}
		}
		function removeMouse(){
			root.removeEventListener("mouseover", hoverMilestone);
			root.removeEventListener("mouseout", outMilestone);
			root.removeEventListener("mousedown", clickMilestone);
		}
		// variable functions need to be called below the function
		//this.setVersion();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// error
	this.instance = new lib.error();
	this.instance.setTransform(13,9.4,0.5904,0.59,0,0,0,7.4,6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({regX:6.8,scaleX:1,scaleY:1,x:6.8,y:6},0).to({_off:true},1).wait(1));

	// milestone
	this.milestone = new lib.milstoneFlag();
	this.milestone.name = "milestone";
	this.milestone.setTransform(7.5,6.6,1,1,0,0,0,7.5,6.6);

	this.timeline.addTween(cjs.Tween.get(this.milestone).to({_off:true},2).wait(2));

	// label
	this.label = new cjs.Text("v1", "normal 400 12px 'tk-niveau-grotesk'", "#333333");
	this.label.name = "label";
	this.label.textAlign = "center";
	this.label.lineHeight = 16;
	this.label.lineWidth = 28;
	this.label.parent = this;
	this.label.setTransform(6.75,12.55);
	if(!lib.properties.webfonts['tk-niveau-grotesk']) {
		lib.webFontTxtInst['tk-niveau-grotesk'] = lib.webFontTxtInst['tk-niveau-grotesk'] || [];
		lib.webFontTxtInst['tk-niveau-grotesk'].push(this.label);
	}

	this.timeline.addTween(cjs.Tween.get(this.label).wait(3).to({y:-1.45,lineHeight:17.9},0).wait(1));

	// Layer_2
	this.instance_1 = new lib.Symbol2();
	this.instance_1.setTransform(7,15,1,1,0,0,0,15,15);
	this.instance_1.alpha = 0.0195;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.4,-3.4,32.4,33.9);


(lib.userAvatar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var root = this;
		
		this.setUser = function(name = "Steve", index = 0, comment = false){
			//toggle dot/comment
			root.colorComment.visible = comment;
			root.colorDot.visible = !comment;
			//change bg color
			root.colorComment.gotoAndStop(index);
			root.colorDot.gotoAndStop(index);
			//assign name
			root.label.text = name.slice(0,2).toUpperCase();
		}
		
		// variable functions need to be called below the function
		this.setUser();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// label
	this.label = new cjs.Text("Ww", "normal 500 10px 'tk-niveau-grotesk'", "#333333");
	this.label.name = "label";
	this.label.textAlign = "center";
	this.label.lineHeight = 13;
	this.label.lineWidth = 19;
	this.label.parent = this;
	this.label.setTransform(8.3,2.2);
	if(!lib.properties.webfonts['tk-niveau-grotesk']) {
		lib.webFontTxtInst['tk-niveau-grotesk'] = lib.webFontTxtInst['tk-niveau-grotesk'] || [];
		lib.webFontTxtInst['tk-niveau-grotesk'].push(this.label);
	}

	this.timeline.addTween(cjs.Tween.get(this.label).wait(1));

	// colorComment
	this.colorComment = new lib.colorComment();
	this.colorComment.name = "colorComment";
	this.colorComment.setTransform(8.1,11.2,1.2,1.2,0,0,0,8,8.1);

	this.timeline.addTween(cjs.Tween.get(this.colorComment).wait(1));

	// colorDot
	this.colorDot = new lib.colorDot();
	this.colorDot.name = "colorDot";
	this.colorDot.setTransform(8,8,1.125,1.125,0,0,0,8,8);

	this.timeline.addTween(cjs.Tween.get(this.colorDot).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.userAvatar, new cjs.Rectangle(-3,-1.5,22.7,21.3), null);


(lib.searchBox2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.clearButton.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.clearButton = new lib.closeButton();
	this.clearButton.name = "clearButton";
	this.clearButton.setTransform(271,10.6,1,1,0,0,0,10,10);
	new cjs.ButtonHelper(this.clearButton, 0, 1, 2);

	this.label = new cjs.Text("Search", "normal 400 11px 'Roboto'", "#666666");
	this.label.name = "label";
	this.label.lineHeight = 17;
	this.label.lineWidth = 253;
	this.label.parent = this;
	this.label.setTransform(4,4);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.label);
	}

	this.bg = new lib.inputFrame();
	this.bg.name = "bg";
	this.bg.setTransform(140.85,11,1,1,0,0,0,140.8,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bg},{t:this.label},{t:this.clearButton}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.searchBox2, new cjs.Rectangle(-0.4,-0.5,282.59999999999997,23), null);


(lib.historyPanel = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.grip = new lib.grip();
	this.grip.name = "grip";
	this.grip.setTransform(301.55,58,1.3333,1.3333,0,0,0,4.5,43.5);
	this.grip.alpha = 0.0195;

	this.panelBg = new lib.bg();
	this.panelBg.name = "panelBg";
	this.panelBg.setTransform(145,313.6,1,1,0,0,0,145,313.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.panelBg},{t:this.grip}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.historyPanel, new cjs.Rectangle(0,0,307.6,1333.3), null);


(lib.expanderButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.icon = new lib.expanderIcon();
	this.icon.name = "icon";
	this.icon.setTransform(2.55,2.55);

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(4));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0099FF").s().p("AgnAnQgQgQAAgXQAAgWAQgRQARgQAWAAQAXAAAQAQQARARAAAWQAAAXgRAQQgQARgXAAQgWAAgRgRg");
	this.shape.setTransform(8.1,8.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AgnAnQgQgQAAgXQAAgWAQgRQARgQAWAAQAXAAAQAQQARARAAAWQAAAXgRAQQgQARgXAAQgWAAgRgRg");
	this.shape_1.setTransform(8.1,8.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[]},1).wait(1));

	// Layer_1
	this.instance = new lib.Symbol2();
	this.instance.setTransform(8.05,8.05,0.5333,0.5333,0,0,0,15.1,15.1);
	this.instance.alpha = 0.0195;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16,16);


(lib.historyItem = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var root = this;
		var hisObj = {};
		var spacing = 6;
		stop(); 
		this.getChildIndexList = function(){
			return hisObj.childIndexList;
		}
		function initExpandButton(hasChildren = false){
			if(hasChildren){
				root.expanderBtn.icon.gotoAndStop("collapse");
				root.expanderBtn.addEventListener("mousedown", clickExpander);
			}else{
				root.expanderBtn.visible = false;
			}
		}
		
		function clickExpander(evt){
			if(root.expanderBtn.icon.currentLabel == "expand"){
				root.expanderBtn.icon.gotoAndStop("collapse");
				root.parent.parent.parent.collapse(hisObj.childIndexList);
				//root.parent.parent.parent.collapseAll["dontUpdate"] = true;
				//root.parent.parent.parent.collapseAll.gotoAndPlay("off");
			}else{
				root.expanderBtn.icon.gotoAndStop("expand");
				root.parent.parent.parent.collapse(hisObj.childIndexList, false);
			}
		}
		
		this.setItemContent = function(historyItemObject){
			hisObj = historyItemObject;
			/*
			hisObj.index; //#
			hisObj.user; //#
			hisObj.userName; //string
			hisObj.date; //date "2012-04-23T18:25:43"
			hisObj.type; //version, property, design, comment, remove, add
			hisObj.whatChanged; //string
			hisObj.error; //bool
			hisObj.milestione; //bool
			hisObj.description; //string
			hisObj.file; //char
			hisObj.fileName; //string
			hisObj.versionNumber; //#*/
			initExpandButton(hisObj.type=="version");
		
			root.user.setUser(hisObj.userName, hisObj.user, (hisObj.type == "comment"));
			root.version.setVersion(hisObj.type, hisObj.versionNumber, hisObj.error, hisObj.milestone);
			if(hisObj.type == "comment"){		
				root.what.gotoAndStop(hisObj.type);
				root.what.label.text = hisObj.userName;
				root.description.gotoAndStop(hisObj.type);
				root.description.label.text = '"'+hisObj.description+'"';
				root.description.label.addEventListener("mousedown", editText);
			}else{
				root.what.label.text = hisObj.whatChanged;
				if(hisObj.type == "event"){
					root.what.gotoAndStop("comment");		
					root.description.gotoAndStop("comment");
				}else{
					root.what.gotoAndStop("normal");		
					root.description.gotoAndStop("normal");
				}
				root.description.label.text = hisObj.description;
				root.description.label.addEventListener("mousedown", editText);
			}
			var date = new Date(hisObj.date);
			var dateString = date.getMonth() + "/" + date.getDate() + "/" +date.getFullYear();
			root.date.text = dateString;//new Date(hisObj.date).toDateString();
			root.file.text = hisObj.fileName;
			var shape = new createjs.Shape(new createjs.Graphics().beginFill("#00CCFF").drawRect(0,-6,root.getBounds().width+15,root.getHeight() + 12));
			shape.alpha = .01;
			shape.addEventListener("mouseover", overHistory);
			shape.addEventListener("mouseout", outHistory);
			shape.addEventListener("mousedown", clickHistory);
			root.bgHitbox.addChild(shape);
			//change display depth
			//root.setChildIndex(shape,0);
		}
		function overHistory(evt){ evt.currentTarget.alpha = .1;}
		function outHistory(evt){ evt.currentTarget.alpha = .01;}
		function clickHistory(evt){ evt.currentTarget.alpha = .2;}
		
		function editText(evt){
			root.parent.parent.parent.showInput(evt.currentTarget);
		}
		var whatRatio = [.70,1,1,1];
		var dateWidth = [100,34,17,0];
		var fileRatio = [.30,0,0,0];
		var labelOffset = 47;
		this.resizeItem = function(maxWidth, bgIndex = -1){
			//breakpoint
			bp = (maxWidth<180)?3:(maxWidth<230)?2:(maxWidth<390)?1:0;
			fieldCount = (bp==3)?2:(bp>0)?1:0;
			if(root.visible){
				var lastBounds = root.description.label.getBounds();
				
				root.what.label.lineWidth = (maxWidth-labelOffset-10-(spacing*fieldCount)-dateWidth[bp])*whatRatio[bp];
				if(dateWidth[bp] > 0){
					if(maxWidth>=300 && maxWidth<390)
						root.date.lineWidth = dateWidth[bp]+80;
					else
						root.date.lineWidth = dateWidth[bp];
					root.date.x = root.what.label.lineWidth + labelOffset - root.date.lineWidth/2 + spacing;
					root.date.visible = true;
					var date = new Date(hisObj.date);
					if(bp==0)
							root.date.text = date.toDateString();
					else if(bp==2)
						root.date.text = date.getMonth() + "/" + date.getDate();
					else
						if(maxWidth<300)
							root.date.text = date.getMonth() + "/" + date.getDate() + "/" +date.getFullYear();
						else
							root.date.text = date.toDateString();
				}else{
					root.date.visible = false;
				}
				if(fileRatio[bp] > 0){
					root.file.lineWidth = (maxWidth-labelOffset-10-(spacing*fieldCount)-dateWidth[bp])*fileRatio[bp];
					root.file.x = root.date.lineWidth + root.date.x + spacing;
					root.file.visible = true;
				}else{
					root.file.visible = false;
				}
				if(root.description.visible){
					root.description.label.lineWidth = maxWidth-labelOffset-10;
				}
				if((root.what.label.getBounds().height > 25) || root.date.getBounds().height > 25 || root.file.getBounds().height > 25){
					var bounds = root.date.getTransformedBounds();
					var mask = new createjs.Shape(new createjs.Graphics().drawRect(0, bounds.y, 4000, 19));
					root.what.mask = mask;
					root.date.mask = mask;
					root.file.mask = mask;
				}
				if(bgIndex >-1){
					root.parent.parent.parent.resizeBg(maxWidth, hisObj.myId, bgIndex, root.getHeight(), root.y);
				}else{
					root.parent.parent.parent.setLastPosition(maxWidth, hisObj.myId, root.getHeight(), root.y);
				}
				root.parent.parent.parent.resizeTextHitbox(maxWidth, hisObj.myId, bgIndex, root.getHeight(), root.y);
			}
			
		}
		
		this.getHeight = function(){
			var height = 0;
			if(root.description.visible && root.description.label.text !== ""){
				height = 20 + root.description.label.getBounds().height;
			}else if(root.version.currentLabel !== "normal"){
				height = 30;
			}else{
				height = 20;
			}
			return height;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.version = new lib.version();
	this.version.name = "version";
	this.version.setTransform(41.1,21.05,1,1,0,0,0,35.2,19.2);

	this.timeline.addTween(cjs.Tween.get(this.version).wait(1));

	// Layer_1
	this.description = new lib.descriptionText();
	this.description.name = "description";
	this.description.setTransform(157,29.9,1,1,0,0,0,110.5,10);

	this.what = new lib.whatText();
	this.what.name = "what";
	this.what.setTransform(98.5,10,1,1,0,0,0,52,10);

	this.expanderBtn = new lib.expanderButton();
	this.expanderBtn.name = "expanderBtn";
	this.expanderBtn.setTransform(-13.85,9.85,1,1,0,0,0,8,8);
	new cjs.ButtonHelper(this.expanderBtn, 0, 1, 2, false, new lib.expanderButton(), 3);

	this.file = new cjs.Text("file", "normal 400 12px 'tk-niveau-grotesk'", "#666666");
	this.file.name = "file";
	this.file.lineHeight = 16;
	this.file.lineWidth = 92;
	this.file.parent = this;
	this.file.setTransform(269.5,2);
	if(!lib.properties.webfonts['tk-niveau-grotesk']) {
		lib.webFontTxtInst['tk-niveau-grotesk'] = lib.webFontTxtInst['tk-niveau-grotesk'] || [];
		lib.webFontTxtInst['tk-niveau-grotesk'].push(this.file);
	}

	this.user = new lib.userAvatar();
	this.user.name = "user";
	this.user.setTransform(35.45,9.3,1,1,0,0,0,8,8);

	this.date = new cjs.Text("date", "italic 300 12px 'tk-niveau-grotesk'", "#666666");
	this.date.name = "date";
	this.date.lineHeight = 16;
	this.date.lineWidth = 92;
	this.date.parent = this;
	this.date.setTransform(165.5,2);
	if(!lib.properties.webfonts['tk-niveau-grotesk']) {
		lib.webFontTxtInst['tk-niveau-grotesk'] = lib.webFontTxtInst['tk-niveau-grotesk'] || [];
		lib.webFontTxtInst['tk-niveau-grotesk'].push(this.date);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.date},{t:this.user},{t:this.file},{t:this.expanderBtn},{t:this.what},{t:this.description}]}).wait(1));

	// bgHitbox
	this.bgHitbox = new lib.bgHitbox();
	this.bgHitbox.name = "bgHitbox";

	this.timeline.addTween(cjs.Tween.get(this.bgHitbox).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.historyItem, new cjs.Rectangle(-21.8,-0.2,385.3,40), null);


// stage content:
(lib.HistoryPanel19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var root = this;
		var verString = window.location.href;
		var verString = verString.substring(
		verString.lastIndexOf("HistoryPanel") + 12,
		verString.lastIndexOf(".html"));
		this.myVersion.text = "Prototype Version " + verString;
		var lastResize = 300;
		var files = {a:{name:"Car Base"},
				b:{name:"sub assembly B"},
					c:{name:"component C"},
			d:{name:"component D"},
			e:{name:"component E"},};
		
		var users = ["Steve Arnold", "Alison Tiller", "Rob Sevens", "Kate Renolds", "Release Manager"];
		
		var historyList = [
			{user: "1", //0="Steve", 1="Alison", 2="Rob", 3="Kate"
			date: "2022-04-23T18:25:43",
			type: "version", //version, property, design, comment, remove, add
			whatChanged: "", //MANUAL = property, design //AUTO = version, add, remove, comment
			error: false, 
			milestone: false,
			description: "Initial work in progress design", //user
			file: "a",//a=A, b=a-B, c=a-b-C, d=a-D, e=a-E
			}, 
			{user: "2", //0="Steve", 1="Alison", 2="Rob", 3="Kate"
			date: "2022-04-27T18:25:43",
			type: "property", //version, property, design, comment, remove, add
			whatChanged: "Update property B", //MANUAL = property, design //AUTO = version, add, remove, comment
			error: false, 
			milestone: false,
			description: "Changed property B based on user specs", //user
			file: "a",//a=A, b=a-B, c=a-b-C, d=a-D, e=a-E
			}, 
			{user: "3", //0="Steve", 1="Alison", 2="Rob", 3="Kate"
			date: "2022-04-28T18:25:43",
			type: "add", //version, property, design, comment, remove, add
			whatChanged: "", //MANUAL = property, design //AUTO = version, add, remove, comment
			error: false, 
			milestone: false,
			description: "Add axel assembly to design", //user
			file: "b",//a=A, b=a-B, c=a-b-C, d=a-D, e=a-E
			}, 
			{user: "0", //0="Steve", 1="Alison", 2="Rob", 3="Kate"
			date: "2022-05-01T18:25:43",
			type: "comment", //version, property, design, comment, remove, add
			whatChanged: "", //MANUAL = property, design //AUTO = version, add, remove, comment
			error: false, 
			milestone: false,
			description: "Thanks Kate, I will make that wheel change the client requested.", //user
			file: "b",//a=A, b=a-B, c=a-b-C, d=a-D, e=a-E
			},
			{user: "3", //0="Steve", 1="Alison", 2="Rob", 3="Kate"
			date: "2022-05-01T18:25:43",
			type: "comment", //version, property, design, comment, remove, add
			whatChanged: "", //MANUAL = property, design //AUTO = version, add, remove, comment
			error: false, 
			milestone: false,
			description: ":thumbsup:", //user
			file: "a",//a=A, b=a-B, c=a-b-C, d=a-D, e=a-E
			},
			{user: "0", //0="Steve", 1="Alison", 2="Rob", 3="Kate"
			date: "2022-05-01T18:25:43",
			type: "version", //version, property, design, comment, remove, add
			whatChanged: "", //MANUAL = property, design //AUTO = version, add, remove, comment
			error: true, 
			milestone: false,
			description: "Quick fix for wheel update, committing with broken features. @Alison, can you fix my issue.", //user
			file: "c",//a=A, b=a-B, c=a-b-C, d=a-D, e=a-E
			},
			{user: "1", //0="Steve", 1="Alison", 2="Rob", 3="Kate"
			date: "2022-05-02T18:25:43",
			type: "comment", //version, property, design, comment, remove, add
			whatChanged: "", //MANUAL = property, design //AUTO = version, add, remove, comment
			error: false, 
			milestone: false,
			description: "np", //user
			file: "c",//a=A, b=a-B, c=a-b-C, d=a-D, e=a-E
			},
			{user: "1", //0="Steve", 1="Alison", 2="Rob", 3="Kate"
			date: "2022-05-02T18:25:43",
			type: "version", //version, property, design, comment, remove, add
			whatChanged: "", //MANUAL = property, design //AUTO = version, add, remove, comment
			error: false, 
			milestone: true,
			description: "Fix for broken wheel component @Steve :)", //user
			file: "c",//a=A, b=a-B, c=a-b-C, d=a-D, e=a-E
			}, 
			{user: "1", //0="Steve", 1="Alison", 2="Rob", 3="Kate"
			date: "2022-05-02T18:25:43",
			type: "comment", //version, property, design, comment, remove, add
			whatChanged: "", //MANUAL = property, design //AUTO = version, add, remove, comment
			error: false, 
			milestone: false,
			description: "@releaseManager please review", //user
			file: "a",//a=A, b=a-B, c=a-b-C, d=a-D, e=a-E
			},
			{user: "4", //0="Steve", 1="Alison", 2="Rob", 3="Kate", 4="Release Manager"
			date: "2022-05-05T18:25:43",
			type: "event", //version, property, design, comment, remove, add
			whatChanged: "Milestone added", //MANUAL = property, design //AUTO = version, add, remove, comment
			error: false, 
			milestone: false,
			description: "", //user
			file: "a",//a=A, b=a-B, c=a-b-C, d=a-D, e=a-E
			},
			{user: "4", //0="Steve", 1="Alison", 2="Rob", 3="Kate", 4="Release Manager"
			date: "2022-05-05T18:25:43",
			type: "comment", //version, property, design, comment, remove, add
			whatChanged: "", //MANUAL = property, design //AUTO = version, add, remove, comment
			error: false, 
			milestone: false,
			description: "Looks great everyone. I have changed the latest change to a milestone.", //user
			file: "a",//a=A, b=a-B, c=a-b-C, d=a-D, e=a-E
			},
			{user: "4", //0="Steve", 1="Alison", 2="Rob", 3="Kate", 4="Release Manager"
			date: "2022-06-08T18:25:43",
			type: "event", //version, property, design, comment, remove, add
			whatChanged: 'File name update "Car Base"', //MANUAL = property, design //AUTO = version, add, remove, comment
			error: false, 
			milestone: false,
			description: "Updated name to new format", //user
			file: "a",//a=A, b=a-B, c=a-b-C, d=a-D, e=a-E
			},
			{user: "0", //0="Steve", 1="Alison", 2="Rob", 3="Kate", 4="Release Manager"
			date: "2023-01-01T18:25:43",
			type: "property", //version, property, design, comment, remove, add
			whatChanged: 'Material changed to Steel', //MANUAL = property, design //AUTO = version, add, remove, comment
			error: false, 
			milestone: false,
			description: "Swapping material due to global shortage, @Rob please re-test performance", //user
			file: "c",//a=A, b=a-B, c=a-b-C, d=a-D, e=a-E
			},
			{user: "2", //0="Steve", 1="Alison", 2="Rob", 3="Kate", 4="Release Manager"
			date: "2023-01-03T18:25:43",
			type: "simulation", //version, property, design, comment, remove, add
			whatChanged: 'Simulation updated', //MANUAL = property, design //AUTO = version, add, remove, comment
			error: true, 
			milestone: false,
			description: "Updated study for new material (failed initial load tests)", //user
			file: "c",//a=A, b=a-B, c=a-b-C, d=a-D, e=a-E
			},
			{user: "2", //0="Steve", 1="Alison", 2="Rob", 3="Kate", 4="Release Manager"
			date: "2023-01-03T18:25:43",
			type: "comment", //version, property, design, comment, remove, add
			whatChanged: '', //MANUAL = property, design //AUTO = version, add, remove, comment
			error: false, 
			milestone: false,
			description: "@Steve, The new material is causing some faliors under load. redesign is needed.", //user
			file: "c",//a=A, b=a-B, c=a-b-C, d=a-D, e=a-E
			},
			{user: "0", //0="Steve", 1="Alison", 2="Rob", 3="Kate", 4="Release Manager"
			date: "2023-01-01T18:25:43",
			type: "version", //version, property, design, comment, remove, add
			whatChanged: '', //MANUAL = property, design //AUTO = version, add, remove, comment
			error: false, 
			milestone: true,
			description: "created new generative body based on simulation data. @Rob, FYI", //user
			file: "c",//a=A, b=a-B, c=a-b-C, d=a-D, e=a-E
			},
			{user: "2", //0="Steve", 1="Alison", 2="Rob", 3="Kate", 4="Release Manager"
			date: "2023-01-03T18:25:43",
			type: "simulation", //version, property, design, comment, remove, add
			whatChanged: 'Simulation updated', //MANUAL = property, design //AUTO = version, add, remove, comment
			error: false, 
			milestone: false,
			description: "Updated study for new body (passes load tests)", //user
			file: "c",//a=A, b=a-B, c=a-b-C, d=a-D, e=a-E
			},
			{user: "2", //0="Steve", 1="Alison", 2="Rob", 3="Kate", 4="Release Manager"
			date: "2023-01-05T18:25:43",
			type: "comment", //version, property, design, comment, remove, add
			whatChanged: '', //MANUAL = property, design //AUTO = version, add, remove, comment
			error: false, 
			milestone: false,
			description: "@steve new design works well.", //user
			file: "c",//a=A, b=a-B, c=a-b-C, d=a-D, e=a-E
			},
			{user: "0", //0="Steve", 1="Alison", 2="Rob", 3="Kate", 4="Release Manager"
			date: "2023-01-05T18:25:43",
			type: "comment", //version, property, design, comment, remove, add
			whatChanged: '', //MANUAL = property, design //AUTO = version, add, remove, comment
			error: false, 
			milestone: false,
			description: "@releaseManager please review", //user
			file: "c",//a=A, b=a-B, c=a-b-C, d=a-D, e=a-E
			},
			{user: "4", //0="Steve", 1="Alison", 2="Rob", 3="Kate", 4="Release Manager"
			date: "2022-05-05T18:25:43",
			type: "event", //version, property, design, comment, remove, add
			whatChanged: "Milestone added", //MANUAL = property, design //AUTO = version, add, remove, comment
			error: false, 
			milestone: false,
			description: "", //user
			file: "a",//a=A, b=a-B, c=a-b-C, d=a-D, e=a-E
			},
			{user: "4", //0="Steve", 1="Alison", 2="Rob", 3="Kate", 4="Release Manager"
			date: "2023-01-06T18:25:43",
			type: "comment", //version, property, design, comment, remove, add
			whatChanged: "", //MANUAL = property, design //AUTO = version, add, remove, comment
			error: false, 
			milestone: false,
			description: "Looks great thanks for the quick pivot. I updated the latest change to a milestone.", //user
			file: "a",//a=A, b=a-B, c=a-b-C, d=a-D, e=a-E
			},
		];
		var ySpacing = 12;
		var backgroundContainer = new createjs.MovieClip();
		var itemContainer = new createjs.MovieClip();
		//root.historyPanel.x = 20;
		root.historyPanel.addChild(backgroundContainer);
		root.historyPanel.addChild(itemContainer);
		updateHistoryList();
		// checkbox CODE_________________________________
		this.updateLabel = function(cbMC){ 
			if(cbMC["checkState"] != null)
				cbMC.textLabel.text = cbMC["label"] + " is " + cbMC["checkState"];
			else
				cbMC.textLabel.text = cbMC["label"];
			
			if(cbMC["label"] == "Collapse all"){
				cbMC.textLabel.text = cbMC["label"];
				collapseAll();
			}else if(cbMC["label"] == "Expand all"){
				cbMC.textLabel.text = cbMC["label"];
				filterChanged(false, true);
			}else{
				filterChanged();
			}
		} 
		var checkboxCount = 0;
		function setupCheckbox(cbMC, label, defaultValue = true){
			checkboxCount++;
			cbMC["label"] = label;
			root.updateLabel(cbMC);
			cbMC.addEventListener("mousedown", settingChanged);
			cbMC.on('mouseover', function (evt) {
		        cbMC.cursor = 'pointer';
			});
		
			cbMC.on('mouseout', function (evt) {
		        cbMC.cursor = 'default';
			});
			if(defaultValue == false){
				cbMC.gotoAndPlay("off");
			}
			return cbMC;
		}
		
		function settingChanged(evt){
			evt.currentTarget.play();
		}
		this.clearFilters.label.text = "Clear Filters";
		this.clearFilters.addEventListener("mousedown", clickClearFilters);
		this.clearFilters.visible = false;
		
		function clickClearFilters(evt){
			filterChanged(false, false, true);
		}
		
		setTimeout(initCheckboxes,200);//();
		function initCheckboxes(){
			setupCheckbox(root.showChild, "Show children", true);
			setupCheckbox(root.showComments, "Show comments/notes", true);
			setupCheckbox(root.showEvents, "Show events", true);
			setupCheckbox(root.showMilestonesOnly, "Milestones only", false);
			setupCheckbox(root.showErrorsOnly, "Errors only", false);
			setupCheckbox(root.collapseAll, "Collapse all", false);
			setupCheckbox(root.expandAll, "Expand all", false);
		}
		var afterFirst = 0;
		function collapseAll(){
			if(afterFirst >= checkboxCount+2){
			if(historyMcList !== undefined && root.collapseAll.checkState == "ON" ){
				for(var c=0; c<historyMcList.length; c++){
					if(historyList[c].type !== "version"){
						historyMcList[c].visible = false;
					}else if(historyList[c].type == "version"){
						historyMcList[c].expanderBtn.icon.gotoAndStop("expand");
						
					}
					resizeFrame();
				}
				root.collapseAll.gotoAndPlay("off");
			}}
		}
		
		function filterChanged(searchUpdate = false, expandAllBool = false, reset = false){
			if(reset){
				root.showMilestonesOnly.gotoAndStop("off");
				root.showErrorsOnly.gotoAndStop("off");
				root.searchBox.label.text = "Search";
				root.clearFilters.visible = false;
				expandAllBool = true;
				root.expandAll.checkState = "ON";
				//remove input
				root.myInputBox.y = -500;
				redrawCanvas();
				document.getElementById('canvas').focus();
				//maybe
				/*root.showChild.checkState == "OFF"
				root.showComments.checkState == "OFF"
				root.showEvents.checkState == "OFF"*/
			}else{
				root.clearFilters.visible = (root.showErrorsOnly.checkState == "ON" ||
											root.showMilestonesOnly.checkState == "ON" ||
											root.searchBox.label.text !== "Search" && root.searchBox.label.text !== "");
			}
			trace("root.showChild.checkState " + root.showChild.checkState);
			trace("root.showComments.checkState " + root.showComments.checkState);
			if(historyMcList !== undefined){
				for(var c=0; c<historyMcList.length; c++){
					historyMcList[c].visible = true;
					
					if(historyList[c].type == "version" && expandAllBool && root.expandAll.checkState == "ON"){
						historyMcList[c].expanderBtn.icon.gotoAndStop("collapse");
					}
				
					if(historyList[c].file !== "a" && root.showChild.checkState == "OFF")
						historyMcList[c].visible = false;
					if(historyList[c].type == "comment" && root.showComments.checkState == "OFF")
						historyMcList[c].visible = false;
					if(historyList[c].type == "event" && root.showEvents.checkState == "OFF")
						historyMcList[c].visible = false;
					
					if(!(root.showMilestonesOnly.checkState == "ON" && root.showErrorsOnly.checkState == "ON")){
						if(historyList[c].milestone == false && root.showMilestonesOnly.checkState == "ON")
							historyMcList[c].visible = false;
						if(historyList[c].error == false && root.showErrorsOnly.checkState == "ON")
							historyMcList[c].visible = false;
					}else if(historyList[c].error == false && historyList[c].milestone == false){
						historyMcList[c].visible = false;
					}
						
					
					if(searchUpdate){
						var matchesSearch = testSearch(c);
						//hide items that don't match search
						if(matchesSearch == false)
							historyMcList[c].visible = matchesSearch;
					}
				}
				if(expandAllBool && root.expandAll.checkState == "ON"){
						root.expandAll.gotoAndPlay("off");
				}
				for(var t=0; t<historyMcList.length; t++){
					if(afterFirst >= checkboxCount)
						resizeFrame();
				}
			}
			afterFirst++;
		}
		
		function testSearch(itemIndex){
			var searchTerm = root.searchBox.label.text.toLocaleLowerCase();
			var itemData = historyList[itemIndex];
			var date = new Date(itemData.date);
			var dateString = date.toLocaleDateString('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'});
			if(searchTerm !== "search"){
				if(itemData.userName.toLocaleLowerCase().search(searchTerm)>-1)
					return true;
				else if(itemData.type.toLocaleLowerCase().search(searchTerm)>-1)
					return true;
				else if(itemData.description.toLocaleLowerCase().search(searchTerm)>-1)
					return true;
				else if(itemData.whatChanged.toLocaleLowerCase().search(searchTerm)>-1)
					return true;
				else if(itemData.fileName.toLocaleLowerCase().search(searchTerm)>-1)
					return true;
				else if(searchTerm.toLocaleLowerCase().search('error')>-1 && itemData.error == true)
					return true;
				else if(searchTerm.toLocaleLowerCase().search('milestone')>-1 && itemData.milestone == true){
					return true;
				
				//if(itemData.versionNumber.search('/'+searchTerm+'/i')>-1)
					//return true;
				}else if(dateString.toLocaleLowerCase().search(searchTerm)>-1)
					return true;
				else if(String(date.getMonth() + "/" + date.getDate()).search(searchTerm)>-1)
					return true;
				else if(String(date.getMonth() + "/" + date.getDate() + "/" +date.getFullYear()).search(searchTerm)>-1)
					return true;
				else
					return false;
			}else{
				return true;
			}
		}
		
		this.collapse = function(childIndexList, collapse = true, skipResize = false){
			
			for(var c=0; c<childIndexList.length; c++){
				trace("collapse");	
				historyMcList[childIndexList[c]].visible = collapse;
			}
			if(!skipResize){
				// unfortunatly this needs to be run multiple times to ensure the position is correct when elements are removed
				for(var t=0; t<historyMcList.length-childIndexList[0]; t++){
					resizeFrame();
				}
			}
			// clean up extra bg or add if needed
		}
		
		function updateHistoryList(){ 
				//historyList.reverse();
			var versionCount = 0;
			var lastVersionIndex = -1;
			var childIndexList = [];
			for(var h=0; h<historyList.length;h++){
				//add index
				historyList[h].index = h;		
				//add user name
				historyList[h].userName = users[historyList[h].user];
				//add file name
				historyList[h].fileName = files[historyList[h].file].name;
				if(historyList[h].type == "version"){
					versionCount++;			
					historyList[h].versionNumber = versionCount;
					historyList[h].whatChanged = "Saved " + historyList[h].fileName + " v"+ versionCount;
					//save children to previous version
					if(lastVersionIndex !== -1 && childIndexList.length>0){
						historyList[lastVersionIndex].childIndexList = childIndexList;
						
					}
					lastVersionIndex = h;
					childIndexList = [];
				}else{
					childIndexList.push(h);
					if(h == historyList.length-1){
						historyList[lastVersionIndex].childIndexList = childIndexList;
					}
					switch(historyList[h].type){
						case "add": //version, property, design, comment, remove, add
							historyList[h].whatChanged = "Added " + historyList[h].fileName;
						break;
						case "remove": //version, property, design, comment, remove, add
							historyList[h].whatChanged = "Removed " + historyList[h].fileName;
						break;
					}
				}
				historyList[h].myId = h;
			} 
		}
		
		//console.log(root.historyList[0]);
		//console.log(files.a);
		
		//add symbol dynamicaly
		var historyMcList = [];
		for(var t=0; t<historyList.length; t++){
			addHistoryItem(t);
		}
		function addHistoryItem(index){
			var historyMc = new lib.historyItem();
			historyMcList.push(historyMc);
			var backgroundContainer = new createjs.MovieClip();
			itemContainer.addChild(historyMc);
		}
		//requires a delay so function is available in child after initial creation
		setTimeout(loadData, 20);
		var previousPosY = ySpacing;
		this._ySpacing = function(val = -1){
			if(val>-1)
				ySpacing = val;
			return ySpacing;
		}
		function loadData(){	
			previousPosY = ySpacing;
			historyMcList[0].y = previousPosY;
			for(var t=0; t<historyList.length; t++){
				// load data
				historyMcList[t].setItemContent(historyList[t]);
				// set position
				if(t > 0){
					previousPosY = historyMcList[t-1].getHeight() + previousPosY + ySpacing;
					historyMcList[t].y = previousPosY; 
				}
			
				// create alturnating background color	
				if((t > 0) && t%2 == 1){
					var shape = new createjs.Shape(new createjs.Graphics().beginFill("#f0f0f0").drawRect(0,0,historyMcList[t].getBounds().width+15,historyMcList[t].getHeight() + ySpacing));
					//shape.alpha = .7; 
					//shape.x = userPosOffset.x;
					shape.y = previousPosY - ySpacing/2;
					backgroundContainer.addChild(shape);
				}
			}
			// move to front
			var grip = backgroundContainer.grip;
			backgroundContainer.removeChild(grip);
			backgroundContainer.addChild(grip);
		}
		
		var scrollIndex = 0;
		document.getElementById('canvas').addEventListener('wheel', function(evt) {	
			//trace("wheelDelta " + evt.wheelDelta);
			//trace(evt.detail);
			if(evt.wheelDelta > 0 || evt.detail > 0) {
				scrollIndex += evt.wheelDelta;//scrollIndex++;
			} else if(evt.wheelDelta < 0 || evt.detail < 0) {
				scrollIndex += evt.wheelDelta;//scrollIndex--;        
			}
			setScrollPosition();
		});
		
		function setScrollPosition(){
			var speed = .7;
			itemContainer.y = backgroundContainer.y = scrollIndex*speed;
			if(itemContainer.y > 0 || itemContainer.getBounds().height+40 <= 1000)
				scrollIndex = itemContainer.y = backgroundContainer.y = 0;
			//trace(i*speed);
			//trace("item height "+itemContainer.getBounds().height)
			if(itemContainer.y < 1000-itemContainer.getBounds().height-40 && itemContainer.getBounds().height+40 > 1000){
				itemContainer.y = backgroundContainer.y = 1000-itemContainer.getBounds().height-40;
				scrollIndex = itemContainer.y/speed;
			}
		}
		
		//Resize Functions ___________________________________________________
		
		this.resizeBg = function(maxWidth, itemIndex, index, height, yPos){
			if(index < backgroundContainer.numChildren){
				var shape = backgroundContainer.getChildAt(index);
				var g = shape.graphics;
				g.clear();
				shape["fillCommand"] = g.beginFill("#f0f0f0").command;
				g.drawRect(0,0,maxWidth-2,height + ySpacing);
				shape.y = previousPosY - ySpacing/2;
				historyMcList[itemIndex].y = previousPosY;
				previousPosY = yPos + height + ySpacing;
			}
		}
		
		this.resizeTextHitbox = function(maxWidth, itemIndex, index, height, yPos){
			var shape = historyMcList[itemIndex].bgHitbox.getChildAt(0);
			var g = shape.graphics;
			if(g !== undefined){
				g.clear();
				shape["fillCommand"] = g.beginFill("#00CCFF").command;
				g.drawRect(0,-ySpacing/2,maxWidth-2,height + ySpacing);
				shape.y = 0;//previousPosY - ySpacing/2;
				shape.x = 0;//historyMcList[itemIndex].y = previousPosY;
				//previousPosY = yPos + height + ySpacing;
			}
		}
		
		this.setLastPosition = function(maxWidth, itemIndex, height, yPos){
			if(historyMcList[itemIndex].visible){
				historyMcList[itemIndex].y = previousPosY;
				previousPosY = yPos + height + ySpacing;
			}
		}
		
		this.historyPanel.grip.addEventListener("pressmove", onDrag);
		this.historyPanel.grip.addEventListener("pressup", onDragEnd);
		this.historyPanel.grip.addEventListener("mouseover", onResizeOver);
		this.historyPanel.grip.addEventListener("mouseout", onResizeOut);
		
		function onResizeOver(evt){ document.body.style.cursor = 'ew-resize';}
		function onResizeOut(evt){ document.body.style.cursor = 'default';}
		function onDragEnd(evt){document.body.style.cursor = 'default';}
		
		setTimeout(resizeFrame, 25);
		
		function onDrag(evt){
			document.body.style.cursor = 'ew-resize';
			resizeFrame(stage.mouseX / devicePixelRatio - 190);
		}
		function resizeFrame(xPos = -1){
			if(xPos == -1)
				xPos = lastResize;
			else
				lastResize = xPos;
			root.historyPanel.grip.x = xPos;// + userPosOffset.x;
			//root.historyPanel.grip.y = stage.mouseY / devicePixelRatio - 10;// + userPosOffset.y;
			var g = root.historyPanel.panelBg.getChildAt(0).graphics;
			var panelBg = root.historyPanel.panelBg.getChildAt(0);
			var mask = new createjs.Shape(new createjs.Graphics().drawRect(150,29,xPos+41, 1000));
			root.historyPanel.mask = mask;
			g.clear();
			g.setStrokeStyle(1);
			panelBg["fillCommand"] = g.beginFill("#f5f5f5").command;
			g.beginStroke("#cccccc");
			g.setStrokeStyle(1);
			g.drawRect(-151,-500,xPos, 1000);
			
			resizeItems(xPos);
		}
		
		var resizeCount = -1;
		var bgIndex = 0;
		function resizeItems(maxWidth){
			previousPosY = ySpacing;
			for(var t=0; t<historyMcList.length; t++){
				if(historyMcList[t].visible){
					resizeCount++;
					if((resizeCount > 0) && resizeCount%2 == 1){
						historyMcList[t].resizeItem(maxWidth, bgIndex);
						bgIndex++;
					}else{
						historyMcList[t].resizeItem(maxWidth);
					}
				}
			}
			//clearn up bg
			for(var c=0; c<backgroundContainer.numChildren; c++){
				backgroundContainer.getChildAt(c).visible = (c < Math.round(resizeCount/2));
			}
			resizeCount = -1;
			bgIndex = 0;
			setScrollPosition();
		}
		
		// ____________________________________ Helpers ____________________________________ 
		stage.enableMouseOver();
		
		var devicePixelRatio = this.stage.scaleY;
		
		function  getMousePos(mc, evt) {
		  return {
		    x: evt.stageX / devicePixelRatio,   // scale mouse coordinates after they have
		    y: evt.stageY / devicePixelRatio     // been adjusted to be relative to element
		  }
		}
		
		function resizeCanvas(evt){
			devicePixelRatio = this.stage.scaleY;
			/*if(input !== undefined){
				input.style.left = input["xPos"]*devicePixelRatio+"px";
				input.style.top = input["yPos"]*devicePixelRatio-10*(1-devicePixelRatio)+"px";
				input.style.width = input["widthVal"]*devicePixelRatio+"px";
				input.style["font-size"] = 6*devicePixelRatio+"px";
			}*/
		}
		
		window.addEventListener("resize", resizeCanvas);
		
		function trace(string){
			console.log(string);
		}
		
		function handleEnter(e) {
			trace(e.keyCode);
		    var keyCode = e.keyCode;
		    if (e.keyCode === 13 || e.which === 13) {
				var inputBox = document.getElementById("myInputBox");
				if(currentTextOutput.parent.currentLabel == "comment")
					currentTextOutput.text = '"'+inputBox.value+'" (edited)';
				else if(currentTextOutput.parent.name !== "searchBox")
					currentTextOutput.text = inputBox.value + ' (edited)';
				else{
					if(inputBox.value == "")
						currentTextOutput.text = "Search";
					else
						currentTextOutput.text = inputBox.value;
					filterChanged(true);
				}
				root.myInputBox.y = -500;
				
				redrawCanvas();
				document.getElementById('canvas').focus();
				for(var t=0; t<historyMcList.length; t++){
					resizeFrame();
				}
		    }else if(currentTextOutput.parent.name === "searchBox"){
				setTimeout(timeoutFilterChanged, 50);
			}
			trace(e.currentTarget.value);
		}
		function timeoutFilterChanged(){
			inputBox = document.getElementById("myInputBox");
			currentTextOutput.text = inputBox.value;
			filterChanged(true);
		}
		
		this.searchBox.clearButton.addEventListener("mousedown", clearSearch);
		
		function clearSearch(evt){
			root.searchBox.clearButton.visible = false;
			root.searchBox.label.text = "Search";
			var inputBox = document.getElementById("myInputBox");
			inputBox.value = "";
			currentTextOutput.text = "Search";
			root.myInputBox.y = -500;
			//redrawCanvas();
			document.getElementById('canvas').focus();
			filterChanged(true);
		}
		
		function redrawCanvas(){
			var element = document.getElementById('canvas');
			var n = document.createTextNode(' ');
			var disp = element.style.display;  // don't worry about previous display style
		
			element.appendChild(n);
			element.style.display = 'none';
		
			setTimeout(function(){
				element.style.display = disp;
				n.parentNode.removeChild(n);
			},5); // you can play with this timeout to make it as short as possible 
		}
		this.searchBox.bg.addEventListener("mousedown", startSearch);
		function startSearch(evt){
			root.showInput(root.searchBox.label, true);
		}
		var currentTextOutput;
		this.showInput = function(inputTextField, isSearch=false){
			console.log(this.myInputBox);
			this.myInputBox.regX = 0;
			this.myInputBox.regY = 0;
			
			//set width
			//this.myInputBox.scaleX = inputTextField.lineWidth/100;
			if(isSearch){
				this.myInputBox.scaleX = inputTextField.lineWidth/100;
				this.myInputBox.x = (this.searchBox.getBounds().x)/devicePixelRatio + 194;
				this.myInputBox.y = inputTextField.parent.y-8;
				this.searchBox.clearButton.visible = true;
			}else{
				this.myInputBox.scaleX = inputTextField.lineWidth/100;
				this.myInputBox.x = (this.historyPanel.getBounds().x)/devicePixelRatio + 174+60;
				this.myInputBox.y = inputTextField.parent.parent.y+26+20;
			}
			var inputBox = document.getElementById("myInputBox");
			if(isSearch && inputTextField.text == "Search")
				inputTextField.text = "";
			inputBox.focus();
			if(inputTextField.parent.currentLabel == "comment"){
				trace(inputTextField.text.slice(inputTextField.text.length-1, inputTextField.text.length))
				if(inputTextField.text.slice(inputTextField.text.length-1, inputTextField.text.length) === '"')
					inputBox.value = inputTextField.text.slice(1, inputTextField.text.length-1);
				else
					inputBox.value = inputTextField.text.slice(1, inputTextField.text.length-10);
			}else{
				if(inputTextField.text.slice(inputTextField.text.length-8, inputTextField.text.length) === '(edited)' && !isSearch)
					inputBox.value = inputTextField.text.slice(0, inputTextField.text.length-9);
				else
					inputBox.value = inputTextField.text;
			}
			inputBox.addEventListener("keydown", handleEnter);
			console.log(inputBox.value);
			// set size
			inputBox.style["font-size"] = 10*devicePixelRatio+"px";
			inputBox.style.visibility = "visible";
			
			currentTextOutput = inputTextField;
			redrawCanvas();
		}
		
		
		/*setTimeout(onloadImg, 25);
		var img = new Image(root.myImage.children[0].image);//root.myImage.children[0].image);//new Image();
		function onloadImg() {	
			Pixastic.process(img, "coloradjust", {red:0.5,green:0,blue:0});
			//root.myImage.children[0].image = img;
			root.myImage.removeAllChildren();
		trace("loaded");
			//var p = new createjs.Bitmap(img.src);
			//root.myImage.addChild(p);
		//root.addChild(img);
			//var bitmap = new createjs.Bitmap(img);
			
		}
		//img.src = root.myImage.children[0].image.src;
		
		//img.src = "test.png";var root = this;   */
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.myVersion = new cjs.Text("Prototype Version ??", "normal 400 13px 'Roboto'", "#FF9B00");
	this.myVersion.name = "myVersion";
	this.myVersion.textAlign = "right";
	this.myVersion.lineHeight = 19;
	this.myVersion.lineWidth = 145;
	this.myVersion.parent = this;
	this.myVersion.setTransform(1909.35,7.75);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.myVersion);
	}

	this.searchBox = new lib.searchBox2();
	this.searchBox.name = "searchBox";
	this.searchBox.setTransform(331,13.3,1,1,0,0,0,132,9.3);

	this.clearFilters = new lib.button();
	this.clearFilters.name = "clearFilters";
	this.clearFilters.setTransform(73.2,88.95,1,1,0,0,0,35.2,10);
	new cjs.ButtonHelper(this.clearFilters, 0, 1, 2);

	this.text = new cjs.Text("Visibility", "normal 500 12px 'Roboto'", "#999999");
	this.text.lineHeight = 18;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(7,128.05);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.text_1 = new cjs.Text("Filters", "normal 500 12px 'Roboto'", "#999999");
	this.text_1.lineHeight = 18;
	this.text_1.lineWidth = 100;
	this.text_1.parent = this;
	this.text_1.setTransform(7,8.1);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_1);
	}

	this.expandAll = new lib.higCheckbox();
	this.expandAll.name = "expandAll";
	this.expandAll.setTransform(611,14,1,1,0,0,0,15,8);

	this.collapseAll = new lib.higCheckbox();
	this.collapseAll.name = "collapseAll";
	this.collapseAll.setTransform(503,14,1,1,0,0,0,15,8);

	this.historyPanel = new lib.historyPanel();
	this.historyPanel.name = "historyPanel";
	this.historyPanel.setTransform(336,342.6,1,1,0,0,0,145,313.6);

	this.showErrorsOnly = new lib.higCheckbox();
	this.showErrorsOnly.name = "showErrorsOnly";
	this.showErrorsOnly.setTransform(20,62.5,1,1,0,0,0,15,8);

	this.showMilestonesOnly = new lib.higCheckbox();
	this.showMilestonesOnly.name = "showMilestonesOnly";
	this.showMilestonesOnly.setTransform(20,38.25,1,1,0,0,0,15,8);

	this.showEvents = new lib.higCheckbox();
	this.showEvents.name = "showEvents";
	this.showEvents.setTransform(20,203.4,1,1,0,0,0,15,8);

	this.showComments = new lib.higCheckbox();
	this.showComments.name = "showComments";
	this.showComments.setTransform(20,180.15,1,1,0,0,0,15,8);

	this.showChild = new lib.higCheckbox();
	this.showChild.name = "showChild";
	this.showChild.setTransform(20,156.2,1,1,0,0,0,15,8);

	this.instance = new lib.historyItem();
	this.instance.setTransform(-208.95,58.95,1,1,0,0,0,170.8,19.8);

	this.myInputBox = new lib.an_TextInput({'id': 'myInputBox', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.myInputBox.name = "myInputBox";
	this.myInputBox.setTransform(50,-30,1,1,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.myInputBox},{t:this.instance},{t:this.showChild},{t:this.showComments},{t:this.showEvents},{t:this.showMilestonesOnly},{t:this.showErrorsOnly},{t:this.historyPanel},{t:this.collapseAll},{t:this.expandAll},{t:this.text_1},{t:this.text},{t:this.clearFilters},{t:this.searchBox},{t:this.myVersion}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(558.4,498.5,1353,863.8);
// library properties:
lib.properties = {
	id: '872973922B4C4191BFAA643750666B95',
	width: 1920,
	height: 1080,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"https://code.jquery.com/jquery-3.4.1.min.js?1654554487916", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js?1654554487916", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js?1654554487916", id:"an.TextInput"}
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
an.compositions['872973922B4C4191BFAA643750666B95'] = {
	getStage: function() { return exportRoot.stage; },
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
function _updateVisibility(evt) {
	var parent = this.parent;
	var detach = this.stage == null || this._off || !parent;
	while(parent) {
		if(parent.visible) {
			parent = parent.parent;
		}
		else{
			detach = true;
			break;
		}
	}
	detach = detach && this._element && this._element._attached;
	if(detach) {
		this._element.detach();
		this.dispatchEvent('detached');
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	if(this._element && this._element._attached) {
		var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
		var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
		var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
		mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
		this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
		var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
		var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
		var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
		this._element.setProperty('transform', tx);
		this._element.setProperty('width', w);
		this._element.setProperty('height', h);
		this._element.update();
	}
}

function _tick(evt) {
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
		this.dispatchEvent('attached');
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;