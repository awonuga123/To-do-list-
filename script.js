function additem(){
     
        var inputData;
        
        inputData = document.getElementById("input").value;
        
        if(inputData == ""){
           alert("please enter the task");
        }
        else{
    
        document.getElementById("input").value=""; 
        
        var ptag= document.createElement("p");
        
        var tasktag= document.createElement("span");
        
        var task= document.createTextNode(inputData);
        
        tasktag.appendChild(task);
        
        ptag.appendChild(tasktag);
        
        var result = document.getElementById("result");
        
        result.appendChild(ptag);
        
        var remtag = document.createElement("span");
        
        var remtext = document.createTextNode(" * ");
        
        remtag.appendChild(remtext);
        
        ptag.appendChild(remtag);
        
        ptag.addEventListener("click",taskdone);
        
         
         function taskdone (){
            tasktag.style.textDecoration = "line-through"; 
         }   
         
        var remove =document.createAttribute("onclick");
        
        remove.value="this.parentNode.remove();"
        
        remtag.setAttributeNode(remove);
        }
    }