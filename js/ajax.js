console.log("Hello in js file");

let AddData = document.getElementById("AddData");
AddData.addEventListener('click',buttonClickH)

function buttonClickH(){
    console.log("you clicked Add Data");
    const xhr = new XMLHttpRequest();
   
    xhr.open('POST','http://dummy.restapiexample.com/api/v1/create',true);
    xhr.getResponseHeader('content-type','application/json');
   
    xhr.onprogress = function(){
        console.log("Progress");
    }
   
    xhr.onload = function(){
        if(xhr.status === 200){
            console.log(this.responseText);
            str = 'Add Successfully';
            let la = document.getElementById("la");
            la.innerHTML = str;
        }
        
    }
    params = `{"name":"testajay","salary":"123","age":"23"}`;
    xhr.send(params);
}


let GetData = document.getElementById("GetData");
GetData.addEventListener('click',buttonClickG)

function buttonClickG(){
    console.log("you clicked Get Data");
    const xhr = new XMLHttpRequest();
   
    xhr.open('GET','myjson.json',true);
    xhr.getResponseHeader('content-type','application/json');
   
    
   
    xhr.onload = function(){
        let obj = JSON.parse(this.responseText);
        console.log(obj);
        let list = document.getElementById("list");
        str = "";
        for(key in obj){
            str +=`<li> ${obj[key].address} </li>`;

        }
        list.innerHTML = str;
    }
    
    xhr.send();
}