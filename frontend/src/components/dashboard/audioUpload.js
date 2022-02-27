import React, { useEffect, useState } from 'react';
import wave from '../../assets/audioWave/soundwave-900.gif';

// import {useForm} from 'react-hook-form';

const AudioUpload=()=> {

const[buttonName,setButtonName]=useState('Play');
const[num,setNum]=useState(false);

const [audio,setAudio] = useState();

var a;

if(audio){

a=new Audio(audio);

}

const handleClick=()=>{

if(buttonName==='Play')
{

 a.play();

 setButtonName('Pause');
 setNum(true);

}

else{

a.pause();

setButtonName('Play');
setNum(false);

}
}

const addFile=(e)=>{

const s=URL.createObjectURL(e.target.files[0]);

setAudio(s);

}
return (

< div className='main1'>

  <div id='one'>
  <button onClick={handleClick}>{buttonName}</button>

   <input type='file' onChange={addFile} />
   </div>
    {/* (num)?(<video width="750" height="500" controls >
      <source src="../../assets/audioWave/SoundWaveAlphaMatteVidevo.mov" type="video/mp4"/>
     </video>):(null); */}
    <div id='two'>{num && <div><img src={wave}/></div>}</div>
     
    
     
  
</div >

);
}

export default AudioUpload;