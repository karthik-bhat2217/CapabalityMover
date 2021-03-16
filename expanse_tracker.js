var arr=[];
function addToTable(){
    var table=document.getElementById("table");
    var type=document.getElementById("type").value;
    var name=document.getElementById("name").value;
    var date=document.getElementById("date").value;
    var amount=document.getElementById("amount").value;
    var obj={type,name,date,amount};
    arr.push(obj);
    var row=document.getElementById("expanseTable");


    
    for(var i=1;i<arr.length;i++){
        table.deleteRow(1);
    }
    for(var i=0;i<arr.length;i++){
        table.innerHTML+=`<tr><td>${arr[i].type}</td><td>${arr[i].name}</td><td>${arr[i].date}</td><td>${arr[i].amount}</td></tr>`;
    }
    


}