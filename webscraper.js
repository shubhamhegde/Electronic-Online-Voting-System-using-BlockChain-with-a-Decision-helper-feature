// Requiring two of our dependencies
const request = require('request');
const cheerio = require('cheerio');


var names=[];
var criminal=[];
var party=[];
var educaion=[];
var age=[];
var assets=[];
var liab=[];
var x=[];
// Requesting to the website
request('http://myneta.info/LokSabha2019/index.php?action=show_candidates&constituency_id=431', (error, response, html) => {
    // Checking that there is no errors and the response code is correct
    if(!error && response.statusCode === 200){
        // Declaring cheerio for future usage
        const $ = cheerio.load(html);
const y=$('#table1 tbody tr');
//console.log(y.length);
for(var i=1;i<y.length;i++)
{
var c=$(y[i]).find("td");
//console.log(c.length.toString());
//console.log(c.toString());
for(var j=0;j<c.length;j++){
//console.log($(c[j]).text());
switch(j){
case 0: x.push("'"+$(c[j]).find("a").text()+"'");
break;
case 1:party.push("'"+$(c[j]).text()+"'");
break;
case 2:criminal.push("'"+$(c[j]).text()+"'");
break;
case 3:educaion.push("'"+$(c[j]).text()+"'");
break;
case 4:age.push("'"+$(c[j]).text()+"'");
break;
case 5:assets.push("'"+$(c[j]).text()+"'");
break;
case 6:liab.push("'"+$(c[j]).text()+"'");
break;
default:console.log("errorrr");
}
}
}
console.log("var names=["+x+"];\n");
console.log("var party=["+party+"];\n");
console.log("var criminal=["+criminal+"];\n");
console.log("var age=["+age+"];\n");
console.log("var asset=["+assets+"];\n");
console.log("var liab=["+liab+"];\n");
console.log("console.log(names.toString());")
    }
});

