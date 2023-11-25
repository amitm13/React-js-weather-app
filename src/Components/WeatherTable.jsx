import React from 'react'

export default function WeatherTable() {
  return (
    <div className='row mt-40 backdrop-blur-md bg-black/30 rounded-lg h-auto text-white'>
        <table className='w-full'>
          <tr className='h-10'>
            <td className='text-left font-bold pl-5'>Now</td>
            <td className='text-center'>Partialy cloudy</td>
            <td className='text-right font-bold pr-5'>32&deg;C</td>
          </tr>
          <tr className='h-10'>
            <td className='text-left font-bold pl-5'>1PM</td>
            <td className='text-center'>Sunny</td>
            <td className='text-right font-bold pr-5'>32&deg;C</td>
          </tr>
          <tr className='h-10'>
            <td className='text-left font-bold pl-5'>2PM</td>
            <td className='text-center'>Sunny</td>
            <td className='text-right font-bold pr-5'>33&deg;C</td>
          </tr>
          <tr className='h-10'>
            <td className='text-left font-bold pl-5'>3PM</td>
            <td className='text-center'>Clear</td>
            <td className='text-right font-bold pr-5'>35&deg;C</td>
          </tr>
        </table>
      </div>
  )
}
