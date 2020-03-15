import React from "react"
import * as action from "../../redux/action"
import { connect } from 'react-redux';
import { UploadImage } from "../../services/blog/images";

function EditorHeader(props) {
    const { background, changeBg, changeTitle, changeSub } = props;

    return (
        <header className="masthead" style={{ backgroundImage: `url(${background})` }}>
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <div className="post-heading">
                            <textarea
                                type="text" id="header" name="header"
                                className="header" placeholder="This is header"
                                onBlur={(e) => {
                                    const title = e.target.value
                                    if (title === "") {
                                        return
                                    }
                                    changeTitle(title)
                                }} />
                            <textarea
                                type="text" id="sub" name="sub"
                                className="subtitle" placeholder="This is sub-title"
                                onBlur={(e) => {
                                    const sub = e.target.value
                                    if (sub === "") {
                                        return
                                    }
                                    changeSub(sub)
                                }} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="upload-btn-wrapper">
                        <button className="btn">Upload a background</button>
                        <input type="file" name="image" accept="image/*" capture onChange={(e) => {
                            // TODO: should be upload after click submit post
                            const file = e.target.files[0]

                            // TODO: input name must be set in file config
                            let image = new FormData()
                            image.append("image", file)

                            UploadImage(image).then(res => {
                                if (res.data.Code !== 1) {
                                    console.log(res.data.Message)
                                    return
                                }
                                if (res.data.Data !== "") {
                                    changeBg(res.data.Data)
                                } else {
                                    console.log("URL is undefined")
                                }
                            }).catch((err) => {
                                console.log(err)
                            })
                        }} />
                    </div>
                </div>
            </div>
        </header>
    )
}

const mapState = state => {
    return {
        background: state.headerBg,
    }
}

const mapDispatch = dispatch => {
    return {
        changeBg: (background) => dispatch(action.handleChangeBackground(background)),
        changeTitle: (title) => dispatch(action.handleChangeHeaderTitle(title)),
        changeSub: (sub) => dispatch(action.handleChangeHeaderSub(sub))
    }
}

export default connect(mapState, mapDispatch)(EditorHeader)