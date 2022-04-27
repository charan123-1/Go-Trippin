import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

import './DragAndDropCSS.css';

export const DragAndDrop = ({ onSuccess }) => {
    const [files, setFiles] = useState("");

    const onInputChange = (e) => {
        setFiles(e.target.files[0])
    };

    const onSubmit = (e) => {

        // to add posts into backend onSubmit
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', files)
        axios.post('http://localhost:4000/upload/', formData).then((response) => {
            console.log(response.data)

        }).catch(err => {
            console.log(err)
        })
        setFiles("");
        toast.success('Upload Success');//using toast library to show message
    };

    return (
        <form onSubmit={onSubmit} encType='multipart/form-data' >
            {/* Input form to upload image as well as drag and drop the image */}
            <div className="form-group files">
                <h2 className='drop-h2'>Post Photos </h2>
                <input type="file"
                    name ="image"
                    onChange={onInputChange}
                    className="form-control"
                    />
            </div>

            <button className='drop-button'>Submit</button>
        </form>
    )
};