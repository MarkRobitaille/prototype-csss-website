(function(t){function e(e){for(var s,r,i=e[0],c=e[1],l=e[2],m=0,b=[];m<i.length;m++)r=i[m],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&b.push(o[r][0]),o[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(b.length)b.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,i=1;i<a.length;i++){var c=a[i];0!==o[c]&&(s=!1)}s&&(n.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},o={app:0},n=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("64a9"),o=a.n(s);o.a},"0762":function(t,e,a){"use strict";var s=a("c5bd"),o=a.n(s);o.a},"114b":function(t,e,a){t.exports=a.p+"img/events-slide-1.625a2d6e.jpg"},"21ff":function(t,e,a){t.exports=a.p+"img/ahmed.aa06cde4.jpg"},"3aa2":function(t,e,a){t.exports=a.p+"img/mark.bed87c07.jpg"},"4f24":function(t,e,a){"use strict";var s=a("aa6b"),o=a.n(s);o.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var s=a("2b0e"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ml-0",attrs:{id:"app"}},[s("b-navbar",{staticClass:"navigator",attrs:{toggleable:"sm",fixed:"top"}},[s("b-navbar-brand",{attrs:{to:"/"}},[s("b-img",{staticClass:"mr-2",attrs:{src:a("91ba"),height:"50px"}}),t._v("UManitoba CSSA\n    ")],1),s("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),s("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[s("b-navbar-nav",[s("b-nav-item",{staticClass:"mt-0 mb-0 ml-0 mr-0",attrs:{to:"/about"}},[t._v("About")]),s("b-nav-item",{staticClass:"mt-0 mb-0 ml-0 mr-0",attrs:{to:"/events"}},[t._v("Events")]),s("b-nav-item",{staticClass:"mt-0 mb-0 ml-0 mr-0",attrs:{to:"/execs"}},[t._v("Execs")])],1),s("b-navbar-nav",{staticClass:"ml-auto"},[s("b-nav-item",{staticClass:"mt-0 mb-0 ml-0 mr-0",attrs:{to:"/contact"}},[t._v("Contact Us")])],1)],1)],1),s("transition",{attrs:{name:"fade",mode:"out-in"}},[s("router-view",{staticClass:"ml-0 mr-0 pages"})],1)],1)},n=[],r={name:"app",components:{}},i=r,c=(a("034f"),a("2877")),l=Object(c["a"])(i,o,n,!1,null,null,null),u=l.exports,m=a("5f5b"),b=(a("f9e3"),a("2dd8"),a("8c4f")),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{staticClass:"page-image",attrs:{fluid:""}},[a("b-row",{staticClass:"image-text",attrs:{"align-h":"center"}},[a("b-col",{attrs:{sm:"11"}},[a("h2",[t._v("Welcome to the website of University of Manitoba's Computer Science Students' Association!")]),a("p",[t._v("Join us in room E1-586 and follow us on social media.")]),a("Footer",{attrs:{variant:"light"}})],1)],1)],1)},f=[],p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{attrs:{fluid:""}},[a("a",{staticClass:"mr-4",attrs:{href:"https://umanitobacssa.slack.com/signup"}},[a("font-awesome-icon",{attrs:{icon:["fab","slack"],size:"2x"}})],1),a("a",{staticClass:"mr-4",attrs:{href:"https://facebook.com/pg/uofmcssa"}},[a("font-awesome-icon",{attrs:{icon:["fab","facebook-square"],size:"2x"}})],1),a("a",{staticClass:"mr-4",attrs:{href:"https://instagram.com/umanitobacssa/"}},[a("font-awesome-icon",{attrs:{icon:["fab","instagram"],size:"2x"}})],1),a("a",{attrs:{href:"mailto:umanitobacssa@gmail.com"}},[a("font-awesome-icon",{attrs:{icon:["fas","envelope"],size:"2x"}})],1)])},h=[],g={name:"Footer",props:{variant:{type:String,required:!1}},computed:{"--color":function(){var t;return t=this.variant&&"light"==this.variant?"white":"black",t}}},v=g,w=(a("0762"),Object(c["a"])(v,p,h,!1,null,"786a97d7",null)),x=w.exports,C={name:"Homepage",data:function(){return{}},components:{Footer:x}},S=C,_=(a("4f24"),Object(c["a"])(S,d,f,!1,null,"2b92a803",null)),k=_.exports,y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-container",{attrs:{fluid:""}},[s("b-row",{attrs:{"align-h":"center"}},[s("b-col",{staticClass:"pt-2 pb-2 page-content",attrs:{sm:"11"}},[s("b-jumbotron",{staticClass:"mt-2",attrs:{header:"About",fluid:""}},[t._v("Learn who were are and what we do.")]),s("b-row",{attrs:{"align-h":"center"}},[s("b-col",{attrs:{sm:"10"}},[s("p",[t._v("The Computer Science Students' Association (CSSA) is welcome to all students and is founded on the needs of Computer Science students. \n            We provide students with a safe place to study, converse, and relax. Our group allows the voices of students to be heard by our department at their meetings. \n            We also coordinate events for students to participate in on a regular basis.")]),s("p",[t._v("Our lounge is located in EITC E1-586, we'd love to see you there.")]),s("p",[t._v("You can read our constitution "),s("a",{attrs:{href:"https://communitylink.umanitoba.ca/organization/CompSci/documents/view/18774"}},[t._v("here")]),t._v(".")])])],1),s("b-row",[s("b-col",{staticClass:"mb-4",attrs:{sm:"12"}},[s("b-img",{attrs:{src:a("d655"),fluid:""}})],1)],1),s("b-row",[s("b-col",[s("Footer")],1)],1)],1)],1)],1)},E=[],j={name:"About",data:function(){return{}},components:{Footer:x}},A=j,M=Object(c["a"])(A,y,E,!1,null,"c68cbb32",null),P=M.exports,O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-container",{attrs:{fluid:""}},[s("b-row",{attrs:{"align-h":"center"}},[s("b-col",{staticClass:"pt-2 pb-2 page-content",attrs:{sm:"11"}},[s("b-jumbotron",{staticClass:"mt-2",attrs:{header:"Events",fluid:""}},[t._v("Meet new people and learn new things at one of our events.")]),s("b-row",{attrs:{"align-h":"center"}},[s("b-col",{attrs:{sm:"12"}},[s("b-carousel",{attrs:{interval:4e3,controls:"",indicators:"",background:"#dadada","img-width":"1024","img-height":"480"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[s("b-carousel-slide",{attrs:{"img-src":a("114b")}}),s("b-carousel-slide",{attrs:{"img-src":a("9ccd")}}),s("b-carousel-slide",{attrs:{"img-src":a("dc3d")}})],1)],1)],1),s("b-row",{staticClass:"mt-4"},[s("b-col",[s("h2",[t._v("Upcoming Events")])])],1),s("b-row",{staticClass:"mt-2 text-left",attrs:{"align-h":"center"}},[s("b-col",{attrs:{sm:"8"}},[s("b-card-group",{attrs:{deck:""}},[s("b-card",{attrs:{title:"Game Jam",header:"Date: November 8th-10th, 2019",footer:"Location: EITC E2-XXX"}},[s("b-card-text",[t._v("Are you interested in making games? Join us on the first weekend of reading week to take part in CSSA's first game jam. Find a group or work independently to create a game! Beginners encouraged to come!")])],1),s("b-card",{attrs:{title:"Programming Contest",header:"Date: Winter 2020",footer:"Location: To Be Decided"}},[s("b-card-text",[t._v("Join us on our annual programming contest! Solve problems independently, with difficulty ranging from easy to hard. All students welcome!")])],1)],1)],1)],1),s("b-row",{staticClass:"mt-3"},[s("b-col",[s("p",[t._v("Events that are done more regularly are announced on our Slack. Follow us on social media to be up to date on new and upcoming events!")])])],1),s("b-row",{staticClass:"mt-4"},[s("b-col",[s("h2",[t._v("Past Events")])])],1),s("b-row",{staticClass:"mt-2 text-left",attrs:{"align-h":"center"}},[s("b-col",{attrs:{sm:"4"}},[s("b-card-group",{attrs:{deck:""}},[s("b-card",{attrs:{title:"CS Mixer",header:"Date: September 20th, 2019",footer:"Location: EITC E2-609"}},[s("b-card-text",[t._v("Meet and mingle with other students interested in Computer Science. Organized in collaboration by CSSA, .devClub, UM WICS, and MISA. Brought to you by our sponsor, SkipTheDishes!")])],1)],1)],1)],1),s("b-row",{staticClass:"mt-4"},[s("b-col",[s("Footer")],1)],1)],1)],1)],1)},L=[],F={name:"Events",data:function(){return{slide:0,sliding:null}},components:{Footer:x},methods:{onSlideStart:function(){this.sliding=!0},onSlideEnd:function(){this.sliding=!1}}},U=F,T=Object(c["a"])(U,O,L,!1,null,"55fc4738",null),$=T.exports,V=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-container",{attrs:{fluid:""}},[s("b-row",{attrs:{"align-h":"center"}},[s("b-col",{staticClass:"pt-2 pb-2 page-content",attrs:{sm:"11"}},[s("b-jumbotron",{staticClass:"mt-2",attrs:{header:"Execs",fluid:""}},[t._v("Meet the people elected to run the Computer Science Students' Association.")]),s("b-row",{attrs:{"align-h":"center"}},[s("b-col",{attrs:{sm:"12"}},[s("b-card-group",{attrs:{deck:""}},[s("b-card",{staticClass:"mb-2 text-left",attrs:{"img-src":a("21ff"),title:"Ahmed Kidwai",header:"President","img-top":""}},[s("b-card-text",[t._v("Here is some sample text talking about Ahmed. Lots of text about how he's the President and thus has the authority to fire off the non-existant CS nukes. Truly powerful.")])],1),s("b-card",{staticClass:"mb-2 text-left",attrs:{"img-src":a("e972"),title:"Emanuel Wiens",header:"Vice-President (Lounge Affairs)","img-top":""}},[s("b-card-text",[t._v("Here is some sample text talking about Emanuel. Lots of text about how he's the Vice-President and knows everyone.")])],1),s("b-card",{staticClass:"mb-2 text-left",attrs:{"img-src":a("dfe0"),title:"Stephanie Chacon-Vega",header:"Vice-President (Accounting)","img-top":""}},[s("b-card-text",[t._v("Here is some sample text talking about Stephanie. Lots of text about how she's the Vice-President and super smart.")])],1)],1)],1)],1),s("b-row",{attrs:{"align-h":"center"}},[s("b-col",{attrs:{sm:"8"}},[s("b-card-group",{attrs:{deck:""}},[s("b-card",{staticClass:"mb-2 text-left",attrs:{"img-src":a("bf32"),title:"John Manning",header:"Vice-President (Public Relations)","img-top":""}},[s("b-card-text",[t._v("Here is some sample text talking about John. Lots of text about how he's the Vice-President and how he's a PR superstar.")])],1),s("b-card",{staticClass:"mb-2 text-left",attrs:{"img-src":a("3aa2"),title:"Mark Robitaille",header:"Vice-President (Social Media)","img-top":""}},[s("b-card-text",[t._v("Here is some sample text talking about Mark. Lots of text about how he's the Vice-President and how he doesn't believe that all 4 of us can be Vice-Presidents since it doesn't make sense.")])],1)],1)],1)],1),s("b-row",{staticClass:"mt-4"},[s("b-col",[s("Footer")],1)],1)],1)],1)],1)},B=[],I={name:"Execs",data:function(){return{}},components:{Footer:x}},J=I,z=Object(c["a"])(J,V,B,!1,null,"3b43adb4",null),H=z.exports,q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{attrs:{fluid:""}},[a("b-row",{attrs:{"align-h":"center"}},[a("b-col",{staticClass:"pt-2 pb-2 page-content",attrs:{sm:"11"}},[a("b-jumbotron",{staticClass:"mt-2",attrs:{header:"Contact Us",fluid:""}},[t._v("Fill in the form below or contact us via social media.")]),a("b-row",[a("b-col",[a("b-form-fieldset",{attrs:{disabled:t.formLoading}},[a("b-form-group",{attrs:{"label-cols":"4","label-cols-lg":"2",label:"First Name:"}},[a("b-form-input",{attrs:{required:"",placeholder:"Enter First Name"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),a("b-form-group",{attrs:{"label-cols":"4","label-cols-lg":"2",label:"Last Name:"}},[a("b-form-input",{attrs:{required:"",placeholder:"Enter Last Name"},model:{value:t.form.surname,callback:function(e){t.$set(t.form,"surname",e)},expression:"form.surname"}})],1),a("b-form-group",{attrs:{"label-cols":"4","label-cols-lg":"2",label:"Email:"}},[a("b-form-input",{attrs:{required:"",placeholder:"Enter Email"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),a("b-form-group",{attrs:{"label-cols":"4","label-cols-lg":"2",label:"Message:"}},[a("b-form-textarea",{attrs:{required:"",placeholder:"Enter Message",rows:"3","max-rows":"6"},model:{value:t.form.message,callback:function(e){t.$set(t.form,"message",e)},expression:"form.message"}})],1),a("b-row",{attrs:{"align-h":"center"}},[a("b-col",{attrs:{sm:"2"}},[a("b-button",{staticClass:"mt-1 mb-1",attrs:{type:"submit",variant:t.submitStatus,block:""},on:{click:function(e){return t.onSubmit()}}},[t._v("\n                  "+t._s(t.submitButton)+"\n                  "),t.formLoading?a("b-spinner",{staticClass:"ml-1",attrs:{variant:"light",small:""}}):t._e()],1)],1),a("b-col",{attrs:{sm:"2"}},[a("b-button",{staticClass:"mt-1 mb-1",attrs:{variant:"warning",block:""},on:{click:function(e){return t.onReset()}}},[t._v("Reset")])],1)],1)],1)],1)],1),a("b-row",[a("b-col",["success"==t.submitStatus?a("div",[t._v("Thank you for contacting the University of Manitoba's Computer Science Students' Association.")]):"danger"==t.submitStatus?a("div",[t._v("It appears there was an error submitting the form. Please try again or contact us via social media.")]):t._e()])],1),a("b-row",{staticClass:"mt-3"},[a("b-col",[a("Footer")],1)],1)],1)],1)],1)},D=[],N={name:"Events",data:function(){return{form:{name:"",surname:"",email:"",message:""},show:!0,formLoading:!1,submitButton:"Submit",submitStatus:"primary"}},components:{Footer:x},methods:{onSubmit:function(){var t=this;this.formLoading=!0,this.axios.post("https://formcarry.com/s/XaTDp9NyI6I",this.form).then((function(e){e.data&&"success"==e.data.status?(t.submitButton="Submitted",t.submitStatus="success"):(t.submitButton="Error",t.submitStatus="danger"),t.formLoading=!1})).catch((function(t){console.log(t)}))},onReset:function(){var t=this;this.form.name="",this.form.surname="",this.form.email="",this.form.message="",this.formLoading=!1,this.submitButton="Submit",this.submitStatus="primary",this.show=!1,this.$nextTick((function(){t.show=!0}))}}},R=N,W=Object(c["a"])(R,q,D,!1,null,"7d9e5820",null),X=W.exports,G=[{path:"/",component:k,name:"Homepage",meta:{title:"UManitoba CSSA"}},{path:"/about",component:P,name:"About",meta:{title:"About - UManitoba CSSA"}},{path:"/events",component:$,name:"Events",meta:{title:"Events - UManitoba CSSA"}},{path:"/execs",component:H,name:"Execs",meta:{title:"Execs - UManitoba CSSA"}},{path:"/contact",component:X,name:"Contact",meta:{title:"Contact Us - UManitoba CSSA"}}],K=G,Y=a("bc3a"),Q=a.n(Y),Z=a("a7fe"),tt=a.n(Z),et=a("ecee"),at=a("c074"),st=a("f2d1"),ot=a("ad3d");s["default"].use(m["a"]),s["default"].use(b["a"]);var nt=new b["a"]({routes:K});nt.beforeEach((function(t,e,a){t.meta.title?document.title=t.meta.title:document.title="UManitoba CSSA",a()})),s["default"].use(tt.a,Q.a),et["c"].add(at["a"],st["c"],st["a"],st["b"]),s["default"].component("font-awesome-icon",ot["a"]),s["default"].config.productionTip=!1,new s["default"]({router:nt,render:function(t){return t(u)}}).$mount("#app")},"64a9":function(t,e,a){},"91ba":function(t,e,a){t.exports=a.p+"img/logo-resized.a3fbd02b.png"},"9ccd":function(t,e,a){t.exports=a.p+"img/events-slide-2.85edd33a.jpg"},aa6b:function(t,e,a){},bf32:function(t,e,a){t.exports=a.p+"img/john.9d9c6ae9.jpg"},c5bd:function(t,e,a){},d655:function(t,e,a){t.exports=a.p+"img/about-image.b566a148.jpg"},dc3d:function(t,e,a){t.exports=a.p+"img/events-slide-3.8047b6ab.jpg"},dfe0:function(t,e,a){t.exports=a.p+"img/stephanie.b5f4b8c9.jpg"},e972:function(t,e,a){t.exports=a.p+"img/emanuel.329739d7.jpg"}});
//# sourceMappingURL=app.1c6f6f27.js.map