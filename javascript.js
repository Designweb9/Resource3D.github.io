import { Item } from "./Reutilizar.js";

var arrVd=["02.mp4","teclado.mp4","01.mp4"];
const show=()=>{
    var vd=document.getElementById("vdoRand")
    var hm5=document.getElementById("htmlid")
    var randNum=Math.floor(Math.random()*3);
    vd.setAttribute("src","vdeo/"+arrVd[randNum]);
    hm5.addEventListener("click",()=>{
        vd.play();
    })

    Item();
   
}
window.addEventListener("load",show)