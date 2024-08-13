import React from "react";
import { Form, Button } from "react-bootstrap";
import './Style.css'
import { Link,useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import SMITLogo from '../assets/smit.png'
function SignIn() {
  const navigator = useNavigate()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = data =>{
    console.log(data)
    reset();
    navigator('/home')
    
  }
  return (
    <div className="signin-container flex-col gap-3" >
      <img src={SMITLogo}/>
      <span className="text-gray-600">Teacher Portal</span>
        <div className="content min-w-[300px] sm:w-[500px]  gap-3">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="font-mono">Email address</Form.Label>
          <Form.Control 
           type="email"
           {...register('email', {
             required: 'Email is required',
             pattern: {
               value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
               message: 'Invalid email address'
             }
           })}
           placeholder="Enter email" />
                   {errors.email && <p className="text-danger pt-1">{errors.email.message}</p>}

          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="font-mono">Password</Form.Label>
          <Form.Control 
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long",
            },
            
          })}
           type="password" placeholder="Password" />
            {errors.password && <p className="text-danger pt-1">{errors.password.message}</p>}
        </Form.Group>
        <div className="">
            <div>
        <Button className="nunito flex justify-center items-center gap-4 w-full select-none rounded-lg h-10 bg-custom-blue py-1 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 " variant="primary" type="submit">
          Sign In
        </Button>
                
            </div>
            
        </div>
      </Form>
      </div>

    </div>
  );
}

export default SignIn;
