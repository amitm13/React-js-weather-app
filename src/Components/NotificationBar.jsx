import React from 'react'

export default function NotificationBar() {
  return (
    <div class="grid grid-cols-3 gap-4">
        <span className='px-4 py-1 font-bold'>12:40</span>
        <center><span className='center bg-black rounded-xl px-10 py-1 w-1/3 text-white'>Weather App</span>
        </center>
        <span className='px-4 py-1 float-right text-right font-bold'>Jio True 5G</span>
      </div>
  )
}
