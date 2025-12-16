//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=99;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=2;
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
var fActi="Copperplate / Copperplate Gothic Light, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="MUY BIEN"; messageTime=""; messageError="ERROR"; messageErrorG="ERROR"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var d=[[0,0,0,0],[0,1,1,1],[0,1,1,1],[0,1,1,1]];
var vCell=[["0","0","0","0"],["0","0","0","0"],["0","1","1","1"],["0","0","0","1"]];
var a0Cell=[["TWFnbml0dWQgZWzDqWN0cmljYQ==","Vm9sdGFqZSBlbMOpY3RyaWNv","SW50ZW5zaWRhZCBkZSBjb3JyaWVudGU=","UmVzaXN0ZW5jaWEgZWzDqWN0cmljYQ=="],["TGV0cmEgcXVlIHJlcHJlc2VudGEgbGEgbWFnbml0dWQ=","Vg==","SQ==","Ug=="],["VW5pZGFkIGRlIG1lZGlkYQ==","Vm9sdGlv","QW1wZXJpb3M=","T2htaW9z"],["TGV0cmEgcXVlIHJlcHJlc2VudGEgbGEgdW5pZGFk","Vg==","QQ==","T21lZ2E="]];
var c=[[18,17,23,21],[32,1,1,1],[16,6,8,6],[30,1,1,5]];
var c1=[[0,0,0,0],[0,1,0,0],[0,4,6,0],[0,0,0,5]];
var c2=[[0,0,0,0],[0,0,0,0],[0,0,0,4],[0,0,0,0]];
var c3=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
var a1Cell=[["TWFnbml0dWQgZWzDqWN0cmljYQ==","Vm9sdGFqZSBlbMOpY3RyaWNv","SW50ZW5zaWRhZCBkZSBjb3JyaWVudGU=","UmVzaXN0ZW5jaWEgZWzDqWN0cmljYQ=="],["TGV0cmEgcXVlIHJlcHJlc2VudGEgbGEgbWFnbml0dWQ=","Vg==","SQ==","Ug=="],["VW5pZGFkIGRlIG1lZGlkYQ==","dm9sdA==","YW1wZXJl","T2htaW9z"],["TGV0cmEgcXVlIHJlcHJlc2VudGEgbGEgdW5pZGFk","Vg==","QQ==","b21lZ2E="]];
var a2Cell=[["TWFnbml0dWQgZWzDqWN0cmljYQ==","Vm9sdGFqZSBlbMOpY3RyaWNv","SW50ZW5zaWRhZCBkZSBjb3JyaWVudGU=","UmVzaXN0ZW5jaWEgZWzDqWN0cmljYQ=="],["TGV0cmEgcXVlIHJlcHJlc2VudGEgbGEgbWFnbml0dWQ=","Vg==","SQ==","Ug=="],["VW5pZGFkIGRlIG1lZGlkYQ==","Vm9sdGlv","QW1wZXJpb3M=","T2htcw=="],["TGV0cmEgcXVlIHJlcHJlc2VudGEgbGEgdW5pZGFk","Vg==","QQ==","T21lZ2E="]];
var a3Cell=[["TWFnbml0dWQgZWzDqWN0cmljYQ==","Vm9sdGFqZSBlbMOpY3RyaWNv","SW50ZW5zaWRhZCBkZSBjb3JyaWVudGU=","UmVzaXN0ZW5jaWEgZWzDqWN0cmljYQ=="],["TGV0cmEgcXVlIHJlcHJlc2VudGEgbGEgbWFnbml0dWQ=","Vg==","SQ==","Ug=="],["VW5pZGFkIGRlIG1lZGlkYQ==","Vm9sdGlv","QW1wZXJpb3M=","T2htaW9z"],["TGV0cmEgcXVlIHJlcHJlc2VudGEgbGEgdW5pZGFk","Vg==","QQ==","T21lZ2E="]];
var wordsGame="MTItVGEtMQ=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cols=4; var rows=4;var showC=true;
