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
  for(let i=1;i<=4;i++){
    let key="drag", value="div";
    key +=i , value +=i
    myMap[key] = value;
  }
  for(let i=5;i<=8;i++){
    let key="drag", value="divx";
    let j=i-4;
    key +=i ,value +=j;
    myMap[key] = value;
  }
  for(let i=9;i<=12;i++){
    let key="drag", value="divy";
    let j=i-8;
    key +=i, value +=j;
    myMap[key] = value;
  }
  //console.log(myMap);
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
 // console.log(ev.target.id);
}

async function drop(ev) {
  ev.preventDefault();
   
   var data =  ev.dataTransfer.getData("text");
   var key=data;
   var value=ev.target.id;
   
  
  //await console.log(ev.target.id);
  //console.log(data);
  

  chk3(value);
  if(chk2(value) && chk3(value))
  {myMap[key]=value; ev.target.appendChild(document.getElementById(data));}


 //console.log(myMap);

}