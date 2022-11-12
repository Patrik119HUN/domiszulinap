import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Checkbox from "../components/checkbox";
import { useNavigate } from "react-router-dom";

function Quiz_0() {
  const { register, handleSubmit } = useForm();
  const nav = useNavigate();
  const onSubmit = (data) => {if(data.p == false && data.t==true){
    nav("/masodik")
  }else{
    nav("/")
  }}

  return (
    <div className="bg-blue-600 m-0 relative w-full h-screen">
      <div className="flex flex-col absolute inset-1/2 h-fit w-fit -translate-x-1/2 -translate-y-1/2 items-center">
        <h1 className="font-bold text-3xl m-6">Készen állsz?</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <div className="flex gap-2">
            <div className="flex-col flex gap-2">
              <Checkbox label="p" text="igen" register={register} />
              <Checkbox label="t" text="nem" register={register} />
            </div>
          </div>

          <input
            className="h-12 bg-slate-500 border-2 border-black p-2 cursor-pointer "
            type="submit"
            value="Tovább"
          />
        </form>
      </div>
    </div>
  );
}

export default Quiz_0;
