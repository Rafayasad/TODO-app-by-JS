var list = document.getElementById("list");

function add(){
    var todo = document.getElementById("todo");
    var li = document.createElement('li');
    li.setAttribute("id","li");
    li.style.textAlign = "left"
    var litext = document.createTextNode(todo.value);
    li.appendChild(litext);
    list.appendChild(li);
    todo.value = "";

    // Delete button //
    
    var delbtn = document.createElement('button');
    var deltext = document.createTextNode("");
    delbtn.setAttribute("id","del");
    delbtn.setAttribute("onclick","del(this)");
    delbtn.style.marginLeft = "5%";
    delbtn.style.marginTop = "2%";
    delbtn.style.backgroundSize = "cover";
    delbtn.style.width = "30px"
    delbtn.style.height = "30px"
    delbtn.style.border = "none";
    delbtn.style.backgroundColor = "#ffffff63";
    delbtn.style.boxShadow = "1px 12px 17px 0px #5d696570";
    delbtn.style.borderRadius = "2rem";
    delbtn.style.borderColor = "#46828261";
    delbtn.style.backgroundImage = "URL(https://cdn.iconscout.com/icon/premium/png-512-thumb/delete-1432400-1211078.png)";
    delbtn.style.position = "relative";
    delbtn.style.top = "5px";
    delbtn.appendChild(deltext);
    li.appendChild(delbtn);
    
    // Edit button //

    var editbtn = document.createElement('button');
    var edittext = document.createTextNode("");
    editbtn.setAttribute("onclick","edit(this)");
    editbtn.style.marginLeft = "2%";
    editbtn.style.marginTop = "2%";
    editbtn.style.backgroundSize = "29px";
    editbtn.style.width = "30px"
    editbtn.style.height = "30px"
    editbtn.style.border = "none";
    editbtn.style.backgroundColor = "#ffffff63";
    editbtn.style.boxShadow = "1px 12px 17px 0px #5d696570";
    editbtn.style.borderRadius = "2rem";
    editbtn.style.borderColor = "#46828261";
    editbtn.style.backgroundImage = "URL(https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Edit_icon_%28the_Noun_Project_30184%29.svg/1024px-Edit_icon_%28the_Noun_Project_30184%29.svg.png)";
    editbtn.style.position = "relative";
    editbtn.style.top = "5px";
    editbtn.appendChild(edittext);
    li.appendChild(editbtn);

}
// delete all function //
function deleteAll(){
    list.innerHTML = "";
}

//delete one elemet function //

function del(e){
    e.parentNode.remove();
}

function edit(e){
    var editVal = prompt("enter your updated value",e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue = editVal;
}


// background-size: cover;
//     margin-left: 5%;
//     width: 30px;
//     margin-top: 2%;
//     border: none;
//     background-color: #ffffff63;
//     height: 30px;
//     box-shadow: 1px 12px 17px 0px #5d696570;
//     border-radius: 2rem;
//     border-color: #46828261;
//     background-image: url(https://cdn.iconscout.com/icon/premium/png-512-thumb/delete-1432400-1211078.png);
// }

//https://www.pngfind.com/pngs/m/275-2755033_edit-png-file-on-phone-svg-edit-icon.png