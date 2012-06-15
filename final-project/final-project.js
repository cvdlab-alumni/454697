//VILLA CAPRA (LA ROTONDA)- Palladio

//EDIFICIO CENTRALE 
//prima base pianta quadrata 18.2 x 18.2 x 0.75

var domain1 = INTERVALS(1)(20);
var domain2 = DOMAIN([[0,1],[0,1]])([10,10]);
var domain3 = DOMAIN([[0,1],[0,2*PI]])([10,10]);



var base1 = SIMPLEX_GRID([
	[18.2],
	[18.2],
	[0.75]
	]);

//seconda base pianta quadrata 18 x 18 x 0.48
var base2 = SIMPLEX_GRID([
	[-0.1, 18],
	[-0.1, 18],
	[-0.75, 0.48]
	]);

//terza base, inizio finestre pianta quadrata 17.9 x 17.9 x 0.35
var base3 = SIMPLEX_GRID([
	[-0.15, 17.9],
	[-0.15, 17.9],
	[-1.23, 0.35]
	]);

//quarta base, lato finestre base pianta quadrata 17.9 x 17.9 x 0.35
var base4 = SIMPLEX_GRID([
	[-0.15, 2.5, -0.6, 11.7, -0.6, 2.5],
	[-0.15, 2.5, -0.6, 11.7, -0.6, 2.5],
	[-1.58, 0.6]
	]);

//quinta base, fine finestre base pianta quadrata 17.9 x 17.9 x 0.35
var base5 = SIMPLEX_GRID([
	[-0.15, 17.9],
	[-0.15, 17.9],
	[-2.18, 0.35]
	]);

//sesta base, base pianta quadrata 18 x 18 x 0.45
var base6 = SIMPLEX_GRID([
	[18.2],
	[18.2],
	[-2.53, 0.47]
	]);

//settima base, base pianta quadrata 18 x 18 x 0.45
var base7 = SIMPLEX_GRID([
	[-0.1, 2.4, -0.8, 1.4, -8.8, 1.4, -0.8, 2.4],
	[-0.1, 2.4, -0.8, 1.4, -8.8, 1.4, -0.8, 2.4],
	[-3, 0.3]
	]);

//sottofinestre in rilievo di 0.1, larghe 0.8 m ed alte 0.5
var sottofinestraA = SIMPLEX_GRID([
	[-2.5, 0.8, -11.6, 0.8],
	[1.1, -16, 1.1],
	[-3, 0.5]
	]);

var sottofinestraB = SIMPLEX_GRID([
	[1.1, -16, 1.1],
	[-2.5, 0.8, -11.6, 0.8],
	[-3, 0.5]
	]);

//finestre laterali 0.7x2.5 m
var latofinestreLaterali = SIMPLEX_GRID([
	[-0.15, 2.4, -0.7, 1.35, -9, 1.35, -0.7, 2.4],
	[-0.15, 2.4, -0.7, 1.35, -9, 1.35, -0.7, 2.4],
	[-3.3, 2.5]
	]);

var soprafinestreLaterali = SIMPLEX_GRID([
	[-0.15, 4.45, -9, 4.45],
	[-0.15, 4.45, -9, 4.45],
	[-5.8, 3.4]
	]);

var base8 =  SIMPLEX_GRID([
	[-0.15, 2.5, -0.6, 1.85, -0.6, 6.8, -0.6, 1.85, -0.6, 2.5],
	[-0.15, 2.5, -0.6, 1.85, -0.6, 6.8, -0.6, 1.85, -0.6, 2.5],
	[-9.2, 0.6]
	]);

var base9 =  SIMPLEX_GRID([
	[-0.15, 17.9],
	[-0.15, 17.9],
	[-9.8, 0.9]
	]);

//corpo centrale con porte

var baseCentraleSottoFinestreA =  SIMPLEX_GRID([
	[-4.6, 3.75, -1.5,3.75, -4.6],
	[-0.15, 17.9],
	[-3, 1]
	]);

var baseCentraleSottoFinestreB =  SIMPLEX_GRID([
	[-0.15, 17.9],
	[-4.6, 3.75, -1.5,3.75, -4.6],
	[-3, 3.5]
	]);

var baseCentralelatoFinestreA =  SIMPLEX_GRID([
	[-4.6, 0.5, -0.7, 1.3, -0.7, 0.55, -1.5, 0.55, -0.7, 1.3, -0.7, 0.5],
	[-0.15, 17.9],
	[-4, 2]
	]);

//var baseCentralelatoFinestreB =  SIMPLEX_GRID([
//	[-0.15, 17.9],
//	[-4.6, 0.5, -0.7, 1.3, -0.7, 0.55, -1.5, 0.55, -0.7, 1.3, -0.7, 0.5],
//	[-4, 2]
//	]);

var baseCentralesopraFinestreA =  SIMPLEX_GRID([
	[-4.6, 3.75, -1.5, 3.75],
	[-0.15, 17.9],
	[-6, 0.5]
	]);

//var baseCentralesopraFinestreB =  SIMPLEX_GRID([
//	[-0.15, 17.9],
//	[-4.6, 3.75, -1.5, 3.75],
//	[-6, 0.5]
//	]);

var baseCentralesopraPortaA =  SIMPLEX_GRID([
	[-4.6, 9],
	[-0.15, 17.9],
	[-6.5, 1]
	]);

var baseCentralesopraPortaB =  SIMPLEX_GRID([
	[-0.15, 17.9],
	[-4.6,9],
	[-6.5, 2.7]
	]);

var finestreAlteA = SIMPLEX_GRID([
	[-4.6, 0.5, -0.7, 1.3, -0.7, 2.6, -0.7, 1.3, -0.7, 0.5],
	[-0.15, 17.9],
	[-7.5, 0.7]
	]);

//var finestreAlteB = SIMPLEX_GRID([
//	[-0.15, 17.9],
//	[-4.6, 0.5, -0.7, 1.3, -0.7, 2.6, -0.7, 1.3, -0.7, 0.5],
//	[-7.5, 0.7]
//	]);

var sopraFinestreAlteA = SIMPLEX_GRID([
	[-4.6, 9],
	[-0.15, 17.9],
	[-8.2, 1]
	]);

//var sopraFinestreAlteB = SIMPLEX_GRID([
//	[-0.15, 17.9],
//	[-4.6, 9],
//	[-8.2, 1]
//	]);



var corpoEdificio = COLOR([254/255, 254/255, 233/255])(STRUCT([base1, base2, base3, base4,
 base5, base6, base7, sottofinestraA, sottofinestraB,
 latofinestreLaterali, soprafinestreLaterali, base8, base9, 
 baseCentraleSottoFinestreA, baseCentraleSottoFinestreB, 
 baseCentralelatoFinestreA,  
 baseCentralesopraPortaA, baseCentralesopraPortaB, baseCentralesopraFinestreA, 
 finestreAlteA,  
 sopraFinestreAlteA]));
DRAW(corpoEdificio);



//TETTO CON CUPOLA CENTRALE
// cupola di diametro 9 metri sorretta da due corpi cilindrici uno di diametro 9m e uno di diametro 9.2m direttamente connesso alla cupola

var cylinder = function (r, h, n, m){
	var d = DOMAIN ([[0, 2*PI], [0, h]])([n, m]);
	var mapping = function(p){
		var u = p[0];
		var v = p[1];
		return [r*COS(u), r*SIN(u), v];
	}
	var mapped = MAP (mapping)(d);
	return mapped;
}

var cilindro1 = cylinder(4.5, 2.4, 50, 50);
cilindro1 = T([0,1,2])([9.1, 9.1, 10.7])(cilindro1);


var controlpointsA = [[9.1, 4.5, 13.1],[9.1, 13.7, 13.1],[-18, 0, 0],[18,0, 0]]; 
var cA = CUBIC_HERMITE(S0)(controlpointsA); 
var curveA = MAP(cA)(domain1); 



var controlpointsB = [[9.1, 4.5, 13.1],[9.1, 13.7, 13.1],[18, 0, 0],[-18,0, 0]]; 
var cB = CUBIC_HERMITE(S0)(controlpointsB); 
var curveB = MAP(cB)(domain1); 

var controlpointsC = [[9.1, 4.5, 13.5],[9.1, 13.7, 13.5],[-18, 0, 0],[18,0, 0]]; 
var cC = CUBIC_HERMITE(S0)(controlpointsC); 
var curveC = MAP(cC)(domain1); 

var controlpointsD = [[9.1, 4.5, 13.5],[9.1, 13.7, 13.5],[18, 0, 0],[-18,0, 0]]; 
var cD = CUBIC_HERMITE(S0)(controlpointsD); 
var curveD = MAP(cD)(domain1); 

var sAB = BEZIER(S1)([cA, cB])
var surfAB = MAP(sAB)(domain2);
var sAC = BEZIER(S1)([cA, cC])
var surfAC = MAP(sAC)(domain2);
var sBD = BEZIER(S1)([cD, cB])
var surfBD = MAP(sBD)(domain2);
var sCD = BEZIER(S1)([cC, cD])
var surfCD = MAP(sCD)(domain2);

var cilindro2 = STRUCT([surfAB, surfCD, surfBD, surfAC]);


var baseCupola = COLOR([254/255, 254/255, 233/255])(STRUCT([cilindro1, cilindro2]));
DRAW(baseCupola);

//CORNICIONE 


//var controls = [[18.05,0.15,10.7],[18.15,0.05,10.7],[18.23,-0.03,10.7],
 //		[18.27,-0.07,10.7],[18.28,-0.08,10.65],[18.16,0.04,10.6],[18.24,-0.04,10.6],[18.26,-0.06,10.55],
  //		[18.25,-0.05,10.5],[18.2,0,10.45],[18.15,0.05,10.4],[18.1,0.1,10.3],[18.05,0.15,10.2]];
//var nubs = NUBS(S0)(2)([0,0,0,1,2,3,4,5,6,7,8,9,10,11,11,11])(controls);
//var model = MAP(nubs)(domain1);
//DRAW(model);

var knots = [0,0,0,1,2,3,4,5,6,7,8,9,10,11,11,11];

var points1 =  [[0.15,0.15,10.7],[0.05,0.05,10.7],[-0.03,-0.03,10.7],
 		[-0.07,-0.07,10.7],[-0.08,-0.08,10.65],[0.04,0.04,10.6],[-0.04,-0.04,10.6],[-0.06,-0.06,10.55],
  		[-0.05,-0.05,10.5],[0,0,10.45],[0.05,0.05,10.4],[0.1,0.1,10.3],[0.15,0.15,10.2]];

var points2 = [[18.05,0.15,10.7],[18.15,0.05,10.7],[18.23,-0.03,10.7],
 		[18.27,-0.07,10.7],[18.28,-0.08,10.65],[18.16,0.04,10.6],[18.24,-0.04,10.6],[18.26,-0.06,10.55],
  		[18.25,-0.05,10.5],[18.2,0,10.45],[18.15,0.05,10.4],[18.1,0.1,10.3],[18.05,0.15,10.2]];

var curve1 = NUBS(S0)(2)(knots)(points1);
var curve2 = NUBS(S0)(2)(knots)(points2);
var sup = BEZIER(S1)([curve1,curve2]);
var cornicione1 = MAP(sup)(domain2);
var cornicione2 = R([0, 1, 2])([PI/2])(cornicione1);
cornicione2 = (T([0])([18.2])(cornicione2));
var cornicione3 = R([0, 1, 2])([3*PI/2])(cornicione1);
cornicione3 = (T([1])([18.2])(cornicione3));
var cornicione4 = R([0, 1, 2])([-3*PI/2])(cornicione2);
cornicione4 = (T([0,])([18.2])(cornicione4));
var cornicione = COLOR([254/255, 254/255, 233/255])(STRUCT ([cornicione1, cornicione2, cornicione3, cornicione4]));
DRAW(cornicione);


//TETTO
//var controlpointsE = [[-0.05, -0.05, 10.7],[5.93, 5.93, 13.12],[6, 6, 2],[6, 6, 2]]; 
//var cE = CUBIC_HERMITE(S0)(controlpointsE); 
//var curveE = MAP(cE)(domain1); 
//DRAW(curveE)
//var controlpointsF = [[18.26, -0.072, 10.7],[12.15, 5.93, 13.12],[-6, 6, 2],[-6, 6, 2]]; 
//var cF = CUBIC_HERMITE(S0)(controlpointsF); 
//var curveF = MAP(cF)(domain1); 
//DRAW(curveF)
//var controlpointsG = [[-0.05, 18.26, 10.7],[6, 12.2, 13.15],[6, -6, 2],[6, -6, 2]]; 
//var cG = CUBIC_HERMITE(S0)(controlpointsG); 
//var curveG = MAP(cG)(domain1); 
//DRAW(curveG)
//var controlpointsH = [[18.26, 18.26, 10.7],[12.2, 12.2, 13.15],[-6, -6, 2],[-6, -6, 2]]; 
//var cH = CUBIC_HERMITE(S0)(controlpointsH); 
//var curveH = MAP(cH)(domain1); 
//DRAW(curveH)

var controlpointsE = [[5.92, 5.92, 13.12],[12.25, 5.93, 13.12],[2.5, -1.5, -2],[2.5, 1.5, 2]]; 
var cE = CUBIC_HERMITE(S0)(controlpointsE); 
var curveE = MAP(cE)(domain2); 
//DRAW(curveE)

var controlpointsF = [[-0.03, -0.03, 10.7],[18.27, -0.071, 10.7],[18, 0, 0],[18, 0, 0]]; 
var cF = CUBIC_HERMITE(S0)(controlpointsF); 
var curveF = MAP(cF)(domain2); 
//DRAW(curveF)

var sEF = BEZIER(S1)([cE, cF])
var surfEF = MAP(sEF)(domain2);

var surfEF2 = R([0, 1, 2])([3*PI/2, PI/2, PI/2])(surfEF);
surfEF2 = (T([1])([18.2])(surfEF2));
var surfEF3 = S([1])([-1])(surfEF);
surfEF3 = T([1])([18.2])(surfEF3);
var surfEF4 = S([0])([-1])(surfEF2);
surfEF4 = T([0])([18.2])(surfEF4);

var tetto = COLOR([153/255, 51/255, 0])(STRUCT([surfEF, surfEF2, surfEF3, surfEF4]));
DRAW(tetto);

//CUPOLA

var p0 = [[4.4,0,0], [3,0,1], [2.5,0,1.2], [1,0,2]];
var k0 = [0,0,0,1,2,2,2];
var c0 = NUBS(S0)(2)(k0)(p0);
var m0 = ROTATIONAL_SURFACE(c0);
var cupola1 = MAP(m0)(domain3);	
cupola1 = T([0, 1, 2])([9.15, 9.1, 13.52])(cupola1);
cupola1 = COLOR([153/255, 51/255, 0])(cupola1);

var p1 = [[1, 0,2],[0.8,0,2.2],[0.85,0,2.4],[0.9,0,2.5]];
var k1 = [0,0,0,1,2,2,2];
var c1 = NUBS(S0)(2)(k1)(p1);
var m1 = ROTATIONAL_SURFACE(c1);
var cupola2 = MAP(m1)(domain3);	
cupola2 = T([0, 1, 2])([9.15, 9.1, 13.52])(cupola2);
cupola2 = COLOR([153/255, 51/255, 0])(cupola2);

var p2 = [[0.8,0, 0],[0.9,0, 0],[1,0, 0.1],[0.9,0, 0.2],[0.5,0, 0.3],[0.4,0, 0.35],[0.3,0, 0.4],[0.2,0, 0.5],[0.1, 0,0.55],[0,0, 0.6]];
var k2 = [0,0,0,0,1,2,3,4,5,6,7,7,7,7];
var c2 = NUBS(S0)(3)(k2)(p2);
var m2 = ROTATIONAL_SURFACE(c2);
var cupola3 = MAP(m2)(domain3);
cupola3 = T([0, 1, 2])([9.15, 9.1, 16.01])(cupola3);
cupola3 = COLOR([153/255, 51/255, 0])(cupola3);


var cupole = STRUCT([cupola1, cupola2, cupola3]);
DRAW(cupole);


// PORTICO

var base20 = SIMPLEX_GRID([
	[-4.6, 0.3],
	[-18.2, 0.65],
	[0.75]
	]);

var base21 = SIMPLEX_GRID([
	[-4.7, 0.2],
	[-18.1, 0.75],
	[-0.75, 0.48]
	]);

var base21bis = SIMPLEX_GRID([
	[-4.6, 0.2],
	[-18.1, 0.75],
	[-0.75, 0.48]
	]);

var base22 = SIMPLEX_GRID([
	[-4.75, 0.15],
	[-18.05, 0.8],
	[-1.23, 0.3]
	]);
var base22bis = SIMPLEX_GRID([
	[-4.6, 0.15],
	[-18.05, 0.8],
	[-1.23, 0.3]
	]);

var controlpointsG = [[4.75, 18.85, 1.53],[4.75, 20.85, 1.53],[0, 0, 2],[0, 0, -2]]; 
var cG = CUBIC_HERMITE(S0)(controlpointsG); 
var curveG = MAP(cG)(domain1); 

var controlpointsGbis = [[4.6, 18.85, 1.53],[4.6, 20.85, 1.53],[0, 0, 2],[0, 0, -2]]; 
var cGbis = CUBIC_HERMITE(S0)(controlpointsGbis); 
var curveGbis = MAP(cGbis)(domain1); 


var controlpointsH = [[4.85, 18.85, 1.53],[4.85, 20.85, 1.53],[0, 0, 2],[0, 0, -2]]; 
var cH = CUBIC_HERMITE(S0)(controlpointsH); 
var curveH = MAP(cH)(domain1); 

var controlpointsHbis = [[4.75, 18.85, 1.53],[4.75, 20.85, 1.53],[0, 0, 2],[0, 0, -2]]; 
var cHbis = CUBIC_HERMITE(S0)(controlpointsHbis); 
var curveHbis = MAP(cHbis)(domain1); 


var controlpointsI = [[4.75, 18.85, 2.3],[4.75, 20.85, 2.3],[0, 2, 0],[0, 2, 0]]; 
var cI = CUBIC_HERMITE(S0)(controlpointsI); 
var curveI = MAP(cI)(domain1); 

var controlpointsIbis = [[4.75, 18.85, 2.3],[4.75, 20.85, 2.3],[0, 2, 0],[0, 2, 0]]; 
var cIbis = CUBIC_HERMITE(S0)(controlpointsIbis); 
var curveIbis = MAP(cI)(domain1); 


var sGH = BEZIER(S1)([cG, cH]);
var sGHbis = BEZIER(S1)([cGbis, cHbis])
var surfGH = MAP(sGH)(domain2);
var surfGHbis = MAP(sGHbis)(domain2);

var sGI = BEZIER(S1)([cG, cI]);
var sHIbis = BEZIER(S1)([cHbis, cIbis]);
var surfGI = MAP(sGI)(domain2);
var surfHIbis = MAP(sHIbis)(domain2);


var base23 = SIMPLEX_GRID([
	[-4.75, 0.15],
	[-18.05, 0.8],
	[-1.43, 1.07]
	]);
var base23bis = SIMPLEX_GRID([
	[-4.6, 0.15],
	[-18.05, 0.8],
	[-1.43, 1.07]
	]);

var base24 = SIMPLEX_GRID([
	[-4.75, 0.15],
	[-18.85, 2],
	[-2.3, 0.21]
	]);
var base24bis = SIMPLEX_GRID([
	[-4.6, 0.15],
	[-18.85, 2],
	[-2.3, 0.21]
	]);

var base25 = SIMPLEX_GRID([
	[-4.6, 0.3],
	[-20.85, 6.8],
	[0.75]
	]);

var base26 = SIMPLEX_GRID([
	[-4.7, 0.2],
	[-20.85, 6.75],
	[-0.75, 0.48]
	]);
var base26bis = SIMPLEX_GRID([
	[-4.6, 0.2],
	[-20.85, 6.75],
	[-0.75, 0.48]
	]);

var base27 = SIMPLEX_GRID([
	[-4.75, 0.15],
	[-20.85, 6.7],
	[-0.75, -0.48, 0.2]
	]);
var base27bis = SIMPLEX_GRID([
	[-4.6, 0.15],
	[-20.85, 6.7],
	[-0.75, -0.48, 0.2]
	]);

var base28 = SIMPLEX_GRID([
	[-4.75, 0.15],
	[-20.85, 0.1, -0.6, 6],
	[-0.75, -0.68, 0.6]
	]);
var base28bis = SIMPLEX_GRID([
	[-4.6, 0.15],
	[-20.85, 0.1, -0.6, 6],
	[-0.75, -0.68, 0.6]
	]);

var base29 = SIMPLEX_GRID([
	[-4.75, 0.15],
	[-20.85, 0.1, 0.6, 6],
	[-0.75, -0.68, -0.6, 0.48]
	]);
var base29bis = SIMPLEX_GRID([
	[-4.6, 0.15],
	[-20.85, 0.1, 0.6, 6],
	[-0.75, -0.68, -0.6, 0.48]
	]);

var base30 = SIMPLEX_GRID([
	[-4.6, 0.3],
	[-18.2, 9.45],
	[-2.51, 0.49]
	]);

var base31 = SIMPLEX_GRID([
	[-4.9, 8.4],
	[-18.2, 2.75],
	[-2.51, 0.49]
	]);

var base32 = SIMPLEX_GRID([
	[-4.75, 8.7],
	[-18.05, 2.9],
	[-8.2, 0.25]
	]);

var base33 = SIMPLEX_GRID([
	[-4.7, 0.2,-8.4,0.2],
	[-18.05,2.25],
	[-3, 0.3]
	]);
var base34 = SIMPLEX_GRID([
	[-4.75, 0.15,-8.4,0.15],
	[-18.05, 2.25],
	[-3.3, 0.5]
	]);
var base35 = SIMPLEX_GRID([
	[-4.75, 0.15,-8.4,0.15],
	[-18.05, 0.45, -1.35, 0.45],
	[-3.8, 2.2]
	]);
var base36 = SIMPLEX_GRID([
	[-4.7, 0.2,-8.4,0.2],
	[-18.05, 0.45, -1.35, 0.45],
	[-6, 0.4]
	]);
var base37 = SIMPLEX_GRID([
	[-4.75, 0.15,-8.4,0.15],
	[-18.05, 0.45, -1.35, 0.45],
	[-6.4, 1.8]
	]);

var base40 = SIMPLEX_GRID([
	[-4.5, 9.2],
	[-18.05, 3.15],
	[-8.45, 0.05]
	]);



var controlpointsL = [[4.75, 18.5, 6.4],[4.75, 19.85, 6.4],[0, 0, 4],[0, 0, -4]]; 
var cL = CUBIC_HERMITE(S0)(controlpointsL); 
var curveL = MAP(cL)(domain1); 

var controlpointsLbis = [[13.45, 18.5, 6.4],[13.45, 19.85, 6.4],[0, 0, 4],[0, 0, -4]]; 
var cLbis = CUBIC_HERMITE(S0)(controlpointsLbis); 
var curveLbis = MAP(cLbis)(domain1);
//DRAW(curveLbis); 


var controlpointsM = [[4.9, 18.5, 6.4],[4.9, 19.85, 6.4],[0, 0, 4],[0, 0, -4]]; 
var cM = CUBIC_HERMITE(S0)(controlpointsM); 
var curveM = MAP(cM)(domain1); 

var controlpointsMbis = [[13.3, 18.5, 6.4],[13.3, 19.85, 6.4],[0, 0, 4],[0, 0, -4]]; 
var cMbis = CUBIC_HERMITE(S0)(controlpointsMbis); 
var curveMbis = MAP(cMbis)(domain1);
//DRAW(curveMbis); 


var sLM = BEZIER(S1)([cL, cM])
var surfLM = MAP(sLM)(domain2);
var sLMbis = BEZIER(S1)([cLbis, cMbis])
var surfLMbis = MAP(sLMbis)(domain2);

var controlpointsN = [[4.75, 18.5, 8.2],[4.75, 19.85, 8.2],[0, 1, 0],[0, 1, 0]]; 
var cN = CUBIC_HERMITE(S0)(controlpointsN); 
var curveN = MAP(cN)(domain1); 

var controlpointsNbis = [[13.45, 18.5, 8.2],[13.45, 19.85, 8.2],[0, 1, 0],[0, 1, 0]]; 
var cNbis = CUBIC_HERMITE(S0)(controlpointsNbis); 
var curveNbis = MAP(cNbis)(domain1); 

var sLN = BEZIER(S1)([cL, cN])
var surfLN = MAP(sLN)(domain2);
var sLNbis = BEZIER(S1)([cLbis, cNbis])
var surfLNbis = MAP(sLNbis)(domain2);

var controlpointsO = [[4.9, 18.5, 8.2],[4.9, 19.85, 8.2],[0, 1, 0],[0, 1, 0]]; 
var cO = CUBIC_HERMITE(S0)(controlpointsO); 
var curveO = MAP(cO)(domain1); 

var controlpointsObis = [[13.3, 18.5, 8.2],[13.3, 19.85, 8.2],[0, 1, 0],[0, 1, 0]]; 
var cObis = CUBIC_HERMITE(S0)(controlpointsObis); 
var curveObis = MAP(cObis)(domain1); 

var sMO = BEZIER(S1)([cM, cO])
var surfMO = MAP(sMO)(domain2);
var sMObis = BEZIER(S1)([cMbis, cObis])
var surfMObis = MAP(sMObis)(domain2);

var arco = STRUCT([surfLM, surfLN, surfMO]);
var arcobis = STRUCT([surfLMbis, surfLNbis, surfMObis]);


var basePortico1 = STRUCT([base20, base21,base22, surfGH, surfGI, base23, base24, base25, base26, base27, base28, base29, base30, base31, base32, base33, base34,
 base35, base36, base37, arco, arcobis, base40]);
var baseportico2 = T([0])([8.7])(STRUCT([base20, base21bis,base22bis, surfGHbis, surfHIbis, base23bis, base24bis, base25, base26bis, base27bis, base28bis, base29bis, base30]));
 

var basePortico = STRUCT([basePortico1, baseportico2]);
//DRAW(basePortico)
//var basePorticoY= R([0, 1])([PI/2])(basePorticoX);
//basePorticoY = T([0])([18.2])(basePorticoY);
//DRAW(basePorticoY);
//var basePorticoZ= R([0, 1])([PI])(basePorticoX);
//basePorticoZ = T([0, 1])([18.2, 18.2])(basePorticoZ);
//DRAW(basePorticoZ);
//var basePorticoW= R([0, 1])([3*PI/2])(basePorticoX);
//basePorticoW = T([1])([18.2])(basePorticoW);
//DRAW(basePorticoW);


//colonna 
//base

var b1 = CUBOID([0.5, 0.5, 0.1]);

var p10 = [[0.18,0,0], [0.23,0,0], [0.28,0,0.05], [0.15,0,0.08]];
var k10 = [0,0,0,1,2,2,2];
var c10 = NUBS(S0)(2)(k10)(p10);
var m10 = ROTATIONAL_SURFACE(c10);
var b2 = MAP(m10)(domain3);
	

var p11 = [[0.15,0,0.08], [0.23,0,0.1], [0.15,0,0.11], [0.1,0,0.12]];
var k11 = [0,0,0,1,2,2,2];
var c11 = NUBS(S0)(2)(k11)(p11);
var m11 = ROTATIONAL_SURFACE(c11);
var b3 = MAP(m11)(domain3);	
var baseColonna = STRUCT([b2, b3]);
baseColonna = T([0, 1, 2])([0.25, 0.25, 0.1])(baseColonna);

//CAPITELLO
var cap1 = S([2])([-1])(baseColonna);
cap1 = T([0, 1, 2])([-0.25, -0.25, 0.1])(cap1);



var pVoluta1 = [[0.18, 0, 0], [0.18, 0.18, 0], [0.18, 0.25, 0], [0.18, 0.4, 0], [0.18, 0.47, 0.1], [0.18, 0.5, -0.2],[0.18, 0.4, -0.3], [0.18, 0.28, -0.35], [0.18, 0.15, -0.32],[0.18, 0.15, -0.2], [0.18, 0.45, 0.05],[0.18, 0, -0.03], [0.18, 0, 0]];
var pVoluta2 = [[-0.18, 0, 0], [-0.18, 0.18, 0], [-0.18, 0.25, 0], [-0.18, 0.4, 0], [-0.18, 0.47, 0.1], [-0.18, 0.5, -0.2],[-0.18, 0.4, -0.3], [-0.18, 0.28, -0.35], [-0.18, 0.15, -0.32],[-0.18, 0.15, -0.2], [-0.18, 0.45, 0.05],[-0.18, 0, -0.03], [-0.18, 0, 0]];


var c1Voluta = BEZIER(S0)(pVoluta1);
var c2Voluta = BEZIER(S0)(pVoluta2);
var curve = MAP(c1Voluta)(domain1);
//DRAW(curve);

var pVoluta1C = [[0.18, 0.25, 0]];
var pVoluta2C = [[-0.18, 0.25, 0]];

var cVoluta1 = BEZIER(S0)(pVoluta1C);
var cVoluta2 = BEZIER(S0)(pVoluta2C);
var curveVoluta1 = BEZIER(S1)([c1Voluta,cVoluta1]);
var curveVoluta2 = BEZIER(S1)([c2Voluta,cVoluta2]);
var curveVoluta3 = BEZIER(S1)([c1Voluta,c2Voluta]);
var surfaceVoluta1 = MAP(curveVoluta1)(domain2);
var surfaceVoluta2 = MAP(curveVoluta2)(domain2);
var surfaceVoluta3 = MAP(curveVoluta3)(domain2);

var volutaDX = STRUCT([surfaceVoluta1, surfaceVoluta2, surfaceVoluta3]);
var volutaSX = S([1])([-1])(volutaDX);


var capitello = STRUCT([cap1, volutaDX, volutaSX]);
capitello = R([0, 1])([PI/2])(capitello);
capitello = T([0, 1, 2])([13.35, 20.7, 8.2])(capitello);

var baseStilobate = STRUCT([b1, baseColonna]);
baseStilobate = T([0, 1, 2])([13.1, 20.45, 3])(baseStilobate);


var fusto = cylinder(0.18, 5.2, 20, 20);
fusto = T([0, 1, 2])([13.35, 20.7, 3])(fusto);


var colonna1 = STRUCT ([baseStilobate, capitello, fusto]);
var colonna2 = T([0])([-1.7])(colonna1);
var colonna3 = T([0])([-1.7])(colonna2);
var colonna4 = T([0])([-5])(colonna1);
var colonna5 = T([0])([-8.5])(colonna1);
var colonna6 =  T([0])([-6.8])(colonna1);

var colonne = STRUCT([colonna1, colonna2, colonna3, colonna4, colonna5, colonna6]);
//DRAW(colonne)
//var colonneY= R([0, 1])([PI/2])(colonneX);
//colonneY = T([0])([18.2])(colonneY);
//DRAW(colonneY);
//var colonneZ= R([0, 1])([PI])(colonneX);
//colonneZ = T([0, 1])([18.2, 18.2])(colonneZ);
//DRAW(colonneZ);
//var colonneW= R([0, 1])([3*PI/2])(colonneX);
//colonneW = T([1])([18.2])(colonneW);
//DRAW(colonneW);
//CORNICIONE PORTICO



var knotsp = [0,0,0,1,2,3,4, 4, 4];

var points1p =  [[13.45,20.95,8.45],[13.5,21,8.45],[13.55,21.05,8.4], [13.5,21,8.3],[13.46,20.99,8.25],[13.45,20.95,8.2]];
var points2p = [[4.75,20.95,8.45],[4.7,21,8.45],[4.65,21.05,8.4], [4.7,21,8.3],[4.74,20.99,8.25],[4.75,20.95,8.2]];
var points3p = [[13.45,18,8.45],[13.5,18.05,8.45],[13.55,18.1,8.4], [13.5,18.05,8.3],[13.46,18.04,8.25],[13.45,18,8.2]];
var points4p = [[4.75,18,8.45],[4.7,18.05,8.45],[4.65,18.1,8.4], [4.7,18.05,8.3],[4.74,18.04,8.25],[4.75,18,8.2]];
var points5p = [[18,18,8.45],[18.05,18.05,8.45],[18.1,18.1,8.4], [18.05,18.05,8.3],[18.04,18.04,8.25],[18,18,8.2]];
var points6p = [[0.15,18,8.45],[0.1,18.05,8.45],[0.05,18.1,8.4], [0.1,18.05,8.3],[0.14,18.04,8.25],[0.15,18,8.2]];


var curve1p = NUBS(S0)(2)(knotsp)(points1p);
var curve2p = NUBS(S0)(2)(knotsp)(points2p);
var curve3p = NUBS(S0)(2)(knotsp)(points3p);
var curve4p = NUBS(S0)(2)(knotsp)(points4p);
var curve5p = NUBS(S0)(2)(knotsp)(points5p);
var curve6p = NUBS(S0)(2)(knotsp)(points6p);

var supP = BEZIER(S1)([curve1p,curve2p]);
var cornicione1p = MAP(supP)(domain2);
var supP2 = BEZIER(S1)([curve1p,curve3p]);
var cornicione2p = MAP(supP2)(domain2);
var supP3 = BEZIER(S1)([curve2p,curve4p]);
var cornicione3p = MAP(supP3)(domain2);
var supP4 = BEZIER(S1)([curve3p,curve5p]);
var cornicione4p = MAP(supP4)(domain2);
var supP5 = BEZIER(S1)([curve4p,curve6p]);
var cornicione5p = MAP(supP5)(domain2);


var portico = COLOR([254/255, 254/255, 233/255])(STRUCT ([basePortico1, baseportico2, base31, base32, base33, base34,
 base35, base36, base37, arco, arcobis, colonne, base40, cornicione1p, cornicione2p, cornicione3p, cornicione4p, cornicione5p]));
//DRAW(portico);

//var portico1 = R([0, 1])([PI/2])(portico);
//var portico1b = T([0])([10])(portico1);
//DRAW(portico1b);


// TETTO PORTICO

var controlpointsP = [[13.7, 18.1, 8.45],[9.1, 18.1, 10.5],[-1, -0.5, 0.3],[-1, -0.5, 0.3]]; 
var cP = CUBIC_HERMITE(S0)(controlpointsP); 
var curveP = MAP(cP)(domain1); 

var controlpointsQ = [[13.7, 21.2, 8.45],[9.1, 21.2, 10.5],[-1, -0.5, 0.3],[-1, -0.5, 0.3]]; 
var cQ = CUBIC_HERMITE(S0)(controlpointsQ); 
var curveQ = MAP(cQ)(domain1); 

var sPQ = BEZIER(S1)([cP, cQ])
var surfPQ = MAP(sPQ)(domain2);

var controlpointsPbis = [[13.7, 18.1, 8.5],[9.1, 18.1, 10.55],[-1, -0.5, 0.3],[-1, -0.5, 0.3]]; 
var cPbis = CUBIC_HERMITE(S0)(controlpointsPbis); 
var curvePbis = MAP(cPbis)(domain1); 

var controlpointsQbis = [[13.7, 21.2, 8.5],[9.1, 21.2, 10.55],[-1, -0.5, 0.3],[-1, -0.5, 0.3]]; 
var cQbis = CUBIC_HERMITE(S0)(controlpointsQbis); 
var curveQbis = MAP(cQbis)(domain1); 

var sPQbis = BEZIER(S1)([cPbis, cQbis])
var surfPQbis = MAP(sPQbis)(domain2);

var sQQbis = BEZIER(S1)([cQ, cQbis])
var surfQQbis = MAP(sQQbis)(domain2);

var tettoSX= STRUCT([surfPQ, surfPQbis, surfQQbis]);
var tettoDX = S([0])([-1])(tettoSX);
tettoDX = T([0])([18.2])(tettoDX);

var tettoPortico = COLOR([153/255, 51/255, 0])(STRUCT([tettoSX, tettoDX]));
//DRAW(tettoPortico);


//TIMPANO

var controlpointsR = [[11.7, 20.9, 9],[11.1, 20.9, 9],[0, 0, -0.7],[0, 0, 0.7]]; 
var cR = CUBIC_HERMITE(S0)(controlpointsR); 
var curveR = MAP(cR)(domain1); 
//DRAW(curveR)

var controlpointsRbis = [[11.7, 20.9, 9],[11.1, 20.9, 9],[0, 0, 0.7],[0, 0, -0.7]];
var cRbis = CUBIC_HERMITE(S0)(controlpointsRbis); 
var curveRbis = MAP(cRbis)(domain1);
//DRAW(curveRbis)


var controlpointsSA = [[13.7, 20.9, 8.45],[11.7, 20.9, 8.45],[-1, 0, 0],[-1, 0, 0]]; 
var cSA = CUBIC_HERMITE(S0)(controlpointsSA); 
var curveSA = MAP(cSA)(domain1); 
//DRAW(curveSA)
var controlpointsSB = [[11.7, 20.9, 8.45],[11.1, 20.9, 8.45],[-1, 0, 0],[-1, 0, 0]]; 
var cSB = CUBIC_HERMITE(S0)(controlpointsSB); 
var curveSB = MAP(cSB)(domain1); 
//DRAW(curveSB)
var controlpointsSC = [[11.1, 20.9, 8.45],[9.1, 20.9, 8.45],[-1, 0, 0],[-1, 0, 0]]; 
var cSC = CUBIC_HERMITE(S0)(controlpointsSC); 
var curveSC = MAP(cSC)(domain1); 
//DRAW(curveSC)

var controlpointsSD = [[13.7, 20.9, 8.45],[11.7, 20.9, 9.34],[-2, 0, 0.89],[-2, 0, 0.89]]; 
var cSD = CUBIC_HERMITE(S0)(controlpointsSD); 
var curveSD = MAP(cSD)(domain1); 
//DRAW(curveSD)
var controlpointsSE = [[11.7, 20.9, 9.34],[11.1, 20.9, 9.63],[-0.6, 0, 0.29],[-0.6, 0, 0.29]];  
var cSE = CUBIC_HERMITE(S0)(controlpointsSE); 
var curveSE = MAP(cSE)(domain1); 
//DRAW(curveSE)
var controlpointsSF = [[11.1, 20.9, 9.63],[9.1, 20.9, 10.55],[-2, 0, 0.92],[-2, 0, 0.92]]; 
var cSF = CUBIC_HERMITE(S0)(controlpointsSF); 
var curveSF = MAP(cSF)(domain1); 
//DRAW(curveSF)

var sSAD = BEZIER(S1)([cSA, cSD])
var surfSAD = MAP(sSAD)(domain2);
surfSAD = COLOR([254/255, 254/255, 233/255])(surfSAD);
var sSRB = BEZIER(S1)([cR, cSB])
var surfSRB = MAP(sSRB)(domain2);
surfSRB = COLOR([254/255, 254/255, 233/255])(surfSRB);
var sSRE = BEZIER(S1)([cRbis, cSE])
var surfSRE = MAP(sSRE)(domain2);
surfSRE = COLOR([254/255, 254/255, 233/255])(surfSRE);
var sSCF = BEZIER(S1)([cSC, cSF])
var surfSCF = MAP(sSCF)(domain2);
surfSCF = COLOR([254/255, 254/255, 233/255])(surfSCF);
var sRRbis = BEZIER(S1)([cR, cRbis])
var surfRRbis = MAP(sRRbis)(domain2);
surfRRbis = COLOR([240/255, 248/255, 1, 0.7])(surfRRbis); //COLORE VETRO
var torusSurface = TORUS_SURFACE([0.05, 0.3])([15,15]);
torusSurface = R([1, 2])([PI/2])(torusSurface);
var scaled = SCALE([1,2])([0.4,0.5])(torusSurface);
scaled = T([0, 1, 2])([11.4, 20.9, 9])(scaled);
scaled = COLOR([254/255, 254/255, 233/255])(scaled);
var scaled1 = T([0])([-4.6])(scaled);


var timpanoSX = STRUCT([surfSAD, surfSRB, surfSRE, surfSCF, surfRRbis]);
var timpanoDX = S([0])([-1])(timpanoSX);
timpanoDX = T([0])([18.2])(timpanoDX);



var timpano = STRUCT([timpanoDX, timpanoSX, scaled, scaled1]);
//DRAW(timpano);


//SCALINATA

var  scala1 =  SIMPLEX_GRID([
	[-4.88, 8.4],
	[-20.95, 0.35],
	[-2.7, 0.15]
	]);

var  scala2 =  SIMPLEX_GRID([
	[-4.88, 8.4],
	[-21.3, 0.35],
	[-2.55, 0.15]
	]);
var  scala3 =  SIMPLEX_GRID([
	[-4.88, 8.4],
	[-21.65, 0.35],
	[-2.4, 0.15]
	]);
var  scala4 =  SIMPLEX_GRID([
	[-4.88, 8.4],
	[-22, 0.35],
	[-2.25, 0.15]
	]);
var  scala5 =  SIMPLEX_GRID([
	[-4.88, 8.4],
	[-22.35, 0.35],
	[-2.1, 0.15]
	]);
var  scala6 =  SIMPLEX_GRID([
	[-4.88, 8.4],
	[-22.7, 0.35],
	[-1.95, 0.15]
	]);
var  scala7 =  SIMPLEX_GRID([
	[-4.88, 8.4],
	[-23.05, 0.35],
	[-1.8, 0.15]
	]);
var  scala8 =  SIMPLEX_GRID([
	[-4.88, 8.4],
	[-23.4, 0.35],
	[-1.65, 0.15]
	]);
var  scala9 =  SIMPLEX_GRID([
	[-4.88, 8.4],
	[-23.75, 0.35],
	[-1.5, 0.15]
	]);
var  scala10 =  SIMPLEX_GRID([
	[-4.88, 8.4],
	[-24.1, 0.35],
	[-1.35, 0.15]
	]);
var  scala11 =  SIMPLEX_GRID([
	[-4.88, 8.4],
	[-24.45, 0.35],
	[-1.2, 0.15]
	]);
var  scala12 =  SIMPLEX_GRID([
	[-4.88, 8.4],
	[-24.8, 0.35],
	[-1.05, 0.15]
	]);
var  scala13 =  SIMPLEX_GRID([
	[-4.88, 8.4],
	[-25.15, 0.35],
	[-0.9, 0.15]
	]);
var  scala14 =  SIMPLEX_GRID([
	[-4.88, 8.4],
	[-25.5, 0.35],
	[-0.75, 0.15]
	]);
var  scala15 =  SIMPLEX_GRID([
	[-4.88, 8.4],
	[-25.85, 0.35],
	[-0.6, 0.15]
	]);
var  scala16 =  SIMPLEX_GRID([
	[-4.88, 8.4],
	[-26.2, 0.35],
	[-0.45, 0.15]
	]);
var  scala17 =  SIMPLEX_GRID([
	[-4.88, 8.4],
	[-26.55, 0.35],
	[-0.3, 0.15]
	]);
var  scala18 =  SIMPLEX_GRID([
	[-4.88, 8.4],
	[-26.9, 0.35],
	[-0.15, 0.15]
	]);
var  scala19 =  SIMPLEX_GRID([
	[-4.88, 8.4],
	[-27.25, 0.35],
	[0.15]
	]);

var scale = COLOR([254/255, 254/255, 233/255])(STRUCT([scala1, scala2, scala3, scala4, scala5, scala6, scala7, scala8, scala9, scala10, scala11, scala12, scala13, scala14, scala15, scala16, scala17, scala18, scala19]));

var porticoInteroX = STRUCT([portico, tettoPortico, timpano, scale]);
DRAW(porticoInteroX);
var porticoInteroY= R([0, 1])([PI/2])(porticoInteroX);
porticoInteroY = T([0])([18.2])(porticoInteroY);
DRAW(porticoInteroY);
var porticoInteroZ= R([0, 1])([PI])(porticoInteroX);
porticoInteroZ = T([0, 1])([18.2, 18.2])(porticoInteroZ);
DRAW(porticoInteroZ);
var porticoInteroW= R([0, 1])([3*PI/2])(porticoInteroX);
porticoInteroW = T([1])([18.2])(porticoInteroW);
DRAW(porticoInteroW);

//MERLI

var pMerloLatoSX = [[0, 0, 0], [0, -0.15, 0], [0, -0.3, 0], [0, -0.3, 0], [0, -0.3, 0],[0, -0.35, -0.1], [0, -0.3, -0.2],  [0, -0.15, -0.2], [0, -0.15, -0.2], [0, -0.15, -0.2], [0, 0, -0.2], [0, 0, -0.2], [0, 0, -0.2], [0, 0, -0.2],[0, 0, 0]];
var pMerloLatoDX = [[0.1, 0, 0], [0.1, -0.15, 0], [0.1, -0.3, 0], [0.1, -0.3, 0], [0.1, -0.3, 0],[0.1, -0.35, -0.1], [0.1, -0.3, -0.2],  [0.1, -0.15, -0.2], [0.1, -0.15, -0.2], [0.1, -0.15, -0.2], [0.1, 0, -0.2], [0.1, 0, -0.2], [0.1, 0, -0.2], [0.1, 0, -0.2],[0.1, 0, 0]];

var cMerloLatoSX = BEZIER(S0)(pMerloLatoSX);
var cMerloLatoDX = BEZIER(S0)(pMerloLatoDX);
var curve = MAP(cMerloLatoSX)(domain1);
//DRAW(curve);

var pMerloLatoSXchiusura = [[0, 0, 0]];
var pMerloLatoDXchiusura = [[0.1, 0, 0]];

var cMerloLatoSXchiusura = BEZIER(S0)(pMerloLatoSXchiusura);
var cMerloLatoDXchiusura = BEZIER(S0)(pMerloLatoDXchiusura);
var merloLatoSX = BEZIER(S1)([cMerloLatoSX,cMerloLatoSXchiusura]);
var merloLatoDX = BEZIER(S1)([cMerloLatoDX,cMerloLatoDXchiusura]);
var merloCorpo = BEZIER(S1)([cMerloLatoSX,cMerloLatoDX]);
var surfacemerloLatoSX = MAP(merloLatoSX)(domain2);
var surfacemerloLatoDX = MAP(merloLatoDX)(domain2);
var surfacemerloCorpo = MAP(merloCorpo)(domain2);


var merlo = STRUCT([surfacemerloCorpo, surfacemerloLatoDX, surfacemerloLatoSX]);
var merlo1 = R([0, 1])([PI])(merlo);
var merlo1O = R([0, 2])([-PI/6])(merlo1);
merlo1O = T([0, 1, 2])([5.13,20.9, 8.727])(merlo1O);
var merlo1Ox = R([0, 2])([PI/6])(merlo1);
merlo1Ox = T([0, 1, 2])([13.2,20.9, 8.67])(merlo1Ox);
DRAW(merlo1Ox)
merlo1 =T([0, 1, 2])([4.85, 21, 8.45])(merlo1);
var merlo1x = T([0, 1, 2])([-4.85, -7.6, 0])(merlo1);
var merlo1y = T([0, 1, 2])([13.45, -7.5, 0])(merlo1);
var merlo1OC = T([0,1, 2])([4.3,-0.1, 2.03])(merlo1);
DRAW(merlo1OC);

var merlo2 = R([0, 1])([PI/2])(merlo);
var merlo2O = R([1, 2])([-PI/6])(merlo2);
merlo2O = T([0, 1, 2])([20.9,13.05, 8.76])(merlo2O);
var merlo2Ox = R([1, 2])([PI/6])(merlo2);
merlo2Ox = T([0, 1, 2])([20.9,5.13, 8.727])(merlo2Ox);
merlo2 =T([0, 1, 2])([21, 4.85, 8.45])(merlo2);
var merlo2x = T([0, 1, 2])([-7.6, -4.85, 0])(merlo2);
var merlo2y = T([0, 1, 2])([-7.5, 13.35, 0])(merlo2);

var merlo3 = R([0, 1])([-PI/2])(merlo);
var merlo3O = R([1, 2])([-PI/6])(merlo3);
merlo3O = T([0, 1, 2])([-2.7,13.15, 8.7])(merlo3O);
var merlo3Ox = R([1, 2])([PI/6])(merlo3);
merlo3Ox = T([0, 1, 2])([-2.7,5.13, 8.727])(merlo3Ox);
merlo3 =T([0, 1, 2])([-2.8, 4.85, 8.45])(merlo3);
var merlo3x = T([0, 1, 2])([7.6, -4.85, 0])(merlo3);
var merlo3y = T([0, 1, 2])([7.5, 13.35, 0])(merlo3);

var merlo4 = T([0, 1, 2])([4.75, -2.8, 8.45])(merlo);
var merlo4O = R([0, 2])([-PI/6])(merlo4);
merlo4O = T([0, 1, 2])([5.15,0, -1.02])(merlo4O);
var merlo4Ox = R([0, 2])([PI/6])(merlo4);
merlo4Ox = T([0, 1, 2])([4.75,0, 3.77])(merlo4Ox);
var merlo4x = T([0, 1, 2])([-4.85, 7.6, 0])(merlo4);
var merlo4y = T([0, 1, 2])([13.35, 7.6, 0])(merlo4);
var merlo4OC = T([0,1, 2])([4.3,-0.1, 2.03])(merlo4);
DRAW(merlo4OC);


var generaMerli = function (n, d, a, merlo){
	var merlo1 = merlo;
	DRAW(COLOR([254/255, 254/255, 233/255])(merlo1));
	for (var i = 1; i<n; i++){
		merlo1 = T([a])([d])(merlo1);
        DRAW(COLOR([254/255, 254/255, 233/255])(merlo1));
	}
	
}

var generaMerliObliqui = function (n, d, h, a, merlo){
	var merlo1 = merlo;
	DRAW(COLOR([254/255, 254/255, 233/255])(merlo1));
	for (var i = 1; i<n; i++){
		merlo1 = T([a, 2])([d, h])(merlo1);
        DRAW(COLOR([254/255, 254/255, 233/255])(merlo1));
	}
	
}
generaMerli(35, 0.25,0, merlo1);
generaMerli(12, -0.25, 0, merlo1x);
generaMerli(12, 0.25, 0, merlo1y);
generaMerli(35, 0.25, 1, merlo2);
generaMerli(12, -0.25, 1, merlo2x);
generaMerli(12, 0.25, 1, merlo2y);
generaMerli(35, 0.25, 1, merlo3);
generaMerli(12, -0.25, 1, merlo3x);
generaMerli(12, 0.25, 1, merlo3y);
generaMerli(35, 0.25, 0, merlo4);
generaMerli(12, -0.25, 0, merlo4x);
generaMerli(12, 0.25, 0, merlo4y);
generaMerliObliqui(16, 0.25, 0.11, 0, merlo1O);
generaMerliObliqui(16, -0.25, 0.11, 0, merlo1Ox);
generaMerliObliqui(16, -0.25, 0.11, 1, merlo2O);
generaMerliObliqui(16, 0.25, 0.11, 1, merlo2Ox);
generaMerliObliqui(16, -0.25, 0.11, 1, merlo3O);
generaMerliObliqui(16, 0.25, 0.11, 1, merlo3Ox);
generaMerliObliqui(16, 0.25, 0.11, 0, merlo4O);
generaMerliObliqui(16, -0.25, 0.11, 0, merlo4Ox);

//FREGIO FINESTRE 0.7x0.7


var f1 = SIMPLEX_GRID([
	[0.9],
	[0.15],
	[0.1]
	]);


var pF1 = [[0, 0.15, 0.1], [0.025, 0, 0.1], [0.025, 0, 0.1],  [0.05, 0.1, 0.1], [0.05, 0.1, 0.1], [0.05, 0.1, 0.1],[0.075, 0, 0.1], [0.075, 0, 0.1], [0.1, 0.15, 0.1]];
var pF2 = [[0.45, 0.15, 0.5], [0.45, 0, 0.475], [0.45, 0, 0.475], [0.45, 0.1, 0.45], [0.45, 0.1, 0.45], [0.45, 0.1, 0.45], [0.45, 0, 0.425], [0.45, 0, 0.425], [0.45, 0.15, 0.4] ];
var pF3 = [[0.9, 0.15, 0.1], [0.875, 0, 0.1], [0.875, 0, 0.1],  [0.85, 0.1, 0.1], [0.85, 0.1, 0.1], [0.85, 0.1, 0.1],[0.825, 0, 0.1], [0.825, 0, 0.1], [0.8, 0.15, 0.1]];

var cF1 = BEZIER(S0)(pF1);
var cF2 = BEZIER(S0)(pF2);
var cF3 = BEZIER(S0)(pF3);

var cF12 = BEZIER(S1)([cF2,cF1]);
var cF23 = BEZIER(S1)([cF2,cF3]);
var surfaceF12 = MAP(cF12)(domain2);
var surfaceF23 = MAP(cF23)(domain2);


var pF4 = [[0, 0.15, 0], [0, 0, 0], [0, -0.15, -0.1], [0, -0.15, -0.1], [0, 0, -0.2], [0, 0, -0.2],[0, 0, -0.2],[0, 0, -0.2], [0, 0, -0.2],[0, 0, -0.2],[0, -0.1, -0.35], [0, -0.1, -0.35], [0, 0.15, -0.5]];
var pF5 = [[0.1, 0.15, 0], [0.1, 0, 0], [0.1, -0.15, -0.1], [0.1, -0.15, -0.1], [0.1, 0, -0.2], [0.1, 0, -0.2],[0.1, 0, -0.2],[0.1, 0, -0.2], [0.1, 0, -0.2],[0.1, 0, -0.2],[0.1, -0.1, -0.35], [0.1, -0.1, -0.35], [0.1, 0.15, -0.5]];
var pF4C = [[0, 0.15, 0]];
var pF5C = [[0.1, 0.15, 0]];
var cF4 = BEZIER(S0)(pF4);
var cF5 = BEZIER(S0)(pF5);
var cF4C = BEZIER(S0)(pF4C);
var cF5C = BEZIER(S0)(pF5C);
var cF45 = BEZIER(S1)([cF4,cF5]);
var surfaceF45 = MAP(cF45)(domain2);
var cF44C = BEZIER(S1)([cF4,cF4C]);
var surfaceF44C = MAP(cF44C)(domain2);
var cF55C = BEZIER(S1)([cF5,cF5C]);
var surfaceF55C = MAP(cF55C)(domain2);

var fregioLateraleSX = STRUCT([surfaceF45, surfaceF44C, surfaceF55C]);
var fregioLateraleDX = T([0])([0.8])(fregioLateraleSX);


var fregioFinestra = COLOR([254/255, 254/255, 233/255])(STRUCT([f1, surfaceF12, surfaceF23, fregioLateraleSX, fregioLateraleDX]));

var fregioFinestra1 = T([0, 1, 2])([2.45, 0, 5.9])(fregioFinestra);
var fregioFinestra2 = T([0, 1, 2])([12.4, 0, 0])(fregioFinestra1);
var fregioFinestra3 = R([0, 1])([PI/2])(fregioFinestra);
fregioFinestra3 = T([0, 1, 2])([18.15, 2.45, 5.9])(fregioFinestra3);
var fregioFinestra4 = T([0, 1, 2])([0, 12.4, 0])(fregioFinestra3);
var fregioFinestra5 = R([0, 1])([-PI/2])(fregioFinestra);
fregioFinestra5 = T([0, 1, 2])([0, 3.35, 5.9])(fregioFinestra5);
var fregioFinestra6 = T([0, 1, 2])([0, 12.4, 0])(fregioFinestra5);
var fregioFinestra7 = R([0, 1])([-PI])(fregioFinestra);
fregioFinestra7 = T([0, 1, 2])([3.35, 18.15, 5.9])(fregioFinestra7);
var fregioFinestra8 = T([0, 1, 2])([12.4, 0, 0])(fregioFinestra7);
var fregiFinestre = STRUCT([fregioFinestra1, fregioFinestra2, fregioFinestra3, fregioFinestra4, fregioFinestra5, fregioFinestra6, fregioFinestra7, fregioFinestra8]);
DRAW(fregiFinestre);

//FREGIO PORTA 1.5 m

//FREGIO FINESTRE 0.7x0.7

var domain1 = INTERVALS(1)(20);
var domain2 = DOMAIN([[0,1],[0,1]])([10,10]);
var domain3 = DOMAIN([[0,1],[0,2*PI]])([10,10]);

var p1 = SIMPLEX_GRID([
	[1.9],
	[0.3],
	[0.2]
	]);


var pP1 = [[0, 0.3, 0.2], [0.05, 0, 0.2], [0.05, 0, 0.2],  [0.1, 0.15, 0.2], [0.1, 0.15, 0.2], [0.1, 0.15, 0.2],[0.15, 0, 0.2], [0.15, 0, 0.2], [0.2, 0.3, 0.2]];
var pP2 = [[0.95, 0.3, 1], [0.95, 0, 0.95], [0.95, 0, 0.95], [0.95, 0.15, 0.9], [0.95, 0.5, 0.9], [0.95, 0.5, 0.9], [0.95, 0, 0.85], [0.95, 0, 0.85], [0.95, 0.3, 0.8]];
var pP3 = [[1.9, 0.3, 0.2], [1.85, 0, 0.2], [1.85, 0, 0.2],  [1.8, 0.15, 0.2], [1.8, 0.15, 0.2], [1.8, 0.15, 0.2],[1.75, 0.15, 0.2], [1.75, 0.15, 0.2], [1.7, 0.3, 0.2]];

var cP1 = BEZIER(S0)(pP1);
var cP2 = BEZIER(S0)(pP2);
var cP3 = BEZIER(S0)(pP3);

var cP12 = BEZIER(S1)([cP2,cP1]);
var cP23 = BEZIER(S1)([cP2,cP3]);
var surfaceP12 = MAP(cP12)(domain2);
var surfaceP23 = MAP(cP23)(domain2);


var pP4 = [[0, 0.3, 0], [0, 0, 0], [0, -0.3, -0.2], [0, -0.3, -0.2], [0, 0, -0.5], [0, 0, -0.5],[0, 0, -0.5],[0, 0, -0.5], [0, 0, -0.5],[0, 0, -0.5],[0, -0.2, -0.7], [0, -0.2, -0.7], [0, 0.3, -1]];
var pP5 = [[0.1, 0.3, 0], [0.1, 0, 0], [0.1, -0.3, -0.2], [0.1, -0.3, -0.2], [0.1, 0, -0.5], [0.1, 0, -0.5],[0.1, 0, -0.5],[0.1, 0, -0.5], [0.1, 0, -0.5],[0.1, 0, -0.5],[0.1, -0.2, -0.7], [0.1, -0.2, -0.7], [0.1, 0.3, -1]];
var pP4C = [[0, 0.3, 0]];
var pP5C = [[0.1, 0.3, 0]];
var cP4 = BEZIER(S0)(pP4);
var cP5 = BEZIER(S0)(pP5);
var cP4C = BEZIER(S0)(pP4C);
var cP5C = BEZIER(S0)(pP5C);
var cP45 = BEZIER(S1)([cP4,cP5]);
var surfaceP45 = MAP(cP45)(domain2);
var cP44C = BEZIER(S1)([cP4,cP4C]);
var surfaceP44C = MAP(cP44C)(domain2);
var cP55C = BEZIER(S1)([cP5,cP5C]);
var surfaceP55C = MAP(cP55C)(domain2);

var fregioLateralePSX = STRUCT([surfaceP45, surfaceP44C, surfaceP55C]);
var fregioLateralePDX = T([0])([1.8])(fregioLateralePSX);

var fregioPorta =  COLOR([254/255, 254/255, 233/255])(STRUCT([p1, surfaceP12, surfaceP23, fregioLateralePSX, fregioLateralePDX]));
var fregioPorta1 = T([0, 1, 2])([8.15, -0.15, 7])(fregioPorta);
var fregioPorta2 = R([0, 1])([PI])(fregioPorta);
fregioPorta2 = T([0, 1, 2])([10.05, 18.3, 7])(fregioPorta2);
var fregioPorta3 = R([0, 1])([PI/2])(fregioPorta);
fregioPorta3 = T([0, 1, 2])([18.45, 8.15, 7])(fregioPorta3);
var fregioPorta4 = R([0, 1])([-PI/2])(fregioPorta);
fregioPorta4 = T([0, 1, 2])([-0.15, 10.05, 7])(fregioPorta4);



var fregiPorte = STRUCT([fregioPorta1, fregioPorta2, fregioPorta3, fregioPorta4]);
DRAW(fregiPorte);

var merloP1 = T([0, 1, 2])([8.4, 0.05, 7])(merlo);
var merloP2 = R([0, 1])([PI/2])(merlo);
merloP2 = T([0, 1, 2])([18, 8.4, 7])(merloP2);
var merloP3 = R([0, 1])([PI])(merlo);
merloP3 = T([0, 1, 2])([8.5, 18, 7])(merloP3);
var merloP4 = R([0, 1])([-PI/2])(merlo);
merloP4 = T([0, 1, 2])([0.05, 8.5, 7])(merloP4);



generaMerli(7, 0.22, 0, merloP1);
generaMerli(7, 0.22, 1, merloP2);
generaMerli(7, 0.22, 0, merloP3);
generaMerli(7, 0.22, 1, merloP4);

//finestre
//PRIMO TIPO 0.6x0.6 m
//SECONDO TIPO 0.7x0.7 m
//TERZO TIPO 0.7x2.3
//QUARTO TIPO 0.7x2

var finestraPrimoTipo = function(){
	var  bordo1 =  SIMPLEX_GRID([
	[0.05, -0.225, 0.05, -0.225, 0.05],
	[0.05],
	[0.6]
	]);

	bordo1 = COLOR([101/255, 67/255, 33/255	])(bordo1);

    var  bordo2 =  SIMPLEX_GRID([
	[-0.05, 0.5],
	[0.05],
	[0.05, -0.5, 0.05]
	]);

	bordo2 = COLOR([101/255, 67/255, 33/255])(bordo2);

	var vetro = SIMPLEX_GRID([
	[-0.05, 0.5],
	[-0.05, 0.03],
	[-0.05, 0.5]
	]);

	vetro =  COLOR([224/255, 1, 1, 0.6])(vetro);
	vetro = BOUNDARY(vetro);


	var finestra1 = (STRUCT([bordo1, bordo2, vetro]));
	return finestra1;
}


var finestraSecondoTipo = function(){
	var  bordo1 =  SIMPLEX_GRID([
	[0.05, -0.275, 0.05, -0.275, 0.05],
	[0.05],
	[0.7]
	]);

	bordo1 = COLOR([101/255, 67/255, 33/255	])(bordo1);

    var  bordo2 =  SIMPLEX_GRID([
	[-0.05, 0.6],
	[0.05],
	[0.05, -0.6, 0.05]
	]);

	bordo2 = COLOR([101/255, 67/255, 33/255])(bordo2);

	var vetro = SIMPLEX_GRID([
	[-0.05, 0.6],
	[-0.05, 0.03],
	[-0.05, 0.6]
	]);

	vetro =  COLOR([224/255, 1, 1, 0.6])(vetro);
	vetro = BOUNDARY(vetro);


	var finestra1 = (STRUCT([bordo1, bordo2, vetro]));
	return finestra1;
}

var finestraTerzoTipo = function(){
	var  bordo1 =  SIMPLEX_GRID([
	[0.05, -0.275, 0.05, -0.275, 0.05],
	[0.05],
	[1.8]
	]);

	bordo1 = COLOR([101/255, 67/255, 33/255	])(bordo1);

    var  bordo2 =  SIMPLEX_GRID([
	[-0.05, 0.6],
	[0.05],
	[0.05, -1.7, 0.05]
	]);

	bordo2 = COLOR([101/255, 67/255, 33/255])(bordo2);

	var  bordo3 =  SIMPLEX_GRID([
	[0.05, -0.6, 0.05],
	[0.05],
	[-1.8, 0.5]
	]);

	bordo3 = COLOR([101/255, 67/255, 33/255])(bordo3);

	var  bordo4 =  SIMPLEX_GRID([
	[-0.05, 0.6],
	[0.05],
	[-2.25, 0.05]
	]);

	bordo4 = COLOR([101/255, 67/255, 33/255])(bordo4);

	var vetro = SIMPLEX_GRID([
	[-0.05, 0.6],
	[-0.05, 0.03],
	[-0.05, 2.2]
	]);

	vetro =  COLOR([224/255, 1, 1, 0.6])(vetro);
	vetro = BOUNDARY(vetro);


	var finestra1 = (STRUCT([bordo1, bordo2, bordo3, bordo4, vetro]));
	return finestra1;
}

//0.7x2
var finestraQuartoTipo = function(){
	var  bordo1 =  SIMPLEX_GRID([
	[0.05, -0.275, 0.05, -0.275, 0.05],
	[0.05],
	[1.6]
	]);

	bordo1 = COLOR([101/255, 67/255, 33/255	])(bordo1);

    var  bordo2 =  SIMPLEX_GRID([
	[-0.05, 0.6],
	[0.05],
	[0.05, -1.5, 0.05]
	]);

	bordo2 = COLOR([101/255, 67/255, 33/255])(bordo2);

	var  bordo3 =  SIMPLEX_GRID([
	[0.05, -0.6, 0.05],
	[0.05],
	[-1.6, 0.4]
	]);

	bordo3 = COLOR([101/255, 67/255, 33/255])(bordo3);

	var  bordo4 =  SIMPLEX_GRID([
	[-0.05, 0.6],
	[0.05],
	[-1.95, 0.05]
	]);

	bordo4 = COLOR([101/255, 67/255, 33/255])(bordo4);

	var vetro = SIMPLEX_GRID([
	[-0.05, 0.6],
	[-0.05, 0.03],
	[-0.05, 2.2]
	]);

	vetro =  COLOR([224/255, 1, 1, 0.6])(vetro);
	vetro = BOUNDARY(vetro);


	var finestra1 = (STRUCT([bordo1, bordo2, bordo3, bordo4, vetro]));
	return finestra1;
}

var porta = function(){
	var  bordo1 =  SIMPLEX_GRID([
	[0.1, -0.6, 0.1, -0.6, 0.1],
	[0.05],
	[3.4]
	]);

	bordo1 = COLOR([101/255, 67/255, 33/255	])(bordo1);

    var  bordo2 =  SIMPLEX_GRID([
	[1.5],
	[0.05],
	[-3.4, 0.1]
	]);

	bordo2 = COLOR([101/255, 67/255, 33/255])(bordo2);
	
	var vetro = SIMPLEX_GRID([
	[-0.1, 1.3],
	[-0.1, 0.01],
	[3.4]
	]);

	vetro =  COLOR([224/255, 1, 1, 0.6])(vetro);
	vetro = BOUNDARY(vetro);


	var porta1 = (STRUCT([bordo1, bordo2, vetro]));
	return porta1;
}



//finestre del primo tipo
var finestra1 = T([0, 1, 2])([2.65, 0.15, 1.58])(finestraPrimoTipo());
var finestra2 = T([0, 1, 2])([14.95, 0.15, 1.58])(finestraPrimoTipo());
var finestra1bis = T([0, 1, 2])([-3.35, 4.75, 1.43])(finestraPrimoTipo());
var finestra2bis = T([0, 1, 2])([20.95, 4.75, 1.43])(finestraPrimoTipo());
var finestra3 = R([0, 1])([3*PI/2])(finestraPrimoTipo());
finestra3 = T([0, 1, 2])([0.15, 3.25, 1.58])(finestra3);
var finestra3bis = T([0, 1, 2])([4.6, -6, -0.15])(finestra3);
var finestra4 = T([0, 1, 2])([0, 12.3, 0])(finestra3);
var finestra4bis = T([0, 1, 2])([4.6, 6, -0.15])(finestra4);
var finestra5 = R([0, 1])([-PI])(finestraPrimoTipo());
finestra5 = T([0, 1, 2])([3.25, 18.05, 1.58])(finestra5);
var finestra5bis = T([0, 1, 2])([-6, -4.6, -0.15])(finestra5);
var finestra6 = T([0, 1, 2])([12.3, 0, 0])(finestra5);
var finestra6bis = T([0, 1, 2])([6, -4.6, -0.15])(finestra6);
var finestra7 = R([0, 1])([PI/2])(finestra1);
finestra7 = T([0, 1, 2])([18.2, 12.3, 0])(finestra7);
var finestra7bis = T([0, 1, 2])([-4.6, 6, -0.15])(finestra7);
var finestra8 = T([0, 1, 2])([0, -12.3, 0])(finestra7);
var finestra8bis = T([0, 1, 2])([-4.6, -6, -0.15])(finestra8);
var finestra9 = T([0, 1, 2])([0, 0, 7.62])(finestra1);
var finestra10 = T([0, 1, 2])([0, 0, 7.62])(finestra2);
var finestra11 = T([0])([2.45])(finestra9);
var finestra12 = T([0])([-2.45])(finestra10);

var finestra13 = T([0, 1, 2])([0, 0, 7.62])(finestra3);
var finestra14 = T([0, 1, 2])([0, 0, 7.62])(finestra4);
var finestra15 = T([1])([2.45])(finestra13);
var finestra16 = T([1])([-2.45])(finestra14);

var finestra17 = T([0, 1, 2])([0, 0, 7.62])(finestra5);
var finestra18 = T([0, 1, 2])([0, 0, 7.62])(finestra6);
var finestra19 = T([0])([2.45])(finestra17);
var finestra20 = T([0])([-2.45])(finestra18);

var finestra21 = T([0, 1, 2])([0, 0, 7.62])(finestra7);
var finestra22 = T([0, 1, 2])([0, 0, 7.62])(finestra8);
var finestra23 = T([1])([-2.45])(finestra21);
var finestra24 = T([1])([2.45])(finestra22);

//finestre del secondo tipo
var finestra25 = T([0, 1, 2])([5.1, 0.15, 7.5])(finestraSecondoTipo());
var finestra26 = T([0])([2])(finestra25);
var finestra27 = T([0])([3.3])(finestra26);
var finestra28 = T([0])([2])(finestra27);
var finestra29 = R([0, 1])(PI)(finestraSecondoTipo());
finestra29 = T([0, 1, 2])([5.8, 18.05, 7.5])(finestra29);
var finestra30 = T([0])([2])(finestra29);
var finestra31 = T([0])([3.3])(finestra30);
var finestra32 = T([0])([2])(finestra31);

//finestre del terzo tipo
var finestra33 = T([0, 1, 2])([2.55, 0.15, 3.5])(finestraTerzoTipo());
var finestra34 = T([0])([12.4])(finestra33);
var finestra35 = R([0,1])([PI/2])(finestraTerzoTipo());
finestra35 = T([0, 1, 2])([18.05, 2.55, 3.5])(finestra35);
var finestra36 = T([1])([12.4])(finestra35);
var finestra37 = R([0,1])([PI])(finestraTerzoTipo());
finestra37 = T([0, 1, 2])([3.25, 18.05, 3.5])(finestra37);
var finestra38 = T([0])([12.4])(finestra37);
var finestra39 = R([0,1])([-PI/2])(finestraTerzoTipo());
finestra39 = T([0, 1, 2])([0.05, 3.25, 3.5])(finestra39);
var finestra40 = T([1])([12.4])(finestra39);

//finestre del quarto tipo
var finestra41 = T([0, 1, 2])([5.1, 0.15, 4])(finestraQuartoTipo());
var finestra42 = T([0])([2])(finestra41);
var finestra43 = T([0])([3.3])(finestra42);
var finestra44 = T([0])([2])(finestra43);
var finestra45 = R([0,1])([PI])(finestraQuartoTipo());
finestra45 = T([0, 1, 2])([5.8, 18.05, 4])(finestra45);
var finestra46 = T([0])([2])(finestra45);
var finestra47 = T([0])([3.3])(finestra46);
var finestra48 = T([0])([2])(finestra47);


//porte
var porta1 = T([0, 1, 2])([8.35, 0.15, 3])(porta());
var porta2 = R([0,1])([PI/2])(porta());
porta2 = T([0, 1, 2])([18.05, 8.35, 3])(porta2);
var porta3 = R([0,1])([PI])(porta());
porta3 = T([0, 1, 2])([9.85, 18.05, 3])(porta3);
var porta4 = R([0,1])([-PI/2])(porta());
porta4 = T([0, 1, 2])([0.05, 9.85, 3])(porta4);


var porte = STRUCT([porta1, porta2, porta3, porta4]);
DRAW(porte);

var finestre = STRUCT([finestra1, finestra2, finestra3, finestra4, finestra5, finestra6, finestra7, finestra8, finestra9, finestra10, finestra11, finestra12, finestra13, finestra14, finestra15, finestra16, finestra17, finestra18, finestra19, finestra20, finestra21, finestra22, finestra23,
 finestra24, finestra1bis, finestra2bis, finestra3bis,
  finestra4bis, finestra5bis, finestra6bis, 
  finestra7bis, finestra8bis, finestra25, finestra26, finestra27
  , finestra28, finestra29, finestra30, finestra31, finestra32, 
  finestra33, finestra34, , finestra35, finestra36, finestra37, finestra38, 
  finestra39, finestra40, finestra41, finestra42, finestra43, finestra44,
  finestra45, finestra46, finestra47, finestra48,]);
DRAW(finestre);

//comignolo
var comignolo = function(){
	var  bordo1 =  SIMPLEX_GRID([
	[-0.05, 0.5],
	[-0.05, 0.5],
	[0.7]
	]);

	bordo1 = COLOR([254/255, 254/255, 233/255])(bordo1);

    var  bordo2 =  SIMPLEX_GRID([
	[-0.05, 0.1, -0.3, 0.1],
	[-0.05, 0.1, -0.3, 0.1],
	[-0.7, 0.3]
	]);

	bordo2 = COLOR([153/255, 51/255, 0])(bordo2);

	var  bordo3 =  SIMPLEX_GRID([
	[0.6],
	[0.6],
	[-1, 0.1]
	]);

	bordo3 = COLOR([153/255, 51/255, 0])(bordo3);
	
	
	var comignolo = (STRUCT([bordo1, bordo2, bordo3]));
	return comignolo;
}

var comignolo1 = T([0, 1, 2])([4, 0.5, 11])(comignolo());
var comignolo2 = T([0])([9])(comignolo1);
var comignolo3 = T([1])([16.7])(comignolo1);
var comignolo4 = T([1])([16.7])(comignolo2);

var comignoli = STRUCT([comignolo1, comignolo2, comignolo3, comignolo4]);
DRAW(comignoli);
