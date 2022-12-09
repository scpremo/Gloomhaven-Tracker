(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['scenario'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class = \"scenario-example\" id=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"scenarioEvenOdd") || (depth0 != null ? lookupProperty(depth0,"scenarioEvenOdd") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"scenarioEvenOdd","hash":{},"data":data,"loc":{"start":{"line":2,"column":36},"end":{"line":2,"column":55}}}) : helper)))
    + "\">\r\n    <!-- Needs 2 checkboxes and a name-->\r\n    <label class=\"scenario-found-example\">🔍</label>\r\n    <label class=\"scenario-completed-example\">❌</label>\r\n    <a href=\"#\" target=\"_blank\" class=\"scenario-label\"></a>\r\n</div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\r\n<div class=\"scenario\" id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"scenarioEvenOdd") || (depth0 != null ? lookupProperty(depth0,"scenarioEvenOdd") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"scenarioEvenOdd","hash":{},"data":data,"loc":{"start":{"line":10,"column":26},"end":{"line":10,"column":45}}}) : helper)))
    + "\">\r\n    <!-- Needs 2 checkboxes and a name-->\r\n    <input type=\"checkbox\" class=\"foundCheck\" name=\"scenario-found\" "
    + alias4(((helper = (helper = lookupProperty(helpers,"found") || (depth0 != null ? lookupProperty(depth0,"found") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"found","hash":{},"data":data,"loc":{"start":{"line":12,"column":68},"end":{"line":12,"column":77}}}) : helper)))
    + ">\r\n    <input type=\"checkbox\" class=\"completedCheck\" name=\"scenario-completed\" "
    + alias4(((helper = (helper = lookupProperty(helpers,"completed") || (depth0 != null ? lookupProperty(depth0,"completed") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"completed","hash":{},"data":data,"loc":{"start":{"line":13,"column":76},"end":{"line":13,"column":89}}}) : helper)))
    + ">\r\n    <!-- <label class=\"scenario-label\">Scenario 1</label> -->\r\n    <a href=\"/load/"
    + alias4(((helper = (helper = lookupProperty(helpers,"scenarioLocation") || (depth0 != null ? lookupProperty(depth0,"scenarioLocation") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"scenarioLocation","hash":{},"data":data,"loc":{"start":{"line":15,"column":19},"end":{"line":15,"column":39}}}) : helper)))
    + "\" target=\"_blank\" class=\"scenario-label\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"scenario") || (depth0 != null ? lookupProperty(depth0,"scenario") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"scenario","hash":{},"data":data,"loc":{"start":{"line":15,"column":80},"end":{"line":15,"column":92}}}) : helper)))
    + "</a>\r\n</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"example") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":17,"column":7}}})) != null ? stack1 : "");
},"useData":true});
})();