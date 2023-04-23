import { Fragment, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const expenseType = [
  { id: 0, name: 'Select Expense Type' },
  { id: 1, name: 'Indoor Maintenance' },
  { id: 3, name: 'Misc' },
  { id: 2, name: 'Outdoor Maintenance' },
  { id: 4, name: 'Taxes' },
  
]

const schema = z.object({
  rentalPropertyAddress: z.string().min(10),
  expenseType: z.string().min(1),
  description: z.string().min(3),
});

type FormData = z.infer<typeof schema>;

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log(data);

  const [selected, setSelected] = useState(expenseType[0])
  
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
      <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">Expense Type</Listbox.Label>
          <div className="relative mt-2">
            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <span className={"block truncate " + (selected.name === expenseType[0].name ? 'text-gray-400' : 'text-gray-900')}>{selected.name}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {expenseType.map((expense) => (
                  <Listbox.Option
                    key={expense.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={expense}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                          {expense.name}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
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
