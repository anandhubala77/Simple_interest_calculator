
import { Button, TextField } from '@mui/material';
import { useState } from 'react';



function App() {
  const [principle, setPrinciple] = useState('');
  const [rate, setRate] = useState('');
  const [year, setYear] = useState('');
  const [intrest, setIntrest] = useState(0);

  const [isPrincipleValid, SetisPrincipleValid] = useState(true);
  const [isratevalid, Setisratevalid] = useState(true);
  const [isyearvalid, Setisyearvalid] = useState(true);


  const validate = (e) => {
    const input_field = e.target.name;
    const input_value = e.target.value;
    console.log(input_field, input_value);


    if (!!input_value.match(/^[0-9]*$/)) {
      console.log("true");

      if (input_field === 'principle_amount') {
        SetisPrincipleValid(true)
        setPrinciple(input_value)

      }
      else if (input_field === 'rate_intrest') {
        Setisratevalid(true)
        setRate(input_value)

      } else {
        Setisyearvalid(true);
        setYear(input_value)

      }


    } else {
      console.log("false");
      if (input_field === 'principle_amount') {
        SetisPrincipleValid(false)
        setPrinciple(input_value)

      } else if (input_field === 'rate_intrest') {
        Setisratevalid(false)
        setRate(input_value)

      } else {
        Setisyearvalid(false);
        setYear(input_value)

      }


    }

  }
  const calculate = (e) => {
    e.preventDefault();
    if (principle === '' || rate === '' || year === '') {
      alert("enter number")

    } else {
      const simpleInterest = (principle * rate * year) / 100;
      setIntrest(simpleInterest)
    }



  }
  const resetFields = (e) => {
    e.preventDefault();
    setPrinciple("");
    setRate("");
    setYear("");
    setIntrest(0);

  }



  return (
    <>

      <div style={{ background: 'black', height: '100vh' }} className='d-flex justify-content-center align-items-center'>
        <div style={{ background: 'white', width: '550px', }} className='rounded p-5'>
          <div className='d-flex justify-content-center align-items-center flex-column '>
            <h3>Simple intrest Application</h3>
            <p>calculate our simple intrest easly</p>
          </div>

          <div style={{ background: 'orange', height: '150px' }}
            className='d-flex justify-content-center align-items-center flex-column mt-2 rounded shadow'
          >
            <h2>₹{intrest}</h2>
            <p>Total simple intrest</p>
          </div>
          <form action="">
            <div>
              <TextField id="outlined-basic" label="principle" variant="outlined" className='w-100 mb-2 mt-2' name='principle_amount' value={principle}
                onChange={(e) => validate(e)} />{
                !isPrincipleValid &&
                <p style={{ color: 'red' }}>invalid input</p>
              }
            </div>
            <div>
              <TextField id="outlined-basic" label="rate of intrest" variant="outlined" className='w-100 mb-2' name='rate_intrest' value={rate}
                onChange={(e) => validate(e)} />{
                !isratevalid &&
                <p style={{ color: 'red' }}>invalid input</p>
              }
            </div>
            <div>
              <TextField id="outlined-basic" label="No of years" variant="outlined" className='w-100' name='number_years' value={year}
                onChange={(e) => validate(e)} />{
                !isyearvalid &&
                <p style={{ color: 'red' }}>invalid input</p>

              }
            </div>
            <div className='d-flex justify-content-between mb-3 mt-2'>

              <Button variant="contained" color='success' style={{ width: '175px', padding: '10px' }} type='submit'

                disabled={!isPrincipleValid || !isratevalid || !isyearvalid} onClick={calculate}>CALCULATE</Button>

              <Button variant="outlined" style={{ width: '175px', padding: '10px' }} type='submit' onClick={resetFields}
              >RESET</Button></div>

          </form>
        </div>
      </div>

    </>
  )
}

export default App
