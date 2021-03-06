import React from 'react';

const RoomTemplate = ({
  roomName,
  setRoomName,
  roomInventory,
  setRoomInventory,
  roomBoxCount,
  setRoomBoxCount,
  roomNumber
}) => {

  // Character enforcement for user input
  const sanitize = (str) => str.replace(/[^\w'".,&\-~\n()!?#@* ]/g, "");
  const numbersOnlyEnforce = (str) => str.replace(/[^\d]/g, "");


  //  Body to render
  return (
    <fieldset className="dark" key={'roomNumber' + roomNumber}>
      <legend
        align='right'
        style={{ margin: '0' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
          fill="black" class="bi bi-box" viewBox="0 -1 17 17">
          <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961
          14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5
          14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114
          0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185
          2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5
          0 0 1 .314-.464L7.443.184z" />
        </svg>
        &nbsp;
        {roomNumber}
      </legend>
      <div className='field' style={{ paddingBottom: '0.5em' }}>
        <label htmlFor={`room${roomNumber}Name`}>
          Room Name*
        </label>
        <input
          id={`room${roomNumber}Name`}
          name={`Room${roomNumber}Name`}
          key={`Room${roomNumber}Name`}
          placeholder='e.g. "Living Room" or "Shed"'
          value={roomName[roomNumber]}
          onChange={evt => { setRoomName(prevState => ({ ...prevState, [roomNumber]: sanitize(evt.target.value) })) }}
        />
      </div>
      <div className='field' style={{ paddingBottom: '0.5em' }}>
        <label htmlFor={`room${roomNumber}Inventory`}>
          Contents of Room*<br />
        </label>
        <textarea
          id={`room${roomNumber}Inventory`}
          name={`Room${roomNumber}Inventory`}
          key={`Room${roomNumber}Inventory`}
          rows='6'
          placeholder='Please list all furniture and unboxed items to be moved from this room'
          value={roomInventory[roomNumber]}
          onChange={evt => { setRoomInventory(prevState => ({ ...prevState,  [roomNumber]: sanitize(evt.target.value) })) }}
        />
      </div>
      <div className='field' style={{ paddingBottom: '0.5em' }}>
        <label htmlFor={`room${roomNumber}BoxCount`}>
          Box count (numbers only)*
        </label>
        <input
          required
          value={roomBoxCount[roomNumber]}
          onChange={evt => { setRoomBoxCount(prevState => ({ ...prevState,  [roomNumber]: numbersOnlyEnforce(evt.target.value) })) }}
          autoComplete="off"
          type="text"
          id={`room${roomNumber}BoxCount`}
          name={`Room${roomNumber}BoxCount`}
          key={`Room${roomNumber}BoxCount`}
          placeholder='Approximatations are fine'
        />
      </div>
    </fieldset>
  )
}

export default RoomTemplate