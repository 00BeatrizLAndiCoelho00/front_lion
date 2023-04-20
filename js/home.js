"use strict";

//____________________________________IMPORTS____________________________________________________//

import { fetchApiDataSubject } from "./api.js";
import { cardStudent, createListStudentsScreen,tittleStudentList,  } from "./studentsList.js";


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

//creates the button 

const createButton = function(data){

  let subjectsData = data

  subjectsData.subjec.forEach((element)=>{

    let subjectAcronym = element.sigla
    let subjectname= element.nome
    let subjectIcon = element.icone

    let buttonsSubject = document.createElement("button")
    buttonsSubject.className = "button_subject"
    buttonsSubject.onclick = function () {
      
      removeItensInScreen()
      createListStudentsScreen()
      tittleStudentList(subjectname)
      cardStudent(subjectAcronym)
    
    };

    buttonsSubject.innerText = subjectAcronym
    const icon = document.createElement("img");
    icon.classList.add("image-icon");
    icon.src = subjectIcon;
    icon.alt = "Icon about course";

    buttonsSubject.appendChild(icon);

    buttonSubject.innerText = subjectAcronym
    button_div.appendChild(buttonsSubject);

  })
}

//give the button content
const buttonSubject = async () => {

  const subjectsData = await fetchApiDataSubject();

  createButton(subjectsData)
 
};



export { subjectBox, buttonsBox, buttonSubject };
