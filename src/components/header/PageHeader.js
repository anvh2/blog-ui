import React from "react"
import { connect } from 'react-redux';

function PageHeader(props) {
    const { background, header, sub } = props;
    console.log(background)

    return (
        <header class="masthead" style={{ backgroundImage: `url(${background})` }}>
            <div class="overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-10 mx-auto">
                        <div class="page-heading">
                            <h1>{header}</h1>
                            <span class="subheading">{sub}</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

const mapStateToProps = state => {
    return {
        background: state.pageBG,
        header: state.pageHeader,
        sub: state.pageSub,
    }
}

export default connect(mapStateToProps)(PageHeader)