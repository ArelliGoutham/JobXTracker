import React, { useState, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

const DropdownFilter = ({
  name,
  options,
  placeholder = "Select options",
  isMultiSelect = false,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState([]);
  const [debounceTimer, setDebounceTimer] = useState(null);

  // Handle selection change
  const handleSelect = (value) => {
    if (isMultiSelect) {
      const newSelectedValues = selectedValues.includes(value)
        ? selectedValues.filter((v) => v !== value) // Deselect if already selected
        : [...selectedValues, value]; // Add to selection
      setSelectedValues(newSelectedValues);
      triggerDebounce(newSelectedValues);
    } else {
      setSelectedValues([value]);
      triggerDebounce([value]);
      setIsOpen(false); // Close dropdown after single selection
    }
  };

  // Debounce mechanism
  const triggerDebounce = (values) => {
    if (debounceTimer) clearTimeout(debounceTimer); // Clear previous timer
    const timer = setTimeout(() => {
      onSelect({ name, values }); // Return selected values after 3 seconds
    }, 3000);
    setDebounceTimer(timer);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".dropdown-filter")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="dropdown-filter relative w-36">
      <button
        className="w-full p-3 pr-1 border-2 border-gray-300 rounded-4xl focus:outline-none focus:border-orange-500 flex items-center justify-between overflow-hidden"
        onClick={() => setIsOpen(!isOpen)}
        title={
          selectedValues.length > 0 ? selectedValues.join(", ") : placeholder
        } // Tooltip for full text
      >
        <span className="truncate w-[85%]">
          {selectedValues.length > 0 ? selectedValues.join(", ") : placeholder}
        </span>
        <ChevronDown className="w-5 h-5 text-gray-400" />
      </button>
      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-w-60">
          <div className="max-h-60 overflow-y-auto">
            {options.map((option) => (
              <div
                key={option.value}
                className="p-3 hover:bg-orange-50 cursor-pointer flex items-center justify-between"
                onClick={() => handleSelect(option.value)}
              >
                <span className="truncate w-[90%]">{option.label}</span>
                {selectedValues.includes(option.value) && (
                  <Check className="w-4 h-4 text-orange-600" />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownFilter;
