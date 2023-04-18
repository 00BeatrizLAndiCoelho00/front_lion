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

  // const contentBars = document.createElement("div");
  // studentCard.appendChild(contentBars);

  // const bar = document.createElement("progress");
  // bar.value = data.disciplinas.media;
  // console.log(data)
  // bar.max = "100";
  // contentBars.appendChild(bar);

  // const span = document.createElement("span");
  // contentBars.appendChild(span);

  // const spanDisciplines = document.createElement("span");
  // contentBars.appendChild(span);
  // let graphycContent = document.createElement("div")
  // graphycContent.className = "graphyc_content"
  // graphycContent.id = "graphyc_content"
  // student_card_graphyc.appendChild(graphycContent)
};

const createStudentInfoScreen = function () {
  defaultScreen();
  studentCardInfo();
  studentGraphycInfo();
};

// //Student card
//

const student = async (registration) => {
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

  //console.log(studentData.student[0].curso[0].disciplinas)
};

// //_________________________________________________________________________________________

export { createStudentInfoScreen, student };
