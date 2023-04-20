'use strict'

//alert('works')


import { fetchApiDataStudentByStatus, fetchApiDataStudents } from "./api.js";
import { createStudentInfoScreen, student } from "./studentInfo.js";

//________________________________________________________________________________________//

const defaultScreen = function(){

  let screenListStudent = document.createElement("div")
  screenListStudent.id = "overal_content_list_student"
  screenListStudent.className = "overal_content_list_student"
  content1.appendChild(screenListStudent)

}

//________________________________________________________________________________________//

const studentStatusScreen = function(){

  let screenListStudent = document.createElement("div")
  screenListStudent.id = "overal_content_list_student_status"
  screenListStudent.className = "overal_content_list_student"
  content1.appendChild(screenListStudent)

  let studentBoxStatus = document.createElement("div")
  studentBoxStatus.id = "all_students_status"
  studentBoxStatus.className = "all_students"

  overal_content_list_student_status.appendChild(studentBoxStatus)

}

//________________________________________________________________________________________//

const studentCardBox = function(){

  let studentBox = document.createElement("div")
  studentBox.id = "all_students"
  studentBox.className = "all_students"

  overal_content_list_student.appendChild(studentBox)
  
}
//________________________________________________________________________________________//

const tittleStudentList =  async (subject)=> {
  
  let dataSubject = subject

  const regex = /[0-9\.-]+/
  const simbol = /-/
  
  var subjectTextTittle  = dataSubject.replace(regex,'').replace(simbol, '');

  let tittleStudent = document.createElement("div");
  tittleStudent.id = "tittle_list_student"
  tittleStudent.textContent = subjectTextTittle
  tittleStudent.className = "tittle_list_student"
  header.appendChild(tittleStudent) 

}

//________________________________________________________________________________________//

const createListStudentsScreen = async ()=>{

  defaultScreen()
  studentStatusScreen()
  menuBar()
  yearBox()
  studentCardBox()
  
}


//________________________________________________________________________________________//

const removeListStudents = function(){

  let screenListStudents = document.getElementById("overal_content_list_student")

  //let screenlistStudentStatus = screenListStudent.id = "overal_content_list_student_status"

  if( screenListStudents  != null  ){

    content1.removeChild(overal_content_list_student)
  }
 
}

//________________________________________________________________________________________//

const defaultCardStudent = async(status)=>{

   let dataSubject = status

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

const cardStudentStatus = async (dataSubject, status) =>{

  let desirableSubject = dataSubject
  let desirableStatus = status
 
  const listStudentData = await fetchApiDataStudentByStatus(desirableSubject,desirableStatus)  

  console.log(listStudentData)

  listStudentData.student.forEach(element => {

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

    if(element.status == "Cursando"){
      studentCard.style.backgroundColor = "var(--headerFoter)"
   }else{
    studentCard.style.backgroundColor = "var(--menuHeaderSubtitle)"
   }
  
     
   all_students_status.appendChild(studentCard)

    studentCard.appendChild(studentCardImg)
    studentCard.appendChild(studentCardName)

  })
  

}

//______________________________________________________________________________________________________
const cardStudent =  async (status)=> {

  let dataSubject = status

  defaultCardStudent(dataSubject)

  optionBox(dataSubject)


}
//________________________________________________________________________________________//

const optionBox = function(dataSubject){

  let subjectData = dataSubject 

  let optionsStaus= document.createElement("div");
  optionsStaus.id = "option_status"
  optionsStaus.className = "option_status" 
  optionsStaus.style.display = "none" 
  header.appendChild(optionsStaus)

  let options = ["Status","Cursando", "Finalizado"]

  options.forEach(element => {

    let option = document.createElement("button")
    option.textContent = element
    option.className = "option_element_status"

    option.onclick = function(){

      //removes the screen
      removeListStudents()

      if(element != "Status"){
          
        cardStudentStatus(subjectData , element)
      }
      
      
    }

    option_status.appendChild(option)

  });
}

//________________________________________________________________________________________//

const yearBox = function(){

  let optionsYear= document.createElement("div");
  optionsYear.id = "option_year"
  optionsYear.className = "option_status_year" 
  optionsYear.style.display = "none" 
  header.appendChild(optionsYear)

  let options = ["Ano", "2021", "2022", "2023", "2024"]

  options.forEach(element => {

    let option = document.createElement("button")
    option.textContent = element
    option.className = "option_element_status"
    optionsYear.appendChild(option)

  });

}

//________________________________________________________________________________________//

const optionYear = function(){

  let boxOption = document.getElementById("option_year")

  let options = document.createElement("option")
    options.id = "options"
    
  if(boxOption.style.display === "block"){

    boxOption.style.display = "none"
    option_status.appendChild(options)
   
  } else if(boxOption.style.display = "none" && option_status.appendChild(options) ){

    boxOption.style.display = "block" 
    option_status.removeChild(options)
    
  }

  } 

  //________________________________________________________________________________________//
  
  const optionStatus = function(){

    let boxOption = document.getElementById("option_status")
  
    let options = document.createElement("option")
      options.id = "options"
      
    if(boxOption.style.display === "block"){
  
      boxOption.style.display = "none"
      option_status.appendChild(options)
     
    } else if(boxOption.style.display = "none" && option_status.appendChild(options) ){
  
      boxOption.style.display = "block" 
      option_status.removeChild(options)
      
    }
  
  } 

  //_________________________STATUS_________________________________________________


const menuBar = function() {

  let contentHeader = document.createElement("div");
  contentHeader.id = "menu"
  contentHeader.className = "menu"
  header.appendChild(contentHeader) 

  let boxStatus = document.createElement("div")
  boxStatus.id = "box_status"
  boxStatus.className = "box_status"
  contentHeader.appendChild(boxStatus)
  
  //status
  let menuBarStatus = document.createElement("div")
  menuBarStatus.id = "menu_status"
  menuBarStatus.className = "menu_status"
  menuBarStatus.onclick = function(){
    optionStatus()

  }
  menuBarStatus.textContent = "Status"
  boxStatus.appendChild(menuBarStatus)


  //year

  let menuYearStatus = document.createElement("div")
  menuYearStatus.id = "menu_status"
  menuYearStatus.className = "menu_status"
  menuYearStatus.onclick = function(){
    optionYear()
  }
  menuYearStatus.textContent = "Ano"
  boxStatus.appendChild(menuYearStatus)


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

//________________________________________________________________________________________//


const removeBoxOptions = function(){

  let boxOption = document.getElementById("option_status")
  
  let options = document.createElement("option")
    options.id = "options"
    
  if(boxOption.style.display === "block"){

    boxOption.style.display = "none"
    option_status.appendChild(options)
  }

  let boxOption2 = document.getElementById("option_year")

  let options2 = document.createElement("option")
    options2.id = "options"
    
  if(boxOption2.style.display === "block"){

    boxOption2.style.display = "none"
    option_status.appendChild(options2)

  }

}
//___________________________________________________________________________________//
const removeStudentScreen = function(){

  header.removeChild(menu) 
  header.removeChild(tittle_list_student)

  let screenListStudents = document.getElementById("overal_content_list_student")

  if( screenListStudents  != null  ){
    content1.removeChild(overal_content_list_student)
  }

  if (content1.appendChild(overal_content_list_student_status)){
     content1.removeChild(overal_content_list_student_status)
  }

  removeBoxOptions()
 
}

//________________________________________________________________________________________//

export{ createListStudentsScreen,cardStudent,tittleStudentList, cardStudentStatus }



