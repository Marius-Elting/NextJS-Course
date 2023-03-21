import { read } from 'gray-matter'
import Link from 'next/link'
import React from 'react'
import Button from '../ui/Button'
import classes from "./EventItem.module.css"
import DateIcon from "../icons/date-icon"
import AddressIcon from '../icons/address-icon'
import ArrowRightIcon from '../icons/arrow-right-icon'

const EventItem = ({ item }) => {

    // const readableDate = new Date(item.date).toLocaleDateString()

    return (
        <li key={item.id} className={classes.item}>
            <img src={item.image} alt={item.title} />
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>{item.title}</h2>
                    <div className={classes.date}>
                        <DateIcon />
                        <time>{item.date}</time>
                    </div>
                    <div className={classes.address}>
                        <AddressIcon />
                        <address>{item.location}</address>
                    </div>
                </div>
                <div className={classes.actions}>
                    <Button link={{
                        pathname: "/events/[id]",
                        query: { id: item.id }
                    }}>
                        <span> Explore Event</span>
                        <span className={classes.icon}><ArrowRightIcon /></span>
                    </Button>
                </div>
            </div>
        </li>
    )
}

export default EventItem
