import React, { Component } from 'react'
import { connect } from 'react-redux'
import Form from '../component/Form'
import { setEvent } from '../action';

class FormContainer extends Component {

    render() {
        const { loading, navigate } = this.props;
        return (
            <>
                <Form
                    addData={this.addData}
                />
                {!loading && navigate && this.navigate()}
            </>
        )
    }

    addData = (event) => {
        this.props.setEvent(event);
    }

    navigate = () => {
        this.props.history.push('/events');
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.events.setEventLoading,
        navigate: state.events.navigate,
    }
}

const mapDispatchToProps = (dispatch) => ({
    setEvent: (event) => dispatch(setEvent(event)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer)
