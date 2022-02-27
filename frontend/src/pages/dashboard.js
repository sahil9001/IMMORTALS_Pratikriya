import React, { useState } from "react";
import AudioList from "../components/dashboard/audioList";
import AudioUpload from "../components/dashboard/audioUpload";
import { Box, Flex } from "theme-ui";
import "../components/dashboard/data.js";

const Dashboard = () => {
  const [caller, setCaller] = useState(null);
  return (
    <Box>
      <button style={{marginLeft:"600px", marginTop:"50px"}}><a style={{textDecoration:"none"}} href="http://localhost:3001">


                    Audio Upload</a>
                  </button>
      <Flex
        className="audiolist"
        sx={{
          width: "100%",
          justifyContent: "space-between",
          marginLeft: "200px",
        }}
      >
        <Box sx={{ maxWidth: "500px" }}>
          <AudioList setCaller={setCaller} />
        </Box>
        <Box sx={{ marginRight: "500px", marginTop: "50px" , padding:"4rem", borderRadius: '15px', height:'450px', width:'400px',boxShadow: '0 5px 10px 0 rgba(0, 0, 0, 0.2)'}}>
          <p style={{ fontSize: "2rem" }}>Prediction Result:</p>{" "}
          {
            <Box>
              {caller ? (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumn: "1fr 1fr",
                    gridGap: "4px",
                    gridTemplateAreas: `'name nameVal' 
                'number numberVal' 'location locationVal' 'ts tsVal' 'duration durationVal' 'purpose purposeVal' 'fpred fpredVal'`,
                  }}
                >
                  <div className="label" style={{ gridArea: "name" }}>
                    <p>Caller Full Name : </p>
                  </div>
                  <div className="label-value" style={{ gridArea: "nameVal" }}>
                    <p>{caller.fullName}</p>
                  </div>
                  <div className="label" style={{ gridArea: "number" }}>
                    Phone Number :
                  </div>
                  <div
                    className="label-value"
                    style={{ gridArea: "numberVal" }}
                  >
                    {caller.phoneNumber}
                  </div>
                  <div className="label" style={{ gridArea: "location" }}>
                    Location :
                  </div>
                  <div
                    className="label-value"
                    style={{ gridArea: "locationVal" }}
                  >
                    {caller.location}
                  </div>
                  <div className="label" style={{ gridArea: "ts" }}>
                    Call Time Stamp :
                  </div>
                  <div className="label-value" style={{ gridArea: "tsVal" }}>
                    {caller.timeStamp}
                  </div>
                  <div className="label" style={{ gridArea: "duration" }}>
                    Call Duration :
                  </div>
                  <div
                    className="label-value"
                    style={{ gridArea: "durationVal" }}
                  >
                    {caller.callDuration}
                  </div>
                  <div className="label" style={{ gridArea: "purpose" }}>
                    Call Purpose :
                  </div>
                  <div
                    className="label-value"
                    style={{ gridArea: "purposeVal" }}
                  >
                    {caller.callPurpose}
                  </div>
                  <div className="label" style={{ gridArea: "fpred" }}>
                    Final Prediction :
                  </div>
                  <div className="label-value" style={{ gridArea: "fpredval", marginLeft:'-135px', marginTop:'-25px'}}>
                    {caller.prediction}
                  </div>
                </div>
              ) : (
                ""
              )}
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
