function changeColor(hue){
    let h=document.getElementById('displayText');
    h.style.color=`hsl(${hue},100%,50%)`;
}
let slider=document.getElementById('colorSlider');
slider.addEventListener('input',function(){
    updateColorGradient(this.value);
});

function updateColorGradient(hue){
    const colorGradient=document.getElementById('colorGradient');
    colorGradient.style.background=`linear-gradient(to right,hsl(0,100%,50%),hsl(${hue},100%,50%))`;
}