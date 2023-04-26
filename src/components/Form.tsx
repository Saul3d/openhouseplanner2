import { Fragment, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Combobox } from "@headlessui/react";

const expenseType = [
  { id: 0, name: "" },
  { id: 1, name: "Indoor Maintenance" },
  { id: 3, name: "Misc" },
  { id: 2, name: "Outdoor Maintenance" },
  { id: 4, name: "Taxes" },
];

const schema = z.object({
  rentalPropertyAddress: z.string().min(10, {message: "Must enter a valid address"}),
  expenseType: z.enum([
    "Indoor Maintenance",
    "Outdoor Maintenance",
    "Misc",
    "Taxes",
  ]),
  description: z.string().min(3, {message: "Required"}),
});

type FormData = z.infer<typeof schema>;

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const Form = () => {
  const [selected, setSelected] = useState(expenseType[0]);
  const [query, setQuery] = useState("");

  const filteredExpenses =
    query === ""
      ? expenseType
      : expenseType.filter((expenseType) => {
          return expenseType.name.toLowerCase().includes(query.toLowerCase());
        });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-2/3">
      <div className="mb-3 flex flex-col">
        <label
          htmlFor="rentalPropertyAddress"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Address
        </label>
        <input
          {...register("rentalPropertyAddress")}
          type="text"
          id="rentalPropertyAddress"
          className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="1234 N Main St."
          aria-describedby="address-description"
        />
        {errors.rentalPropertyAddress && (
          <p className="text-red-600 text-xs">
            {errors.rentalPropertyAddress.message}
          </p>
        )}
      </div>
      <div className="mb-3 flex flex-col">
        <Combobox as="div" value={selected} onChange={setSelected}>
          <Combobox.Label className="block text-sm font-medium leading-6 text-gray-900">
            Expense Type
          </Combobox.Label>
          <div className="relative mt-2">
            <Combobox.Input
              {...register("expenseType")}
              id="expenseType"
              className={
                "w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 " +
                (selected!.name === expenseType[0].name
                  ? "text-gray-400"
                  : "text-gray-900")
              }
              placeholder="Select Type"
              onChange={(event) => setQuery(event.target.value)}
              displayValue={(expenseType: { id: number; name: string }) =>
                expenseType?.name
              }
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>

            {filteredExpenses.length > 0 && (
              <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {filteredExpenses.map((expense) => (
                  <Combobox.Option
                    key={expense.id}
                    value={expense}
                    className={({ active }) =>
                      classNames(
                        "relative cursor-default select-none py-2 pl-3 pr-9",
                        active ? "bg-indigo-600 text-white" : "text-gray-900"
                      )
                    }
                  >
                    {({ active, selected }) => (
                      <>
                        <span
                          className={classNames(
                            "block truncate",
                            selected && "font-semibold"
                          )}
                        >
                          {expense.name}
                        </span>

                        {selected && (
                          <span
                            className={classNames(
                              "absolute inset-y-0 right-0 flex items-center pr-4",
                              active ? "text-white" : "text-indigo-600"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        )}
                      </>
                    )}
                  </Combobox.Option>
                ))}
              </Combobox.Options>
            )}
          </div>
        </Combobox>
        {errors.expenseType && (
          <p className="text-red-600 text-xs">{errors.expenseType.message}</p>
        )}
      </div>
      <div className="mb-3 flex flex-col">
        <label
          htmlFor="description"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Description
        </label>

        <input
          {...register("description")}
          type="text"
          id="description"
          className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Enter description for the expense type"
          aria-describedby="expense-description"
        />
        {errors.description && (
          <p className="text-red-600 text-xs">{errors.description.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
