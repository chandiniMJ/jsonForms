"use client";

import { useState } from "react";
import NCQForm from "./ncqForm";

export default function Home() {
  const [selectedComponent, setSelectedComponent] = useState("");

  const handleNCQClick = () => {
    setSelectedComponent("NCQ");
  };

  const handleEnrollmentClick = () => {
    setSelectedComponent("Enrollment");
  };

  return (
    <div>
      <button onClick={handleNCQClick}>NCQ Form</button>
      <button onClick={handleEnrollmentClick}>Enrollment</button>

      {selectedComponent === "NCQ" && <NCQForm />}
      {selectedComponent === "Enrollment" && <div>Enrollment Component</div>}
    </div>
  );
}
