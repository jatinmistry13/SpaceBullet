var sb = sb || {};
(function(){

	function Explosion(x, y){
		this.initialize();
		this.x = x; this.y = y;
		this.scale = 1;
		var boum = this;
		var star = new createjs.Shape();
		star.graphics.beginFill("#ff0000").beginStroke("#FF0").setStrokeStyle(5).drawPolyStar(0,0,20,5,0.6).closePath();
		boum.addChild(star);
		sb.re.register(boum);
	}
	var proto = Explosion.prototype = new createjs.Container();
	
	proto.tick = function() {
		var boum = this;
		boum.scale += 0.03;
		boum.scaleX = boum.scaleY = boum.scale;
		boum.alpha -= 0.05;
		boum.rotation ++;
		if (boum.alpha <=0.05) {
			sb.stage.removeChild(boum);
			sb.re.forget(boum);
		}
	}
	
	sb.Explosion = Explosion;	
})();


