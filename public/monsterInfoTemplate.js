(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['monsterInfo'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class = \"monster\">\r\n    <div class=\"monster-info\">\r\n        <div class=\"stat-sheet\">\r\n            <img class=\"stat-img\" id=\"monster-stats\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"statSheet") || (depth0 != null ? lookupProperty(depth0,"statSheet") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"statSheet","hash":{},"data":data,"loc":{"start":{"line":4,"column":58},"end":{"line":4,"column":71}}}) : helper)))
    + "\">\r\n            <img class=\"stat-img\" id=\"stat-overlay\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"statCover") || (depth0 != null ? lookupProperty(depth0,"statCover") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"statCover","hash":{},"data":data,"loc":{"start":{"line":5,"column":57},"end":{"line":5,"column":70}}}) : helper)))
    + "\">\r\n        </div>\r\n        <div class=\"battle-info\">\r\n            <img class=\"attack-card\" id=\"ac-deck\"\r\n                src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"cardBack") || (depth0 != null ? lookupProperty(depth0,"cardBack") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cardBack","hash":{},"data":data,"loc":{"start":{"line":9,"column":21},"end":{"line":9,"column":33}}}) : helper)))
    + "\">\r\n            <img class=\"attack-card-discard\" id=\"ac-drawn\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"discard") || (depth0 != null ? lookupProperty(depth0,"discard") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"discard","hash":{},"data":data,"loc":{"start":{"line":10,"column":64},"end":{"line":10,"column":75}}}) : helper)))
    + "\">\r\n            <div class=\"monster-buttons\">\r\n                <button class=\"add-monster\" id=\"add-normal\">Add Normal</button>\r\n                <button class=\"add-monster\" id=\"add-elite\">Add Elite</button>\r\n            </div>\r\n            <button class=\"draw-attack\" id=\"ac-draw\">Draw Attack</button>\r\n        </div>\r\n    </div>\r\n    <div class=\"monster-area\">\r\n\r\n    </div>\r\n</div>";
},"useData":true});
})();