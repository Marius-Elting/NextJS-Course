import EventItem from "./EventItem"
import classes from "./EventList.module.css"

const EventList = ({ items }) => {
    return (
        <ul className={classes.list}>
            {items.map((item) => <EventItem item={item}></EventItem>)}
        </ul>
    )
}

export default EventList
