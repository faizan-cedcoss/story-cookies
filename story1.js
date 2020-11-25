function setCookies1()
{
document.cookie = "Animal1="+document.form1.a1.value;
document.cookie = "Animal2="+document.form1.a2.value;
document.cookie = "Animal3="+document.form1.a3.value;
document.cookie = "Adjective="+document.form1.adj.value;
document.cookie = "Verb="+document.form1.verb.value;
document.cookie = "Number="+document.form1.no.value;
document.cookie = "Result="+document.form1.result.value;
document.cookie = "Speed="+document.form1.speed.value;
document.cookie = "Quote="+document.form1.quote.value;
document.cookie = "Message="+document.form1.msg.value;

}
function getCookies1()
{
var i=0;
var cookArray = document.cookie.split(";");
alert(document.cookie);
for(z=0;z<8;z++)
{
i=cookArray[0].indexOf('=');
document.getElementsByClassName('A1')[z].innerHTML = cookArray[0].substring(i+1);
}
for(j=0;j<9;j++)
{
i=cookArray[1].indexOf('=');
document.getElementsByClassName('A2')[j].innerHTML = cookArray[1].substring(i+1);
}
i=cookArray[2].indexOf('=');
document.getElementById('A3').innerHTML = cookArray[2].substring(i+1);
i=cookArray[3].indexOf('=');
document.getElementById('Adj').innerHTML = cookArray[3].substring(i+1);

for(k=0;k<3;k++)
{
i=cookArray[4].indexOf('=');
document.getElementsByClassName('Verb')[k].innerHTML = cookArray[4].substring(i+1);
}
i=cookArray[5].indexOf('=');
document.getElementById('No').innerHTML = cookArray[5].substring(i+1);
i=cookArray[6].indexOf('=');
document.getElementById('Ans').innerHTML = cookArray[6].substring(i+1);
i=cookArray[7].indexOf('=');
document.getElementById('Speed').innerHTML = cookArray[7].substring(i+1);
i=cookArray[8].indexOf('=');
document.getElementById('Quote').innerHTML = cookArray[8].substring(i+1);
i=cookArray[9].indexOf('=');
document.getElementById('Msg').innerHTML = cookArray[9].substring(i+1);
}
// function test()
// {

// var a = document.getElementById('a1').value;
// localStorage.setItem("firstname1",a);
// var b = document.getElementById('a2').value;
// localStorage.setItem("firstname2",b);
// var c = document.getElementById('a3').value;
// localStorage.setItem("firstname3",c);
// var d = document.getElementById('adj').value;
// localStorage.setItem("firstname4",d);
// var e = document.getElementById('verb').value;
// localStorage.setItem("firstname5",e);
// var f = document.getElementById('no').value;
// localStorage.setItem("firstname6",f);
// var g = document.getElementById('result').value;
// localStorage.setItem("firstname7",g);
// var h = document.getElementById('speed').value;
// localStorage.setItem("firstname8",h);
// var i = document.getElementById('quote').value;
// localStorage.setItem("firstname9",i);
// var j = document.getElementById('msg').value;
// localStorage.setItem("firstname10",j);
// }

// document.getElementById('A1').innerHTML = localStorage.getItem("firstname1");
// document.getElementsByClassName('A1')[0].innerHTML = localStorage.getItem("firstname1");
// for(i=0;i<8;i++)
// {
// document.getElementsByClassName('A1')[i].innerHTML = localStorage.getItem("firstname1");
// }
// for(j=0;j<9;j++)
// {
// document.getElementsByClassName('A2')[j].innerHTML = localStorage.getItem("firstname2");
// }
// document.getElementById('A3').innerHTML = localStorage.getItem("firstname3");
// document.getElementById('Adj').innerHTML = localStorage.getItem("firstname4");
// for(k=0;k<3;k++)
// {
// document.getElementsByClassName('Verb')[k].innerHTML = localStorage.getItem("firstname5");
// }



// document.getElementById('No').innerHTML = localStorage.getItem("firstname6");
// document.getElementById('Ans').innerHTML = localStorage.getItem("abc");
// document.getElementById('Speed').innerHTML = localStorage.getItem("firstname8");
// document.getElementById('Quote').innerHTML = localStorage.getItem("firstname9");
// document.getElementById('Msg').innerHTML = localStorage.getItem("firstname10");


function abc(ans)
{
document.getElementById('result').value=ans;
	}

