import EventList from "../components/events/EventList"
import { getFeaturedEvents } from "../dummy_data"


const HomePage = () => {

  const featuredEvents = getFeaturedEvents()


  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  )
}

export default HomePage
