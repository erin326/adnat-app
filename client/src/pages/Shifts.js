import ShiftCard from '../components/ShiftCard'
import {useState} from 'react';
import { useEffect } from 'react';

function Shifts({user}) {

    const [allShifts, setAllShifts] = useState([]);
    const [organization, setOrganization] = useState({});

    const [start, setStart] = useState('')
    const [finish, setFinish] = useState('')
    
    const [shiftDate, setShiftDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [finishTime, setFinishTime] = useState('');

    const [startAmPm, setStartAmPm] = useState('');
    const [finishAmPm, setFinishAmPm] = useState('');
    const [breakLength, setBreakLength] = useState('');
    const [hoursWorked, setHoursWorked] = useState('');
    const [shiftCost, setShiftCost] = useState('');
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        fetch(`/api/organizations/${user.organization.id}`)
        .then((r) => r.json())
        .then((data) => {
            setOrganization(data)

        })

    },[]);
  

    const hourlyRate = organization.hourly_rate

    useEffect(() => {
        fetch('/api/shifts')
        .then((r) => r.json())
        .then((data) => setAllShifts(data))
    },[])
   
    function diff_minutes(dt2, dt1, breakLength)  {
       
  
        let minutes; 
        if(breakLength) {
            minutes = (dt2 - dt1) / (1000 * 60) - breakLength
        } else{
            minutes = (dt2 - dt1) / (1000 * 60)
        }
        const mins = minutes % 60
        const hours = Math.floor(minutes / 60)
        const minuteDecimal = Math.round(mins  * 100) / 60;
        const hournum = parseFloat(hours)
        const minNum = parseFloat(minuteDecimal)
        setHoursWorked(parseFloat(`${hournum}.${minNum}`))

        if(hoursWorked) {
            calculateShiftCost(hoursWorked, hourlyRate)

        }
    }

    function calculateShiftCost(hoursWorked, hourlyRate) {
       const total =  hoursWorked * hourlyRate
       setShiftCost(total)
    }


    function convertTime() {
        if(startTime && finishTime && finishAmPm &&startAmPm) {
            const startFullDate = new Date(`${shiftDate}, ${startTime} ${startAmPm}`).toLocaleString("en-US", {timeZone: "CST"})
            const finishFullDate = new Date(`${shiftDate}, ${finishTime} ${finishAmPm}`).toLocaleString("en-US", {timeZone: "CST"})
            const startStr = new Date(startFullDate)
            const finishStr = new Date(finishFullDate)

            setStart(startStr)
            setFinish(finishStr)
        } else{ 
            setStart('')
            setFinish('')

        }

        if(start && finish) {
            diff_minutes(finish, start, breakLength)

        }

    }

    useEffect(() => {
        convertTime()

    },[ finish, start, breakLength])


    function createShift(e) {
    
        e.preventDefault()

            fetch('/api/shifts', {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    start,
                    finish,
                    break_length: breakLength,
                    hours_worked: hoursWorked,
                    shift_cost: shiftCost,
                    organization_id: user.organization.id
                })
            })
            
            .then((r) => {
                if(r.ok) {
                    setShiftDate('');
                    setStartTime('');
                    setFinishTime('');
                    setBreakLength(''); 
                  r.json()
                  .then((shift) => {
                      const updatedShiftsList = [...allShifts, shift]
                      setAllShifts(updatedShiftsList)
                  })
                }else {
                    r.json().then((error)=> {
                        setErrors(error.errors)
                    });
                }
            });
        
   
    } 
        const displayShifts = allShifts.map((shift) => (
        <ShiftCard key={shift.id} shift={shift} hoursWorked={shift.hours_worked} shiftCost={shift.shift_cost} />
    ))

    return(
        <div>
            <form type='submit'>
                <table >
                   <thead>
                       <tr>
                            <th>Employee name</th>
                            <th>Shift date</th>
                            <th>Start time</th>
                            <th>Finish time</th>
                            <th>Break length (minutes)</th>
                            <th>Hours worked</th>
                            <th>Shift cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayShifts}
                    </tbody> 
                </table>
                <div className='table-form'>
                    Date
                    <input 
                    type='text'
                    value={shiftDate}
                    onChange={(e) => setShiftDate(e.target.value)}
                    >
                    </input>
              
                    Start time
                    <input 
                    type='text'
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    >
                     </input>
                     <select value={startAmPm} onChange={(e) => setStartAmPm(e.target.value)}>
                            <option value="" defaultValue disabled hidden>AM/PM</option>
                            <option 
                            value='am' >am</option>
                            <option value='pm'>pm</option>
                        </select>
                     Finish time
                     <input 
                    type='text'
                    value={finishTime} 
                    onChange={(e) => setFinishTime(e.target.value)}
                    >
                     </input>
                     <select value={finishAmPm} onChange={(e) => setFinishAmPm(e.target.value)}>
                            <option value="" defaultValue disabled hidden>AM/PM</option>
                            <option value='am'>am</option>
                            <option value='pm' >pm</option>
                        </select>
                    Break length
                    <input 
                    type='text'
                    value={breakLength}
                    onChange={(e) => setBreakLength(e.target.value)}
                    >
                    </input>
                <button onClick={createShift}>Create Shift</button>
                </div>
            </form>
            {errors ? errors.map((error) => (
                <li key={error}>{error}</li>
            )) : null}

        </div>
    )
}

export default Shifts;