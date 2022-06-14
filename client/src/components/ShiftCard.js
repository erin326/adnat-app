
function ShiftCard({shift, hoursWorked, shiftCost}) {

    function centralDateTime(date) {
        const string = date.toLocaleString('en-US', {
            timeZone: 'CST',
          })
          return string

    }
    const shiftStart = new Date(shift.start)
    const start = centralDateTime(shiftStart)
    const startArray = start.split(',')
    const startDate = startArray[0]
    const startTime = startArray[1]

    const shiftFinish = new Date(shift.finish)
    const finish = centralDateTime(shiftFinish)
    const finishArray = finish.split(',')
    const finishTime = finishArray[1]

    return(
        <tr>
            <td>{shift.user.username}</td>
            <td>{startDate}</td>
            <td>{startTime}</td>
            <td>{finishTime}</td>
            <td>{shift.break_length}</td>
            <td>{hoursWorked}</td>
            <td>${shiftCost}</td>

        </tr>
    )
}

export default ShiftCard;