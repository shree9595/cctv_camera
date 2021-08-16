import React, { useState } from 'react'
import FileUpload from './file-upload.component';


function UploadFile() {
    const [newUserInfo, setNewUserInfo] = useState({
        profileImages: []
    });


    const updateUploadedFiles = (files) =>
        setNewUserInfo({ ...newUserInfo, profileImages: files });

    const handleSubmit = (event) => {
        event.preventDefault();
        //logic to create new user...
    };

  

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <FileUpload
                    accept=".jpg,.png,.jpeg"
                    label="Profile Image(s)"
                    multiple
                    updateFilesCb={updateUploadedFiles}
                />
                <button type="submit">Upload</button>
            </form>

        </div>
    )
}

export default UploadFile
