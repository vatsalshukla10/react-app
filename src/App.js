import React from "react";
import "./styles.css";
import { useState } from "react";

const books = {
  TechnicalAnalysis: [
    { name: "Market Wizard series by Sir jack D.Schwager" },
    { name: "How to make money in stock market by Sir William J O'Neil" }
  ],

  ChartPattern: [
    {
      name: "Encyclopedia of chart patterns by Thomas N.Bulkowski"
    },
    { name: "How charts help you in stock market by William L.Jiler" }
  ],
  TradingPsychology: [
    { name: "Trading Psychology by Mark Douglas" },
    { name: "Mindset secrets for winning by Sir Mark Minervini" }
  ]
};

export default function App() {
  const [selectedSegment, setSegment] = useState("TradingPsychology");
  function segmentClickHandler(segment) {
    setSegment(segment);
  }
  return (
    <div className="App">
      <h1>
        {" "}
        <span>📈</span> Marketpedia{" "}
      </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite books. Select a segment to get started{" "}
      </p>

      <div>
        {Object.keys(books).map((segment) => (
          <button
            onClick={() => segmentClickHandler(segment)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {segment}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {books[selectedSegment].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
