import React from "react";
import Title from "../Shared/Title/Title";
import WorkProcessCard from "./WorkProcessCard";

const processList = [
  {
    id: 1,
    title: "Discover",
    info: "Clarify goals, users, and success metrics before writing a line of code.",
    list: [
      "Define the problem and target users",
      "Review data, constraints, and success criteria",
      "Draft a focused project plan",
    ],
  },
  {
    id: 2,
    title: "Design & Prototype",
    info: "Translate requirements into flows, wireframes, and UI that are testable early.",
    list: [
      "Sketch flows and low-fi wireframes",
      "Create UI mockups and microinteractions",
      "Validate quickly with feedback",
    ],
  },
  {
    id: 3,
    title: "Build & Deliver",
    info: "Implement, evaluate, and ship with measurable results and documentation.",
    list: [
      "Develop features with iterative reviews",
      "Test, measure, and polish",
      "Hand off with docs and next steps",
    ],
  },
];
const WorkeProcess = () => {
  return (
    <section className="process__section pt-120 pb-120">
      <div className="container">
        <Title
          mainTitle="My Working Strategy"
          sortTitle="Process"
        />
        <div className="row g-4">
          {processList.map(({ id, info, list, title }) => (
            <WorkProcessCard key={id} info={info} list={list} title={title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkeProcess;
