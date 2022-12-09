(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['monster'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"monster-area\" id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":1,"column":30},"end":{"line":1,"column":36}}}) : helper)))
    + "\">\r\n    <div class=\"monster-container\" id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"type") || (depth0 != null ? lookupProperty(depth0,"type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data,"loc":{"start":{"line":2,"column":39},"end":{"line":2,"column":47}}}) : helper)))
    + "\">\r\n        <!-- Monster Image -->\r\n        <div class=\"monster-image-container\">\r\n            <img class=\"monster-image\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"standee") || (depth0 != null ? lookupProperty(depth0,"standee") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"standee","hash":{},"data":data,"loc":{"start":{"line":5,"column":44},"end":{"line":5,"column":55}}}) : helper)))
    + "\">\r\n        </div>\r\n        <!-- Monster Number -->\r\n        <div class=\"monster-initiative-number\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"number") || (depth0 != null ? lookupProperty(depth0,"number") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"number","hash":{},"data":data,"loc":{"start":{"line":8,"column":47},"end":{"line":8,"column":57}}}) : helper)))
    + "</div>\r\n        <!-- Monster HP -->\r\n        <div class=\"monster-hp\">\r\n            <button class=\"plus-minus\" id=\"plus"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":11,"column":47},"end":{"line":11,"column":53}}}) : helper)))
    + "\">+</button>\r\n            <div class=\"hp-value\" id=\"hp"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":12,"column":40},"end":{"line":12,"column":46}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"hp") || (depth0 != null ? lookupProperty(depth0,"hp") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hp","hash":{},"data":data,"loc":{"start":{"line":12,"column":48},"end":{"line":12,"column":54}}}) : helper)))
    + "</div>\r\n            <button class=\"plus-minus\" id=\"minus"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":13,"column":48},"end":{"line":13,"column":54}}}) : helper)))
    + "\">-</button>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});
})();