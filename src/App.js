import './App.css';
import { useState, useEffect } from 'react'


import Test from './components/Test'

function App() {
  
  const [data,setData] = useState(false)


  // listener for when the data changes. It will either add or remove the darktheme class from the body depending on the value of data
  useEffect(() => (data) ? document.body.classList.add('dark-theme') : document.body.classList.remove('dark-theme'), [data])

  return (
    <div>
      <Test 
      // doStuff is an event that is fired within the Test.js file, and in this case this function is executed
        doStuff={()=>{
          setData(!data)
        }} 

        // darkTheme is a value prop that makes stuff hapen within Test.js if it changes (which happens when data is changed)
        darkTheme={data}
      />
    </div>
  );
}

export default App;
