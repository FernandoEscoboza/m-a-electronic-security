
var input = document.getElementsByClassName("formulario_input");

for(var i; i < input.length; i++){
    input[i].addEventListener('keyup', function(){
        if(this.value.length >= 1){
            input[i].style.margin-top:"-135px";
            // this.nextElementSibling.classList.add("fijar");
        } else{
            this.nextElementSibling.classList.remove("fijar");
        }
    });
}
