import React from 'react';

function PropsExample() {
    return (
        <>
            <Student name="Prakash" age={20} rollNo={2500030145} /><hr></hr>
            <Student name="Ramesh" age={21} rollNo={2500030146} /><hr></hr>
            <Student name="Suresh" age={22} rollNo={2500030147} /> <hr></hr>
        </>
    );
}

function Student({ name, age, rollNo }) {
    return (
        <>
            <h2>Student Name: {name}</h2>
            <h2>Student Age: {age}</h2>
            <h2>Student Roll No: {rollNo}</h2>
        </>
    );
}   

export default PropsExample;