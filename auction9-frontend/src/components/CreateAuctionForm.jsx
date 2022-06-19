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
    const curDate = date.toISOString().split('T')[0];
    moment(curDate).format("yyyy/MM/DD");
    
    const [auction, setAuction] = useState({
        start_date: null,
        end_date: null
    });


    const handleOnChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setAuction(values => ({ ...values, [name]: value }))
    }

    const handleDate = (newDate) => {
        let tmpDate = newDate.getFullYear() + "-" + newDate.getMonth() + "-" + newDate.setDate(newDate.getDate())
        tmpDate = newDate.toISOString().split('T')[0];
        moment(tmpDate).format("yyyy/MM/DD");
        return tmpDate;
    }

    const handleStartDate = (newDate) => {
        let tmpDate = handleDate(newDate);
        if(tmpDate > auction.end_date || tmpDate < curDate) {
            alert('End date cannot be before Start date');
        }
        else {
            setAuction(values => ({ ...values, start_date: tmpDate }))
        } 
    }

    const handleEndDate = (newDate) => {
        let tmpDate = handleDate(newDate);
        if(tmpDate < auction.start_date || tmpDate < curDate) {
            alert('Start date cannot be after End date');
        }else setAuction(values => ({ ...values, end_date: tmpDate }))
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
                    <h1>Create Auction</h1>
                    <TextField name="name" label="Name" variant="outlined" value={auction.name || ""} onChange={handleOnChange} required />
                    <TextField name="description" label="Description" variant="outlined" value={auction.description || ""} onChange={handleOnChange} required />
                    <TextField name="image" label="Image" variant="outlined" value={auction.image || ""} onChange={handleOnChange} required />
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DesktopDatePicker
                            label="Start date"
                            inputFormat="MM/dd/yyyy"
                            value={auction.start_date}
                            onChange={handleStartDate}
                            renderInput={(params) => <TextField {...params} required />}
                        />
                    </LocalizationProvider>
                    <LocalizationProvider dateAdapter={AdapterDateFns} required>
                        <DesktopDatePicker
                            label="End date"
                            inputFormat="MM/dd/yyyy"
                            value={auction.end_date}
                            onChange={handleEndDate}
                            renderInput={(params) => <TextField {...params} required />}
                        />
                    </LocalizationProvider>
                    <TextField name="starting_price" label="Price" variant="outlined" value={auction.starting_price || ""} onChange={handleOnChange} required />
                    <Button type="submit" variant="contained">Create Auction</Button>
                </div>
            </form>

        </div>
    );
}

export default CreateAuctionForm;
