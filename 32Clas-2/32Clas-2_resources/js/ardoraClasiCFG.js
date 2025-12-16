//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=8; attempts=0; attemptsMax=99;
var score=0; scoreMax=8; scoreInc=1; scoreDec=0
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Impact, Charcoal, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="MUY BIEN"; messageTime=""; messageError="ERROR"; messageErrorG="ERROR"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var txt_G=["","","","","","","",""];
var img_G=["i_Captura_de_pantalla_2025-12-15_172922.png","i_Captura_de_pantalla_2025-12-15_173511.png","i_Captura_de_pantalla_2025-12-15_173805.png","i_Captura_de_pantalla_2025-12-15_173950.png","i_Captura_de_pantalla_2025-12-15_190445.png","i_Captura_de_pantalla_2025-12-15_190514.png","i_Captura_de_pantalla_2025-12-15_190529.png","i_Captura_de_pantalla_2025-12-15_190607.png"];
var mp3_G=["","","","","","","",""];
var ogg_G=["","","","","","","",""];
var n_G=["MQ==","MQ==","MQ==","MQ==","Mg==","Mg==","Mg==","Mg=="];
var e_G=["","","","","","","",""];
var mp4_G=["","","","","","","",""];
var ogv_G=["","","","","","","",""];
var alt_G=["","","","","","","",""];
var txtGr=["Paralelo","Cortocircuito"];
var imgGr=["",""];
var mp3Gr=["",""];
var oggGr=["",""];
var altGr=["",""];
var ram_G=[-1,-1,-1,-1,-1,-1,-1,-1];
var messageErrorG="ERROR";
var dirMedia="32Clas-2_resources/media/"; var indexGame="0"; var tiAudio=false;
var wordsGame="MzJDbGFzLTI="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var imaW=["250","265","274","289","255","289","255","207"];
var imaH=["175","172","189","186","162","184","177","193"];
var info=["","","","","","","",""];
