import React, { useState } from "react";
import AudioList from "../components/dashboard/audioList";
import AudioUpload from "../components/dashboard/audioUpload";
import { Box, Flex } from "theme-ui";
import "../components/dashboard/data.js";

const Dashboard = () => {
  const [id, setId] = useState(null);
  const setval = () => {
    setId(id);
  }
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
          <AudioList setId={setId} id={id} />
        </Box>
        <Box sx={{ marginRight: "700px", marginTop: "200px" }}>
          Prediction Result: {
            <Box>
            {id? ("jello"):(id)}
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
