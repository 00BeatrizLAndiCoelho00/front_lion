"use stric";

import { fetchApiDataStudentRegistration } from "./api.js";

const defaultScreen = function () {
  let screenInfoStudent = document.createElement("div");
  screenInfoStudent.id = "overal_content_student_info";
  screenInfoStudent.className = "overal_content_student_info";
  content2.appendChild(screenInfoStudent);
};

const studentCardInfo = function () {
  let studentCardBox = document.createElement("div");
  studentCardBox.className = "student_card_info";
  studentCardBox.id = "student_card_info";
  overal_content_student_info.appendChild(studentCardBox);

  //  //the card shape

  let studentCard = document.createElement("div");
  studentCard.className = "student_card";
  studentCard.id = "student_card";
  student_card_info.appendChild(studentCard);

  //  //card img

  let studentCardBoxImg = document.createElement("div");
  studentCardBoxImg.className = "student_img";
  studentCardBoxImg.id = "student_card_img";
  student_card.appendChild(studentCardBoxImg);
  //  //card name

  let studentCardBoxName = document.createElement("div");
  studentCardBoxName.className = "student_name";
  studentCardBoxName.id = "student_card_name";
  student_card.appendChild(studentCardBoxName);
};

// //Student graphyc info
const studentGraphycInfo = function () {
  let studentGraphycBox = document.createElement("div");
  studentGraphycBox.id = "student_graphyc_box";
  studentGraphycBox.className = "student_box";
  overal_content_student_info.appendChild(studentGraphycBox);

  let studentCard = document.createElement("div");
  studentCard.className = "student_card";
  studentCard.id = "student_card_graphyc";
  student_graphyc_box.appendChild(studentCard);

  let studentCardContent = document.createElement("div");
  studentCardContent.className = "student_card_graphyc_content";
  studentCardContent.id = "student_card_graphyc_content";
  student_card_graphyc.appendChild(studentCardContent);

  
};

const createStudentInfoScreen = function () {
  defaultScreen();
  studentCardInfo();
  studentGraphycInfo();
};

// //Student card

const studentCardMaker = async (registration) => {

  let dataStudent = registration;

  const studentData = await fetchApiDataStudentRegistration(dataStudent);

  studentData.student.map((element) => {
    let studentimage = document.createElement("img");
    studentimage.src = element.foto;
    studentimage.className = "student_image_info";
    student_card_img.appendChild(studentimage);

    let studentName = document.createElement("div");
    studentName.classList = "student_name_info";
    studentName.id = "student_name_info";
    studentName.textContent = element.nome;
    student_card_name.appendChild(studentName);
  });


}

const createBars = function(data){

  let mediaData = data
  let bar = document.createElement("progress");
  bar.classList = "progress_bar"
  bar.value =  mediaData;
  bar.max = "100";
  student_card_graphyc_content.appendChild(bar)

}

const studentGraphycMaker = async (registration) => {

  let dataStudent = registration;

  const studentData = await fetchApiDataStudentRegistration(dataStudent);

  let  dataDiciplinas = studentData.student[0].curso[0].disciplinas

  dataDiciplinas.forEach( element => {
    
   let mediaData = element.media

   createBars(mediaData)

  });

}

const student = async (registration) => {

  let dataStudent = registration;
 
  studentCardMaker(dataStudent)
  studentGraphycMaker(dataStudent)
};

// //_________________________________________________________________________________________

export { createStudentInfoScreen, student };
