import React from "react";
import { Link } from "react-router-dom";

const GenreWrapperUI = (props) => {
  return (
    <Link
      to="/movies-list"
      className="border-2 rounded-md border-red-600 p-1 md:p-3 cursor-pointer hover:bg-red-600 hover:transition-all hover:duration-500"
      onClick={props.onClickProp}
    >
      <p className="font-semibold">{props.value}</p>
    </Link>
  );
};

export default GenreWrapperUI;
