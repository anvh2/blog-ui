import React from "react"
import UserAvatar from "react-user-avatar"
import * as action from "../../../redux/action"
import { connect } from "react-redux"
import background from "../../../assets/img/about-bg.jpg"

function AboutPage(props) {
    const { loadHeader } = props
    loadHeader(background, "About Me", "This is what I do")
    console.log(typeof background)

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                    <div className="post-author">
                        <UserAvatar size="65" name="Hoang An" />
                        <div className="post-author-desc">
                            <div className="post-author-name">Hoang An</div>
                            <div className="post-author-time">
                                Feb 29, 2020 . 1 min read
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                    <p>Hi All,</p>
                    <p>
                        I'm An - live in HCMC, Vietnam. I'm studying for a Bachelor of Infomation Technology at the University of Science HCM and
                        now working at VNG.</p>
                    <p>
                        My purpose for building this website in order to store the knowledge that I have learned and shared it with those who care about it.
                        Please note that this website is under development, so let send to my email <a href="mailto: anvo.ht209@gmail.com">anvo.ht209@gmail.com</a> if you have any suggestions or discorver errors.
                    </p>
                    <p>Thanks for your interest and see you in my next blog!</p>
                </div>
            </div>
        </div>
    )
}

const mapState = state => {
    return {}
}

const mapDispatch = dispatch => {
    return {
        loadHeader: (background, head, sub) => dispatch(action.loadHeader(background, head, sub))
    }
}

export default connect(mapState, mapDispatch)(AboutPage)
