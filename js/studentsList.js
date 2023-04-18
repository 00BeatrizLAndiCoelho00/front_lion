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

const menuBar = function()  {

  let contentHeader = document.createElement("div");
  contentHeader.id = "menu"
  contentHeader.className = "menu"
  header.appendChild(contentHeader) 

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
  studentCardBox()
  
}

const removeStudentScreen = function(){

  content1.removeChild(overal_content_list_student)
  header.removeChild(menu) 

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

    all_students.appendChild(studentCard)

    studentCard.appendChild(studentCardImg)
    studentCard.appendChild(studentCardName)

  
  })

}

export{createListStudentsScreen, cardStudent,tittleStudentList}


