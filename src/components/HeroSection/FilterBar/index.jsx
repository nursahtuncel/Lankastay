import { useState } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import { FaCalendarAlt, FaUser, FaMapMarkerAlt } from "react-icons/fa";
import makeAnimated from "react-select/animated";
import "react-datepicker/dist/react-datepicker.css";
import "../FilterBar/styles.scss";

const animatedComponents = makeAnimated(); 

const FilterBar = ({ onSearch }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedPersons, setSelectedPersons] = useState({ value: 2, label: "2 Person" });
  const [selectedCity, setSelectedCity] = useState(null);

  const personOptions = [
    { value: 1, label: "1 Person" },
    { value: 2, label: "2 Person" },
    { value: 3, label: "3 Person" },
    { value: 4, label: "4 Person" },
    { value: 5, label: "5 Person" }
  ];

  const cityOptions = [
    "Ampara", "Dehiwala", "Nuwereliya", "Kandy",
    "Ambalangode", "Hikkaduwe", "Colombo",
    "Beruwala", "Galle", "Trincomalee"
  ].map(city => ({ value: city, label: city }));

  const handleSearch = () => {
    if (!selectedDate || !selectedPersons || !selectedCity) {
      alert("Lütfen tüm seçimleri yapınız.");
      return;
    }

    const filters = {
      date: selectedDate.toISOString().split("T")[0],
      persons: selectedPersons.value,
      city: selectedCity.value
    };

    console.log("Arama Filtreleri:", filters);
    onSearch(filters);
  };

  const customStyles = {
    menuList: (provided) => ({
      ...provided,
      opacity: 0,
      animation: "fadeIn 0.3s forwards",
      transition: "opacity 0.3s ease-in-out"
    }),
    control: (provided) => ({
      ...provided,
      border: "none",
      background: "transparent",
      boxShadow: "none",
      minHeight: "40px"
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#4a4a4a",
      fontSize: "16px"
    })
  };

  return (
    <div className="filter-bar">
      <div className="filter-options">
        <div className="filter-item">
          <FaCalendarAlt className="icon" />
          <DatePicker
            selected={selectedDate}
            onChange={date => setSelectedDate(date)}
            placeholderText="Check Available"
          />
        </div>

        <div className="filter-item">
          <FaUser className="icon" />
          <Select
            components={animatedComponents}
            options={personOptions}
            value={selectedPersons}
            onChange={setSelectedPersons}
            classNamePrefix="react-select"
            styles={customStyles}
          />
        </div>

        <div className="filter-item">
          <FaMapMarkerAlt className="icon" />
          <Select
            components={animatedComponents}
            options={cityOptions}
            value={selectedCity}
            onChange={setSelectedCity}
            placeholder="Select Location"
            classNamePrefix="react-select"
            className="city-select"
            styles={customStyles}
          />
        </div>
      </div>

      <button className="search-button" onClick={handleSearch}>Search</button>
    </div>
  );
};

export default FilterBar;