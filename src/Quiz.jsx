import React, { Component } from "react";

export default class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentQuestion: 0,
      questions: [
        {
          questionText: "what is the capital of France ?",
          answerOptions: [
            { answerText: "New York", isCorrect: false },
            { answerText: "London", isCorrect: false },
            { answerText: "Paris", isCorrect: true },
            { answerText: "Dublin", isCorrect: false },
          ],
        },
        {
          questionText: "who is CEO of Tesla ?",
          answerOptions: [
            { answerText: "Jeff Bezos", isCorrect: false },
            { answerText: "Elon Musk", isCorrect: true },
            { answerText: "Bill Gates", isCorrect: false },
            { answerText: "Tony Stark", isCorrect: false },
          ],
        },
        {
          questionText: "How many Harry Potter book are there ?",
          answerOptions: [
            { answerText: "1", isCorrect: false },
            { answerText: "4", isCorrect: false },
            { answerText: "6", isCorrect: false },
            { answerText: "7", isCorrect: true },
          ],
        },
        {
          questionText: "The iphone was crreated by which company ?",
          answerOptions: [
            { answerText: "Apple", isCorrect: true },
            { answerText: "Intel", isCorrect: false },
            { answerText: "Amazon", isCorrect: false },
            { answerText: "Microsoft", isCorrect: false },
          ],
        },
      ],
      score: 0,
      showScore: false,
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(isCorrect) {
    this.setState((prevState) => ({
      currentQuestion: prevState.currentQuestion + 1,

      score: isCorrect ? prevState.score + 1 : prevState.score,

      showScore: prevState.currentQuestion + 1 === prevState.questions.length,
    }));
  }

  render() {
    const currentQuestion = this.state.currentQuestion;
    const questions = this.state.questions;
    return (
      // the whole screen
      <div>
        {/*all the questions boxes */}
        {this.state.questions.length > currentQuestion ? (
          <div className="flex justify-center items-center h-screen ">
            {/* question 1 */}
            <div className="sm:w-[500px] w-80 bg-blue-950 text-white rounded-2xl shadow-2xl sm:py-4 sm:flex  ">
              <div className="pt-6 px-4 w-[250px]">
                <p>
                  Question {currentQuestion + 1}/{questions.length}
                </p>
                {this.state.questions[currentQuestion].questionText}
              </div>

              <div className="child:border-sky-900 child:border-4 child:w-52 space-y-4 child:rounded-xl child:py-1  child-hover:bg-sky-800 transition-colors py-6 px-14 sm:px-0 ">
                {this.state.questions[currentQuestion].answerOptions.map(
                  (answerOption, index) => (
                    <div key={index}>
                      <button
                        className="w-full"
                        onClick={() =>
                          this.onClickHandler(answerOption.isCorrect)
                        }
                      >
                        {answerOption.answerText}
                      </button>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        ) : (
          // the final score
          <div className="flex h-screen justify-center items-center">
            <div className=" w-60 h-28 bg-slate-900 shadow-2xl rounded-lg text-white flex items-center justify-center ">
              <p>
                your score is {this.state.score} out of{" "}
                {this.state.questions.length}
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }
}
