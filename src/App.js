import './App.css';
import { useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function App() {
	const [calc,setCalc] = useState("");
	const [memoryVal,setMemoryVal] = useState(0);
	const [historyList, setHistoryList] = useState([]);
	const [showHistory, setShowHistory] = useState(false);
	const [showAdvanced, setShowAdvanced] = useState(false);
 	const ops = ['/','*','+','-','.','%','^']

	 document.onkeydown = function(evt) {
		const valid = []
		for(let i = 0; i < 10; i++)
			{valid.push(i.toString())}
		if(valid.includes(evt.key) || ops.includes(evt.key))
		{
			updateCalc(evt.key)
		}
		else if(evt.key === "=")
		{
			calculate()
		}
		else if(evt.key == "Backspace")
		{
			deleteValue()
		}
	};
	  

	const updateCalc = value => {
		console.log("updateCalc")
		if(value === '-' && calc==='' || value === '-' && ops.includes(calc.slice(-1)))
		{
			//pass
		}
		else if(
			value === ")" && calc === '' ||
			ops.includes(value) && calc === '' ||
			ops.includes(value) && ops.includes(calc.slice(-1))
		)
		{return}
		if (calc != "0")
			{setCalc(calc + value)}
		else
			{setCalc(value)}
	}

	const memoryAdd = () => {
		console.log("memoryAdd")
		setMemoryVal(memoryVal + eval(calc))
	}
	const memorySub = () => {
		console.log("memorySub")
		setMemoryVal(memoryVal - eval(calc))
	}
	const memoryClear = () => {
		console.log("memoryCall")
		setMemoryVal(0)
		memoryRecall()
	}
	const memoryRecall = () => {
		console.log("memoryRecall")
		setCalc(memoryVal.toString())
	}

	const addHistory = value => {
		console.log("addHistory")
		setHistoryList((historyList) => [
        ...historyList,
        {
            value
        },
    ]);
	}
	const historyRecall = () => {
		console.log("historyRecall")
		if(historyList.length===0)
			return
		setShowHistory(!showHistory)
	}
	
	const deleteValue = () => {
		console.log("deleteValue")
		if (calc === '')
		{
			return;
		}
		const value = calc.slice(0,-1);
		setCalc(value)
	}
	const clearValue = () => {
		console.log("clearValue")
		setCalc("")
	}
	const calculateRoot = value => {
		console.log("calculateRoot")
		calculate()
		setCalc(eval(calc**0.5).toString())
	}	
	const calculate = () => {
		console.log("calculate")
		let temp = calc
		try {
			eval(temp)
		} catch (error) {
		temp = calc.replace(/\+0+/g,"+")
		temp = temp.replace(/\-0+/g,"-")
		temp = temp.replace(/\/0+/g,"/")
		temp = temp.replace(/\*0+/g,"*")
		temp = temp.replace(/\^0+/g,"^")
		temp = temp.replace(/\%0+/g,"%")
		}
		temp = temp.replace(/\^/g,"**")
		if (calc !== eval(temp).toString())
		{
			addHistory(calc + " = " + eval(temp).toString())
		}
		
		console.log("before setcalc",temp)
		setCalc(eval(temp).toString());	
	}

	const createNumberButtons = () => {
		const digits = [];
		for (let i = 1; i<10;i++)
		{
			digits.push(<button onClick={() => updateCalc(i.toString())} key={i}>{i}</button>)
		}
		return digits;
	}

	const handleArrowClick = () => {
		setShowAdvanced(!showAdvanced)
	}

  return (
	<div className='main'>
		<div className='back-calc'>
		<div className='calc'>
			{showHistory ? 
			<div className='history-panel'>
			
			<ul>
                {historyList.map((element, idx) => (
                    <li key={idx}>
                        {element.value}
                    </li>
                ))}
            </ul> </div>: " "}
		
		
			<div className='panel'>
				{calc === "" ? "0" : calc}
			</div>
			<div className='panel-buttons'>
				<button onClick={deleteValue}>DEL</button>
				<button onClick={clearValue}>C</button>
				<button onClick={historyRecall}>H</button>
			</div>
			<div className='operators'>
				<button onClick={() => updateCalc('/')}>/</button>
				<button onClick={() => updateCalc('*')}>*</button>
				<button onClick={() => updateCalc('+')}>+</button>
				<button onClick={() => updateCalc('-')}>-</button>
			</div>
			<div className='lower'>
			{showAdvanced?
			<div className='advanced'>
			<button className='arrow' onClick={handleArrowClick}> <ArrowForwardIosIcon/></button>
			<div className='m-operators'>
			<button onClick={() => updateCalc('(')}>(</button>
				<button onClick={() => updateCalc(')')}>)</button>
				<button onClick={() => updateCalc('%')}>%</button>
				<button onClick={() => updateCalc('^')}>^</button>
				<button onClick={memoryAdd}>M+</button>
				<button onClick={memorySub}>M-</button>
				<button onClick={memoryRecall}>MR</button>
				<button onClick={memoryClear}>MC</button>

				<button onClick={calculateRoot}>√</button>
			</div>
			</div>:<button className='arrow' onClick={handleArrowClick}> <ArrowBackIosNewIcon/></button>
			}
			<div className='numbers'>
				{createNumberButtons()}
				<button onClick={() => updateCalc('0')}>0</button>
				<button onClick={() => updateCalc('.')}>.</button>
				<button onClick={calculate}>=</button>
			</div>
			</div>
		</div>
	</div>
	</div>
  );
}

export default App;
