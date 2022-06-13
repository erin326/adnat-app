import ShiftCard from '../components/ShiftCard'
import {useState} from 'react';
import { useEffect } from 'react';



function Shifts({user}) {

    const [allShifts, setAllShifts] = useState([]);

    const hourlyRate = user.organization.hourly_rate;
    // console.log(hourlyRate);
    const [start, setStart] = useState('')
    const [finish, setFinish] = useState('')
    
    const [shiftDate, setShiftDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [finishTime, setFinishTime] = useState('');

    const [startAmPm, setStartAmPm] = useState('');
    const [finishAmPm, setFinishAmPm] = useState('');
    const [selectedAmPm, setSelectedAmPm] = useState(false)

    const [breakLength, setBreakLength] = useState('');
    const [hoursWorked, setHoursWorked] = useState('');
    const [shiftCost, setShiftCost] = useState('');

    const [errors, setErrors] = useState([])
    

    // console.log(user);

    useEffect(() => {
        fetch('/api/shifts')
        .then((r) => r.json())
        .then((data) => setAllShifts(data))

    },[])
    console.log(allShifts);

    // const shifts = allShifts.map((shift) =>(

    //     // const startDate = new Date(shift.start);
    //     // const finishDate = new Date(shift.finish);
    //     // console.log(startDate.getHours(), startDate.getMinutes(), startDate.getDate());
    //     // const cstStart = centralDateTime(startDate)
    //     // const cstFinish = centralDateTime(finishDate)
    //     <>
    //     <td>{centralDateTime(shift.start)}</td>
    //     <td>{centralDateTime(shift.finish)}</td>
    //     </>

    
    // // console.log(cstDate);

    //     // console.log(finishDate);
    // ))
    // const displayShifts = allShifts.map((shift) => (
    //     <ShiftCard key={shift.id} shift={shift} hoursWorked={hoursWorked} shiftCost={shiftCost} />
    // ))
 
    const test = new Date('2022-06-12T22:00:00.000Z');

    function diff_minutes(dt2, dt1, breakLength)  {
        let minutes; 
        if(breakLength) {
            minutes = (dt2 - dt1) / (1000 * 60) - breakLength
        } else{
            minutes = (dt2 - dt1) / (1000 * 60)
        }
        // console.log(minutes);
        // console.log(dt2, 'finish time');
        // console.log(dt1, 'start time');
        const mins = minutes % 60
        // console.log(mins);


        const hours = Math.floor(minutes / 60)
        // console.log(hours);
        // if (mins < 10 ) {
        //     setHoursWorked(`${hours}:0${mins}`)
        // } else{
        //     setHoursWorked(`${hours}:${mins}`)
        // }
        const minuteDecimal = Math.round(mins  * 100) / 60;
        setHoursWorked(parseFloat(`${hours}.${minuteDecimal}`))
        console.log(typeof(hoursWorked))
        // if(hoursWorked) {
        //     calculateShiftCost(hoursWorked, hourlyRate)

        // }


        // console.log(hoursWorked);
              // console.log(`${padTo2Digits(hours)}:${padTo2Digits(mins)}hiiiiii`);
    }


    // console.log(shiftCost);

    function calculateShiftCost(hoursWorked, hourlyRate) {
       const total =  hoursWorked * hourlyRate
        console.log(hoursWorked);
       setShiftCost(total)
        console.log(shiftCost);
        
    }

    function centralDateTime(date) {
        const string = date.toLocaleString('en-US', {
            timeZone: 'CST',
          })
          console.log(string);

    }
    function utc(date) {
        const string = date.toLocaleString('en-US', {
            timeZone: 'UTC',
          })
          console.log(string);

    }
    console.log(test)
    const tester = new Date(
        new Date("2021-01-01T22:00:00")
          .toLocaleString("en-US", {timeZone: "CST"})
      ).toISOString();
        // console.log(tester);


    function convertTime(timeObj) {
        if(startTime && finishTime) {

      
        const date = new Date(shiftDate).toISOString()

        const dateStr = date.slice(0, 10)

            if (startAmPm === 'pm' && startTime.length > 4 ) {
              
                // console.log(cstToUtc(time));
                const num = parseInt(startTime.slice(0,2)) +12
                console.log(num);
                console.log(shiftDate, startTime);
                
                const newNum = num.toString();
                const mins = startTime.slice(startTime.length - 2);
                const utcTimeStr = newNum.concat(`:${mins}`)
                // console.log(utcTimeStr);
                // const time = new Date(`${dateStr}T${utcTimeStr}:00`).getHours()
                const fullDate = new Date(`${dateStr}T${utcTimeStr}:00`).toISOString()
                // console.log(time, 'HI');
                // console.log(startTime);
                const time = new Date(fullDate)
                setStart(time)
                // startTime = utcTimeStr
            
            
                // console.log(cstToUtc(time));
            
            }else if (startAmPm === 'pm' && startTime.length <= 4) {
                setSelectedAmPm(true)

                const num = parseInt(startTime[0]) +12 
                const mins = startTime.slice(startTime.length - 2);
                const newNum = num.toString();
                const utcTimeStr = newNum.concat(`:${mins}`)
             
                // const time = new Date(`${dateStr}T${utcTimeStr}:00`).getTime()
            
                const fullDate = new Date(`${dateStr}T${utcTimeStr}:00`).toISOString()
                const time = new Date(fullDate)
                // console.log(time, 'time');
                
                // console.log(cstToUtc(time));
                setStart(time)
            }


         if (finishAmPm === 'pm' && finishTime.length > 4 ) {
            setSelectedAmPm(true)

        const num = parseInt(finishTime.slice(0,2)) +12
                console.log(num);
                
                const newNum = num.toString();
                const mins = finishTime.slice(finishTime.length - 2);
                const utcTimeStr = newNum.concat(`:${mins}`)
                // console.log(utcTimeStr);
                // const time = new Date(`${dateStr}T${utcTimeStr}:00`).getTime()
                const fullDate = new Date(`${dateStr}T${utcTimeStr}:00`).toISOString()
                const time = new Date(fullDate)
                // console.log(time);
                // console.log(finishTime);
                setFinish(time)
            //    console.log(finishTime);
            }else if (finishAmPm
                 === 'pm' && finishTime.length <= 4 ){
                    setSelectedAmPm(true)

                    //  console.log(finishTime);
                    const number = parseInt(finishTime[0]) +12 
                    const mins = finishTime.slice(finishTime.length - 2);

                    const newNumber = number.toString();
                    const utcFinish = newNumber.concat(`:${mins}`)
                    // console.log(utcFinish);
                 
                    // const time = new Date(`${dateStr}T${utcFinish}:00`).getTime()
                    // console.log(fullDate.getTime());
                const fullDate = new Date(`${dateStr}T${utcFinish}:00`).toISOString()
                const time = new Date(fullDate)
                // console.log('time',time)
                setFinish(time)
            }



        
         if (startAmPm === 'am' && startTime.length >4) {
      
            setSelectedAmPm(true)

            const fullDate = new Date(`${dateStr}T${startTime}:00`).toISOString()
            // const time = new Date(`${dateStr}T${startTime}:00`).getTime()
      
            const time = new Date(fullDate)
            setStart(time)
            // console.log(startTime);
         }else if ( startAmPm === 'am' && startTime.length <= 4){
            setSelectedAmPm(true)

            // const time = new Date(`${dateStr}T${startTime}:00`).getTime()
            
             const fullDate = new Date(`${dateStr}T0${startTime}:00`).toISOString()
             const time = new Date(fullDate)
      
             setStart(time)
         }

        

         if (finishAmPm === 'am' && finishTime.length >4) {
            setSelectedAmPm(true)

        
            // const time = new Date(`${dateStr}T${finishTime}:00`).getTime()  
            const fullDate = new Date(`${dateStr}T${finishTime}:00`).toISOString()
            const time = new Date(fullDate)
            setFinish(time)
         }else if (finishAmPm === 'am' && finishTime.length <= 4) {
            setSelectedAmPm(true)

            // const time = new Date(`${dateStr}T0${finishTime}:00`).getTime()
             const fullDate = new Date(`${dateStr}T0${finishTime}:00`).toISOString()
             const time = new Date(fullDate)
             console.log(time, 'time2');
             setFinish(time)
         }

        //  console.log(start);
        //  console.log(finish);


        //  if (start && finish) {
        //     diff_minutes(finish, start, breakLength);
        //     calculateShiftCost(hoursWorked, hourlyRate)
        //  }
        

        }
        


    }


    useEffect(() => {
        convertTime()
        // diff_minutes(finish, start, breakLength);
        // calculateShiftCost(hoursWorked, hourlyRate)
    },[startTime, finishTime, startAmPm,finishAmPm])

    useEffect(() => {

        diff_minutes(finish, start, breakLength);
        // calculateShiftCost(hoursWorked, hourlyRate)

    },[ start, finish, breakLength]);
    useEffect(() => {
        calculateShiftCost(hoursWorked, hourlyRate)


    },[hoursWorked])
    function createShift(e) {
        e.preventDefault()
        // diff_minutes(finish, start, breakLength);
        // calculateShiftCost(hoursWorked, hourlyRate)


        console.log(shiftCost);
        console.log(hoursWorked);
        

        if (start && finish) {
            // diff_minutes(finish, start, breakLength);
            // diff_minutes(finish, start, breakLength);
            // calculateShiftCost(hoursWorked, hourlyRate)
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
                    shift_cost: shiftCost
                })
            })
            
            .then((r) => {
                if(r.ok) {
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


        // console.log(start);
        // console.log(finish);

    } 
        const displayShifts = allShifts.map((shift) => (
        <ShiftCard key={shift.id} shift={shift} hoursWorked={shift.hours_worked} shiftCost={shift.shift_cost} />
    ))



    return(
        <div>
            <form type='submit'>
           
                <table>
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
                  
                    
                        {/* <tr>
                            <td>{user.username}</td>
                            <td>{shiftDate}</td>
                            <td>{startTime} {startAmPm}</td>
                            <td>{finishTime} {finishAmPm}</td>
                            <td>{breakLength}</td>
                            
                            <td>{hoursWorked}</td>
                            <td>{shiftCost}</td>
                        </tr> */}
                    </tbody>


                   
                </table>
                    date
                    <input 
                    type='text'
                    value={shiftDate}
                    onChange={(e) => setShiftDate(e.target.value)}
                    >
                    </input>
              
                    start time
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
                  
                     finish time
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

                    <input 
                    type='text'
                    value={breakLength}
                    onChange={(e) => setBreakLength(e.target.value)}
                    >
                    </input>
                   
                <button onClick={createShift}>Create Shift</button>
            
            </form>
            {errors ? errors.map((error) => (
                <li key={error}>{error}</li>
            )) : null}


        </div>
    )
}

export default Shifts;