(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{28:function(e,t,a){},30:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(3),i=a.n(n),s=a(15),l=a.n(s),c=(a(28),a(4)),o=a.n(c),r=a(6),u=a(16),d=a(17),h=a(18),b=a(2),m=a(23),p=a(22),j=a.p+"static/media/smr.0e534e62.png",f=a(19),g=(a(30),a(20)),v=a.n(g),O=a(21),w=a(0),C=Object(f.a)("pk_test_51IWVXgLK0vLBTfXTBSMyEiRmQTzC14wWWTaKuJVoSvCeCeQtlHFWFSETdH0lebmaTg5UWAH01GZCqiWIYuWH4dzT00tjajonTm"),k=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).changeHandler=function(e){n.setState(Object(u.a)({},e.target.name,e.target.value));var t=O.validate(e.target.value);n.state.disable&&t&&n.setState({disable:!1}),n.state.disable||t||n.setState({disable:!0})},n.submitHandler=function(e){e.preventDefault(),console.log(n.state)},n.handleClick=Object(r.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C;case 2:e.sent.redirectToCheckout({mode:"payment",lineItems:[{price:"price_1IWsTeLK0vLBTfXTLTnSRPph",quantity:1}],successUrl:"https://shadowmiraclerecords.github.io/website/",cancelUrl:"https://shadowmiraclerecords.github.io/website/",shippingAddressCollection:{allowedCountries:["US"]}}).then(n.handleStripeResult);case 4:case"end":return e.stop()}}),e)}))),n.state={results:"",disable:!0,display:!0,email:"",total:0,items:{}},n.updateTheTotal=n.updateTheTotal.bind(Object(b.a)(n)),n.onChange=n.onChange.bind(Object(b.a)(n)),n.handleClick=n.handleClick.bind(Object(b.a)(n)),n.enableBtn=n.enableBtn.bind(Object(b.a)(n)),n.onSubmit=n.onSubmit.bind(Object(b.a)(n)),n.changeHandler=n.changeHandler.bind(Object(b.a)(n)),n.submitHandler=n.submitHandler.bind(Object(b.a)(n)),n.makeApiCall=n.makeApiCall.bind(Object(b.a)(n)),n}return Object(h.a)(a,[{key:"makeApiCall",value:function(){var e=Object(r.a)(o.a.mark((function e(){var t,a,n=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.state.email,"http://ec2-54-237-79-92.compute-1.amazonaws.com/write",a={email:t},v.a.post("http://ec2-54-237-79-92.compute-1.amazonaws.com/write",a).then((function(e){console.log(e),200==e.request.status&&n.setState({display:!1})})).catch((function(e){console.log(e)}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"updateTheTotal",value:function(){this.setState({total:this.state.total+50})}},{key:"onChange",value:function(e){console.log("Captcha value:",e)}},{key:"enableBtn",value:function(){document.getElementById("button1").disabled=!1}},{key:"onSubmit",value:function(e){document.getElementById("demo-form").submit()}},{key:"render",value:function(){var e,t=this.state,a=t.email,n=t.disable,i=t.display,s=(this.handleClick,this.makeApiCall);return e=i?Object(w.jsxs)("div",{children:["Sign up to hear more:",Object(w.jsx)("form",{name:"input",children:Object(w.jsx)("input",{type:"email",placeholder:"email",name:"email",value:a,onChange:this.changeHandler})}),Object(w.jsx)("button",{id:"testing",disabled:n,onClick:s,children:"Submit"})]}):Object(w.jsx)("div",{children:"Thanks for your info"}),Object(w.jsx)("div",{className:"App",children:Object(w.jsxs)("header",{className:"App-header",children:[Object(w.jsx)("img",{src:j,className:"App-logo",alt:"logo"}),e,Object(w.jsx)("iframe",{width:"75%",height:"160",scrolling:"no",frameBorder:"no",allow:"autoplay",src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1000565353&color=%23080808&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=false"})]})})}}]),a}(i.a.Component),T=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,51)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,l=t.getTTFB;a(e),n(e),i(e),s(e),l(e)}))};l.a.render(Object(w.jsx)(i.a.StrictMode,{children:Object(w.jsx)(k,{})}),document.getElementById("root")),T()}},[[50,1,2]]]);
//# sourceMappingURL=main.953c3887.chunk.js.map