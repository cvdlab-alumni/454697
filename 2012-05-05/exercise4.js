//Assemblaggio

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
var wings = T([1, 0])([0.5, 0.8])(STRUCT([wingUSX, wingLDX, wingUDX, wingLSX]));
//STRUTTURA ALI
DRAW(COLOR([0.8, 0.4, 0.2])(wings));








//FUSOLIERA

//PARTE INIZIALE SUPERIORE E INFERIORE (PRIMI 2 METRI)
//ARCO3
var domain = INTERVALS(1)(30);
var domain1 = DOMAIN([[0, 1], [0, 1]])([30, 50]);
var controlpoints = [[0,-0.5, 0],[0,0.5, 0],[0, 0, 2],[0,0,-2]]; //punto iniziale, finale, tg iniziale, tg finale
var c1 = CUBIC_HERMITE(S0)(controlpoints); //c1 funzione vettoriale ad un parametro
var curve1 = MAP(c1)(domain); //curve1 è l'immagine della curva in cui c1 mappa i punti del suo dominio
//DRAW(curve1);

//ARCO2
var controlpoints2 = [[2,-0.5, 0],[2,0.5, 0],[-2, 0, 2],[2,0, -2]]; 
var c2 = CUBIC_HERMITE(S0)(controlpoints2); 
var curve2 = MAP(c2)(domain); 
//DRAW(curve2); 
//ARCO3 TODO
var controlpoints3 = [[2,-0.5, 0],[2,0.5, 0],[2, 0, 2],[-2,0, -2]]; 
var c3= CUBIC_HERMITE(S0)(controlpoints3); 
var curve3 = MAP(c3)(domain); 
//DRAW(curve3); 

//ARCO4 
var controlpoints4 = [[2.5,-0.5, 0],[2.5,0.5, 0],[0, 0, 2],[0,0, -2]]; 
var c4 = CUBIC_HERMITE(S0)(controlpoints4); 
var curve4 = MAP(c4)(domain); 
//DRAW(curve4); 

var s12 = BEZIER(S1)([c1, c2])
var surf1 = MAP(s12)(domain1);
//DRAW(surf1);

var s34 = BEZIER(S1)([c3, c4])
var surf2 = MAP(s34)(domain1);
//DRAW(surf2);

//inferiore
var controlpoints1bis = [[0,-0.5, 0],[0,0.5, 0],[0, 0, -2],[0,0,2]]; 
var c1bis = CUBIC_HERMITE(S0)(controlpoints1bis); 
var curve1bis = MAP(c1bis)(domain); 
//DRAW(curve1bis);

var controlpoints4bis = [[2.5,-0.5, 0],[2.5,0.5, 0],[0, 0, -2],[0,0, 2]]; 
var c4bis = CUBIC_HERMITE(S0)(controlpoints4bis); 
var curve4bis = MAP(c4bis)(domain); 
//DRAW(curve4bis); 

var s34bis = BEZIER(S1)([c1bis, c4bis])
var surf3 = MAP(s34bis)(domain1);
//DRAW(surf3);


var interno1 = [[0,-0.3, 0],[0,0.3, 0],[0, 0, 1],[0,0,-1]]; 
var ci1 = CUBIC_HERMITE(S0)(interno1); 
var curvei1 = MAP(ci1)(domain); 

var s11 = BEZIER(S1)([c1, ci1])
var surf4 = MAP(s11)(domain1);
//DRAW(surf4);

var interno2 = [[0,-0.3, 0],[0,0.3, 0],[0, 0, -1],[0,0,1]]; 
var ci2 = CUBIC_HERMITE(S0)(interno2); 
var curvei2 = MAP(ci2)(domain); 

var s22 = BEZIER(S1)([c1bis, ci2])
var surf5 = MAP(s22)(domain1);
//DRAW(surf5);


//FUSOLIERA RETRO 3m

var controlpoints1R = [[6,-0.01, 0],[6,0.01, 0],[0, 0, 1],[0,0,-1]]; 
var c1R = CUBIC_HERMITE(S0)(controlpoints1R); 
var curve1R = MAP(c1R)(domain); 
//DRAW(curve1R);

var s1R = BEZIER(S1)([c4, c1R])
var surf6 = MAP(s1R)(domain1);
//DRAW(surf6);

var controlpoints2R = [[6,-0.01, 0],[6,0.01, 0],[0, 0, -0.3],[0,0,0.3]]; 
var c2R = CUBIC_HERMITE(S0)(controlpoints2R); 
var curve2R = MAP(c2R)(domain); 
//DRAW(curve2R);

var s2R = BEZIER(S1)([c4bis, c2R])
var surf7 = MAP(s2R)(domain1);
//DRAW(surf7);

var fusoliera = STRUCT ([surf1, surf2, surf3, surf4, surf5, surf6, surf7]);
DRAW(COLOR([0, 1, 0.8])(fusoliera));


////////////////////ELICA

var a = SIMPLEX_GRID([
  [0.05],
	[0.05],
	[0.4]
	]);

var b = SIMPLEX_GRID([
	[0.05],
	[0.4],
	[0.05]
	]);

var c = S([1])([-1])(b);
var d = S([2])([-1])(a);

var radiatore = STRUCT ([a, b, c, d]);
DRAW(COLOR([0, 1, 0.7])(radiatore));




//////SUPPORTO ELICA

var drawSphere = function (r, n){
	var d = DOMAIN ([[0, 2*PI], [0, 2*PI]])([n, n]);
	var mapping = function(p){
		var beta = p[0];
		var alfa = p[1];
		return [r*COS(alfa)*COS(beta), r*COS(alfa)*SIN(beta), r*SIN(alfa)];
	}
	var mapped = MAP (mapping)(d);
	return mapped;
}
var supportoElica = T([1,2])([0.02, 0.02])(drawSphere(0.05, 30));
var supportoElica1 = S([0])([3])(supportoElica);
DRAW(COLOR([1, 0, 0])(supportoElica1));

//ELICA



var domain = INTERVALS(1)(30);
var domain1 = DOMAIN([[0, 1], [0, 1]])([30, 50]);
var controlpoints = [[0,0, 0],[0,2.5, 0],[0, 0, 0.5],[0,0,-0.5]]; //punto iniziale, finale, tg iniziale, tg finale
var c1 = CUBIC_HERMITE(S0)(controlpoints); //c1 funzione vettoriale ad un parametro
var curve1 = MAP(c1)(domain); //curve1 è l'immagine della curva in cui c1 mappa i punti del suo dominio
//DRAW(curve1);

//ARCO2
var controlpoints2 = [[0,0, 0],[0,2.5,0 ],[0, 0, -0.5],[0,0, 0.5]]; 
var c2 = CUBIC_HERMITE(S0)(controlpoints2); 
var curve2 = MAP(c2)(domain); 
//DRAW(curve2);

var s12 = BEZIER(S1)([c1, c2])
var surf1 = MAP(s12)(domain1);
var elica1 = T([0])([-0.1])(surf1);
var elica2 = T([1])([-2.4])(elica1);

var eliche = STRUCT([elica1, elica2]);
DRAW(COLOR([1, 0, 0])(eliche));


var a = COLOR([0.8, 0.4, 0.2])(SIMPLEX_GRID([
	[0.02],
	[0.03],
	[1.5]
	]));

DRAW(T([1, 0])([2, 0.8])(a));
DRAW(T([0])([0.8])(a));
DRAW(T([1, 0])([3, 0.8])(a));
DRAW(T([1, 0])([-2, 0.8])(a));
DRAW(T([1, 0])([-3, 0.8])(a));


var staffa = COLOR([0.8, 0.4, 0.2])(SIMPLEX_GRID([
	[0.02],
	[0.03],
	[0.6]
	]));

DRAW(T([2, 1, 0])([-0.9, 0.3, 0.5])(staffa));
DRAW(T([2, 1, 0])([-0.9, -0.3, 0.5])(staffa));

var staffa2 = COLOR([0.8, 0.4, 0.2])(SIMPLEX_GRID([
	[0.02],
	[0.6],
	[0.02]
	]));

DRAW(T([0, 2, 1])([0.5, -0.7, -0.3])(staffa2));


//RUOTE
var domain = INTERVALS(1)(30);
var domain1 = DOMAIN([[0, 1], [0, 1]])([30, 50]);
var ruota1 = [[0,0, -1],[0,0,-1.3],[0.5, 0, 0],[-0.5,0,0]]; 
var r1 = CUBIC_HERMITE(S0)(ruota1); 
var cRuota1 = MAP(r1)(domain); 
//DRAW(cRuota1);

var ruota2 = [[0,0, -1],[0,0,-1.3],[-0.5, 0, 0],[0.5,0,0]]; 
var r2 = CUBIC_HERMITE(S0)(ruota2); 
var cRuota2 = MAP(r2)(domain); 
//DRAW(cRuota2);


//DRAW(curve1R);

var r12 = BEZIER(S1)([r1, r2]);
var surfRuota = MAP(r12)(domain1);
var ruotadx = T([0, 1, 2])([0.5, 0.3, +0.3])(surfRuota);
var ruotasx = T([1])([-0.6])(ruotadx);
var ruote = STRUCT([ruotadx, ruotasx]);
DRAW(ruote);