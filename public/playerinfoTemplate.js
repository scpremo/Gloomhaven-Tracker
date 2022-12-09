(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['playerinfo'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"player-info\">\r\n    <td>\r\n        <div>"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (depth0 != null ? lookupProperty(depth0,"index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":3,"column":13},"end":{"line":3,"column":22}}}) : helper)))
    + "</div>\r\n    </td>\r\n    <td><input type=\"text\" name=\"character-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (depth0 != null ? lookupProperty(depth0,"index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":5,"column":43},"end":{"line":5,"column":52}}}) : helper)))
    + "\" class=\"character\" id=\"player-name\" value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"playerName") || (depth0 != null ? lookupProperty(depth0,"playerName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"playerName","hash":{},"data":data,"loc":{"start":{"line":5,"column":96},"end":{"line":5,"column":110}}}) : helper)))
    + "\"></td>\r\n    <td><select class=\"player-level\" name=\"player-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (depth0 != null ? lookupProperty(depth0,"index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":6,"column":50},"end":{"line":6,"column":59}}}) : helper)))
    + "-level\">\r\n            <option selected value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"level") || (depth0 != null ? lookupProperty(depth0,"level") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"level","hash":{},"data":data,"loc":{"start":{"line":7,"column":36},"end":{"line":7,"column":45}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"level") || (depth0 != null ? lookupProperty(depth0,"level") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"level","hash":{},"data":data,"loc":{"start":{"line":7,"column":47},"end":{"line":7,"column":56}}}) : helper)))
    + "</option>\r\n            <option value=\"0\">0</option>\r\n            <option value=\"1\">1</option>\r\n            <option value=\"2\">2</option>\r\n            <option value=\"3\">3</option>\r\n            <option value=\"4\">4</option>\r\n            <option value=\"5\">5</option>\r\n            <option value=\"6\">6</option>\r\n            <option value=\"7\">7</option>\r\n            <option value=\"8\">8</option>\r\n            <option value=\"9\">9</option>\r\n        </select></td>\r\n</div>";
},"useData":true});
})();