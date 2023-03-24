import { Fragment } from "react"
import EventSummary from "../../components/event-detail/EventSummary"
import EventContent from "../../components/event-detail/EventContent"
import EventLogistics from "../../components/event-detail/EventLogistics"
import { getAllEvents, getEventById } from "../../helpers/ApiUtil"


const EventDetail = (props) => {
    if (!props.event) {
        return (
            <p>No Event found!</p>
        )
    }

    return (
        <div>
            <Fragment>
                <EventSummary title={props.event.title} />
                <EventLogistics date={props.event.date} address={props.event.location} image={props.event.image} imageAlt={props.event.title} />
                <EventContent>
                    <p>{props.event.description}</p>
                </EventContent>
            </Fragment>
        </div>
    )
}


export async function getStaticProps(context) {
    const { params } = context
    const singleEvent = await getEventById(params.eventId)
    // console.log(singleEvent)
    return {
        props: {
            event: singleEvent
        },
        revalidate: 30
    }
}

export async function getStaticPaths() {
    const allEvents = await getAllEvents()
    console.log(allEvents)
    const params = allEvents.map(event => ({ params: { eventId: event.id } }))

    return {
        paths: params,
        fallback: false,
    }
}

export default EventDetail
