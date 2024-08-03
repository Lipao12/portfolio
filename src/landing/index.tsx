import { useState } from "react";
import { Home } from "./home";

export const Landing = () => {
  const [selectedPage, setSelectedPage] = useState("home");
  return (
    <div className="mx-auto space-y-8">
      <Home />
    </div>
  );
};
