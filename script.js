

let myRange = document.getElementById("firstrange"),
    selector = document.getElementById("selector"),
    selectValue = document.getElementById("value"),
    progressbar = document.getElementById("progressbar");

selectValue.textContent = myRange.value;
myRange.oninput = function(){
    selector.style.left = myRange.value+"%";
    selectValue.textContent = myRange.value;
    progressbar.style.width = myRange.value+"%";
}