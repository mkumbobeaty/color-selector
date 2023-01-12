import { Fragment, useState, useContext, useMemo, useId } from "react";
import { NumProvider } from "../App";

// Implement a feature to allow item selection with the following requirements:
// 1. Clicking an item selects/unselects it.
// 2. Multiple items can be selected at a time.
// 3. Make sure to avoid unnecessary re-renders of each list item in the big list (performance).
// 4. Currently selected items should be visually highlighted.
// 5. Currently selected items' names should be shown at the top of the page.
//
// Feel free to change the component structure at will.

const List = ({ items }) => {
  const [selected, setSelected] = useState([]);
  const contextValue =  useContext(NumProvider);
  console.log(contextValue)

  const handleSelect = (item) => {
    if (selected.includes(item)) {
        selected.splice(selected.indexOf(item), 1);
        setSelected([...selected])
    } else return setSelected([...selected, item]);
  };

  const id = useId();

  console.log(id)
 
  return (
    <Fragment>
      <div className="items-name">
        {selected.map(({ name }, i) => (
          <p key={i}>{name},</p>
        ))}{" "}
      </div>

      <ul className="List">
        {items.map((item, i) => (
          <li
            key={item.name}
            onClick={() => handleSelect(item)}
            className={
              selected.includes(item)
                ? `List__item List__item--${item.color} selected`
                : `List__item List__item--${item.color}`
            }
          >
            {item.name}
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default List;

// ---------------------------------------
// Do NOT change anything below this line.
// ---------------------------------------
