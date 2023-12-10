import { useState } from "react";
import Footer from './Footer';
import GroceryList from "./GroceryList";
import Form from "./Form";
import Header from "./Header";

const groceryItems = [
  {
    id: 1,
    name: "Mouse",
    quantity: 1,
    checked: true,
  },
  {
    id: 2,
    name: "Monitor",
    quantity: 5,
    checked: false,
  },
  {
    id: 3,
    name: "PC",
    quantity: 5,
    checked: false,
  },
];

export default function App() {
  const [items, setItems] = useState(groceryItems);
  const [orderBy, setOrderBy] = useState("input");

  function handleAddItem(item) {
    const updateItem = items.find(
      (i) =>
        i.name.toLowerCase() === item.name.toLowerCase() && i.checked != true
    );

    if (updateItem) {
      const updateItems = items.map((i) =>
        i.id === updateItem.id
          ? { ...i, quantity: i.quantity + item.quantity }
          : i
      );
      setItems(order(orderBy, updateItems));
    } else {
      setItems(order(orderBy, [...items, item]));
    }
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleChekcedItem(id) {
    const updateItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );

    setItems(order(orderBy, updateItems));
  }

  function handleOrderBy(value) {
    const orderItems = [...items];
    setItems(order(value, orderItems));
    setOrderBy(value);
  }

  function handleDeleteItems() {
    setItems([]);
  }

  function order(value, listItems) {
    const orderItems = [...listItems];

    if (value === "input") {
      orderItems.sort((a, b) => a.id - b.id);
    } else if (value === "name") {
      orderItems.sort((a, b) => a.name.localeCompare(b.name));
    } else if (value === "checked") {
      orderItems.sort((a, b) => Number(a.checked) - Number(b.checked));
    }

    return orderItems;
  }

  return (
    <div className="app">
      <Header />
      <Form onAddItem={handleAddItem} />
      <GroceryList
        items={items}
        onDeleteItem={handleDeleteItem}
        onCheckedItem={handleChekcedItem}
        onDeleteItems={handleDeleteItems}
        orderBy={orderBy}
        onOrderBy={handleOrderBy}
      />
      <Footer items={items} />
    </div>
  );
}








