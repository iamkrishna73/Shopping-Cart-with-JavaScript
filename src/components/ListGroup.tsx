import { useState } from "react";

interface Props {
  cities: string[];
  heading: String;
  onSelectCity: (city: string) => void;
}

function ListGroup({ cities, heading, onSelectCity }: Props) {
  //cities =[];
  //Event
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {cities.length === 0 && <p>No cities are found</p>}
      <ul className="list-group">
        {cities.map((city, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={city}
            onClick={() => {
              setSelectedIndex(index);
              onSelectCity(city);
            }}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
