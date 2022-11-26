import React from "react";
import SearchBar from './SearchBar'
import stilo from'./../components/NavModule.css'
import { Link } from "react-router-dom";
export default function Nav(props) {
  return (
    <div className={stilo.APP}>
      <Link to='/home'>Home</Link>
      <Link to='/about'>About</Link>
      <SearchBar onSearch={props.onSearch} />
    </div>
  );
}
