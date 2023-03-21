import { useRouter } from "next/router"
import { Fragment } from "react"
import EventSummary from "../../components/event-detail/event-summary"
import EventContent from "../../components/event-detail/event-content"
import EventLogistics from "../../components/event-detail/event-logistics"
import { getEventById } from "../../dummy_data"

const EventDetail = () => {
    const router = useRouter()
    const event = getEventById(router.query.eventId)
    if (!event) {
        return (
            <p>No Event found!</p>
        )
    }
    console.log(event)
    return (
        <div>
            <Fragment>
                <EventSummary title={event.title} />
                <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
                <EventContent>
                    <p>{event.description}</p>
                </EventContent>
            </Fragment>
        </div>
    )
}

export default EventDetail
