"use strict";

//alert('a')

import { fetchApiDataSubject } from "./api.js";
import { cardStudent, createListStudentsScreen,tittleStudentList } from "./studentsList.js";

fetchApiDataSubject();


const removeItensInScreen = function() {
  
  return content.removeChild(overal_content_subect)

};

//creates the image space
const subjectBox = () => {

  let rigthPartsSubject = document.createElement("div");
  rigthPartsSubject.id = "right_part_subject";
  rigthPartsSubject.className = "right_part_subject";
  overal_content_subect.appendChild(rigthPartsSubject);

};

//creates the button
const buttonsBox = function () {
  let buttonsDiv = document.createElement("div");
  buttonsDiv.id = "button_div";
  buttonsDiv.className = "button_div";
  right_part_subject.appendChild(buttonsDiv);
};

//give the button content
const buttonSubject = async () => {

  const subjectsData = await fetchApiDataSubject();

  subjectsData.subjec.forEach((element)=>{

    let subjectAcronym = element.sigla
    let subjectImage = element.icone

    console.log(subjectImage)

    let buttonsSubject = document.createElement("button")

    buttonsSubject.className = "button_subject"
    buttonsSubject.id = element.sigla
    
    
    buttonsSubject.onclick = function () {
      
      removeItensInScreen()
      createListStudentsScreen()
      tittleStudentList(element.nome)
      cardStudent(element.sigla)

    };

    
    buttonsSubject.innerText = subjectAcronym
    const icon = document.createElement("img");
    icon.classList.add("image-icon");
    icon.src = element.icone;
    icon.alt = "Icon about course";

    buttonsSubject.appendChild(icon);

    buttonSubject.innerText = subjectAcronym
    button_div.appendChild(buttonsSubject);

    
  })
 
};



export { subjectBox, buttonsBox, buttonSubject };
