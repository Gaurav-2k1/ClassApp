import React from 'react'
import styled from 'styled-components'

const Clock = () => {
    return (
        <ClockBlock>
            <h1>MONDAY</h1>
            <DateBlock>
                <h2>DD</h2>
                <h2>MM</h2>
                <h2>YY</h2>
            </DateBlock>
            <RealtimeClock>
                00:00:00
            </RealtimeClock>
        </ClockBlock>)
};



const ClockBlock = styled.div`
    position:absolute;
    right:10px;
    height:50%;
    width:30%;
top: -19px;

background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), rgba(102, 173, 122, 0.2);
border: 1px solid #686464;
box-shadow: 0px 30px 30px rgba(0, 0, 0, 0.25);
border-radius: 5px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
h1{
    font-size:2.5rem;
    color:white;
    margin:1rem 0;
    font-weight:bold;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
`;
const DateBlock = styled.div`
    margin:10px 0;
    display:flex;
    flex-direction:row;

    h2{
        background:#D9D9D9;
        padding:10px;
        margin:0 5px;
    }
`;
const RealtimeClock = styled.h1`
    margin-top:1rem;
    color: #FFFFFF;

text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

`

export default Clock