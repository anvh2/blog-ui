import React from "react"
import { connect } from 'react-redux';

function PostHeader(props) {
    const { background, header, sub, author, time } = props;

    return (
        <header className="masthead" style={{ backgroundImage: `url(${background})` }}>
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <div className="post-heading">
                            <h1>{header}</h1>
                            <h2 className="subheading">{sub}</h2>
                            <span className="meta">Posted by
                                <a href="#">{author}</a>
                                {time}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

const mapStateToProps = state => {
    return {
        background: state.headerBg,
        header: state.headerTitle,
        sub: state.headerSub,
        author: state.postAuhtor,
        time: state.postedTime
    }
}

export default connect(mapStateToProps)(PostHeader)