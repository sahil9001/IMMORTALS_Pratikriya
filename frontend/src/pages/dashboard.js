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
          marginLeft: "200px",
        }}
      >
        <Box sx={{ maxWidth: "500px" }}>
          <AudioList setCaller={setCaller} />
        </Box>
        <Box sx={{ marginRight: "700px", marginTop: "00px" }}>
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
                  <div className="label-value" style={{ gridArea: "fpredval" }}>
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
