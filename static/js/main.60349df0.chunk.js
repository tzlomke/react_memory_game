(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,name:"Alex Kamal",image:"https://vignette.wikia.nocookie.net/expanse/images/8/81/Alex_Kamal.jpg/revision/latest/scale-to-width-down/692?cb=20150712223953"},{id:2,name:"Amos Burton",image:"https://vignette.wikia.nocookie.net/expanse/images/a/aa/S02E07-WesChatham_as_AmosBurton_00c.jpg/revision/latest/scale-to-width-down/700?cb=20170708164229"},{id:3,name:"Naomi Nagata",image:"https://vignette.wikia.nocookie.net/expanse/images/d/d3/Naomi_Nagata.jpg/revision/latest/scale-to-width-down/692?cb=20150712223703"},{id:4,name:"James Holden",image:"https://vignette.wikia.nocookie.net/expanse/images/a/ae/S02E07-StevenStrait_as_JamesHolden_00c.jpg/revision/latest/scale-to-width-down/700?cb=20170708163541"},{id:5,name:"Josephus Miller",image:"https://vignette.wikia.nocookie.net/expanse/images/2/2d/Josephus_Aloisus_Miller.jpg/revision/latest/scale-to-width-down/692?cb=20150712224237"},{id:6,name:"Julie Mao",image:"https://vignette.wikia.nocookie.net/expanse/images/9/98/Julie_Mao.jpg/revision/latest/scale-to-width-down/692?cb=20150712224254"},{id:7,name:"Chrisjen Avasarala",image:"https://vignette.wikia.nocookie.net/expanse/images/4/4d/Chrisjen_Avasarala.jpg/revision/latest/scale-to-width-down/692?cb=20150712224303"},{id:8,name:"Anderson Dawes",image:"https://vignette.wikia.nocookie.net/expanse/images/0/0b/S01E03-JaredHarris_as_AndersonDawes_00.png/revision/latest?cb=20170416000446"},{id:9,name:"Fred Johnson",image:"https://vignette.wikia.nocookie.net/expanse/images/6/69/S02E07-ChadLColeman_as_FredJohnson_02c.jpg/revision/latest/scale-to-width-down/700?cb=20170708160459"},{id:10,name:"Anna Volovodov",image:"https://vignette.wikia.nocookie.net/expanse/images/a/a4/S03E07-ElizabethMitchell_as_AnnaVolovodov_00c.jpg/revision/latest/scale-to-width-down/700?cb=20180530215811"},{id:11,name:"Jules-Pierre Mao",image:"https://vignette.wikia.nocookie.net/expanse/images/2/22/Jules-Pierre_Mao_at_his_estate.jpg/revision/latest/scale-to-width-down/700?cb=20170405161417"},{id:12,name:"Camina Drummer",image:"https://vignette.wikia.nocookie.net/expanse/images/7/7d/Drummer.jpg/revision/latest/scale-to-width-down/699?cb=20170310183100"}]},,,function(e,t,a){e.exports=a(21)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(2),s=a.n(o),r=(a(15),a(3)),c=a(4),l=a(7),m=a(5),d=a(8);a(16);var g=function(e){return i.a.createElement("div",{className:"card"},i.a.createElement("div",{onClick:function(t){return e.guessClick(t,e.id)},className:"img-container"},i.a.createElement("img",{alt:e.name,src:e.image,id:e.id})))};a(17);var h=function(e){return i.a.createElement("div",{className:"wrapper"},e.children)};a(18);var w=function(e){return i.a.createElement("div",{className:"score-board"},i.a.createElement("h1",{className:"title"},"Memory Game"),i.a.createElement("div",{className:"score-board"},i.a.createElement("h2",{className:"score"},"Your Score: ",e.score," | Max Score: 12")))};a(19);var p=function(e){return i.a.createElement("div",{className:"modal-wrapper",style:{display:e.show?"block":"none"}},i.a.createElement("div",{className:"modal-header"},i.a.createElement("span",{className:"close-modal-btn",onClick:e.close},"X")),i.a.createElement("div",{className:"modal-body"},i.a.createElement("div",null,i.a.createElement("h2",{className:"modal-content"},e.modalContent),i.a.createElement("img",{className:"modal-image",src:e.imgSrc,alt:e.imgAlt}))),i.a.createElement("div",{className:"modal-footer"}))},u=a(6),v=(a(20),function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={cards:u,score:0,guessed:[],win:!1,show:!1,imgSrc:"http://oohlo.com/wp-content/uploads/2018/05/vlcsnap-2018-05-24-20h16m08s593-1024x574.png",imgAlt:"Loss Image",modalContent:i.a.createElement("strong",null,"Bummer! You've attempted to fly through the ring too fast. Now you're goo.")},a.guessClick=function(e){var t=a.state.cards,n=parseInt(e.target.id),o=a.state.score,s=a.state.guessed,r=a.state.win,c=a.state.imgSrc,l=a.state.imgAlt,m=a.state.modalContent,d=a.state.show;s.includes(n)?(s=[],o=0,d=!0):(s.push(n),o++),12===o&&(o=0,r=!0,c="https://vignette.wikia.nocookie.net/expanse/images/b/b1/Ringnetwork1.png/revision/latest/scale-to-width-down/1000?cb=20180615211721",l="Win Image",m=i.a.createElement("strong",null,"Congrats! You've opened the ring network!"),d=!0);for(var g=t.length-1;g>0;g--){var h=Math.floor(Math.random()*(g+1)),w=[t[h],t[g]];t[g]=w[0],t[h]=w[1]}a.setState({cards:t,score:o,guessed:s,win:r,show:d,imgSrc:c,imgAlt:l,modalContent:m})},a.closeModalHandler=function(){a.setState({show:!1})},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(h,null,i.a.createElement(w,{score:this.state.score}),this.state.cards.map(function(t){return i.a.createElement(g,{guessClick:e.guessClick,id:t.id,key:t.id,image:t.image,name:t.name})}),i.a.createElement(p,{show:this.state.show,close:this.closeModalHandler,imgSrc:this.state.imgSrc,imgAlt:this.state.imgAlt,modalContent:this.state.modalContent}))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.60349df0.chunk.js.map