define("app/zp/page/milan/hot_city_page.js", ["$", "com/mobile/lib/widget/widget.js", "com/mobile/page/milan/base_page.js"], function (i, e) {
    var t = i("com/mobile/lib/widget/widget.js"), a = i("com/mobile/page/milan/base_page.js"), o = i("$");
    o.extend(e, a), e.cityTog = t.define({
        events: {
            click: function () {
                o("#hotCity").data("flag") ? (o("#hotCity").data("flag", 0), o("#hotCity").show(), this.config.$el.addClass("active")) : (o("#hotCity").data("flag", 1), o("#hotCity").hide(), this.config.$el.removeClass("active"))
            }
        }, init: function (i) {
            this.config = i
        }
    })
});