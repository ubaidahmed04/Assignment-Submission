import React from 'react';
import { useForm } from 'react-hook-form';
import { Modal, Button, Form } from 'react-bootstrap';

const CustomFormModal = (props) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Handle form data
    props.onHide(); // Close the modal after submission
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create Classroom
        </Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Body>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              {...register('name', { required: 'Name is required' })}
              isInvalid={errors.name}
            />
            <Form.Control.Feedback type="invalid">
              {errors.name?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formCourse" className="mt-3">
            <Form.Label>Course</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter course name"
              {...register('course', { required: 'Course is required' })}
              isInvalid={errors.course}
            />
            <Form.Control.Feedback type="invalid">
              {errors.course?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formBatch" className="mt-3">
            <Form.Label>Batch</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter batch"
              {...register('batch', { required: 'Batch is required' })}
              isInvalid={errors.batch}
            />
            <Form.Control.Feedback type="invalid">
              {errors.batch?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formTiming" className="mt-3">
            <Form.Label>Timing</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter timing"
              {...register('timing', { required: 'Timing is required' })}
              isInvalid={errors.timing}
            />
            <Form.Control.Feedback type="invalid">
              {errors.timing?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>Close</Button>
          <Button type="submit" variant="primary">Submit</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default CustomFormModal;
