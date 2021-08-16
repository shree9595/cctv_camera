import React, { useRef, useState } from "react";
import {
  FileUploadContainer,
  FormField,
  FilePreviewContainer,
  ImagePreview,
  PreviewContainer,
  PreviewList,
} from "./file-upload.styles";

const FileUpload = ({
  label,
  ...otherProps
}) => {
  const fileInputField = useRef(null);
  const [files, setFiles] = useState({});

  console.log(files);
  const handleUploadBtnClick = () => {
    fileInputField.current.click();
  };

  const addNewFiles = (newFiles) => {
    for (let file of newFiles) {
      files[file.name] = file;
    }
    return { ...files };
  };

  const handleNewFileUpload = (e) => {
    const { files: newFiles } = e.target;
    console.log("mwoko", files);
    if (newFiles.length) {
      let updatedFiles = addNewFiles(newFiles);
      setFiles(updatedFiles);

    }
  };

  return (
    <>
      <FileUploadContainer>
        <h4>Drag and drop photo anywhere or</h4>
        <button onClick={handleUploadBtnClick}>

          <span> Upload Photo</span>
        </button>
        <FormField
          type="file"
          ref={fileInputField}
          onChange={handleNewFileUpload}
          title=""
          value=""
          {...otherProps}
        />
      </FileUploadContainer>
      <FilePreviewContainer>
        <span>To Upload</span>
        <PreviewList>
          {Object.keys(files).map((fileName, index) => {
            let file = files[fileName];
            return (
              <PreviewContainer key={fileName}>
                <div>
                  {(
                    <ImagePreview
                      src={URL.createObjectURL(file)}
                      alt={`file preview ${index}`}
                    />
                  )}

                </div>
              </PreviewContainer>
            );
          })}
        </PreviewList>
      </FilePreviewContainer>
    </>
  );
};

export default FileUpload;
