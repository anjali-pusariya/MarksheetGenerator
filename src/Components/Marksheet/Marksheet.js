// import React from 'react'
// import './Marksheet.css'
// import SchoolLogo from './Images/Schoollogo.png'
// import { useLocation } from 'react-router-dom'
// function Marksheet() {
//     const DetailsLoc = useLocation()
//     console.log(DetailsLoc.state)
//     return (
//         <div className='MarksheetContainer'>

//             <div className='MarksheetContent'>
//                 <div className='marksheet_head'>
//                     <img src={SchoolLogo} />
//                     <p>High Seconday School, Raipur, C.G</p>
//                 </div>
//                 <div className='MarksheetDetailsFinal'>

//                 </div>
//             </div>

//         </div>
//     )
// }

// export default Marksheet

// ===================================================

// import React from 'react'
// import './Marksheet.css'
// import SchoolLogo from './Images/Schoollogo.png'
// import { useLocation } from 'react-router-dom'

// function Marksheet() {
//     const { state } = useLocation();

//     // Destructure student details
//     const {
//         studentName,
//         class: studentClass,
//         rollNo,
//         motherName,
//         fatherName,
//         hindi,
//         english,
//         maths,
//         science,
//         sst,
//         cs,
//     } = state || {};

//     const subjects = [
//         { name: 'Hindi', marks: Number(hindi) },
//         { name: 'English', marks: Number(english) },
//         { name: 'Maths', marks: Number(maths) },
//         { name: 'Science', marks: Number(science) },
//         { name: 'SST', marks: Number(sst) },
//         { name: 'Computer Science', marks: Number(cs) },
//     ];

//     const totalMarks = subjects.reduce((sum, sub) => sum + sub.marks, 0);
//     const percentage = (totalMarks / 600) * 100;
//     const grade =
//         percentage >= 90 ? 'A+' :
//             percentage >= 75 ? 'A' :
//                 percentage >= 60 ? 'B' :
//                     percentage >= 45 ? 'C' :
//                         percentage >= 33 ? 'D' : 'F';
//     const status = percentage >= 33 ? 'Pass' : 'Fail';

//     return (
//         <div className='MarksheetContainer'>
//             <div className='MarksheetContent'>
//                 <div className='marksheet_head'>
//                     <img src={SchoolLogo} alt="School Logo" />
//                     <p>High Secondary School, Raipur, C.G</p>
//                 </div>

//                 <div className='MarksheetDetailsFinal'>
//                     <h2>Student Marksheet</h2>
//                     <div className="student-info">
//                         <div className="info-column">
//                             <p><strong>Name:</strong> {studentName}</p>
//                             <p><strong>Class:</strong> {studentClass}</p>
//                             <p><strong>Roll No:</strong> {rollNo}</p>
//                         </div>
//                         <div className="info-column">
//                             <p><strong>Mother's Name:</strong> {motherName}</p>
//                             <p><strong>Father's Name:</strong> {fatherName}</p>
//                         </div>
//                     </div>

//                     <table className="marks-table">
//                         <thead>
//                             <tr>
//                                 <th>Subject</th>
//                                 <th>Marks Obtained</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {subjects.map((sub, index) => (
//                                 <tr key={index}>
//                                     <td>{sub.name}</td>
//                                     <td>{sub.marks}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>

//                     <div className="result-summary">
//                         <p><strong>Total Marks:</strong> {totalMarks} / 600</p>
//                         <p><strong>Percentage:</strong> {percentage.toFixed(2)}%</p>
//                         <p><strong>Grade:</strong> {grade}</p>
//                         <p><strong>Status:</strong> {status}</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Marksheet;

/* =================================UPDATED 31/10/2025=============================== */

import React from 'react';
import './Marksheet.css';
import SchoolLogo from './Images/Schoollogo.png';
import { useLocation } from 'react-router-dom';

function Marksheet() {
  const { state } = useLocation();

  const {
    studentName,
    class: studentClass,
    rollNo,
    motherName,
    fatherName,
    hindi,
    english,
    maths,
    science,
    sst,
    cs,
  } = state || {};

  const subjects = [
    { name: 'Hindi', marks: Number(hindi) },
    { name: 'English', marks: Number(english) },
    { name: 'Maths', marks: Number(maths) },
    { name: 'Science', marks: Number(science) },
    { name: 'SST', marks: Number(sst) },
    { name: 'Computer Science', marks: Number(cs) },
  ];

  const totalMarks = subjects.reduce((sum, sub) => sum + sub.marks, 0);
  const percentage = (totalMarks / 600) * 100;
  const grade =
    percentage >= 90
      ? 'A+'
      : percentage >= 75
      ? 'A'
      : percentage >= 60
      ? 'B'
      : percentage >= 45
      ? 'C'
      : percentage >= 33
      ? 'D'
      : 'F';
  const status = percentage >= 33 ? 'Pass' : 'Fail';

  return (
    <div className="MarksheetContainer">
      <div className="MarksheetContent">
        <div className="marksheet_head">
          <img src={SchoolLogo} alt="School Logo" className="school-logo" />
          <p>High Secondary School, Raipur, C.G</p>
        </div>

        <div className="MarksheetDetailsFinal">
          <h2>Student Marksheet</h2>

          <div className="student-info">
            <div className="info-column">
              <p><strong>Name:</strong> {studentName}</p>
              <p><strong>Class:</strong> {studentClass}</p>
              <p><strong>Roll No:</strong> {rollNo}</p>
            </div>
            <div className="info-column">
              <p><strong>Mother's Name:</strong> {motherName}</p>
              <p><strong>Father's Name:</strong> {fatherName}</p>
            </div>
          </div>

          <table className="marks-table">
            <thead>
              <tr>
                <th>Subject</th>
                <th>Marks Obtained</th>
              </tr>
            </thead>
            <tbody>
              {subjects.map((sub, index) => (
                <tr key={index}>
                  <td>{sub.name}</td>
                  <td>{sub.marks}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="result-summary">
            <p><strong>Total Marks:</strong> {totalMarks} / 600</p>
            <p><strong>Percentage:</strong> {percentage.toFixed(2)}%</p>
            <p><strong>Grade:</strong> {grade}</p>
            <p className={`status ${status === 'Pass' ? 'pass' : 'fail'}`}>
              <strong>Status:</strong> {status}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Marksheet;
