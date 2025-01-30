import React, { useState } from "react";

export default function ScientificJournalsComponent() {
  const [selectedItems, setSelectedItems] = useState({
    "PubMed Central": false,
    "Nature": false,
    "Science": false,
    "Cell": false,
    "The Lancet": false,
    "New England Journal of Medicine": false,
    "Jama Network": false,
  });

  // Handle Select All
  const handleSelectAll = () => {
    const newSelectedItems = {};
    Object.keys(selectedItems).forEach((item) => {
      newSelectedItems[item] = true;
    });
    setSelectedItems(newSelectedItems);
  };

  // Handle Deselect All
  const handleDeselectAll = () => {
    const newSelectedItems = {};
    Object.keys(selectedItems).forEach((item) => {
      newSelectedItems[item] = false;
    });
    setSelectedItems(newSelectedItems);
  };

  // Handle individual selection change
  const handleSelectItem = (item) => {
    setSelectedItems((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  return (
    <div className="w-full max-w-xl mx-auto mt-8 p-4 bg-[#101727] rounded-lg text-white">
      {/* Header with Select/Deselect All separated by | */}
      <div className="flex justify-center items-center mb-4 space-x-4">
        <label
          onClick={handleSelectAll}
          className="text-[#19ba87] bg-[#182130] px-4 py-2 rounded-md"
        >
          Select All
        </label>
        <span className="text-white">|</span> {/* Separator */}
        <label
          onClick={handleDeselectAll}
          className="text-[#19ba87] bg-[#182130] px-4 py-2 rounded-md"
        >
          Deselect All
        </label>
      </div>

      {/* 4x2 Grid of Selectable Items */}
      <div className="grid grid-cols-2 gap-4">
        {Object.keys(selectedItems).map((item, index) => (
          <label
            key={index}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <input
              type="checkbox"
              checked={selectedItems[item]}
              onChange={() => handleSelectItem(item)}
              className="form-checkbox text-blue-500"
            />
            <span>{item}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
