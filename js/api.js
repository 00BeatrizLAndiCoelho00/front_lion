
//alert('jswoks')

//___________________________________________Get list subjects___________________________________________________________

const fetchApiDataSubject = async () => {

    
    const url = `http://localhost:8080/v1/lion-school/cursos`

    const response = await fetch(url)
    const data = await response.json()

      return {
            subjec:data
        }  
}

//___________________________________________Get list all studesf of a subject________________________________________//

 const fetchApiDataStudents = async (subject) =>{
    const url = `http://localhost:8080/v1/lion-school/alunos/cursos/${subject}`

    const response = await fetch(url)
    const data = await response.json()
  //  console.log(data)

    return {
        students:data
    }
}
fetchApiDataStudents()
//__________________________________________________________Get student_____________________________________//

const fetchApiDataStudentRegistration = async (registration) =>{
    const url = `http://localhost:8080/v1/lion-school/alunos/matriculas/${registration}`

    const response = await fetch(url)
    const data = await response.json()

    return{
        student:data
    }
}


////fetchApiDataSubject()
//___________________________GET STUDENT BY STATUS_____________________________


const fetchApiDataStudentByStatus = async (status) =>{
    const url = `http://localhost:8080/v1/lion-school/alunos/status/DS/${status}`

    const response = await fetch(url)
    const data = await response.json()

    console.log(data)

    return{
        student:data
    }
}


export{fetchApiDataSubject,fetchApiDataStudents, fetchApiDataStudentRegistration,fetchApiDataStudentByStatus}
