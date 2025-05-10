import { Button, Input } from "antd";
import { UserCircle, User, KeyRound } from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import ImgRegister from "../../../assets/img/barber-lamp.jpg";
import ImgLoginInputs from "../../../assets/img/barber-pole.png";
import "../auth.css";
import { useEffect } from "react";

type FormValuesT = {
  username: string;
  password: string;
};

const Register = ({currentSwiper}) => {
  const { control, handleSubmit, reset, clearErrors} = useForm();

  const onSubmit = (data: FormValuesT) => {
    console.log("Esta es la data ==>", data);
  };

  useEffect(() => {
      if(currentSwiper === 'register'){
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
        <div className=" h-[100%] md:w-[50%] flex justify-center items-center">
          <div className="b-bg-iron  md:h-[90%] w-[100%] p-5 rounded-xl flex flex-col justify-center items-center">
            <div className="h-[60px] w-[60px] b-bg-navy rounded-full flex justify-center items-center mb-5 py-1">
              <img src={ImgLoginInputs} alt="" className="" />
            </div>
            <form
              action=""
              onSubmit={handleSubmit((data) => onSubmit(data as FormValuesT))}
              className="w-[80%] max-w-[350px]"
            >
              <div className="inputs-container">
                <Controller
                  name="name"
                  control={control}
                  defaultValue={""}
                  rules={{ required: true }}
                  render={({ field, fieldState }) => {
                    return (
                      <>
                        <Input
                          {...field}
                          size="large"
                          placeholder="Ingrese su nombre"
                          prefix={<User className="b-stroke-orange" />}
                        />
                        {fieldState.error && (
                          <p className="b-text-leather font-bold w-[80%] mx-auto text-sm rounded-md">
                            {fieldState.error?.type === "required" &&  'Nombre obligatorio'}
                          </p>
                        )}
                      </>
                    );
                  }}
                />
              </div>

              <div className="inputs-container">
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
                          placeholder="Su nombre de usuario"
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

              <div className="inputs-container">
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
                          placeholder="Ingrese su nueva contraseña"
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


              <div className="inputs-container">
                <Controller
                  name="email"
                  control={control}
                  defaultValue={""}
                  rules={{ required: true, validate: (value) => {return value.includes('@') && value.includes('.com') }}}   
                  render={({ field, fieldState }) => {
                    return (
                      <>
                        <Input
                          {...field}
                          size="large"
                          placeholder="Ingrese su correo electrónico"
                          prefix={<KeyRound className="b-stroke-orange" />}
                        />
                        {fieldState.error && (
                          <p className="b-text-leather font-bold w-[80%] mx-auto text-sm rounded-md">
                            {fieldState.error?.type === "required" &&  'Correo electrónico requerido'}
                            {fieldState.error?.type === "validate" && 'Asegurate de ingresar un correo electrónico válido'}
                          </p>
                        )}
                      </>
                    );
                  }}
                />
              </div>


              <div className="text-center">
                <Button htmlType="submit" ghost className="font-bold">
                  Registrame
                </Button>
              </div>
            </form>
          </div>
        </div>
        <div className="hidden md:flex h-[20%]  md:h-[100%] md:w-[50%] flex justify-center items-center">
          <div className="b-bg-iron h-[90%] w-[100%] rounded-xl flex flex-col justify-center items-center">
            <img src={ImgRegister} alt="barber login img" className="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
