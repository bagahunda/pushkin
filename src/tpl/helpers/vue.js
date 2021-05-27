/* 
  In order to use Vue with Zurb Panini, you need to put this file in /helpers/ folder.
  After that, in your HTML use 
  {{#vue}} variable {{/vue}}
  instead of this 
  {{ variable }}
*/

module.exports = function(options) {
  // options.fn(this) = Handelbars content between {{#vue}} HERE {{/vue}}
  var vue = '{{' + options.fn(this) + '}}';
  return vue;
}