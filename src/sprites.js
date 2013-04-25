/**
    examples:             
    'sprites_name' : {
         'file' : 'path/to/file',
         'tile' : width,
         'tileh' : height,
         'elements': {
             'sprite_name' : [0, 0]
         }
    },
*/

Sprites = Backbone.Model.extend({
    defaults: {
        images:{
			/*'player' : {
				'file' : 'web/images/ufo.png',
				'tile' : 211,
				'tileh' : 117,
				'elements': {
					'ufo' : [0, 0]
				}
			},
			'doctor' : {
				'file' : 'web/images/ufo.png',
				'tile' : 211,
				'tileh' : 117,
				'elements': {
					'ufo' : [0, 0]
				}
			},*/
			'background' : {
				'file' : 'web/images/water-tank.png',
				'tile' : 305,
				'tileh' : 623,
				'elements': {
					'water-tank' : [0, 0]
				}				
			}
        }
    },
    initialize: function(){
        
    },
    /**
     * Create Crafty sprites from images object
     * Pass key if You want create only one choosen sprite.
     * 
     * @param  string key - sprite definition key
     */
    create: function(key){
        if(key != undefined){
            element = this.get('images')[key];
            if(element['tileh'] == undefined)
                Crafty.sprite(element['tile'], element['file'], element['elements']);
            else
                Crafty.sprite(element['tile'], element['tileh'], element['file'], element['elements']);
    		
            return true;
        };

        _.each(this.get('images'), function(element, k){ 
            if(element['tileh'] == undefined)
                Crafty.sprite(element['tile'], element['file'], element['elements']);
            else
                Crafty.sprite(element['tile'], element['tileh'], element['file'], element['elements']);
        });

    },
    /**
     * Get path for sprites files - for loading
     * 
     * @return array array of files paths
     */
    getPaths: function(){
        var array = [], i=0;
        _.each(this.get('images'), function(element, key){ 
            array[i] = element['file']
            i++;
        });

        return array;
    }
});