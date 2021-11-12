

// function display(val){
//     // val mein if else lagyenge
//     // +-*/ mein string thodna h aur no banana h
//     //= mein exp calc krna h.
//     //clr sab zero krna h
//     // bodmas ke hisab se calc krna pdega
//     // 
// let disp=document.getElementById("displayPanel")
// console.log(disp)
// disp.innerHTML+=`${val}`
// console.log(val)
// }
//adding event listeners...

function addingeventlistener(id){
    let ele=document.getElementById(id)
   
    ele.addEventListener('click',function (){
        // val mein if else lagyenge
        // +-*/ mein string thodna h aur no banana h
        //= mein exp calc krna h.
        //clr sab zero krna h
        // bodmas ke hisab se calc krna pdega
        
    let disp=document.getElementById("displayPanel")   
    disp.innerHTML+=`${ele.value}`
    switch(id)    {
        case 0,1,2,3,4,5,6,7,8,9:

        case 10,11:

        case 12,13:

        case 14:

        case 15:
    }
    })

}

for(i=0;i<16;i++){
    addingeventlistener(i)
}