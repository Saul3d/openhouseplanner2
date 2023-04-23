import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  rentalPropertyAddress: z.string().min(10),
  expenseType: z.string(),
  description: z.string().min(3),
});

type FormData = z.infer<typeof schema>;

const Form = () => {
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
        <label
          htmlFor="expenseType"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Expense Type
        </label>
        <select
          {...register("expenseType")}
          id="expenseType"
          name="expenseType"
          className="block w-full rounded-md border-0 p-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
        >
          <option></option>
          <option>Property Taxes</option>
          <option>Indoor Maintenance</option>
          <option>Outdoor Maintenance</option>
          <option>Misc</option>
          <option>Transportation</option>
        </select>
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
