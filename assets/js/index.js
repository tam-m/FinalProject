let all_svg_buttons = document.getElementsByClassName('icon');
let bl = all_svg_buttons.length;

for (let i =0; i <bl; i++) {
    all_svg_buttons [i].addEventListener('click', function(){

        this.classList.toggle('active');
            
        if (this.classList.contains('active')) {
            this.style.background = 'red';
        } else {    
            this.style.background = '#fff';
         } 
    
    })
}
   



const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
 navbar.classList.toggle("change");  
});

    
