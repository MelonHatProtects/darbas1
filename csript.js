function newElement() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("myinput").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    document.getElementById("myul").appendChild(li);
    }


  