var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */

for(let i = 0; i < 5; i++){
    let path = `images/pic${i+1}.jpg`
    var newImage = document.createElement('img');
    newImage.setAttribute('src', path);
    newImage.onclick = function(){
        displayedImage.setAttribute('src', path);
    }
    thumbBar.appendChild(newImage);
}


/* Wiring up the Darken/Lighten button */

btn.onclick = function(){
    if(btn.getAttribute('class') = "dark"){
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = 'rgba(0,0,0,5)'
    }else{
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = 'rgba(0,0,0,0)'
    }
}