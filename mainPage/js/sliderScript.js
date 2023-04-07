let strSection2 = ["Ремонт компьютеров и ноутбуков","Ателье по ремонту одежды","Автомобильное СТО", "Ремонт бытовой техники",
"Ремонт часов", "Сборка мебели", "Клининговые услуги", "Техническое обслуживание котлов"];

let left = document.getElementsByClassName('left')[0];
let right = document.getElementsByClassName('right')[0];

let str = document.getElementById("str");
let img = document.getElementById("img");

let num;
func ();
left.onclick = function () 
{
    if(left.getAttribute("active")=="no") return;
    str.innerHTML = strSection2[num-2];
    str.setAttribute("num", num-1)
    img.setAttribute("src",`/mainPage/img/item${num-1}.jpg`); 
    func ();
};

right.onclick = function () 
{
    if(right.getAttribute("active")=="no") return;
    str.innerHTML = strSection2[num];
    str.setAttribute("num", num+1)
    img.setAttribute("src",`/mainPage/img/item${num+1}.jpg`);
    func ();
};

function func ()
{
    num = Number(str.getAttribute("num"));
    if(num<=1) left.setAttribute("active", "no");
    else left.setAttribute("active", "yes");

    if(num>=strSection2.length) right.setAttribute("active", "no");
    else right.setAttribute("active", "yes");
}