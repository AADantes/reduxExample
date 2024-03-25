
<<<<<<< HEAD
import React,{useState,useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {setStudent,setSelectedStudent} from '../../../redux/Actions/LibraryActions';
=======
import React,{useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {setStudent} from '../../../redux/Actions/LibraryActions';
>>>>>>> a1b2ae6c45532b58059aa36070d9b51575ed36f8
export default function AddStudent() {


    const [firstname,setFirstname] = useState('');
    const [lastname,setLastname] = useState('');
    const dispatch = useDispatch();
    const students = useSelector((state) => state.allStudents.students);
<<<<<<< HEAD
    const singlestudent = useSelector((state) => state.singlestudent);

    console.log(singlestudent);

=======
>>>>>>> a1b2ae6c45532b58059aa36070d9b51575ed36f8

    const addstudent=()=> 
    {
     const newstudent={
      id:Math.floor(Math.random()*10000),
      firstname:firstname,
<<<<<<< HEAD
      lastname:lastname,
      status:'Active'
=======
      lastname:lastname
>>>>>>> a1b2ae6c45532b58059aa36070d9b51575ed36f8
    }
    const oldStudent = [...students];
    oldStudent.push(newstudent);
    dispatch(setStudent(oldStudent));
    }


<<<<<<< HEAD
    const updatestudent=()=>
    {
      const updatedstudent={
        id:singlestudent.id,
        firstname:firstname,
        lastname:lastname,
        status:'Active'
      }

      const oldStudent = [...students];
      const studentindex = oldStudent.findIndex((student) => student.id===singlestudent.id);
      console.log(studentindex);
      oldStudent.splice(studentindex,1,updatedstudent);
      dispatch(setStudent(oldStudent));

      singlestudent.firstname='';
      singlestudent.lastname='';
      singlestudent.state='Active';
      dispatch (setSelectedStudent(singlestudent));

      setFirstname('');
      setLastname('');
    }




      useEffect(()=>
      {

        if(singlestudent.firstname === ''){

        }
        else
        {
          setFirstname(singlestudent.firstname);
          setLastname(singlestudent.lastname);
        }


      },[singlestudent])

=======
>>>>>>> a1b2ae6c45532b58059aa36070d9b51575ed36f8

  return (
    <>
            <div className="student-form">
<<<<<<< HEAD
    <input type="text" value ={firstname} placeholder="Enter first name" onChange={(e)=> setFirstname(e.target.value)}/>
    <input type="text" value ={lastname} placeholder="Enter last name" onChange={(e)=> setLastname(e.target.value)}/>

    {
      singlestudent.state==='UPDATING' ?
      <button onClick={()=>updatestudent()} className="update-student">Update</button>
      :
      <button onClick={()=>addstudent()} className="add-student">Add</button>
    }

=======
    <input type="text" placeholder="Enter first name" onChange={(e)=> setFirstname(e.target.value)}/>
    <input type="text" placeholder="Enter last name" onChange={(e)=> setLastname(e.target.value)}/>
    <button onClick={()=>addstudent()} className="add-student">Add</button>
>>>>>>> a1b2ae6c45532b58059aa36070d9b51575ed36f8
 </div>
    </>
  )
}
