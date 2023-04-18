'use strict'


import { fetchApiDataStudents } from "./api.js";
import { createStudentInfoScreen, student } from "./studentInfo.js";



//alert('works')
const defaultScreen = function(){

  let screenListStudent = document.createElement("div")
  screenListStudent.id = "overal_content_list_student"
  screenListStudent.className = "overal_content_list_student"
  content1.appendChild(screenListStudent)

}

const optionBox = function(){

  let optionsStaus= document.createElement("div");
  optionsStaus.id = "option_status"
  optionsStaus.className = "option_status" 
  optionsStaus.style.display = "none" 
  header.appendChild(optionsStaus)
}

const optionStatus = function(){

  let boxOption = document.getElementById("option_status")
  
  if(boxOption.style.display === "block"){
    boxOption.style.display = "none"
  } else{
    boxOption.style.display = "block"
  }

  } 

const menuBar = function()  {

  let contentHeader = document.createElement("div");
  contentHeader.id = "menu"
  contentHeader.className = "menu"
  header.appendChild(contentHeader) 

  //status
  let menuBarStatus = document.createElement("div")
  menuBarStatus.id = "menu_status"
  menuBarStatus.className = "menu_status"
  menuBarStatus.onclick = function(){
    optionStatus()
  }
  menuBarStatus.textContent = "Status"
  contentHeader.appendChild(menuBarStatus)

//status box
  

  //tittle
  let menuBarSubtitle = document.createElement("div")
  menuBarSubtitle.id = "menu_tittle"
  menuBarSubtitle.className = "menu_tittle"
  contentHeader.appendChild(menuBarSubtitle)

  let menuBarSubtitleTittleText = document.createElement("p")
  menuBarSubtitleTittleText.textContent = "LEGENDA"
  menuBarSubtitle.appendChild(menuBarSubtitleTittleText)

  let menuBarSubtitleBox1 = document.createElement("div")
  menuBarSubtitleBox1.className = "box_menu_tittle"
  menuBarSubtitleBox1.style.backgroundColor = "var(--headerFoter)"
  menuBarSubtitle.appendChild(menuBarSubtitleBox1)

  let menuBarSubtitleBox1Text = document.createElement("p")
  menuBarSubtitleBox1Text.textContent = "Cursando"
  menuBarSubtitle.appendChild(menuBarSubtitleBox1Text)

  let menuBarSubtitleBox2 = document.createElement("div")
  menuBarSubtitleBox2.className = "box_menu_tittle"
  menuBarSubtitleBox2.style.backgroundColor = "var(--menuHeaderSubtitle)"
  menuBarSubtitle.appendChild(menuBarSubtitleBox2)

  let menuBarSubtitleBox2Text = document.createElement("p")
  menuBarSubtitleBox2Text.textContent = "Finalizado"
  menuBarSubtitle.appendChild(menuBarSubtitleBox2Text)
}

const studentCardBox = function(){

  let studentBox = document.createElement("div")
  studentBox.id = "all_students"
  studentBox.className = "all_students"

  overal_content_list_student.appendChild(studentBox)
}

const tittleStudentList =  async (subject)=> {
  
  let dataSubject = subject
  
  var subjectTextTittle  = dataSubject.replace(/[0-9\.]+/,'');
  console.log(subjectTextTittle)

  let tittleStudent = document.createElement("div");
  tittleStudent.id = "tittle_list_student"
  tittleStudent.textContent = subjectTextTittle
  tittleStudent.className = "tittle_list_student"
  header.appendChild(tittleStudent ) 

}

const createListStudentsScreen = async ()=>{

  defaultScreen()
  menuBar()
  optionBox()
  studentCardBox()
  
  
}

const removeStudentScreen = function(){

  content1.removeChild(overal_content_list_student)
  header.removeChild(menu) 
  header.appendChild(tittle_list_student)
  
}


const cardStudent =  async (subject)=> {

  let dataSubject = subject
  const listStudentData = await fetchApiDataStudents(dataSubject)  

  listStudentData.students.forEach(element => {

    let studentCardImg = document.createElement("img")
    studentCardImg.className = "student_card_img"
    studentCardImg.src = element.foto

    
    let studentCardName = document.createElement("div")
    studentCardName.className = "student_card_Name"
    studentCardName.textContent = element.nome

    let studentCard = document.createElement("div")
    studentCard.id= "student_card_list"
    studentCard.className = 'student_card_list'

    studentCard.onclick = function(){

      removeStudentScreen()
      createStudentInfoScreen()
      student(element.matricula)
      
    }

    //changes the card color

     if(element.status == "Cursando"){
        studentCard.style.backgroundColor = "var(--headerFoter)"
     }else{
      studentCard.style.backgroundColor = "var(--menuHeaderSubtitle)"
     }
   
    all_students.appendChild(studentCard)

    studentCard.appendChild(studentCardImg)
    studentCard.appendChild(studentCardName)

  
  })

}

export{createListStudentsScreen, cardStudent,tittleStudentList}


