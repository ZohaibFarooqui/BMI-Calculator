import React,{useState} from 'react';

function Form(){
    const [weight,setWeight] = useState(0);
    const [height,setHeight] = useState(0);
    const [bmi,setBMI] = useState('');
    const [message,setMessage] = useState('');


    let calcBMI = (e) =>{ /*value of event*/
        e.preventDefault(); //so that the form doesn't changes rapidly
        if(weight===0 || height === 0)
        {
            alert("Please Enter a valid Weight and Height")
        }
        else{
            let bmi = (weight/(height * height)) * 703;
            setBMI(bmi.toFixed(1));

            if (bmi < 25)
            {
                setMessage('you are under weight');
            }
            else if (bmi > 25 && bmi >30)
            {
                setMessage('you are healthy');
            }
            else{
                setMessage('you are over weight')
            }
        }

    }


    //reload
    let reload = () =>{
        window.location.reload();
    }


    return (
        <div className = "container">
            <h1 className = 'title'>Calculate your BMI</h1>
            <form onSubmit={calcBMI}>
                <div className='firm'>
                    <label>Weight (lbs)</label>
                    <input 
                    type = "text" 
                    placeholder="Enter Weight in lbs" 
                    value={weight} 
                    onChange={(e) => setWeight(e.target.value)}/>
                    <label>Height (in)</label>
                    <input
                     type = "text" 
                     placeholder="Enter Height in in" 
                     value={height} 
                     onChange={(e) => setHeight(e.target.value)}/>
                </div>
                <div>
                    <button className = 'btn' type="submit">Submit</button>
                    <button className="btn btn-outline" onClick= {reload} type="submit">Reload</button>
                </div>
                <div className = "center">
                    <h3>Your BMI is: {bmi}</h3>
                    <p>{message}</p>
                </div>
            </form>
        </div>

    );
}

export default Form;