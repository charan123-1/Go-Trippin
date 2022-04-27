import React, { useState} from 'react';
import { DragAndDrop } from './DragAndDrop';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Preview } from './Preview';

import "./PostPage.css"
function PostPage() {
    //First assigining all the files variable as empty
    const [files, setFiles] = useState("");
    //After Drag and dropping the images, we are saving the images in the setFiles
    const onSuccess = (savedFiles) => {
        setFiles(savedFiles)
    };
    return (
        <div className="drop">
            <DragAndDrop onSuccess={onSuccess} />
            <Preview files={files} />
            <ToastContainer />
        </div>
    );
}
export default PostPage