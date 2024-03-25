import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { setSelectedStudent, setStudent } from '../../../redux/Actions/LibraryActions';

export default function DisplayStudent() {

    const students = useSelector((state) => state.allStudents.students);
    console.log(students)
    const dispatch = useDispatch();


    const GetStudentId =(id)=>{
    console.log(id);


    const singlestudent= students.find((student)=>student.id===id);
      singlestudent.state="UPDATING";

    dispatch (setSelectedStudent(singlestudent))
    console.log(singlestudent);

  }

  const GetRemoveId = (id) =>
  {
    const singlestudent1= students.find((student)=>student.id===id);
    singlestudent1.state="REMOVED";


    const oldStudent = [...students];
      const studentindex = oldStudent.findIndex((student) => student.id===id);
     
      oldStudent.splice(studentindex,1,singlestudent1);
      dispatch(setStudent(oldStudent));
      console.log(students);


  /*dispatch (setSelectedStudent(singlestudent))*/
  }


  return (
    <table className="student-table">
      <thead>
      <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Actions</th>
    </tr>
      </thead>

      <tbody>
        {
<<<<<<< HEAD
          students.filter((student)=>student.state!='REMOVED').map((students) => {
=======
          students.map((students) => {
>>>>>>> a1b2ae6c45532b58059aa36070d9b51575ed36f8
            return(
              <tr key={students.id}>
                <td>{students.id}</td>
                <td>{students.firstname}</td>
                <td>{students.lastname}</td>
<<<<<<< HEAD
                <td>

                  <button onClick={() => GetStudentId(students.id)}>Edit</button>
                  &nbsp;
                  <button onClick={() => GetRemoveId(students.id)}>Delete</button>
                </td>
=======
                <td>Actions</td>
>>>>>>> a1b2ae6c45532b58059aa36070d9b51575ed36f8
            </tr>
            )
    })

        }
      </tbody>

  </table>
  )
}
