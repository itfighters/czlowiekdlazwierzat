(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{437:function(e,t,a){e.exports=a(716)},442:function(e,t,a){},448:function(e,t){},450:function(e,t){},487:function(e,t){},488:function(e,t){},714:function(e,t,a){},716:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(69),i=a.n(r),c=(a(442),a(71)),l=a(93),s=a(67),u=a(29),m=a(30),d=a(32),h=a(31),p=a(33),f=a(399),g=a.n(f),b="AUTH_KEY";function v(){var e=localStorage.getItem(b);if(!e)return!1;var t=g.a.decode(e);if(t){var a=t.exp;return(new Date).getTime()<1e3*a}return!1}var E=a(167),y=function(e){var t=e.categories,a=e.account,n=e.addressFrom,o=e.addressTo,r=e.contactNumber,i=e.dateFrom,c=e.dateTo,l=Object(E.a)(e,["categories","account","addressFrom","addressTo","contactNumber","dateFrom","dateTo"]);return Object(s.a)({multichoiceCategories:t,checkboxKonto:a,adressStart:n,adressEnd:o,phone:r,dateStart:j(i),dateEnd:j(c)},l)};function j(e){return e?new Date(e):""}var w="https://pomagalnia.pl/api/",k="https://pomagalnia.pl/images",C="http://www.workingthedoors.co.uk/wp-content/themes/petsitter/images/job-placeholder.gif",O=w+"auction";function S(e){var t=new URL(O);return fetch(t+"/details?Id="+e).then(function(e){return e.json()})}var z=a(333),D=a(26),x=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(d.a)(this,Object(h.a)(t).call(this))).showPage=function(t){t>0&&t<=e.pages().length&&e.setState({page:t},e.loadAuctions)},e.nextPage=function(){return e.showPage(e.state.page+1)},e.previousPage=function(){return e.showPage(e.state.page-1)},e.deleteClicked=function(t){return e.setState({toBeDeleted:t,deleteConfirmOpen:!0})},e.state={values:[],totalCount:0,page:1,pageSize:5,isLoading:!1,deleteConfirmOpen:!1,toBeDeleted:null},e}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("table",{className:"ui celled padded table"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",{className:"two wide"},"Tytu\u0142"),o.a.createElement("th",{className:"four wide"},"Opis"),o.a.createElement("th",{className:"two wide"},"Wa\u017cna od"),o.a.createElement("th",{className:"two wide"},"Wa\u017cna do"),o.a.createElement("th",{className:"two wide"},"Widoczne"),o.a.createElement("th",{className:"two wide"}))),o.a.createElement("tbody",null,this.state.values.map(function(t){return o.a.createElement("tr",{key:t.id},o.a.createElement("td",null,t.title),o.a.createElement("td",null,t.description),o.a.createElement("td",null,new Date(t.dateFrom).toLocaleDateString()),o.a.createElement("td",null,new Date(t.dateTo).toLocaleDateString()),o.a.createElement("td",null,t.publish?"Tak":"Nie"),o.a.createElement("td",null,o.a.createElement("button",{className:"ui gray button",onClick:function(){e.props.history.push("/admin/edit/".concat(t.id))}},"Edytuj"),o.a.createElement("button",{className:"ui red button",onClick:e.deleteClicked.bind(e,t.id)},"Usu\u0144")))})),o.a.createElement("tfoot",null,o.a.createElement("tr",null,o.a.createElement("th",{colSpan:"6"},o.a.createElement("button",{className:"ui blue button",onClick:function(){e.props.history.push("/admin/add")}},"Dodaj"),o.a.createElement("div",{className:"ui right floated pagination menu"},o.a.createElement("a",{className:"icon item",onClick:this.previousPage},o.a.createElement("i",{className:"left chevron icon"})),this.pages(),o.a.createElement("a",{className:"icon item",onClick:this.nextPage},o.a.createElement("i",{className:"right chevron icon"}))),o.a.createElement("div",{className:"ui label total"},"Ca\u0142kowita ilo\u015b\u0107: ",this.state.totalCount))))),o.a.createElement(z.a,{open:this.state.deleteConfirmOpen,header:"Potwierdzenie",cancelButton:"Anuluj",confirmButton:"Potwierd\u017a",content:"Czy potwierdzasz usuni\u0119cie aukcji?",onCancel:function(){e.setState({toBeDeleted:null,deleteConfirmOpen:!1})},onConfirm:this.deleteConfirm.bind(this)}))}},{key:"componentDidMount",value:function(){this.loadAuctions()}},{key:"loadAuctions",value:function(){var e=this;this.setState({isLoading:!0}),function(e,t){var a=new URL(O+"/all"),n={page:e,pageSize:t};return Object.keys(n).forEach(function(e){return a.searchParams.append(e,n[e])}),fetch(a,{method:"get",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem(b))}})}(this.state.page,this.state.pageSize).then(function(e){return e.json()}).then(function(t){e.setState(Object(s.a)({isLoading:!1},t))})}},{key:"pages",value:function(){for(var e=[],t=this.state.totalCount/this.state.pageSize+1,a=1;a<t;a++)e.push(o.a.createElement("a",{key:a,onClick:this.showPage.bind(this,a),className:this.state.page==a?"active item":"item"},a));return e}},{key:"deleteConfirm",value:function(){var e=this;this.setState({toBeDeleted:null,deleteConfirmOpen:!1}),function(e){var t=new URL(O);return t.searchParams.append("id",e),fetch(t,{method:"delete",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem(b))}})}(this.state.toBeDeleted).then(function(t){t.ok?D.b.success("Usuni\u0119cie powiod\u0142o si\u0119"):D.b.error("Usuni\u0119cie nie powiod\u0142o si\u0119"),e.loadAuctions()})}}]),t}(o.a.Component),N=a(37),B=a.n(N),F=a(60),I=a(106),L=a(391),P=a(282),A=a(119),W=a(281),U=a(94),R=a(166),T=a(80),Z=a(286),K=a.n(Z),M=(a(712),function(e){function t(e){var a;Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).onChange=function(e,t){var n=t.name,o=t.value;a.setState(function(e){var t=e.form;return{form:Object(s.a)({},t,Object(I.a)({},n,o))}})},a.toggleChackBox=function(e,t){var n=t.name,o=t.checked;a.setState(function(e){var t=e.form;return{form:Object(s.a)({},t,Object(I.a)({},n,o))}})},a.formSubmitted=function(e){e.preventDefault();var t=a.state.form;a.props.onSubmit(t)},a.options=[{key:"klucz",text:"nazwa",value:"wartosc"}],a.uploadImage=function(e){var t=e.target.files;if(console.log(t[0]),t[0].size>10485760)D.b.error("Zdj\u0119cie jest za du\u017ce, maksymalny rozmiar zdj\u0119cia to ".concat(10," MB"));else{var n=new FileReader;n.onloadend=function(){a.setState(function(e){var a=e.form;return{form:Object(s.a)({},a,{image:n.result,cover:t[0]})}})},n.readAsDataURL(t[0])}};var n=a.props,o=n.form;return n.isUpdate&&(a.state={form:Object(s.a)({},o)}),a.state={categories:[],duringUpload:!1,uploadStatus:!1},a.props.auction?a.state.form=Object(s.a)({},a.props.auction):a.state.form={title:"",image:null,description:"",multichoiceCategories:[],siepomagaLink:"",checkboxKonto:!0,dateStart:a.getCurrentDate(),dateEnd:a.getDefaultEndDate(),phone:"",files:null,featured:!1,publish:!0,dotpay:!1,paypall:!1,currentImage:null},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"getCurrentDate",value:function(){return new Date}},{key:"getDefaultEndDate",value:function(){var e=new Date;return e.setFullYear(e.getFullYear()+1),e}},{key:"render",value:function(){var e=this,t=this.state.form,a=t.title,n=t.featured,r=t.image,i=t.description,c=t.multichoiceCategories,l=t.siepomagaLink,s=t.checkboxKonto,u=t.dateStart,m=t.dateEnd,d=t.publish,h=t.dotpay,p=t.paypall,f=t.currentImage,g=this.state.duringUpload,b=this.props.categories;return o.a.createElement(L.a,{onSubmit:this.formSubmitted,style:{marginBottom:"50px"}},o.a.createElement(L.a.Field,{control:P.a,name:"title",label:"Tytu\u0142",placeholder:"Tytu\u0142",maxlength:"300",value:a,onChange:this.onChange,required:!0}),o.a.createElement(L.a.Field,{label:"Wybierz zdj\u0119cie",control:P.a,placeholder:"Zdj\u0119cie...",name:"pic",type:"File",accept:"image/*",onChange:this.uploadImage}),(r||f)&&o.a.createElement(L.a.Field,null,o.a.createElement(A.a,{src:f&&!r?"".concat(k,"/")+f:r,size:"small",alt:"wybrane zdjecie",wrapped:!0,name:"image",value:r,onChange:this.onChange})),o.a.createElement(L.a.Field,{control:W.a,label:"Opis",maxlength:1500,placeholder:"Opis",name:"description",value:i,onChange:this.onChange,required:!0}),o.a.createElement(L.a.Field,{label:"Wybierz kategori\u0119",control:U.a,placeholder:"Kategorie",fluid:!0,multiple:!0,selection:!0,options:b,name:"multichoiceCategories",value:c,onChange:this.onChange,required:!0}),o.a.createElement(L.a.Field,{control:P.a,label:"Link do siepomaga",placeholder:"Link do siepomaga",name:"siepomagaLink",value:l,onChange:this.onChange}),o.a.createElement(L.a.Field,{toggle:!0,control:R.a,label:"Dotpay",name:"dotpay",checked:h,onChange:this.toggleChackBox})," ",o.a.createElement(L.a.Field,{toggle:!0,control:R.a,label:"Paypall",name:"paypall",checked:p,onChange:this.toggleChackBox}),o.a.createElement(L.a.Group,{widths:"equal"},o.a.createElement(K.a,{label:"Data pocz\u0105tkowa",placeholder:"Data pocz\u0105tkowa",name:"dateStart",selected:u,onDateChange:function(t){e.onChange(void 0,{name:"dateStart",value:t})},required:!0}),o.a.createElement(K.a,{label:"Data ko\u0144cowa",placeholder:"Data ko\u0144cowa",name:"dateEnd",selected:m,minDate:u,onDateChange:function(t){e.onChange(void 0,{name:"dateEnd",value:t})},required:!0})),o.a.createElement(L.a.Field,{toggle:!0,control:R.a,label:"Widoczne konto",name:"checkboxKonto",checked:s,onChange:this.toggleChackBox}),o.a.createElement(L.a.Field,{toggle:!0,control:R.a,label:"Widoczne publicznie",name:"publish",checked:d,onChange:this.toggleChackBox}),o.a.createElement(L.a.Field,{toggle:!0,control:R.a,name:"featured",label:"Wyr\xf3\u017cniona zbi\xf3rka",checked:n,onChange:this.toggleChackBox}),o.a.createElement(T.a,{type:"submit",color:"green",size:"big",disabled:g},"Wy\u015blij"," "))}}]),t}(n.Component)),q=a(277),H=a(396),J=a(220),Y=a(395),_=w+"category";function G(){return fetch("".concat(_)).then(function(e){if(200!==e.status)throw new Error(e.status);return Promise.resolve(e.json())})}function $(e){var t=new URL(_),a=new FormData;for(var n in e)a.append(n,e[n]);return fetch(t,{method:"post",headers:{Authorization:"Bearer ".concat(localStorage.getItem(b))},body:a}).then(function(e){if(200!==e.status)throw new Error(e.status);return Promise.resolve(e)})}function Q(e){var t=new URL(_),a=new FormData;for(var n in e)a.append(n,e[n]);return fetch(t,{method:"put",headers:{Authorization:"Bearer ".concat(localStorage.getItem(b))},body:a}).then(function(e){if(200!==e.status)throw new Error(e.status);return Promise.resolve(e)})}var V=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).onSumbit=function(e){return a.setState({loading:!0}),e.id?function(e){var t=new URL(O),a=new FormData;for(var n in e)a.append(n,e[n]);return fetch(t,{method:"put",headers:{Authorization:"Bearer ".concat(localStorage.getItem(b))},body:a})}(e).then(function(e){if(200!==e.status)throw new Error(e.status);D.b.success("Zbi\xf3rka zosta\u0142a zaktualizowana"),a.props.history.push("/admin")}).catch(function(e){D.b.error("Aktualizacja nie powiod\u0142a si\u0119, spr\xf3buj ponownie p\xf3\u017aniej")}):function(e){var t=new URL(O),a=new FormData;for(var n in e)a.append(n,e[n]);return fetch(t,{method:"post",headers:{Authorization:"Bearer ".concat(localStorage.getItem(b))},body:a})}(e).then(function(e){if(200!==e.status)throw new Error(e.status);D.b.success("Zbi\xf3rka zosta\u0142a dodana"),a.props.history.push("/admin")}).catch(function(e){D.b.error("Dodawanie nie powiod\u0142o si\u0119, spr\xf3buj ponownie p\xf3\u017aniej"),a.setState({loading:!1})})},a.state={auction:null,categories:[],loading:!1},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(F.a)(B.a.mark(function e(){var t,a,n=this;return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=this.props.auctionId)){e.next=6;break}return e.next=4,S(t);case 4:a=e.sent,this.setState({auction:y(a)});case 6:G().then(function(e){return n.setState({loaded:!0,categories:e.map(function(e){return{key:e.id,text:e.name,value:e.id}})})});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.props.auctionId&&!this.state.auction||0===this.state.categories.length||this.state.loading?o.a.createElement(q.a,{active:!0},o.a.createElement(H.a,null,"Loading")):o.a.createElement(J.a,{textAlign:"center",verticalAlign:"middle",margintop:"10px"},o.a.createElement(J.a.Column,{style:{maxWidth:450}},o.a.createElement(Y.a,{as:"h2",color:"black",textAlign:"center"},this.props.header),o.a.createElement(M,{onSubmit:this.onSumbit,auction:this.state.auction,categories:this.state.categories})))}}]),t}(n.Component);function X(e){var t=e.history;return o.a.createElement(V,{header:"Dodaj now\u0105 zbi\xf3rk\u0119",history:t})}var ee=a(163),te=a(394),ae=function(e,t){var a=new URL("https://pomagalnia.pl/api/notification");return fetch(a,{method:"post",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem(b))},body:JSON.stringify({auctionId:e,type:t})})},ne=function(e){var t=new URL("https://pomagalnia.pl/api/notification"),a={auctionId:e};return Object.keys(a).forEach(function(e){return t.searchParams.append(e,a[e])}),fetch(t,{method:"get",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem(b))}})},oe=a(392),re=a(77),ie=a(39),ce=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).onSubmit=function(){return a.setState({confirmOpen:!0})},a.state={collapsed:!0,confirmOpen:!1},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.type,n=t.notificationDetails,r=t.submitConfirmed;return o.a.createElement(J.a,{textAlign:"center"},o.a.createElement(J.a.Column,{style:{maxWidth:500}},o.a.createElement("div",{style:{cursor:"pointer"}},o.a.createElement(Y.a,{as:"h4",color:"teal",textAlign:"center",onClick:function(){return e.setState({collapsed:!e.state.collapsed})}},o.a.createElement("p",null,"Dodaj notyfikacj\u0119 ",a," ",this.state.collapsed,o.a.createElement("i",{className:"angle icon "+(this.state.collapsed?"down":"up")})))),o.a.createElement("div",{style:{display:this.state.collapsed?"none":"block"}},o.a.createElement(oe.a,null,"Prenumeratorzy notyfikacji ",a,o.a.createElement("br",null),o.a.createElement(re.a,null,o.a.createElement(ie.a,{name:"users"}),null!=n.subscribed?n.subscribed:"obliczam...")),o.a.createElement(oe.a,null,"Liczba wys\u0142anych notyfikacji ",a," w tym miesi\u0105cu",o.a.createElement("br",null),o.a.createElement(re.a,null,o.a.createElement(ie.a,{name:"envelope open outline"}),null!=n.alreadySent&&null!=n.monthlyLimit?"".concat(n.alreadySent,"/").concat(n.monthlyLimit):"obliczam...")),o.a.createElement(T.a,{color:"teal",fluid:!0,size:"large",onClick:function(){return e.onSubmit()}},"Wy\u015blij"))),o.a.createElement(z.a,{open:this.state.confirmOpen,header:"Potwierd\u017a",confirmButton:"Wy\u015blij",cancelButton:"Anuluj",content:"Potwierdzasz wys\u0142anie notyfikacji?",onCancel:function(){return e.setState({confirmOpen:!1})},onConfirm:function(){e.setState({confirmOpen:!1}),r()}}))}}]),t}(n.Component),le=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={NotificationDetails:{Sms:{alreadySent:null,monthlyLimit:null,subscribed:null},Push:{alreadySent:null,monthlyLimit:null,subscribed:null},Email:{alreadySent:null,monthlyLimit:null,subscribed:null}}},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){this.loadNotificationDetails()}},{key:"loadNotificationDetails",value:function(){var e=this;ne(this.props.auctionId).then(function(e){return e.json()}).then(function(t){e.setState({NotificationDetails:t})})}},{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(ce,{type:"SMS",notificationDetails:this.state.NotificationDetails.Sms,submitConfirmed:function(){e.confirmed("sms")}}),o.a.createElement(ce,{type:"Email",notificationDetails:this.state.NotificationDetails.Email,submitConfirmed:function(){e.confirmed("email")}}),o.a.createElement(ce,{type:"Push",notificationDetails:this.state.NotificationDetails.Push,submitConfirmed:function(){e.confirmed("push")}}))}},{key:"confirmed",value:function(e){var t=this;ae(this.props.auctionId,e).then(function(e){e.ok?D.b.success("Poprawnie dodano notyfikacj\u0119"):D.b.error("Dodanie notyfikacji nie powiod\u0142o si\u0119"),t.loadNotificationDetails()})}}]),t}(n.Component);function se(e){var t=e.match,a=e.history,n=t.params.id;return o.a.createElement(ee.a,null,o.a.createElement(V,{header:"Edytuj dan\u0119 zbi\xf3rki",auctionId:n,history:a}),o.a.createElement(te.a,{horizontal:!0},"Lub"),o.a.createElement(le,{auctionId:Number(t.params.id)}))}var ue=a(393),me=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).confirmRemove=function(e){a.setState({toBeDeleted:e,deleteConfirmOpen:!0})},a.removeCategory=Object(F.a)(B.a.mark(function e(){return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a.setState({loading:!0,deleteConfirmOpen:!1}),e.next=4,t=a.state.toBeDeleted,fetch("".concat(_,"?id=").concat(t),{method:"delete"}).then(function(e){if(200!==e.status)throw new Error(e.status);return Promise.resolve(e)});case 4:a.setState({toBeDeleted:null}),a.getCategories(),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(0),a.setState({loading:!1,toBeDeleted:null,deleteConfirmOpen:!1}),console.log(e.t0),D.b.error("Nie uda\u0142o si\u0119 pobra\u0107 listy kategoii, spr\xf3buj ponownie p\xf3\u017aniej");case 13:case"end":return e.stop()}var t},e,null,[[0,8]])})),a.state={categories:[],loading:!0,toBeDeleted:null,deleteConfirmOpen:!1},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(F.a)(B.a.mark(function e(){return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:try{this.getCategories()}catch(t){this.setState({loading:!1}),console.log(t),D.b.error("Nie uda\u0142o si\u0119 pobra\u0107 listy kategoii, spr\xf3buj ponownie p\xf3\u017aniej")}case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getCategories",value:function(){var e=Object(F.a)(B.a.mark(function e(){var t;return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,G();case 3:t=e.sent,this.setState({categories:t,loading:!1});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;if(this.state.loading)return o.a.createElement(q.a,{active:!0},o.a.createElement(H.a,null,"Loading"));var t=this.state.categories.map(function(t){return o.a.createElement(ue.a.Row,{key:"category-".concat(t.id)},o.a.createElement(ue.a.Cell,null,t.name),o.a.createElement(ue.a.Cell,null,o.a.createElement(A.a,{src:t.image?"".concat(k,"/").concat(t.image):C,size:"small"})),o.a.createElement(ue.a.Cell,null,o.a.createElement(c.b,{to:"category/".concat(t.id)},o.a.createElement("button",{className:"ui gray button"},o.a.createElement(ie.a,{name:"edit"}),"Edytuj")),o.a.createElement("button",{className:"ui red button",onClick:function(){return e.confirmRemove(t.id)}},o.a.createElement(ie.a,{name:"trash"}),"Usu\u0144")))});return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.b,{to:"categories/add"},o.a.createElement("button",{className:"ui blue button"},o.a.createElement(ie.a,{name:"add"}),"dodaj")),o.a.createElement(ue.a,null,o.a.createElement(ue.a.Header,null,o.a.createElement(ue.a.Row,null,o.a.createElement(ue.a.HeaderCell,null,"Nazwa"),o.a.createElement(ue.a.HeaderCell,null,"Zdj\u0119cie"),o.a.createElement(ue.a.HeaderCell,null,"Akcje"))),o.a.createElement(ue.a.Body,null,t)),o.a.createElement(z.a,{open:this.state.deleteConfirmOpen,header:"Potwierdzenie",cancelButton:"Anuluj",confirmButton:"Potwierd\u017a",content:"Czy potwierdzasz usuni\u0119cie kategorii?",onCancel:function(){e.setState({toBeDeleted:null,deleteConfirmOpen:!1})},onConfirm:Object(F.a)(B.a.mark(function t(){return B.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.removeCategory();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t)}))}))}}]),t}(n.Component),de=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement(me,null)}}]),t}(n.Component),he=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).uploadImage=function(e){var t=e.target.files,n=new FileReader;n.onloadend=function(){a.setState({image:n.result,cover:t[0]})},n.readAsDataURL(t[0])},a.formSubmitted=function(e){e.preventDefault();var t={id:a.state.id,name:a.state.name,cover:a.state.cover};a.props.onSubmit(t)},a.onChange=function(e,t){var n=t.name,o=t.value;a.setState(Object(I.a)({},n,o))},a.props.category?a.state={name:a.props.category.name,image:a.props.category.image,currentImage:a.props.category.currentImage}:a.state={name:"",image:""},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.image,a=e.name,n=e.currentImage;return o.a.createElement(L.a,{onSubmit:this.formSubmitted},o.a.createElement(L.a.Field,{label:"Nazwa kategorii:",value:a,control:P.a,placeholder:"Nazwa...",name:"name",type:"text",onChange:this.onChange}),o.a.createElement(L.a.Field,{label:"Wybierz zdj\u0119cie",control:P.a,placeholder:"Zdj\u0119cie...",name:"pic",type:"File",accept:"image/*",onChange:this.uploadImage}),(t||n)&&o.a.createElement(L.a.Field,null,o.a.createElement(A.a,{src:(n&&!t?"".concat(k,"/")+n:t)||C,size:"medium",alt:"wybrane zdjecie",wrapped:!0,name:"image",value:t,onChange:this.onChange})),o.a.createElement(T.a,{type:"submit",color:"green",size:"big"},"Wy\u015blij"," "))}}]),t}(n.Component),pe=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).onSubmit=function(){var e=Object(F.a)(B.a.mark(function e(t){return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a.setState({loading:!0}),t.id=a.state.category.id,e.next=5,Q(t);case 5:a.setState({loading:!1}),D.b.success("Aktualizacja zako\u0144czona pomy\u015blnie"),a.props.history.push("/admin/categories"),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),a.setState({loading:!1}),D.b.error("Nie uda\u0142o si\u0119 zaktualizowa\u0107 kategorii, spr\xf3buj ponownie p\xf3\u017aniej");case 14:case"end":return e.stop()}},e,null,[[0,10]])}));return function(t){return e.apply(this,arguments)}}(),a.state={category:null,loading:!0},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(F.a)(B.a.mark(function e(){var t,a;return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=this.props.match.params.id,e.next=4,n=t,fetch("".concat(_,"/details?id=").concat(n)).then(function(e){if(200!==e.status)throw new Error(e.status);return Promise.resolve(e.json())});case 4:a=e.sent,this.setState({category:a,loading:!1}),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(0),this.setState({loading:!1}),console.log(e.t0),D.b.error("Nie uda\u0142o si\u0119 pobra\u0107 listy kategoii, spr\xf3buj ponownie p\xf3\u017aniej");case 13:case"end":return e.stop()}var n},e,this,[[0,8]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.loading?o.a.createElement(q.a,{active:!0},o.a.createElement(H.a,null,"Loading")):o.a.createElement(he,{onSubmit:this.onSubmit,category:this.state.category})}}]),t}(n.Component),fe=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).onSubmit=function(){var e=Object(F.a)(B.a.mark(function e(t){return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a.setState({loading:!0}),e.next=4,$(t);case 4:a.setState({loading:!1}),D.b.success("Kategoria zosta\u0142a dodana"),a.props.history.push("/admin/categories"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),a.setState({loading:!1}),D.b.error("Nie uda\u0142o si\u0119 doda\u0107 kategorii, spr\xf3buj ponownie p\xf3\u017aniej");case 13:case"end":return e.stop()}},e,null,[[0,9]])}));return function(t){return e.apply(this,arguments)}}(),a.state={loading:!1},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return this.state.loading?o.a.createElement(q.a,{active:!0},o.a.createElement(H.a,null,"Loading")):o.a.createElement(he,{onSubmit:this.onSubmit,category:this.state.category})}}]),t}(n.Component);function ge(){return o.a.createElement("div",{className:"ui menu menu-container"},o.a.createElement("div",{className:"left"},o.a.createElement("div",{className:"header item"},"Panel administracyjny"),o.a.createElement("a",{className:"item",href:"/admin/list"},"Zbi\xf3rki"),o.a.createElement("a",{className:"item",href:"/admin/categories"},"Kategorie")),o.a.createElement("div",{className:"right"},o.a.createElement(T.a,{primary:!0,onClick:function(){return localStorage.removeItem(b),void(window.location.href="/login")}},"Wyloguj")))}function be(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(ge,null),o.a.createElement(c.a,null,o.a.createElement(l.b,{exact:!0,path:"/admin",component:x}),o.a.createElement(l.b,{path:"/admin/list",component:x}),o.a.createElement(l.b,{path:"/admin/add",component:X}),o.a.createElement(l.b,{path:"/admin/edit/:id",component:se}),o.a.createElement(l.b,{path:"/admin/categories",exact:!0,component:de}),o.a.createElement(l.b,{path:"/admin/category/:id",exact:!0,component:pe}),o.a.createElement(l.b,{path:"/admin/categories/add",exact:!0,component:fe})))}var ve=a(225),Ee=function(e,t){return fetch("https://pomagalnia.pl/api/user/validate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({login:e,password:t})})},ye=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={logine:"",password:"",invalid_credentials:!1},a.handleSubmit=a.handleSubmit.bind(Object(ve.a)(a)),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"handleSubmit",value:function(e){var t=this;Ee(this.state.login,this.state.password).then(function(e){return e.json()}).then(function(e){e.token?(localStorage.setItem(b,e.token),t.props.history.push("/admin/list")):(t.setState({invalid_credentials:!0}),D.b.error("B\u0142\u0119dne dane logowania"))}),e.preventDefault()}},{key:"render",value:function(){var e=this;return v()?(this.props.history.push("/admin/list"),null):o.a.createElement(J.a,{textAlign:"center",style:{height:"100vh"},verticalAlign:"middle"},o.a.createElement(J.a.Column,{style:{maxWidth:450}},o.a.createElement(Y.a,{as:"h2",color:"black",textAlign:"center"},"Zaloguj si\u0119 jako administrator:"),o.a.createElement(L.a,{size:"large"},o.a.createElement(ee.a,{stacked:!0},o.a.createElement(L.a.Input,{fluid:!0,icon:"user",iconPosition:"left",placeholder:"Wprowad\u017a login",type:"text",value:this.state.login,onChange:function(t){e.setState({login:t.target.value})}}),o.a.createElement(L.a.Input,{fluid:!0,icon:"lock",iconPosition:"left",placeholder:"Wprowad\u017a has\u0142o",type:"password",value:this.state.password,onChange:function(t){e.setState({password:t.target.value})}}),o.a.createElement(T.a,{onClick:this.handleSubmit,color:"black",fluid:!0,size:"large"},"Zaloguj"))),o.a.createElement(oe.a,null,"Nie jeste\u015b administratorem? ",o.a.createElement(c.b,{to:"/"},"Wr\xf3\u0107 na stron\u0119 g\u0142\xf3wn\u0105"))))}}]),t}(o.a.Component);function je(e){var t=e.component,a=Object(E.a)(e,["component"]);return o.a.createElement(l.b,Object.assign({},a,{render:function(e){return v()?o.a.createElement(t,e):o.a.createElement(l.a,{to:{pathname:"/login",state:{from:e.location}}})}}))}a(714),a(715);var we=function(){return o.a.createElement(c.a,null,o.a.createElement(D.a,null),o.a.createElement("div",null,o.a.createElement(l.b,{path:"/login",component:ye}),o.a.createElement(l.b,{path:"/",exact:!0,component:ye}),o.a.createElement(je,{path:"/admin",component:be})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(we,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[437,1,2]]]);
//# sourceMappingURL=main.5864fc35.chunk.js.map