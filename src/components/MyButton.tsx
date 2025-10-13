import React from "react";

interface MyButtonProps {
  label?: string;
}

const MyButton: React.FC<MyButtonProps> = ({ label = "Click Me" }) => {
  return <bolt-button>{label}</bolt-button>;
};

export default MyButton;
