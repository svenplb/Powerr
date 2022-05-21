import React from "react";
import {
  Text,
  Card,
  Collapse,
  Textarea,
  Button,
  Tooltip,
  User,
  Divider,
  Grid,
  Table,
  Image,
} from "@nextui-org/react";
function Info() {
  return (
    <div>
      <Text
        h1
        size={60}
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",
        }}
        weight="bold"
        className="pspace"
      >
        Gryd - Info
      </Text>
      <Text h2 className="headspace">
        About
      </Text>
      <Text h3 className="pspace">
        Gryd is{" "}
        <span className=" bg-opacity-40 bg-violet-800 ">
          modern typing test
        </span>
        , featuring many test modes, an account system to save your typing speed
        history and user configurable features like themes, a smooth caret and
        more. Gryd is an{" "}
        <span className=" bg-opacity-40 bg-violet-800 ">open source</span>{" "}
        project, so you can go checkout the{" "}
        <a className=" font-semibold">Github </a>repository. Gryd uses the{" "}
        <span className="bg-opacity-40 bg-violet-800">
          most common 100 words
        </span>{" "}
        in the English language to generate its tests. You can use{" "}
        <span className="bg-opacity-40 bg-violet-800"> tab to restart</span> the
        typing test while typing or at the result of the test. After completing
        a test you will be able to see your wpm.{" "}
        <span className="bg-opacity-40 bg-violet-800">
          {" "}
          Wpm stands for words per minute
        </span>{" "}
      </Text>
      <Text h2 className="headspace">
        Bug report or feature request
      </Text>
      <Text h3>
        If you encounter a bug, or have a feature request - join the Discord
        server, send me an email, a direct message on Twitter or create an issue
        on GitHub. Or, send me a message through this box:
      </Text>
      <Text h3 className="pspace">
        {" "}
        Or, send me a message through this box:
      </Text>
      <div className="flex gap-3">
        <Textarea
          width="800px"
          labelPlaceholder="Write down your thoughts"
          status="default"
          className="pspace"
        />
        <Tooltip content={"You can only send a message once, so be careful"}>
          <Button
            auto
            color="secondary"
            flat
            className="bg-violet-800 bg-opacity-20"
          >
            Send
          </Button>
        </Tooltip>
      </div>
      <Text h2 className="headspace">
        Changelog
      </Text>
      <a>Current Version: 1.0</a>
      <Text h3 className="headspace"></Text>
      {/* --- */}
      <ol className="pspace">
        <li>- Added new background</li>
        <li>- Added Glassmorphism</li>
        <li>- Added Settings/Info/Home page</li>
        <li>- Added Prograss bar on top of test</li>
      </ol>

      {/* --- */}
      <Text h2 className="headspace">
        Contact
      </Text>
      <Grid justify="center" align="center">
        <User
          src="https://avatars.githubusercontent.com/u/97550617?v=4"
          name="ThinkingSven - Dev"
          color="secondary"
          bordered
          className="headspace"
        />
      </Grid>
      <Grid.Container gap={4} justify="center" align="center">
        <Grid>
          <Button size="lg" className="bg-blue-500 " color="primary">
            Twitter
          </Button>
        </Grid>
        <Grid>
          <Button size="lg" className="bg-gray-500 " color="default">
            Discord
          </Button>
        </Grid>
        <Grid>
          <Button size="lg" className="bg-violet-500 " color="secondary">
            Email
          </Button>
        </Grid>
      </Grid.Container>
    </div>
  );
}

export default Info;
