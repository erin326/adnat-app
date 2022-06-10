import {useState} from 'react';
import { useEffect } from 'react';



function Shifts({user}) {


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

    const test = new Date('2022-06-12T02:00:00.000Z');
    // 2022-06-12T20:00:00.000Z
    // '2022-06-12T16:00:00.000Z'
  
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

    function convertTime(timeObj) {
        const date = new Date(shiftDate).toISOString()

        const dateStr = date.slice(0, 10)

        // if( startAmPm === 'pm' ) {
            // console.log('SPLIT', startTime.split(':')[0]);
        //    const num = parseInt(startTime[0]) + 12
        //    const newNum = num.toString();
        //    const utcTimeStr = newNum.concat(':00')
        //    console.log(newNum);
            // console.log(utcTimeStr);
            // startTime = utcTimeStr
            if (startAmPm === 'pm' && startTime.length > 4 ) {
              
                // console.log(cstToUtc(time));
                const num = parseInt(startTime.slice(0,2)) +12
                console.log(num);
                
                const newNum = num.toString();
                const utcTimeStr = newNum.concat(':00')
                console.log(utcTimeStr);
                const time = new Date(`${dateStr}T${utcTimeStr}:00`).toISOString()
                console.log(time);
                console.log(startTime);
                // startTime = utcTimeStr
            
            
                console.log(cstToUtc(time));
            
            }else if (startAmPm === 'pm' && startTime.length <= 4) {
                const num = parseInt(startTime[0]) +12 

                const newNum = num.toString();
                const utcTimeStr = newNum.concat(':00')
                console.log(num);
                console.log(newNum);
                console.log(utcTimeStr);
                const time = new Date(`${dateStr}T${utcTimeStr}:00`).toISOString()
                console.log('time',time);
                console.log(startTime);
                console.log(startTime.length);
                console.log(cstToUtc(time));
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
        const num = parseInt(finishTime.slice(0,2)) +12
                console.log(num);
                
                const newNum = num.toString();
                const utcTimeStr = newNum.concat(':00')
                console.log(utcTimeStr);
                const time = new Date(`${dateStr}T${utcTimeStr}:00`).toISOString()
                console.log(time);
                console.log(finishTime);
            //    console.log(finishTime);
            }else if (finishAmPm
                 === 'pm' && finishTime.length <= 4 ){
                     console.log(finishTime);
                    const number = parseInt(finishTime[0]) +12 

                    const newNumber = number.toString();
                    const utcFinish = newNumber.concat(':00')
                    console.log(number);
                    console.log(newNumber);
                    console.log(utcFinish);
                const time = new Date(`${dateStr}T${utcFinish}:00`).toISOString()
                console.log('time',time);
                console.log(cstToUtc(time));
            }



        
        if (startAmPm === 'am' && startTime.length >4) {
      
               
            const time = new Date(`${dateStr}T${startTime}:00`).toISOString()
            console.log('time',time);
            console.log(startTime);
            // console.log(startTime);
         }else if ( startAmPm === 'am' && startTime.length <= 4){
             const time = new Date(`${dateStr}T0${startTime}:00`).toISOString()
             console.log('time',time);
             console.log(startTime);
             console.log(cstToUtc(time));
         }

        

        if (finishAmPm === 'am' && finishTime.length >4) {
        
               
            const time = new Date(`${dateStr}T${finishTime}:00`).toISOString()
            console.log('time',time);
            console.log(utc(time));
         }else if (finishAmPm === 'am' && finishTime.length <= 4) {
             const time = new Date(`${dateStr}T0${finishTime}:00`).toISOString()
             console.log('time',time);
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

    function createShift(e) {
        e.preventDefault()

        // cstToUtc(startTime)
        // cstToUtc(finishTime)


    convertTime()
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