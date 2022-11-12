import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import andrej from "../media/andrej.jpg";
import kokeny from "../media/kokeny.jpg";
import homelander from "../media/homelander.jpg";
import patrik from "../media/patrik.jpg";
import Checkbox from "../components/checkbox";
import { useNavigate } from "react-router-dom";

function Quiz_7() {
  const { register, handleSubmit } = useForm();
  const nav = useNavigate();
  const onSubmit = (data) => {
    if (
      data.a == true &&
      data.b == false &&
      data.c == false &&
      data.d == false &&
      data.e == false &&
      data.f == false
    ) {
      nav("/vege");
    } else {
      nav("/");
    }
  };

  return (
    <div className="bg-blue-600 m-0 relative w-full h-screen">
      <div className="flex flex-col absolute inset-1/2 h-fit w-fit -translate-x-1/2 -translate-y-1/2 items-center">
        <h1 className="font-bold text-3xl m-6">Hány kérdés maradt még</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <div className="flex gap-2">
            <div className="flex-col flex gap-2">
              <Checkbox label="a" text="remékem hogy 1" register={register} />
              <Checkbox
                label="b"
                text="sok mert egy geci vagyok"
                register={register}
              />
              <Checkbox
                label="c"
                text="ez volt az utolsó"
                register={register}
              />
            </div>
            <div className="flex-col flex gap-2">
              <Checkbox label="d" text="12" register={register} />
              <Checkbox label="e" text="tényleg 12" register={register} />
              <Checkbox label="f" text="vagy mégsem?" register={register} />
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

export default Quiz_7;
