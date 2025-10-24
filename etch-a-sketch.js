//create a new div element

const primaryDiv = document.getElementById("newBoxes");  //identify primary div element


//function to create new div boxes
function createDIv(requestLength, requestWidth) {
    //const myDiv = document.createElement("div");
    console.log("primaryDiv: " + primaryDiv.tagName);
    const divBreak = document.createElement("br");
    console.log("divBreak: " + divBreak);
    //document.appendChild(divBreak);
    for(i = 0; i < requestLength; i++) {
        console.log("print row: " + i);  
        primaryDiv.appendChild(divBreak);
        console.log("appending break to primaryDiv: " + primaryDiv);
        for(j = 0; j < requestWidth; j++) {
            console.log("print column: " + j);
            var myDiv = document.createElement("div");
            myDiv.classList.add("myDiv");
            // myDiv.classList.add(newDivName);
            //myDiv.classList.add("myDiv");
            newDivName = "div" + i + j;
            console.log("newDivName : " + newDivName);
            myDiv.setAttribute("id", newDivName);
            console.log("myDiv: " + myDiv);
            console.log("myDiv id name: " + myDiv.id);
            document.getElementById("newBoxes").appendChild(myDiv);
            // primaryDiv.append(myDiv);  //adds boxes to primary div
        }
    console.log("primaryDiv: " + primaryDiv.id);
    }
    console.log("final primary div with appends. " + primaryDiv);
    // return document.append(primaryDiv);


    //get all the elements iwht class myDiv
    const theDivs = document.getElementsByClassName("myDiv");

    //loop through each element and attach event listener
    for(i = 0; i < theDivs.length; i++){
        const divElement = theDivs[i];

        divElement.addEventListener("mouseover", () => {
            console.log("in event listener mouseover: ");
            divElement.style.backgroundColor="lightblue";
        });

        divElement.addEventListener("mouseout", () => {
            console.log("in mouseout listener event: ");
            divElement.style.backgroundColor="";
        });
        
    };

    return primaryDiv;
}

//button to initiate box size
const boxButton = document.getElementById("startBoxes");
console.log("just below boxButton: " + boxButton);
//adding event listeners to box button
boxButton.addEventListener("click", (event) => {
    console.log("initiate inquiry prompts for length and width: ");
    const lengthInput = prompt("Please enter length of boxes: ");
    console.log("entered value: " + lengthInput);
    const widthInput = prompt("Please enter width of boxes: ");
    console.log("entered width: " + widthInput);
    createDIv(lengthInput, widthInput);
    console.log("createDiv function enabled. ");
    console.log('button clicked, event passed to function...' + event.text);
});


//console.log(boxButton);

function initiateSketch() {


}