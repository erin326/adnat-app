import {useState} from 'react';
import { useEffect } from 'react';



function Shifts({user}) {


    const [start, setStart] = useState('')
    const [finish, setFinish] = useState('')
    
    const [shiftDate, setShiftDate] = useState('');
    let [startTime, setStartTime] = useState('');
    let [finishTime, setFinishTime] = useState('');

    const [startAmPm, setStartAmPm] = useState('');
    const [finishAmPm, setFinishAmPm] = useState('');

    const [breakLength, setBreakLength] = useState('');
    const [hoursWorked, setHoursWorked] = useState('');
    const [shiftCost, setShiftCost] = useState('');

  
    function cstToUtc(date) {
        const string = date.toLocaleString('en-US', {
            timeZone: 'CST',
          })
          console.log(string);

    }

    useEffect(() => {
        fetch('/api/shifts')
        .then((r) => r.json())
        .then((data) => console.log(data))

    },[])

    function convertTime(timeObj) {
        const date = new Date(shiftDate).toISOString()

        const dateStr = date.slice(0, 10)

        if( startAmPm === 'pm' ) {
           const num = parseInt(startTime[0]) + 12
           const newNum = num.toString();
           const utcTimeStr = newNum.concat(':00')
            console.log(utcTimeStr);
            startTime = utcTimeStr
            if (startTime.length > 4 ) {
            
                const time = new Date(`${dateStr}T${timeObj}:00`).toISOString()
                console.log('time',time);
                // console.log(timeObj);
            
            }else {
                 const time = new Date(`${dateStr}T0${timeObj}:00`).toISOString()
                console.log('time',time);
            }

        } 
        if (finishAmPm === 'pm' ) {
           const num =  parseInt(finishTime[0]) + 12
           const newNum = num.toString();
           const utcTimeStr = newNum.concat(':00')
           finishTime = utcTimeStr

           if (timeObj.length > 4 ) {
               
               const time = new Date(`${dateStr}T${timeObj}:00`).toISOString()
               console.log('time',time);
            //    console.log(timeObj);
            }else{
                const time = new Date(`${dateStr}T0${timeObj}:00`).toISOString()
                console.log('time',time);
            }



        } 
        if (startAmPm === 'am') {
            
           if (timeObj.length > 4 ) {
               
            const time = new Date(`${dateStr}T${timeObj}:00`).toISOString()
            console.log('time',time);
            // console.log(timeObj);
         }else{
             const time = new Date(`${dateStr}T0${timeObj}:00`).toISOString()
             console.log('time',time);
         }

        }

        if (finishAmPm === 'am') {
            
           if (timeObj.length > 4 ) {
               
            const time = new Date(`${dateStr}T${timeObj}:00`).toISOString()
            console.log('time',time);
            // console.log(timeObj);
         }else{
             const time = new Date(`${dateStr}T0${timeObj}:00`).toISOString()
             console.log('time',time);
         }

        }
   
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

    const formatAMPM = (date) => {
        // const date = new Date(shiftDate).toISOString()


        // const t = date.slice(0, 10)
        // const time = new Date(`${t}T${timeObj}:00`).toISOString()
        // console.log('time',time);

        let hours = date.getHours();
        let minutes = date.getMinutes();    
        const ampm = hours >= 12 ? 'pm' : 'am';
      
        hours %= 12;
        hours = hours || 12;    
        minutes = minutes < 10 ? `0${minutes}` : minutes;
      
        const strTime = `${hours}:${minutes} ${ampm}`;
      
        return strTime;
      };
      
    //   console.log(formatAMPM(user.shifts.start));

    function createShift(e) {
        e.preventDefault()

        cstToUtc(startTime)
        cstToUtc(finishTime)


        convertTime(startTime)
        convertTime(finishTime)
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
            {/* <form> */}
                <table>
                   
                        <tr>
                            <th>Employee name</th>
                            <th>Shift date</th>
                            <th>Start time</th>
                            <th>Finish time</th>
                            <th>Break length (minutes)</th>
                            <th>Hours worked</th>
                            <th>Shift cost</th>
                        </tr>

                    <tr>
                        <td>{user.username}</td>
                        <td>{shiftDate}</td>
                        <td>{startTime}</td>
                        <td>{finishTime}</td>
                    </tr>


                   
                </table>
             <form type='submit'>
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
                            <option value='am'>am</option>
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
                            <option value='am'>am</option>
                            <option value='pm'>pm</option>

                        </select>
                  
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


        </div>
    )
}

export default Shifts;