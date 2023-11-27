import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
// 
import { useParams } from 'react-router-dom';
import axios from 'axios'


const UpdateModal = () => {
    const [show, setShow] = useState(false);
    const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [profession,setProfession] = useState('');
  const [gender,setGender] = useState('');
  const {userId} = useParams();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    let getData = async () => {
        try {
        //   setIsLoading(true);
    
          let dataGotten = await axios.get(
            `http://localhost:8080/api/user/${userId}`
          );
          console.log(dataGotten.data.user);
        //   setData(dataGotten.data.user);
        setEmail(dataGotten.data.user.email)
        setName(dataGotten.data.user.name)
        setProfession(dataGotten.data.user.profession)
        setGender(dataGotten.data.user.gender)
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      };
      useEffect(()=>{
        getData();
     },[userId]);

  return (
    <>
    <Button variant="primary" onClick={handleShow}>
     Update
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Update</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput
          " className='fw-bold'>Name:</Form.Label>
        <Form.Control id="disabledTextInput" placeholder="type a name"
        value={name}
        onChange={(e)=>setName(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput
          " className='fw-bold'>Email:</Form.Label>
        <Form.Control id="disabledTextInput" placeholder="type an email" 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput
          " className='fw-bold'>Profession:</Form.Label>
        <Form.Control id="disabledTextInput" placeholder="type in a profession"
        value={profession}
        onChange={(e)=>setProfession(e.target.value)} />
        </Form.Group>
        {/* select an option */}
        <Form.Group className="mb-3 fw-bold">
          <Form.Label htmlFor="disabledSelect">Gender</Form.Label>
          <Form.Select id="disabledSelect" value={gender}
          onChange={(e)=>setGender(e.target.value)}>
            <option>----</option>
            <option value='male'>male</option>
            <option value='female'>female</option>
          </Form.Select>
        </Form.Group>
          
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Update
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  )
}

export default UpdateModal