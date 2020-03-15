import React from "react"
import * as action from "../../../redux/action"
import { connect } from "react-redux"
import background from "../../../assets/img/home-bg.jpg"
import thumnail from "../../../assets/img/post-bg.jpg"

function HomePage(props) {
    const { loadHeader } = props
    loadHeader(background, "Tech Blog", "A Blog of Tech Skill")

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                    <div className="post-preview">
                        <a href="post">
                            <img src={thumnail} alt="" style={{width:'100%'}}/>
                            <h2 className="post-title">
                                Man must explore, and this is exploration at its greatest
                            </h2>
                            <h3 className="post-subtitle">
                                Problems look mighty small from 150 miles up
                            </h3>
                        </a>
                        <p className="post-meta">Posted by &nbsp;
                            <a href="/"> Denny M. Harris </a>&nbsp;
                            on June 09, 2018
                        </p>
                    </div>
                    <hr />
                    <div className="clearfix">
                        <a className="btn btn-primary float-right" href="/">Next &rarr;</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapState = state => {
    return {}
}

const mapDispath = dispatch => {
    return {
        loadHeader: (background, head, sub) => dispatch(action.loadHeader(background, head, sub))
    }
}

export default connect(mapState, mapDispath)(HomePage)