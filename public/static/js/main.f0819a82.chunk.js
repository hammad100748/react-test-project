(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(52)},28:function(e,t,a){},30:function(e,t,a){},32:function(e,t,a){},46:function(e,t,a){},48:function(e,t,a){},50:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),o=a.n(c),l=(a(28),a(5)),s=a(6),i=a(8),u=a(7),d=a(9),m=(a(30),function(){return r.a.createElement("header",{className:"header"},r.a.createElement("p",null,"Products Grid"))}),h=a(22),p=(a(32),[{value:"price",label:"Price"},{value:"size",label:"Size"},{value:"id",label:"ID"}]),f=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={selectedOption:null},a.handleChange=function(e){a.setState({selectedOption:e}),a.props.handleSortInputChange(e.value)},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.selectedOption;return r.a.createElement("div",{className:"Select"},r.a.createElement("div",{className:"Select--title"},r.a.createElement("h5",null,"Sort by")),r.a.createElement("div",{className:"Select--Input"},r.a.createElement(h.a,{value:e,onChange:this.handleChange,options:p})))}}]),t}(n.Component),g=a(4),v=a.n(g),S=a(11),E=(a(46),a(48),new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2})),I=function(e){var t=e.getAddImageUrl;return r.a.createElement("div",null,r.a.createElement("p",{className:"ProductItem--image-title"},"But first, a word from our sponsors:"),r.a.createElement("img",{className:"ProductItem--image-pic",src:"http://localhost:3000/ads/?r=".concat(t()),alt:"Ad"}))},b=function(e){var t=e.product,a=e.index,n=e.getAddImageUrl;return r.a.createElement("div",{className:"ProductItem"},a%20!==0||0===a?r.a.createElement("div",{className:"ProductItem--card"},r.a.createElement("div",{className:"ProductItem--card-title"},r.a.createElement("h3",{style:{fontSize:t.size}},t.face)),r.a.createElement("span",{className:"ProductItem--card-size"},"Size ",t.size),r.a.createElement("span",{className:"ProductItem--card-price"},E.format(t.price)),r.a.createElement("p",{className:"ProductItem--card-date"},"Added On: ",function(e){var t=Math.floor((new Date-e)/1e3),a=Math.floor(t/31536e3);return a>1?e.toLocaleDateString():(a=Math.floor(t/86400))>1?a>7?e.toLocaleDateString():a+" days":(a=Math.floor(t/3600))>1?a+" hours":(a=Math.floor(t/60))>1?a+" minutes":Math.floor(t)+" seconds"}(new Date(t.date)))):r.a.createElement("div",{className:"ProductItem--image"},r.a.createElement(I,{getAddImageUrl:n})))},y=function(e){var t=e.products&&e.products.map(function(t,a){return a<e.lastIndex?r.a.createElement(b,{key:t.id,product:t,getAddImageUrl:e.getAddImageUrl,index:a}):null});return r.a.createElement("div",{className:"ProductList"},t)},O=function(e,t){return fetch("http://localhost:3000/api/products"+"?_page=".concat(e,"&_limit=10&_sort=").concat(t),{method:"GET"}).then(function(e){return e.json()}).then(function(e){return JSON.stringify(e)}).catch(function(e){return e})};a(50);var w=function(){return r.a.createElement("p",{className:"saving"},"Loading Items",r.a.createElement("span",null,"."),r.a.createElement("span",null,"."),r.a.createElement("span",null,"."))},N=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={products:null,page:1,lastPageIndex:0,loadingState:!1,sortBy:"",currentAdNumber:null,addImgUrl:"",showAdd:!0,isProductsFinished:!1,lastIndex:10,bottom:!1},a.getMoreProducts=Object(S.a)(v.a.mark(function e(){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({loadingState:!0,page:a.state.page+1}),e.next=3,O(a.state.page,a.state.sortBy).then(function(e){if(JSON.parse(e).length>0){var t=a.state.products.concat(JSON.parse(e));a.setState({products:t,loadingState:!1})}else clearInterval(a.interval),a.setState({loadingState:!1,isProductsFinished:!0})}).catch(function(e){return console.log(e)});case 3:case"end":return e.stop()}},e,this)})),a.getAddImageUrl=function(){for(var e=Math.floor(1e3*Math.random());e===a.state.currentAdNumber;)e=Math.floor(1e3*Math.random());return e},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;O(this.state.page,"").then(function(t){e.setState({lastPageIndex:e.state.lastPageIndex+JSON.parse(t).length}),e.setState({products:JSON.parse(t)}),e.interval=setInterval(Object(S.a)(v.a.mark(function t(){return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getMoreProducts();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)})),1e3)}).catch(function(e){return console.log(e)}),this.refs.iScroll.addEventListener("scroll",function(){console.log(e.refs.iScroll),e.refs.iScroll.scrollTop+e.refs.iScroll.clientHeight+1>=e.refs.iScroll.scrollHeight&&(e.props.loadingState||e.setState({lastIndex:e.state.lastIndex+10,isStateChanged:!0}));var t=e.refs.iScroll.scrollHeight-e.refs.iScroll.scrollTop===e.refs.iScroll.clientHeight;t&&!e.props.loadingState&&e.state.isProductsFinished&&(console.log(t),e.setState({bottom:!0}))})}},{key:"handleSortBy",value:function(){var e=Object(S.a)(v.a.mark(function e(t){var a=this;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),this.setState({products:null}),this.setState({sortBy:t}),e.next=5,O(this.state.page,t).then(function(e){console.log(JSON.parse(e)),a.setState({products:JSON.parse(e)})}).catch(function(e){return console.log(e)});case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{ref:"iScroll",style:{height:"550px",overflow:"auto"}},r.a.createElement(y,{lastIndex:this.state.lastIndex,products:this.state.products,loadingState:this.state.loadingState,getAddImageUrl:this.getAddImageUrl}),this.state.loadingState&&r.a.createElement("div",{style:{marginLeft:"50%"}},r.a.createElement(w,null)),this.state.bottom&&r.a.createElement("div",{style:{marginLeft:"50%"}},r.a.createElement("p",null,"~ end of catalogue ~")))}}]),t}(n.Component),P=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleSortInputChange=function(e){a.refs.product.handleSortBy(e)},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(m,null),r.a.createElement(f,{handleSortInputChange:this.handleSortInputChange}),r.a.createElement(N,{ref:"product"}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,2,1]]]);
//# sourceMappingURL=main.f0819a82.chunk.js.map