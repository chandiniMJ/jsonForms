import React from "react";
import { leftNavSubData } from "../../type/navData";
import "./leftNavSubListData.css";

export default function LeftNavSubData(
  props: leftNavSubData & {
    currentItem: number;
    setCurrentItem: React.Dispatch<React.SetStateAction<number>>;
  }
) {
  const childNavigationClickHandler = (value: number) => {
    props.setCurrentItem(value);
  };
  return (
    <div
      className={`left-nav-sub-list-data ${
        props.serialCount <= props.currentItem
          ? "active-sub-list-data"
          : "sub-list-data"
      }`}
      onClick={() => childNavigationClickHandler(props.serialCount)}
    >
      {props.title}
    </div>
  );
}
