import React from "react";
import { Form, Button } from "react-bootstrap";
import './Style.css'
function SignIn() {
  return (
    <div className="signin-container" >
        <div className="content">

      <Form>
        <h2 className="text-center text-gray-600">SIGN IN</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="font-mono">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="font-mono">Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
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
