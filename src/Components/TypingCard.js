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
  User,
} from "@nextui-org/react";
import { useState, useRef } from "react";

const getWords = () =>
  `the at there some my of be use her than and this an would first a have each make water to from which like been in or she him call is one do into who you had how time oil that by their has its it word if look now he but will two find was not up more long for what other write down on all about go day are were out see did as we many number get with when then no come his your them way made they can these could may I said so people 
part`.split(" ");

function Word(props) {
  const {text, active, correct} = props;

  if(correct === true) {
    return <span className="correct text-teal-400">{text} </span>
  }

  if(correct === false) {
    return <span className=" text-rose-900">{text} </span>
  }
  if(active) {
    return <span className="text-violet-400">{text} </span>
  }

  return <span style={{
    color: active ? "#9750DD" : "",
    fontWeight: active ? "bold" : "b"
  }}
  >{props.text} </span>;
}

function TypingCard({}) {
  const [userInput, setUserInput] = useState("");
  const word = useRef(getWords());
  const [progress, setProgress] = useState(0);
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [correctWordArray, setCorrectWordArray] = useState([])

  function processInput(value) {
    if (value.endsWith(" ")) {
      setActiveWordIndex((index) => index + 1);
      setProgress((progress) => progress + 1);
      setUserInput("");

      
      setCorrectWordArray(data => {
          const newword = value.trim()
          const newResult = [...data]
          newResult[activeWordIndex] = newword === word.current[activeWordIndex];

          return newResult
        })
      
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
        <div className="flex">
          <User
            src="https://avatars.githubusercontent.com/u/97550617?v=4"
            name="Sven"
            bordered
            color="secondary"
          ></User>
          <Progress color="secondary" value={progress}></Progress>
          <p className="m-4 font-bold">{progress}%</p>
        </div>
        <div className="m-4"></div>
        <div className="flex">
          <User
            src="https://qph.cf2.quoracdn.net/main-qimg-ab45488a5f2a231287ab232486154ae0-lq"
            name="User1"
            bordered
            color="error"
          ></User>
          <Progress color="error" value={75}></Progress>
          <p className="m-4 font-bold">{75}%</p>
        </div>
        <Divider className="my-4"></Divider>
        <Text>{getWords}</Text>
        <Text css={{ fontFamily: "monospace", fontSize: "$md" }}>
          {word.current.map((word, index) => {
            return <Word 
            text={word}
            active={index === activeWordIndex}
            correct = {correctWordArray[index]}
            />;
          })}
        </Text>
        <Input
          size="xl"
          autocomplete="off"
          autocorrect="off"
          autocapitalize="off"
          spellcheck="false"
          color="secondary"
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
