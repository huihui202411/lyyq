let heart = document.querySelector('.heart')
let card = document.querySelector('.card')
let box = document.querySelector('#box')
heart.addEventListener('click',function(){
    card.setAttribute("style","opacity:0");
    let x = document.createElement("audio");
     x.setAttribute("src", "lyy.mp3");
     x.setAttribute("autoplay","autoplay");


let i =0
let str = '乖乖 真的超级喜欢你的 以后希望都是我在身边我去陪着你 不要担心小脾气小情绪 很可爱 很喜欢 最好的爱是陪伴 最好的风景是与你同看 做个开开心心的小朋友 小脑袋瓜里面别想太多 想不明白就好好沟通 别偷偷扣分   — 愿意惯着你的小狗'
let strp = ''

function print()
{
 if(str[i]=='<')
 {
     document.getElementById("box").innerHTML=strp+"<br><br>+'|'";
     strp+="<br><br>";
 }
 else
 {
     strp+=str[i];
     box.innerHTML=strp + '|';
 }
 i++;
}
setTimeout(() => {
    let printid=setInterval(() => {
        print();
        if(i==str.length)
        clearInterval(printid);
        },190);  
}, 5500);  
function appearBackground(){
setTimeout(()=>{
box.style.opacity=1
},1500)
}
appearBackground()

})
