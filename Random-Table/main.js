var tagHtml=document.documentElement;
var tagBody=document.createElement('body');
tagHtml.appendChild(tagBody);
var tagTbody=document.createElement('tbody');
tagBody.appendChild(tagTbody);
var tagTable=document.createElement('table');
tagTable.border='1px solid black';
tagTable.textAlign='center';
var arr=new Array();

function randomColor(){
    var allowed = "ABCDEF0123456789", S = "#";
 
    while(S.length < 7){
        S += allowed.charAt(Math.floor((Math.random()*16)+1));
    }
    return S;
 }

function randomLetter(){
    
for(var i = 7; i; i--) {
    return (String.fromCharCode(Math.floor(Math.random()*(1040-1071))+1071));
    }
};
    

for(var i=1; i<=9; i++){
    arr[i]= new Array();
    var row=document.createElement('tr');
    
    for(var j=1; j<=9; j++){
        arr[i][j]=randomLetter();
        var cell=document.createElement('td');
            row.appendChild(cell);
            cell.style.backgroundColor = randomColor();
        
        cell.style.border= '1px solid black';
		cell.style.padding = '16px';
        cell.id = "cell" 
        cell.width="50";
        cell.height="50"
        cell.innerHTML= "<td>" + arr[i][j] + "</td>";
    }
    tagTable.appendChild(row);
}
document.body.appendChild(tagTable);