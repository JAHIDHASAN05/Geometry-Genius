

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




const TriangleCardButton=document.getElementById("Triangle-btn").addEventListener("click", function(){
         
    
     




        
        const triangleBFieldValue=getInputFieldValueById("triangle-B-Field");
        const triangleHFieldValue=getInputFieldValueById("triangle-H-Field");

            if(isNaN(triangleBFieldValue)){
                if(isNaN(triangleHFieldValue)){
             alert("Please Input B and H Field And Get the Triangle Area Total")

                }
                else{
                alert("Please input Triangle B field")

                }
            }
             
            else if(isNaN(triangleHFieldValue)){
                alert("Please Input Triangle H field")

            }
            
            else {
                const areaCalculation= document.getElementById("area-calculation");
                
                const calculateNewElementCreate= document.createElement("li");
                calculateNewElementCreate.innerText="Triangle"       ; 
                const inside=document.createElement("p"); 




                
                calculateNewElementCreate.appendChild(inside);
                const insideElelment=document.createElement("button");
                insideElelment.innerText='Covert to  m2';
                calculateNewElementCreate.appendChild(insideElelment);


                inside.innerText=calculateArea( "Triagle",triangleBFieldValue, triangleHFieldValue);
                

               
            
            
                areaCalculation.append(calculateNewElementCreate);
            }
         

          

       

})





const RectangleCardButton=document.getElementById("Rectangle-btn").addEventListener("click", function(){
         
    
     




        
        const RectangleWField=getInputFieldValueById("Rectangle-W-Field");
        const RectangleIField=getInputFieldValueById("Rectangle-I-Field");

            if(isNaN(RectangleWField)){
                if(isNaN(RectangleIField)){
             alert("Please Input W and I Field And Get Rectangle the Area Total")

                }
                else{
                alert("Please input Rectangle W field")

                }
            }
             
            else if(isNaN(RectangleIField)){
                alert("Please Input Rectangle I field")

            }
            
            else {
                const areaCalculation= document.getElementById("area-calculation");
                
                const calculateNewElementCreate= document.createElement("li");
                calculateNewElementCreate.innerText="Rectangle"; 
                const inside=document.createElement("p"); 




                
                calculateNewElementCreate.appendChild(inside);
                const insideElelment=document.createElement("button");
                insideElelment.innerText='Covert to  m2';
                calculateNewElementCreate.appendChild(insideElelment);


                inside.innerText=calculateArea( "Rectangle",RectangleWField, RectangleIField);
                

               
            
            
                areaCalculation.append(calculateNewElementCreate);
            }
         

          

       

})




   


