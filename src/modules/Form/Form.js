import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import { createStyles, withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

export class Form extends Component {
    state = {
        eventName: '',
        description: '',
        venue: '',
        price: '',
        discountType: '',
    }
    render() {
        const { classes } = this.props;
        const { eventName, description, venue, price, discountType } = this.state;
        return (
            <>
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Typography variant="h6" gutterBottom>
                            Create Event
                </Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="event-name"
                                    label="Event Name"
                                    fullWidth
                                    value={eventName}
                                    onChange={this.changeEventName}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="description"
                                    label="Description"
                                    fullWidth
                                    multiline
                                    value={description}
                                    onChange={this.changeDescription}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="venue"
                                    label="Venue"
                                    fullWidth
                                    multiline
                                    value={venue}
                                    onChange={this.changeVenue}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="price"
                                    label="Price"
                                    fullWidth
                                    value={price}
                                    onChange={this.changePrice}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormLabel component="legend" >Discount</FormLabel>
                                <RadioGroup row value={discountType} onChange={this.handleChange} name="discount" >
                                    <FormControlLabel value="free" control={<Radio color="primary" />} label="Free" />
                                    <FormControlLabel value="discount" control={<Radio color="primary" />} label="Discount" />
                                    <FormControlLabel value=" noDiscount" control={<Radio color="primary" />} label="No Discount" />
                                </RadioGroup>
                            </Grid>
                        </Grid>
                        <div
                            className={classes.buttons}
                        >
                            <Button
                                onClick={this.handleClear}
                                className={classes.button}
                            >
                                Clear
                        </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                // onClick={handleNext}
                                className={classes.button}
                            >
                                Submit
                    </Button>
                        </div>
                    </Paper>
                </main>
            </>
        );
    }

    changeEventName = (event) => {
        this.setState({
            eventName: event.target.value,
        });
    }

    changeDescription = (event) => {
        this.setState({
            description: event.target.value,
        });
    }

    changeVenue = (event) => {
        this.setState({
            venue: event.target.value,
        });
    }

    changePrice = (event) => {
        this.setState({
            price: event.target.value,
        });
    }

    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({
            discountType: event.target.value,
        });
    }

    handleClear = () => {
        this.setState({
            eventName: '',
            description: '',
            venue: '',
            price: '',
            discountType: '',
        })
    }

}

const styles = (theme) =>
    createStyles({
        layout: {
            width: 'auto',
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(2),
            [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
                width: 600,
                marginLeft: 'auto',
                marginRight: 'auto',
            },
        },
        paper: {
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(3),
            padding: theme.spacing(2),
            [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
                marginTop: theme.spacing(6),
                marginBottom: theme.spacing(6),
                padding: theme.spacing(3),
            },
        },
        buttons: {
            display: 'flex',
            justifyContent: 'flex-end',
        },
        button: {
            marginTop: theme.spacing(3),
            marginLeft: theme.spacing(1),
        },
    });

export default withStyles(styles)(Form);

