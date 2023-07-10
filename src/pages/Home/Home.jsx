import * as React from "react";
import { Box, Button, Grid } from "@mui/material";
import { Common } from "../../components/common/Common";
// import TextFieldReusable from "../../components/TextFieldReusable/TextFieldReusable";

const Home = () => {
  // textField
  const [name, setName] = React.useState("");
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  return (
    <Grid container>
      <Grid item xs={8}>
        <Box className="App">
          <h1>FormTest</h1>
          {/* <FormTest /> */}
          <Common.TextFieldReusable
            label="Name"
            value={name}
            onChange={handleNameChange}
          />
          <Common.Button
            onClick={()=>console.log(name)}
            color="secondary"
          >Click me</Common.Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Home;
