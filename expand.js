bi = document.getElementById("bi");
big = document.getElementById("big");

bi.addEventListener("click", onClick1);
big.addEventListener("click", onClick2);

function onClick1() {
    bi.style.display = "none";
    big.style.display = "block";
} 

function onClick2(){
    bi.style.display = "";
    big.style.display = "";
}