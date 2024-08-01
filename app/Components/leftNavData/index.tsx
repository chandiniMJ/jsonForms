import React from "react";
import { leftNavData, leftNavSubData } from "../../type/navData";
import LeftNavSubData from "../leftNavSubData";
import "./leftNavData.css";
import LeftNavGreyCircle from "../leftNavGreyCircle";
import LeftNavBlueCircle from "../leftNavBlueCircle";

export default function LeftNavData(
  props: leftNavData & {
    count: number;
    lastItem: boolean;
    currentItem: number;
    setCurrentItem: React.Dispatch<React.SetStateAction<number>>;
  }
) {

    const parentNavigationClickHandler = (value:number) => {
        props.setCurrentItem(value)
    }
  return (
    <div className="left-nav-parent-data">
      <div className="parent-data-item">
        {props.serialCount <= props.currentItem ? (
          <LeftNavBlueCircle value={props.count} />
        ) : (
          <LeftNavGreyCircle value={props.count} />
        )}
        <span className="parent-title" onClick={()=>parentNavigationClickHandler(props.serialCount)}>{props.title}</span>
      </div>
      <div className="left-nav-sublist">
        {props.subList.length > 0 ? (
          props.subList.map((subListData: leftNavSubData) => {
            return (
              <LeftNavSubData
                key={subListData.id}
                {...{
                  ...subListData,
                  currentItem: props.currentItem,
                  setCurrentItem: props.setCurrentItem,
                }}
              />
            );
          })
        ) : props.lastItem ? (
          <div className={`${props.serialCount <= props.currentItem ? "extended-block-active" : "extended-block"}`}></div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
