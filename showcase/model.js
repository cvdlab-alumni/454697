//DISTRIBUTORE DI CARAMELLE 
//il modello non è completo causa impiego agli internazionali di tennis, l'idea era di riempirlo di caramelle, ma ce ne sono solo 3

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
var SphereMagenta = function (r, n){
  var d = DOMAIN ([[0, 2*PI], [0, 2*PI]])([n, n]);
  var mapping = function(p){
    var beta = p[0];
    var alfa = p[1];
    return [r*COS(alfa)*COS(beta), r*COS(alfa)*SIN(beta), r*SIN(alfa)];
  }
  var mapped = MAP (mapping)(d);
  return (COLOR([1, 1, 0.4])(mapped));
  
}

var c1 = T([0, 2])([0.07, 0.05])(SphereRosa (0.05, 50));
DRAW(c1);
var c2 = T([0, 2])([-0.5, 1])(SphereRosa (0.05, 50));
DRAW(c2);
var c3 = T([0, 2])([-0.3, 1])(SphereRosa (0.05, 50));
DRAW(c3);
var c3 = T([0, 2])([-0.3, 1])(SphereRosa (0.05, 50));
DRAW(c3);
var c4 = T([0,1, 2])([-0.4,0.15, 1])(SphereMagenta (0.05, 50));
DRAW(c4);