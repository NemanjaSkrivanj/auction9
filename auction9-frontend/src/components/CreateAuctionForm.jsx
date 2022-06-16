import React from "react";
import "./CreateAuctionForm.css";
import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import moment from 'moment';

function CreateAuctionForm() {

    const date = new Date();

    const [auction, setAuction] = useState({
        start_date : date.getMonth()+1 + "-" + date.getDate() + "-" + date.getFullYear(),
        end_date: date.getMonth()+1 + "-" + date.getDate() + "-" + date.getFullYear()
    });

    const handleOnChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setAuction(values => ({ ...values, [name]: value }))
    }

    const handleStartDate = (newDate) => {
        let tmpDate = newDate.getFullYear() + "-" + newDate.getMonth() + "-" + newDate.setDate(newDate.getDate())
        tmpDate = newDate.toISOString().split('T')[0];
        moment(tmpDate).format("yyyy/MM/DD");
        setAuction(values => ({ ...values, start_date: tmpDate}))
    }

    const handleEndDate = (newDate) => {
        let tmpDate = newDate.getFullYear() + "-" + newDate.getMonth() + "-" + newDate.setDate(newDate.getDate())
        tmpDate = newDate.toISOString().split('T')[0];
        moment(tmpDate).format("yyyy/MM/DD");
        setAuction(values => ({ ...values, end_date: tmpDate}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(auction)
        };

        console.log(requestOptions.body);
        fetch('http://localhost:3000/auctions/create', requestOptions)
            .then(response => response.json())
        setAuction({});
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div id="auctionForm">
                    <h1>Auction Form</h1>
                    <TextField name="name" label="Name" variant="outlined" value={auction.name || ""} onChange={handleOnChange} />
                    <TextField name="description" label="Description" variant="outlined" value={auction.description || ""} onChange={handleOnChange} />
                    <TextField name="image" label="Image" variant="outlined" value={auction.image || ""} onChange={handleOnChange} />
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DesktopDatePicker
                            label="Date desktop"
                            inputFormat="MM/dd/yyyy"
                            value={auction.start_date}
                            onChange={handleStartDate}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DesktopDatePicker
                            label="Date desktop"
                            inputFormat="MM/dd/yyyy"
                            value={auction.end_date}
                            onChange={handleEndDate}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                    <TextField name="starting_price" label="Price" variant="outlined" value={auction.starting_price || ""} onChange={handleOnChange} />
                    <Button type="submit" variant="contained">Create Auction</Button>
                </div>
            </form>

        </div>
    );
}

export default CreateAuctionForm;
