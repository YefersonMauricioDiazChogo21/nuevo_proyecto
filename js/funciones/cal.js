function suma(num,num2){
    let result=num+num2
    return result
}

function trigonometria(botones){
    let equal=true
    cuenta=34
    while(equal){
        botones.forEach(boton => {
            boton.addEventListener('click',()=>{
                if(boton.id==="1"||boton.id==="2"||boton.id==="3"||boton.id==="4"||boton.id==="5"||boton.id==="6"||boton.id==="7"||boton.id==="8"||boton.id==="9"||boton.id==="0"){
                    
                }else if(boton.id==="="){
                    return
                    equal=false
                }else{
                    display.innerHTML="Error"
                    equal=false
                }
            })
           
    })
    }

}