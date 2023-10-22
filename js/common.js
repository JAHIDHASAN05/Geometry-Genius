function calculateArea( name, value1, value2 ){
    if(name=="Triagle"){
        const Area= 0.5 *value1*value2 +" cm2";
        return Area;
    }
    else if(name == "Rectangle"){
        const Area= value1*value2 +" cm2";
        return Area;
    }
    

}


function getInputFieldValueById(fieldId){
    const inputField= document.getElementById(fieldId)
    const inputFieldValueString=inputField.value ;
    const inputFieldValue=parseFloat(inputFieldValueString)
    if(inputFieldValueString.length==0 || inputFieldValueString==0){
        return "emtyInput"
    }
    else{

        return inputFieldValue;
    }
}




function fixedAreaValue(fixedValueTitle){

    if(fixedValueTitle=="Parallelogram")
    return "120 cm2";

    else if(fixedValueTitle=="Rhombus"){
     return "64 cm2"
    }
    else if(fixedValueTitle=="Pentagon"){
        return "30 cm2"
    }
    else if(fixedValueTitle=="Ellipse"){
        return "125.6 cm2"
    }
}

