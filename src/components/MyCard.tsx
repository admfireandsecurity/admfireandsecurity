import React from "react";

interface MyCardProps {
  title: string;
  description: string;
}

const MyCard: React.FC<MyCardProps> = ({ title, description }) => {
  return (
    <bolt-card>
      <h3 slot="heading">{title}</h3>
      <p slot="content">{description}</p>
    </bolt-card>
  );
};

export default MyCard;
