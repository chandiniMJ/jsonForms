"use client";
import React, { useState, useEffect } from "react";
import { JsonForms } from "@jsonforms/react";
import { useFormik } from "formik";
import {
  rankWith,
  isStringControl,
  isEnumControl,
  scopeEndsWith,
} from "@jsonforms/core";
import {
  materialCells,
  materialRenderers,
} from "@jsonforms/material-renderers";
import TextInputRenderer from "./TextInputRenderer";
import RadioButtonRenderer from "./RadioButtonRenderer";
import Tabs from "./Tabs";
import styles from "./page.module.css";
import { Schema } from "./Schema";
import SingleSelectionCheckBoxControl from "./SingleSelectionCheckBoxControl";
import CustomTradingControl from "./CustomTradingControl";
import EmtyRenderer from "./EmptyRenderer";

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
  const [formData, setFormData] = useState({});

  useEffect(() => {
    fetchAndSetSchemas();
  }, []);

  const fetchAndSetSchemas = async () => {
    const fetchedSchemas = await Schema();
    setSchemas(fetchedSchemas);
    setActiveTab(Object.keys(fetchedSchemas)[0]);
  };

  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {
      console.log("Form submitted with values:", values);
    },
  });

  // Function to set form data when a new schema is selected
  useEffect(() => {
    // Check if data exists for the active tab
    const dataForActiveTab = schemas[activeTab]?.data;
    if (dataForActiveTab) {
      setFormData(dataForActiveTab);
    }
  }, [activeTab, schemas]);

  const handleTabClick = (name: string) => {
    setActiveTab(name);
  };

  const renderers = [
    { tester: rankWith(3, isStringControl), renderer: TextInputRenderer },
    {
      tester: rankWith(3, isEnumControl),
      renderer: SingleSelectionCheckBoxControl,
    },
    ...materialRenderers,
  ];

  const activeSchema = schemas[activeTab]?.schema;
  const activeUiSchema = schemas[activeTab]?.uiSchema;

  return (
    <main
      style={{
        display: "flex",
        height: "800px",
        width: "100%",
      }}
    >
      <div style={{ width: "100%" }}>
        <Tabs
          tabs={Object.keys(schemas)}
          activeTab={activeTab}
          onTabClick={handleTabClick}
        />
        <div className={styles.main}>
          <h3 style={{ textAlign: "left", margin: "20px 0" }}>{activeTab}</h3>
          <form onSubmit={formik.handleSubmit} style={{ alignItems: "center" }}>
            <JsonForms
              schema={activeSchema}
              uischema={activeUiSchema}
              data={formData}
              cells={materialCells}
              renderers={renderers}
              onChange={({ data }) => formik.setValues(data)}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </main>
  );
}
