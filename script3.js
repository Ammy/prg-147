var request;
if(window.XMLHttpRequest){
    request = new XMLHttpRequest();
}else{
    request = new
    ActiveXObject("Microsoft.XMLHTTP")
}
request.open('GET','data.txt');
request.onreadystatechange = function(){
    if ((request.status==200) && (request.readyState===4)){
var modify = document.getElementById('update')
modify.innerHTML = request.responseText;    }
}
request.send();
