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
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FDFFFF"; colorButton="#91962F"; colorText="#400040"; colorSele="#0505FA";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Century Gothic, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="MUY BIEN"; messageTime=""; messageError="ERROR"; messageErrorG="ERROR"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="MTZGSS1lbGVjdHJpY2lkYWQtMQ=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cL=["","","","","","","",""];
var iL=["<div  align='center'><img alt='' src='16FI-electricidad-1_resources/media/1_2_en_serie.png'></div>","<div  align='center'><img alt='' src='16FI-electricidad-1_resources/media/2_2_en_paralelo.png'></div>","<div  align='center'><img alt='' src='16FI-electricidad-1_resources/media/3_3_en_serie.png'></div>","<div  align='center'><img alt='' src='16FI-electricidad-1_resources/media/4_3_en_paralelo.png'></div>","<div  align='center'><img alt='' src='16FI-electricidad-1_resources/media/5_4_en_serie.png'></div>","<div  align='center'><img alt='' src='16FI-electricidad-1_resources/media/6_4_en_paralelo.png'></div>","<div  align='center'><img alt='' src='16FI-electricidad-1_resources/media/7_mixto_1.png'></div>","<div  align='center'><img alt='' src='16FI-electricidad-1_resources/media/8_mixto_2.png'></div>"];
var order=["","","","","","","",""]; orderR=["","","","","","","",""];indexR=0; indexL=0;
var cR=["<p>3 bombillas en serie</p>","<p>2 bombillas en serie</p>","<p>3 bombillas en paralelo</p>","<p>4 bombillas en serie</p>","<p>2 bombillas en paralelo</p>","<p>4 bombillas en paralelo</p>","<p>2 bombillas en paralelo y otra en serie</p>","<p>2 bombillas en paralelo y dos en serie</p>"]; ansRL=["MQ==","NA==","MA==","Mg==","Mw==","NQ==","Ng==","Nw=="];
var iR=["","","","","","","",""];
var auR=[3,1,4,5,2,6,7,8];
