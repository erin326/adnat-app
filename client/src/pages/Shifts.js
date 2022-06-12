import { min } from 'moment';
import {useState} from 'react';
import { useEffect } from 'react';



function Shifts({user}) {

    const hourlyRate = user.organization.hourly_rate;
    console.log(hourlyRate);
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
 
    const test = new Date('2022-06-12T22:00:00.000Z');
    // 2022-06-12T20:00:00.000Z
    // '2022-06-12T16:00:00.000Z'

    function diff_minutes(dt2, dt1, breakLength)  {
        let minutes; 
        if(breakLength) {
            minutes = (dt2 - dt1) / (1000 * 60) - breakLength
        } else{
            minutes = (dt2 - dt1) / (1000 * 60)
        }
        console.log(minutes);
        console.log(dt2, 'finish time');
        console.log(dt1, 'start time');
        const mins = minutes % 60
        console.log(mins);


        const hours = Math.floor(minutes / 60)
        console.log(hours);
        // if (mins < 10 ) {
        //     setHoursWorked(`${hours}:0${mins}`)
        // } else{
        //     setHoursWorked(`${hours}:${mins}`)
        // }
        const minuteDecimal = Math.round(mins  * 100) / 60;
        setHoursWorked(`${hours}.${minuteDecimal}`)

        console.log(hoursWorked);
              // console.log(`${padTo2Digits(hours)}:${padTo2Digits(mins)}hiiiiii`);
    }
    let currentTime = new Date();
    console.log(currentTime);
let expireTime = new Date('2022-06-12T03:18:33.000Z');
console.log(expireTime);
let minutes = (expireTime - currentTime) / (1000 * 60);
const rmins = minutes % 60
const hours = Math.floor(rmins / 60)
console.log(hours, '&', rmins);

// console.log(`${padTo2Digits(hours)}:${padTo2Digits(minutes)}`);
// console.log(minutes);

 
//   let diff =(dt2 - dt1) / 1000;
//   const mins = diff /= 60;
//   const hours = Math.floor(diff / 60);
//   return `${padTo2Digits(hours)}:${padTo2Digits(mins)}`;

//   return Math.abs(Math.round(diff));
  
//  }

    function calculateShiftCost(hoursWorked, hourlyRate) {
       const total =  hoursWorked * hourlyRate
        
       setShiftCost(total)
        console.log(shiftCost);
        
    }
    //  function padTo2Digits(num) {
    //     return num.toString().padStart(2, '0');
    //   }

// const dt1 = new Date(2014,10,2);
// const dt2 = new Date(2014,10,3);
// console.log(diff_minutes(dt1, dt2));
    function cstToUtc(date) {
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

    useEffect(() => {
        fetch('/api/shifts')
        .then((r) => r.json())
        .then((data) => console.log(data))

    },[])
    
    // function calculateHours(start, finish) {
    //     const f = finish.split('T')
    //     const s = start.split('T')
    //     // const hours = finish - start
    //     // console.log(hours);
    //     console.log(f, s);
    // }

    function convertTime(timeObj) {
        if(startTime && finishTime) {

      
        const date = new Date(shiftDate).toISOString()

        const dateStr = date.slice(0, 10)

            if (startAmPm === 'pm' && startTime.length > 4 ) {
              
                setSelectedAmPm(true)
                // console.log(cstToUtc(time));
                const num = parseInt(startTime.slice(0,2)) +12
                console.log(num);
                
                const newNum = num.toString();
                const mins = startTime.slice(startTime.length - 2);
                const utcTimeStr = newNum.concat(`:${mins}`)
                console.log(utcTimeStr);
                // const time = new Date(`${dateStr}T${utcTimeStr}:00`).getHours()
                const fullDate = new Date(`${dateStr}T${utcTimeStr}:00`).toISOString()
                // console.log(time, 'HI');
                console.log(startTime);
                const time = new Date(fullDate)
                setStart(time)
                // startTime = utcTimeStr
            
            
                console.log(cstToUtc(time));
            
            }else if (startAmPm === 'pm' && startTime.length <= 4) {
                setSelectedAmPm(true)

                const num = parseInt(startTime[0]) +12 
                const mins = startTime.slice(startTime.length - 2);
                const newNum = num.toString();
                const utcTimeStr = newNum.concat(`:${mins}`)
             
                // const time = new Date(`${dateStr}T${utcTimeStr}:00`).getTime()
            
                const fullDate = new Date(`${dateStr}T${utcTimeStr}:00`).toISOString()
                const time = new Date(fullDate)
                console.log(time, 'time');
                
                // console.log(cstToUtc(time));
                setStart(time)
            }

        // } 
        // if (finishAmPm === 'pm' ) {
        //    const num =  parseInt(finishTime[0]) +12
        //    console.log(typeof(num), num);
        //    const newNum = num.toString();
        //    const utcTimeStr = newNum.concat(':00')
        //    finishTime = utcTimeStr
        // }

         if (finishAmPm === 'pm' && finishTime.length > 4 ) {
            setSelectedAmPm(true)

        const num = parseInt(finishTime.slice(0,2)) +12
                console.log(num);
                
                const newNum = num.toString();
                const mins = finishTime.slice(finishTime.length - 2);
                const utcTimeStr = newNum.concat(`:${mins}`)
                console.log(utcTimeStr);
                // const time = new Date(`${dateStr}T${utcTimeStr}:00`).getTime()
                const fullDate = new Date(`${dateStr}T${utcTimeStr}:00`).toISOString()
                const time = new Date(fullDate)
                console.log(time);
                console.log(finishTime);
                setFinish(time)
            //    console.log(finishTime);
            }else if (finishAmPm
                 === 'pm' && finishTime.length <= 4 ){
                    setSelectedAmPm(true)

                     console.log(finishTime);
                    const number = parseInt(finishTime[0]) +12 
                    const mins = finishTime.slice(finishTime.length - 2);

                    const newNumber = number.toString();
                    const utcFinish = newNumber.concat(`:${mins}`)
                    console.log(utcFinish);
                 
                    // const time = new Date(`${dateStr}T${utcFinish}:00`).getTime()
                    // console.log(fullDate.getTime());
                const fullDate = new Date(`${dateStr}T${utcFinish}:00`).toISOString()
                const time = new Date(fullDate)
                console.log('time',time)
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

        //  if (start && finish) {
        //     diff_minutes(finish, start, breakLength);
        //     calculateShiftCost(hoursWorked, hourlyRate)
        //  }
        //  diff_minutes(finish, start, breakLength);
        //  calculateShiftCost(hoursWorked, hourlyRate)
         console.log(start);
         console.log(finish);
        //  if (start && finish) {
        //      convertTime()
        //  }

         if (start && finish) {
            diff_minutes(finish, start, breakLength);
            calculateShiftCost(hoursWorked, hourlyRate)
         }
        
        //  else {


        //  }

        //  if (start && finish) {
        //     diff_minutes(finish, start, breakLength);
        //     calculateShiftCost(hoursWorked, hourlyRate)
        //     convertTime()
        //  }

        //  if (start && finish) {
        //     diff_minutes(finish, start, breakLength);
        //     calculateShiftCost(hoursWorked, hourlyRate)
        //  }

        
   
        // if (startAmPm === 'am' && timeObj.length > 4) {
        //     const time = new Date(`${dateStr}T${timeObj}:00`).toISOString()
        //     console.log('time',time);
        //     console.log(timeObj);
        //      console.log('hi');

        // }
        // else if (finishAmPm === 'am') {
        //     const time = new Date(`${dateStr}T0${timeObj}:00`).toISOString()
        //     console.log('time',time);
        //     console.log('hey');
        // }
           }
    }

  
    // const formatAMPM = (date) => {
    //     // const date = new Date(shiftDate).toISOString()


    //     // const t = date.slice(0, 10)
    //     // const time = new Date(`${t}T${timeObj}:00`).toISOString()
    //     // console.log('time',time);

    //     let hours = date.getHours();
    //     let minutes = date.getMinutes();    
    //     const ampm = hours >= 12 ? 'pm' : 'am';
      
    //     hours %= 12;
    //     hours = hours || 12;    
    //     minutes = minutes < 10 ? `0${minutes}` : minutes;
      
    //     const strTime = `${hours}:${minutes} ${ampm}`;
      
    //     return strTime;
    //   };
      
    //   console.log(formatAMPM(user.shifts.start));

    // if (start && finish) {
    //     convertTime()
    // }
    useEffect(() => {
        convertTime()
        // diff_minutes(finish, start, breakLength);
        // calculateShiftCost(hoursWorked, hourlyRate)
    },[startTime, finishTime, startAmPm,finishAmPm])

    useEffect(() => {

        diff_minutes(finish, start, breakLength);
        // calculateShiftCost(hoursWorked, hourlyRate)

    },[ start, finish]);
    useEffect(() => {
        calculateShiftCost(hoursWorked, hourlyRate)


    },[hoursWorked])
    function createShift(e) {
        e.preventDefault()
        // diff_minutes(finish, start, breakLength);
        // diff_minutes(finish, start, breakLength);
        // calculateShiftCost(hoursWorked, hourlyRate)
        // convertTime()
        //  diff_minutes(finish, start, breakLength);
        // calculateShiftCost(hoursWorked, hourlyRate)

        // cstToUtc(startTime)
        // cstToUtc(finishTime)
        // diff_minutes(finish, start, breakLength);
        // calculateShiftCost(hoursWorked, hourlyRate)
        // convertTime()

        // convertTime()
        if (start && finish) {
            diff_minutes(finish, start, breakLength);

            console.log('hi');
            // diff_minutes(finish, start, breakLength);
            // calculateShiftCost(hoursWorked, hourlyRate)
            // convertTime()
            fetch('/api/shifts', {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    start,
                    finish,
                    break_length: breakLength
                })
            })
            
            .then((r) => {
                if(r.ok) {
                  console.log(r);
                }else {
                    r.json().then((error)=> {
                        setErrors(error.errors)
                    });
                }
            });
         }


        console.log(start);
        console.log(finish);
        // diff_minutes(finish, start, breakLength);
        // calculateShiftCost(hoursWorked, hourlyRate)
        
        // console.log(start, finish, 'THIS');
        // calculateHours(start, finish)
        // calculateHours(start.getHours(), finish.getHours())
        // const date = new Date()
        // const start =  convertTime(startTime);
        // const finish = convertTime(finishTime);
    //     // console.log(formatAMPM(user.shifts.start))
    //   const d = new Date()
    //   console.log(d);

      // console.log(start);
        // console.log(finish);
        // fetch('/api/shifts', {
        //     method: "POST",
        //     headers: {
        //         "Content-Type" : "application/json"
        //     },
        //     body: JSON.stringify({
        //         start,
        //         finish,
        //         break_length: breakLength
        //     })
        // })
     



        // const d = new Date();
        // const hh = d.getHours()
        // const m = d.getMinutes();
        // const s = d.getSeconds();
        // console.log(d);
        // console.log('hours', hh);
        // console.log('mins', m);
        // console.log('sec', s);
      
        // console.log(
        //     time.toLocaleString('en-US', { hour: 'numeric', hour12: true })
        // );


    } 



    //   alert(formatDate(shiftDate));

    // const d = new Date().toDateString()
    // console.log(d);

    // console.log(d);
    // console.log(user.shifts);

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
                        <tr>
                            <td>{user.username}</td>
                            <td>{shiftDate}</td>
                            <td>{startTime} {startAmPm}</td>
                            <td>{finishTime} {finishAmPm}</td>
                            <td>{breakLength}</td>
                            
                            <td>{hoursWorked}</td>
                            <td>{shiftCost}</td>
                        </tr>
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
                    {/* <input 
                    type='text'
                    value={shiftCost}
                    onChange={(e) => setShiftCost(e.target.value)}
                    >
                    </input> */}
                  
                    {/* <input 
                    type='text'
                    value={finishTime}
                    onChange={(e) => setFinishTime(e.target.value)}
                    >
                    </input>
                      <input 
                    type='text'
                    value={breakLength}
                    onChange={(e) => setBreakLength(e.target.value)}
                    >
                    </input>
                      <input 
                    type='text'
                    value={hoursWorked}
                    onChange={(e) => setHoursWorked(e.target.value)}
                    >
                    </input>
                    </input>
                    <input 
                    type='text'
                    value={shiftCost}
                    onChange={(e) => setShiftCost(e.target.value)}
                    >
                    </input>  */}
                <button onClick={createShift}>Create Shift</button>
            
            </form>
            {errors ? errors.map((error) => (
                <li key={error}>{error}</li>
            )) : null}


        </div>
    )
}

export default Shifts;