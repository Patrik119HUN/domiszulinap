import React from "react";
import arrow from "./down-arrow.svg";
import { useForm, SubmitHandler } from "react-hook-form";
import { useHref, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
function App() {
  const { register, handleSubmit } = useForm();
  const nav = useNavigate();
  const onSubmit = (data) => {
    if (data.exampleRequired == "doysjainruwl") {
      nav("/elso")
    }else{
      nav("/")
    }}

  return (
    <div className="bg-blue-600 m-0 relative w-full h-screen">
      <div className="flex flex-col absolute inset-1/2 h-fit w-fit -translate-x-1/2 -translate-y-1/2 items-center">
        <h1 className="font-bold text-3xl">betűkből álló kód</h1>
        <img src={arrow} className="h-14 m-2" alt="" />
        <form onSubmit={handleSubmit(onSubmit)} className="flex gap-3">
          <input
            className="rounded-sm w-72 h-12 text-xl"
            type="password"
            id="input"
            {...register("exampleRequired", { required: true })}
          />
          <input
            className="h-12 bg-slate-500 border-2 border-black p-2 cursor-pointer "
            type="submit"
            value="Ellenörzés"
          />
        </form>
      </div>
    </div>
  );
}

export default App;
