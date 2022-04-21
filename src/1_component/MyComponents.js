import React, {Component} from "react";
import PropTypes from 'prop-types'

class MyComponents extends Component {
    static prop = {
        name: PropTypes.string
    }

    render() {
        //주석
        const {name, age, company, children} = this.props;
        return (
            <>
                <div>이름 : {name}</div>
                <div>나이 : {age}</div>
                <div>회사 : {company}</div>
                <div>본문 : {children}</div>
            </>
        )
    }
}

export default MyComponents;