import  { useEffect, createContext, useRef } from "react";
import "./App.css";
import List from "./components/select";
import Input from "./components/input";

const sizes = ["tiny", "small", "medium", "large", "huge"];
const colors = [
  "navy",
  "blue",
  "aqua",
  "teal",
  "olive",
  "green",
  "lime",
  "yellow",
  "orange",
  "red",
  "maroon",
  "fuchsia",
  "purple",
  "silver",
  "gray",
  "black",
];
const fruits = [
  "apple",
  "banana",
  "watermelon",
  "orange",
  "peach",
  "tangerine",
  "pear",
  "kiwi",
  "mango",
  "pineapple",
];

const items = sizes.reduce(
  (items, size) => [
    ...items,
    ...fruits.reduce(
      (acc, fruit) => [
        ...acc,
        ...colors.reduce(
          (acc, color) => [
            ...acc,
            {
              name: `${size} ${color} ${fruit}`,
              color,
            },
          ],
          []
        ),
      ],
      []
    ),
  ],
  []
);

export const NumProvider = createContext()


function App() {

const userNameRef = useRef(null);
const passRef = useRef(null)

useEffect(() => {
userNameRef.current.focus()
}, []);

  return (
    <NumProvider.Provider value={"hello Merry"}>
      <Input ref={userNameRef} type="text" placeholder="Enter user Name" />
      <Input ref={passRef} type="text" placeholder="Enter user password" />

      <List items={items} />
    </NumProvider.Provider>
  );
}

export default App;
