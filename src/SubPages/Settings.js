import React from "react";
import {
  Text,
  Popover,
  Button,
  Grid,
} from "@nextui-org/react";
function Settings() {
  return (
    <div>
      <h1 className="pspace">Settings</h1>
      <h2 className="headspace">Number of Words</h2>
      <Grid.Container className="gap-7 justify-center m-5">
        <Grid>
          <Button size="lg" className="bg-violet-500 ">
            10
          </Button>
        </Grid>
        <Grid>
          <Button size="lg" className="bg-violet-500 ">
            25
          </Button>
        </Grid>
        <Grid>
          <Button size="lg" className="bg-violet-500 ">
            50
          </Button>
        </Grid>
        <Button size="lg" className="pspace bg-violet-500 ">
          100
        </Button>
      </Grid.Container>


      <h2 className="headspace">Time typing</h2>
      <Grid.Container className="gap-7 justify-center m-5">
        <Grid>
          <Button size="lg" className="bg-violet-500 ">
            15s
          </Button>
        </Grid>
        <Grid>
          <Button size="lg" className="bg-violet-500 ">
            30s
          </Button>
        </Grid>
        <Grid>
          <Button size="lg" className="bg-violet-500 ">
            60s
          </Button>
        </Grid>
        <Button size="lg" className="pspace bg-violet-500 ">
          120
        </Button>
      </Grid.Container>
      <h2 className="headspace">Modes</h2>
      <Grid.Container className="gap-7 justify-center m-5">
        <Grid>
          <Button size="lg" className="bg-violet-500 ">
            Coding
          </Button>
        </Grid>
        <Grid>
          <Button size="lg" className="bg-violet-500 ">
            Numbers
          </Button>
        </Grid>
        <Grid>
          <Button size="lg" className="bg-violet-500 ">
            Accuracy
          </Button>
        </Grid>
        <Button size="lg" className="pspace bg-violet-500 ">
          what?
        </Button>
      </Grid.Container>
 
    </div>
  );
}

export default Settings;
