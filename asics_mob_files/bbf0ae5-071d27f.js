var cotd=cotd||{};cotd.filterSecondary=function(e,t,n,r){"use strict";var a=e(t).width(),i=e(".js-filter-secondary .filter-secondary__item").length,o={autoplay:3e3,autoplayDisableOnInteraction:!0,speed:450,loop:!0,grabCursor:!0,slidesPerView:"auto",observer:!0,observeParents:!0,paginationClickable:!0,nextButton:".filter-secondary__button-next",prevButton:".filter-secondary__button-prev",spaceBetween:0},s=e(".js-filter-secondary"),l=null,c=0,d=function(){(0==s.find("img.lazysvg").length||c>=5e3)&&(!function(){s.addClass("filter-secondary--swiper");var e=new Swiper(".js-filter-secondary .swiper-container",o);e.container[0].addEventListener("mouseenter",e.stopAutoplay),e.container[0].addEventListener("mouseleave",e.startAutoplay)}(),clearInterval(l)),c+=500};return{init:function(){if(s.length){var t=e(".js-filter-secondary__item--active");t.length>0&&t.prependTo(t.closest(".filter-secondary__wrapper")),(a<512&&i>3||a>=512&&a<1025&&i>6||a>=1025&&i>8)&&(l=setInterval(d,500))}}}}(jQuery,this,document),$(function(){"use strict";cotd.filterSecondary.init()});
var cotd=window.cotd||{};cotd.lazysvg=function(t,a,e){"use strict";t(e).ready(function(){t(".lazysvg").each(function(e){var r=t(this),i=r.attr("class"),n=r.data("src"),s=r.data("name");t.ajax({type:"GET",url:n,dataType:"xml"}).done(function(a){var n=t(a).find("svg"),s="filter-secondary__svg-"+e;n.find("style").text(n.find("style").text().replace(/\.st/g,"."+s+" .st")),void 0!==i&&(n=n.attr("class",i+" replaced-svg "+s)),!(n=n.removeAttr("xmlns:a")).attr("viewBox")&&n.attr("height")&&n.attr("width")&&n.attr("viewBox","0 0 "+n.attr("height")+" "+n.attr("width")),r.replaceWith(n)}).fail(function(){var t=a.location.href.split("?")[0];throw new Error('Failed loading lazysvg "'+s+'" at '+t)})})})}(jQuery,this,document);
var cotd=cotd||{};cotd.searchFilter=function(e,t,i,a){"use strict";var n,l,o,d,c,r,s,f=e(".filter-form"),h=e(".filter-form, .secondary-filter-form"),u=f.find(".tab-container"),p=f.find(".tab-contents"),v=f.find(".button-controller"),b=["cover-loading white","not-available"],m=["There are no filters available.","No filter available"],g=[],k=null,y=null,C=!1,x=0,_=1,w=[],W=0,M=e("#filter-sort"),S=null,P=null,T=!1,I=!1,F=null,j=null,D=0,R=[],O=function(t,i){if("object"==typeof i&&null!==i){if(void 0!==i.show&&!1===i.show)return;if(void 0!==i.id){var a=e("#"+i.id);a.removeAttr("disabled"),a.parent().removeClass("disabled").removeClass("hidden").find(".filter-item-count").text(i.count)}else e.each(i,O)}},N=function(i,a,n){var l,o=e(".filter-form"),d=e(".filter-form, .secondary-filter-form"),r=o.find("#query").val(),s=o.find("#indexOverride").val(),f=m[0],h=!o.find(".tab-content").length,v=0;if(!(void 0!==cotd.algolia.filters_disabled&&1==cotd.algolia.filters_disabled&&null!==k||void 0!==cotd.algolia.search_filters_disabled&&1==cotd.algolia.search_filters_disabled&&null!==y)){if(null!==k)l=Routing.generate("ajax_event_filters",{eventId:k});else{if(null===y)return;l=Routing.generate("ajax_search_filters")}void 0===i&&(i=""),!h&&I&&(i="query="+r+"&"+i),h&&I&&(i+="&hide_brand_filter=1"),h&&j&&(i+="&hide_seller_filter=1"),F&&(i+="&brand[]="+encodeURIComponent(F)),j&&(i+="&soldBy[]="+encodeURIComponent(j)),B(void 0!=a?a:h),h||e("#eventFilters,#searchAsideFilters").addClass("mini-loading");var x=""!==i||h||n?"":d.serialize();R.length>0&&(x+="&subTypeIdsList="+R.join(","),r=""),e.each(cotd.searchAdditionalFilters||{},function(e,t){x+="&_filters["+e+"]="+t}),e.ajax({url:l+(!h||j||F?"?"+i:r?"?query="+encodeURIComponent(r)+(s?"&index_override="+s:""):""),data:x,success:function(t){if(Q(t.filters)){if(h||n)V(t,h);else{e(".filter-checkbox").parent().addClass("disabled").addClass("hidden").find(".filter-item-count").text("-"),e(".filter-checkbox:not(:checked)").attr("disabled","disabled"),e.each(t.filters,O),e(".filter-group-count").each(function(t,i){var a,n=0;e(i).parent().next().find(".filter-item-count").each(function(t,i){"-"!=(a=e(i)).text()&&(n+=parseInt(a.text()))}),e(i).text(n),0==n?e(i).parent().addClass("empty").addClass("hidden"):e(i).parent().removeClass("empty").removeClass("hidden")}),e("#eventFilters,#searchAsideFilters").find(".tab-content").each(function(t,i){if(c=e(i).find(".filter-checkbox:checked").length,C&&c>0&&0==e(i).find(".filter-clear-link").length){var a=e('<a class="filter-clear-link" href="#">Clear</a>');a.on("click",function(t){t.preventDefault(),e(i).find('[type="checkbox"]:checked:not(.accordion-checkbox)').each(function(t,i){e(this).prop("checked",!1)}),e(i).find(".has-selected-items").removeClass("has-selected-items"),a.remove(),H()}),e(i).find(".filter-header").prepend(a)}else e(i).find(".filter-clear-link").length&&0==c&&e(i).find(".filter-clear-link").remove();v=0,e.each(e(i).find(".filter-item-count"),function(t,i){isNaN(parseInt(e(i).text()))||(v+=parseInt(e(i).text()))}),v<=1?e(i).addClass("hidden"):e(i).removeClass("hidden")}),e.each(e(".filter-group"),function(t,i){var a=parseInt(e(i).find(".filter-group-count").text());e(i).parent().find("input:checked:not(.accordion-checkbox)").length>0?e(i).addClass("has-selected-items"):e(i).removeClass("has-selected-items"),0==a?(e(i).addClass("hidden"),e(i).parent().addClass("hidden")):isNaN(a)?0==e(i).next("ul").find("input:not(:disabled)").length?e(i).addClass("hidden"):e(i).removeClass("hidden"):(e(i).removeClass("hidden"),e(i).parent().removeClass("hidden"))});for(var l in t.filters){var d=null;if(t.filters.hasOwnProperty(l)&&t.filters[l].hierarchical){for(var r=0;r<g.length;r++)if(g[r].id===l){d=g[r];break}null!==d&&e("#tab_"+d.id+" .filter-body").html(z(t.filters[l],d)).find(".hierarchical-item").on("click",function(t){t.preventDefault(),0===o.find("#"+e(this).attr("data-facet")+"_value").length&&o.append('<input type="hidden" id="'+e(this).attr("data-facet")+'_value" name="'+e(this).attr("data-facet")+'[]"/>'),o.find("#"+e(this).attr("data-facet")+"_value").val(e(this).attr("data-value")),!cotd.isMobileWeb&&C?H():N(o.serialize(),!0)})}}if(!C){var s=e(".tab-content");s.removeClass("hidden"),e.each(s,function(t,i){e(i).find(".unavailable-message").remove();var a=e(i).find(".filter-checkbox:visible"),n=e(i).find(".hierarchical-item"),l="tab_delivery"==e(i).attr("id")||"tab_department"==e(i).attr("id")?0:1;a.length<=l&&n.length<=l&&(e(i).addClass("hidden"),a.parent().addClass("hidden").addClass("disabled"))})}}e("#eventFilters,#searchAsideFilters").removeClass("mini-loading"),B(!1)}else u.removeClass(b[0]),o.addClass(b[1]),p.html(e("<p>").text(f));if(h||n){if(++D>2)return;N(i,a,!1),n&&H(n)}else D=0},dataType:"json"}),void 0===n&&n||T&&P!==S&&(P=S,t.location.href)}},q=function(t,i){if(void 0!==i.name&&""!==i.name){var a=e("<li>");a.append(e("<div>").addClass("group-radio-checkbox small").append(function(){var t=e("<input>").attr("type","checkbox").attr("id",i.id).attr("name",l.id+"[]").attr("data-label",i.name).val(i.value).addClass("filter-checkbox");return(void 0!==i.checked&&i.checked||void 0!==i.selected&&i.selected||-1!=o.indexOf(i.value.toString()))&&t.attr("checked","checked"),t}).append(e("<label>").attr("for",i.id).attr("data-label",i.name).attr("title",i.name).html(i.id.indexOf("review-")>-1?cotd.templates.ratingStars({rating:Number(i.name.substr(0,1))}):i.name).append('<span class="filter-item-count">'+i.count+"</span>"))),void 0!==i.selected&&i.selected&&(a.find("input").attr("checked","checked"),c++),"Unisex"!=i.value&&"Kids"!=i.value||a.addClass("hidden"),n.append(a),1}},A=function(){return function(t,i){var a="",n="",d="",r="";w[_]=Object.keys(i).length,w[_-1]>1&&(r='<input type="checkbox" class="accordion-checkbox" checked="checked">'),(void 0===i[0]||void 0===i[0].name)&&x>=0?(W=0,e.each(i,U),s+='<div class="accordion-block">'+r+'<div class="accordion-title filter-group'+(0==W?" empty hidden":"")+'">'+t+' <span class="filter-group-count">'+W+'</span></div><div class="accordion-content">',x-=1,_++,e.each(i,A()),_--,s+="</div></div>"):(w[_-1]>1&&(a='<div class="accordion-block">',n="</div>",d="accordion-title "),W=0,e.each(i,U),s+=a+r+'<div class="'+d+"filter-group"+(0==W?" empty hidden":"")+'">'+t+' <span class="filter-group-count">'+W+'</span></div><div class="accordion-content">',s+='<ul class="list scroll-container">',e.each(i,function(e,t){var i=void 0!==t.selected&&t.selected||-1!=o.indexOf(t.value.toString());i&&c++,s+='<li><div class="group-radio-checkbox small"><input type="checkbox" id="'+t.id+'" name="'+l.id+'[]" data-label="'+t.name+'" value="'+t.value+'" class="filter-checkbox"'+(i?' checked="checked" ':"")+'/><label for="'+t.id+'" data-label="'+t.name+'">'+t.name+' <span class="filter-item-count">'+t.count+"</span></label></div></li>",1}),s+="</ul>",s+="</div>"+n)}},U=function(t,i){void 0===i.count?e.each(i,U):W+=parseInt(i.count)},z=function(t,i){var a,n="",l=0,o="",d=[];return null===t.options?e("<div>").html(e("<p>").text(m[1])).html():((a=function(t){n+='<ul class="hierarchical-list list">',e.each(t,function(e,t){o="",null===t.options&&(o=""),t.isRefined&&(d[l]=!0),d[l]&&!t.isRefined||(n+='<li><a href="#" class="hierarchical-item'+(t.isRefined?" refined":"")+'" data-facet="'+i.id+'" data-value="'+(t.isRefined?t.value.split(" > ").slice(0,l).join(" > "):t.value)+'">'+o+t.name+'<span class="filter-item-count">'+t.count+"</span></a></li>"),void 0!==t.options&&null!==t.options&&(l++,a(t.options),l--)}),n+="</ul>"})(t.options),n)},V=function(t,i){n=null,l=null,o=null,c=0,r=null,function(t){var i=!0,a=0,n=cotd.isMobileWeb?"group-1":"col-1";e.each(t.filters,function(t,n){if(-1==e.inArray(t,e.map(g,function(e){return e.id}))&&n.show){i=!1;var l={id:t,name:n.name,yloc:0};g.splice(a,0,l)}a++}),g.length===t.filters.length&&i||(e.each(g,function(t,i){i.yloc=void 0===e("#tab_"+i.id).attr("data-yloc")?0:e("#tab_"+i.id).attr("data-yloc")}),p.empty(),n=(cotd.isMobileWeb?"group-":"col-")+Q(g),e.each(g,function(t,i){var a=e('<div class="filter-header">'),l=e('<div class="tab-content">');d=e('<div class="filter-body">'),l.addClass(n).attr("id","tab_"+i.id).attr("data-yloc",i.yloc).append(a.append(e(cotd.isMobileWeb?"<span>":"<h5>").addClass("filter-title").text(i.name))).append(d),p.append(l)}))}(t),p.find(".filter-body").empty(),e.each(g,function(i,a){var d=null,f=0,h=0,u=p.find("#tab_"+a.id),v=u.find(".filter-body");if(!cotd.isMobileWeb)var b=e('<div class="search-filter input-container"><input class="input-control search" placeholder="Search"/></div>');if(r=e('<div class="scroll-container">'),l=a,o=[],void 0!==cotd.utilities&&void 0!==cotd.utilities.getQueryVariableValue&&0==(o=cotd.utilities.getQueryVariableValues(l.id+"[]")).length&&(o=cotd.utilities.getQueryVariableValues(l.id+encodeURIComponent("[]"))),void 0!==t.filters[a.id]&&(d=t.filters[a.id]),null!==d&&d.show){e.each(d.options,function(e,t){void 0!==t.count?f+=t.count:f+=t.length,h++}),u.data("count",f).removeClass("scroll"),s="",w=[];if(void 0!==d.hierarchical&&d.hierarchical?(s=z(d,a),r=null):e.each(d.options,function(t,i){var a=""===t||void 0===d.multilevel||!d.multilevel;if(_=1,a)n=e('<ul class="list">'),""!==t&&r.append(e("<div>").addClass("filter-group").text(t)),c=0,x=4,e.each(i,q),r.append(n);else{r=null;var l="";w[0]=h,w[_]=Object.keys(i).length,(h>1||void 0===w[_]||1==_)&&(l='<input type="checkbox" class="accordion-checkbox"checked="checked">'),W=0,e.each(i,U),s+='<div class="accordion-block">'+l+'<div class="accordion-title filter-group'+(0==W?" empty hidden":"")+'">'+t+' <span class="filter-group-count">'+W+'</span></div><div class="accordion-content">',c=0,x=4,_++,e.each(i,A()),_--,s+="</div></div>"}if(C&&c>0){var o=e('<a class="filter-clear-link" href="#">Clear</a>');o.on("click",function(t){t.preventDefault(),u.find('[type="checkbox"]:checked:not(.accordion-checkbox)').each(function(t,i){e(this).prop("checked",!1)}),o.remove(),H()}),0==u.find(".filter-header").find(".filter-clear-link").count&&u.find(".filter-header").prepend(o)}}),null===r&&(r=cotd.isMobileWeb?'<div class="list">'+s+"</div>":s),v.html(r),cotd.isMobileWeb?u.height()>400&&u.addClass("scroll"):!C&&f>6&&b.prependTo(v),u.hasClass("scroll")){var g=u.find('input[type="checkbox"]:checked').length<=0?0:u.attr("data-yloc");u.attr("data-yloc",g),u.find(".scroll-container").scrollTop(u.attr("data-yloc"))}}else v.html(e("<p>").text(m[1]))}),$(p),B(!1)},Q=function(t){return e.map(t,function(e,t){return t}).length},B=function(e){e?(u.addClass(b[0]),v.find(".btn").addClass("disabled").attr("disabled","disabled")):(u.removeClass(b[0]),v.find(".btn").removeClass("disabled").removeAttr("disabled","disabled"))},$=function(t){t.find(".tab-content").each(function(t){if(cotd.isMobileWeb)e(this).find('input[type="checkbox"]:not(.accordion-checkbox):checked').length?e(this).addClass("active"):e(this).removeClass("active");else{var i=e(this),a=i.find("ul");i.find("input.search").on("change keyup",function(t){var i=e(this).val();if(a.find("li").removeClass("hide"),i){var n=a.find("label:not(:Contains("+i+"))").closest("li");a.find("li").removeClass("hide"),n.addClass("hide"),a.not(n).removeClass("hide")}else""===i&&(a.show().find("li").removeClass("hide"),a.prev(".filter-group").hide());return a.find('input[type="checkbox"]:checked').closest("li").removeClass("hide"),a.each(function(t){e(this).find("li:hidden").length===e(this).find("li").length?e(this).hide().prev(".filter-group").hide():e(this).show().prev(".filter-group").show()}),!1})}}).find(".filter-checkbox").on("change",function(){if(!cotd.isMobileWeb&&C)H();else{var t=e(this).closest(".tab-content"),i=e(this).closest(".scroll-container"),a=Math.round(i.scrollTop()+(e(this).closest("li").position().top-i.position().top)-i.height()/2+e(this).closest("li").height()/2);t.find("input.search").length&&t.find("input.search").val().length>0&&(a=0),t.attr("data-yloc",a),N(h.serialize(),!0)}}).end().find(".hierarchical-item").on("click",function(t){t.preventDefault(),0===f.find("#"+e(this).attr("data-facet")+"_value").length&&f.append('<input type="hidden" id="'+e(this).attr("data-facet")+'_value" name="'+e(this).attr("data-facet")+'[]"/>'),f.find("#"+e(this).attr("data-facet")+"_value").val(e(this).attr("data-value")),!cotd.isMobileWeb&&C?H():N(h.serialize(),!0)}),cotd.isMobileWeb&&t.find(".filter-header").on("click",".filter-title",function(){e(this).closest(".tab-content").toggleClass("active")})},E=function(e){void 0===cotd.instantSearch&&P!==S&&N(t.location.search.substring(1),!1,!0)},H=function(i){var a,n,l;void 0===i&&(i=!1),cotd.isMobileWeb?a=M.find(":checked"):(a=M.find(":selected"),e("#filteredProducts").addClass("mini-loading")),e("#sort").val(a.val()),l=null!==(l=t.location.href.match(/[?&]p=([0-9]+)[&]$/))&&l.count>1?l[1]:1,n=t.location.href.replace(/[?].*$/,"");var o=h.serialize()+(l>1?"&p="+l:"");!/sort[=]/.test(o)&&a?o+=(""==o?"?":"&")+"sort="+a.val():""!==o&&(o="?"+o),n+=o,e.ajax(n,{data:{_format:"json"},dataType:"json",success:function(i){var a=i.html,o=i.contexts;if(t.snowplow&&o.length)for(var d=0;d<o.length;d++)t.snowplow("trackSelfDescribingEvent",o[d]);""!=e(a).find(".search-page-count")?e(".search-page-count").replaceWith(e(a).find(".search-page-count")).show():e(".search-page-count").hide(),e(".certona-variables").replaceWith(e("<div>"+a+"</div>").find(".certona-variables")).promise().done(function(){"function"==typeof certonaRecommendations&&certonaRecommendations()}),e("#filteredProducts").replaceWith(e(a).find("#filteredProducts")).promise().done(function(){var i=!0;if(void 0!==cotd.buyForm&&"function"==typeof cotd.buyForm.init&&cotd.buyForm.init("#filteredProducts"),void 0!==cotd.topPicksCarousel&&"function"==typeof cotd.topPicksCarousel.init&&cotd.topPicksCarousel.init(),e("#filteredProducts").find(".product").each(function(a,n){i&&e(n).offset().top-e(t).scrollTop()>=0&&(i=!1)}),void 0!==t.picturefill&&t.picturefill(),e("#filteredProducts").find('[data-track="infinite"]').length){var o=e("#filteredProducts").find("#eventContent");cotd.infiniteScrollParams.endpoint=n,cotd.infiniteScrollParams.startingPage=l,cotd.infiniteScrollParams.resultsCount=o.data("total-products"),cotd.infiniteScrollParams.limit=o.data("limit"),cotd.infiniteScrollParams.offset=o.data("offset"),o.cotdInfiniteScroll(cotd.infiniteScrollParams)}if(a.indexOf("time-left")>-1&&cotd.countdownTimers&&cotd.countdownTimers.reinit(),i)try{e("html, body").animate({scrollTop:0},600)}catch(t){e("body").scrollTop(0)}})}}),i||N(h.serialize(),!1),n!==P&&T&&(S===P?(P=n,i?history.replaceState({},"",n):history.pushState({},"",n)):(P=n,history.replaceState({},"",n)))};return{initSearchFilter:function(i){var a=f.find("input.reset");if(void 0!==cotd.categoryDropDown&&void 0!==cotd.categoryDropDown.subTypeIds&&(R=cotd.categoryDropDown.subTypeIds),T="undefined"!=typeof history&&void 0!==history.pushState,S=P=t.location.href,I=i.hideBrandFilter||!1,F=i.forceBrandName||null,j=i.forceSellerName||null,!cotd.isMobileWeb){var n=f.find(".tab-controller"),l=f.find("input.search");(C="aside"===e("body").data("filter")||e(".main-content").hasClass("aside-filters"))&&(b[0]="cover-loading")}if(void 0!==i.eventId&&(k=i.eventId),void 0!==i.query&&(y=i.query),cotd.isMobileWeb||(p.find(".tab-content:eq(0)").show(),n.find("li:eq(0)").addClass("active")),e(t).on("popstate",E),a.on("click",function(t){cotd.isMobileWeb||p.find(".list li").removeClass("hide"),p.find('.list input[type="checkbox"]:checked').prop("checked",!1),cotd.isMobileWeb||(p.find(".tab-content").attr("data-yloc",0),l.val("")),N(null,!1),cotd.isMobileWeb&&e("#sort").val(e("input[name=filter-sort]:checked").val())}),e('[data-trigger="clear-click"]').on("click",function(e){e.preventDefault(),a.triggerHandler("click")}),cotd.isMobileWeb){var o=e(".close.fixed"),d=e("#modalSearchFilter");if(o.length){o.on("click",function(e){d.modal("hide"),o.removeClass("in")});var c=o.height();d.on("scroll",function(t){e(this).scrollTop()>=c&&!o.hasClass("in")?o.addClass("in"):e(this).scrollTop()<c&&o.removeClass("in")})}}else e.expr[":"].Contains=function(e,t,i){return(e.textContent||e.innerText||"").toUpperCase().indexOf(i[3].toUpperCase())>=0};M.length&&!cotd.isMobileWeb?M.on("change",function(t){e("input[name=sort]").val(M.val()),H()}):M.length&&cotd.isMobileWeb&&M.on("click",function(t){var i;t.target!=M&&((i=e(t.target).closest("div").find("input")).prop("checked",!0),e("input[name=sort]").val(i.val()))})},updateFilters:N}}(jQuery,window,document);
var cotd=cotd||{};cotd.over18=function(o,t,e,i){"use strict";var n,c,d,a=function(){o("body").removeClass("obstruct"),n.modal("hide")},r=function(){n.modal({backdrop:"static",keyboard:!1}),o("body").addClass("obstruct"),n.find('[data-dismiss="modal"]').on("click",function(o){return t.location="/",!1})};return{init:function(e){n=o("#modalDOB"),c=o("#dobForm"),d=o(".js-dob-form-btn"),e&&!cotd.utilities.getCookie("over18")&&(r(),c.on("submit",function(o){o.preventDefault()}),d.on("click",function(o){if("dobFormAccept"===o.target.id){var e=new Date;e.setMinutes(e.getMinutes()+30),cotd.utilities.createCookie("over18",!0,e,"/"),a()}else t.location="/"}))},showModal:r,closeModal:a}}(jQuery,this,document);