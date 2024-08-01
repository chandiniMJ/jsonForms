import { title } from "process";

export const Schema = async () => {
  return {
    ClientOverview: {
      schema: {
        type: "object",
        properties: {
          clientName: {
            type: "string",
            minLength: 1,
            title: "Provide Full Legal Name",
          },
          businessLocation: {
            type: "string",
            minLength: 1,
            title: "Physical Address",
          },
          spaceCreator: {
            type: "string",
          },
          divider: {
            type: "string",
          },
          govtIssuedNum: {
            type: "string",
            minLength: 1,
            title: "EIN/TIN",
          },
          jurisdictionFormation: {
            type: "string",
            minLength: 1,
            title: "",
          },
          websiteAddress: {
            type: "string",
            minLength: 1,
            title: "",
          },
          advisorName: {
            type: "string",
            minLength: 1,
            title: "Provide Full Legal Name",
          },
          advisorGovtIssuedNum: {
            type: "string",
            minLength: 1,
            title: "EIN/TIN",
          },
          numOfEmployees: {
            type: "string",
            enum: ["01-06", "06-20", "20+"],
          },
          primaryRegulators: {
            type: "string",
            minLength: 1,
          },
          crdOrSec: {
            type: "string",
            minLength: 1,
          },
          existRelationship: {
            type: "string",
            enum: ["Yes", "NO"],
          },
          advisorRelation: {
            type: "string",
            enum: ["Yes", "NO"],
          },
          clientStructureDescription: {
            type: "string",
            minLength: 1,
            title: "",
          },
        },
        required: [
          "clientName",
          "businessLocation",
          "govtIssuedNum",
          "jurisdictionFormation",
          "websiteAddress",
          "advisorName",
          "advisorGovtIssuedNum",
        ],
      },
      uiSchema: {
        type: "VerticalLayout",
        elements: [
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                label: "Client/ Fund Name",
                scope: "#/properties/clientName",
              },
              {
                type: "Control",
                label: "Business Location of Client",
                scope: "#/properties/businessLocation",
              },
              {
                type: "Control",
                label: "Government Issue Number",
                scope: "#/properties/govtIssuedNum",
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "divider",
                scope: "#/properties/divider",
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                label: "Jurisdiction of Formation",
                scope: "#/properties/jurisdictionFormation",
              },
              {
                type: "Control",
                label: "Website Address",
                scope: "#/properties/websiteAddress",
              },
              {
                type: "space",
                scope: "#/properties/spaceCreator",
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "divider",
                scope: "#/properties/divider",
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                label: "Advisor Name,  if Applicable",
                scope: "#/properties/advisorName",
              },
              {
                type: "Control",
                label: "Advisor Government Issued Number",
                scope: "#/properties/advisorGovtIssuedNum",
              },
              {
                type: "space",
                scope: "#/properties/spaceCreator",
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "divider",
                scope: "#/properties/divider",
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                label: "No. of Employees",
                scope: "#/properties/numOfEmployees",
                options: {
                  format: "singlecheckbox",
                },
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "divider",
                scope: "#/properties/divider",
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                label: "Name of Primary Regulator(s)",
                scope: "#/properties/primaryRegulators",
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "divider",
                scope: "#/properties/divider",
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                label: "If regulated, provide CRD or SEC",
                scope: "#/properties/crdOrSec",
              },
              {
                type: "space",
                scope: "#/properties/spaceCreator",
              },
              {
                type: "space",
                scope: "#/properties/spaceCreator",
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "divider",
                scope: "#/properties/divider",
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                label: "Existing Clear Street Relationship",
                scope: "#/properties/existRelationship",
                options: {
                  format: "radio",
                },
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "divider",
                scope: "#/properties/divider",
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                label:
                  "Organizational chart of client/advisor relationship provided?  (Fund, GP, Manager) (if registered, can skip)",
                scope: "#/properties/advisorRelation",
                options: {
                  format: "radio",
                },
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "divider",
                scope: "#/properties/divider",
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                label: "Describe the Client/Advisor's structure",
                scope: "#/properties/clientStructureDescription",
              },
              {
                type: "space",
                scope: "#/properties/spaceCreator",
              },
              {
                type: "space",
                scope: "#/properties/spaceCreator",
              },
            ],
          },
        ],
      },
      data: {
        clientName: "Example Client",
        businessLocation: "123 Business St",
        govtIssuedNum: "123-45-6789",
        jurisdictionFormation: "Delaware",
        websiteAddress: "https://example.com",
        advisorName: "John Doe",
        advisorGovtIssuedNum: "987-65-4321",
        numOfEmployees: "20+",
        existRelationship: "Yes",
        advisorRelation: "Yes",
        clientStructureDescription: "Complex structure",
        // primaryRegulators: ["abd", "xyz"],
      },
    },
    TaxClientOverview: {
      schema: {
        properties: {
          isCustomerFunds: {
            type: "string",
            enum: ["Prop Funds", "Customer Funds"],
          },
          spaceCreator: {
            type: "string",
          },
          divider: {
            type: "string",
          },
          heading: {
            type: "string",
          },
          srcFunding: {
            type: "string",
            enum: [
              "Family Office",
              "Personal Wealth",
              "Outside Investors",
              "Separately Managed Account (SMA)",
              "Other",
            ],
          },

          onShore: {
            type: "string",
            minLength: 1,
          },
          offShore: {
            type: "string",
            minLength: 1,
          },

          srcWealth: {
            type: "string",
            enum: [
              "Income from Employment",
              "Family Inheritance",
              "Business Ownership",
              "Sales of Shares or Other Investments",
              "Property Sale",
              "Other",
            ],
          },
          advisorAUM: {
            type: "string",
            minLength: 1,
            title: "$",
          },
          fundAUM: {
            type: "string",
            minLength: 1,
            title: "$",
          },
          netAUM: {
            type: "string",
            minLength: 1,
            title: "$",
          },
          fundLeverage: {
            type: "string",
            minLength: 1,
            title: "$",
          },
          fundDebit: {
            type: "string",
            minLength: 1,
            title: "$",
          },
          fundShort: {
            type: "string",
            minLength: 1,
            title: "$",
          },
          annualRevenue: {
            type: "string",
            minLength: 1,
            title: "$",
          },
        },
      },
      uiSchema: {
        type: "VerticalLayout",
        elements: [
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                label: "Are funds trading prop funds or customer funds?",
                scope: "#/properties/isCustomerFunds",
                options: {
                  format: "radio",
                },
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "divider",
                scope: "#/properties/divider",
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                label:
                  "Source of Funding  (if registered or has fund admin, can skip)",
                scope: "#/properties/srcFunding",
                options: {
                  format: "checbox",
                },
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "divider",
                scope: "#/properties/divider",
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                label:
                  "Source of Funding - On-Shore & Off-Shore %  (if registered, can skip)",
                scope: "#/properties/heading",
              },
            ],
          },

          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                label: "On-Shore %",
                scope: "#/properties/onShore",
              },
              {
                type: "Control",
                label: "Off-Shore %",
                scope: "#/properties/offShore",
              },
              {
                type: "space",
                scope: "#/properties/spaceCreator",
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "divider",
                scope: "#/properties/divider",
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                label:
                  "Source of Wealth  (if registered or has fund admin, can skip)",
                scope: "#/properties/srcWealth",
                options: {
                  format: "checkbox",
                },
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "divider",
                scope: "#/properties/divider",
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                label: "Advisor AUM",
                scope: "#/properties/advisorAUM",
              },
              {
                type: "Control",
                label: "Fund AUM",
                scope: "#/properties/fundAUM",
              },
              {
                type: "Control",
                label: "Net Funds Assets held at Clear Street",
                scope: "#/properties/netAUM",
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "divider",
                scope: "#/properties/divider",
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                label: "Estimated Fund Leverage",
                scope: "#/properties/fundLeverage",
              },
              {
                type: "Control",
                label: "Estimated Fund Debit Balance",
                scope: "#/properties/fundDebit",
              },
              {
                type: "Control",
                label: "Estimated Fund Short Balance",
                scope: "#/properties/fundShort",
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "divider",
                scope: "#/properties/divider",
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                label: "Estimated Annualized Revenue",
                scope: "#/properties/annualRevenue",
              },
              {
                type: "space",
                scope: "#/properties/spaceCreator",
              },
              {
                type: "space",
                scope: "#/properties/spaceCreator",
              },
            ],
          },
        ],
      },
      data: {},
    },
    KeyPersonnel: {
      schema: {
        type: "object",
        properties: {
          heading: {
            type: "string",
          },
          divider: {
            type: "string",
          },
          spaceCreator: {
            type: "string",
          },
          subHeading: {
            type: "string",
          },
          name: {
            type: "string",
            minLength: 1,
          },
          email: {
            type: "string",
            minLength: 1,
          },
          keyPersonalInfo: {
            type: "array",
            items: {
              type: "object",
              properties: {
                keyPersonalName: {
                  type: "string",
                  minLength: 1,
                  title: "Key Personal Name",
                },
                tradingExperience: {
                  type: "string",
                  minLength: 1,
                  title: "Trading Experience",
                },
                tradingStratergy: {
                  type: "string",
                  minLength: 1,
                  title: "Trading Stratergy",
                },
              },
            },
          },
          keyManagementInfo: {
            type: "array",
            items: {
              type: "object",
              properties: {
                title: {
                  type: "string",
                  enum: ["Mr.", "Ms."],
                },
                name: {
                  type: "string",
                  minLength: 1,
                },
                ownership: {
                  type: "string",
                  enum: ["0.00%", "25.0%", "50.0%", "75.0%", "100.%"],
                },
                address: {
                  type: "string",
                  minLength: 1,
                },
                dob: {
                  type: "string",
                  format: "date",
                },
              },
            },
          },
        },
        required: ["name", "email"],
      },

      uiSchema: {
        type: "VerticalLayout",
        elements: [
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                label: "Customer Contact Information",
                scope: "#/properties/heading",
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                label: "Name",
                scope: "#/properties/name",
              },
              {
                type: "Control",
                label: "Email",
                scope: "#/properties/email",
              },
              {
                type: "space",
                scope: "#/properties/spaceCreator",
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "divider",
                scope: "#/properties/divider",
              },
            ],
          },
          {
            type: "VerticalLayout",
            elements: [
              {
                type: "string",
                label: "Key Principal Information",
                scope: "#/properties/heading",
              },
              {
                type: "string",
                label:
                  "Provide the following: 1) names of the client’s key principals 2) a brief description of their background /trading experience, and 3) a brief description of their expected trading strategy: (if registered, please fill in using the Form ADV)",
                scope: "#/properties/subHeading",
              },
            ],
          },
          {
            type: "VerticalLayout",
            elements: [
              {
                type: "Control",
                scope: "#/properties/keyPersonalInfo",
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "divider",
                scope: "#/properties/divider",
              },
            ],
          },
          {
            type: "VerticalLayout",
            elements: [
              {
                type: "string",
                label: "Beneficial Ownership Information",
                scope: "#/properties/heading",
              },
              {
                type: "string",
                label:
                  "If the client is NOT SEC/FINRA Regulated, provide names of key management and each individual, if any, who owns either directly or indirectly, 10% or greater of the account being opened",
                scope: "#/properties/subHeading",
              },
            ],
          },
          {
            type: "VerticalLayout",
            elements: [
              {
                type: "Control",
                scope: "#/properties/keyManagementInfo",
              },
            ],
          },
        ],
      },
      data: {},
    },
    BusinessSection: {
      schema: {
        type: "object",
        properties: {
          clientType: {
            type: "string",
            enum: [
              "Hedge Fund",
              "Broker-Dealer",
              "Family office",
              "Introducing Broker",
              "Trust",
              "Corporate LLC",
              "Allocators",
              "40 ACT Fund",
              "RIAs",
              "Asset Manager",
            ],
          },
          accountType: {
            type: "string",
            enum: [
              "Prime/Custody",
              "Equity Execution",
              "Fully Paid Lending",
              "Options Execution",
              "Repo/Reverse Repo",
              "Capital Introduction",
              "Fixed Income",
            ],
          },
          marginType: {
            type: "string",
            enum: ["Portfolio Margin", "Reg-T", "Cash", "N/A"],
          },
          isFinancialInstitution: {
            type: "string",
            enum: ["Yes", "No"],
          },
          customerType: {
            type: "string",
            enum: ["Proprietary", "Omnibus", "Trading Group"],
          },
          isFundAdmin: {
            type: "string",
            enum: ["Yes", "No"],
          },
          isSolePrimeBroker: {
            type: "string",
            enum: ["Yes", "No"],
          },
          tradeAway: {
            type: "string",
            enum: ["Yes", "No"],
          },
          isLegalEntity: {
            type: "string",
            enum: ["Yes", "No"],
          },
          isTransferred: {
            type: "string",
            enum: ["Yes", "No"],
          },
          managementSystem: {
            type: "string",
          },
          isExitPrimeBroker: {
            type: "string",
            enum: ["Yes", "No"],
          },
          projFundingDate: {
            type: "string",
            format: "date",
            title: "Projected Funding Date",
          },
          clientStratergy: {
            type: "string",
          },
          spaceCreator: {
            type: "string",
          },
          divider: {
            type: "string",
          },
        },
        required: ["clientType"],
      },
      uiSchema: {
        type: "VerticalLayout",
        elements: [
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                label: "Client Type",
                scope: "#/properties/clientType",
                options: {
                  format: "radio",
                },
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "divider",
                scope: "#/properties/divider",
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                label: "Account Type",
                scope: "#/properties/accountType",
                options: {
                  format: "radio",
                },
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "divider",
                scope: "#/properties/divider",
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                label: "Account Type",
                scope: "#/properties/marginType",
                options: {
                  format: "radio",
                },
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "divider",
                scope: "#/properties/divider",
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                label:
                  "Is the customer a foreign financial institution or Non-US Equity?",
                scope: "#/properties/isFinancialInstitution",
                options: {
                  format: "radio",
                },
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "divider",
                scope: "#/properties/divider",
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                label: "Special Customer Type",
                scope: "#/properties/customerType",
                options: {
                  format: "radio",
                },
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "divider",
                scope: "#/properties/divider",
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                label: "Does the client have a fund admin?",
                scope: "#/properties/isFundAdmin",
                options: {
                  format: "radio",
                },
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "divider",
                scope: "#/properties/divider",
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                label:
                  "Will Clear Street be the sole Prime Broker for the Advisor or Fund?",
                scope: "#/properties/isSolePrimeBroker",
                options: {
                  format: "radio",
                },
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "divider",
                scope: "#/properties/divider",
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                label: "Will the client trade away?",
                scope: "#/properties/tradeAway",
                options: {
                  format: "radio",
                },
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "divider",
                scope: "#/properties/divider",
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                label:
                  "Does the client have a bank account in the name of the legal entity being onboarded?",
                scope: "#/properties/isLegalEntity",
                options: {
                  format: "radio",
                },
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "divider",
                scope: "#/properties/divider",
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                label:
                  "Are all assets being transferred in the name of the legal entity being onboarded?",
                scope: "#/properties/isTransferred",
                options: {
                  format: "radio",
                },
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "divider",
                scope: "#/properties/divider",
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                label:
                  "Name of Order/Execution Management System (Redi, Sterling, BBG EMSX, etc.) by product",
                scope: "#/properties/managementSystem",
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "divider",
                scope: "#/properties/divider",
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                label:
                  "Has client been exited by another Prime Broker within thepast 3 years?  If yes, what was the reason?",
                scope: "#/properties/isExitPrimeBroker",
                options: {
                  format: "radio",
                },
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "divider",
                scope: "#/properties/divider",
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                label: "Projected Funding Date",
                scope: "#/properties/projFundingDate",
              },
              {
                type: "space",
                scope: "#/properties/spaceCreator",
              },
              {
                type: "space",
                scope: "#/properties/spaceCreator",
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "divider",
                scope: "#/properties/divider",
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                label:
                  "Provide a brief business description of the Client/Fund’s strategy and expected relationship with Clear Street",
                scope: "#/properties/clientStratergy",
              },
            ],
          },
        ],
      },
      data: {},
    },
    Financials: {
      schema: {
        properties: {
          isCustomerFunds: {
            type: "string",
            enum: ["Prop Funds", "Customer Funds"],
          },
          spaceCreator: {
            type: "string",
          },
          divider: {
            type: "string",
          },
          heading: {
            type: "string",
          },
          srcFunding: {
            type: "string",
            enum: [
              "Family Office",
              "Personal Wealth",
              "Outside Investors",
              "Separately Managed Account (SMA)",
              "Other",
            ],
          },

          onShore: {
            type: "string",
            minLength: 1,
          },
          offShore: {
            type: "string",
            minLength: 1,
          },

          srcWealth: {
            type: "string",
            enum: [
              "Income from Employment",
              "Family Inheritance",
              "Business Ownership",
              "Sales of Shares or Other Investments",
              "Property Sale",
              "Other",
            ],
          },
          advisorAUM: {
            type: "string",
            minLength: 1,
            title: "$",
          },
          fundAUM: {
            type: "string",
            minLength: 1,
            title: "$",
          },
          netAUM: {
            type: "string",
            minLength: 1,
            title: "$",
          },
          fundLeverage: {
            type: "string",
            minLength: 1,
            title: "$",
          },
          fundDebit: {
            type: "string",
            minLength: 1,
            title: "$",
          },
          fundShort: {
            type: "string",
            minLength: 1,
            title: "$",
          },
          annualRevenue: {
            type: "string",
            minLength: 1,
            title: "$",
          },
        },
      },
      uiSchema: {
        type: "VerticalLayout",
        elements: [
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                label: "Are funds trading prop funds or customer funds?",
                scope: "#/properties/isCustomerFunds",
                options: {
                  format: "radio",
                },
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "divider",
                scope: "#/properties/divider",
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                label:
                  "Source of Funding  (if registered or has fund admin, can skip)",
                scope: "#/properties/srcFunding",
                options: {
                  format: "checbox",
                },
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "divider",
                scope: "#/properties/divider",
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                label:
                  "Source of Funding - On-Shore & Off-Shore %  (if registered, can skip)",
                scope: "#/properties/heading",
              },
            ],
          },

          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                label: "On-Shore %",
                scope: "#/properties/onShore",
              },
              {
                type: "Control",
                label: "Off-Shore %",
                scope: "#/properties/offShore",
              },
              {
                type: "space",
                scope: "#/properties/spaceCreator",
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "divider",
                scope: "#/properties/divider",
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                label:
                  "Source of Wealth  (if registered or has fund admin, can skip)",
                scope: "#/properties/srcWealth",
                options: {
                  format: "checkbox",
                },
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "divider",
                scope: "#/properties/divider",
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                label: "Advisor AUM",
                scope: "#/properties/advisorAUM",
              },
              {
                type: "Control",
                label: "Fund AUM",
                scope: "#/properties/fundAUM",
              },
              {
                type: "Control",
                label: "Net Funds Assets held at Clear Street",
                scope: "#/properties/netAUM",
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "divider",
                scope: "#/properties/divider",
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                label: "Estimated Fund Leverage",
                scope: "#/properties/fundLeverage",
              },
              {
                type: "Control",
                label: "Estimated Fund Debit Balance",
                scope: "#/properties/fundDebit",
              },
              {
                type: "Control",
                label: "Estimated Fund Short Balance",
                scope: "#/properties/fundShort",
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "divider",
                scope: "#/properties/divider",
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                label: "Estimated Annualized Revenue",
                scope: "#/properties/annualRevenue",
              },
              {
                type: "space",
                scope: "#/properties/spaceCreator",
              },
              {
                type: "space",
                scope: "#/properties/spaceCreator",
              },
            ],
          },
        ],
      },
      data: {},
    },
    Trading: {
      schema: {
        properties: {
          heading: {
            type: "string",
          },
          subHeading: {
            type: "string",
          },
          divider: {
            type: "string",
          },
          monthlyTradeVol: {
            type: "string",
          },
          monthlyLowPriceTraded: {
            type: "string",
          },
          monthlyRestrictedTraded: {
            type: "string",
          },
          isRestrictedStock: {
            type: "string",
            enum: ["Yes", "No", "N/A"],
          },
          spaceCreator: {
            type: "string",
          },
          listedEquities: {
            type: "string",
            minLength: 1,
          },
          otcSecurities: {
            type: "string",
            minLength: 1,
          },
          warrants: {
            type: "string",
            minLength: 1,
          },
          indexOptions: {
            type: "string",
            minLength: 1,
          },
          rule: {
            type: "string",
            minLength: 1,
          },
          isAdvisorParticipated: {
            type: "string",
            enum: [
              "Registered Direct Offerings",
              "Rule 144/Rule 144A",
              "ELOC Financing Offerings",
              "Buybacks/Affliate Sales",
              "Low-Priced/Microcap",
              "% Rule 144/Rule 144 A",
              "Unit split/SPAC",
              "Unit Split/SPAC",
            ],
          },
          monthlyShares: {
            type: "string",
            minLength: 1,
          },
          monthlyContracts: {
            type: "string",
            minLength: 1,
          },
          monthlyLowPriceShares: {
            type: "string",
            minLength: 1,
          },
          monthlyRestrictedSecurities: {
            type: "string",
            minLength: 1,
          },
        },
      },
      uiSchema: {
        type: "VerticalLayout",
        elements: [
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                label:
                  "Has risk and restricted stock compliance reviewed the sample portfolio yet? (if applicable)",
                scope: "#/properties/isRestrictedStock",
                options: {
                  format: "radio",
                },
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "divider",
                scope: "#/properties/divider",
              },
            ],
          },
          {
            type: "VerticalLayout",
            elements: [
              {
                type: "string",
                label: "Trading Strategy Information",
                scope: "#/properties/heading",
              },
              {
                type: "string",
                label:
                  "Estimate the percentage (by market value) of client trading activity in the following categories",
                scope: "#/properties/subHeading",
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                label: "% Listed Equities & ETFs",
                scope: "#/properties/listedEquities",
              },
              {
                type: "Control",
                label: "% OTC Securities",
                scope: "#/properties/otcSecurities",
              },
              {
                type: "Control",
                label: "% Warrants",
                scope: "#/properties/warrants",
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "divider",
                scope: "#/properties/divider",
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                label: "% Index Options",
                scope: "#/properties/indexOptions",
              },
              {
                type: "Control",
                label: "% Rule 144/Rule 144 A",
                scope: "#/properties/rule",
              },
              {
                type: "space",
                scope: "#/properties/spaceCreator",
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "divider",
                scope: "#/properties/divider",
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                label: "% Index Options",
                scope: "#/properties/isAdvisorParticipated",
                options: {
                  format: "checkbox",
                },
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "divider",
                scope: "#/properties/divider",
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "string",
                label: "Total Estimated Monthly Trade Volume",
                scope: "#/properties/heading",
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                label: "Shares",
                scope: "#/properties/monthlyShares",
              },
              {
                type: "Control",
                label: "Contracts",
                scope: "#/properties/monthlyContracts",
              },
              {
                type: "space",
                scope: "#/properties/spaceCreator",
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "divider",
                scope: "#/properties/divider",
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "string",
                label: "Estimated Monthly Low-Price (< $5) Traded",
                scope: "#/properties/heading",
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                label: "Shares",
                scope: "#/properties/monthlyLowPriceShares",
              },
              {
                type: "space",
                scope: "#/properties/spaceCreator",
              },
              {
                type: "space",
                scope: "#/properties/spaceCreator",
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "divider",
                scope: "#/properties/divider",
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "string",
                label: "Estimated Monthly Restricted Securities Traded",
                scope: "#/properties/heading",
              },
            ],
          },
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                label: "Shares",
                scope: "#/properties/monthlyRestrictedSecurities",
              },
              {
                type: "space",
                scope: "#/properties/spaceCreator",
              },
              {
                type: "space",
                scope: "#/properties/spaceCreator",
              },
            ],
          },
        ],
      },
      data: {},
    },
  };
};
