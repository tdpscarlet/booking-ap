import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import "./list.scss";
import NavBar from "../../components/navbar/NavBar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import hotels from "../../data/hotels";

function List() {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [query, setQuery] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  const handleSearch = (hotels) => {
    return hotels.filter(
      (hotel) =>
        hotel.city.toLowerCase().includes(destination.toLowerCase()) ||
        hotel.name.toLowerCase().includes(destination.toLowerCase())
    );
  };
  return (
    <div>
      <NavBar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Tìm</h1>
            <div className="lsItem">
              <label htmlFor="">Tên chỗ nghỉ / điểm đến:</label>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <div className="lsItem">
              <label htmlFor="">Ngày nhận / trả phòng</label>
              <span
                onClick={() => {
                  setOpenDate(!openDate);
                  setOpenOptions(false);
                }}
              >
                {`${format(date[0].startDate, "dd/MM/yyyy")} đến ${format(
                  date[0].endDate,
                  "dd/MM/yyyy"
                )}`}
              </span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  ranges={date}
                  minDate={new Date()}
                  className="lsDate"
                />
              )}
            </div>

            <div className="lsItem">
              <label htmlFor="">Options</label>
              <span
                onClick={() => {
                  setOpenOptions(!openOptions);
                  setOpenDate(false);
                }}
                className="lsItemText"
              >{`${options.adult} người lớn • ${options.children} trẻ em • ${options.room} phòng`}</span>
              {openOptions && (
                <div className="lsItemOption">
                  <div className="optionItem">
                    <span className="optionText">Người lớn</span>
                    <div className="optionCounter">
                      <button
                        disabled={options.adult <= 1}
                        className="optionCounterButton"
                        onClick={() => handleOption("adult", "d")}
                      >
                        -
                      </button>
                      <span className="optionNumber">{options.adult}</span>
                      <button
                        className="optionCounterButton"
                        onClick={() => handleOption("adult", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="optionItem">
                    <span className="optionText">Trẻ em</span>
                    <div className="optionCounter">
                      <button
                        disabled={options.children <= 0}
                        className="optionCounterButton"
                        onClick={() => handleOption("children", "d")}
                      >
                        -
                      </button>
                      <span className="optionNumber">{options.children}</span>
                      <button
                        className="optionCounterButton"
                        onClick={() => handleOption("children", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="optionItem">
                    <span className="optionText">Phòng</span>
                    <div className="optionCounter">
                      <button
                        className="optionCounterButton"
                        onClick={() => handleOption("room", "d")}
                        disabled={options.room <= 1}
                      >
                        -
                      </button>
                      <span className="optionNumber">{options.room}</span>
                      <button
                        className="optionCounterButton"
                        onClick={() => handleOption("room", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <button onClick={() => setDestination(query)}>Tìm</button>
          </div>
          <div className="listResult">
            <SearchItem data={handleSearch(hotels)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
