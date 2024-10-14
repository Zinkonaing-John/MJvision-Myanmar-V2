"use client";
import React from "react";

const FAQs: React.FC = () => {
  return (
    <div>
      <h2>Frequently Asked Questions</h2>
      <div>
        <h3>Question 1: What is React?</h3>
        <p>
          Answer: React is a JavaScript library for building user interfaces.
        </p>
      </div>
      <div>
        <h3>Question 2: What is TypeScript?</h3>
        <p>
          Answer: TypeScript is a typed superset of JavaScript that compiles to
          plain JavaScript.
        </p>
      </div>
      <div>
        <h3>Question 3: How do I use React with TypeScript?</h3>
        <p>
          Answer: By using .tsx files and properly typing your components,
          state, and props.
        </p>
      </div>
    </div>
  );
};

export default FAQs;
