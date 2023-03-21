import { useRouter } from "next/router"
import EventList from "../../components/events/EventList"
import EventsSearch from "../../components/events/EventsSearch"
import { getAllEvents } from "../../dummy_data"
const EventsPage = () => {
    const router = useRouter()
    const events = getAllEvents()

    const findEventsHandler = (year, month) => {
        router.push(`events/${year}/${month}`)
    }

    return (
        <div>
            <EventsSearch onSearch={findEventsHandler} />
            <EventList items={events} />
        </div>
    )
}

export default EventsPage
