window.onload = function() {

    var sendButton = document.getElementsByName("enviar")[0];
    var thinkTextarea = document.getElementsByName("piensa")[0];
    var timeLine = document.getElementsByName("lineaDeTiempo")[0];
    var showChar = document.getElementById("showChar");

    sendButton.onclick = function() {
        if (thinkTextarea.value == "") {
            sendButton.disabled = true;
        } else {
            var tuitDiv = document.createElement("div");
            var nameSpan = document.createElement("span");
            var dateSpan = document.createElement("span");
            var tuitP = document.createElement("p");
            tuitDiv.appendChild(nameSpan);
            tuitDiv.appendChild(dateSpan);
            tuitDiv.appendChild(tuitP);
            tuitDiv.className = "twitt"
            nameSpan.textContent = "Genito";
            dateSpan.textContent = new Date();
            tuitP.textContent = thinkTextarea.value;
            dateSpan.id ="date";
            nameSpan.id ="name";
            timeLine.insertBefore(tuitDiv, timeLine.children[0]);
            
        }
    }

//funcion de cuenta de caracteres y descativado y activado de boton
    thinkTextarea.onkeyup = function(){
        var longitud = 140; //cantidad de texto que quiero que ingrese
        var resta = "";
        var piensa = thinkTextarea.value.length;
        resta = longitud - piensa;
        showChar.value=resta;

        if(resta>120 && resta <140){            
            sendButton.disabled= false;
            showChar.style.color = "hotpink";
        }else if( resta <120 && resta > 0){
            showChar.style.color = "orchid";
            sendButton.disabled= false;
        }else if(resta <0){            
            showChar.style.color = "crimson";
            sendButton.disabled=true;
        }
    }


//texarea que cresca
    thinkTextarea.setAtributte('style', 'height:' + (thinkTextarea.scrollHeight) + 'px; overflow-y:hidden;');
    thinkTextarea.addEventListener("input", OnInput, false);

    function OnInput(){
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    }

    var textarea = document.getElementById("piensa");
    var heightLimit = 200; /* Maximum height: 200px */

    textarea.oninput = function() {
        textarea.style.height = ""; /* Reset the height*/
        textarea.style.height = Math.min(textarea.scrollHeight, heightLimit) + "px";
    }
}

