import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEvents } from '../action';
import CircularProgress from '@material-ui/core/CircularProgress';
import FormList from '../component/EventList';
import Button from '@material-ui/core/Button';
import DiscountTabs from '../component/DiscountTabs';

class EventContainer extends Component {

    state = {
        events: this.props.eventData,
    }

    componentDidMount() {
        this.props.getEvents();
    }

    render() {
        const { loading } = this.props;
        const { events } = this.state;
        return (
            loading ?
                <div id="circular-progress-div">
                    <CircularProgress />
                </div>
                :
                <>
                    <div className="event-button">
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={this.handleClick}
                        >
                            Add Event
                        </Button>
                    </div>
                    <DiscountTabs
                        changeData={this.changeData}
                    />
                    <FormList
                        events={events}
                    />
                </>
        )
    }

    handleClick = () => {
        this.props.history.push('/form');
    }

    changeData = (value) => {
        const { eventData, freeEvents, discountEvents, noDiscountEvents } = this.props;
        switch (value) {
            case 1:
                this.setState({
                    events: freeEvents,
                });
                break;
            case 2:
                this.setState({
                    events: discountEvents,
                });
                break;
            case 3:
                this.setState({
                    events: noDiscountEvents,
                });
                break;
            default:
                this.setState({
                    events: eventData,
                });
        }
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.events.loading,
        eventData: state.events.eventData,
        freeEvents: state.events.freeEvents,
        discountEvents: state.events.discountEvents,
        noDiscountEvents: state.events.noDiscountEvents,
    }
}

const mapDispatchToProps = (dispatch) => ({
    getEvents: () => dispatch(getEvents()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventContainer)