import React, { useState, useEffect } from 'react';


function DataDisplay() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch and parse the JSON data
    fetch('./dummy.json') // Adjust the path to your JSON file
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData.dummy);
      });
  }, []);

  return (
    <div style={{ background: 'black' }}>
      <center>
        <table style={{ background: 'black', color: 'white', border: '1px solid white' }}>
          <caption style={{ fontSize: '30px', color: 'white' }}>dummydata</caption>
          <thead>
            <tr>
              <th style={{ border: '1px solid white' }}>Sno</th>
              <th style={{ border: '1px solid white' }}>Profile</th>
              <th style={{ border: '1px solid white' }}>First Name</th>
              <th style={{ border: '1px solid white' }}>Last Name</th>
              <th style={{ border: '1px solid white' }}>Gender</th>
              <th style={{ border: '1px solid white' }}>Email</th>
              <th style={{ border: '1px solid white' }}>Username</th>
              <th style={{ border: '1px solid white' }}>Domain</th>
              <th style={{ border: '1px solid white' }}>IP</th>
              <th style={{ border: '1px solid white' }}>University</th>
            </tr>
          </thead>
          <tbody>
            {data.map((dummy) => (
              <tr key={dummy.Sno}>
                <td style={{ padding: '10px' }}>{dummy.Sno}</td>
                <td style={{ padding: '10px' }}>{dummy.profile}</td>
                <td style={{ padding: '10px' }}>{dummy.first_name}</td>
                <td style={{ padding: '10px' }}>{dummy.last_name}</td>
                <td style={{ padding: '10px' }}>{dummy.gender}</td>
                <td style={{ padding: '10px' }}>{dummy.email}</td>
                <td style={{ padding: '10px' }}>{dummy.username}</td>
                <td style={{ padding: '10px' }}>{dummy.domain}</td>
                <td style={{ padding: '10px' }}>{dummy.IP}</td>
                <td style={{ padding: '10px' }}>{dummy.university}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>
    </div>
  );
}

export default DataDisplay;