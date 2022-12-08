(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['levelStarter'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"level\" data-level=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"levelName") || (depth0 != null ? lookupProperty(depth0,"levelName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"levelName","hash":{},"data":data,"loc":{"start":{"line":1,"column":28},"end":{"line":1,"column":41}}}) : helper)))
    + "\"></div>";
},"useData":true});
})();