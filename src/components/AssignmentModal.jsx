import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { FiPlus } from "react-icons/fi";

function ModalForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // Create a FormData object to handle file uploads
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("file", data.file[0]);

    // Log the FormData object for demonstration purposes
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    // Here you can send the formData to your API
    // fetch('/api/upload', {
    //   method: 'POST',
    //   body: formData
    // });

    console.log("Form submitted");
    reset()
    handleClose(); // Close the modal after submission
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button  className='flex items-center btn gap-2 rounded-xl  p-3' onClick={(handleShow)}>
      <FiPlus /> Create
      </Button>

      <Modal className="my-24" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Assignment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <span>
                <select
                  className="form-select"
                  style={{ display: "inline-block"}}
                  {...register("course")}
                >
                  <option value="HTML">HTML</option>
                  <option value="CSS">CSS</option>
                  <option value="JS">JS</option>
                </select>
              </span>
            </div>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                // id="title"
                {...register("title", {
                  required: "Title is required",
                })}
                type="text"
                placeholder="Add title..."
                autoFocus
              />
              {errors.title && <p className="text-danger  pt-1  ">{errors.title.message}</p>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Time Duration</Form.Label>
              <Form.Control
                // id="title"
                {...register("time", {
                  required: "Time is required",
                })}
                type="date"
                placeholder="Add Time..."
                autoFocus
              />
              {errors.title && <p className="text-danger  pt-1  ">{errors.title.message}</p>}
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                // id="description"
                {...register("description", {
                  required: "Description is required",
                })}
                as="textarea"
                rows={3}
                className="resize-none"
              />
              {errors.description && <p className="text-danger  pt-1  ">{errors.description.message}</p>}
            </Form.Group>
            <Form.Group  className="mb-3">
              <Form.Label>Choose File</Form.Label>
              <Form.Control
                type="file"
                size="md"
                {...register("file")}
              />
              {/* {errors.file && <p>{errors.file.message}</p>} */}
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                Save Changes
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalForm;
