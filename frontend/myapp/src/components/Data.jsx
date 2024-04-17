import React,{ useEffect, useState } from 'react'
import axios from 'axios';



export default function Data() {
    const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001/getdata').then((response) => {
            console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
 

  
  return (
    <div>
        <h1 className='s1'>Sample Data</h1>
        <div className='justify-content-center align-items-center'>
        <div>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">ts</th>
      <th scope="col">machine_status</th>
      <th scope="col">vibration</th>
    </tr>
  </thead>
  <tbody>
  { data && data.map((values)=>(
                 <tr>
                <th>{values.ts}</th>
                <th>{values.machine_status}</th>
                <th>{values.vibration}</th>
            
            </tr>
        ))}
    
  </tbody>
</table>
</div>
</div>
    </div>
  )
}
