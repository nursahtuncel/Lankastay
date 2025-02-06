import { useState } from "react";
import { Select, DatePicker, Button } from "antd";
import { CalendarOutlined, UserOutlined, EnvironmentOutlined } from "@ant-design/icons";
import "antd/dist/reset.css"; 
import "../FilterBar/styles.scss";

const { Option } = Select;

const FilterBar = ({ onSearch }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedPersons, setSelectedPersons] = useState(2);
  const [selectedCity, setSelectedCity] = useState(null);

  const personOptions = [1, 2, 3, 4, 5];
  const cityOptions = [
    "Ampara", "Dehiwala", "Nuwereliya", "Kandy",
    "Ambalangode", "Hikkaduwe", "Colombo",
    "Beruwala", "Galle", "Trincomalee"
  ];

  const handleSearch = () => {
    if (!selectedDate || !selectedPersons || !selectedCity) {
      alert("Lütfen tüm seçimleri yapınız.");
      return;
    }

    const filters = {
      date: selectedDate?.format("YYYY-MM-DD"),
      persons: selectedPersons,
      city: selectedCity
    };

    console.log("Arama Filtreleri:", filters);
    onSearch(filters);
  };

  return (
    <div className="filter-bar">
      <div className="filter-options">
        {/* Tarih Seçimi */}
        <div className="filter-item">
          <CalendarOutlined className="icon" />
          <DatePicker
            value={selectedDate}
            onChange={setSelectedDate}
            placeholder="Check Available"
            format="YYYY-MM-DD"
            style={{ width: "100%" }}
            suffixIcon={null}  // Varsayılan tarih ikonunu kaldırıyoruz
          />
        </div>

        {/* Kişi Sayısı Seçimi */}
        <div className="filter-item">
          <UserOutlined className="icon" />
          <Select
            value={selectedPersons}
            onChange={setSelectedPersons}
            style={{ width: "100%" }}
            bordered={false} // Border'ı kaldırıyoruz
          >
            {personOptions.map((num) => (
              <Option key={num} value={num}>
                {num} Person
              </Option>
            ))}
          </Select>
        </div>

        {/* Şehir Seçimi */}
        <div className="filter-item">
          <EnvironmentOutlined className="icon" />
          <Select
            value={selectedCity}
            onChange={setSelectedCity}
            placeholder="Select Location"
            style={{ width: "100%" }}
            bordered={false} // Border'ı kaldırıyoruz
          >
            {cityOptions.map((city) => (
              <Option key={city} value={city}>
                {city}
              </Option>
            ))}
          </Select>
        </div>
      </div>

      <Button type="primary" className="search-button" onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
};

export default FilterBar;