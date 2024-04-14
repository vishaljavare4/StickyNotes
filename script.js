console.log("hello");
let title=document.getElementById("title");
let color=document.getElementById("color");
let details=document.getElementById("details");
let submit=document.getElementById("submit");
let outerContainer=document.getElementById("output_container");

submit.addEventListener("click",(e)=>{
    e.preventDefault();
    addDetails();
});

color.addEventListener("change",()=>{
    details.style.backgroundColor=color.value;
})

function addDetails(e){
    console.log("hello");
    console.log(title.value);
    console.log(details.value);

    outputFormate();

    afterClick();   
}

function afterClick(){
    title.value="";
    details.value="";
    details.style.backgroundColor="white";
}

function outputFormate(){

    let div=document.createElement("div");
    let h3=document.createElement("h2");
    let cancel=document.createElement("span");
    let textArea=document.createElement("textarea");
    let p=document.createElement("p");

    div.style.position="relative";
    div.style.width="47%";
    div.style.height="260px";
    div.style.padding="3px";
    div.style.boxShadow = "1px 1px 8px 1px #9d9d9d";
    div.style.borderRadius="3px";
    div.style.display="flex";
    div.style.flexDirection="column";

    cancel.innerText="X";  
    cancel.addEventListener("click", function() {
        div.remove(); 
    });

    textArea.style.width="98%";
    textArea.style.borderRadius="3px";
    textArea.style.height="100%";

    
    h3.innerText=title.value;
    
    textArea.innerText=details.value;
    textArea.style.backgroundColor=color.value;

    currentDate(p);

    div.appendChild(h3);
    div.appendChild(cancel);
    div.appendChild(textArea);
    div.appendChild(p);
    outerContainer.appendChild(div);

}

function currentDate(p){
    let now=new Date;

    let formattedDate = now.toLocaleString("en-US", {
        weekday: "short", 
        month: "short", 
        day: "numeric", 
        year: "numeric", 
        hour: "numeric", 
        minute: "2-digit", 
        hour12: true 
    });

    p.innerText=formattedDate;
    
    console.log(formattedDate);
}