import React from "react";
import "./CreateAuctionForm.css";
import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useEffect } from "react";

function CreateAuctionForm() {

    const [auction, setAuction] = useState({});

    const handleOnChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setAuction(values => ({ ...values, [name]: value }))
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
                    <TextField name="image" label="Image" variant="outlined" value={auction.image || ""} onChange={handleOnChange}/>
                    <TextField name="start_date" label="Start Date" variant="outlined" value={auction.start_date || ""} onChange={handleOnChange}/>
                    <TextField name="end_date" label="End Date" variant="outlined" value={auction.end_date || ""} onChange={handleOnChange}/>
                    <TextField name="starting_price" label="Price" variant="outlined" value={auction.starting_price || ""} onChange={handleOnChange}/>
                    <Button type="submit" variant="contained">Create Auction</Button>
                </div>
            </form>
            
        </div>
    );
}

export default CreateAuctionForm;
