import React, { useState, useEffect } from 'react';
import axios from 'axios';



const Characters = ()  => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const key = process.env.REACT_APP_API_KEY;
    axios.get(`https://www.potterapi.com/v1/characters/?key=${key}`)
      .then(result => {
        console.log(result)

        const newCharacters = result.data[55].name
        console.log(newCharacters);
          setCharacters(newCharacters);
      });
    }, []);
  
  
    return (
    <div className="App">
     Potter characters
       <br />
       {characters}
    </div>
  );
}


export default Characters;