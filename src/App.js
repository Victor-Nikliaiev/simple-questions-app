import Question from "./Question";
import { useState } from "react";
import { MdQuestionAnswer } from "react-icons/md";
import { RiCopyrightLine } from "react-icons/ri";
import data from "./data";

const App = () => {
  const [questions] = useState(data);

  return (
    <main>
      <div className="container">
        <section className="left-section">
          <h2>Question and answer section</h2>
          <MdQuestionAnswer className="icon" />
          <p>Arhis Alight {<RiCopyrightLine />} 2021</p>
        </section>
        <section className="right-section">
          {questions.map((question) => {
            return <Question key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
};

export default App;
