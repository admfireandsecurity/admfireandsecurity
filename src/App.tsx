import React from "react";
import "./App.css";
import MyButton from "./components/MyButton";
import MyCard from "./components/MyCard";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <h1>Hello Bolt!</h1>
      <p>React + TypeScript + Bolt starter project.</p>

      <MyButton label="Primary Action" />

      <div style={{ marginTop: "20px" }}>
        <MyCard
          title="Card Title"
          description="This is a Bolt card inside React + TypeScript."
        />
      </div>
    </div>
  );
};

export default App;
