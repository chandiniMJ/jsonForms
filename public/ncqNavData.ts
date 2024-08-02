import { leftNavData } from '@/app/type/navData';

export const ncqTwoLevelData: leftNavData[] = [
  {
    id: 'client-overview',
    title: 'Client Overview',
    serialCount: 1,
    subList: [
      //   {
      //     id: 'general-client-overview',
      //     title: 'General Client Overview',
      //     serialCount: 1,
      //   },
      //   {
      //     id: 'tax-client-overview',
      //     title: 'Tax Client Overview',
      //     serialCount: 2,
      //   },
      // {
      //     id: "regulatory&control-details",
      //     title: "Regulatory and Control",
      //     serialCount: 3,
      // },
      // {
      //     id: "keyIndivisuals&owners-details",
      //     title: "Key Indivisuals and Owners",
      //     serialCount: 4,
      // }
    ],
  },
  {
    id: 'key-personal',
    title: 'Key Personal',
    serialCount: 3,
    subList: [
      //   {
      //     id: 'general-key-personal',
      //     title: 'General Key Personal',
      //     serialCount: 3,
      //   },
    ],
  },
  {
    id: 'business-section',
    title: 'Buisness Section',
    serialCount: 4,
    subList: [],
  },
  {
    id: 'financials',
    title: 'Financials',
    serialCount: 5,
    subList: [],
  },
  {
    id: 'trading',
    title: 'Trading',
    serialCount: 6,
    subList: [],
  },
];

export enum ncqNavigationBoddyMap {
  'ClientOverview',
  'KeyPersonnel',
  'BusinessSection',
  'Financials',
  'Trading',
}
