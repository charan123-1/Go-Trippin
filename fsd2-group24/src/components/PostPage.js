import React, { useState} from 'react';
import { DragAndDrop } from './DragAndDrop';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Preview } from './Preview';

import "./PostPage.css"
function PostPage() {
    const [files, setFiles] = useState("");
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