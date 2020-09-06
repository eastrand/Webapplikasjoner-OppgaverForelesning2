document.addEventListener('DOMContentLoaded', createMain());
var ul; 
function reset1(){
    ul.innerHTML = "";
    for(let i = 0; i<4;i++){
        const li = document.createElement("li")
        const c = document.createElement("button");
        c.innerHTML = "delete";
        c.addEventListener("click", function(){
            ul.removeChild(li);
        })
        li.appendChild(c);
        ul.appendChild(li);
    }
   }
function createMain(){
    const main = document.createElement("main");
    document.body.appendChild(main);
    const p = document.createElement("p");
    /*const jegTrener = document.createTextNode("Jeg trener på JavaScript");
    p.appendChild(jegTrener);*/
    p.innerHTML = "Jeg trener på JavaScript";
    p.className = "jegHarKlasse";
    main.appendChild(p);
    const select = document.createElement("select");
    select.style.position="relative";
    select.style.left="50%";
    select.style.right="50%";
    select.style.maxWidth="500px";
    const myObj = [{id: 1, data: "text"},{id:2, data:"text2"}];
    for(let i = 0; i<myObj.length;i++){
        var option = document.createElement("option");
        option.text=myObj[i].data;
        option.value=myObj[i].id;
        select.add(option);
    }
    main.appendChild(select);
   

    const reset = document.createElement("button");
    const test = document.createElement("button");
    reset.innerHTML="reset";
    test.innerHTML="test";
    reset.addEventListener("click",reset1);
    test.addEventListener("click",function (){
        var pString = p.innerHTML;
    var splitArray=pString.split("").reverse();
    console.log(splitArray instanceof Array)
    var lastWasSpace=false;
    for(let i = 0; i<splitArray.length;i++){
        if(splitArray[i] == ' ')
            lastWasSpace = true;
        else if (lastWasSpace){
            splitArray.splice(i,1);
            lastWasSpace = false;
        }
    }
    console.log(splitArray.length)
    p.innerHTML = splitArray.join("");
    });
    ul = document.createElement("ul");
    main.appendChild(test);
    main.appendChild(reset);
    main.appendChild(ul);
}

