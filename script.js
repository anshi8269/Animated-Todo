var input = document.querySelector(".inputin");
var addtbn= document.querySelector(".addbtn");

var tasklist= document.querySelector(".task");

count=0;
addtbn.addEventListener("click" , function(){
    var val = input.value;
    if(val){
    input.value="";
    var newelem = tasklist.appendChild(document.createElement("p"));
    newelem.innerText=val;
    newelem.id=count;

    count++;
    }
});

input.addEventListener("keypress" , function(event){
    var val = input.value;
    if(val && event.key=="Enter"){
    input.value="";
    var newelem = tasklist.appendChild(document.createElement("p"));
    newelem.innerText=val;
    newelem.id=count;

    count++;
    }
});

 
 tasklist.addEventListener("click" , function(dets){
   var ith = dets.target.id;
   tasklist.removeChild(dets.target);
})














