
import React, { useState } from "react";
interface ActivityFormFieldsProps {
  formData: {
    nameActivity: string;
    date: Date;
    hour: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddActivity: () => void;
}



export default function ActivityFormFields({ formData, handleChange, handleAddActivity }: ActivityFormFieldsProps) {

  return (
    <div className="flex flex-col max-w-[70dvh]  w-full h-full p-5
      rounded-r-2xl  text-gray-400 border-r-textopaco  border-r bg-card ">
      {/* Campo de nome da atividade */}
      <label>Atividade</label>
      <input
        type="text"
        name="nameActivity"
        placeholder="Nome da Atividade"
        value={formData.nameActivity}
        onChange={handleChange}
        className="border border-activitys p-2 rounded w-full mb-2  "
        required
      />

      {/* Campo de data */}
      <label>Data</label>
      <input
        type="date"
        name="date"
        value={formData.date instanceof Date && !isNaN(formData.date.getTime())
          ? formData.date.toISOString().split("T")[0]
          : ""
        }
        onChange={handleChange}
        className="no-datepicker border border-activitys p-2 rounded w-full mb-2 "
      />

      {/* Campo de hora */}
      <label>Horário</label>
      <input
         type="text"
        name="hour"
        value={formData.hour}
        onChange={handleChange}
         placeholder="Selecionar data"
        className="no-datepicker border border-activitys p-2 rounded w-full mb-2"
        required
      />

      {/* Botão para adicionar */}
      <button
        onClick={handleAddActivity}
        className="bg-btncolor text-white p-2 rounded text-sm max-w-[21dvh] hover:bg-textopaco
             hover:text-background transition lg:w-[20dvh]">
        Adicionar Atividade
      </button>
    </div>
  )

}
