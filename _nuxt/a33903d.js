(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{371:function(t,e,n){"use strict";n.r(e);n(72);var r=n(16),c={head:function(){return{title:"記事一覧"}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,t.params,e.next=3,n("articles").limit(15);case 3:return r=e.sent,e.next=6,r.fetch();case 6:return c=e.sent,e.abrupt("return",{articles:c});case 8:case"end":return e.stop()}}),e)})))()}},l=n(74),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.articles,(function(e){return n("div",{key:e.slug},[n("nuxt-link",{attrs:{to:"/articles/"+e.slug}},[t._v(t._s(e.title)+" "+t._s(e.date))])],1)})),0)}),[],!1,null,null,null);e.default=component.exports}}]);