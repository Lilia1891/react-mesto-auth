(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(15),i=n.n(o),c=n(7),l=(n(35),n(24)),u=n(16),s=n(2),p=n(1),m=n(25),f=function(e){var t=e.component,n=Object(m.a)(e,["component"]);return r.a.createElement(p.b,null,function(){return!0===n.loggedIn?r.a.createElement(t,n):r.a.createElement(p.a,{to:"/sign-in"})})},h=n(19),d=n.n(h);var g=function(e){var t=e.userData,n=e.onClick,a=Object(p.h)().pathname;return r.a.createElement("header",{className:"header"},r.a.createElement("img",{src:d.a,className:"header__logo",alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u0441\u0430\u0439\u0442\u0430"}),"/sign-in"===a&&r.a.createElement(c.b,{to:"/sign-up",className:"header__link"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),"/sign-up"===a&&r.a.createElement(c.b,{to:"/sign-in",className:"header__link"},"\u0412\u043e\u0439\u0442\u0438"),"/"===a&&r.a.createElement("div",{className:"header__user-info"},r.a.createElement("p",{className:"header__user-email"},t.email),r.a.createElement("button",{onClick:n,className:"header__link header__link_grey"},"\u0412\u044b\u0439\u0442\u0438")))};var v=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",{className:"footer__copyrights"},"\xa9 2022 Mesto Russia"))},b=r.a.createContext();var E=function(e){var t=e.data,n=e.onCardClick,a=e.onCardLike,o=e.onCardDelete,i=r.a.useContext(b),c=t.owner._id===i._id,l=" gallery__element-delete ".concat(c?"gallery__element-delete_displayed":"gallery__element-delete"),u=t.likes.some(function(e){return e._id===i._id}),s="gallery__element-like ".concat(u?"gallery__element-like_active":"gallery__element-like");return r.a.createElement("li",{className:"gallery__element"},r.a.createElement("img",{src:t.link,className:"gallery__element-image",alt:t.name,onClick:function(){n(t)}}),r.a.createElement("div",{className:"gallery__element-description"},r.a.createElement("h2",{className:"gallery__element-title"},t.name),r.a.createElement("div",{className:"gallery__element-like-container"},r.a.createElement("button",{type:"button",className:s,onClick:function(){a(t)}}),r.a.createElement("div",{className:"gallery__element-like-counter"},t.likes.length))),r.a.createElement("button",{type:"button",className:l,onClick:function(){o(t)}}))};var _=function(e){var t=e.onEditProfile,n=e.onAddPlace,a=e.onEditAvatar,o=e.onCardClick,i=e.cards,c=e.onCardLike,l=e.onCardDelete,u=r.a.useContext(b);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"profile"},r.a.createElement("div",{className:"profile__box"},r.a.createElement("img",{src:u.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u0440\u043e\u0444\u0438\u043b\u044f",className:"profile__avatar"}),r.a.createElement("button",{className:"profile__avatar-change",onClick:a}),r.a.createElement("div",{className:"profile__info"},r.a.createElement("div",{className:"profile__info-container"},r.a.createElement("h1",{className:"profile__info-name"},u.name),r.a.createElement("button",{type:"button",className:"profile__avatar-edit-button",onClick:t})),r.a.createElement("p",{className:"profile__info-occupation"},u.about))),r.a.createElement("button",{type:"button",className:"profile__info-add-button",onClick:n})),r.a.createElement("div",{className:"gallery"},r.a.createElement("ul",{className:"gallery__elements"},i.map(function(e,t){return r.a.createElement(E,{data:e,key:e._id,onCardClick:o,onCardLike:c,onCardDelete:l})}))))};var y=function(e){var t=e.title,n=e.name,a=e.children,o=e.isOpen,i=e.onClose,c=e.onSubmit;return r.a.createElement("div",{className:"popup popup_".concat(n," ").concat(o&&"popup_opened")},r.a.createElement("div",{className:"popup__container"},r.a.createElement("button",{type:"button",className:"popup__close-button",onClick:i}),r.a.createElement("h3",{className:"popup__title"},t),r.a.createElement("form",{name:n,action:"#",className:"popup__form",onSubmit:c,noValidate:!0},a,r.a.createElement("button",{type:"submit",className:"popup__submit-button"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))))};var N=function(e){var t=e.card,n=e.onClose;return r.a.createElement("div",{className:"popup popup_view-image popup_dark ".concat(t.link&&"popup_opened")},r.a.createElement("figure",{className:"popup__figure"},r.a.createElement("img",{className:"popup__image",src:t.link,alt:t.name}),r.a.createElement("figcaption",{className:"popup__image-title"}),r.a.createElement("button",{className:"popup__close-button",type:"button",onClick:n})))},C=n(20),O=n.n(C),w=n(21),k=n.n(w);var A=function(e){var t=e.onClose,n=e.isOpen,a=e.isRegistred;return r.a.createElement("div",{className:"popup popup_info ".concat(n&&"popup_opened")},r.a.createElement("div",{className:"popup__container popup__container_info"},a?r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{className:"popup__info-image",src:O.a,alt:"success"}),r.a.createElement("p",{className:"popup__info-title"},"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!")," "):r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{className:"popup__info-image",src:k.a,alt:"fail"}),r.a.createElement("p",{className:"popup__info-title"},"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437.")),r.a.createElement("button",{className:"popup__close-button",type:"button",onClick:t})))},j=n(22),x=n(23),S=new(function(){function e(t){Object(j.a)(this,e),this.baseUrl=t.baseUrl,this.headers=t.headers}return Object(x.a)(e,[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getUserInfo",value:function(){return fetch(this.baseUrl+"/users/me",{headers:this.headers}).then(this._getResponseData)}},{key:"getInitialCards",value:function(){return fetch(this.baseUrl+"/cards",{headers:this.headers}).then(this._getResponseData)}},{key:"editProfile",value:function(e){return fetch(this.baseUrl+"/users/me",{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._getResponseData)}},{key:"addNewCard",value:function(e){return console.log(e),fetch(this.baseUrl+"/cards",{method:"POST",headers:this.headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._getResponseData)}},{key:"deleteCard",value:function(e){return fetch(this.baseUrl+"/cards/"+e,{method:"DELETE",headers:this.headers}).then(this._getResponseData)}},{key:"toggleLike",value:function(e,t){return fetch(this.baseUrl+"/cards/"+e+"/likes",{method:t?"DELETE":"PUT",headers:this.headers}).then(this._getResponseData)}},{key:"changeAvatar",value:function(e){return fetch(this.baseUrl+"/users/me/avatar",{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:e.avatar})}).then(this._getResponseData)}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-45",headers:{authorization:"636cc495-c287-427c-9f35-3c6c6a44b827","Content-Type":"application/json"}}),L=n(9),R=n(11);function P(e){var t=e.isOpen,n=e.onClose,o=e.onUpdateUser,i=Object(a.useState)({}),c=Object(s.a)(i,2),l=c[0],u=c[1],p=function(e){u(function(t){return Object(R.a)({},t,Object(L.a)({},e.target.name,e.target.value))})},m=Object(a.useContext)(b);return Object(a.useEffect)(function(){u(m)},[m,t]),r.a.createElement(y,{name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),o({name:l.name,about:l.about})}},r.a.createElement("input",{className:"popup__input popup__input_type_name",type:"text",name:"name",value:l.name||"",placeholder:"\u0418\u043c\u044f",minLength:"2",maxLength:"40",required:!0,onChange:p}),r.a.createElement("span",{className:"popup__input-error popup__input-error_name"}),r.a.createElement("input",{className:"popup__input popup__input_type_job",type:"text",name:"about",value:l.about||"",placeholder:"\u0412\u0438\u0434 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438",minLength:"2",maxLength:"200",required:!0,onChange:p}),r.a.createElement("span",{className:"popup__input-error popup__input-error_about"}))}function I(e){var t=e.isOpen,n=e.onClose,o=e.onUpdateAvatar,i=r.a.useRef();return Object(a.useEffect)(function(){i.current.value=""},[t]),r.a.createElement(y,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),o({avatar:i.current.value})}},r.a.createElement("input",{ref:i,type:"url",name:"avatar",id:"avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",className:"popup__input",required:!0}),r.a.createElement("span",{className:"popup__input-error popup__input-error_avatar"}))}function X(e){var t=e.isOpen,n=e.onClose,o=e.onAddPlace,i=Object(a.useState)({}),c=Object(s.a)(i,2),l=c[0],u=c[1];function p(e){u(function(t){return Object(R.a)({},t,Object(L.a)({},e.target.name,e.target.value))})}return Object(a.useEffect)(function(){u({})},[t]),r.a.createElement(y,{name:"add-card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),o({name:l.place,link:l.link})}},r.a.createElement("input",{className:"popup__input popup__input_type_place",type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",name:"place",id:"input-place",minLength:"2",maxLength:"30",required:!0,value:l.place||"",onChange:p}),r.a.createElement("span",{className:"popup__input-error popup__input-error_place"}),r.a.createElement("input",{className:"popup__input popup__input_type_link",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"link",id:"input-link",required:!0,value:l.link||"",onChange:p}),r.a.createElement("span",{className:"popup__input-error popup__input-error_link"}))}var q=Object(p.i)(function(e){var t=e.onRegister,n=Object(a.useState)(""),o=Object(s.a)(n,2),i=o[0],l=o[1],u=Object(a.useState)(""),p=Object(s.a)(u,2),m=p[0],f=p[1],h=function(){l(""),f("")};return r.a.createElement("div",{className:"sign"},r.a.createElement("form",{className:"popup__container popup__container_sign",onSubmit:function(e){e.preventDefault(),t({password:m,email:i,resetForm:h})}},r.a.createElement("h1",{className:"popup__title popup__title_sign"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),r.a.createElement("input",{id:"email",value:i,type:"email",name:"email",className:"popup__input popup__input_sign",placeholder:"Email",onChange:function(e){return l(e.target.value)}}),r.a.createElement("input",{id:"password",value:m,type:"password",name:"password",className:"popup__input popup__input_sign",autoComplete:"on",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",onChange:function(e){return f(e.target.value)}}),r.a.createElement("button",{type:"submit",className:"popup__submit-button popup__submit-button_sign"},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"),r.a.createElement("div",{className:"register__signin"},r.a.createElement(c.b,{to:"/sign-in",className:"register__signin"},"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438"))))}),U=Object(p.i)(function(e){var t=e.onLogin,n=Object(a.useState)(""),o=Object(s.a)(n,2),i=o[0],c=o[1],l=Object(a.useState)(""),u=Object(s.a)(l,2),p=u[0],m=u[1],f=function(){c(""),m("")};return r.a.createElement("div",{className:"sign",onSubmit:function(e){e.preventDefault(),i&&p&&t({email:i,password:p,resetForm:f})}},r.a.createElement("form",{className:"popup__container popup__container_sign"},r.a.createElement("h1",{className:"popup__title popup__title_sign"},"\u0412\u0445\u043e\u0434"),r.a.createElement("input",{id:"email",value:i,type:"email",className:"popup__input popup__input_sign",placeholder:"Email",onChange:function(e){return c(e.target.value)}}),r.a.createElement("input",{id:"password",value:p,type:"password",className:"popup__input popup__input_sign",autoComplete:"on",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",onChange:function(e){return m(e.target.value)}}),r.a.createElement("button",{type:"submit",className:"popup__submit-button popup__submit-button_sign"},"\u0412\u043e\u0439\u0442\u0438")))}),D="https://auth.nomoreparties.co",J=function(e,t){return fetch("".concat(D,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(function(e){console.log(e);try{if(201===e.status)return e.json()}catch(t){return t}}).then(function(e){return e}).catch(function(e){return console.log(e)})},Z=function(e,t){return fetch("".concat(D,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(function(e){return e.json()}).then(function(e){if(e.token)return localStorage.setItem("jwt",e.token),e}).catch(function(e){return console.log(e)})},K=function(e){return fetch("".concat(D,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then(function(e){return e.json()}).then(function(e){return e})};function Y(){Y=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},r=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(k){c=function(e,t,n){return e[t]=n}}function l(e,t,n,a){var r=t&&t.prototype instanceof p?t:p,o=Object.create(r.prototype),i=new C(a||[]);return o._invoke=function(e,t,n){var a="suspendedStart";return function(r,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===r)throw o;return w()}for(n.method=r,n.arg=o;;){var i=n.delegate;if(i){var c=_(i,n);if(c){if(c===s)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var l=u(e,t,n);if("normal"===l.type){if(a=n.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(a="completed",n.method="throw",n.arg=l.arg)}}}(e,n,i),o}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(k){return{type:"throw",arg:k}}}e.wrap=l;var s={};function p(){}function m(){}function f(){}var h={};c(h,r,function(){return this});var d=Object.getPrototypeOf,g=d&&d(d(O([])));g&&g!==t&&n.call(g,r)&&(h=g);var v=f.prototype=p.prototype=Object.create(h);function b(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){var a;this._invoke=function(r,o){function i(){return new t(function(a,i){!function a(r,o,i,c){var l=u(e[r],e,o);if("throw"!==l.type){var s=l.arg,p=s.value;return p&&"object"==typeof p&&n.call(p,"__await")?t.resolve(p.__await).then(function(e){a("next",e,i,c)},function(e){a("throw",e,i,c)}):t.resolve(p).then(function(e){s.value=e,i(s)},function(e){return a("throw",e,i,c)})}c(l.arg)}(r,o,a,i)})}return a=a?a.then(i,i):i()}}function _(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,_(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var a=u(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,s;var r=a.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function y(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(y,this),this.reset(!0)}function O(e){if(e){var t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function t(){for(;++a<e.length;)if(n.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:w}}function w(){return{value:void 0,done:!0}}return m.prototype=f,c(v,"constructor",f),c(f,"constructor",m),m.displayName=c(f,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,c(e,i,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},b(E.prototype),c(E.prototype,o,function(){return this}),e.AsyncIterator=E,e.async=function(t,n,a,r,o){void 0===o&&(o=Promise);var i=new E(l(t,n,a,r),o);return e.isGeneratorFunction(n)?i:i.next().then(function(e){return e.done?e.value:i.next()})},b(v),c(v,i,"Generator"),c(v,r,function(){return this}),c(v,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var a=t.pop();if(a in e)return n.value=a,n.done=!1,n}return n.done=!0,n}},e.values=O,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(n,a){return i.type="throw",i.arg=e,t.next=n,a&&(t.method="next",t.arg=void 0),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),N(n),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var r=a.arg;N(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:O(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},e}var H=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)(!1),c=Object(s.a)(i,2),m=c[0],h=c[1],d=Object(a.useState)(!1),E=Object(s.a)(d,2),C=E[0],O=E[1],w=Object(a.useState)({}),k=Object(s.a)(w,2),j=k[0],x=k[1],L=Object(a.useState)({}),R=Object(s.a)(L,2),D=R[0],H=R[1],G=Object(a.useState)([]),M=Object(s.a)(G,2),F=M[0],B=M[1],V=Object(a.useState)(!1),T=Object(s.a)(V,2),Q=T[0],z=T[1],W=Object(a.useState)({}),$=Object(s.a)(W,2),ee=$[0],te=$[1],ne=Object(a.useState)(!1),ae=Object(s.a)(ne,2),re=ae[0],oe=ae[1],ie=Object(a.useState)(!1),ce=Object(s.a)(ie,2),le=ce[0],ue=ce[1],se=Object(p.g)(),pe=function(){var e=Object(u.a)(Y().mark(function e(t){return Y().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:K(t).then(function(e){e&&(z(!0),te({email:e.data.email}))});case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();Object(a.useEffect)(function(){var e=localStorage.getItem("jwt");e&&pe(e)},[]),Object(a.useEffect)(function(){Q?se.push("/"):se.push("/sign-in")},[Q]);var me=function(){o(!1),h(!1),O(!1),x({}),oe(!1)};return Object(a.useEffect)(function(){S.getUserInfo().then(function(e){H(e)}).catch(function(e){console.log(e)}),S.getInitialCards().then(function(e){B(e)}).catch(function(e){console.log(e)})},[]),r.a.createElement("div",{className:"page"},r.a.createElement(b.Provider,{value:D},r.a.createElement("div",{className:"page__container"},r.a.createElement(g,{userData:ee,onClick:function(){localStorage.removeItem("jwt"),z(!1)}}),r.a.createElement(p.d,null,r.a.createElement(p.b,{path:"/sign-up"},r.a.createElement(q,{onRegister:function(e){var t=e.email,n=e.password,a=e.resetForm;return J(t,n).then(function(e){e&&400!==e.statusCode?e&&(ue(!0),oe(!0),se.push("/sign-in"),a()):(ue(!1),oe(!0))})}})),r.a.createElement(p.b,{path:"/sign-in"},r.a.createElement(U,{onLogin:function(e){var t=e.email,n=e.password,a=e.resetForm;return Z(t,n).then(function(e){e&&e.token&&(localStorage.setItem("jwt",e.token),pe(e.token),a())}).catch(function(e){console.log(e)})}})),r.a.createElement(f,{exact:!0,path:"/",loggedIn:Q,userData:ee,component:_,onEditProfile:function(){h(!0)},onAddPlace:function(){O(!0)},onEditAvatar:function(){o(!0)},onCardClick:function(e){x(e)},onCardLike:function(e){var t=e.likes.some(function(e){return e._id===D._id});S.toggleLike(e._id,t).then(function(t){B(function(n){return n.map(function(n){return n._id===e._id?t:n})})}).catch(function(e){console.log(e)})},onCardDelete:function(e){S.deleteCard(e._id).then(function(){B(function(t){return t.filter(function(t){return t._id!==e._id})})}).catch(function(e){console.log(e)})},cards:F}),r.a.createElement(p.b,{path:"*"},Q?r.a.createElement(p.a,{to:"/"}):r.a.createElement(p.a,{to:"/sign-in"}))),r.a.createElement(p.b,{render:function(e){var t=e.location;return"/sign-up"!==t.pathname&&"/sign-in"!==t.pathname&&r.a.createElement(v,null)}}),r.a.createElement(I,{isOpen:n,onClose:me,onUpdateAvatar:function(e){S.changeAvatar(e).then(function(e){H(e),me()}).catch(function(e){console.log(e)})}}),r.a.createElement(P,{isOpen:m,onClose:me,onUpdateUser:function(e){S.editProfile(e).then(function(e){H(e),me()}).catch(function(e){console.log(e)})}}),r.a.createElement(X,{isOpen:C,onClose:me,onAddPlace:function(e){S.addNewCard(e).then(function(e){B([e].concat(Object(l.a)(F))),me()}).catch(function(e){console.log(e)})}}),r.a.createElement(y,{name:"confirm",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",onClose:me}," "),r.a.createElement(N,{card:j,onClose:me}),r.a.createElement(A,{onClose:me,isOpen:re,isRegistred:le}))))},G=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,103)).then(function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),o(e),i(e)})};i.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(c.a,null,r.a.createElement(H,null)))),G()},19:function(e,t,n){e.exports=n.p+"static/media/header__logo.7baba3c1.svg"},20:function(e,t){e.exports="data:image/png;base64,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"},21:function(e,t){e.exports="data:image/png;base64,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"},26:function(e,t,n){e.exports=n(102)},35:function(e,t,n){}},[[26,3,2]]]);
//# sourceMappingURL=main.7204d9bf.chunk.js.map