// Filter
function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDIV");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}

//menu onmouseover event
function changeBorder(id){
    document.getElementById(id).style="background-color:#AAAAAA";
}
//menu onmouseout event
function changeBack(id){
    document.getElementById(id).style="background-color:none";
}