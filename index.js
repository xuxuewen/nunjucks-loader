var nunjucks = require('nunjucks');
var loaderUtils = require("loader-utils");
var compile = require("es6-templates").compile;
nunjucks.configure({
  noCache:true
})
module.exports = function (source) {
  var query = loaderUtils.getOptions(this) || {};
  var exportsString = "module.exports = ";
  let template;
  // 如果只是需要进行模版变异
  if(query.precompile){
    template = nunjucks.compile(source).tmplStr;
    template = template.replace(/\\"/g, "\\\\\"");
    template = template.replace(/\\'/g, "\\\\\'");
    template = compile('`' + template + '`').code;
    return exportsString + template;
  }
  template = nunjucks.render(this.resourcePath,{
    njk_global:query.global ||{}
  });
  return template;
};
