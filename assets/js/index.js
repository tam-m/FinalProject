let all_svg_buttons = document.getElementsByClassName('icon');


let bl = all_svg_buttons.length;

for (let i =0; i <bl; i++) {
    all_svg_buttons [i].addEventListener('click', function(){

        this.classList.toggle('active');
            
        if (this.classList.contains('active')) {
            this.style.background = '#fff';
            alert('jii');
        } else {    
            this.setAttributeNS(null,"background","green");

         } 
    
    })
}
   
    
