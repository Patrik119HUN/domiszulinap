import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import andrej from "../media/andrej.jpg";
import kokeny from "../media/kokeny.jpg";
import homelander from "../media/homelander.jpg";
import patrik from "../media/patrik.jpg";
import Checkbox from "../components/checkbox";
import { useNavigate } from "react-router-dom";

function Quiz_6() {
  const { register, handleSubmit } = useForm();
  const nav = useNavigate();
  const onSubmit = (data) => {
    if (
      data.a == true &&
      data.b == false &&
      data.c == false &&
      data.d == true &&
      data.e == false &&
      data.f == false &&
      data.g == false &&
      data.h == false &&
      data.i == false
    ) {
      nav("/remelem_1");
    } else {
      nav("/");
    }
  };

  return (
    <div className="bg-blue-600 m-0 relative w-full h-screen">
      <div className="flex flex-col absolute inset-1/2 h-fit w-fit -translate-x-1/2 -translate-y-1/2 items-center">
        <h1 className="font-bold text-3xl m-6">Ez hanyadik kérdés?</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <div className="flex gap-2">
            <div className="flex-col flex gap-2">
              <Checkbox label="a" text="8" register={register} />
              <Checkbox label="b" text="9" register={register} />
              <Checkbox label="c" text="2" register={register} />
            </div>
            <div className="flex-col flex gap-2">
              <Checkbox label="d" text="4+4" register={register} />
              <Checkbox label="e" text="7" register={register} />
              <Checkbox
                label="f"
                text="még csak most kezdtukxd"
                register={register}
              />
            </div>
            <div className="flex-col flex gap-2">
              <Checkbox label="g" text="hagyjamal" register={register} />
              <Checkbox label="h" text="miért" register={register} />
              <Checkbox
                label="i"
                text="csinálod ezt velem"
                register={register}
              />
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

export default Quiz_6;
