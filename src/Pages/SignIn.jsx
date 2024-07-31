import React from "react";
import { Form, Button } from "react-bootstrap";
import './Style.css'
import { Link,useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

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
    <div className="signin-container" >
        <div className="content">

      <Form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-center text-gray-600 fw-bold text-2xl">SIGN IN</h2>
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
        <Button className="text-center" variant="primary" type="submit">
          SignIn
        </Button>
                
            </div>
            
        </div>
      </Form>
      </div>

    </div>
  );
}

export default SignIn;
