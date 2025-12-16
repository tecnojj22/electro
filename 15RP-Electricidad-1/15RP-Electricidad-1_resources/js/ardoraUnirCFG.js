//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=120; timeIni=120; timeBon=0;
var successes=0; successesMax=35; attempts=0; attemptsMax=10;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=2;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";colorLeave="#000000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="CORRECTO"; messageTime="TIEMPO AGOTADO"; messageError="INCORRECTO"; messageErrorG="INCORRECTO"; messageAttempts="INTENTOS AGOTADOS"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="MTVSUC1FbGVjdHJpY2lkYWQtMQ=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[["Vk9MVEFKRQ==", "Vg=="],["Vg==", "Vk9MVElP"],["Vk9MVElP", "Vg=="],["Vg==", "ViA9IEkgKiBS"],["SU5URU5TSURBRA==", "SQ=="],["UkVTSVNURU5DSUE=", "Ug=="],["RU5FUkdJQQ==", "RQ=="],["UE9URU5DSUE=", "UA=="],["Vk9MVEFUR0U=", "Vg=="],["SU5URU5TSVRBVA==", "SQ=="],["UkVTSVNUw4hOQ0lB", "Ug=="],["RU5FUkdJQQ==", "RQ=="],["UE9Uw4hOQ0lB", "UA=="],["SQ==", "QU1QRVJJTw=="],["Ug==", "T0hNSU8="],["RQ==", "SlVMSU8="],["UA==", "VkFUSU8="],["Vg==", "Vk9MVA=="],["SQ==", "QU1QRVJF"],["Ug==", "T0hN"],["RQ==", "SlVMSU8="],["UA==", "V0FUVA=="],["QU1QRVJJTw==", "QQ=="],["T0hNSU8=", "T0hN"],["SlVMSU8=", "Sg=="],["VkFUSU8=", "Vw=="],["Vk9MVA==", "Vg=="],["QU1QRVJF", "QQ=="],["T0hN", "T0hN"],["SlVMSU8=", "Sg=="],["V0FUVA==", "Vw=="],["QQ==", "SSA9IFYgLyBS"],["T0hN", "UiA9IFYgLyBJ"],["Sg==", "RSA9IFAgKiBU"],["Vw==", "UCA9IEUgLyBU"]];
var c=[[7,1],[1,6],[6,1],[1,9],[10,1],[11,1],[7,1],[8,1],[8,1],[10,1],[11,1],[7,1],[8,1],[1,7],[1,5],[1,5],[1,5],[1,4],[1,6],[1,3],[1,5],[1,4],[7,1],[5,3],[5,1],[5,1],[4,1],[6,1],[3,3],[5,1],[4,1],[1,9],[3,9],[1,9],[1,9]];
var con1=["VOLTAJE","INTENSIDAD","RESISTENCIA","ENERGIA","POTENCIA","VOLTATGE","INTENSITAT","RESISTÈNCIA","ENERGIA","POTÈNCIA"];
var con2=["V","I","R","E","P"];
var con3=["VOLTIO","AMPERIO","OHMIO","JULIO","VATIO","VOLT","AMPERE","OHM","JULIO","WATT"];
var con4=["V","A","OHM","J","W"];
var con5=["V = I * R","I = V / R","R = V / I","E = P * T","P = E / T"];
var sel1=""; join1=[]; join2=[];
