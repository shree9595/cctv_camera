import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import FileUpload from "./file-upload.component";

const PopForm = () => {

    const [newUserInfo, setNewUserInfo] = useState({
        profileImages: []
    });
    const updateUploadedFiles = (files) =>
        setNewUserInfo({ ...newUserInfo, profileImages: files });

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <FileUpload
                accept=".jpg,.png,.jpeg"
                label="Profile Image(s)"
                multiple
                updateFilesCb={updateUploadedFiles}
            />

        </form>

    );
};

export default function App() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (
        <>
            <div>
                <Button variant="primary" onClick={handleShow}>
                    Upload
                </Button>

            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Upload Photo</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <PopForm />
                </Modal.Body>

            </Modal>

        </>
    );
}