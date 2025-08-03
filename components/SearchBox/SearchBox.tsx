import css from "./SearchBox.module.css";
import React, { useState } from "react";

interface SearchBoxProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchBox({ onChange }: SearchBoxProps) {
  const [value, setValue] = useState("");

  function onSearch(e: React.ChangeEvent<HTMLInputElement>): void {
    setValue(e.target.value);
    onChange(e);
  }

  return (
    <input
      className={css.input}
      type="text"
      placeholder="Search posts"
      value={value}
      onChange={onSearch}
    />
  );
}
