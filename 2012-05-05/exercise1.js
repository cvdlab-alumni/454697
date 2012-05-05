
//SOPWITH PUP

//ALA BASSA DX

var domain1 = INTERVALS(1)(30);
var domain2 = DOMAIN([[0, 1], [0, 1]])([15, 30]);
//var c1 = BEZIER(S0)(controls);
//var curve1 = MAP(c1)(domain1);
//DRAW(curve1);


var p0 = [[0.5,0, 0],[0,0, -0.1],[-0.5, 0, 0],[-0.5, 0, 0],[-0.5, 0, 0],[0,0, 0.1], [0.5,0,0]];
var p1 = p0.map(function(p){return[p[0], p[1]+1, p[2]]});
var p2 = p0.map(function(p){return[p[0], p[1]+2, p[2]]});
var p3 = p0.map(function(p){return[p[0], p[1]+3, p[2]]});
var p4 = p0.map(function(p){return[p[0], p[1]+3.5, p[2]]});

var c0 = BEZIER(S0)(p0);
var c1 = BEZIER(S0)(p1);
var c2 = BEZIER(S0)(p2);
var c3 = BEZIER(S0)(p3);
var c4 = BEZIER(S0)(p4);


var domain2 = DOMAIN([[0, 1], [0, 1]])([15, 30]); 
var surf = BEZIER(S1)([c0, c1, c2, c3, c4]);
var wingLDX = MAP(surf)(domain2);
//DRAW(wingLDX);

//ALA BASSA SINISTRA

var p5 = p0.map(function(p){return[p[0], p[1]-1, p[2]]});
var p6 = p0.map(function(p){return[p[0], p[1]-2, p[2]]});
var p7 = p0.map(function(p){return[p[0], p[1]-3, p[2]]});
var p8 = p0.map(function(p){return[p[0], p[1]-4, p[2]]});
var p9 = p0.map(function(p){return[p[0], p[1]-4.5, p[2]]});



var c6 = BEZIER(S0)(p5);
var c7 = BEZIER(S0)(p6);
var c8 = BEZIER(S0)(p7);
var c9 = BEZIER(S0)(p8);
var c10 = BEZIER(S0)(p9);


var surf1 = BEZIER(S1)([c6, c7, c8, c9, c10]);
var wingLSX = MAP(surf1)(domain2);
//DRAW(wingLSX);

//ALA SUPERIORE INTERA

var wingUDX=T([2])([1.5])(wingLDX);
var p5 = p0.map(function(p){return[p[0], p[1]-1, p[2]]});
var p6 = p0.map(function(p){return[p[0], p[1]-2, p[2]]});
var p7 = p0.map(function(p){return[p[0], p[1]-3, p[2]]});
var p8 = p0.map(function(p){return[p[0], p[1]-3.5, p[2]]});
var p9= p0.map(function(p){return[p[0], p[1]-4.5, p[2]]});


var c5 = BEZIER(S0)(p5);
var c6 = BEZIER(S0)(p6);
var c7 = BEZIER(S0)(p7);
var c8 = BEZIER(S0)(p8);
var c9 = BEZIER(S0)(p9);



var surf1 = BEZIER(S1)([c0, c5,c6, c7, c8, c9, c10]);
var wingUSX =T([2])([1.5])(MAP(surf1)(domain2));
var wings = STRUCT([wingUSX, wingLDX, wingUDX, wingLSX]);
//STRUTTURA ALI
DRAW(COLOR([0.8, 0.4, 0.2])(wings));








