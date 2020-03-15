import React from "react"
import { connect } from "react-redux"
import * as action from "../../../redux/action"
import UserAvatar from "react-user-avatar"
// import image from "../../../assets/img/post-sample-image.jpg"
import { GetBlog } from "../../../services/blog/blog"
import { convertToDate } from "../../../utils"

function PostPage(props) {
    const { content, createDate, readTime, loadHeader, loadMeta, loadContent } = props;

    GetBlog(3).then(res => {
        const blog = res.data.blog
        console.log(blog)

        loadHeader(blog.background, blog.header, blog.subtitle)

        const createDate = convertToDate(blog.createTime)
        loadMeta(createDate, blog.readTime)

        loadContent(blog.content)
    }).catch(err => {
        console.log(err)
    })

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                    <div className="post-author">
                        <UserAvatar size="65" name="Denny M. Harris" />
                        <div className="post-author-desc">
                            <div className="post-author-name">Denny M. Harris</div>
                            <div className="post-author-time">
                                <a href="/">{createDate}</a> . {readTime} min read
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto" style={{ marginTop: '12px' }}>
                    <article dangerouslySetInnerHTML={{
                        __html: content
                    }}>
                    </article>
                </div>
            </div>
        </div>

    )
}

const mapState = state => {
    return {
        content: state.postContent,
        createDate: state.createDate,
        readTime: state.readTime,
    }
}

const mapDispath = dispatch => {
    return {
        loadHeader: (background, head, sub) => dispatch(action.loadHeader(background, head, sub)),
        loadMeta: (createTime, readTime) => dispatch(action.loadMeta(createTime, readTime)),
        loadContent: (content) => dispatch(action.loadContent(content))
    }
}

export default connect(mapState, mapDispath)(PostPage)
