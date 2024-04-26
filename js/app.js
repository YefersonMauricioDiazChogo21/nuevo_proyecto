
const botones= document.querySelectorAll('.btn')
const display= document.querySelector(".display")
function convBin(num){
    if (num > 0) {
        return convBin(parseInt(num/2)) + (num%2)
      };
      return '';
}

let numOper=0
let oper=""

console.log(Math.sin(1))

trigonometrica=0
botones.forEach(boton => {
    boton.addEventListener('click',()=>{
        let num=parseFloat(display.innerHTML)
        if (boton.id==="bin"){
            console.log
            numBin= convBin(num)
            display.innerHTML =numBin
        } else if (boton.id==="hex"){
            numHex= num.toString(16)
            display.innerHTML= numHex
        } else if(boton.id==="oct"){
            numOct=num.toString(8)
            display.innerHTML=numOct
        } else if(boton.id==="dec") {
            numDec=num.toString(10)
            display.innerHTML= "error-no-codificado"
        } else if (boton.id==="c"){
            display.innerHTML="0"
        } else if (boton.id==="*" || boton.id==="+" || boton.id==="/" || boton.id==="-"){
            numOper=num
            oper=boton.id
            display.innerHTML=boton.id
        } else  if (boton.id==="sin"){
            display.innerHTML="sin("
            oper="sin"
        }else if(boton.id==="="){
            if (oper==="*" ){
                result=numOper*num
            } else if(oper==="+" ){
                result=numOper+num
            } else if(oper==="/" ){
                result=numOper/num
            } else if(oper==="-"){
                result=numOper-num
            } else if(oper==="sin"){
                result=Math.sin(parseInt(trigonometrica))
            }
            display.innerHTML= result
            numOper=result
            oper=""
        } else if(boton.id==="exp"){
            result=num**2
            display.innerHTML=result
        } else if(boton.id==="sqrt"){
            result=Math.sqrt(num)
            display.innerHTML=result
        } else {
            if (display.innerHTML==="0" ||display.innerHTML==="+"||display.innerHTML==="/" ||display.innerHTML==="*"){

                display.innerHTML = boton.id
            } else{
                display.innerHTML += boton.id
            }
            
        }
        //if(oper==="sin"||oper==="cos"||oper==="tan"){
            
        //    if(boton.id==="1"||boton.id==="2"||boton.id==="3"||boton.id==="4"||boton.id==="5"||boton.id==="6"||boton.id==="7"||boton.id==="8"||boton.id==="9"||boton.id==="0"){
        //            trigonometrica+=boton.id
        //            console.log(trigonometrica)
        //    }else if(boton.id==="="||boton.id==="sin"||boton.id==="cos"||boton.id==="tan"){
         //       let accion=""
         //   } else{
         //       display.innerHTML="Error"
        //    }
        //}
       
    })
    
})

