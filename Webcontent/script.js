var totalRow=1;
var fname="";
var lname="";
var gender="";
var address="";
var state="";
var country="";
var pincode="";
var err ="";
var  foodtype=[];
var Mess=" Please select Minimum 2 food item. "

var table = document.createElement("table");
var thead = document.createElement("thead");
var tbody = document.createElement("tbody");


var dattacollect =()=>
{


     fname =document.querySelector("#fname").value;
     lname =document.querySelector("#lname").value;
     gender =document.querySelector("#gender").value;
     address =document.querySelector("#address").value;
     state =document.querySelector("#state").value;
     country =document.querySelector("#country").value;
     pincode =document.querySelector("#pincode").value;
     food =document.querySelectorAll("#food");
    
    var j=0;

    for(let i=0;i<5;i++)
    {
       if(food[i].checked ==true)
       {
        foodtype[j]=food[i].value;
        food[i].checked=false;
        j++;
       }
    }
    if(j<2)
    {
       err =document.querySelector("h5");
       err.innerHTML+=Mess;
       // err.appendChild(document.createElement("br")) ;
       err.setAttribute("style", "color: red;")
        return false;
    }
    err.innerHTML="";
    tableappending(); 
    
    document.querySelector("#fname").value ="";
    document.querySelector("#lname").value ="";
    document.querySelector("#gender").value ="";
    document.querySelector("#address").value ="";
    document.querySelector("#state").value="";
    document.querySelector("#country").value ="";
    document.querySelector("#pincode").value ="";
   
}


var tableappending=()=>
{
    
    if(totalRow==1)
    {
table.appendChild(thead);
table.appendChild(tbody);

document.querySelector(".tablesection").appendChild(table);

var row1 = document.createElement("tr");
var th0 = document.createElement("th");
th0.innerHTML="S.No";
var th1 = document.createElement("th");
th1.innerHTML="First Name";
var th2 = document.createElement("th");
th2.innerHTML="Last Name";
var th3 = document.createElement("th");
th3.innerHTML="Gender";
var th4 = document.createElement("th");
th4.innerHTML="Address";
var th5 = document.createElement("th");
th5.innerHTML ="State";
var th6 = document.createElement("th");
th6.innerHTML="Country";
var th7 = document.createElement("th");
th7.innerHTML="Pincode";
var th8 = document.createElement("th");
th8.innerHTML="food";

row1.appendChild(th0);
row1.appendChild(th1);
row1.appendChild(th2);
row1.appendChild(th3);
row1.appendChild(th4);
row1.appendChild(th5);
row1.appendChild(th6);
row1.appendChild(th7);
row1.appendChild(th8);
thead.appendChild(row1);
    }

var row2 = document.createElement("tr");
var td0 = document.createElement("td");
td0.innerHTML=totalRow;
var td1 = document.createElement("td");
td1.innerHTML=fname;
var td2 = document.createElement("td");
td2.innerHTML=lname;
var td3 = document.createElement("td");
td3.innerHTML=gender;
var td4 = document.createElement("td");
td4.innerHTML=address;
var td5 = document.createElement("td");
td5.innerHTML =state;
var td6 = document.createElement("td");
td6.innerHTML= country;
var td7 = document.createElement("td");
td7.innerHTML=pincode;
var td8 = document.createElement("td");
for(let k=0;k<foodtype.length;k++)
{
    td8.innerHTML+= foodtype[k]+" ";
}

//td8.innerHTML="food";

row2.appendChild(td0);
row2.appendChild(td1);
row2.appendChild(td2);
row2.appendChild(td3);
row2.appendChild(td4);
row2.appendChild(td5);
row2.appendChild(td6);
row2.appendChild(td7);
row2.appendChild(td8);
tbody.appendChild(row2);
totalRow++;
}