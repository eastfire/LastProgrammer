Crafty.c("Hero", {
	init:function(){
	},
	_enterFrame:function(){
		
	},
	_onClicked:function(event){
	},
	_onStartDrag:function(event){
		this.oldx = this.attr("x");
		this.oldy = this.attr("y");
		this.dropShadow = Crafty.e("2D, "+gameContainer.conf.get('renderType') +", HeroShadow, SpriteAnimation" )
			.attr({z:10,x:this.oldx,y:this.oldy, visible:false}).animate("canDrop",1,3,1).animate("cantDrop",1,2,1);
	},
	_canDrop:function(bx,by){
		if ( sc.monsterByBlock[bx+" "+by] )
			return false;
		if ( sc.heroByBlock[bx+" "+by] )
			return false;
		if ( bx < 0 || bx >= 6 || by < 0 || by >= 10)
			return false;
		return true;
	},
	_onStopDrag:function(event){
		var self = this;
		this.dropShadow.destroy();
		var hz = game.BLOCK_SIZE/2;
		var bx = Math.floor((this.attr("x")+hz)/game.BLOCK_SIZE);
		var by = Math.floor((this.attr("y")+hz)/game.BLOCK_SIZE);
		if ( this._canDrop(bx,by) ) {
			this.attr({x:bx*game.BLOCK_SIZE,y:by*game.BLOCK_SIZE,status:"battle",bx:bx,by:by});
			sc.heroByBlock[bx+" "+by] = this;
			this.removeComponent("Draggable",false);
		} else {
			this.attr({x:this.oldx,y:this.oldy});
		}
	},
	_onDragging:function(event){
		var hz = game.BLOCK_SIZE/2;
		var bx = Math.floor((this.attr("x")+hz)/game.BLOCK_SIZE);
		var by = Math.floor((this.attr("y")+hz)/game.BLOCK_SIZE);
		this.dropShadow.attr({x:bx*game.BLOCK_SIZE,y:by*game.BLOCK_SIZE});
		if ( bx < 0 || bx >= 6 || by < 0 || by >= 10) {
			this.dropShadow.stop().attr({"visible":false});
			return;
		}
		this.dropShadow.attr({"visible":true});
		if ( this._canDrop(bx,by) ) {
			if ( this.dropShadow.isPlaying("cantDrop") )
				this.dropShadow.stop();
			else if ( !this.dropShadow.isPlaying("canDrop") )
				this.dropShadow.animate("canDrop",100,-1);
		} else {
			if ( this.dropShadow.isPlaying("canDrop") )
				this.dropShadow.stop();
			else if ( !this.dropShadow.isPlaying("cantDrop") )
				this.dropShadow.animate("cantDrop",100,-1);
		}
	},
	hero:function(options){
		this.attr(options)
			.bind('EnterFrame', this._enterFrame)
			.bind('Click', this._onClicked)
			.bind("StartDrag",this._onStartDrag)
			.bind("StopDrag",this._onStopDrag)
			.bind("Dragging",this._onDragging);
		this.origin(this.w/2, this.h/2);
		
		return this;
	},
	attack:function(){
		if ( this.attr("status") === "inn" )
			return;
		var bx = this.attr("bx");
		var by = this.attr("by");
		var monsters = [sc.monsterByBlock[(bx-1)+" "+by],sc.monsterByBlock[(bx+1)+" "+by],sc.monsterByBlock[bx+" "+(by-1)],sc.monsterByBlock[bx+" "+(by+1)]];
		_.each(monsters, function(monster){
			if ( monster )	{
				monster.takeDamage(this.attr("att"), this.attr("color"));
			}
		},this);
	},
	takeDamage:function(amount, color){
		if ( color != this.attr("color") )	{
			this.attr("hp", this.attr("hp") - amount);
		}
	},
	onDie:function(){
//		this.animate("die");
		this.destroy();
		Crafty.trigger('HeroDeath', this);
		this.backbone.destroy();
	}
});

Hero = BaseEntity.extend({
	defaults: {
        hp : 1,
		color : "red",
		att : 1,
		type : "warrior",
		status: "inn",
		z : 2
    },
    initialize: function(){
		var model = this;
    	var entity = Crafty.e("2D, "+gameContainer.conf.get('renderType')+", Hero, "+ model.get("color")+"-"+model.get("type")+",SpriteAnimation, Mouse, Draggable, Collision, Tween")
			.hero(model.toJSON());
		
		if ( model.get("status") !== "inn" )
			entity.disableDrag();

		entity.backbone = this;

    	entity
            .setName(model.get("type"));

		model.set({'entity' : entity });
    }
});

HeroCollection = Backbone.Collection.extend({
	model:Hero
});