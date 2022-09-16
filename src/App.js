import { useEffect, useState } from 'react';
import './App.css'
import {data} from './Database'

export default function App() {
  const [cut, setCut]=useState(0)
  const [scrolvh, setScrolvh] = useState(0);
  const [scrolT, setScrolT] = useState(0);
  const boxSize = 600;
  let boardnum = 0;
  let num = 8;
  let dataRoad = data.slice(0,cut);
  useEffect(() => {
    if(scrolT + boxSize > scrolvh - 12){
      console.log(scrolT)
      num = cut + 8;
      setCut(num);
    }
  },[scrolT])
  const onScroll = (e) => {
    setScrolvh(e.target.scrollHeight);
    setScrolT(e.target.scrollTop);
  }
  
  return (
    <div className='scrollBox' onScroll={onScroll}>
      {dataRoad.map((data) => {
        return (
          <div className='innerBox'>
            <h4>{data.name}</h4>
            <h4>{data.email}</h4>
            <h4>{data.phone}</h4>
            <h4>{data.address}</h4>
            <h4>{boardnum += 1}</h4>
          </div>
      )})}
    </div>
  );
}