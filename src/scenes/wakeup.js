Crafty.scene("wakeup", function() {
	var elements = [
		//"src/entities/player.js",
		"src/scenes/wakeup-dialogues.js"
	];	

	var self =this;
	
	//when everything is loaded, run the main scene
	require(elements, function() {
		Crafty.e("2D, "+gameContainer.conf.get('renderType')+", Image").image("./web/images/hospital-background.png");
		Crafty.e("2D, "+gameContainer.conf.get('renderType')+", water-tank, Mouse, Collision, Tween")
			.attr({
			x:500,
			y:10,
		});
		Crafty.e("2D, "+gameContainer.conf.get('renderType')+", water-tank, Mouse, Collision, Tween")
			.attr({
			x:100,
			y:10,
		});
		Crafty.e("2D, "+gameContainer.conf.get('renderType')+", water-tank, Mouse, Collision, Tween")
			.attr({
			x:900,
			y:10,
		});
		Crafty.e("2D, "+gameContainer.conf.get('renderType')+", Dialogues")
			.attr({
			x:400,
			y:30,
		}).setDialogues( dialogues.firstConversation  ).showDialogue()
	});

});
