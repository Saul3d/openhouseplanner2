import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

interface Props {
  onSelectCategory: (category: string) => void;
}

const categories = [
  { id: 1, name: 'All Categories' },
  { id: 2, name: 'Indoor Maintenance' },
  { id: 3, name: 'Misc' },
  { id: 4, name: 'Outdoor Maintenance' },
  { id: 5, name: 'Taxes' }
]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  const [selected, setSelected] = useState(categories[0])

  return (
    <select className="rounded border-solid border-2 border-slate-300 p-2 my-2" onChange={(event) => {onSelectCategory(event.target.value)}}>
      <option value="">All Categories</option>
      <option value="Indoor Maintenance">Indoor Maintenance</option>
      <option value="Outdoor Maintenance">Outdoor Maintenance</option>
      <option value="Misc">Misc</option>
      <option value="Taxes">Taxes</option>
    </select>

    // <Listbox
    //   value={selected}
    //   onChange={(event) => {
    //     onSelectCategory(event.target.value);
    //   }}
    // >
    //   {({ open }) => (
    //     <>
    //       <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">
    //         Assigned to
    //       </Listbox.Label>
    //       <div className="relative mt-2">
    //         <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
    //           <span className="block truncate">{selected.name}</span>
    //           <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
    //             <ChevronUpDownIcon
    //               className="h-5 w-5 text-gray-400"
    //               aria-hidden="true"
    //             />
    //           </span>
    //         </Listbox.Button>

    //         <Transition
    //           show={open}
    //           as={Fragment}
    //           leave="transition ease-in duration-100"
    //           leaveFrom="opacity-100"
    //           leaveTo="opacity-0"
    //         >
    //           <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
    //             {categories.map((category) => (
    //               <Listbox.Option
    //                 key={category.id}
    //                 className={({ active }) =>
    //                   classNames(
    //                     active ? "bg-indigo-600 text-white" : "text-gray-900",
    //                     "relative cursor-default select-none py-2 pl-3 pr-9"
    //                   )
    //                 }
    //                 value={category}
    //               >
    //                 {({ selected, active }) => (
    //                   <>
    //                     <span
    //                       className={classNames(
    //                         selected ? "font-semibold" : "font-normal",
    //                         "block truncate"
    //                       )}
    //                     >
    //                       {person.name}
    //                     </span>

    //                     {selected ? (
    //                       <span
    //                         className={classNames(
    //                           active ? "text-white" : "text-indigo-600",
    //                           "absolute inset-y-0 right-0 flex items-center pr-4"
    //                         )}
    //                       >
    //                         <CheckIcon className="h-5 w-5" aria-hidden="true" />
    //                       </span>
    //                     ) : null}
    //                   </>
    //                 )}
    //               </Listbox.Option>
    //             ))}
    //           </Listbox.Options>
    //         </Transition>
    //       </div>
    //     </>
    //   )}
    // </Listbox>
  );
};

export default ExpenseFilter;
