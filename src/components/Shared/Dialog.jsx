import React,{useEffect,useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useSelector,useDispatch} from "react-redux";
import { showDialog,closeDialog } from "../../redux/features/dialog";

function SuccessMssg() {
    const dialog = useSelector((state)=>state.dialog.show);
    const heading = useSelector((state)=>state.dialog.heading);
    const message = useSelector((state=>state.dialog.message));
    const dispatch = useDispatch();
  
    useEffect(() => {
      //
    }, [])
    const hideChange = ()=>{
        dispatch(closeDialog());
    }

  return (
    <Modal show={dialog} >
    <Modal.Header  closeButton  onHide={hideChange} >
      <Modal.Title>{heading}</Modal.Title>
    </Modal.Header>
    <Modal.Body>{message}</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary"  onClick={hideChange} >
        Close
      </Button>
    </Modal.Footer>
  </Modal>
  )
}

export default SuccessMssg