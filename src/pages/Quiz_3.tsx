import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import pati from "../media/pati.jpg";
import Checkbox from "../components/checkbox";
import { useNavigate } from "react-router-dom";

function Quiz_3() {
  const { register, handleSubmit } = useForm();
  const nav = useNavigate();
  const onSubmit = (data) => {if(data.p == false && data.t==true && data.a ==false && data.c==false){
    nav("/sokadik")
  }else{
    nav("/")
  }}

  return (
    <div className="bg-blue-600 m-0 relative w-full h-screen">
      <div className="flex flex-col absolute inset-1/2 h-fit w-fit -translate-x-1/2 -translate-y-1/2 items-center">
        <h1 className="font-bold text-3xl">Ki van a képen?</h1>
        <img src={pati} className="aspect-square w-1/2 m-2" alt="" />

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <div className="flex gap-2">
            <div className="flex-col flex gap-2">
              <Checkbox label="p" text="Andrej" register={register}  />
              <Checkbox label="t" text="Pati" register={register}  />
            </div>
            <div className="flex-col flex gap-2">
              <Checkbox label="a" text="Domi" register={register}  />
              <Checkbox label="c" text="Zsani" register={register}  />
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

export default Quiz_3;
