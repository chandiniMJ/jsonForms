import * as z from "zod";
import TextInputRenderer from "./TextInputRenderer";
import {
  isEnumControl,
  isStringControl,
  rankWith,
  scopeEndsWith,
} from "@jsonforms/core";
import SingleSelectionCheckBoxControl from "./SingleSelectionCheckBoxControl";
import DatePickerControl from "./DatePickerControl";
import SingleInputRenderer from "./SingleInputRenderer";
import MultiSelectionCheckboxControl from "./MultiSelectionCheckboxControl";
import EmptyRenderer from "./EmptyRenderer";
import AddButtonRenderer from "./AddButtonRenderer";
import DropDownInputGroupAddButtonRenderer from "./DropDownInputGroupAddButtonRenderer";
import RadioButtonRenderer from "./RadioButtonRenderer";
import SubHeaderRenderer from "./SubHeaderRenderer";
import DividerRenderer from "./DividerRenderer";
import { materialRenderers } from "@jsonforms/material-renderers";
import HeaderRenderer from "./HeaderRenderer";

export const clientOverviewSchema = z.object({
  clientName: z
    .string()
    .min(3, "Client Name must be at least 3 characters long"),
  businessLocation: z.string().nonempty("Business Location is required"),
  govtIssuedNum: z.string().nonempty("Government Issued Number is required"),
  jurisdictionFormation: z
    .string()
    .nonempty("Jurisdiction of Formation is required"),
  websiteAddress: z.string().url("Must be a valid URL"),
  advisorName: z.string().nonempty("Advisor Name is required"),
  numOfEmployees: z
    .string()
    .nonempty("Number of Employees is required is required"),
  existRelationship: z.string().nonempty("Existing Relationship is required"),
  advisorRelation: z.string().nonempty("Advisor Relation is required"),
  clientStructureDescription: z
    .string()
    .nonempty("Client Structure Description is required"),
  primaryRegulators: z
    .array(z.string())
    .nonempty("At least one Primary Regulator is required"),
});

const keyPersonalInfoSchema = z.object({
  // keyPersonalName: z.string().nonempty("Key Personal Name is required"),
  // tradingExperience: z.string().nonempty("Trading Experience is required"),
  // tradingStratergy: z.string().nonempty("Trading Strategy is required"),
});

export const keyManagementInfoSchema = z.object({
  title: z.string().nonempty("Title is required"),
  name: z.string().nonempty("Name is required"),
  ownership: z.string().nonempty("Ownership is required"),
  address: z.string().nonempty("Address is required"),
  dob: z.string().nonempty("Date of Birth is required"),
});

export const keyPersonnelSchema = z.object({
  name: z.string().nonempty("Name is required"),
  email: z.string().email("Must be a valid email"),
  keyPersonalInfo: z
    .array(keyPersonalInfoSchema)
    .nonempty("At least one Key Personal Info is required"),
  keyManagementInfo: z
    .array(keyManagementInfoSchema)
    .nonempty("At least one Key Management Info is required"),
});

export const businessSectionSchema = z.object({
  clientType: z.string().nonempty("Client Type is required"),
  accountType: z
    .array(z.string())
    .nonempty("At least one Account Type is required"),
  marginType: z
    .array(z.string())
    .nonempty("At least one Margin Type is required"),
  isFinancialInstitution: z
    .string()
    .nonempty("Financial Institution status is required"),
  customerType: z
    .array(z.string())
    .nonempty("At least one Customer Type is required"),
  isFundAdmin: z.string().nonempty("Fund Admin status is required"),
  isSolePrimeBroker: z
    .string()
    .nonempty("Sole Prime Broker status is required"),
  tradeAway: z.string().nonempty("Trade Away status is required"),
  isLegalEntity: z.string().nonempty("Legal Entity status is required"),
  isTransferred: z.string().nonempty("Transferred status is required"),
  managementSystem: z.string().nonempty("Management System is required"),
  isExitPrimeBroker: z
    .string()
    .nonempty("Exit Prime Broker status is required"),
  projFundingDate: z.string().nonempty("Project Funding Date is required"),
  clientStratergy: z.string().nonempty("Client Strategy is required"),
});

export const financialsSchema = z.object({
  fundLeverage: z.string().nonempty("Fund Leverage is required"),
  fundDebit: z.string().nonempty("Fund Debit is required"),
  fundShort: z.string().nonempty("Fund Short is required"),
  annualRevenue: z.string().nonempty("Annual Revenue is required"),
  isCustomerFunds: z.string().nonempty("Customer Funds status is required"),
  srcFunding: z
    .array(z.string())
    .nonempty("At least one Source of Funding is required"),
  onShore: z.string().nonempty("On Shore status is required"),
  offShore: z.string().nonempty("Off Shore status is required"),
  srcWealth: z
    .array(z.string())
    .nonempty("At least one Source of Wealth is required"),
  advisorAUM: z.string().nonempty("Advisor AUM is required"),
  fundAUM: z.string().nonempty("Fund AUM is required"),
  netAUM: z.string().nonempty("Net AUM is required"),
});

export const tradingSchema = z.object({
  isRestrictedStock: z.string().nonempty("Restricted Stock status is required"),
  listedEquities: z.string().nonempty("Listed Equities status is required"),
  otcSecurities: z.string().nonempty("OTC Securities status is required"),
  warrants: z.string().nonempty("Warrants status is required"),
  isAdvisorParticipated: z
    .array(z.string())
    .nonempty("Advisor Participation is required"),
  indexOptions: z.string().nonempty("Index Options status is required"),
  rule: z.string().nonempty("Rule is required"),
  monthlyShares: z.string().nonempty("Monthly Shares is required"),
  monthlyContracts: z.string().nonempty("Monthly Contracts is required"),
  monthlyLowPriceShares: z
    .string()
    .nonempty("Monthly Low Price Shares is required"),
  monthlyRestrictedSecurities: z
    .string()
    .nonempty("Monthly Restricted Securities is required"),
});

export const ncqFormSchema = z.object({
  ClientOverview: clientOverviewSchema,
  KeyPersonnel: keyPersonnelSchema,
  BusinessSection: businessSectionSchema,
  Financials: financialsSchema,
  Trading: tradingSchema,
});

export const renderers: any = [
  { tester: rankWith(3, isStringControl), renderer: TextInputRenderer },
  {
    tester: rankWith(1000, scopeEndsWith("numOfEmployees")),
    renderer: SingleSelectionCheckBoxControl,
  },
  {
    tester: rankWith(1000, scopeEndsWith("projFundingDate")),
    renderer: DatePickerControl,
  },
  {
    tester: rankWith(1000, scopeEndsWith("clientStratergy")),
    renderer: SingleInputRenderer,
  },
  {
    tester: rankWith(1000, scopeEndsWith("accountType")),
    renderer: MultiSelectionCheckboxControl,
  },
  {
    tester: rankWith(1000, scopeEndsWith("marginType")),
    renderer: MultiSelectionCheckboxControl,
  },
  {
    tester: rankWith(1000, scopeEndsWith("specialType")),
    renderer: MultiSelectionCheckboxControl,
  },
  {
    tester: rankWith(1000, scopeEndsWith("customerType")),
    renderer: MultiSelectionCheckboxControl,
  },
  {
    tester: rankWith(2000, scopeEndsWith("srcFunding")),
    renderer: MultiSelectionCheckboxControl,
  },
  {
    tester: rankWith(2000, scopeEndsWith("isAdvisorParticipated")),
    renderer: MultiSelectionCheckboxControl,
  },
  {
    tester: rankWith(2000, scopeEndsWith("srcWealth")),
    renderer: MultiSelectionCheckboxControl,
  },
  {
    tester: rankWith(300, scopeEndsWith("spaceCreator")),
    renderer: EmptyRenderer,
  },
  {
    tester: rankWith(400, scopeEndsWith("primaryRegulators")),
    renderer: AddButtonRenderer,
  },
  {
    tester: rankWith(400, scopeEndsWith("keyPersonalInfo")),
    renderer: AddButtonRenderer,
  },
  {
    tester: rankWith(400, scopeEndsWith("keyManagementInfo")),
    renderer: DropDownInputGroupAddButtonRenderer,
  },
  { tester: rankWith(400, isEnumControl), renderer: RadioButtonRenderer },
  {
    tester: rankWith(2000, scopeEndsWith("percentageInfo")),
    renderer: SubHeaderRenderer,
  },
  {
    tester: rankWith(2000, scopeEndsWith("subHeading")),
    renderer: SubHeaderRenderer,
  },
  {
    tester: rankWith(2000, scopeEndsWith("heading")),
    renderer: HeaderRenderer,
  },
  {
    tester: rankWith(2000, scopeEndsWith("divider")),
    renderer: DividerRenderer,
  },
  ...materialRenderers,
];

const schemaMap = {
  ClientOverview: clientOverviewSchema,
  KeyPersonnel: keyPersonnelSchema,
  BusinessSection: businessSectionSchema,
  Financials: financialsSchema,
  Trading: tradingSchema,
};
