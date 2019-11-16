const StartNewScreen = document.querySelector(".StartNewScreen");
StartNewScreen.addEventListener("click", GridSizePrompt);




DrawBoxes(40);

function DrawBoxes(SelectedGridSize) {
    const GridParent = document.querySelector(".GridParent");
    const TheContainer = document.createElement("div");
//    TheContainer.classList.add("GridContainer");
    TheContainer.setAttribute("id", "GridContainer");
    GridParent.appendChild(TheContainer);


    const GridContainer = document.querySelector("#GridContainer");
	GridContainer.style.setProperty("--SelectedGridSize", SelectedGridSize);

    var Iteration = 1;
    while (Iteration <= (SelectedGridSize * SelectedGridSize)) {
        //Create the individual boxes and give each a common and an individual class.
		const TheDivs = document.createElement("div");
        TheDivs.classList.add("BoxesWhite");
        BoxNumber = "Box" + Iteration
        TheDivs.classList.add(BoxNumber);
        GridContainer.appendChild(TheDivs);

        //Adds an action to each box.
        CurrentBox = document.querySelector("." + BoxNumber);
        CurrentBox.addEventListener("mouseover", HoverAction);
        Iteration = Iteration + 1;
    }
}

function GridSizePrompt() {
    var PreferredGridSize = 101;
 
    while (!(PreferredGridSize < 101) || !(typeof (PreferredGridSize) == "number") || (isNaN(PreferredGridSize))) {
        PreferredGridSize = prompt("Enter a preferred grid size up to 100:", 40);
        if (PreferredGridSize == null) { break; } //Breaks out if there is a cancel
        PreferredGridSize = parseInt(PreferredGridSize);
    }

    if (PreferredGridSize != null) {
        const GridObjectForRemoval = document.getElementById("GridContainer"); 
        GridObjectForRemoval.parentNode.removeChild(GridObjectForRemoval);
        DrawBoxes(PreferredGridSize);
    }
}

function HoverAction(Element) {
    HoveredOverBox = Element.srcElement.className;
    HoveredOverBoxClassName = HoveredOverBox.slice(11, 200);
    BoxToUpdate = document.querySelector("." + HoveredOverBoxClassName)
    if (BoxToUpdate) { BoxToUpdate.classList.add("BoxesBlack") };
}
