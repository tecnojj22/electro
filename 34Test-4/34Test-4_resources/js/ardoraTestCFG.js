//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=2; attempts=0; attemptsMax=70;
var score=0; scoreMax=2; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=2;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FDFEFF"; colorButton="#91962F"; colorText="#000000"; colorSele="#56A979";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fResp="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="MUY BIEN"; messageTime=""; messageError="ERROR"; messageErrorG="ERROR"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="MzRUZXN0LTQ="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["Calcular la intensidad total que circula por el siguiente circuito eléctrico:","Calcular la intensidad total que circula por el siguiente circuito eléctrico:"];
var answers1=["MTAsNjcgQQ==","MDIzIEE=","MDEyLDUgQQ==","MDMsMjMgQQ=="];
var answers2=["MTMsNjAgQQ==","MDIwIEE=","MDcsNSBB","MDAsNTUgQQ=="];
var ans=[answers1,answers2];
var err=["",""];
var ima=["Captura_de_pantalla_2025-12-16_172556.png","Captura_de_pantalla_2025-12-16_172648.png"];
var mp4=["",""];
var ogv=["",""];
var alt=["",""];
var info=["",""];
var indexTag=0; actualAnswers=[]; dirMedia="34Test-4_resources/media/";
var tiRandOrder=false;
var iT=0;var r_order=[];
