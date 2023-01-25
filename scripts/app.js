const btnA = document.querySelector('.mobile-nav');
const btnB = document.querySelector('.cross2');
const slide = document.querySelector('.left-part-slide');
const filterappear = document.querySelector('.filter-black');

let togglebtn;

btnA.addEventListener('click', sliderightmobile);
btnB.addEventListener('click', crossclose);


function sliderightmobile(){

    if(!togglebtn) {
        slide.style.setProperty("transform", "translate(0)", "important");
        //slide.style.transform = "translate(0)"; Si sa ne marche pas
        filterappear.style.background = "#00000060";
        return;
    }
};

function crossclose(){

    if(!togglebtn) {
        slide.style.transform = "translate(100%)";
        filterappear.style.background = "#00000000";
        return;
    }
}