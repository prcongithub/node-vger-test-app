var extend = require('extend');

var Resource = require('node-vger').Resource;

module.exports =  extend(true, function(){}, Resource, {
  collectionPath: function(){
    return "/candidates";
  }
});
