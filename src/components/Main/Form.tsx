import { useState } from "react";
import { type FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router";

import { getUser } from "../../services/user.service";
import Spinner from "../Global/Spinner";
import ErrorToast from "./ErrorToast";

function Form() {
  const navigate = useNavigate();
  const [didNotFound, setDidNotFound] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
  } = useForm();

  // Api user request
  async function onSubmit(data: FieldValues) {
    console.log(data);
    try {
      await getUser({ username: data.userName });
      navigate(`/user/${data.userName}`);
    } catch (error) {
      setDidNotFound(true);
      console.log(error);
    }
  }

  return (
    <>
      {isSubmitting ? (
        <Spinner />
      ) : (
        <div className="flex flex-col items-center justify-center gap-9">
          {didNotFound ? (
            <ErrorToast setDidNotFound={setDidNotFound} />
          ) : (
            <h1 className="montserrat h-21 text-[40px] font-bold">Entrar</h1>
          )}
          <form
            className="flex flex-col items-center justify-center gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col items-start gap-1.25">
              <label
                htmlFor="userName"
                className="montserrat text-[15px] font-normal"
              >
                Usuário
              </label>
              <input
                type="text"
                id="userName"
                placeholder="Digite aqui seu usuário do GitHub"
                className="border-form-border text-shadow-form-border montserrat focus:outline-form-border h-10.25 w-79.5 appearance-none rounded-[3px] border border-solid p-3 font-normal hover:bg-gray-100 focus:outline"
                {...register("userName", {
                  required: "Insira nome de usuário",
                })}
              />
              {/* Inline error for unfilled field */}
              <div className="flex h-5.25 items-baseline">
                {errors.name && (
                  <p className="font-error-message text-[14px] text-red-400">
                    {errors.userName?.message as string}
                  </p>
                )}
              </div>
            </div>
            <button
              type="submit"
              className="bg-wtech-blue h-10.75 w-79.5 rounded-[5px] text-[15px] font-bold text-white [transition:all_ease_0.1s] hover:transform-[scale(1.02)] hover:cursor-pointer active:transform-[scale(1)]"
            >
              Entrar
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default Form;
