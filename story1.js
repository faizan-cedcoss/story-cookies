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
function change()
{
	for(i=0;i<8;i++)
{
document.getElementsByClassName('A1')[i].innerHTML = "Null";
}
for(j=0;j<9;j++)
{
document.getElementsByClassName('A2')[j].innerHTML = "Null";
}
document.getElementById('A3').innerHTML = "Null";
document.getElementById('Adj').innerHTML = "Null";
for(k=0;k<3;k++)
{
document.getElementsByClassName('Verb')[k].innerHTML = "Null";
}
document.getElementById('No').innerHTML = "Null";
document.getElementById('Ans').innerHTML = "Null";
document.getElementById('Speed').innerHTML = "Null";
document.getElementById('Quote').innerHTML = "Null";
document.getElementById('Msg').innerHTML = "This is a meaningful message";
}
function abc(ans)
{
document.getElementById('result').value=ans;
	}

