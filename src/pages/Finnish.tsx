import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import Checkbox from "../components/checkbox";

function Finnish() {
  return (
    <div className="bg-blue-600 m-0 relative w-full h-screen">
      <div className="flex flex-col absolute inset-1/2 h-fit w-fit -translate-x-1/2 -translate-y-1/2 items-center ">
        <h1 className="font-bold text-3xl m-6 w-96">Köszi szépen hogy játszottál velem </h1>
        <p className="font-bold text-xl m-6">Fényképezd le a szöveget és küld el andrejnak hogy átvedd az ajandékod</p>
      </div>
    </div>
  );
}

export default Finnish;
