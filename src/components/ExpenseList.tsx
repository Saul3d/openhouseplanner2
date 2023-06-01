interface Expense {
  id: number;
  address: string;
  category: string;
  expenseDate: string;
  amount: number;
  description: string;
}

interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: Props) => {
  if(expenses.length === 0) return null
  return (
    <table className="table-auto border border-collapse border-slate-300">
      <thead>
        <tr className="bg-slate-200 text-slate-500">
          <th className="border p-3 border-slate-300"></th>
          <th className="border p-3 border-slate-300">Rental Property</th>
          <th className="border p-3 border-slate-300">Category</th>
          <th className="border p-3 border-slate-300">Date</th>
          <th className="border p-3 border-slate-300">Description</th>
          <th className="border p-3 border-slate-300">Amount</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td className="border p-3 border-slate-300 text-slate-600">
              <button
                className="rounded border-solid border-2 px-2 py-1 border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white hover:border-rose-600"
                onClick={() => onDelete(expense.id)}
              >
                Delete
              </button>
            </td>
            <td className="border p-3 border-slate-300 text-slate-600">{expense.address}</td>
            <td className="border p-3 border-slate-300 text-slate-600">{expense.category}</td>
            <td className="border p-3 border-slate-300 text-slate-600">{expense.expenseDate}</td>
            <td className="border p-3 border-slate-300 text-slate-600">{expense.description}</td>
            <td className="border p-3 border-slate-300 text-slate-600">{expense.amount}</td>
          </tr>
        ))} 
      </tbody>
      <tfoot>
        <tr className="bg-slate-200 text-slate-500 font-bold">
          <td className="border p-3 border-slate-300">Total</td>
          <td className="border p-3 border-slate-300"></td>
          <td className="border p-3 border-slate-300"></td>
          <td className="border p-3 border-slate-300"></td>
          <td className="border p-3 border-slate-300"></td>
          <td className="border p-3 border-slate-300">${expenses.reduce((acc, expense) => expense.amount + acc, 0).toFixed(2)}</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
