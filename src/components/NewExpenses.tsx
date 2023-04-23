import { useRef } from 'react';
import './expenseForm.scss';

interface INewExpenseProps {
  onAddExpense: (
    id: number,
    date: string,
    title: string,
    type: string,
    address: string,
    amount: string
  ) => void;
}

const NewExpenses: React.FC<INewExpenseProps> = (props) => {
  const idInputRef = useRef<HTMLInputElement>(null);
  const dateInputRef = useRef<HTMLInputElement>(null);
  const typeInputRef = useRef<HTMLInputElement>(null);
  const titleInputRef = useRef<HTMLInputElement>(null);
  const addressInputRef = useRef<HTMLInputElement>(null);
  const amountInputRef = useRef<HTMLInputElement>(null);

  const expenseSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const idInputValue = idInputRef.current!.value;
    const dateInputValue = dateInputRef.current!.value;
    const typeInputValue = typeInputRef.current!.value;
    const titleInputValue = titleInputRef.current!.value;
    const addressInputValue = addressInputRef.current!.value;
    const amountInputValue = `$${amountInputRef.current!.value}`;
    props.onAddExpense(
      parseInt(idInputValue),
      
      dateInputValue,
      typeInputValue,
      titleInputValue,
      addressInputValue,
      amountInputValue
    );
  };

  return (
    <form onSubmit={expenseSubmitHandler}>
      <label className="text-xs mt-4 uppercase" htmlFor="expense-id">
        id
      </label>
      <input type="text" id="expense-id" className="px-5" ref={idInputRef} />
      <label className="text-xs mt-4 uppercase" htmlFor="expense-date">
        Purchase date
      </label>
      <input
        type="text"
        id="expense-date"
        className="px-5"
        ref={dateInputRef}
      />
      <label className="text-xs mt-4 uppercase" htmlFor="expense-title">
        Expense title
      </label>
      <input
        type="text"
        id="expense-title"
        className="px-5"
        ref={titleInputRef}
      />
      <label className="text-xs mt-4 uppercase" htmlFor="expense-type">
        Expense type
      </label>
      <input
        type="text"
        id="expense-type"
        className="px-5"
        ref={typeInputRef}
      />
      <label className="text-xs mt-4 uppercase" htmlFor="expense-address">
        Location/address
      </label>
      <input
        type="text"
        id="expense-address"
        className="px-5"
        ref={addressInputRef}
      />
      <label className="text-xs mt-4 uppercase" htmlFor="expense-amount">
        amount
      </label>
      <input
        type="text"
        id="expense-amount"
        className="px-5"
        ref={amountInputRef}
      />
      <button
        type="submit"
        className="text-xs mt-4 uppercase text-white bg-blue-300 rounded-md px-24 mx-auto"
      >
        Submit
      </button>
    </form>
  );
};

export default NewExpenses;
