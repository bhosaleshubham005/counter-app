console.log("code is runnig");
// initial state
let count = 0 ;

let counter= document.getElementById("counter");
counter.innerText = count ;

// decrease
document.getElementById("decrease").addEventListener("click", function() {
 count--;
counter.innerText = count;
updatedisplay() ;
})

// reset
document.getElementById("reset").addEventListener("click",function(){
count = 0 ;
counter.innerText = count ;
updatedisplay() ;
})

// increase
document.getElementById("increase").addEventListener("click",function(){
count++ ;
counter.innerText = count ;
updatedisplay() ;
})


// color function
function updatedisplay(){
if(count<0)
{
    counter.style.color= ("red")
}
else if(count>0) {
        counter.style.color=("green")
    }

    else{
        counter.style.color=("blue")
}
}