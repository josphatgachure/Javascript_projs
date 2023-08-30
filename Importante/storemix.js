const studentForm =document.querySelector('#studentForm');
const studentContainer = document.querySelector('.students');
const nameInput = studentForm['name'];
const ageInput = studentForm['age'];
const rollInput =studentForm['roll'];

const students =[
   
];

const AddStudents = (name,age,roll)=>{
   
        students.push({
            name:name,
            age:age,
            roll:roll
        });
        return {name,age,roll}

   
}
const createStudentDiv = ({name,age,roll}) =>{
    const studentDiv = document.createElement('div');
    const studname = document.createElement('h2');
    const studage = document.createElement('p');
    const studroll =document.createElement('p');

    studentContainer.appendChild(studentDiv);
    studentDiv.append(studname ,studage, studroll);

    studname.innerText = "Student Name: " + name;
    studage.innerText = "Student Age: " + age;
    studroll.innerText = "Student Roll: " + roll;
    studentDiv.setAttribute('class', 'studs');
}

studentForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const newStudent = AddStudents(
    nameInput.value,
    ageInput.value,
    rollInput.value,
    )
    createStudentDiv(newStudent)
 });
students.forEach(createStudentDiv);



