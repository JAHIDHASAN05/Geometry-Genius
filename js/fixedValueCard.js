


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

//  Parallelogram-------------------------------------function;


  const ParallelogramButton=document.getElementById("parallelogram-btn").addEventListener("click", function(){
    
    const areaCalculation= document.getElementById("area-calculation")
        const calculateNewElementCreate= document.createElement("li");
        calculateNewElementCreate.innerText="Parallelogram"       ; 
        const inside=document.createElement("p");        
        inside.innerText=fixedAreaValue("Parallelogram");
        calculateNewElementCreate.appendChild(inside);
        const insideElelment=document.createElement("button");
        insideElelment.innerText='Covert to  m2';
        calculateNewElementCreate.appendChild(insideElelment);
        areaCalculation.append(calculateNewElementCreate);

})

//  Rhombus-------------------------------------function;
// 
  const RhombusButton=document.getElementById("Rhombus-btn").addEventListener("click", function(){
    
    const areaCalculation= document.getElementById("area-calculation")
        const calculateNewElementCreate= document.createElement("li");
        calculateNewElementCreate.innerText="Rhombus"; 
        const inside=document.createElement("p");        
        inside.innerText=fixedAreaValue("Rhombus");
        calculateNewElementCreate.appendChild(inside);
        const insideElelment=document.createElement("button");
        insideElelment.innerText='Covert to  m2';
        calculateNewElementCreate.appendChild(insideElelment);
        areaCalculation.append(calculateNewElementCreate);

})

// Pentagon-------------------------------------function;

  const PentagonButton=document.getElementById("Pentagon-btn").addEventListener("click", function(){
    
    const areaCalculation= document.getElementById("area-calculation")
        const calculateNewElementCreate= document.createElement("li");
        calculateNewElementCreate.innerText="Pentagon"; 
        const inside=document.createElement("p");        
        inside.innerText=fixedAreaValue("Pentagon");
        calculateNewElementCreate.appendChild(inside);
        const insideElelment=document.createElement("button");
        insideElelment.innerText='Covert to  m2';
        calculateNewElementCreate.appendChild(insideElelment);
        areaCalculation.append(calculateNewElementCreate);

})

//  Ellipse-------------------------------------function;

  const EllipseButton=document.getElementById("Ellipse-btn").addEventListener("click", function(){
    
    const areaCalculation= document.getElementById("area-calculation")
        const calculateNewElementCreate= document.createElement("li");
        calculateNewElementCreate.innerText="Ellipse"; 
        const inside=document.createElement("p");        
        inside.innerText=fixedAreaValue("Ellipse");
        calculateNewElementCreate.appendChild(inside);
        const insideElelment=document.createElement("button");
        insideElelment.innerText='Covert to  m2';
        calculateNewElementCreate.appendChild(insideElelment);
        areaCalculation.append(calculateNewElementCreate);

})