function myfunction() {
  document.getElementById("offerbox").style.display="none";
}

var restaurants=["Punjabi Hut","Baba Ka Dhaba","Punjabi Rasoi","Seven Heaven"]

function getrest(){
for(i=0;i<restaurants.length;i++){
  var element=document.createElement("option");
  var text=document.createTextNode(restaurants[i]);
  element.appendChild(text);
  element.value=text;
  document.getElementById("restaurants").appendChild(element)
}
}

var url="  http://localhost:5000/states"

function getcity(){
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
        data.map((item)=>{
            var element=document.createElement("option");
            var text=document.createTextNode(item.name);
            element.appendChild(text);
            element.value=item.value;
            document.getElementById("city").appendChild(element);
        })
    })
}