import React, { Component } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
import "../../assets/css/TextEditor.css";

const state = {
    module: {
        toolbar: [
            [{ font: [] }],
            [{ size: ["small", false, "large", "huge"] }],
            ["bold", "italic", "underline"],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ align: [] }],
            [{ color: [] }, { background: [] }],
            ["clean"],
        ],
    },

    formats: [
        "font",
        "size",
        "bold",
        "italic",
        "underline",
        "list",
        "bullet",
        "align",
        "color",
        "background",
    ],
};

const rteChange = (content, delta, source, editor) => {
    editor.getText();
};

const TextEditor = ({ value, onChange }) => {
    return (
        <div className="react-quill-container">
            <ReactQuill
                className="textEditor-react-quill"
                theme="snow"
                modules={state.module}
                formats={state.formats}
                value={value}
                onChange={rteChange}
            />
        </div>
    );
};

export default TextEditor;
