Wall = BaseEntity.extend({
	defaults: {
		x:0,
		y:640,
    },
    initialize: function(){
    	var model = this;
    	var entity = Crafty.e("2D, "+gameContainer.conf.get('renderType')+", Wall, SpriteAnimation, Mouse, Collision");

    	entity
            .attr({x: model.get("x"), y: model.get("y"), z: 0});

		entity.origin(entity.w/2, entity.h/2);

    	model.set({'entity' : entity });
    }
});