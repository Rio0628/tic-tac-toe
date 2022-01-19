(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{16:function(e,t,s){},19:function(e,t,s){"use strict";s.r(t);var a=s(1),r=s.n(a),n=s(4),c=s.n(n),i=(s(16),s(8)),l=s(3),o=s.n(l),m=s(5),u=s(6),d=s(7),h=s(11),j=s(9),g=s(10),x=s(0),O=function(e){return Object(x.jsx)("div",{className:"indSquare",onClick:e.onClick,children:e.value})},v=function(e){for(var t=[],s=function(s){t.push(Object(x.jsx)(O,{value:e.squares[s],onClick:function(){return e.onClick(s)}},"square "+s))},a=0;a<9;a++)s(a);return Object(x.jsx)("div",{className:"board",children:t})},N=function(e){Object(h.a)(s,e);var t=Object(j.a)(s);function s(e){var a;return Object(u.a)(this,s),(a=t.call(this,e)).state={gameStarted:!1,history:[{squares:Array(9).fill(null)}],nmrOfMoves:0,xIsNext:!0},a}return Object(d.a)(s,[{key:"render",value:function(){var e,t=this,s=function(e){"startGameBtn"===e.target.className&&(t.setState({gameFinished:!1}),t.state.gamemode?t.setState({gameStarted:!0}):alert("Select Gamemode To Start Game!")),"mainMenuBtn"===e.target.className&&t.setState({history:[{squares:Array(9).fill(null)}],nmrOfMoves:0,gameStarted:!1,userIsO:!1,userIsX:!1,gamemode:"",gameTied:!1}),"replayBtn"===e.target.className&&t.setState({history:[{squares:Array(9).fill(null)}],nmrOfMoves:0,gameTied:!1}),"historyTrigger"!==e.target.className&&"closeViewBtn"!==e.target.className||t.setState({historyViewTrggrd:!t.state.historyViewTrggrd}),"playerOne"===e.target.className&&(t.setState({userIsX:!0}),t.setState({userIsO:!1}),t.setState({xIsNext:!0})),"playerTwo"===e.target.className&&(t.setState({userIsO:!0}),t.setState({userIsX:!1}),t.setState({xIsNext:!1})),"twoPlayerGame"===e.target.className&&t.setState({gamemode:"multiplayer"}),"singlePlayerGame"===e.target.className&&t.setState({gamemode:"singleplayer"})},a=function(){var e=Object(m.a)(o.a.mark((function e(s){var a,n,c,i,l,m,u,d,h,j,g,x;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("multiplayer"!==t.state.gamemode){e.next=14;break}if(a=t.state.history.slice(0,t.state.nmrOfMoves+1),n=a[a.length-1],c=n.squares.slice(),!r(c)&&!c[s]){e.next=6;break}return e.abrupt("return");case 6:c[s]=t.state.xIsNext?"X":"O",i=function(e){return null!==e},console.log(c.every(i)),c.every(i)&&!r(c)&&t.setState({gameTied:!0}),t.state.gameTied&&t.setState({xIsNext:!t.state.xIsNext}),t.setState({history:a.concat([{squares:c}]),nmrOfMoves:a.length,xIsNext:!t.state.xIsNext}),e.next=35;break;case 14:if("singleplayer"!==t.state.gamemode){e.next=35;break}if(l=t.state.history.slice(0,t.state.nmrOfMoves+1),m=l[l.length-1],u=m.squares.slice(),d=t.state.userIsX?"X":t.state.userIsO?"O":null,h="X"===d?"O":"O"===d?"X":null,j=Math.floor(Math.random()*u.length),g=function e(){try{u[j]?(j=Math.floor(Math.random()*u.length),e()):(u[j]=h,t.state.userIsO&&t.setState({xIsNext:!0}),t.state.userIsX&&t.setState({xIsNext:!1}))}catch(s){u[j]=d,t.setState({gameFinished:!0})}},!r(u)&&!u[s]){e.next=26;break}return e.abrupt("return");case 26:g();case 27:return e.next=30,d;case 30:u[s]=e.sent,x=function(e){return null!==e},console.log(u.every(x)),u.every(x)&&!r(u)&&t.setState({gameTied:!0}),t.setState({history:l.concat([{squares:u}]),nmrOfMoves:l.length,xIsNext:!t.state.xIsNext});case 35:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],s=0;s<t.length;s++){var a=Object(i.a)(t[s],3),r=a[0],n=a[1],c=a[2];if(e[r]&&e[r]===e[n]&&e[r]===e[c])return e[r]}return null},n=this.state.history,c=n[this.state.nmrOfMoves],l=r(c.squares),u=!1;this.state.gameTied&&(u=!0),l?(u=!0,e="Winner: ".concat(l)):e="Next Player: ".concat(this.state.xIsNext?"X":"O"," ");var d=n.map((function(e,s){var a=s?"Go to move #".concat(s):"Go to game start";return Object(x.jsx)("p",{className:"indPastMove",onClick:function(){return function(e){t.setState({nmrOfMoves:e,xIsNext:e%2===0})}(s)},children:a},"past move "+s)}));return Object(x.jsxs)("div",{className:"container",children:[this.state.gameStarted?Object(x.jsxs)("div",{className:"mainGameView",children:[Object(x.jsxs)("div",{className:"navBar",children:[Object(x.jsx)("p",{className:"winnerHeading",children:this.state.gameTied?"Winner: Tie!":e}),Object(x.jsx)("p",{className:"historyTrigger",onClick:s,children:"History"})]}),u?Object(x.jsxs)("div",{className:"gameEndOptions",children:[Object(x.jsx)("p",{className:"replayBtn",onClick:s,children:"Replay"}),Object(x.jsx)("p",{className:"mainMenuBtn",onClick:s,children:"Main Menu"})]}):null,Object(x.jsx)(v,{squares:c.squares,onClick:function(e){return a(e)}})]}):Object(x.jsx)("div",{className:"previewView",children:Object(x.jsxs)("div",{className:"previewViewBtnsCntr",children:[Object(x.jsx)("p",{className:"previewVieHeading",children:"Tic-Tac-Toe."}),Object(x.jsxs)("div",{className:"chooseBtnsCntr",children:[Object(x.jsx)("p",{className:"playerOne"+(t.state.userIsX?" active":""),onClick:s,children:"X"}),Object(x.jsx)("p",{className:"playerTwo"+(t.state.userIsO?" active":""),onClick:s,children:"O"})]}),Object(x.jsxs)("div",{className:"chooseGmdeCntr",children:[Object(x.jsx)("p",{className:"twoPlayerGame"+("multiplayer"===t.state.gamemode?" active":""),onClick:s,children:"Player Vs. Player"}),Object(x.jsx)("p",{className:"singlePlayerGame"+("singleplayer"===t.state.gamemode?" active":""),onClick:s,children:"CPU Vs. Player"})]}),Object(x.jsx)("p",{className:"startGameBtn",onClick:s,children:"Start Game"})]})}),Object(x.jsxs)("div",{className:"historyView"+(t.state.historyViewTrggrd?" active":""),children:[Object(x.jsxs)("div",{className:"heading-btnCntr",children:[Object(x.jsx)("div",{className:"closeViewBtn",onClick:s,children:Object(x.jsx)(g.a,{className:"icon"})}),Object(x.jsx)("p",{className:"historyViewHdng",children:"History"})]}),Object(x.jsx)("div",{className:"indPastMovesCntr",children:this.state.gameStarted?d:""})]})]})}}]),s}(a.Component),b=N,y=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,20)).then((function(t){var s=t.getCLS,a=t.getFID,r=t.getFCP,n=t.getLCP,c=t.getTTFB;s(e),a(e),r(e),n(e),c(e)}))};c.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(b,{})}),document.getElementById("root")),y()}},[[19,1,2]]]);
//# sourceMappingURL=main.179771c4.chunk.js.map