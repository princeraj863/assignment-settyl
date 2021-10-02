var myMap =  {};
set();

 
 function chk2(value) {
   for(let i in myMap){
    if(myMap[i]==value)
      return 0;
   }
   return 1;

 }

 function set(){
  for(let i=1;i<=14;i++){
    let key="drag", value="div";
    key +=i , value +=i
    myMap[key] = value;
  }


 

 }

 function chk3(value) {
  
   for(let i=1;i<12;i++){
    let ch="drag";
      ch +=i;
     // console.log(ch);
      if(ch==value)
        return 0;
   }
   return 1;
   
 }

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  
  ev.dataTransfer.setData("text", ev.target.id);
}

async function drop(ev) {
  ev.preventDefault();
   
   var data =  ev.dataTransfer.getData("text");
   var key=data;
   var value=ev.target.id;
  
  if(chk2(value) && chk3(value))
  {myMap[key]=value; ev.target.appendChild(document.getElementById(data));}


}