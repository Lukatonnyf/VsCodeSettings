
import React, { forwardRef } from "react";

interface ActivityFormFieldsProps {
  formData: {
    nameActivity: string;
    date: Date;
    hour: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddActivity: () => void;
}


const ActivityFormFields = forwardRef<HTMLDivElement, ActivityFormFieldsProps>(
  ({ formData, handleChange, handleAddActivity }, ref) => {
    return (
      <div
        ref={ref}
        className=" flex flex-col max-w-[70dvh]  w-full h-full p-5
       text-gray-400 border-l-textopaco  border-l-4 bg-card ">
        div
      </div>
    )
  })
export default ActivityFormFields;
