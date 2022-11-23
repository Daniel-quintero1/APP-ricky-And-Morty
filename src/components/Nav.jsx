import React from "react";
import SearchBar from "./SearchBar";
import stilo from'./../components/NavModule.css'
export default function Nav(props) {
  return (
    <div className={stilo.APP}>
      <SearchBar onSearch={props.onSearch} />
    </div>
  );
}
