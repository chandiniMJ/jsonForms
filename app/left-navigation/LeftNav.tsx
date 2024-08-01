import React, { useState } from "react";
import "./leftNav.css";
import { leftNavData } from "../type/navData";
import { twoLevelData } from "@/public/navData";
import LeftNavData from "../Components/leftNavData";

export default function LeftNav(props: {
  currentItem: number;
  setCurrentItem: React.Dispatch<React.SetStateAction<number>>;
}) {
  const { currentItem, setCurrentItem } = props;
  return (
    <div className="left-nav-container">
      {twoLevelData.map((parentData: leftNavData, index: number) => {
        return (
          <LeftNavData
            key={parentData.id}
            {...{
              ...parentData,
              count: index,
              lastItem: twoLevelData.length !== index + 1,
              currentItem,
              setCurrentItem,
            }}
          />
        );
      })}
    </div>
  );
}
