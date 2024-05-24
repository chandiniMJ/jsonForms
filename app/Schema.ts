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
          existRelationship: {
            type: "string",
            enum: ["Yes", "NO"],
          },
          clientKnowDetails: {
            type: "string",
            minLength: 1,
            title: "",
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
          add: {
            type: "array",
            items: {
              type: "object",
              properties: {
                name: {
                  type: "string",
                },
              },
            },
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
                type: "Control",
                label: "Jurisdiction of Formation",
                scope: "#/properties/jurisdictionFormation",
              },
              {
                type: "Control",
                label: "Website Address",
                scope: "#/properties/websiteAddress",
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
                  format: "radio",
                },
              },
            ],
          },

          {
            type: "VerticalLayout",
            elements: [
              {
                type: "Control",
                scope: "#/properties/add",
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
                type: "Control",
                label:
                  "How do you know the client and for how long? Have you previously serviced the client",
                scope: "#/properties/clientKnowDetails",
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
                type: "Control",
                label: "Describe the Client/Advisor's structure",
                scope: "#/properties/clientStructureDescription",
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
        clientKnowDetails: "Known for 5 years",
        advisorRelation: "Yes",
        clientStructureDescription: "Complex structure",
      },
    },
    KeyPersonnel: {
      schema: {
        type: "object",
        properties: {
          xyz: {
            type: "string",
            minLength: 1,
            title: "XYZ",
          },
          abc: {
            type: "string",
            minLength: 1,
            title: "ABC",
          },
        },
        required: ["xyz", "abc"],
      },
      uiSchema: {
        type: "VerticalLayout",
        elements: [
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                label: "XYZ",
                scope: "#/properties/xyz",
              },
              {
                type: "Control",
                label: "ABC",
                scope: "#/properties/abc",
              },
            ],
          },
        ],
      },
      data: {}
    },
    BusinessSection: {
      schema: {
        type: "object",
        properties: {
          www: {
            type: "string",
            minLength: 1,
            title: "www",
          },
          ttt: {
            type: "string",
            minLength: 1,
            title: "AtttBC",
          },
        },
        required: ["xyz", "abc"],
      },
      uiSchema: {
        type: "VerticalLayout",
        elements: [
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                label: "XYZ",
                scope: "#/properties/www",
              },
              {
                type: "Control",
                label: "ABC",
                scope: "#/properties/ttt",
              },
            ],
          },
        ],
      },
      data: {}
    },
    Trading: {
      schema: {
        properties: {
          add: {
            type: "array",
            items: {
              type: "object",
              properties: {
                name: {
                  type: "string",
                },
              },
            },
          },
        },
      },
      uiSchema: {
        type: "VerticalLayout",
        elements: [
          {
            type: "Control",
            scope: "#/properties/add",
          },
        ],
      },
      data: {}
    },
  };
}; 

