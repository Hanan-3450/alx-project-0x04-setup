// components/layouts/Header.tsx
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const Header: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <header style={{ padding: "10px", background: "#f5f5f5" }}>
      <h1>My App</h1>
      <p>Counter Value: {count}</p>
    </header>
  );
};

export default Header;
