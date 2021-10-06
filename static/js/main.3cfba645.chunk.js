(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{11:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(4),r=a.n(c),i=(a(11),a(2)),l=a(0);var o=function(){return Object(l.jsx)("header",{className:"header",children:Object(l.jsx)("a",{className:"header__logo",href:"https://ilyadedov-yandex.github.io/mesto-react/",target:"_self",rel:"noopener noreferrer"})})},u=a(5),d=a(6),j=new(function(){function e(t){Object(u.a)(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}return Object(d.a)(e,[{key:"getInitialInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._checkResponse)}},{key:"editProfileInfo",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(this._checkResponse)}},{key:"createNewCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"likeCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"dislikeCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"editAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._checkResponse)}},{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: ".concat(e.status))}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-27",headers:{authorization:"2d3e1cdc-e394-4bd9-a5ca-873b1a753e66","Content-Type":"application/json"}});var b=function(e){var t=e.card,a=e.onCardClick;return Object(l.jsxs)("li",{className:"element",children:[Object(l.jsx)("img",{onClick:function(){a(t)},className:"element__image",src:t.link,alt:t.name}),Object(l.jsx)("button",{type:"button",className:"element__delete-btn","aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443"}),Object(l.jsxs)("div",{className:"element__caption-container",children:[Object(l.jsx)("h2",{className:"element__caption",children:t.name}),Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{type:"button",className:"element__like-btn","aria-label":"\u041f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043b\u0430\u0439\u043a"}),Object(l.jsx)("p",{className:"element__like-counter",children:t.likes.length})]})]})]},t._id)};var h=function(){return Object(l.jsx)("div",{className:"Spinner"})},m=a.p+"static/media/profile__avatar-loading.42aaa181.gif";var p=function(e){var t=e.onEditProfile,a=e.onAddPlace,s=e.onEditAvatar,c=e.onCardClick,r=Object(n.useState)("..."),o=Object(i.a)(r,2),u=o[0],d=o[1],p=Object(n.useState)("..."),_=Object(i.a)(p,2),f=_[0],O=_[1],x=Object(n.useState)(m),N=Object(i.a)(x,2),v=N[0],k=N[1],g=Object(n.useState)([]),y=Object(i.a)(g,2),C=y[0],S=y[1],P=Object(n.useState)(!0),E=Object(i.a)(P,2),U=E[0],L=E[1];return Object(n.useEffect)((function(){Promise.all([j.getInitialInfo(),j.getInitialCards()]).then((function(e){var t=Object(i.a)(e,2),a=t[0],n=t[1];d(a.name),O(a.about),k(a.avatar),S(n),L(!1)})).catch((function(e){console.log(e)}))}),[]),Object(l.jsxs)("main",{className:"main",children:[Object(l.jsxs)("section",{className:"profile",children:[Object(l.jsxs)("div",{className:"profile__group",children:[Object(l.jsx)("img",{className:"profile__avatar",src:v,alt:"\u0410\u0432\u0430\u0442\u0430\u0440"}),Object(l.jsx)("div",{className:"profile__avatar-edit",onClick:s})]}),Object(l.jsxs)("div",{className:"profile__info",children:[Object(l.jsx)("h1",{className:"profile__title",children:u}),Object(l.jsx)("p",{className:"profile__subtitle",children:f}),Object(l.jsx)("button",{onClick:t,type:"button",className:"profile__edit-button","aria-label":"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u0440\u043e\u0444\u0430\u0439\u043b"})]}),Object(l.jsx)("button",{onClick:a,type:"button",className:"profile__add-button","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u0440\u043e\u0444\u0430\u0439\u043b"})]}),Object(l.jsx)("section",{className:"elements",children:U?Object(l.jsx)(h,{}):Object(l.jsx)("ul",{className:"elements__list",children:C.map((function(e){return Object(l.jsx)(b,{card:e,onCardClick:c})}))})})]})};var _=function(){return Object(l.jsx)("footer",{className:"footer",children:Object(l.jsx)("p",{className:"footer__copyright",lang:"en-GB",children:"\xa9 2021 Mesto Russia"})})};var f=function(e){var t=e.name,a=e.title,n=e.isOpen,s=e.onClose,c=e.children;return Object(l.jsx)("div",{className:"popup popup_type_".concat(t," ").concat(n?"popup_opened":""),children:Object(l.jsxs)("div",{className:"popup__container",children:[Object(l.jsx)("button",{onClick:s,type:"button",className:"popup__close-btn","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043f\u043e\u043f\u0430\u043f"}),Object(l.jsxs)("form",{className:"form",name:"".concat(t,"-form"),noValidate:!0,children:[Object(l.jsx)("h2",{className:"form__title",children:a}),c,Object(l.jsx)("button",{type:"submit",className:"form__save-btn",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})]})})};var O=function(e){var t=e.card,a=e.onClose;return Object(l.jsx)("div",{className:"popup popup_type_image ".concat(t?"popup_opened":""),children:Object(l.jsxs)("figure",{className:"figure",children:[Object(l.jsx)("button",{onClick:a,type:"button",className:"popup__close-btn","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043f\u043e\u043f\u0430\u043f"}),Object(l.jsx)("img",{className:"figure__image",src:t?t.link:"",alt:t?t.name:""}),Object(l.jsx)("figcaption",{className:"figure__caption",children:t?t.name:""})]})})};var x=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(!1),r=Object(i.a)(c,2),u=r[0],d=r[1],j=Object(n.useState)(!1),b=Object(i.a)(j,2),h=b[0],m=b[1],x=Object(n.useState)(null),N=Object(i.a)(x,2),v=N[0],k=N[1];function g(){m(!1),s(!1),d(!1),k(null)}return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)(o,{}),Object(l.jsx)(p,{onEditProfile:function(){s(!0)},onAddPlace:function(){d(!0)},onEditAvatar:function(){m(!0)},onCardClick:function(e){k(e)}}),Object(l.jsx)(_,{}),Object(l.jsxs)(f,{name:"edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:a,onClose:g,children:[Object(l.jsxs)("label",{className:"form__field",children:[Object(l.jsx)("input",{type:"text",name:"profile-name",placeholder:"\u0418\u043c\u044f",className:"form__input form__input_type_name",id:"name-input",required:!0,minLength:"2",maxLength:"40"}),Object(l.jsx)("span",{className:"form__input-error name-input-error"})]}),Object(l.jsxs)("label",{className:"form__field",children:[Object(l.jsx)("input",{type:"text",name:"profile-about",placeholder:"\u041e \u0441\u0435\u0431\u0435",className:"form__input form__input_type_about",id:"about-input",required:!0,minLength:"2",maxLength:"200"}),Object(l.jsx)("span",{className:"form__input-error about-input-error"})]})]}),Object(l.jsxs)(f,{name:"new-card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:u,onClose:g,children:[Object(l.jsxs)("label",{className:"form__field",children:[Object(l.jsx)("input",{type:"text",name:"card-name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",className:"form__input form__input_type_name",id:"card-name-input",required:!0,minLength:"2",maxLength:"30"}),Object(l.jsx)("span",{className:"form__input-error card-name-input-error"})]}),Object(l.jsxs)("label",{className:"form__field",children:[Object(l.jsx)("input",{type:"url",name:"card-link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",className:"form__input form__input_type_about",id:"card-link-input",required:!0}),Object(l.jsx)("span",{className:"form__input-error card-link-input-error"})]})]}),Object(l.jsx)(f,{name:"delete",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b"}),Object(l.jsx)(f,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:h,onClose:g,children:Object(l.jsxs)("label",{className:"form__field",children:[Object(l.jsx)("input",{type:"url",name:"avatar-link",placeholder:"\u0441\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",className:"form__input form__input_type_link",id:"avatar-link-input",required:!0}),Object(l.jsx)("span",{className:"form__input-error avatar-link-input-error"})]})}),Object(l.jsx)(O,{card:v,onClose:g})]})},N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,14)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))};r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root")),N()}},[[13,1,2]]]);
//# sourceMappingURL=main.3cfba645.chunk.js.map