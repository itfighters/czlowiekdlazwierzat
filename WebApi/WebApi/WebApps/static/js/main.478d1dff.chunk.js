(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,a){e.exports=a(65)},40:function(e,t,a){},43:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(20),c=a.n(r),o=(a(40),a(8)),l=a(12),s=a(17),u=a.n(s),m=a(25),d=a(2),p=a(3),h=a(5),f=a(4),b=a(6),E=a(21),v=(a(31),"https://137.74.170.194/api/"),g=v+"subscription",y={Sms:1,Email:2,Push:3};function k(e,t,a){return fetch("".concat(g,"/subscribe"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:e,subscriptionType:t,categories:a})}).then(function(e){if(200!==e.status)throw new Error(e.status);return Promise.resolve(e)})}function w(e){return fetch("".concat(g,"/unsubscribe"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({contact:e})}).then(function(e){if(200!==e.status)throw new Error(e.status);return Promise.resolve(e)})}var j=v+"category",N=[];function O(){return 0===N.length?fetch(j).then(function(e){return e.json()}).then(function(e){return N=e,Promise.resolve(N)}):Promise.resolve(N)}var C=function(e){var t=e.visible,a=e.state,n=e.text,r=e.onClose,c=e.visibleTime;return t?(window.setTimeout(function(){r&&r()},c||3e3),i.a.createElement("div",{className:"toast "+a},n)):null};function z(){return i.a.createElement("div",{className:"loader"})}var S=function(e){var t=e.close;return i.a.createElement("div",null,"Header komponentus",i.a.createElement("button",{onClick:t},"x"))},T=function(){return i.a.createElement("div",null,"Footer")},x=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return this.props.visible?i.a.createElement("div",{className:"popup-container"},i.a.createElement("div",{className:"popup"},i.a.createElement(S,{close:this.props.close}),this.props.children,i.a.createElement(T,null))):null}}]),t}(n.Component),P=a(22),_=function(e){var t=e.submit,a=Object(n.useState)(""),r=Object(P.a)(a,2),c=r[0],o=r[1];return i.a.createElement("form",{onSubmit:function(e){!function(e){e.preventDefault(),t(c)}(e)}},i.a.createElement("div",null,"Na podany numer telefonu zostanie wys\u0142any 5 cyfrowy kod weryfikacyjny."),i.a.createElement("label",null,"Podaj kod z sms"),i.a.createElement("input",{type:"tel",pattern:"[0-9]{5}",placeholder:"5 cyfrowy kod",value:c,onChange:function(e){return o(e.target.value)},title:"5 cyfrowy kod",required:!0}),i.a.createElement("input",{type:"submit"}))},L=function(){return i.a.createElement("div",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")},Z={Confirm:"Confirm",Terms:"Terms"},D=(a(43),function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.text,a=e.checked,n=e.onChange,r=e.id;return i.a.createElement("label",{class:"checkbox-container"},t,i.a.createElement("input",{type:"checkbox",value:r,checked:a,onChange:n}),i.a.createElement("span",{class:"checkmark"}))}}]),t}(n.Component)),q=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(h.a)(this,Object(f.a)(t).call(this,e))).handleKeyDown=function(e){27===e.keyCode&&a.setState({visiblePopup:!1})},a.showInConsole=function(e){console.log(a.state),e.preventDefault()},a.acceptedChangeMail=function(){a.setState({acceptedMail:!a.state.acceptedMail})},a.acceptedChangeSms=function(){a.setState({acceptedSms:!a.state.acceptedSms})},a.handleChange=function(e){var t=Number.parseInt(e.target.value),n=a.state.checked;n.includes(t)?n=n.filter(function(e){return e!==t}):n.push(t),a.setState({checked:n})},a.toggleAll=function(e){if(e.target.checked){var t=a.state.categories.map(function(e){return e.id});a.setState({checked:t})}else a.setState({checked:[]})},a.updateMail=function(e){a.setState({email:e.target.value})},a.updateTel=function(e){a.setState({tel:e.target.value})},a.updateUnsubscribeTel=function(e){a.setState({unsubscribeTel:e.target.value})},a.updateunsubscribeEmail=function(e){a.setState({unsubscribeEmail:e.target.value})},a.showPopup=function(e){a.setState({visiblePopup:e})},a.closePopup=function(){a.setState({visiblePopup:!1})},a.showToast=function(e,t){a.setState({visibleToast:!0,toastText:e,toastClass:t})},a.onCloseToast=function(){a.setState({visibleToast:!1,toastText:"",toastClass:""})},a.confirmNumber=function(e){(function(e,t){return fetch("".concat(g,"/confirm"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e,contact:t})}).then(function(e){if(200!==e.status)throw new Error(e.status);return Promise.resolve(e)})})(e,a.state.tel).then(function(e){a.closePopup(),a.showToast("Zapisa\u0142e\u015b si\u0119!","success")}).catch(a.handleError)},a.submitMail=function(e){e.preventDefault();var t=a.state.checked;0!==t.length?k(a.state.email,y.Email,t).then(function(e){a.showToast("Na Twojego emaila zosta\u0142 wys\u0142any link do potwierdzenia adresu","success")}).catch(a.handleError):a.showToast("Prosz\u0119 wybierz z jakiej kategorii chcesz otrzymywa\u0107 powiadomienia","warning")},a.submitTel=function(e){e.preventDefault();var t=a.state.checked;0!==t.length?k(a.state.tel,y.Sms,t).then(function(e){a.setState({visiblePopup:Z.Confirm})}).catch(a.handleError):a.showToast("Prosz\u0119 wybierz z jakiej kategorii chcesz otrzymywa\u0107 powiadomienia","warning")},a.handleError=function(e){console.error(e),a.showToast("Wyst\u0105pi\u0142 b\u0142\u0105d: ".concat(e.Message||e),"error")},a.unsubscribeTel=function(e){e.preventDefault(),w(a.state.unsubscribeTel).then(function(){a.showToast("Zosta\u0142e\u015b wypisany z powiadomie\u0144","success")}).catch(a.handleError)},a.unsubscribeEmail=function(e){e.preventDefault(),w(a.state.unsubscribeEmail).then(function(){a.showToast("Zosta\u0142e\u015b wypisany z powiadomie\u0144","success")}).catch(a.handleError)},a.pushNotification=function(){var e=Object(m.a)(u.a.mark(function e(t){var n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==(n=a.state.checked).length){e.next=4;break}return a.showToast("Prosz\u0119 wybierz z jakiej kategorii chcesz otrzymywa\u0107 powiadomienia","warning"),e.abrupt("return");case 4:return e.next=6,a.askForPermissioToReceiveNotifications();case 6:k(e.sent,y.Push,n).then(function(){a.showToast("Zosta\u0142e\u015b zapisany na powiadomienia","success")}).catch(a.handleError);case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.askForPermissioToReceiveNotifications=Object(m.a)(u.a.mark(function e(){var t,a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=E.messaging(),e.next=4,t.requestPermission();case 4:return e.next=6,t.getToken();case 6:return a=e.sent,console.log("token:",a),e.abrupt("return",a);case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}},e,null,[[0,11]])})),a.state={checked:[],acceptedMail:!1,acceptedSms:!1,email:"",tel:"",unsubscribeTel:"",unsubscribeEmail:"",visiblePopup:!1,categories:[],visibleToast:!1,toastText:"",toastClass:""},a}return Object(b.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;O().then(function(t){e.setState({categories:t})}),document.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this;if(0===this.state.categories.length)return i.a.createElement(z,null);var t=this.state.categories.map(function(t){return i.a.createElement(D,{key:"category-key-"+t.id,id:t.id,text:t.name,checked:e.state.checked.includes(t.id),onChange:e.handleChange})});return i.a.createElement("article",{className:"signup-page"},i.a.createElement("section",{className:"sign-to"},i.a.createElement("h1",null,"ZAPISZ SI\u0118 NA POWIADOMIENIA"),i.a.createElement("div",{className:"notofications-description"},i.a.createElement("div",{className:"description-part"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),i.a.createElement("div",{className:"description-part"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."))),i.a.createElement("section",{className:"notification-section"},i.a.createElement("div",{className:"header"},i.a.createElement("h1",null,"KROK 1 "),i.a.createElement("p",null,"Wybierz kategorie powiadomie\u0144 jakie chcesz otrzymywa\u0107")),i.a.createElement("div",{className:"content"},i.a.createElement("form",{className:"category-checkboxes"},i.a.createElement(D,{text:"ZAZNACZ WSZYSTKO",onChange:this.toggleAll}),t))),i.a.createElement("section",{className:"notification-section"},i.a.createElement("div",{className:"header"},i.a.createElement("h1",null,"KROK 2 "),i.a.createElement("p",null,"Wybierz w jaki spos\xf3b chcesz odbiera\u0107 powiadomienia")),i.a.createElement("div",{className:"content"},i.a.createElement("form",{className:"category-checkboxes"},i.a.createElement(D,{text:"ZAZNACZ WSZYSTKO",onChange:this.toggleAll}),t))),i.a.createElement("section",{className:"step-two"},i.a.createElement("div",{className:"step-two-description"},i.a.createElement("section",null,i.a.createElement("h1",null,"KROK 2"),i.a.createElement("p",null,"wybierz w jaki spos\xf3b chcesz odbiera\u0107 powiadomienia")),i.a.createElement("div",null)),i.a.createElement("div",{className:"flex"},i.a.createElement("div",{className:"email-container"},i.a.createElement("form",{onSubmit:this.submitMail},i.a.createElement("h6",null,"Podaj nam sw\xf3j adres email, aby otrzymywa\u0107 powiadomienia mailowe"," "),i.a.createElement("input",{type:"email",placeholder:"mail",onChange:this.updateMail,value:this.state.email,required:!0}),i.a.createElement("label",null,i.a.createElement("input",{type:"checkbox",defaultChecked:this.state.acceptedMail,onChange:this.acceptedChangeMail,required:!0}),"Akceptuj"),i.a.createElement("span",{className:"terms",onClick:function(){return e.showPopup(Z.Terms)}}," ","regulamin"),i.a.createElement("br",null),i.a.createElement("button",{type:"submit"},"Wy\u015blij"))),i.a.createElement("div",{className:"sms-container"},i.a.createElement("form",{onSubmit:this.submitTel},i.a.createElement("h6",null,"Podaj nam sw\xf3j numer telefonu, aby otrzymywa\u0107 powiadomienia sms"," "),i.a.createElement("input",{type:"tel",placeholder:"telefon",title:"format: 123456789",pattern:"[0-9]{9}",onChange:this.updateTel,value:this.state.tel,required:!0}),i.a.createElement("label",null,i.a.createElement("input",{type:"checkbox",defaultChecked:this.state.acceptedSms,onChange:this.acceptedChangeSms,required:!0}),"Akceptuj"),i.a.createElement("span",{className:"terms",onClick:function(){return e.showPopup(Z.Terms)}}," ","regulamin"),i.a.createElement("br",null),i.a.createElement("button",{type:"submit"},"Wy\u015blij"))),i.a.createElement("div",{className:"notifications-container"},i.a.createElement("section",null,i.a.createElement("h6",null,"Zapisz si\u0119 na push notification"),i.a.createElement("button",{onClick:this.pushNotification},"Zapisz si\u0119!"))))),i.a.createElement("section",{className:"resignation"},i.a.createElement("div",{className:"resignation-description"},i.a.createElement("section",null,i.a.createElement("h1",null,"Rezygnacja"),i.a.createElement("p",null,"Aby zrezygnowa z powiadomie\u0144 e-mail lub SMS podaj sw\xf3j adres e-mail lub numer telefonu."))),i.a.createElement("div",{className:"resignation-email"},i.a.createElement("form",{onSubmit:this.unsubscribeEmail},i.a.createElement("input",{type:"email",placeholder:"mail",onChange:this.updateunsubscribeEmail,value:this.state.unsubscribeEmail,required:!0}),i.a.createElement("div",null,"CAPTCHA"),i.a.createElement("button",{type:"submit"},"Wy\u015blij"))),i.a.createElement("div",{className:"resignation-phone"},i.a.createElement("form",{onSubmit:this.unsubscribeTel},i.a.createElement("input",{type:"tel",pattern:"[0-9]{9}",placeholder:"telefon",title:"format: 123456789",onChange:this.updateUnsubscribeTel,value:this.state.unsubscribeTel,required:!0}),i.a.createElement("div",null," CAPTCHA "),i.a.createElement("button",{type:"submit"},"Wy\u015blij")))),i.a.createElement(x,{visible:this.state.visiblePopup,close:this.closePopup},this.state.visiblePopup===Z.Confirm&&i.a.createElement(_,{submit:this.confirmNumber}),this.state.visiblePopup===Z.Terms&&i.a.createElement(L,null)),i.a.createElement(C,{visible:this.state.visibleToast,state:this.state.toastClass,text:this.state.toastText,onClose:this.onCloseToast}))}}]),t}(n.Component),A=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.tile,t="/details/"+e.id,a=e.image?e.image:"https://scontent.fktw2-1.fna.fbcdn.net/v/t1.0-9/64655462_1336903539792370_4061525725994287104_n.jpg?_nc_cat=111&_nc_oc=AQk6tNPlxoTLxBlZtYVB9BvBWMYzGGZGYt7yEFwd2yPB6GLvHNIIGhprq1Z2-w267cU&_nc_ht=scontent.fktw2-1.fna&oh=605fffdae21901970365e0b162c08b76&oe=5D895534";return i.a.createElement("div",{className:"collect-tile"},i.a.createElement(o.b,{to:t},i.a.createElement("div",null,i.a.createElement("img",{src:a,alt:"obrazek zbi\xf3rki"}),i.a.createElement("h2",{className:"title"},e.title),i.a.createElement("h4",{className:"description"},e.description))))}}]),t}(n.Component),I=v+"auction";function M(){return i.a.createElement("div",null,"Nie uda\u0142o si\u0119 pobra\u0107 listy zbi\xf3rek")}var B=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(h.a)(this,Object(f.a)(t).call(this,e))).state={tiles:[],error:!1,isLoading:!0},a}return Object(b.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(I,"/featured?count=6")).then(function(e){return e.json()}).then(function(t){var a=t.sort(function(e,t){return new Date(e.dateTo)-new Date(t.dateTo)}).slice(0,6);e.setState({tiles:a,error:!1,isLoading:!1})}).catch(function(){e.setState({tiles:[],error:!0,isLoading:!1})})}},{key:"render",value:function(){var e=this.state,t=e.tiles,a=e.error;if(e.isLoading)return i.a.createElement(z,null);if(a)return i.a.createElement(M,null);if(!t||0===t.length)return i.a.createElement("div",null,"Brak zbi\xf3rek");var n=t.map(function(e){return i.a.createElement(A,{tile:e,key:e.id})});return i.a.createElement("div",{className:"collections-list"},n)}}]),t}(n.Component);function G(){return i.a.createElement("div",{className:"home-page"},i.a.createElement("h1",null,"Zbi\xf3rki"),i.a.createElement(B,null))}function W(){return i.a.createElement("h1",null,"Notyfikacje")}var K=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return i.a.createElement("section",{className:"bottom-footer"},i.a.createElement("div",{className:"contact-container"},i.a.createElement("div",null,i.a.createElement("p",{className:"contact-name"},"Fundacja"),i.a.createElement("p",{className:"contact-name"},"Cz\u0142owiek Dla Zawierz\u0105t"),i.a.createElement("p",null,"\u0141\u0119tkowice Kolonia 59"),i.a.createElement("p",null,"32-107 Radziemice")),i.a.createElement("div",null,i.a.createElement("p",null,i.a.createElement("a",{href:"tel:+48783553197"},"+48783553197")),i.a.createElement("p",null,i.a.createElement("a",{href:"tel:+48534884174"},"+48534884174"))),i.a.createElement("div",null,i.a.createElement("p",null,i.a.createElement("a",{href:"mailto:adres e-mail"},"czlowiekdlazwierzat@gmail.com"))),i.a.createElement("div",null,i.a.createElement("p",null,"NIP")),i.a.createElement("div",{className:"facebook-icon"},i.a.createElement("a",{href:"https://www.facebook.com/fundacjaczlowiekdlazwierzat",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{src:"/assets/facebook-box.svg",alt:"Logo-facebook"})))))}}]),t}(n.Component),Y=a(34),R=a.n(Y),U=(a(63),a(64),function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(h.a)(this,Object(f.a)(t).call(this,e))).Carousel=i.a.createRef(),a}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e={"it_fighters.png":"https://itfighters.pl","avande.png":"https://www.avanade.com","play_sms.png":"https://playsms.org","pan_mi_kupi.png":"https://panmikupi.pl","kancelaria.png":"https://itfighters.pl","milomi.png":"https://www.facebook.com/milomi.magda/"},t=[];for(var a in e){var n=e[a];t.push(i.a.createElement("a",{key:"partner-"+a,href:n},i.a.createElement("img",{alt:"partner",src:"/assets/"+a})))}return i.a.createElement("section",{className:"top-footer"},i.a.createElement("h2",null,"PARTNERZY"),i.a.createElement("div",{className:"partners"},i.a.createElement(R.a,{dots:!0,infinite:!0,speed:500,slidesToShow:6,slidesToScroll:1,pauseOnHover:!0,centerPadding:"200px",responsive:[{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0,dots:!0,autoplay:!0,speed:2e3,autoplaySpeed:3e3,pauseOnHover:!0}}]},t)))}}]),t}(n.Component)),F=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return i.a.createElement("footer",null,i.a.createElement(U,null),i.a.createElement(K,null))}}]),t}(n.Component),H=Object(l.e)(function(e){var t=e.history,a=Object(n.useState)(-1!==window.location.href.indexOf("details")),r=Object(P.a)(a,2),c=r[0],l=r[1];return t.listen(function(e){l(-1!==e.pathname.indexOf("details"))}),i.a.createElement("header",{className:"main-header"},i.a.createElement(o.c,{className:"logo-nav",to:"/"},i.a.createElement("img",{alt:"ikona nag\u0142\xf3wka",src:"/assets/logo-fundacja.svg"})),i.a.createElement("nav",{className:"main-nav"},i.a.createElement("ul",null,c&&i.a.createElement(i.a.Fragment,null,i.a.createElement("li",{className:"back-button"},i.a.createElement(o.c,{to:"/tiles"},i.a.createElement("img",{alt:"ikona nag\u0142\xf3wka",src:"/assets/arrow-back.svg"}))),i.a.createElement("li",{className:"home-button"},i.a.createElement(o.c,{to:"/"},i.a.createElement("img",{alt:"ikona nag\u0142\xf3wka",src:"/assets/home.png"})))),i.a.createElement("li",null,i.a.createElement(o.c,{to:"/tiles"},"Lista zbi\xf3rek")),i.a.createElement("li",null,i.a.createElement(o.c,{className:"btn btn-primary",to:"/signup"},"Powiadomienia")))))}),J=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(h.a)(this,Object(f.a)(t).call(this,e))).state={error:!1,loading:!0,auction:{}},a}return Object(b.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=function(e){return fetch(I+"/details?Id="+e).then(function(e){return e.json()})}(this.props.match.params.id),a=O();Promise.all([t,a]).then(function(t){var a=t[0],n=t[1];a.categories=a.categories.map(function(e){return n.find(function(t){return t.id===e})}),e.setState({auction:a,loading:!1})}).catch(function(t){e.setState({error:!0,loading:!1})})}},{key:"render",value:function(){if(this.state.loading)return i.a.createElement(z,null);if(this.state.error)return i.a.createElement("div",null,"Niestety nie uda\u0142o si\u0119 wy\u015bwietli\u0107 strony. Spr\xf3buj ponownie p\xf3\u017aniej.");var e=this.state.auction.categories.map(function(e){return e&&e.id?i.a.createElement("div",{key:"category-"+e.id,className:"button-tile-item"},i.a.createElement("img",{src:e.src||"/assets/leczenie.svg",alt:"leczenie"}),i.a.createElement("span",{className:"txt"},i.a.createElement("div",null,e.name))):null});return i.a.createElement("article",{className:"article-details"},i.a.createElement("section",{className:"tile-details"},i.a.createElement("div",{className:"wrap-tile"},i.a.createElement("div",{className:"img"},i.a.createElement("img",{src:this.state.auction.image,alt:"zdj zbi\xf3rki"})),i.a.createElement("div",{className:"description"},i.a.createElement("h2",null,this.state.auction.title),i.a.createElement("p",null,this.state.auction.description))),i.a.createElement("div",{className:"buttons-tile"},e)),i.a.createElement("section",null,i.a.createElement("div",{className:"donate-title"},i.a.createElement("h1",null,"POM\xd3\u017b")),i.a.createElement("div",{className:"donate"},i.a.createElement("div",{className:"donate-buttons"},this.state.auction.siepomagaLink&&i.a.createElement("a",{href:this.state.auction.siepomagaLink,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{className:"btn btn-rounded siepomaga"})),this.state.auction.dotpayLink&&i.a.createElement("a",{href:this.state.auction.dotpayLink,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{className:"btn btn-rounded dotpay"})),this.state.auction.paypalLink&&i.a.createElement("a",{href:this.state.auction.paypalLink,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{className:"btn btn-rounded paypal"}))),i.a.createElement("div",{className:"donate-info"},i.a.createElement("span",null,"Fundacja Cz\u0142owiek dla Zwierz\u0105t Bank Sp\xf3\u0142dzielczy w S\u0142omnikach"," ",i.a.createElement("div",null,"78 86140001 0010 0147 5971 0001"))))))}}]),t}(i.a.Component),Q=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(i)))).onCategoryClick=function(e){(0,a.props.setCategory)(e)},a}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.category,n=t.isSelected,r=a.img?a.img:"https://scontent.fktw2-1.fna.fbcdn.net/v/t1.0-9/64655462_1336903539792370_4061525725994287104_n.jpg?_nc_cat=111&_nc_oc=AQk6tNPlxoTLxBlZtYVB9BvBWMYzGGZGYt7yEFwd2yPB6GLvHNIIGhprq1Z2-w267cU&_nc_ht=scontent.fktw2-1.fna&oh=605fffdae21901970365e0b162c08b76&oe=5D895534";return i.a.createElement("div",{className:"tile-category",onClick:function(){return e.onCategoryClick(a)}},i.a.createElement("div",{className:"img-row"},i.a.createElement("img",{src:r,alt:"potrzeba-img",height:"50",width:"50"})),i.a.createElement("p",{className:n?"category-selected":""},a.name),i.a.createElement("hr",null))}}]),t}(n.Component);function V(){return i.a.createElement("div",null,"Nie uda\u0142o si\u0119 pobra\u0107 listy kategorii")}var X=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(h.a)(this,Object(f.a)(t).call(this,e))).state={categoryData:void 0,error:!1,isLoading:!0},a}return Object(b.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;O().then(function(t){var a=t;e.setState({categoryData:a,error:!1,isLoading:!1})}).catch(function(){e.setState({categoryData:[],error:!0,isLoading:!1})})}},{key:"render",value:function(){var e=this.state,t=e.categoryData,a=e.error,n=e.isLoading,r=this.props,c=r.setCategory,o=r.selectedCategoryId;if(n)return i.a.createElement(z,null);if(a)return i.a.createElement(V,null);if(!t||0===t.length)return i.a.createElement("div",null,"Brak kategorii");var l=t.map(function(e){return i.a.createElement(Q,{category:e,key:e.id,setCategory:c,isSelected:e.id===o})});return i.a.createElement("section",null,i.a.createElement("div",{className:"inline-collection"},l))}}]),t}(n.Component),$=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.tile,t="/details/"+e.id,a=e.image?e.image:"https://scontent.fktw2-1.fna.fbcdn.net/v/t1.0-9/64655462_1336903539792370_4061525725994287104_n.jpg?_nc_cat=111&_nc_oc=AQk6tNPlxoTLxBlZtYVB9BvBWMYzGGZGYt7yEFwd2yPB6GLvHNIIGhprq1Z2-w267cU&_nc_ht=scontent.fktw2-1.fna&oh=605fffdae21901970365e0b162c08b76&oe=5D895534";return i.a.createElement(o.b,{to:t,className:"collect-tile"},i.a.createElement("div",null,i.a.createElement("img",{src:a,alt:"zdjecie-potrzeby"}),i.a.createElement("h2",{className:"title"},e.title),i.a.createElement("h4",{className:"description"},e.description)))}}]),t}(n.Component),ee=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(h.a)(this,Object(f.a)(t).call(this,e))).state={tiles:[],error:!1,isLoading:!0},a}return Object(b.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(I).then(function(e){return e.json()}).then(function(t){var a=t.values;e.setState({tiles:a,error:!1,isLoading:!1})}).catch(function(){e.setState({tiles:[],error:!0,isLoading:!1})})}},{key:"render",value:function(){var e,t=this.props.selectedCategoryId,a=this.state,n=a.tiles,r=a.error;return a.isLoading?i.a.createElement(z,null):r?i.a.createElement(M,null):(e=t?n.filter(function(e){return-1!==e.categories.indexOf(t)}).map(function(e){return i.a.createElement($,{tile:e,key:e.id})}):n.map(function(e){return i.a.createElement($,{tile:e,key:e.id})}))&&0!==e.length?i.a.createElement("div",{className:"collections-list"},e):i.a.createElement("div",{className:"empty-content"},"Brak zbi\xf3rek danego typu")}}]),t}(n.Component),te=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(h.a)(this,Object(f.a)(t).call(this,e))).setCategory=function(e){a.setState({selectedCategoryId:e.id})},a.state={selectedCategoryId:void 0},a}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.state.selectedCategoryId;return i.a.createElement("div",null,i.a.createElement(X,{setCategory:this.setCategory,selectedCategoryId:e}),i.a.createElement(ee,{selectedCategoryId:e}))}}]),t}(n.Component);var ae=function(){return i.a.createElement("div",null,i.a.createElement(o.a,null,i.a.createElement(H,null),i.a.createElement(l.a,{exact:!0,path:"/",component:G}),i.a.createElement(l.a,{path:"/notifications",component:W}),i.a.createElement(l.a,{path:"/details/:id",component:J}),i.a.createElement(l.a,{path:"/signUp",component:q}),i.a.createElement(l.a,{path:"/tiles",component:te})),i.a.createElement(F,null))};navigator.serviceWorker.addEventListener("message",function(e){console.log("message",e)}),c.a.render(i.a.createElement(ae,null),document.getElementById("root")),E.initializeApp({messagingSenderId:"228431140721"})}},[[35,1,2]]]);
//# sourceMappingURL=main.478d1dff.chunk.js.map