import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import andrej from "../media/andrej.jpg";
import kokeny from "../media/kokeny.jpg";
import homelander from "../media/homelander.jpg";
import patrik from "../media/patrik.jpg";
import Checkbox from "../components/checkbox";
import { useNavigate } from "react-router-dom";

function Quiz_5() {
  const { register, handleSubmit } = useForm();
  const nav = useNavigate();
  const onSubmit = (data) => {if(data.p == true && data.t==true && data.a ==true && data.c==true){
    nav("/segitek_8")
  }else{
    nav("/")
  }}

  return (
    <div className="bg-blue-600 m-0 relative w-full h-screen">
      <div className="flex flex-col absolute inset-1/2 h-fit w-fit -translate-x-1/2 -translate-y-1/2 items-center">
        <h1 className="font-bold text-3xl m-6">Ki ölné meg a Többieket? (SUS)</h1>
        <div className="flex gap-2 h-96 ">
            <div><img src={andrej} alt="" /><h1>Some weak ass dude</h1></div>
            <div><img src={homelander} alt="" /><h1>Cosplayer dude</h1></div>
            <div><img src={kokeny} alt="" /><h1>lil dud</h1></div>
            <div><img src={patrik} alt="" /><h1>ass dude</h1></div>
        </div>
        <h1 className="font-bold text-2xl m-6">több válasz is lehetséges</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <div className="flex gap-2">
            <div className="flex-col flex gap-2">
              <Checkbox label="p" text="bajszos dude" register={register} />
              <Checkbox label="t" text="koszpéj dud" register={register} />
            </div>
            <div className="flex-col flex gap-2">
              <Checkbox label="a" text="lil dud" register={register} />
              <Checkbox label="c" text="cameraman" register={register} />
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

export default Quiz_5;
