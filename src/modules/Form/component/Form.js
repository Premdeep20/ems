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
import FormHelperText from '@material-ui/core/FormHelperText';

export class Form extends Component {
    state = {
        eventName: '',
        description: '',
        venue: '',
        price: '',
        discountType: '',
        eventNameError: false,
        descriptionError: false,
        venueError: false,
        priceError: false,
        discountTypeError: false,
    }
    render() {
        const { classes } = this.props;
        const {
            eventName, description, venue, price, discountType,
            eventNameError, descriptionError, venueError, priceError, discountTypeError,
        } = this.state;
        return (
            <>
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Typography variant="h6" gutterBottom>Create Event</Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="event-name"
                                    label="Event Name"
                                    fullWidth
                                    value={eventName}
                                    onChange={this.changeEventName}
                                    error={eventNameError}
                                    helperText={eventNameError && 'Please fill valid event name'}
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
                                    error={descriptionError}
                                    helperText={descriptionError && 'Please fill valid description'}
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
                                    error={venueError}
                                    helperText={venueError && 'Please fill valid venue'}
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
                                    error={priceError}
                                    helperText={priceError && 'Please fill valid price'}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormLabel component="legend" error={discountTypeError}>Discount Type</FormLabel>
                                <RadioGroup row value={discountType} onChange={this.handleChange} name="discount" >
                                    <FormControlLabel value="free" control={<Radio color="primary" />} label="Free" />
                                    <FormControlLabel value="discount" control={<Radio color="primary" />} label="Discount" />
                                    <FormControlLabel value="noDiscount" control={<Radio color="primary" />} label="No Discount" />
                                </RadioGroup>
                                <FormHelperText>{discountTypeError && 'Please select discount type'}</FormHelperText>
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
                                onClick={this.handleSubmit}
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
        let error = false;
        if (event.target.value.trim() === '') {
            error = true;
        }
        this.setState({
            eventName: event.target.value,
            eventNameError: error,
        });
    }

    changeDescription = (event) => {
        let error = false;
        if (event.target.value.trim() === '') {
            error = true;
        }
        this.setState({
            description: event.target.value,
            descriptionError: error,
        });
    }

    changeVenue = (event) => {
        let error = false;
        if (event.target.value.trim() === '') {
            error = true;
        }
        this.setState({
            venue: event.target.value,
            venueError: error,
        });
    }

    changePrice = (event) => {
        let error;
        let val = Number(event.target.value);
        if (val > 0) {
            error = false;
        } else {
            val = '';
            error = true;
        }
        this.setState({
            price: val,
            priceError: error,
        });
    }

    handleChange = (event) => {
        this.setState({
            discountType: event.target.value,
            discountTypeError: false,
        });
    }

    handleClear = () => {
        this.setState({
            eventName: '',
            description: '',
            venue: '',
            price: '',
            discountType: '',
            eventNameError: false,
            descriptionError: false,
            venueError: false,
            priceError: false,
            discountTypeError: false,
        });
    }

    handleSubmit = () => {
        let eNameError;
        let dError;
        let vError;
        let pError;
        let dTypeError;
        const {
            eventName, description, venue, price, discountType,
            eventNameError, descriptionError, venueError, priceError, discountTypeError,
        } = this.state;
        if (eventName === '' || eventNameError) {
            eNameError = true;
        }
        if (description === '' || descriptionError) {
            dError = true;
        }
        if (venue === '' || venueError) {
            vError = true;
        }
        if (price === '' || priceError) {
            pError = true;
        }
        if (discountType === '' || discountTypeError) {
            dTypeError = true;
        }
        if (eNameError || dError || vError || pError || dTypeError) {
            this.setState({
                eventNameError: eNameError,
                descriptionError: dError,
                venueError: vError,
                priceError: pError,
                discountTypeError: dTypeError,
            });
        } else {
            const event = {
                eventName: eventName,
                description: description,
                venue: venue,
                price: price,
                discountType: discountType,
            }
            this.props.addData(event);
        }
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

