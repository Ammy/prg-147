var d = new Date()
var RealDate = (d.getMonth()+1)+"/"+d.getDate()+"/"+d.getFullYear();


    function display(date)
    {
        alert("MyScript1.js: " + date);
    }

    display(RealDate);