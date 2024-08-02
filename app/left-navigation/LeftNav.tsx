import React from 'react';
import './leftNav.css';
import { leftNavData } from '../type/navData';
import LeftNavData from '../Components/leftNavData';
import { ncqTwoLevelData } from '@/public/ncqNavData';
import { enrollmentTwoLevelData } from '@/public/enrollmentNavData';

export default function LeftNav(props: {
  currentItem: number;
  type: string;
  setCurrentItem: React.Dispatch<React.SetStateAction<number>>;
}) {
  const { currentItem, type, setCurrentItem } = props;
  const data = type === 'NCQ' ? ncqTwoLevelData : enrollmentTwoLevelData;

  return (
    <div className="left-nav-container">
      {data.map((parentData: leftNavData, index: number) => {
        const lastItem = data.length !== index + 1;
        return (
          <LeftNavData
            key={parentData.id}
            {...parentData}
            count={index}
            lastItem={lastItem}
            currentItem={currentItem}
            setCurrentItem={setCurrentItem}
          />
        );
      })}
    </div>
  );
}
