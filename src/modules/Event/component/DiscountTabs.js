import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class DiscountTabs extends Component {

    state = {
        value: 0,
    }

    render() {
        return (
            <Paper square>
                <Tabs
                    value={this.state.value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={this.handleChange}
                    centered
                >
                    <Tab label="All" />
                    <Tab label="Free" />
                    <Tab label="Discount" />
                    <Tab label="No Discount" />
                </Tabs>
            </Paper>
        )
    }

    handleChange = (event, newValue) => {
        this.setState({
            value: newValue,
        });
        this.props.changeData(newValue);
    }
}

export default DiscountTabs