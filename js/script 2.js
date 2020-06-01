/*eslint-env browser*/

window.addEventListener("load", function () {
    "use strict";
    var errorId = window.document.getElementById("error"),
        bodyId = window.document.getElementById("body"),

        headerTagSelect = window.document.getElementById("headerTagSelect").value,
        savedText,

        bodyPara,
        bodyText;

        /*errorLabel,
        errorText;*/
        
    window.document.getElementById("submit").addEventListener("click", function () {
        /*let bodyId = window.document.getElementById("body"),
            textEntered = window.document.getElementById("textEntered").value,
            headerTagSelect = window.document.getElementById("headerTagSelect").value,*/

        var textEntered = window.document.getElementById("textEntered").value,
            
            errorLabel,
            errorText;
        
        if (textEntered === "") {
            errorLabel = window.document.createElement("label");
            errorText = window.document.createTextNode("Enter Text");
            errorLabel.appendChild(errorText);
            errorId.insertBefore(errorLabel, errorId.childNodes[0]);
            errorId.setAttribute("class", "error-text");
            window.document.getElementById("submit").disabled = true;
        } else {
            bodyPara = window.document.createElement(headerTagSelect);
            bodyText = window.document.createTextNode(textEntered);
            bodyId.appendChild(bodyPara).appendChild(bodyText);
            bodyPara.setAttribute("id", "textAdded");
            window.document.getElementById("submit").disabled = true;
            
            savedText = sessionStorage.setItem("Saved", true);
        }
    });
    
    window.addEventListener("input", function () {
        errorId.innerHTML = "";
        window.document.getElementById("submit").disabled = false;
    });
    
    window.document.getElementById("remove").addEventListener("click", function () {
        window.document.getElementById("submit").disabled = false;
        /*bodyId.removeChild(bodyPara).removeChild(bodyText);*/
        sessionStorage.clear();
        
    });
    
    if (sessionStorage.getItem("Saved")) {
        bodyPara = window.document.createElement(headerTagSelect);
        bodyText = window.document.createTextNode(textEntered);
        bodyId.appendChild(bodyPara).appendChild(bodyText);
        bodyPara.setAttribute("id", "textAdded");
        window.document.getElementById("submit").disabled = true;
        
    } else {
        window.console.log("not saved");
    }

});



