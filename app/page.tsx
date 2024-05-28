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
import CustomAddButtonRenderer from "./CustomAddButtonRenderer";

import Tabs from "./Tabs";
import styles from "./page.module.css";
import { Schema } from "./Schema";
import RadioButtonRenderer from "./RadioButtonRenderer";
import SingleInputRenderer from "./SingleInputRenderer";
import HeaderRenderer from "./HeaderRenderer";
import SubHeaderRenderer from "./SubHeaderRenderer";

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

  useEffect(() => {
    if (schemas[activeTab]) {
      const dataForActiveTab = schemas[activeTab].data;
      if (dataForActiveTab) {
        formik.setValues(dataForActiveTab);
      }
    }
  }, [activeTab, schemas]);

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
      tester: rankWith(300, scopeEndsWith("spaceCreator")),
      renderer: EmptyRenderer,
    },
    {
      tester: rankWith(400, scopeEndsWith("primaryRegulators")),
      renderer: CustomAddButtonRenderer,
    },
    {
      tester: rankWith(400, scopeEndsWith("keyPersonalInfo")),
      renderer: CustomAddButtonRenderer,
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
    ...materialRenderers,
  ];

  const activeSchema = schemas[activeTab]?.schema;
  const activeUiSchema = schemas[activeTab]?.uiSchema;

  if (loading || !activeSchema || !activeUiSchema) {
    return <div>Loading...</div>;
  }

  return (
    <main className="flex h-full w-full bg-[#000000]">
      <div className="w-full">
        <Tabs
          tabs={Object.keys(schemas)}
          activeTab={activeTab}
          onTabClick={handleTabClick}
        />
        <div className={styles.main}>
          <h3 className="text-left my-5 text-[#525D70] text-base">{activeTab}</h3>
          <form onSubmit={formik.handleSubmit} className="items-center">
            <JsonForms
              schema={activeSchema}
              uischema={activeUiSchema}
              data={formik.values}
              cells={materialCells}
              renderers={renderers}
              onChange={({ data }) => formik.setValues(data)}
            />
            <button className="mt-8 w-[88px] h-[32px] bg-[#0F1D47] text-[#2C64F4]" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
