import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';

import '../../../Style.css';

export default class EventList extends Component {

    render() {
        const { events } = this.props;
        return (
            <div className="margin-cards">
                {
                    events.length > 0 ?
                        <Container maxWidth="md">
                            <Grid container spacing={4}>
                                {events.map((event) => (
                                    <Grid item key={event.eventName} xs={12} sm={6} md={6}>
                                        <Card>
                                            <CardHeader
                                                title={event.eventName}
                                                subheader={event.price}
                                            />
                                            <CardContent>
                                                <Typography>
                                                    {event.description}
                                                </Typography>
                                                <Typography>
                                                    {event.venue}
                                                </Typography>
                                                <Typography variant="body2" component="p">
                                                    {event.discountType}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </Container>
                        :
                        <div className="no-data">
                            <h3>No data found</h3>
                        </div>
                }
            </div>
        );
    }

}