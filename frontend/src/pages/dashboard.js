import React, { useState } from "react";
import AudioList from "../components/dashboard/audioList";
import AudioUpload from "../components/dashboard/audioUpload";
import { Box, Flex } from "theme-ui";
import "../components/dashboard/data.js";

const Dashboard = () => {
  const [caller, setCaller] = useState(null);
  return (
    <Box>
      <Flex
        className="audiolist"
        sx={{
          width: "100%",
          justifyContent: "space-between",
          marginLeft: "100px",
        }}
      >
        <Box sx={{ maxWidth: "500px" }}>
          <AudioList setCaller={setCaller} />
        </Box>
        <Box sx={{ marginRight: "700px", marginTop: "200px" }}>
          Prediction Result: {
            <Box>
              {caller ? (<div>
                <div className='label'>Caller Full Name : </div><div className='label-value'>{caller.fullName}</div>
                <div className='label'>Phone Number :</div><div className='label-value'>{caller.phoneNumber}</div>
                <div className='label'>Location :</div><div className='label-value'>{caller.location}</div>
                <div className='label'>Call Time Stamp :</div><div className='label-value'>{caller.timeStamp}</div>
                <div className='label'>Call Duration :</div><div className='label-value'>{caller.callDuration}</div>
                <div className='label'>Call Purpose :</div><div className='label-value'>{caller.callPurpose}</div>
                <div className='label'>Final Prediction :</div><div className='label-value'>{caller.prediction}</div>
              </div>) : ("")}
            </Box>
          }
        </Box>
      </Flex>
      <Flex>
        <AudioUpload />
      </Flex>
    </Box>
  );
};

export default Dashboard;
