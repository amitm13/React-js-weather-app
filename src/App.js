import React from 'react'
import NotificationBar from './Components/NotificationBar';
import Temprature from './Components/Temprature';
import WeatherTable from './Components/WeatherTable';


function App() {
  return (
    <div className="lg:w-2/4 md:w-2/4 sm:2/4 p-3 mx-auto align-center h-screen bg-gradient-to-b from-blue-700 to-blue-400">
      <NotificationBar />

      <Temprature />
      
      <WeatherTable />
    </div>
  );
}

export default App;
