import { Button, Input } from "antd";
import { UserCircle, KeyRound } from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import ImgLogin from "../../../assets/img/barber.jpg";
import ImgLoginInputs from "../../../assets/img/barber-login.png";
import css from "../auth.module.css";
import {useEffect } from "react";
import { SlideNameT } from "../Auth";

type FormValuesT = {
  username: string;
  password: string;
};

const Login = ({currentSwiper}: {currentSwiper: SlideNameT}) => {
  const { control, handleSubmit, reset, clearErrors } = useForm();

  const onSubmit = (data: FormValuesT) => {
    console.log("Esta es la data ==>", data);
  };

  useEffect(() => {
    if(currentSwiper === "login"){
        reset({
            username: "",
            password: "",
          });
          clearErrors();

    }
  }, [currentSwiper]);

  return (
    <>
      <div className="md:flex h-[85%] md:h-[89%]">
        <div className="h-[20%]  md:h-[100%] md:w-[50%] flex justify-center items-center">
          <div className="b-bg-iron h-[90%] w-[100%] rounded-xl flex flex-col justify-center items-center">
            <img src={ImgLogin} alt="barber login img" className="" />
          </div>
        </div>
        <div className=" h-[80%] md:h-[100%] md:w-[50%] flex justify-center items-center">
          <div className="b-bg-iron h-[90%] w-[100%] p-5 rounded-xl flex flex-col justify-center items-center">
            <div className="h-[60px] w-[60px] b-bg-orange rounded-full flex justify-center items-center mb-5">
              <img src={ImgLoginInputs} alt="" className="" />
            </div>
            <form
              action=""
              onSubmit={handleSubmit((data) => onSubmit(data as FormValuesT))}
              className="w-[80%] max-w-[350px]"
            >
              <div className="mb-3">
                <Controller
                  name="username"
                  control={control}
                  defaultValue={""}
                  rules={{ required: true }}
                  render={({ field, fieldState }) => {
                    return (
                      <>
                        <Input
                          {...field}
                          size="large"
                          placeholder="Usuario"
                          prefix={<UserCircle className="b-stroke-orange" />}
                        />
                        {fieldState.error && (
                          <p className="b-text-leather font-bold w-[80%] mx-auto text-sm rounded-md">
                          {fieldState.error?.type === "required" &&  'Nombre de usuario obligatorio'}
                        </p>
                        )}
                      </>
                    );
                  }}
                />
              </div>

              <div className="mb-3">
                <Controller
                  name="password"
                  control={control}
                  defaultValue={""}
                  rules={{ required: true }}
                  render={({ field, fieldState }) => {
                    return (
                      <>
                        <Input
                          {...field}
                          size="large"
                          placeholder="Contraseña"
                          prefix={<KeyRound className="b-stroke-orange" />}
                        />
                        {fieldState.error && (
                          <p className="b-text-leather font-bold w-[80%] mx-auto text-sm rounded-md">
                          {fieldState.error?.type === "required" &&  'Contraseña obligatoria'}
                        </p>
                        )}
                      </>
                    );
                  }}
                />
              </div>

              <div className="text-center">
              
                <Button htmlType="submit" ghost className="font-bold">
                  Iniciar
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
        
    </>
  );
};

export default Login;
