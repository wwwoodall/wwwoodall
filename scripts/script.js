(function(){$(document).ready(function(){var t,e,n,o,r;return e=document.getElementById("js-fadeInElement"),$(e).addClass("js-fade-element-hide"),"/feed"===location.pathname&&$(window).scroll(function(){var t,n,o,r,i,s;return n=$(e).offset().top,s=$(window).scrollTop(),i=window.innerHeight,r=n-s,o=i-r,t=10,o>t?$(e).addClass("js-fade-element-show"):570>o?($(e).removeClass("js-fade-element-show"),$(e).addClass("js-fade-element-hide")):void 0}),$("#gifs").click(function(){return $("#gifs").children().hide(),$("p.date").text("(Click to show)")}),$("#gif-show").click(function(){return $("#gifs").children().show(),$("p.date").text("(Click to hide)")}),t=function(){function t(t,e){this.posts=t,this.tags=e,this.currentTag="",_.each(this.tags,function(t){return function(e){return e.el.on("click",_.bind(t.onClick,t))}}(this))}return t.prototype.onClick=function(t){var e,n;return e=$(t.currentTarget),this.currentTag=n=e.text(),$("#tag-title").text(e.text()),this.filterPosts(n)},t.prototype.filterPosts=function(t){var e,n,o,r,i,s,l,u;for(e=_.filter(this.posts,function(e){return e.tag===t}),l=this.allPosts(),o=0,i=l.length;i>o;o++)n=l[o],$(n).hide();for(u=[],r=0,s=e.length;s>r;r++)n=e[r],u.push($(n.el).show());return u},t.prototype.allPosts=function(){return _.map(this.posts,function(t){return t.el})},t.prototype.addPost=function(t){return this.posts.push(t)},t}(),o=_.map($("article"),function(t){return{el:$(t),tag:$(t).data("tag")}}),r=_.map($(".blog-tags ul > li"),function(t){return{el:$(t),tag:$(t).text()}}),n=new t(o,r),jQuery.mark={jump:function(t){var e;return e={selector:"a.scroll-on-page-link"},"string"==typeof t&&(e.selector=t),t=jQuery.extend(e,t),jQuery(t.selector).click(function(t){var e,n,o,r;e=jQuery(this),o=e.attr("href"),r=800,n=jQuery(o).offset().top,jQuery("html,body").animate({scrollTop:n},r,"swing"),t.preventDefault()})}}}),jQuery(function(){jQuery.mark.jump()}),jQuery(function(){return $("#sort-topic").click(function(t){return t.stopPropagation(),t.preventDefault(),$("#blog-posts").hide(),$("#blog-topics").show()}),$("#sort-post").click(function(t){return t.stopPropagation(),t.preventDefault(),$("#blog-topics").hide(),$("#blog-posts").show()})})}).call(this);