//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=99;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=1;
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
var timeOnMessage=5; messageOk=""; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var d=[[0,0,0,0],[0,1,1,1],[0,1,1,1],[0,1,1,1]];
var vCell=[["1","5","5","5"],["0","3","3","3"],["0","3","3","3"],["0","3","3","3"]];
var a0Cell=[["Q2lyY3VpdG8=","Y2lyY3VpdG8tMS5qcGc=","Y2lyY3VpdG8tMi5qcGc=","Y2lyY3VpdG8tMy5qcGc="],["cGlsYQ==","NC41IFY=","OSBW","OSBW"],["bWFuaW9icmE=","aW50ZXJydXB0b3I=","cHVsc2Fkb3I=","Y29ubXV0YWRvcg=="],["cmVjZXB0b3I=","Ym9tYmlsbGFz","dGltYnJl","Ym9tYmlsbGEgeSB0aW1icmU="]];
var c=[[8,14,14,14],[4,5,3,3],[8,11,8,10],[8,9,6,17]];
var c1=[[0,0,0,0],[0,5,5,5],[0,8,11,8],[0,5,8,16]];
var c2=[[0,0,0,0],[0,3,3,3],[0,10,10,11],[0,6,5,22]];
var c3=[[0,0,0,0],[0,3,5,5],[0,8,8,8],[0,11,11,19]];
var a1Cell=[["Q2lyY3VpdG8=","Y2lyY3VpdG8tMS5qcGc=","Y2lyY3VpdG8tMi5qcGc=","Y2lyY3VpdG8tMy5qcGc="],["cGlsYQ==","MS41IFY=","MS41IFY=","MS41IFY="],["bWFuaW9icmE=","cHVsc2Fkb3I=","aW50ZXJydXB0b3I=","cHVsc2Fkb3I="],["cmVjZXB0b3I=","bW90b3I=","Ym9tYmlsbGE=","Ym9tYmlsbGEgeSBtb3Rvcg=="]];
var a2Cell=[["Q2lyY3VpdG8=","Y2lyY3VpdG8tMS5qcGc=","Y2lyY3VpdG8tMi5qcGc=","Y2lyY3VpdG8tMy5qcGc="],["cGlsYQ==","MyBW","MyBW","MyBW"],["bWFuaW9icmE=","Y29ubXV0YWRvcg==","Y29ubXV0YWRvcg==","aW50ZXJydXB0b3I="],["cmVjZXB0b3I=","dGltYnJl","bW90b3I=","Ym9tYmlsbGEgeSByZXNpc3RlbmNpYQ=="]];
var a3Cell=[["Q2lyY3VpdG8=","Y2lyY3VpdG8tMS5qcGc=","Y2lyY3VpdG8tMi5qcGc=","Y2lyY3VpdG8tMy5qcGc="],["cGlsYQ==","NSBW","NC41IFY=","NC41IFY="],["bWFuaW9icmE=","c2VsZWN0b3I=","c2VsZWN0b3I=","c2VsZWN0b3I="],["cmVjZXB0b3I=","cmVzaXN0ZW5jaWE=","cmVzaXN0ZW5jaWE=","cmVzaXN0ZW5jaWEgeSBtb3Rvcg=="]];
var wordsGame="MTJDVGEtRWxlY3RyaWNpZGFkLTE="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cols=4; var rows=4;var showC=true;
