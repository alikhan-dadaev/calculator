import React, {useState} from 'react';

function App(props) {

    const [number, setNumber] = useState()
    const [numberTwo, setNumberTwo] = useState()
    const [result, setResult] = useState()


    const numb = parseInt(number)
    const numbTwo = parseInt(numberTwo)



    const handleChange = (e) => {
        setNumber(e.target.value)
    }
    const handleChangeTwo = (e) => {
        setNumberTwo(e.target.value)
    }
    const handlePlus = () => {
        setResult (
           parseInt(numb + numbTwo)
        )
    }
    const handleMinus = () => {
        setResult (
            parseInt(numb - numbTwo)
        )
    }
    const handleMultiply = () => {
        setResult (
            parseInt(numb * numbTwo)
        )
    }
    const handleDegree = () => {
        setResult (
            parseInt(numb / numbTwo)
        )
    }



    return (
        <div className="app">
            <div className="main">
                <div className="input">
                    <input
                        placeholder="add number"
                        type="number"
                        value={number}
                        onChange={handleChange}
                    />
                    <input
                        placeholder="add number"
                        type="number"
                        value={numberTwo}
                        onChange={handleChangeTwo}
                    />
                </div>
                <div className="operators">
                    <button onClick={handlePlus}>+</button>
                    <button onClick={handleMinus}>-</button>
                    <button onClick={handleMultiply}>x</button>
                    <button onClick={handleDegree}>/</button>
                </div>
                <div className="result">Result: {result}   </div>
            </div>
        </div>
    );
}

export default App;