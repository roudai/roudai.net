(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{380:function(e,t,n){"use strict";n.r(t);var o=n(279),r={data:function(){return{colorScheme:{0:"#ffffff",1:"#ee0000",2:"#00d800",3:"#fefe00",4:"#ffa100",5:"#0000f2"},example1:["n","n","n","n","n","n","n","b","f","r","n","n","r","n","n","n","n","n","n","r","d","n","n","d","b","n","n"],example2:["n","n","n","n","n","n","b","b","l","f","n","n","f","n","n","d","n","n","r","r","d","n","n","d","n","n","b"],example3:["b","n","n","b","n","n","b","n","b","l","n","n","l","n","n","l","n","n","d","n","d","n","n","d","n","n","d"],example4:["n","n","f","n","n","f","n","n","f","r","r","r","r","n","r","r","r","r","n","n","d","n","n","d","n","n","d"],example5:"R' U' F D2 R2 B2 D2 R2 B' F' L2 U' F2 U2 L D U' F' L' D' R2 U R' U' F",example6:"R' U' F L2 B2 R2 U2 F D2 B' L2 F' D2 U B L' U2 F' R2 B2 U' R' D R' U' F"}},mounted:function(){var e={};e.facelets=this.example1,o.cubePNG(document.getElementById("example1"),e),e.facelets=this.example2,o.cubePNG(document.getElementById("example2"),e),e.facelets=this.example3,o.cubePNG(document.getElementById("example3"),e),e.facelets=this.example4,o.cubePNG(document.getElementById("example4"),e),(e={}).colorScheme=this.colorScheme,e.algorithm=this.example5,o.cubePNG(document.getElementById("example5"),e),e.algorithm=this.example6,o.cubePNG(document.getElementById("example6"),e)}},v=n(44),component=Object(v.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("第2章 コーナー反転とグッドエッジ")]),e._v(" "),n("p",[e._v("\n    Once you have found a good EO start (remember there could be none), the next step is the actual domino\n    reduction. The best approach to get all 4 good edges and the CO is to try and solve these two problems at the\n    same time, saving moves. The are two sets of cases that can occur. If you have to deal with both E-edges and\n    corners we call these Domino Reduction Triggers. If you have to deal with just corners or E-edges or you\n    have both but EO is missing, we call these Partial Domino Reduction.\n  ")]),e._v(" "),n("h3",[e._v("2.1 DRトリガー")]),e._v(" "),n("p",[e._v("\n    Let’s look at the most simple one: Take a solved cube and apply R U2 R’. If you look at the cube you can see\n    that you have 4 misoriented corners and only 1 bad edge. From this position, you can complete the DR in various\n    ways, but the shortest ones are:\n  ")]),e._v(" "),n("p",{staticClass:"text-center"},[e._v("\n    R U2 R or R U2 R'\n    L F2 L or L F2 L'\n  ")]),e._v(" "),n("p",[e._v("\n    You can easily remember this case by looking at the position of the U/D stickers: the ones near the U/D edge\n    form a “bar”, the ones near the E-layer edge form a “column”. Here are all of the most useful triggers we know\n    of, assuming the EO is done on F/B with white on top.\n  ")]),e._v(" "),n("div",[n("b-card",{attrs:{title:"2 Corners, 1 Edge - WV"}},[n("b-row",[n("b-col",{attrs:{sm:"8"}},[n("b-card-text",[n("div",[e._v("L' U' R U L R'")]),e._v(" "),n("div",[e._v("L R U' R' U L")]),e._v(" "),n("div",[e._v("Other Variations")])])],1),e._v(" "),n("b-col",{attrs:{sm:"4"}},[n("div",{attrs:{id:"example1"}})])],1)],1)],1),e._v(" "),n("p",[e._v("\n    These kinds of triggers are very difficult to spot and setup in few moves. When you find yourself in a 2c1e case\n    you may want to execute some moves to get to another case.\n  ")]),e._v(" "),n("div",[n("b-card",{attrs:{title:"3 corners, 1 edge - F2L"}},[n("b-row",[n("b-col",{attrs:{sm:"8"}},[n("b-card-text",[n("div",[e._v("R U R or R U R'")]),e._v(" "),n("div",[e._v("R U’ R or R U’ R'")]),e._v(" "),n("div",[e._v("L' U L or L' U L'")]),e._v(" "),n("div",[e._v("L' U’ L or L' U’ L'")])])],1),e._v(" "),n("b-col",{attrs:{sm:"4"}},[n("div",{attrs:{id:"example2"}})])],1)],1)],1),e._v(" "),n("p",[e._v("\n    These can be seen as simple F2L cases.\n  ")]),e._v(" "),n("div",[n("b-card",{attrs:{title:"4 corners, 1 edge - Column & bar"}},[n("b-row",[n("b-col",{attrs:{sm:"8"}},[n("b-card-text",[n("div",[e._v("L'U2 L or L'U2 L'")]),e._v(" "),n("div",[e._v("R'F2 R or R'F2 R'")]),e._v(" "),n("div",[e._v("R U2 R or R U2 R'")]),e._v(" "),n("div",[e._v("L F2 L or L F2 L'")])])],1),e._v(" "),n("b-col",{attrs:{sm:"4"}},[n("div",{attrs:{id:"example3"}})])],1)],1)],1),e._v(" "),n("p",[e._v("\n    These are the ones from the example. To set them up, focus on making the bar in front and the column on top\n    at the same time.\n  ")]),e._v(" "),n("div",[n("b-card",{attrs:{title:"4 corners, 2 edges - Conjugate and Solver"}},[n("b-row",[n("b-col",{attrs:{sm:"8"}},[n("b-card-text",[n("div",[e._v("R or R'")]),e._v(" "),n("div",[e._v("L or L'")])])],1),e._v(" "),n("b-col",{attrs:{sm:"4"}},[n("div",{attrs:{id:"example4"}})])],1)],1)],1),e._v(" "),n("p",[e._v("\n    If you have all the pieces in the correct position on the same face, DR can be achieved with a single move. Focus\n    on making two columns with the E edges on U/D and bring them on the same layer. Pay attention to U/D edges\n    to be on the same layer too!\n    All the other combinations of number of bad edges and misoriented corners lead to one of the above with a few\n    moves.\n  ")]),e._v(" "),n("p",[e._v("\n    The best way to learn the triggers is to figure out a personal way to recognize them and play around with\n    them a little bit. During your first tries, take a second solved cube and use it to take some DR triggers as\n    reference and see if you can find the way to set them up on your scrambled one.\n    At first you could find this very hard. Here are some examples to help you figure out the reasoning behind\n    achieving DR.\n  ")]),e._v(" "),n("div",[n("b-card",{attrs:{title:"First EO - Example"}},[n("b-card-text",[e._v("\n        スクランブル：R' U' F D2 R2 B2 D2 R2 B' F' L2 U' F2 U2 L D U' F' L' D' R2 U R' U' F\n      ")]),e._v(" "),n("b-row",[n("b-col",{attrs:{sm:"8"}},[n("b-card-text",[n("div",[e._v("U' F "),n("span",{staticClass:"text-muted"},[e._v("// EO (F/B) (2/2)")])]),e._v(" "),n("div",[e._v("(R B2 L2 B2) "),n("span",{staticClass:"text-muted"},[e._v("// setup to trigger (4/6)")])]),e._v(" "),n("div",[e._v("(D' L2 D' ) "),n("span",{staticClass:"text-muted"},[e._v("// DR trigger (3/9)")])])])],1),e._v(" "),n("b-col",{attrs:{sm:"4"}},[n("div",{attrs:{id:"example5"}})])],1)],1)],1),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),n("p",[e._v("\n    Now most of the work is done. Notice how moves of the U/D layers (in this case R/L) and double moves of\n    the other layers don’t affect the number of oriented corners or of good edges\n  ")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),n("p",[e._v("\n    These examples make use of a double move (U2 in the first one and B2 in the second one) to both setup some\n    corners and move the bad edge in the correct position. Before this double move, the position of the edge would\n    not have worked with the corners to trigger the DR.\n  ")]),e._v(" "),n("div",[n("b-card",{attrs:{title:"Second EO - Example"}},[n("b-card-text",[e._v("\n        スクランブル：R' U' F L2 B2 R2 U2 F D2 B' L2 F' D2 U B L' U2 F' R2 B2 U' R' D R' U' F\n      ")]),e._v(" "),n("b-row",[n("b-col",{attrs:{sm:"8"}},[n("b-card-text",[n("div",[e._v("B' R' D' L' "),n("span",{staticClass:"text-muted"},[e._v("// EO (R/L) (4/4)")])]),e._v(" "),n("div",[e._v("F or F' "),n("span",{staticClass:"text-muted"},[e._v("// 4c2e -> 3c1e (1/5)")])]),e._v(" "),n("div",[e._v("(D'F2) "),n("span",{staticClass:"text-muted"},[e._v("// setup (2/7)")])]),e._v(" "),n("div",[e._v("(B'U'B') "),n("span",{staticClass:"text-muted"},[e._v("// DR trigger (3/10)")])])])],1),e._v(" "),n("b-col",{attrs:{sm:"4"}},[n("div",{attrs:{id:"example6"}})])],1)],1)],1),e._v(" "),e._m(5),e._v(" "),n("p",[e._v("\n    Both F and F’ end up working for our DR setup. Look at the inverse with NISS. Your aim is now to try\n    and setup one of the F2L cases (3c,1e). To get a better idea of what you are going for, apply L’ U L on a solved\n    cube.\n  ")]),e._v(" "),e._m(6),e._v(" "),e._m(7)])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n    U’ F // EO (F/B) "),n("br"),e._v("\n    Use NISS and look at the inverse scramble. With a z rotation you can easily see you are in a 4 corners 1 edge\n    case (the orange-blue edge should not be in the E layer). Your aim is to set-up the Column & Bar case: the bar\n    with the orange-blue edge, the column with the white-blue edge.\n  ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n    (R B2 L2 B2) // setup to trigger "),n("br"),e._v("\n    R - joins an orange sticker with the L/R edge forming a semi-bar "),n("br"),e._v("\n    B2 - joins a corner with the E edge to form a semi-column "),n("br"),e._v("\n    L2 - completes the bar "),n("br"),e._v("\n    B2 - completes the column "),n("br")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n    (D’ L2 D’) // DR trigger "),n("br"),e._v("\n    We could have used a variation of the trigger, e.g. U F2 U. "),n("br"),e._v("\n    Ideally you should check every option but considering you only have one hour in official attempts, you should\n    choose the trigger that leaves you with the most blocks or with easy to solve corners. The second one is crucial in\n    DR finishes, but we’ll get to that later. There are two other ways of achieving DR from that EO on the normal\n    scramble that use the same concept of this setup.\n  ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n    U’ F //EO "),n("br"),e._v("\n    R2 L2 U2 L // setup "),n("br"),e._v("\n    U L2 U’ // trigger\n  ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n    U’ F //EO "),n("br"),e._v("\n    R’ L B2 R // setup "),n("br"),e._v("\n    D L2 D’ // trigger\n  ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n    B’ R’ D’ L’ // EO "),n("br"),e._v("\n    F / F’ // 4c2e to 3c1e\n  ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n    (D’ F2) // setup "),n("br"),e._v("\n    D’ - moves a yellow sticker to form a semi-bar with U/D edge "),n("br"),e._v("\n    F2 - moves the last corner to form a semi-column with E edge\n  ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n    (B’ U’ B’) // DR trigger "),n("br"),e._v("\n    DR is done!\n  ")])}],!1,null,null,null);t.default=component.exports}}]);