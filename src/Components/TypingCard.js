import "../App.css";
import { Input, KeyCode, NextUIProvider } from "@nextui-org/react";
import {
  Button,
  Grid,
  Progress,
  Card,
  Text,
  Divider,
  Row,
} from "@nextui-org/react";
import { useState, useRef } from "react";

const getWords = () =>
  `the at there some my of be use her than and this an would first a have each make water to from which like been in or she him call is one do into who you had how time oil that by their has its it word if look now he but will two find was not up more long for what other write down on all about go day are were out see did as we many number get with when then no come his your them way made they can these could may I said so people 
part`.split(" ");


//.sort(() => Math.random() > 0.5 ? 1 :-1)
function TypingCard({}) {
  const [userInput, setUserInput] = useState("");
  const word = useRef(getWords());
  const [progress, setProgress] = useState(0); 

  const [activeWordIndex, setActiveWordIndex] = useState(0);
  function processInput(value) {
    if (value.endsWith(" ")) {
      setActiveWordIndex((index) => index + 1);
      setProgress((progress) => progress+1)
      setUserInput("");
    } else {
      setUserInput(value);
    }
  }
  return (
    <div className="TypingCard">
      <Card
        className="border-none"
        css={{
          background: "rgba(150, 150, 150, 0.04)",
          backdropFilter: "blur(1px)",
        }}
      >
        <Progress color="secondary" value={progress}></Progress>
        <Divider className="my-4"></Divider>
        <Text>{getWords}</Text>
        <Text css={{ fontFamily: "monospace", fontSize: "$md" }}>
          {word.current.map((word, index) => {
            if (index === activeWordIndex) {
              return (
                <span className=" text-violet-500" bold>
                  {word}{" "}
                </span>
              );
            }
            return <span>{word} </span>;
          })}
        </Text>
        <Input
          clearable
          underlined
          initialValue="NextUI"
          value={userInput}
          onChange={(e) => processInput(e.target.value)}
        />
      </Card>
    </div>
  );
}

export default TypingCard;
