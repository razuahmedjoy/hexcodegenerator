const main = document.querySelector(".main");
const btn = document.querySelector(".generate-btn");
const hexcodepanel = document.querySelector(".color-code");

const codes = ['a','b','c','d','e','f','0','1','2','3','4','5','6','7','8','9'];


btn.addEventListener("click",function(){
    let colorcode = "#";
    for(let i = 0; i<6 ; i++){
    const num = Math.round(Math.random() * 15);

    colorcode += codes[num];
    
}
main.style.backgroundColor = colorcode;

hexcodepanel.innerHTML = colorcode;

})
