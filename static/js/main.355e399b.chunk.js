(this["webpackJsonpopen-react-template"]=this["webpackJsonpopen-react-template"]||[]).push([[0],{21:function(e,t,a){e.exports=a.p+"static/media/bev-logo-dark.6b8ead65.svg"},25:function(e,t,a){e.exports=a(36)},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(22),l=a.n(r),s=a(5),c=a(11),o=a(2),m=function(e){var t=e.component,a=e.layout,i=Object(o.a)(e,["component","layout"]);return a=void 0===a?function(e){return n.a.createElement(n.a.Fragment,null,e.children)}:a,n.a.createElement(c.a,Object.assign({},i,{render:function(e){return n.a.createElement(a,null,n.a.createElement(t,e))}}))},d=a(10),v=a(3),u=a.n(v),h=a(17),p=n.a.forwardRef((function(e,t){var a=Object(i.useState)(window.innerHeight),r=Object(d.a)(a,2),l=r[0],s=r[1],c=Object(i.useState)([]),o=Object(d.a)(c,2),m=o[0],v=o[1],u=function(){return m.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},p=function(){if(!u())for(var e=function(e){var t=m[e],a=t.getAttribute("data-reveal-delay"),i=t.getAttribute("data-reveal-offset")?t.getAttribute("data-reveal-offset"):"200";(function(e,t){return e.getBoundingClientRect().top<=l-t})(t.getAttribute("data-reveal-container")?t.closest(t.getAttribute("data-reveal-container")):t,i)&&!t.classList.contains("is-revealed")&&(a&&0!==a?setTimeout((function(){t.classList.add("is-revealed")}),a):t.classList.add("is-revealed"))},t=0;t<m.length;t++)e(t)};Object(i.useImperativeHandle)(t,(function(){return{init:function(){v(document.querySelectorAll("[class*=reveal-]"))}}})),Object(i.useEffect)((function(){"undefined"!==typeof m&&m.length>0&&(u()||(window.addEventListener("scroll",g),window.addEventListener("resize",E)),p())}),[m]);var b=function(){u()&&(window.removeEventListener("scroll",g),window.removeEventListener("resize",E))},g=Object(h.throttle)((function(){b(),p()}),30),E=Object(h.throttle)((function(){s(window.innerHeight)}),30);return Object(i.useEffect)((function(){b(),p()}),[l]),n.a.createElement(n.a.Fragment,null,e.children())}));p.propTypes={children:u.a.func.isRequired};var b=p,g=a(13),E=a(1),f=a.n(E),N=function(e){var t=e.className,a=e.src,r=e.width,l=e.height,s=e.alt,c=Object(o.a)(e,["className","src","width","height","alt"]),m=Object(i.useState)(!1),v=Object(d.a)(m,2),u=v[0],h=v[1],p=Object(i.useRef)(null);Object(i.useEffect)((function(){b(p.current)}),[]);var b=function(e){var t,a,i=document.createElement("img");u||(e.style.display="none",e.before(i),i.src=(t=e.getAttribute("width")||0,a=e.getAttribute("height")||0,'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(t," ").concat(a,'"%3E%3C/svg%3E')),i.width=e.getAttribute("width"),i.height=e.getAttribute("height"),i.style.opacity="0",e.className&&i.classList.add(e.className),i.remove(),e.style.display="")};return n.a.createElement("img",Object.assign({},c,{ref:p,className:t,src:a,width:r,height:l,alt:s,onLoad:function(){h(!0)}}))};N.defaultProps={src:void 0,width:void 0,height:void 0,alt:void 0};var w=N,O=function(e){var t=e.className,i=Object(o.a)(e,["className"]),r=f()("brand",t);return n.a.createElement("div",Object.assign({},i,{className:r}),n.a.createElement("h1",{className:"m-0"},n.a.createElement(s.b,{to:"/"},n.a.createElement(w,{src:a(21),alt:"Open",width:64,height:64}))))},y=function(e){var t=e.className,a=e.navPosition,r=e.hideNav,l=e.hideSignin,c=e.bottomOuterDivider,m=e.bottomDivider,v=Object(o.a)(e,["className","navPosition","hideNav","hideSignin","bottomOuterDivider","bottomDivider"]),u=Object(i.useState)(!1),h=Object(d.a)(u,2),p=h[0],b=h[1],g=Object(i.useRef)(null),E=Object(i.useRef)(null);Object(i.useEffect)((function(){return p&&N(),document.addEventListener("keydown",y),document.addEventListener("click",j),function(){document.removeEventListener("keydown",y),document.removeEventListener("click",j),w()}}));var N=function(){document.body.classList.add("off-nav-is-active"),g.current.style.maxHeight=g.current.scrollHeight+"px",b(!0)},w=function(){document.body.classList.remove("off-nav-is-active"),g.current&&(g.current.style.maxHeight=null),b(!1)},y=function(e){p&&27===e.keyCode&&w()},j=function(e){g.current&&p&&!g.current.contains(e.target)&&e.target!==E.current&&w()},x=f()("site-header",c&&"has-bottom-divider",t);return n.a.createElement("header",Object.assign({},v,{className:x}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:f()("site-header-inner",m&&"has-bottom-divider")},n.a.createElement(O,null),!r&&n.a.createElement(n.a.Fragment,null,n.a.createElement("button",{ref:E,className:"header-nav-toggle",onClick:p?w:N},n.a.createElement("span",{className:"screen-reader"},"Menu"),n.a.createElement("span",{className:"hamburger"},n.a.createElement("span",{className:"hamburger-inner"}))),n.a.createElement("nav",{ref:g,className:f()("header-nav",p&&"is-active")},n.a.createElement("div",{className:"header-nav-inner"},n.a.createElement("ul",{className:f()("list-reset text-xs",a&&"header-nav-".concat(a))},n.a.createElement("li",null,n.a.createElement(s.b,{to:"#0",onClick:w},"Documentation"))),!l&&n.a.createElement("ul",{className:"list-reset header-nav-right"},n.a.createElement("li",null,n.a.createElement(s.b,{to:"#0",className:"button button-primary button-wide-mobile button-sm",onClick:w},"Sign up")))))))))};y.defaultProps={navPosition:"",hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};var j=function(e){var t=e.className,a=Object(o.a)(e,["className"]),i=f()("footer-social",t);return n.a.createElement("div",Object.assign({},a,{className:i}),n.a.createElement("ul",{className:"list-reset"},n.a.createElement("li",null,n.a.createElement("a",{href:"https://github.com/oslabs-beta/bev/"},n.a.createElement("svg",{width:"32",height:"32",viewBox:"0 0 256 250",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("title",null,"Github"),n.a.createElement("path",{d:"M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46c6.397 1.185 8.746-2.777 8.746-6.158c0-3.052-.12-13.135-.174-23.83c-35.61 7.742-43.124-15.103-43.124-15.103c-5.823-14.795-14.213-18.73-14.213-18.73c-11.613-7.944.876-7.78.876-7.78c12.853.902 19.621 13.19 19.621 13.19c11.417 19.568 29.945 13.911 37.249 10.64c1.149-8.272 4.466-13.92 8.127-17.116c-28.431-3.236-58.318-14.212-58.318-63.258c0-13.975 5-25.394 13.188-34.358c-1.329-3.224-5.71-16.242 1.24-33.874c0 0 10.749-3.44 35.21 13.121c10.21-2.836 21.16-4.258 32.038-4.307c10.878.049 21.837 1.47 32.066 4.307c24.431-16.56 35.165-13.12 35.165-13.12c6.967 17.63 2.584 30.65 1.255 33.873c8.207 8.964 13.173 20.383 13.173 34.358c0 49.163-29.944 59.988-58.447 63.157c4.591 3.972 8.682 11.762 8.682 23.704c0 17.126-.148 30.91-.148 35.126c0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002C256 57.307 198.691 0 128.001 0zm-80.06 182.34c-.282.636-1.283.827-2.194.39c-.929-.417-1.45-1.284-1.15-1.922c.276-.655 1.279-.838 2.205-.399c.93.418 1.46 1.293 1.139 1.931zm6.296 5.618c-.61.566-1.804.303-2.614-.591c-.837-.892-.994-2.086-.375-2.66c.63-.566 1.787-.301 2.626.591c.838.903 1 2.088.363 2.66zm4.32 7.188c-.785.545-2.067.034-2.86-1.104c-.784-1.138-.784-2.503.017-3.05c.795-.547 2.058-.055 2.861 1.075c.782 1.157.782 2.522-.019 3.08zm7.304 8.325c-.701.774-2.196.566-3.29-.49c-1.119-1.032-1.43-2.496-.726-3.27c.71-.776 2.213-.558 3.315.49c1.11 1.03 1.45 2.505.701 3.27zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033c-1.448-.439-2.395-1.613-2.103-2.626c.301-1.01 1.747-1.484 3.207-1.028c1.446.436 2.396 1.602 2.095 2.622zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95c-1.53.034-2.769-.82-2.786-1.86c0-1.065 1.202-1.932 2.733-1.958c1.522-.03 2.768.818 2.768 1.868zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37c-1.485.271-2.861-.365-3.05-1.386c-.184-1.056.893-2.114 2.376-2.387c1.514-.263 2.868.356 3.061 1.403z"})))),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.linkedin.com/company/bevdev/"},n.a.createElement("svg",{width:"48",height:"48",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("title",null,"LinkedIn"),n.a.createElement("path",{d:"M20.9716667,33.5527338 L25.001,33.5527338 L25.001,27.1328007 C25.001,25.439485 25.3213333,23.7988354 27.4206667,23.7988354 C29.491,23.7988354 29.517,25.7351486 29.517,27.2404662 L29.517,33.5527338 L33.5506667,33.5527338 L33.5506667,26.4341413 C33.5506667,22.9381777 32.796,20.2505391 28.711,20.2505391 C26.7483333,20.2505391 25.432,21.3265278 24.8943333,22.3471839 L24.839,22.3471839 L24.839,20.5725357 L20.9716667,20.5725357 L20.9716667,33.5527338 Z M16.423,14.1202696 C15.1273333,14.1202696 14.0823333,15.1682587 14.0823333,16.4595785 C14.0823333,17.7508984 15.1273333,18.7992208 16.423,18.7992208 C17.7133333,18.7992208 18.761,17.7508984 18.761,16.4595785 C18.761,15.1682587 17.7133333,14.1202696 16.423,14.1202696 L16.423,14.1202696 Z M14.4026667,33.5527338 L18.4406667,33.5527338 L18.4406667,20.5725357 L14.4026667,20.5725357 L14.4026667,33.5527338 Z M9.76633333,40 C8.79033333,40 8,39.2090082 8,38.2336851 L8,9.76631493 C8,8.79065843 8.79033333,8 9.76633333,8 L38.234,8 C39.2093333,8 40,8.79065843 40,9.76631493 L40,38.2336851 C40,39.2090082 39.2093333,40 38.234,40 L9.76633333,40 Z"}))))))},x=function(e){var t=e.className,a=e.topOuterDivider,i=e.topDivider,r=Object(o.a)(e,["className","topOuterDivider","topDivider"]),l=f()("site-footer center-content-mobile",a&&"has-top-divider",t);return n.a.createElement("footer",Object.assign({},r,{className:l}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:f()("site-footer-inner",i&&"has-top-divider")},n.a.createElement("div",{className:"footer-top space-between text-xxs"},n.a.createElement(O,null),n.a.createElement(j,null)))))};x.defaultProps={topOuterDivider:!1,topDivider:!1};var D=x,L=function(e){var t=e.children;return n.a.createElement(n.a.Fragment,null,n.a.createElement("main",{className:"site-content"},t),n.a.createElement(D,null))},k=a(6),C={types:{topOuterDivider:u.a.bool,bottomOuterDivider:u.a.bool,topDivider:u.a.bool,bottomDivider:u.a.bool,hasBgColor:u.a.bool,invertColor:u.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},S={types:Object(k.a)({},C.types),defaults:Object(k.a)({},C.defaults)},A={types:Object(k.a)({},C.types,{invertMobile:u.a.bool,invertDesktop:u.a.bool,alignTop:u.a.bool,imageFill:u.a.bool}),defaults:Object(k.a)({},C.defaults,{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1})},z={types:Object(k.a)({},C.types,{pushLeft:u.a.bool}),defaults:Object(k.a)({},C.defaults,{pushLeft:!1})},T=function(e){var t=e.className,a=Object(o.a)(e,["className"]),i=f()("button-group",t);return n.a.createElement("div",Object.assign({},a,{className:i}))},P=function(e){var t=e.className,a=e.tag,i=e.color,r=e.size,l=e.loading,s=e.wide,c=e.wideMobile,m=e.disabled,d=Object(o.a)(e,["className","tag","color","size","loading","wide","wideMobile","disabled"]),v=f()("button",i&&"button-".concat(i),r&&"button-".concat(r),l&&"is-loading",s&&"button-block",c&&"button-wide-mobile",t),u=a;return n.a.createElement(u,Object.assign({},d,{className:v,disabled:m}))};P.defaultProps={tag:"button",color:"",size:"",loading:!1,wide:!1,wideMobile:!1,disabled:!1};var B=P,F=function(e){var t=e.className,a=e.children,r=e.handleClose,l=e.show,s=e.closeHidden,c=e.video,m=e.videoTag,d=Object(o.a)(e,["className","children","handleClose","show","closeHidden","video","videoTag"]);Object(i.useEffect)((function(){return document.addEventListener("keydown",u),document.addEventListener("click",h),function(){document.removeEventListener("keydown",u),document.removeEventListener("click",h)}})),Object(i.useEffect)((function(){v()}),[d.show]);var v=function(){document.querySelectorAll(".modal.is-active").length?document.body.classList.add("modal-is-active"):document.body.classList.remove("modal-is-active")},u=function(e){27===e.keyCode&&r(e)},h=function(e){e.stopPropagation()},p=f()("modal",l&&"is-active",c&&"modal-video",t);return n.a.createElement(n.a.Fragment,null,l&&n.a.createElement("div",Object.assign({},d,{className:p,onClick:r}),n.a.createElement("div",{className:"modal-inner",onClick:h},c?n.a.createElement("div",{className:"responsive-video"},"iframe"===m?n.a.createElement("iframe",{title:"video",src:c,frameBorder:"0",allowFullScreen:!0}):n.a.createElement("video",{"v-else":!0,controls:!0,src:c})):n.a.createElement(n.a.Fragment,null,!s&&n.a.createElement("button",{className:"modal-close","aria-label":"close",onClick:r}),n.a.createElement("div",{className:"modal-content"},a)))))};F.defaultProps={children:null,show:!1,closeHidden:!1,video:"",videoTag:"iframe"};var M=Object(k.a)({},S.defaults),H=function(e){var t=e.className,r=e.topOuterDivider,l=e.bottomOuterDivider,s=e.topDivider,c=e.bottomDivider,m=e.hasBgColor,v=e.invertColor,u=Object(o.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"]),h=Object(i.useState)(!1),p=Object(d.a)(h,2),b=(p[0],p[1],f()("hero section center-content",r&&"has-top-divider",l&&"has-bottom-divider",m&&"has-bg-color",v&&"invert-color",t)),g=f()("hero-inner section-inner",s&&"has-top-divider",c&&"has-bottom-divider");return n.a.createElement("section",Object.assign({},u,{className:b}),n.a.createElement("div",{className:"container-sm"},n.a.createElement("div",{className:g},n.a.createElement("div",{className:"hero-content"},n.a.createElement("h1",{className:"mt-0 mb-16 reveal-from-bottom","data-reveal-delay":"200"},n.a.createElement(w,{src:a(21),alt:"Open",width:128,height:128}),n.a.createElement("span",{className:"text-color-primary"},"bev")),n.a.createElement("div",{className:"container-xs"},n.a.createElement("p",{className:"m-0 mb-32 reveal-from-bottom","data-reveal-delay":"400"},"A tool for managing dependences for microfrontend migration.",n.a.createElement("br",null),n.a.createElement("em",{style:{fontSize:"12px"}},"Read more about bev on ",n.a.createElement("a",{href:"htpps"},n.a.createElement("u",null,"Medium"))),"."),n.a.createElement("div",{className:"reveal-from-bottom","data-reveal-delay":"600"},n.a.createElement(T,null,n.a.createElement(B,{tag:"a",color:"primary",wideMobile:!0,href:"https://github.com/oslabs-beta/bev/"},"View on Github"))))))))};H.defaultProps=M;var R=H,_=function(e){var t=e.className,a=e.data,i=e.children,r=e.tag,l=Object(o.a)(e,["className","data","children","tag"]),s=f()("section-header",t),c=r;return n.a.createElement(n.a.Fragment,null,(a.title||a.paragraph)&&n.a.createElement("div",Object.assign({},l,{className:s}),n.a.createElement("div",{className:"container-xs"},i,a.title&&n.a.createElement(c,{className:f()("mt-0",a.paragraph?"mb-16":"mb-0")},a.title),a.paragraph&&n.a.createElement("p",{className:"m-0"},a.paragraph))))};_.defaultProps={children:null,tag:"h2"};var I=_,G=Object(k.a)({},A.defaults),W=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,r=e.topDivider,l=e.bottomDivider,s=e.hasBgColor,c=e.invertColor,m=e.invertMobile,d=e.invertDesktop,v=e.alignTop,u=e.imageFill,h=Object(o.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"]),p=f()("features-split section",a&&"has-top-divider",i&&"has-bottom-divider",s&&"has-bg-color",c&&"invert-color",t),b=f()("features-split-inner section-inner",r&&"has-top-divider",l&&"has-bottom-divider"),g=f()("split-wrap",m&&"invert-mobile",d&&"invert-desktop",v&&"align-top");return n.a.createElement("section",Object.assign({},h,{className:p}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:b},n.a.createElement(I,{data:{title:"Built for devs",paragraph:"Developed under tech accelerator, OS Labs, bev is a multi-platform desktop application that allows you to analyze and visualize dependencies. bev alleviates the pain of migrating to microservices."},className:"center-content"}),n.a.createElement("div",{className:g},n.a.createElement("div",{className:"split-item"},n.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},n.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"A bird's eye view"),n.a.createElement("h3",{className:"mt-0 mb-12"},"Dependency Visualizer"),n.a.createElement("p",{className:"m-0"},"bev parses through your project\u2019s file structure to generate an interactive dependency graph. The blue nodes represent local dependencies whereas the red nodes represent third-party dependencies.")),n.a.createElement("div",{className:f()("split-item-image center-content-mobile reveal-from-bottom",u&&"split-item-image-fill"),"data-reveal-container":".split-item"},n.a.createElement(w,{src:"https://i.imgur.com/dmFFTVY.gif",alt:"Features split 01",width:1152,height:650}))),n.a.createElement("div",{className:"split-item"},n.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-right","data-reveal-container":".split-item"},n.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"A smaller bundle"),n.a.createElement("h3",{className:"mt-0 mb-12"},"Bundle Optimizer"),n.a.createElement("p",{className:"m-0"},"bev also finds and analyzes your bundle files. bev gives you a detailed breakdown of what\u2019s being bundled.")),n.a.createElement("div",{className:f()("split-item-image center-content-mobile reveal-from-bottom",u&&"split-item-image-fill"),"data-reveal-container":".split-item"},n.a.createElement(w,{src:"https://i.imgur.com/UDXgfVC.png",alt:"Features split 02",width:1200,height:700}))),n.a.createElement("div",{className:"split-item"},n.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-right","data-reveal-container":".split-item"},n.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"See your bundle size change"),n.a.createElement("h3",{className:"mt-0 mb-12"},"Bundle Size History"),n.a.createElement("p",{className:"m-0"},"bev keeps a history of how your bundle size over time.")),n.a.createElement("div",{className:f()("split-item-image center-content-mobile reveal-from-bottom",u&&"split-item-image-fill"),"data-reveal-container":".split-item"},n.a.createElement(w,{src:"https://i.imgur.com/2oru1uc.png",alt:"Features split 02",width:1200,height:700})))))))};W.defaultProps=G;var K=W,V=Object(k.a)({},z.defaults),q=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,r=e.topDivider,l=e.bottomDivider,s=e.hasBgColor,c=e.invertColor,m=e.pushLeft,d=Object(o.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),v=f()("testimonial section",a&&"has-top-divider",i&&"has-bottom-divider",s&&"has-bg-color",c&&"invert-color",t),u=f()("testimonial-inner section-inner",r&&"has-top-divider",l&&"has-bottom-divider"),h=f()("tiles-wrap",m&&"push-left");return n.a.createElement("section",Object.assign({},d,{className:v}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:u},n.a.createElement(I,{data:{title:"Meet the team",paragraph:""},className:"center-content"}),n.a.createElement("div",{className:h},n.a.createElement("div",{className:"tiles-item reveal-from-right","data-reveal-delay":"200"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"testimonial-item-content"},n.a.createElement("p",{className:"text-sm mb-0"},n.a.createElement("img",{src:"https://i.imgur.com/Hel78as.jpg",width:"250",height:"250",style:{margin:"auto"}}),"\u2014 A Los Angeles based software engineer with fabulous hair and a passion for birding, bouldering, jazz.")),n.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},n.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Ryan Lee"),n.a.createElement("span",{className:"text-color-low"}," / "),n.a.createElement("span",{className:"testimonial-item-link"},n.a.createElement("a",{href:"https://github.com/savoy1211/"},"Github"),n.a.createElement("span",null," / "),n.a.createElement("a",{href:"https://www.linkedin.com/in/rynklee/"},"LinkedIn"))))),n.a.createElement("div",{className:"tiles-item reveal-from-bottom"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"testimonial-item-content"},n.a.createElement("p",{className:"text-sm mb-0"},n.a.createElement("img",{src:"https://avatars.githubusercontent.com/u/6416532?v=4",width:"250",height:"250",style:{margin:"auto"}}),"\u2014 A Seattle based software engineer with a passion for coffee, backpacking, and music.")),n.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},n.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Michael Pay"),n.a.createElement("span",{className:"text-color-low"}," / "),n.a.createElement("span",{className:"testimonial-item-link"},n.a.createElement("a",{href:"https://github.com/airpick"},"Github"),n.a.createElement("span",null," / "),n.a.createElement("a",{href:"https://www.linkedin.com/in/michael-edward-pay/"},"LinkedIn"))))),n.a.createElement("div",{className:"tiles-item reveal-from-left","data-reveal-delay":"200"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"testimonial-item-content"},n.a.createElement("p",{className:"text-sm mb-0"},n.a.createElement("img",{src:"https://i.imgur.com/S0sJ1ak.jpg",width:"250",height:"250",style:{margin:"auto"}}),"\u2014 A San Jose based software engineer with a passion for teaching, and mathematics.")),n.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},n.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Tu Pham"),n.a.createElement("span",{className:"text-color-low"}," / "),n.a.createElement("span",{className:"testimonial-item-link"},n.a.createElement("a",{href:"https://github.com/toopham"},"Github"),n.a.createElement("span",null," / "),n.a.createElement("a",{href:"https://www.linkedin.com/in/toopham/"},"LinkedIn"))))),n.a.createElement("div",{className:"tiles-item reveal-from-left","data-reveal-delay":"200"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"testimonial-item-content"},n.a.createElement("p",{className:"text-sm mb-0"},n.a.createElement("img",{src:"https://i.imgur.com/UeSA2gW.jpg",width:"250",height:"250",style:{margin:"auto"}}),"\u2014 A Los Angeles based software engineer with a passion for photography, K-Pop and Formula 1 racing.")),n.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},n.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Ian Tran"),n.a.createElement("span",{className:"text-color-low"}," / "),n.a.createElement("span",{className:"testimonial-item-link"},n.a.createElement("a",{href:"https://github.com/eienTran/"},"Github"),n.a.createElement("span",null," / "),n.a.createElement("a",{href:"https://www.linkedin.com/in/ictran/"},"LinkedIn"))))),n.a.createElement("div",{className:"tiles-item reveal-from-left","data-reveal-delay":"200"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"testimonial-item-content"},n.a.createElement("p",{className:"text-sm mb-0"},n.a.createElement("img",{src:"https://avatars.githubusercontent.com/u/41654007?v=4",width:"250",height:"250",style:{margin:"auto"}}),"\u2014 A Honolulu based software engineer with a passion for baking who mentored the bev development team.")),n.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},n.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Kai Rilliet"),n.a.createElement("span",{className:"text-color-low"}," / "),n.a.createElement("span",{className:"testimonial-item-link"},n.a.createElement("a",{href:"https://github.com/kairilliet/"},"Github"),n.a.createElement("span",null," / "),n.a.createElement("a",{href:"https://www.linkedin.com/in/kairilliet/"},"LinkedIn")))))))))};q.defaultProps=V;var J=q,U=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(R,{className:"illustration-section-01"}),n.a.createElement(K,{invertMobile:!0,topDivider:!0,imageFill:!0,className:"illustration-section-02"}),n.a.createElement(J,{topDivider:!0}))};g.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GA_CODE);var Z=function(){var e=Object(i.useRef)(),t=Object(c.f)();return Object(i.useEffect)((function(){var a=t.pathname;document.body.classList.add("is-loaded"),e.current.init(),function(e){g.a.set({page:e}),g.a.pageview(e)}(a)}),[t]),n.a.createElement(b,{ref:e,children:function(){return n.a.createElement(c.c,null,n.a.createElement(m,{exact:!0,path:"/",component:U,layout:L}))}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(35);l.a.render(n.a.createElement(s.a,null,n.a.createElement(Z,null)),document.getElementById("root"));for(var X=document.getElementsByClassName("m-0"),Y=1;Y<X.length-1;Y++){var $=X[Y].innerHTML.replace(/bev/gi,"<span style='color:#ac1f1f'><strong>bev</strong></span>");X[Y].innerHTML=$}"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[25,1,2]]]);
//# sourceMappingURL=main.355e399b.chunk.js.map