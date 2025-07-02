// import React from 'react'
// import Header from './Components/Others/Header/Header'
// import Home from './Components/Others/Home/Home'
// import { BrowserRouter,Routes,Route } from 'react-router-dom'
// import Emergency from './Components/Others/Emergency/Emergency'
// import EmergencyCont from './Components/Others/Emergency/EmergencyCont'
// import TopHead from './Components/Others/Header/TopHead'

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//       <TopHead></TopHead>
//       <Header></Header>
// <Home></Home>
// <Emergency></Emergency>
// {/* <EmergencyCont></EmergencyCont> */}
//       </BrowserRouter>
//     </div>
//   )
// }

// export default App



// import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import EnterDetail from './Components/Marksheet/EnterDetail'
// import Marksheet from './Components/Marksheet/Marksheet'
// import { Table } from 'antd'

// function App() {
//   const datasource=[
//     {key:1,"name":"anjali","age":20}
// ]
// const columns=[
//   {
// title:"Name",
// dataIndex:"name",
// key:'name'
//   },
//   {
// title:"Age",
// dataIndex:"age",
// key:'age'
//   },

// ]
//   return (
//     <div>
//       <BrowserRouter >
//       <Routes>
//         <Route path='/' element={<EnterDetail/>}/>
//         <Route path='/Marksheet' element={<Marksheet/>}/>
//       </Routes>
//       </BrowserRouter>
//       {/* <Table dataSource={datasource} columns={columns}/> */}
//     </div>
//   )
// }

// export default App



import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EnterDetail from './Components/Marksheet/EnterDetail'
import Marksheet from './Components/Marksheet/Marksheet'

function App() {
  return (
    <div>
      <BrowserRouter basename="/MarksheetGenerator">
        <Routes>
          <Route path="/" element={<EnterDetail />} />
          <Route path="/Marksheet" element={<Marksheet />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
