import { useRouter } from "next/router"
import EventList from "../../components/events/EventList"
import EventsSearch from "../../components/events/EventsSearch"
import { getAllEvents } from "../../helpers/ApiUtil"

const EventsPage = (props) => {
    const router = useRouter()

    const findEventsHandler = (year, month) => {
        router.push(`events/${year}/${month}`)
    }

    return (
        <div>
            <EventsSearch onSearch={findEventsHandler} />
            <EventList items={props.events} />
        </div>
    )
}


export async function getStaticProps() {
    const events = await getAllEvents()
    return {
        props: {
            events
        },
        revalidate: 600
    }
}

export default EventsPage
