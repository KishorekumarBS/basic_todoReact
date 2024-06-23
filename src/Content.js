import React from 'react'

const Content = () => {
    function changefunc(){
        const names = ["Genius", "Generous", "Idiot"];
        const int = Math.floor(Math.random()*3);
        return names[int];
    }
  return (
    <p>Scooby is {changefunc()}</p>
  )
}

export default Content