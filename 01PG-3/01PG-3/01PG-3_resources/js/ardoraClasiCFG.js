//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=5; attempts=0; attemptsMax=80;
var score=0; scoreMax=5; scoreInc=1; scoreDec=0
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
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="MUY BIEN"; messageTime=""; messageError="ERROR"; messageErrorG="ERROR"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var txt_G=["","","","",""];
var img_G=["i_effege.png","i_colores-cables-electricos.jpg","i_resistencia-electrica-2.jpg","i_interruptor-bipolar-balancin-6-10-amp.jpg","i_leuci-bombilla-incandescente-standard-clara-230v-150w-e27.jpg"];
var mp3_G=["","","","",""];
var ogg_G=["","","","",""];
var n_G=["MQ==","Mg==","Mw==","NA==","NQ=="];
var e_G=["","","","",""];
var mp4_G=["","","","",""];
var ogv_G=["","","","",""];
var alt_G=["","","","",""];
var txtGr=["Fuente de energía que genera un voltaje entre sus terminales logrando que electrones se desplacen.","Llevan la corriente a los demás componentes del circuito a través de estos cables.","Transforma esta energía eléctrica en energía lumínica y calórica.","Dispositivo de control, que permite o impide el paso de la corriente eléctrica.","Su finalidad es convertir energía eléctrica en luz."];
var imgGr=["","","","",""];
var mp3Gr=["","","","",""];
var oggGr=["","","","",""];
var altGr=["","","","",""];
var ram_G=[-1,-1,-1,-1,-1];
var messageErrorG="ERROR";
var dirMedia="01PG-3_resources/media/"; var indexGame="0"; var tiAudio=false;
var wordsGame="MDFQRy0z"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var imaW=["104","150","150","88","78"];
var imaH=["100","100","70","100","100"];
var info=["","","","",""];
