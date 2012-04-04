//INTRODOTTO TAVOLO CON SEDIE NELL'EDIFICIO E STATUA STILIZZATA IN VASCA

var p1 = SIMPLEX_GRID([
  [1],
	[2],
	[1]
	]);
var p2 = SIMPLEX_GRID([
	[-1, 38],
	[1],
	[1]
	]);

var p3 = SIMPLEX_GRID([
	[-21, 15],
	[-1, 16],
	[1]
	]);

var p4 = SIMPLEX_GRID([
	[-1, 20],
	[-10, 7],
	[1]
	]);

var p5 = SIMPLEX_GRID([
	[-1, 8],
	[-17, 5],
	[1]
	]);
var p6 = SIMPLEX_GRID([
	[-36, 3],
	[-4, 13],
	[1]
	]);
var p7 = SIMPLEX_GRID([
	[-39, 8],
	[-4, 12],
	[1]
	]);

var p8 = SIMPLEX_GRID([
	[-47, 4],
	[-4, 1],
	[1]
	]);
var p9 = SIMPLEX_GRID([
	[-51, 1],
	[-4, 2],
	[1]
	]);

var podio1 = STRUCT([p1, p2, p3, p4, p5, p6, p7, p8, p9]);
COLOR([1, 1, 1])(podio1);
var vasca1 = SIMPLEX_GRID([
	[-1, 20],
	[-1, 9],
	[0.7]
	]);

 COLOR ([0, 1, 1])(vasca1);
 var vasca2 = SIMPLEX_GRID([
	[-47, 4],
	[-5, 11],
	[0.7]
	]);
 COLOR ([0, 1, 1])(vasca2);

 var scala1 = SIMPLEX_GRID([
	[-36, 3],
	[-1, 3],
	[0.2]
	]);

var scala2 = SIMPLEX_GRID([
	[-36, 2.4],
	[-1, 3],
	[0.4]
	]);

var scala3 = SIMPLEX_GRID([
	[-36, 1.8],
	[-1, 3],
	[0.6]
	]);

var scala4 = SIMPLEX_GRID([
	[-36, 1.2],
	[-1, 3],
	[0.8]
	]);

var scala5 = SIMPLEX_GRID([
	[-36, 0.6],
	[-1, 3],
	[1]
	]);

var scale = STRUCT ([scala1, scala2, scala3, scala4, scala5]);
COLOR([1, 1, 1])(scale);

 var podioConVascheScale = STRUCT ([p1, p2, p3, p4, p5, p6, p7, p8, p9, vasca1, vasca2, scale]);
 DRAW(podioConVascheScale);

 var muroSud1 = SIMPLEX_GRID([
	[-1, 7],
	[-0.8, 0.2],
	[-1, 3]
	]);

var muroSud2 = SIMPLEX_GRID([
	[-41, 10],
	[-4.8, 0.2],
	[-1, 3]
	]);

var muriSud = STRUCT([muroSud1, muroSud2]);

var muroOvest1 = SIMPLEX_GRID([
	[-0.8, 0.2],
	[-0.8, 9.2],
	[4]
	]);
var muroOvest2 = SIMPLEX_GRID([
	[-0.8, 0.2],
	[-10, 12],
	[4]
	]);
var muroOvest3 = SIMPLEX_GRID([
	[-8.8, 0.2],
	[-17, 5],
	[4]
	]);

var muriOvest = STRUCT([muroOvest1, muroOvest2, muroOvest3]);

var muroNord1 = SIMPLEX_GRID([
	[-0.8, 8],
	[-21.8, 0.2],
	[-1, 3]
	]);

var muroNord2 = SIMPLEX_GRID([
	[-7.5, 19],
	[-15, 0.2],
	[-1, 3]
	]);

var muroNord3 = SIMPLEX_GRID([
	[-37.5, 13.5],
	[-16, 0.2],
	[4]
	]);

var muriNord = STRUCT([muroNord1, muroNord2, muroNord3]);

var muroEst1 = SIMPLEX_GRID([
	[-51, 0.2],
	[-4.8, 1.2],
	[-1, 3]
	]);

var muroEst2 = SIMPLEX_GRID([
	[-51, 0.2],
	[-6, 10.2],
	[4]
	]);
var muriEst = STRUCT([muroEst1, muroEst2]);

var muroInterno1 = SIMPLEX_GRID([
	[-25, 9],
	[-7.5, 0.2],
	[-1, 3]
	]);
COLOR([0, 0, 0])(muroInterno1);


var muroInterno2 = SIMPLEX_GRID([
	[-37, 5.5],
	[-11.4, 0.2],
	[-1, 3]
	]);
COLOR([1, 0, 0])(muroInterno2);

var muroInterno3 = SIMPLEX_GRID([
	[-30.8, 0.2],
	[-7.7, 5.4],
	[-1, 3]
	]);
COLOR([1, 1, 1])(muroInterno3);
var muroInterno4 = SIMPLEX_GRID([
	[-31.8, 0.2],
	[-7.7, 5.4],
	[-1, 3]
	]);
COLOR([1, 1, 1])(muroInterno4);

var muriInterni = STRUCT ([muroInterno1, muroInterno2, muroInterno3, muroInterno4]);

var muri = STRUCT ([muriSud, muriOvest, muriNord, muriEst, muriInterni]);
DRAW(muri);


var pilastri = SIMPLEX_GRID ([
	REPLICA(3)(
		[0.15, -6, 0.15]),
		[0.15, -6, 0.15],
		[-1, 3]
	]);
COLOR([1, 1, 0])(pilastri);

var pilastriT = T([0,1])([26, 7])(pilastri);
DRAW(pilastriT);

var grid1 = SIMPLEX_GRID([ 
	[-30, 0.05],
	[-5, 0.05, -0.925, 0.05, -0.925, 0.05],
	[-1, 3] 
	]);

var grid2 = SIMPLEX_GRID([ 
	[-31, 0.05, -1, 0.05, -1, 0.05, -1, 0.05, -1, 0.05, -1, 0.05, -1, 0.05, -1, 0.05, -1, 0.05, -1, 0.05],
	[-5, 0.05],
	[-1, 3] 
	]);

var grid3 = SIMPLEX_GRID([ 
	[-44, 0.05],
	[-7, 0.05, -0.81, 0.05, -0.81, 0.05, -0.81, 0.05, -0.81, 0.05, -0.81, 0.05, -0.81, 0.05, -0.81, 0.05, -0.81],
	[-1, 3] 
	]);

var grid4 = SIMPLEX_GRID([ 
	[-40, 0.05],
	[-13.1, 0.05, -0.925, 0.05, -0.925, 0.05],
	[-1, 3] 
	]);

var grid5 = SIMPLEX_GRID([ 
	[-30, 0.05, -1, 0.05, -1, 0.05, -1, 0.05, -1, 0.05, -1, 0.05, -1, 0.05, -1, 0.05, -1, 0.05, -1, 0.05, -1],
	[-13.1, 0.05],
	[-1, 3] 
	]);

var grid6 = SIMPLEX_GRID([ 
	[-2, 0.05, -1, 0.05, -1, 0.05, -1, 0.05, -1, 0.05, -1, 0.05, -1, 0.05],
	[-17, 0.05],
	[-1, 3] 
	]);

var griglie = STRUCT([grid1, grid2, grid3, grid4, grid5, grid6]);
DRAW(griglie);

var tetto1 = SIMPLEX_GRID([ 
	[0, 10],
	[-12, 10],
	[-4, 0.4] 
	]);
COLOR([1, 1, 1])(tetto1);

var tetto2 = SIMPLEX_GRID([ 
	[-24, 7],
	[-4, 13],
	[-4, 0.4] 
	]);

var tetto3 = SIMPLEX_GRID([ 
	[-31, 1],
	[-4, 3.7],
	[-4, 0.4] 
	]);

var tetto4 = SIMPLEX_GRID([ 
	[-31, 1],
	[-13, 4],
	[-4, 0.4] 
	]);

var tetto5 = SIMPLEX_GRID([ 
	[-32, 15],
	[-4, 13],
	[-4, 0.4] 
	]);

var tetti = STRUCT([tetto1, tetto2, tetto3, tetto4, tetto5]);


DRAW(tetti);

var pilastriPanchina =  SIMPLEX_GRID ([
	REPLICA(9)(
		[0.2, -0.9]),
		[0.4],
		[-1, 0.4]
	]);
var pilastriPanchinaT = T([0,1])([11, 13])(pilastriPanchina);

var seduta = SIMPLEX_GRID([ 
	[-10.6, 10],
	[-12.8, 0.8],
	[-1.4, 0.2] 
	]);

var panchina = STRUCT([pilastriPanchinaT, seduta]);
DRAW(panchina);


var gambeTavolo = SIMPLEX_GRID([ 
	[0.05, -1, 0.05],
	[0.05, -1, 0.05],
	[-1, 0.5] 
	]);
var pianoTavolo = SIMPLEX_GRID([ 
	[1.1],
	[1.1],
	[-1.5, 0.1] 
	]);

var tavolo = T([0, 1])([34, 9])(COLOR([0, 1, 0])(STRUCT([gambeTavolo, pianoTavolo])));

var gambeSedia = SIMPLEX_GRID([ 
	[0.03, -0.4, 0.03],
	[0.03, -0.4, 0.03],
	[-1, 0.4] 
	]);

var pianoSedia = SIMPLEX_GRID([ 
	[0.46],
	[0.46],
	[-1.4, 0.01] 
	]);

var schienale = SIMPLEX_GRID([ 
	[0.05],
	[0.46],
	[-1.4, 0.6] 
	]);

var sedia = T([0, 1])([33.5, 9.2])(COLOR([0,1, 0])(STRUCT([gambeSedia, pianoSedia, schienale])));

var sedia2 = S([0])([-1])(T([0, 1])([-35.5, 9.2])(COLOR([0,1, 0])(STRUCT([gambeSedia, pianoSedia, schienale]))));
var mobilia = STRUCT([tavolo, sedia, sedia2]);
DRAW(mobilia);

var statua = T([0, 1])([49, 14])(COLOR([1, 0, 1])(CYL_SURFACE([0.3, 3])(30)));
DRAW(statua);
