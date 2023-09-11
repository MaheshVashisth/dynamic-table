import React, { useEffect, useState } from 'react'

function App() {
  const [data , setData] = useState([])
   
    useEffect(()=> {
    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(data => setData(data))
    .then(err => console.log(err));
  }, [])

  return (
    <>
    <div style = {{padding : "50px"}}>
      
      <table>
        <thead>
          <tr>
          <th>rollno</th>
          <th>firstname</th>
          <th>lastname</th>
          <th>class</th>
          <th>section</th>
          <th>percentage</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d,i)=>( 
          <tr key = {i}>
            <td>{d.Rollno}</td>
            <td>{d.Firstname}</td>
            <td>{d.Lastname}</td>
            <td>{d.class}</td>
            <td>{d.Section}</td>
            <td>{d.Percentage}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
    
      
    
  </>
  )}

export default App
