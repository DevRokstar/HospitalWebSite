const controllerDiv = document.getElementById("Controller");
let lastShownElement = document.getElementById("Personal-Information");

const elementsMap = {
    "Personal-Information": document.getElementById("Personal-Information"),
    "Consultations": document.getElementById("Consultations"),
    "Operations": document.getElementById("Operations"),
    "MyPatient": document.getElementById("MyPatient")
};
const elementsMapController = {
    "PI" : "Personal-Information",
    "consultations-controller" : "Consultations",
    "operations-controller" : "Operations",
    "MyPatient-controller" : "MyPatient"    
};

window.addEventListener('click', (event) => {
    if (controllerDiv.contains(event.target)) {
        let targetId = elementsMapController[event.target.id];
        if (elementsMap[targetId]) {
            if (lastShownElement) lastShownElement.style.display = "none";
            lastShownElement = elementsMap[targetId];
            lastShownElement.style.display = "flex";
        }
    }
});