
'use strict'
let is_nightmood=false;


let darkmode=localStorage.getItem('darkmode');
const darkMoodTogggle=document.querySelector(".dn");//input label
if(darkmode=='true')enableDarkMode();
    

function enableDarkMode(){

    localStorage.setItem('darkmode','true');
   document.body.classList.add("darkmode");
  darkMoodTogggle.checked=true;

    
}
function disablDarkMode(){

    localStorage.setItem('darkmode','false');
   document.body.classList.remove("darkmode");
   
}

darkMoodTogggle.addEventListener('change', ()=>{
    
      is_nightmood=darkMoodTogggle.checked;// false=default mood, true=night mood
    if(is_nightmood)enableDarkMode();
    else disablDarkMode();
 
  
    
})

