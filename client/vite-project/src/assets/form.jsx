import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useCallback, useState } from "react";
import axios from "axios"
import { data } from "autoprefixer";

const useYupValidationResolver = validationSchema =>
  useCallback(
    async data => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false
        });
        return {
          values,
          errors: {}
        };
      } catch (errors) {
        return {
          values: {},
          errors: errors.inner.reduce(
            (allErrors, currentError) => ({
              ...allErrors,
              [currentError.path]: {
                type: currentError.type ?? "validation",
                message: currentError.message
              }
            }),
            {}
          )
        };
      }
    },
    [validationSchema]
  );
 
//   const getLog =()=>{

// //    const response  =  axios.get ("https://official-joke-api.appspot.com/random/joke")
// //    .then((response)=>{
// //          console.log(response);
// //      } 
// //     )
// //     return response.data;
// // }
// const [joke,setJoke]=useState("")
// const response  =  fetch("https://official-joke-api.appspot.com/random/joke")
//    .then((response)=>{
//          (response.json()).then((data)=>{
//             setJoke(data.setUp+""+data.punchLine)
//          });
//      } 
//     )
//   }

export const Form = () => {
  const schema = yup.object().shape({
    fullname: yup
      .string()
      .required("Full name is required")
      .min(5, "Full name must be at least 5 characters"),
    Email: yup.string().email().required("Email is required"),
    Age: yup.number().positive().integer().min(18).required("Age is required"),
    password: yup.string().min(4).max(20).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });
  const resolver = useYupValidationResolver(schema);
  const { register, handleSubmit,  formState: { errors } } = useForm({
    resolver: resolver,
    // resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  
  return (
  
    <form onSubmit={
        handleSubmit(onSubmit)
        // getLog()
         }className="flex flex-col items-center justify-items-center space-y-3  relative inset-11  rounded-lg border-2 border-black w-60 m-auto " >
      <input className="block"  type="text" placeholder="Full name.." {...register("fullname")} />
      <p className="text-red-600">{errors.fullname?.message}</p>
      <input className="block"  type="text" placeholder="Email..." {...register("Email")} />
      <p className="text-red-600">{errors.Email?.message}</p>
      <input className="block"  type="number " placeholder="Age..." {...register("Age")} />
      <p className="text-red-600">{errors.Age?.message}</p>
      <input className="block" 
        type="password"
        placeholder="password..."
        {...register("password")}
      />
      <p className="text-red-600">{errors.password?.message}</p>
      <input  className="block"
        type="password"
        placeholder="confirm password..."
        {...register("confirmPassword")}
      />  
      <p className="text-red-600">{errors.confirmPassword?.message}</p>
      <input className="block m-auto "  type="submit"  />
      {/* <div>
        {joke}
      </div> */}
    </form>
    
  );
};
