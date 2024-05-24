import React from "react";

const Tabs = ({ tabs, activeTab, onTabClick }: any) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ display: "flex" }}>
        {tabs.map((name: string) => (
          <button
            key={name}
            style={{
              borderRadius: "9999px",
              padding: "8px 12px",
              fontSize: "0.875rem",
              lineHeight: "1.5rem",
              color: activeTab === name ? "white" : "#d1d5db",
              backgroundColor: activeTab === name ? "#1A1E28" : "#374151",
              border: activeTab === name ? "1px solid #2C64F4" : "none",
              marginRight: "8px",
            }}
            onClick={() => onTabClick(name)}
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
