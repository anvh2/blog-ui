import React from 'react';
import { connect } from "react-redux"
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
// import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { CreateBlog } from '../../../services/blog/blog';
import * as action from "../../../redux/action"
import { estimateReadTime } from '../../../utils';

function onClickSubmit(e, blog) {
    CreateBlog(blog).then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })
}

function EditorPage(props) {
    var { headerTitle, headerSub, headerBg, editorContent, handleChangeEditor } = props;
    if (editorContent == null) {
        editorContent = EditorState.createEmpty()
    }

    return (
        <div className="container">
            <Editor
                editorState={editorContent}
                onEditorStateChange={handleChangeEditor}
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
            />
            <textarea
                id="contentHTML"
                name="contentHTML"
                className="content-html"
                disabled
                value={draftToHtml(convertToRaw(editorContent.getCurrentContent()))}
            />
            <button className="submit-button" onClick={(e) => onClickSubmit(e, {
                header: headerTitle,
                subtitle: headerSub,
                background: headerBg,
                content: draftToHtml(convertToRaw(editorContent.getCurrentContent())),
                readTime: estimateReadTime(editorContent.getCurrentContent())
            })}>
                <span>Submit</span>
            </button>
        </div>
    );
}


const mapState = state => {
    return {
        headerTitle: state.headerTitle,
        headerSub: state.headerSub,
        headerBg: state.headerBg,
        editorContent: state.editorContent,
    }
}

const mapDispath = dispatch => {
    return {
        handleChangeEditor: (editorContent) => dispatch(action.handleChangeEditor(editorContent))
    }
}

export default connect(mapState, mapDispath)(EditorPage)