(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,n){e.exports=n(44)},44:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(19),l=n.n(i),u=n(3),c=n(4),o=n(6),r=n(5),h=n(2),m=n(7),d=(n(8),{margin:"0"}),b=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(o.a)(this,Object(r.a)(t).call(this,e))).state={difficulty:"Easy",displayMenu:!1},n.openMenu=n.openMenu.bind(Object(h.a)(n)),n.closeMenu=n.closeMenu.bind(Object(h.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(h.a)(n)),n.guessesCallback=n.guessesCallback.bind(Object(h.a)(n)),n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"openMenu",value:function(e){var t=this;e.preventDefault(),this.setState({displayMenu:!0},function(){document.addEventListener("click",t.closeMenu)})}},{key:"closeMenu",value:function(){var e=this;this.setState({displayMenu:!1},function(){document.removeEventListener("click",e.closeMenu)})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),this.setState({difficulty:e.target.getAttribute("value")},function(){t.guessesCallback()})}},{key:"guessesCallback",value:function(){var e=this.state.difficulty;this.props.callbackFromParent(e)}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("h2",{style:d,onClick:this.openMenu},"Difficulty"),s.a.createElement("p",null,this.state.difficulty)),s.a.createElement("div",null,this.state.displayMenu?s.a.createElement("ul",{className:"listStyle"},s.a.createElement("li",{value:"Easy",onClick:this.handleSubmit},"Easy"),s.a.createElement("li",{value:"Medium",onClick:this.handleSubmit},"Medium"),s.a.createElement("li",{value:"Hard",onClick:this.handleSubmit},"Hard")):null))}}]),t}(a.Component),g=function(e){function t(){return Object(u.a)(this,t),Object(o.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){document.body.style.backgroundColor="lavender"}},{key:"render",value:function(){return s.a.createElement("div",{className:"general startScreen"},s.a.createElement("h1",{className:"startHeading"},"BAGELS!"),s.a.createElement("div",{className:"instructions"},s.a.createElement("h2",null,"Instructions"),s.a.createElement("p",null,'\nWe will start with a three digit number. \nYou will attempt to guess the number, and\nI will respond to each guess as follows:\n\n\u2022 If the guess has no numbers correct, I\'ll respond: "Bagel."\n\u2022 For each digit the guess has correct, but in the wrong place, I\'ll respond: "Pico."\n\u2022 For each digit the guess has correct and in the correct place, I\'ll respond: "Fermi."\n\nAs an example, let\'s say that I thought of the secret number 489.\n\nGuess 1: 362 Bagel \u2014 no digit is correct.\nGuess 2: 820 Pico \u2014 the 8 is in the wrong place.\nGuess 3: 418 Pico Fermi \u2014 the 8 is in the wrong place, the 4 is in the correct place.\nGuess 4: 518 Pico \u2014 the 8 is in the wrong place.\nGuess 5: 487 Fermi Fermi \u2014 the 4 and 8 are in the correct place.\nGuess 6: 489 Fermi Fermi Fermi \u2014 all digits are in the correct place')),s.a.createElement("div",{className:"settings"},s.a.createElement(b,{callbackFromParent:this.props.callbackFromParent.bind(this)}),s.a.createElement("button",{className:"button",onClick:this.props.instructionsCallback.bind(this)},"Start Game")))}}]),t}(a.Component),p=n(9);function f(e){var t=Object(p.a)(String(e.randomNum)),n=Object(p.a)(String(e.guess)),a=[];return e.guess?(n.forEach(function(e,n){t.includes(e)&&(e===t[n]?(a.push("fermi"),delete t[n]):(a.push("pico"),delete t[n]))}),a.length||a.push("bagel"),3!==a.length||a.includes("pico")||e.winCallback(),s.a.createElement("h1",null,a.join(","))):null}var y={display:"flex",flexDirection:"column"},k={marginBottom:"5%"},v=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(o.a)(this,Object(r.a)(t).call(this,e))).state={input:"",guess:0},n.handleChange=n.handleChange.bind(Object(h.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(h.a)(n)),n.myFun=n.myFun.bind(Object(h.a)(n)),n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){document.body.style.backgroundColor="aqua"}},{key:"handleChange",value:function(e){this.setState({input:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),3===this.state.input.length&&Number.isInteger(Number(this.state.input))?this.setState({guess:this.state.input,input:""},function(){t.myFun()}):alert("guess should be 3 numbers")}},{key:"myFun",value:function(){this.props.callbackFromParent(this.props.guesses-1)}},{key:"render",value:function(){return console.log("submit guess is rendering"),console.log("guess: "+this.state.guess),s.a.createElement("div",{className:"general"},s.a.createElement("h1",null,"Guesses: ",this.props.guesses),s.a.createElement("h2",{style:k},"Guess a 3 digit number"),s.a.createElement("form",{style:y,onSubmit:this.handleSubmit},s.a.createElement("input",{className:"input",type:"text",value:this.state.input,onChange:this.handleChange}),s.a.createElement("input",{className:"button",type:"submit",value:"submit"})),s.a.createElement(f,{guess:this.state.guess,randomNum:this.props.randomNum,winCallback:this.props.winCallback.bind(this)}))}}]),t}(a.Component),E=function(e){function t(){return Object(u.a)(this,t),Object(o.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){document.body.style.backgroundColor="blue"}},{key:"render",value:function(){return!0===this.props.win?s.a.createElement("div",{className:"general"},s.a.createElement("h1",null,"You Win!"),s.a.createElement("button",{className:"button",onClick:this.props.PlayAgainCallback.bind(this)},"Play Again?")):s.a.createElement("div",null,s.a.createElement("h1",null,"You Lose"),s.a.createElement("button",{className:"button",onClick:this.props.PlayAgainCallback.bind(this)},"Play Again?"))}}]),t}(a.Component),C=n(20),j=n.n(C),O=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(o.a)(this,Object(r.a)(t).call(this,e))).state={randomNum:0,instructions:!0,win:!1,guesses:15},n.getRandomNum=n.getRandomNum.bind(Object(h.a)(n)),n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){console.log("---componentDidMount---"),this.getRandomNum(),console.log(this.state.randomNum)}},{key:"getRandomNum",value:function(){var e=this;j.a.get("https://www.random.org/integers/?num=1&min=100&max=999&col=1&base=10&format=plain").then(function(t){e.setState({randomNum:t.data})})}},{key:"winCallback",value:function(){this.setState({win:!0})}},{key:"guessCallback",value:function(e){this.setState({guesses:e})}},{key:"difficultyCallback",value:function(e){"Easy"===e&&(console.log("chose easy"),this.setState({guesses:15})),"Medium"===e&&(console.log("chose medium"),this.setState({guesses:10})),"Hard"===e&&(console.log("chose hard"),this.setState({guesses:5})),console.log("guesses:  "+this.state.guesses)}},{key:"instructionsCallback",value:function(e){this.setState({instructions:!1})}},{key:"PlayAgainCallback",value:function(){var e=this;this.setState({instructions:!0,guesses:15,win:!1,randomNum:0},function(){e.getRandomNum()})}},{key:"render",value:function(){return console.log(this.state.randomNum),!0===this.state.instructions?s.a.createElement(g,{callbackFromParent:this.difficultyCallback.bind(this),instructionsCallback:this.instructionsCallback.bind(this)}):0===this.state.guesses||!0===this.state.win?s.a.createElement(E,{PlayAgainCallback:this.PlayAgainCallback.bind(this),win:this.state.win}):s.a.createElement(v,{randomNum:this.state.randomNum,guesses:this.state.guesses,callbackFromParent:this.guessCallback.bind(this),winCallback:this.winCallback.bind(this)})}}]),t}(a.Component);l.a.render(s.a.createElement(O,null),document.getElementById("root"))},8:function(e,t,n){}},[[21,1,2]]]);
//# sourceMappingURL=main.da34b2aa.chunk.js.map