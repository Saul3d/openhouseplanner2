import { useState } from "react";
import Form from "./components/Form";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      address: "805 Wonderland Ct. Franklin, TN 37069",
      expenseDate: new Date().toLocaleDateString(),
      amount: 10,
      category: "Indoor Maintenance",
      description: "Painting the second floor basement",
    },
    {
      id: 2,
      address: "805 Wonderland Ct. Franklin, TN 37069",
      expenseDate: new Date().toLocaleDateString(),
      amount: 10,
      category: "Outdoor Maintenance",
      description: "Painted the storm windows",
    },
    {
      id: 3,
      address: "805 Wonderland Ct. Franklin, TN 37069",
      expenseDate: new Date().toLocaleDateString(),
      amount: 10,
      category: "Misc",
      description: "Toll - Destination Miami",
    },
    {
      id: 4,
      address: "805 Wonderland Ct. Franklin, TN 37069",
      expenseDate: new Date().toLocaleDateString(),
      amount: 10,
      category: "Taxes",
      description: "HOA fee for Orlando apartment",
    },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div className="App">
      <Form 
        onAddNewExpense={(data:{id:number, address:string, expenseDate:Date, amount: number, category: string, description: string}) => setExpenses(expenses.push(data))}
      />
      <ExpenseFilter
        onSelectCategory={(category) => setSelectedCategory(category)}
      />
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}

      />
    </div>
  );
}

export default App;
