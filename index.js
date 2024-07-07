let screen=document.querySelector("#screen")
let button=document.querySelectorAll("button")

let string="";
button.forEach(number=>{
    number.addEventListener("click",(event)=>{

       let btnText = event.target.innerHTML;
       screen.value+=btnText

       if(btnText=="AC"){
        string="";
        screen.value=string
       }

       else if (btnText=="Sqrt"){

        string=Math.sqrt(string)
       screen.value=string

       }
       else if (btnText=="="){
        string=eval(string)
        screen.value=string

        
       }
       else if (btnText=="c"){

        string=string.toString().slice(0,-1)
        screen.value=string


       }

       else {

        string+=btnText;
        screen.value=string

       }

    })
})