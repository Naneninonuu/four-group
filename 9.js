page = 257;
function next(){
    if (page < 372){
        page += 1;
        document.getElementById("image").src = "photo/"+page.toString()+".jpg";
    }
}
function back(){
    if (page > 257){
        page -= 1;
        document.getElementById("image").src = "photo/"+page.toString()+".jpg";
    }
}
function Apage(){
    temp = document.getElementById("input").value;
    if (temp < 372 && temp > 256){
        page = temp;
        document.getElementById("image").src = "photo/"+page.toString()+".jpg";
    }
    else{
        page = 257;
    }
}