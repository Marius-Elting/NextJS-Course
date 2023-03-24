import EventList from "../components/events/EventList"
import { getFeaturedEvents } from "../helpers/ApiUtil"



const HomePage = (props) => {

  return (
    <div>
      <EventList items={props.events} />
    </div>
  )
}


export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents()
  return {
    props: {
      events: featuredEvents
    },
    revalidate: 600
  }
}

export default HomePage
