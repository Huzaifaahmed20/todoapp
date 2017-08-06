var userInput = document.getElementById("todo");
var itemUl = document.getElementById("list");
var addbtn = document.getElementById("addbtn");
var editTodoItem;
function add(){
    if(userInput.value==="")
        {
            alert("Please Input any Todo");
        }
        else{
    var li = document.createElement("li");
    var liText = document.createTextNode(userInput.value);
    li.appendChild(liText);
    itemUl.appendChild(li);

    var editbtn = document.createElement("i");
    editbtn.setAttribute("class","fa fa-pencil-square-o");
    editbtn.setAttribute("onClick","editTodo(this.parentElement)");
    li.appendChild(editbtn);

    var delbtn = document.createElement("i");
    delbtn.setAttribute("class","fa fa-trash");
    delbtn.setAttribute("onClick","del(this.parentElement)");
    li.appendChild(delbtn);
        }
    userInput.value ="";

}

function del(itemToDel){
    itemUl.removeChild(itemToDel);
}
function editTodo(edititem){
    editTodoItem = edititem;
    addbtn.innerHTML="";
     addbtn.setAttribute("class","btn btn-info btn-lg fa fa-floppy-o");
    addbtn.setAttribute("onCLick","saveTodo()");
    
    userInput.value = edititem.childNodes[0].nodeValue;

}

function saveTodo(){
    var editedTodo = userInput.value;
    editTodoItem.childNodes[0].nodeValue = editedTodo;
    addbtn.setAttribute("class","btn btn-danger btn-lg fa fa-plus");
     addbtn.setAttribute("onCLick","add()");
    userInput.value = '';
    editTodoItem = undefined;
}