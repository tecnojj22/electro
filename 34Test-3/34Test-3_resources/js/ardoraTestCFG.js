//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=3; attempts=0; attemptsMax=99;
var score=0; scoreMax=3; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#304B96"; colorText="#000000"; colorSele="#5929D6";
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
var wordsGame="MzRUZXN0LTM="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["Halla el valor de la resistencia equivalente:","Halla el valor de la resistencia equivalente:","Halla el valor de la resistencia equivalente:"];
var answers1=["MTMsNDQ0","MDY3LDM0","MDg5LDMy"];
var answers2=["MTIsMzQ=","MDksMzM=","MDEsNDU="];
var answers3=["MTg0LDU0","MDk0LDQ1","MDAzLDM0"];
var ans=[answers1,answers2,answers3];
var err=["","",""];
var ima=["Captura_de_pantalla_2025-12-16_113520.png","Captura_de_pantalla_2025-12-16_113619.png","electric-resistencias-serie-paralelo-05.png"];
var mp4=["","",""];
var ogv=["","",""];
var alt=["","",""];
var info=["","",""];
var indexTag=0; actualAnswers=[]; dirMedia="34Test-3_resources/media/";
var tiRandOrder=false;
var iT=0;var r_order=[];
