import { useState } from "react";
function Calc() {
    let [num1, setNum1] = useState(0);
    let [num2, setNum2] = useState(0);
    let [result, setResult] = useState(0);
    const add = () => {
        setResult(num1 + num2);
    };
    const substract = () => {
        setResult(num1 - num2)
    }
    const multiply = () => {
        setResult(num1 * num2)
    }
    const divide = () => {
        if(num2 === 0) {
            alert("Cannot divide by zero");
            return;
        }
        setResult(num1 / num2)
    }
    const handleNum1 = (e) => {
        setNum1(Number(e.target.value));
    }
    const handleNum2 = (e) => {
        setNum2(Number(e.target.value));
    }

    return (
        <>
            <div style={{ display: 'flex', flexDirection:"column", textAlign: "center" }}>
                <h1>Calculator</h1>
                <input type="text" value={num1} onChange={handleNum1} />
                <input type="text" value={num2} onChange={handleNum2} />
                <div style={{ display: 'flex', justifyContent: "center", gap: "10px", marginTop: "10px" }}>
                    <button onClick={add}>Add</button>
                    <button onClick={substract}>Subtract</button>
                    <button onClick={multiply}>Multiply</button>
                    <button onClick={divide}>Divide</button>
                </div>
                <h2 style={{color:'red'}}>Result: {result}</h2>  
            </div>
        </>
    )
};

export default Calc;