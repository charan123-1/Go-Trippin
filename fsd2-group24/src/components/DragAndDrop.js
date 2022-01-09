import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

import './DragAndDropCSS.css';

export const DragAndDrop = ({ onSuccess }) => {
    const [files, setFiles] = useState([]);

    const onInputChange = (e) => {
        setFiles(e.target.value)
    };

    const onSubmit = (e) => {

        // to add posts into json api onSubmit
            e.preventDefault();
            var data = {
                'id': Math.floor(Math.random() * 10000),
                'image': "./images/"+files
            };
        axios.post('http://localhost:5000/upload', data).then((response) => {
                toast.success('Upload Success'); //using toast library to show message
                onSuccess(response.data)
            })
            setFiles([]);
    };

    return (
        <form method="post" action="#" id="#" onSubmit={onSubmit}>
            {/* Input form to upload image as well as drag and drop the image */}
            <div className="form-group files">
                <h2 className='drop-h2'>Post Photos </h2>
                <input type="file"
                    value={files}
                    onChange={onInputChange}
                    className="form-control"
                    multiple />
            </div>

            <button className='drop-button'>Submit</button>
        </form>
    )
};