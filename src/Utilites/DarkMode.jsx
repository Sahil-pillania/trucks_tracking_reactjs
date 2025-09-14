import React, { useEffect, useState } from "react";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function DarkModeToggle() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    // <button onClick={toggleTheme} className="toggle_button">
    //   {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    // </button>
    <Button
      onClick={toggleTheme}
      variant="contained"
      color={theme === "light" ? "info" : "success"}
    >
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </Button>
  );
}

export default DarkModeToggle;
