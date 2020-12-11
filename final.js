var check =0;
var img = document.createElement("img");
$.ajax({
type:"GET",
url:"final.json",
success:function(response)
{
console.log(response)
}
})

function retreiveText() {
    var inputVal = document.getElementById("TextInput").value;  
var data = inputVal;
console.log(data)

var request;
if(data != ""){
if(window.XMLHttpRequest){
    request = new XMLHttpRequest();
}else{
    request = new
    ActiveXObject("Microsoft.XMLHTTP")
}
request.open('GET',data);
request.onreadystatechange = function(){
    if ((request.status==200) && (request.readyState===4)){
var modify = document.getElementById('update')
modify.innerHTML = request.responseText;    }
}
request.send();
}
else{
}}
function retriveIMG(){
    var inputVal = document.getElementById("IMGInput").value;  
    var src = inputVal;
    $(document).ready(function(){
    $("img").attr("src", src);
        });    
    }

  