//DISTRIBUTORE DI CARAMELLE 
var domain1 = INTERVALS(1)(30);
var domain2 = DOMAIN([[0,1],[0,1]])([20,30]);
var domain3 = DOMAIN([[0,1],[0,1],[0,1]])([20,10,5]);

var p0 = [[0, -0.2, 0], [-0.2, -0.2, 1], [-0.2, -0.2, 1], [-0.2, -0.2, 1],[-0.19, -0.2, 1], [-0.17, -0.2, 1], [-0.15, -0.2, 1], [-0.1, -0.2, 1], [-0.05, -0.2, 1], [-0.01, -0.2, 1],[0, -0.2, 1], [0, -0.2, 1], [0, -0.2, 1], [0, -0.2, 1], [0, -0.2, 0], [0, -0.2, 0]];
var p1 = [[0, 0.2, 0], [-0.2, 0.2, 1], [-0.2, 0.2, 1], [-0.2, 0.2, 1],[-0.19, 0.2, 1], [-0.17, 0.2, 1], [-0.15, 0.2, 1], [-0.1, 0.2, 1], [-0.05, 0.2, 1], [-0.01, 0.2, 1],[0, 0.2, 1], [0, 0.2, 1], [0, 0.2, 1], [0, 0.2, 1], [0, 0.2, 0], [0, 0.2, 0]];

var c0 = BEZIER(S0)(p0);
var c1 = BEZIER(S0)(p1);

var p2 = [[0,-0.2,0]];
var c2 = BEZIER(S0)(p2);
var curve1 = BEZIER(S1)([c0,c2]);
var surface1 = MAP(curve1)(domain2);
DRAW(COLOR([0, 0, 1])(surface1));

var p3 = [[0,0.2,0]];
var c3 = BEZIER(S0)(p3);
var curve2 = BEZIER(S1)([c1,c3]);
var surface2 = MAP(curve2)(domain2);
DRAW(COLOR([0, 0, 1])(surface2));

var lateral = BEZIER(S1)([c0,c1]);
var insert = MAP(lateral)(domain2);
DRAW(COLOR([0, 0, 1])(insert));

var controlpoints1 = [[0,0, 0],[-0.75,0, 0],[0, -1.6, 0],[0,1.6, 0]]; 
var c1= CUBIC_HERMITE(S0)(controlpoints1); 
var curve1 = MAP(c1)(domain1); 
//DRAW(COLOR([1, 0, 0])(curve1)); 

var controlpoints1s = [[0,0, 0],[-0.75,0, 0],[0, 1.6, 0],[0,-1.6, 0]]; 
var c1s= CUBIC_HERMITE(S0)(controlpoints1s); 
var curve1s = MAP(c1s)(domain1); 
//DRAW(COLOR([1, 0, 0])(curve1s)); 


var controlpoints2 = [[-0.15,0, 1],[-0.6,0, 1],[0, -0.9, 0],[0,0.9, 0]]; 
var c2 = CUBIC_HERMITE(S0)(controlpoints2); 
var curve2 = MAP(c2)(domain1); 
//DRAW(COLOR([1, 0, 0])(curve2)); 

var controlpoints2s = [[-0.15,0, 1],[-0.6,0, 1],[0, 0.9, 0],[0,-0.9, 0]]; 
var c2s = CUBIC_HERMITE(S0)(controlpoints2s); 
var curve2s = MAP(c2s)(domain1); 
//DRAW(COLOR([1, 0, 0])(curve2s)); 

var s12 = BEZIER(S1)([c1, c2])
var surf1 = MAP(s12)(domain2);
DRAW(COLOR([1, 0, 0])(surf1));

var s12s = BEZIER(S1)([c1s, c2s])
var surf2 = MAP(s12s)(domain2);
DRAW(COLOR([1, 0, 0])(surf2));


var controlpoints3 = [[-0.05,0, 1.2],[-0.7,0, 1.2],[0, -1.3, 0],[0,1.3, 0]]; 
var c3 = CUBIC_HERMITE(S0)(controlpoints3); 
var curve3 = MAP(c3)(domain1); 
//DRAW(curve3); 

var controlpoints3s = [[-0.05,0, 1.2],[-0.7,0, 1.2],[0, 1.3, 0],[0,-1.3, 0]]; 
var c3s = CUBIC_HERMITE(S0)(controlpoints3s); 
var curve3s = MAP(c3s)(domain1); 
//DRAW(curve3s);

var s12 = BEZIER(S1)([c2, c3])
var surf3 = MAP(s12)(domain2);
//DRAW(surf3);

var s12s = BEZIER(S1)([c2s, c3s])
var surf4 = MAP(s12s)(domain2);
//DRAW(surf4);

var SemiSphere = function (r, n){
  var d = DOMAIN ([[0, 2*PI], [0, PI]])([n, n]);
  var mapping = function(p){
    var beta = p[0];
    var alfa = p[1];
    return [r*COS(alfa)*COS(beta), r*COS(alfa)*SIN(beta), r*SIN(alfa)];
  }
  var mapped = MAP (mapping)(d);
  var mapped1 = T([0, 2])([-0.38, 1.2])(mapped);
  return mapped1;
}

var sSfera = SemiSphere(0.325, 100);
var contenitore = (STRUCT([surf3, surf4, sSfera]));
DRAW(COLOR([0, 1, 1, 0.4])(contenitore));

//Manopola

var controlpoints1 = [[0,0, 0],[0,0, 0.08],[0, -0.14, 0],[0,0.154, 0]]; 
var c1 = CUBIC_HERMITE(S0)(controlpoints1); 
var curve1 = MAP(c1)(domain1); 
//DRAW(curve1); 

var controlpoints1s = [[0.035,0, 0],[0.05,0, 0.08],[0, -0.14, 0],[0,0.14, 0]]; 
var c1s = CUBIC_HERMITE(S0)(controlpoints1s); 
var curve1s = MAP(c1s)(domain1); 
//DRAW(curve1s); 

var controlpoints2 = [[0,0, 0],[0,0, 0.08],[0, 0.14, 0],[0,-0.14, 0]]; 
var c2 = CUBIC_HERMITE(S0)(controlpoints2); 
var curve2 = MAP(c2)(domain1); 
//DRAW(curve2);

var controlpoints2s = [[0.035,0, 0],[0.05,0, 0.08],[0, 0.14, 0],[0,-0.14, 0]]; 
var c2s = CUBIC_HERMITE(S0)(controlpoints2s); 
var curve2s = MAP(c2s)(domain1); 
//DRAW(curve2s);

var s1 = BEZIER(S1)([c1, c1s])
var surf1 = MAP(s1)(domain2);
//DRAW(surf1);
var s2 = BEZIER(S1)([c2, c2s])
var surf2 = MAP(s2)(domain2);
//DRAW(surf2);
var s3 = BEZIER(S1)([c1s, c2s])
var surf3 = MAP(s3)(domain2);
//DRAW(surf3);
var appoggio = STRUCT([surf1, surf2, surf3]);
//DRAW(appoggio);

var domain2 = DOMAIN([[0,1],[0,1]])([20,30]);
var p0 = [[0.08, 0, 0], [0.08, 0.02, 0], [0.07, 0.05, 0], [0.06, 0.03, 0], [0.04, 0.005, 0],[0.04, 0.005, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],[0.08, 0, 0]];
var p0b = [[-0.08, 0, 0], [-0.08, 0.02, 0], [-0.07, 0.05, 0], [-0.06, 0.03, 0], [-0.04, 0.005, 0],[-0.04, 0.005, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],[0.08, 0, 0]];
var p1 = [[0.08, 0, 0.04], [0.08, 0.02, 0.04], [0.07, 0.05, 0.04], [0.06, 0.03, 0.04], [0.04, 0.005, 0.04],[0.04, 0.005, 0.04], [0, 0, 0.04], [0, 0, 0.04], [0, 0, 0.04],[0.08, 0, 0.04]];
var p1b = [[-0.08, 0, 0.04], [-0.08, 0.02, 0.04], [-0.07, 0.05, 0.04], [-0.06, 0.03, 0.04], [-0.04, 0.005, 0.04],[-0.04, 0.005, 0.04], [0, 0, 0.04], [0, 0, 0.04], [0, 0, 0.04],[0.08, 0, 0.04]];

//var p1 = [[0, 0.2, 0], [-0.2, 0.2, 1], [-0.2, 0.2, 1], [-0.2, 0.2, 1],[-0.19, 0.2, 1], [-0.17, 0.2, 1], [-0.15, 0.2, 1], [-0.1, 0.2, 1], [-0.05, 0.2, 1], [-0.01, 0.2, 1],[0, 0.2, 1], [0, 0.2, 1], [0, 0.2, 1], [0, 0.2, 1], [0, 0.2, 0], [0, 0.2, 0]];

var c0 = BEZIER(S0)(p0);
var c0b = BEZIER(S0)(p0b);
var c1 = BEZIER(S0)(p1);
var c1b = BEZIER(S0)(p1b);
var p2 = [[0.08, 0, 0]];
var p3 = [[-0.08, 0, 0]];
var p4 = [[0.08, 0, 0.04]];
var p5 = [[-0.08, 0, 0.04]];


var c2 = BEZIER(S0)(p2);
var c2b = BEZIER (S0)(p3);
var c3 = BEZIER(S0)(p4);
var c3b = BEZIER (S0)(p5);
var curve1 = BEZIER(S1)([c0,c2]);
var surface1 = MAP(curve1)(domain2);
var curve1b = BEZIER(S1)([c0b,c2b]);
var surface1b = MAP(curve1b)(domain2);
var curve3b = BEZIER(S1)([c3,c1]);
var surface3b = MAP(curve3b)(domain2);
var curve4b = BEZIER(S1)([c1b,c3b]);
var surface4b = MAP(curve4b)(domain2);
//DRAW(COLOR([1, 1, 1])(surface1));
//DRAW(COLOR([1, 1, 1])(surface1b));
//DRAW(COLOR([1, 1, 1])(surface3b));
//DRAW(COLOR([1, 1, 1])(surface4b));

var lateral1 = BEZIER(S1)([c0,c1]);
var insert1 = MAP(lateral1)(domain2);
//DRAW(COLOR([1, 1, 1])(insert1));

var lateral2 = BEZIER(S1)([c0b,c1b]);
var insert2 = MAP(lateral2)(domain2);
//DRAW(COLOR([1, 1, 1])(insert2));

var gir = STRUCT([surface1, surface1b, surface3b, surface4b, insert1, insert2]);
var girevo = R([0, 1])([3*PI/2])(gir);
var girevole = T([0, 2])([0.041, 0.02])(girevo);

var whole = STRUCT([girevole, appoggio]);
var whole1 = T([2])([0.5])(whole);

DRAW(COLOR([1, 0, 0])(whole1));

//Insert coins

var controlpointsFronte = [[0,0.05, 0],[0,-0.05, 0],[0, 0.4, -0.5],[0,0.4, 0.5]]; 
var cFronte = CUBIC_HERMITE(S0)(controlpointsFronte); 
//var curveFronte = MAP(cFronte)(domain1); 
//var curveFronte1 = T([2])([0.8])(curveFronte);
var controlpointsFronteS = [[0,0.05, 0],[0,-0.05, 0],[0, 0.2, -0.25],[0,0.2, 0.25]]; 
var cFronteS = CUBIC_HERMITE(S0)(controlpointsFronteS); 
//var curveFronteS = MAP(cFronteS)(domain1); 
//var curveFronteS1 = T([2])([0.8])(curveFronteS);
var controlpointsRetro = [[0.03,0.05, 0],[0.03,-0.05, 0],[0, 0.4, -0.5],[0,0.4, 0.5]]; 
var cRetro = CUBIC_HERMITE(S0)(controlpointsRetro); 
//var curveRetro = MAP(cRetro)(domain1); 
//var curveRetro1 = T([2])([0.8])(curveRetro);
var s1F = BEZIER(S1)([cFronte, cRetro])
var surf1F = MAP(s1F)(domain2);
//DRAW(surf1F);
var controlpointsRetroS = [[0.03,0.05, 0],[0.03,-0.05, 0],[0, 0.2, -0.25],[0,0.2, 0.25]]; 
var cRetroS = CUBIC_HERMITE(S0)(controlpointsRetroS); 
//var curveRetroS = MAP(cRetroS)(domain1); 
//var curveRetroS1 = T([2])([0.8])(curveRetroS);
var s1R = BEZIER(S1)([cRetro, cRetroS])
var surf1R = MAP(s1R)(domain2);
//DRAW(surf1R);
var insertCoins = STRUCT([surf1F, surf1R]);
DRAW(T([2])([0.8])(COLOR([1, 0, 0])(insertCoins)));


// uscita caramelle

var controlpointsX = [[0,0.08, 0],[0,-0.08, 0],[0.6, 0, 0],[-0.6,0, 0]]; 
var cX = CUBIC_HERMITE(S0)(controlpointsX); 
var curveX = MAP(cX)(domain1); 
DRAW(curveX);

var controlpointsY = [[0, 0.08, 0],[0, -0.08, 0],[0, -0.08, 0],[0,0.08, 0]]; 
var cY = CUBIC_HERMITE(S0)(controlpointsY); 
var curveY = MAP(cY)(domain1); 
DRAW(curveY);

var controlpointsZ = [[0,0.08, 0.03],[0,-0.08, 0.03],[0.6, 0, 0],[-0.6,0, 0]]; 
var cZ = CUBIC_HERMITE(S0)(controlpointsZ); 
var curveZ = MAP(cZ)(domain1); 
DRAW(curveZ);

var s1 = BEZIER(S1)([cX, cY])
var surf1 = MAP(s1)(domain2);
DRAW(COLOR([1, 0, 0])(surf1));
var s2 = BEZIER(S1)([cX, cZ])
var surf2 = MAP(s2)(domain2);
DRAW(COLOR([1, 0, 0])(surf2));

var controlpointsA = [[0,0.08, 0],[0,-0.08, 0],[0, 0, 0.45],[0,0, -0.45]]; 
var cA = CUBIC_HERMITE(S0)(controlpointsA); 
var curveA = MAP(cA)(domain1); 
DRAW(curveA);

var controlpointsB = [[0.06, 0.08, 0],[0.06, -0.08, 0],[0, 0, 0.45],[0,0, -0.45]]; 
var cB = CUBIC_HERMITE(S0)(controlpointsB); 
var curveB = MAP(cB)(domain1); 
DRAW(curveB);

var sAB = BEZIER(S1)([cA, cB])
var surfAB = MAP(sAB)(domain2);
DRAW(COLOR([1, 0, 0])(surfAB));


//caramelle
var SphereRosa = function (r, n){
  var d = DOMAIN ([[0, 2*PI], [0, 2*PI]])([n, n]);
  var mapping = function(p){
    var beta = p[0];
    var alfa = p[1];
    return [r*COS(alfa)*COS(beta), r*COS(alfa)*SIN(beta), r*SIN(alfa)];
  }
  var mapped = MAP (mapping)(d);
  return (COLOR([0.5, 0, 0.5])(mapped));
  
}
var SphereCiano = function (r, n){
  var d = DOMAIN ([[0, 2*PI], [0, 2*PI]])([n, n]);
  var mapping = function(p){
    var beta = p[0];
    var alfa = p[1];
    return [r*COS(alfa)*COS(beta), r*COS(alfa)*SIN(beta), r*SIN(alfa)];
  }
  var mapped = MAP (mapping)(d);
  return (COLOR([1, 1, 0.4])(mapped));
  
}

var SphereVerde = function (r, n){
  var d = DOMAIN ([[0, 2*PI], [0, 2*PI]])([n, n]);
  var mapping = function(p){
    var beta = p[0];
    var alfa = p[1];
    return [r*COS(alfa)*COS(beta), r*COS(alfa)*SIN(beta), r*SIN(alfa)];
  }
  var mapped = MAP (mapping)(d);
  return (COLOR([0, 1, 0])(mapped));
  
}

var SphereGialla = function (r, n){
  var d = DOMAIN ([[0, 2*PI], [0, 2*PI]])([n, n]);
  var mapping = function(p){
    var beta = p[0];
    var alfa = p[1];
    return [r*COS(alfa)*COS(beta), r*COS(alfa)*SIN(beta), r*SIN(alfa)];
  }
  var mapped = MAP (mapping)(d);
  return (COLOR([0, 0.5, 0.5])(mapped));
  
}
var SphereArancione = function (r, n){
  var d = DOMAIN ([[0, 2*PI], [0, 2*PI]])([n, n]);
  var mapping = function(p){
    var beta = p[0];
    var alfa = p[1];
    return [r*COS(alfa)*COS(beta), r*COS(alfa)*SIN(beta), r*SIN(alfa)];
  }
  var mapped = MAP (mapping)(d);
  return (COLOR([1, 0.6, 0])(mapped));
  
}
var SphereIndaco = function (r, n){
  var d = DOMAIN ([[0, 2*PI], [0, 2*PI]])([n, n]);
  var mapping = function(p){
    var beta = p[0];
    var alfa = p[1];
    return [r*COS(alfa)*COS(beta), r*COS(alfa)*SIN(beta), r*SIN(alfa)];
  }
  var mapped = MAP (mapping)(d);
  return (COLOR([49/255, 0, 98/255])(mapped));
  
}
var SphereForesta = function (r, n){
  var d = DOMAIN ([[0, 2*PI], [0, 2*PI]])([n, n]);
  var mapping = function(p){
    var beta = p[0];
    var alfa = p[1];
    return [r*COS(alfa)*COS(beta), r*COS(alfa)*SIN(beta), r*SIN(alfa)];
  }
  var mapped = MAP (mapping)(d);
  return (COLOR([34/255, 139/255, 34/255])(mapped));
  
}

var SphereAzzurra = function (r, n){
  var d = DOMAIN ([[0, 2*PI], [0, 2*PI]])([n, n]);
  var mapping = function(p){
    var beta = p[0];
    var alfa = p[1];
    return [r*COS(alfa)*COS(beta), r*COS(alfa)*SIN(beta), r*SIN(alfa)];
  }
  var mapped = MAP (mapping)(d);
  return (COLOR([0, 127/255, 255/255])(mapped));
  
}
var c1 = T([0, 2])([0.1, 0.05])(SphereRosa (0.05, 50));
DRAW(c1);
var c2 = T([0, 2])([-0.5, 1])(SphereRosa (0.05, 50));
DRAW(c2);
var c3 = T([0, 2])([-0.3, 1])(SphereRosa (0.05, 50));
DRAW(c3);
var c3 = T([0, 2])([-0.3, 1])(SphereRosa (0.05, 50));
DRAW(c3);
var c4 = T([0,1, 2])([-0.4,0.15, 1])(SphereCiano (0.05, 50));
DRAW(c4);
var c5 = T([0,1, 2])([-0.4,-0.15, 1])(SphereCiano (0.05, 50));
DRAW(c5);
var c6 = T([0,1, 2])([-0.4,-0, 1])(SphereGialla (0.05, 50));
DRAW(c6);
var c7 = T([0,1, 2])([-0.25,-0.1, 1])(SphereVerde (0.05, 50));
DRAW(c7);
var c8 = T([0,1, 2])([-0.25,0.1, 1])(SphereCiano (0.05, 50));
DRAW(c8);
var c9 = T([0,1, 2])([-0.5,0.1, 1])(SphereGialla (0.05, 50));
DRAW(c9);
var c10 = T([0,1, 2])([-0.5,-0.1, 1])(SphereGialla (0.05, 50));
DRAW(c10);
var c11 = T([0,1, 2])([-0.18,-0.1, 1.08])(SphereArancione (0.05, 50));
DRAW(c11);
var c12 = T([0,1, 2])([-0.3,-0.1, 1.08])(SphereArancione (0.05, 50));
DRAW(c12);
var c13 = T([0,1, 2])([-0.3,-0.2, 1.08])(SphereGialla (0.05, 50));
DRAW(c13);
var c14 = T([0,1, 2])([-0.4,-0.15, 1.08])(SphereVerde (0.05, 50));
DRAW(c14);
var c15 = T([0,1, 2])([-0.4,-0.05, 1.08])(SphereRosa (0.05, 50));
DRAW(c15);
var c16 = T([0,1, 2])([-0.3,0.05, 1.08])(SphereIndaco(0.05, 50));
DRAW(c16);
var c17 = T([0,1, 2])([-0.19,0.1, 1.08])(SphereIndaco(0.05, 50));
DRAW(c17);
var c18 = T([0,1, 2])([-0.19,0, 1.08])(SphereCiano(0.05, 50));
DRAW(c18);
var c19 = T([0,1, 2])([-0.5,-0.1, 1.08])(SphereIndaco(0.05, 50));
DRAW(c19);
var c20 = T([0,1, 2])([-0.3,0.15, 1.08])(SphereRosa(0.05, 50));
DRAW(c20);
var c21 = T([0,1, 2])([-0.5,0.14, 1.08])(SphereForesta(0.05, 50));
DRAW(c21);
var c22 = T([0,1, 2])([-0.4,0.11, 1.08])(SphereGialla(0.05, 50));
DRAW(c22);
var c23 = T([0,1, 2])([-0.41,0.2, 1.08])(SphereAzzurra(0.05, 50));
DRAW(c23);
var c24 = T([0,1, 2])([-0.55,0.03, 1.08])(SphereAzzurra(0.05, 50));
DRAW(c24);
var c25 = T([0,1, 2])([-0.225,0, 1.17])(SphereAzzurra(0.05, 50));
DRAW(c25);
var c26 = T([0,1, 2])([-0.15,-0.02, 1.17])(SphereForesta(0.05, 50));
DRAW(c26);
var c27 = T([0,1, 2])([-0.15,-0.12, 1.16])(SphereRosa(0.05, 50));
DRAW(c27);
var c28 = T([0,1, 2])([-0.23,-0.19, 1.15])(SphereCiano(0.05, 50));
DRAW(c28);
var c29 = T([0,1, 2])([-0.25,-0.09, 1.17])(SphereVerde(0.05, 50));
DRAW(c29);