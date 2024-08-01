"use client";
import "./globals.css";
import React, { useState, useEffect } from "react";
import { JsonForms } from "@jsonforms/react";
import { useFormik } from "formik";
import {
  isEnumControl,
  isStringControl,
  rankWith,
  scopeEndsWith,
} from "@jsonforms/core";
import {
  materialCells,
  materialRenderers,
} from "@jsonforms/material-renderers";
import TextInputRenderer from "./TextInputRenderer";
import SingleSelectionCheckBoxControl from "./SingleSelectionCheckBoxControl";
import EmptyRenderer from "./EmptyRenderer";
import Tabs from "./Tabs";
import { Schema } from "./Schema";
import RadioButtonRenderer from "./RadioButtonRenderer";
import SingleInputRenderer from "./SingleInputRenderer";
import HeaderRenderer from "./HeaderRenderer";
import SubHeaderRenderer from "./SubHeaderRenderer";
import MultiSelectionCheckboxControl from "./MultiSelectionCheckboxControl";
import DatePickerControl from "./DatePickerControl";
import AddButtonRenderer from "./AddButtonRenderer";
import DropDownInputGroupAddButtonRenderer from "./DropDownInputGroupAddButtonRenderer";
import DividerRenderer from "./DividerRenderer";
import { navigationBoddyMap } from "../public/navData";
import LeftNav from "./left-navigation/LeftNav";

interface SchemaType {
  [key: string]: {
    schema: any;
    uiSchema: any;
    data: any;
  };
}

export default function Home() {
  const [schemas, setSchemas] = useState<SchemaType>({});
  const [activeTab, setActiveTab] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentItem, setCurrentItem] = useState(1);
  const globalProps = {
    currentItem,
    setCurrentItem,
  };

  useEffect(() => {
    fetchAndSetSchemas();
  }, []);

  const fetchAndSetSchemas = async () => {
    const fetchedSchemas = await Schema();
    setSchemas(fetchedSchemas);
    setActiveTab(Object.keys(fetchedSchemas)[0]);
    setLoading(false);
  };

  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {
      console.log("Form submitted with values:", values);
    },
  });

  // useEffect(() => {
  //   if (schemas[activeTab]) {
  //     const dataForActiveTab = schemas[activeTab].data;
  //     if (dataForActiveTab) {
  //       formik.setValues(dataForActiveTab);
  //     }
  //   }
  // }, [activeTab, schemas]);
  useEffect(() => {
    if (schemas[navigationBoddyMap[currentItem - 1]]) {
      const dataForActiveTab =
        schemas[navigationBoddyMap[currentItem - 1]].data;
      if (dataForActiveTab) {
        formik.setValues(dataForActiveTab);
      }
    }
  }, [currentItem, schemas]);

  const handleTabClick = (name: string) => {
    setActiveTab(name);
  };

  const renderers: any = [
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

  // const activeSchema = schemas[activeTab]?.schema;
  // const activeUiSchema = schemas[activeTab]?.uiSchema;
  const activeSchema = schemas[navigationBoddyMap[currentItem - 1]]?.schema;
  const activeUiSchema = schemas[navigationBoddyMap[currentItem - 1]]?.uiSchema;
  // if (loading || !activeSchema || !activeUiSchema) {
  //   return <div>Loading...</div>;
  // }

  const prevClickHandler = () => {
    setCurrentItem(currentItem - 1);
  };
  const nextClickHandler = () => {
    setCurrentItem(currentItem + 1);
  };

  return (
    <div className="flex flex-row h-full bg-[#000000] pl-[2rem] pt-[5rem]">
      <div className="left-nav h-full w-[20%] p-[2rem 0 0 2rem] min-w-[15rem]">
        <LeftNav {...globalProps} />
      </div>

      <div className="flex flex-col h-full">
        <div className="flex">
          <div className="w-full flex flex-col items-center">
            {/* <h3 className="text-left text-[#ccd0d7] text-base">{activeTab}</h3> */}
            <form onSubmit={formik.handleSubmit} className="items-center">
              <JsonForms
                schema={activeSchema}
                uischema={activeUiSchema}
                data={formik.values}
                cells={materialCells}
                renderers={renderers}
                onChange={({ data }) => formik.setValues(data)}
              />
            </form>
          </div>
        </div>

        <div className="flex-shrink-0 bg-[#000000] flex p-8 ml-[20rem]">
          <button
            className="w-[10rem] h-[2.5rem] bg-[#0F1D47] text-[#2C64F4] border border-[#2C64F4] rounded-md"
            type="button"
            onClick={() => {
              formik.handleSubmit();
            }}
          >
            Ready For Review
          </button>
          <button
            className="w-[6rem] h-[2.5rem] bg-[#0F1D47] text-[#2C64F4] border border-[#2C64F4] rounded-md ml-4"
            type="button"
            onClick={() => {
              formik.handleSubmit();
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
