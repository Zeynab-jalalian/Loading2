const container=document.querySelector(".container"),
percent=document.querySelector("#percent ");

let perval=0;
let increment=setInterval(()=>{
perval++;
percent.textContent=`${perval}%`;

if(perval==100){
    clearInterval(increment);
    container.classList.remove("active");
}
},100)