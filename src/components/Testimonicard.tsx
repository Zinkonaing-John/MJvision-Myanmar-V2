import React from "react";
import Card from "./Card";

function App() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex gap-4 px-4 mt-3">
        <Card
          imageSrc="images/1.jpg"
          title="John Doe"
          description="This is a description of the card. It can be a brief bio or summary."
        />

        <Card
          imageSrc="images/1.jpg"
          title="John Doe"
          description="This is a description of the card. It can be a brief bio or summary."
        />

        <Card
          imageSrc="images/1.jpg"
          title="John Doe"
          description="This is a description of the card. It can be a brief bio or summary."
        />
      </div>
    </div>
  );
}

export default App;
