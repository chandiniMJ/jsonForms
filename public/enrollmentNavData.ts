import { leftNavData } from '@/app/type/navData';

export const enrollmentTwoLevelData: leftNavData[] = [
  {
    id: 'your-details',
    title: 'Your Details',
    serialCount: 1,
    subList: [
      {
        id: 'general-your-details',
        title: 'General',
        serialCount: 1,
      },
      {
        id: 'tax-your-details',
        title: 'Tax',
        serialCount: 2,
      },
      {
        id: 'regulatory&control-your-details',
        title: 'Regulatory and Control',
        serialCount: 3,
      },
      {
        id: 'keyIndividuals&owners-your-details',
        title: 'Key Individuals and Owners',
        serialCount: 4,
      },
    ],
  },
  {
    id: 'investment-advisor',
    title: 'Investment Advisor',
    serialCount: 5,
    subList: [
      {
        id: 'general-investment-advisor',
        title: 'General',
        serialCount: 5,
      },
      {
        id: 'keyIndividuals&owners-investment-advisor',
        title: 'Key Individuals and Owners',
        serialCount: 6,
      },
    ],
  },
  {
    id: 'account-setup',
    title: 'Account Setup',
    serialCount: 7,
    subList: [],
  },
  {
    id: 'account-add-ons-features',
    title: 'Account Add-ons/Features',
    serialCount: 8,
    subList: [],
  },
  {
    id: 'additional-services',
    title: 'Additional Services',
    serialCount: 9,
    subList: [],
  },
  {
    id: 'regulatory-questions',
    title: 'Regulatory Questions',
    serialCount: 10,
    subList: [],
  },
];

export enum enrollmentNavigationBoddyMap {
  'GeneralYourDetails',
  'TaxYorDetails',
  'RegulatoryControlYourDetails',
}
