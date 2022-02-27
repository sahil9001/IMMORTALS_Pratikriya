import React, { useEffect, useState } from "react";
import wave from "../../assets/audioWave/soundwave-900.gif";

// import {useForm} from 'react-hook-form';

const AudioUpload = () => {
  const [buttonName, setButtonName] = useState("Play");
  const [num, setNum] = useState(false);

  const [audio, setAudio] = useState();

  var a;

  if (audio) {
    a = new Audio(audio);
  }

  const handleClick = () => {
    if (buttonName === "Play") {
      if (a) {
        a.play();
        setButtonName("Pause");
        setNum(true);
      }
      else {
        alert("Please upload an audio file");
      }
      
    } else {
      a.pause();

      setButtonName("Play");
      setNum(false);
    }
  };

  const addFile = (e) => {
    const s = URL.createObjectURL(e.target.files[0]);

    setAudio(s);
  };
  return (
    <div className="main1" style={{ display: "flex", flexDirection: "column" }}>
      <div
        id="one"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ flex: "1", alignContent: "center", marginLeft: "15rem" }}>
          <button onClick={handleClick}>{buttonName}</button>
        </div>
        <div
          style={{
            flex: "1",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "15rem",
          }}
        >
          <input type="file" onChange={addFile} style={{ padding: "0.5rem" }} />
        </div>
      </div>
      {/* (num)?(<video width="750" height="500" controls >
      <source src="../../assets/audioWave/SoundWaveAlphaMatteVidevo.mov" type="video/mp4"/>
     </video>):(null); */}
      <div id="two">
        {num && (
          <div>
            <img style={{ marginLeft: "10rem" }} src={wave} />
          </div>
        )}
      </div>
    </div>
  );
};

export default AudioUpload;
