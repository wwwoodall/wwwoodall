(function(){$(document).ready(function(){return $("#camera").click(function(){return $(".photos").slideDown()}),$(".photos").click(function(){return $(".photos").slideUp()}),$("#gifs").click(function(){return $("#gifs").children().hide(),$("p.date").text("(Click to show)")}),$("#gif-show").click(function(){return $("#gifs").children().show(),$("p.date").text("(Click to hide)")}),$("[data-name=filter]").click(function(t){var e,n,o,r;return t.preventDefault(),n=$(this),o={new_tag:n.text()},e=$("[data-tag="+o.new_tag+"]"),(o.old_post=null)?($("#posts").remove(),o.old_post=o.new_tag):$("[data-tag="+o.old_post+"]").remove(),$("#posts").append(e),r=$("#title").text(o.new_tag)}),jQuery.mark={jump:function(t){var e;return e={selector:"a.scroll-on-page-link"},"string"==typeof t&&(e.selector=t),t=jQuery.extend(e,t),jQuery(t.selector).click(function(t){var e,n,o,r;e=jQuery(this),o=e.attr("href"),r=800,n=jQuery(o).offset().top,jQuery("html,body").animate({scrollTop:n},r,"swing"),t.preventDefault()})}}}),jQuery(function(){jQuery.mark.jump()})}).call(this);