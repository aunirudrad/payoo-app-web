function convertedInputByID(id) {

    const newID = getInputByID(id);

    const convertedID = parseInt(newID);
    
    return convertedID;
}

function getInputByID(id) {
    
    const elementId = document.getElementById(id).value;

    return elementId;

}
function getInputByInnerText(id) {
    
    const elementId = document.getElementById(id).innerText;

    return elementId;

}

function convertedInputByInnerText(id) {

    const stringID = getInputByInnerText(id);

    const convertedStringID = parseFloat(stringID);
    
    return convertedStringID;
}
