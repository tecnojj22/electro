//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=20;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fPreg="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="MUY BIEN"; messageTime="";messageError="ERROR";messageErrorG="ERROR"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var actMaxWidth="600"; actMaxHeight="";indexQ=0;dirMedia="29IS-1_resources/media/";
var quest=[["¿Cuál de estas imágenes corresponde con un multímetro?","",""]];
var altQuest=[""];
var media=[["MQ==","","0_8a32f731-a3c4-446b-ad0f-b108002ad62f_product_slideshow_main.png",""],["Mg==","","0_ef3.png",""],["Mw==","","0_Multimetro_digital_ACDC_con_cables.jpg",""],["NA==","","0_21062024150538-1.jpg",""],["NQ==","","0_391367_20230822-073047.jpg",""],["Ng==","","0_00106652174209____2__1200x1200.png",""],["Nw==","","0_images.jpg",""],["OA==","","0_U11818_01_1200_1200_Termometro-digital-2-canales.jpg",""],["OQ==","","0_multimetro-digital-limit-dm-320.jpg",""],["MTA=","","0_17042-20559117.png",""],["MTE=","","0_13965-20437091.jpg",""],["MTI=","","0_03100_97837ebd-f74d-498e-b64a-58ac3dde7089.png",""]];
var alt=["","","","","","","","","","","",""];
var dat=[["MQ==","MQ==","MQ==","MQ==","MA==","MA=="],["MQ==","Mg==","MQ==","MQ==","MA==","MA=="],["MQ==","Mw==","MQ==","MQ==","MA==","MA=="],["MQ==","NA==","MQ==","MQ==","MA==","MA=="],["MQ==","NQ==","MA==","MQ==","MA==","MA=="],["MQ==","Ng==","MA==","MQ==","MA==","MA=="],["MQ==","Nw==","MA==","MQ==","MA==","MA=="],["MQ==","OA==","MA==","MQ==","MA==","MA=="],["MQ==","OQ==","MQ==","MQ==","MA==","MA=="],["MQ==","MTA=","MA==","MQ==","MA==","MA=="],["MQ==","MTE=","MA==","MQ==","MA==","MA=="],["MQ==","MTI=","MQ==","MQ==","MA==","MA=="]];
var actualBoard=[];actualState=[];indexGame=1;tiAudio=false;
var wordsGame="MjlJUy0x"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var actorder=[1];var in_act=0;
var imaW=["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
var imaH=["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
var info=["","","","","","","","","","","","","","","","","","","","","","","","",""];
