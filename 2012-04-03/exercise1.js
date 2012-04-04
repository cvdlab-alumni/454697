var latoSud1 = POLYLINE ([[1, 2], [0, 2], [0, 0]]);
var latoSud2 = POLYLINE ([[0, 0], [38, 0], [38, 1]]);
var latoSud3 = POLYLINE ([[38, 1], [35, 1], [35, 4]]);
var latoSud4 = POLYLINE ([[35, 4], [51, 4]]);
var latoSud = COLOR([0.5, 0.5, 0.5])(STRUCT ([latoSud1, latoSud2, latoSud3, latoSud4]));

var latoOvest = COLOR([0, 0, 0])(POLYLINE ([[1, 1], [1, 21]]));

var latoNord1 = COLOR([0, 0, 0])(POLYLINE ([[1, 21], [9, 21], [9, 16]]));
var latoNord2 = COLOR([0.5, 0.5, 0.5])(POLYLINE([[9, 16], [38, 16], [38, 15]]));
var latoNord3 = COLOR([0, 0, 0])(POLYLINE([[37, 15], [50, 15]]));
var latoNord = STRUCT ([latoNord1, latoNord2, latoNord3]);

var latoEst1 = COLOR([0, 0, 0])(POLYLINE ([[50, 15], [50, 5]]));
var latoEst2 = COLOR([0.5, 0.5, 0.5])(POLYLINE([[50, 6], [51, 6], [51, 4]]));
var latoEst = STRUCT([latoEst1, latoEst2]);

var contorni = STRUCT([latoNord, latoSud, latoEst, latoOvest]);
DRAW(contorni);

var scala1 = COLOR([0.5, 0.5, 0.5])(POLYLINE([[35, 1], [35, 4]]));
var scala2 = COLOR([0.5, 0.5, 0.5])(POLYLINE([[35.5, 1], [35.5, 4]]));
var scala3 = COLOR([0.5, 0.5, 0.5])(POLYLINE([[36, 1], [36, 4]]));
var scala4 = COLOR([0.5, 0.5, 0.5])(POLYLINE([[36.5, 1], [36.5, 4]]));
var scala5 = COLOR([0.5, 0.5, 0.5])(POLYLINE([[37, 1], [37, 4]]));
var scala6 = COLOR([0.5, 0.5, 0.5])(POLYLINE([[37.5, 1], [37.5, 4]]));
var scala7 = COLOR([0.5, 0.5, 0.5])(POLYLINE([[38, 1], [38, 4]]));
var scale = STRUCT([scala1, scala2, scala3, scala4, scala5, scala6, scala7]);

DRAW(scale);

var muriSud1 = COLOR ([0,0,0])(POLYLINE([[1, 1], [8, 1]]));
var muriSud2 = COLOR ([0,0,0])(POLYLINE([[40, 5], [50, 5]]));
var muriSud3 = COLOR ([0,0,0])(POLYLINE([[25, 7], [34, 7]]));

var muriNord1 = COLOR ([0,0,0])(POLYLINE([[8, 14], [21, 14]]));
var muriNord2 = COLOR ([0,0,0])(POLYLINE([[37, 11], [41.5, 11]]));
var muriNord3 = COLOR ([0,0,0])(POLYLINE([[1, 16], [7, 16]]));
var muriNord4 = COLOR ([0,0,0])(POLYLINE([[8, 16], [9, 16]]));

var muriEst1 = COLOR([0.5, 0.5, 0.5])(POLYLINE([[31, 7], [31, 14]]));
var muriEst2 = COLOR([0.5, 0.5, 0.5])(POLYLINE([[32, 7], [32, 14]]));
var muriEst3 = COLOR([0.5, 0.5, 0.5])(POLYLINE([[38, 5], [38, 11]]));
var muriEst4 = COLOR([0.5, 0.5, 0.5])(POLYLINE([[41.5, 5], [41.5, 11]]));
var muriEst5 = COLOR([0.5, 0.5, 0.5])(POLYLINE([[44, 7], [44, 14]]));

var muriSud = STRUCT ([muriSud1, muriSud2, muriSud3]);
var muriNord = STRUCT ([muriNord1, muriNord2, muriNord3, muriNord4]);
var muriEst = STRUCT ([muriEst1, muriEst2, muriEst3, muriEst4, muriEst5]);

var muriInterni = STRUCT([muriSud, muriNord, muriEst]);
DRAW(muriInterni);

var vetrata1 = COLOR([0, 1, 1])(POLYLINE([[29, 7], [29, 5], [40, 5]]));
var vetrata2 = COLOR([0, 1, 1])(POLYLINE([[29, 14], [39, 14], [39, 15]]));

var vetrate = STRUCT([vetrata1, vetrata2]);
DRAW(vetrate);

var vasca = COLOR([0.5, 0.5, 0.5])(POLYLINE([[1, 1], [1, 9], [21, 9], [21, 1], [1, 1]]));
DRAW(vasca);
var tetto1 = COLOR([1, 0, 0])(POLYLINE([[0, 12], [0, 22], [10, 22], [10, 12], [0, 12]]));
var tetto2 = COLOR([1, 0, 0])(POLYLINE([[24, 4], [24, 16], [46, 16], [46, 4], [24, 4]]));
var tetti = STRUCT([tetto1, tetto2]);
DRAW(tetti);

var piattEsterna = COLOR([0.5, 0.5, 0.5])(POLYLINE([[25, 16], [25, 23], [31, 23], [31, 16]]));
var scaleNStr = COLOR([0.5, 0.5, 0.5])(POLYLINE([[29, 26.5], [29, 22.5], [27, 22.5], [27, 26.5]]));
var scalaN1 = COLOR([0.5, 0.5, 0.5])(POLYLINE([[27, 23], [29, 23]]));
var scalaN2 = COLOR([0.5, 0.5, 0.5])(POLYLINE([[27, 23.5], [29, 23.5]]));
var scalaN3 = COLOR([0.5, 0.5, 0.5])(POLYLINE([[27, 24], [29, 24]]));
var scalaN4 = COLOR([0.5, 0.5, 0.5])(POLYLINE([[27, 24.5], [29, 24.5]]));

var scaleNord = STRUCT([piattEsterna, scaleNStr, scalaN1, scalaN2, scalaN3, scalaN4]);
DRAW(scaleNord);

var pilastro = DISK (0.3)();
var pil1 = T([0, 1])([26, 8])(pilastro);
var pil2 = T([0, 1])([26, 13])(pilastro);
var pil3 = T([0, 1])([30, 8])(pilastro);
var pil4 = T([0, 1])([30, 13])(pilastro);
var pil5 = T([0, 1])([38, 8])(pilastro);
var pil6 = T([0, 1])([38, 13])(pilastro);
var pil7 = T([0, 1])([44, 8])(pilastro);
var pil8 = T([0, 1])([44, 13])(pilastro);
var pilastri = STRUCT([pil1, pil2, pil3, pil4, pil5, pil6, pil7, pil8]);
DRAW(pilastri);