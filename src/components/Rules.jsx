import React from 'react'
import styled from 'styled-components'
const Rules = () => {
  return (
   <RulesContainer>
    <h2>How to play dice game</h2>
    <div className='text'>
        <p>Select any number</p>
        <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
        <p>if you get wrong guess then  2 point will be dedcuted</p>
    </div>
   </RulesContainer>
  )
}

export default Rules
const RulesContainer = styled.div`
width: 800px;
margin: 10px auto;
background-color: #fbf1f1;
padding: 20px 
.text{
    margin: 20px
}
`