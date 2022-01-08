// import React from 'react';
// import './DragAndDropCSS.css'

// const DragAndDrop = () => {


//     const dragOver = (e) => {
//         e.preventDefault();
//     }

//     const dragEnter = (e) => {
//         e.preventDefault();
//     }

//     const dragLeave = (e) => {
//         e.preventDefault();
//     }

//     const fileDrop = (e) => {
//         e.preventDefault();
//         const files = e.dataTransfer.files;
//         console.log(files);
//     }

//     return (
//         <>
//             <div className="container-d">
//                 <div className="drop-container"
//                     onDragOver={dragOver}
//                     onDragEnter={dragEnter}
//                     onDragLeave={dragLeave}
//                     onDrop={fileDrop}
//                 >


//                     <div className="drop-message">
//                         <div className="upload-icon"></div>
//                         Drag and Drop files here or click to upload
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }
// export default DragAndDrop;
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
        // e.preventDefault();

        // const data = new FormData();

        // for (let i = 0; i < files.length; i++) {
        //     data.append('file', files[i]);
        // }

        // axios.post('http://localhost:5000/upload', data)
        //     .then((response) => {
        //         toast.success('Upload Success');
        //         onSuccess(response.data)
        //     })
        //     .catch((e) => {
        //         toast.error('Upload Error')
        //     })
        // to add bucketlist into json api
            e.preventDefault();
            var data = {
                'id': Math.floor(Math.random() * 10000),
                'image': "./images/"+files
            };
        axios.post('http://localhost:5000/upload', data).then((response) => {
                toast.success('Upload Success');
                onSuccess(response.data)
            })
            setFiles([]);
    };

    return (
        <form method="post" action="#" id="#" onSubmit={onSubmit}>
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