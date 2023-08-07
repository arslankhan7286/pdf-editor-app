import React, { useState } from 'react';
import PDFViewer from './PDFViewer';
import { toast } from 'react-toastify';

const FileUpload = ({ token }) => {
    const [file, setFile] = useState(null);
    const [uploadedfile, setUploadedFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleFileUpload = () => {
        if (file) {
            const allowedExtensions = ['.pdf', '.doc', '.docx'];
            const fileExtension = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();

            if (allowedExtensions.includes(fileExtension)) {
                const formData = new FormData();
                formData.append('token', token);
                formData.append('file', file);

                fetch(process.env.REACT_APP_API_UPLOAD_URL, {
                    method: 'POST',
                    body: formData,
                })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log('file =>', data.message);
                        setUploadedFile(data.filename);
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    });
            } else {
                toast.error('Invalid file format. Only PDF, .doc, and .docx files are allowed.')
            }
        }
    };

    return (
        <div className='main-file'>
            {!uploadedfile ? (
                <div className='upload-file'>
                    <label>Upload File</label>
                    <div className='form'>
                        <input type="file" onChange={handleFileChange} />
                        <button onClick={handleFileUpload}>Upload</button>
                    </div>
                </div>
            ) : (
                <PDFViewer filename={uploadedfile} />
            )}
        </div>

    )
};

export default FileUpload;
