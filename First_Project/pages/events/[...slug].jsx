import { useRouter } from 'next/router'
import React, { Fragment } from 'react'
import EventList from '../../components/events/EventList'
import ResultsTitle from '../../components/events/ResultTitle'
import Button from '../../components/ui/Button'
import { getFilteredEvents } from '../../dummy_data'
import ErrorAlert from "../../components/ui/ErrorAlert"
const FilteredEventsPage = () => {
    const router = useRouter()

    const filterData = router.query.slug
    if (!filterData || filterData.length > 2) {
        return <p>Loading....</p>
    }
    const year = Number(filterData[0])
    const month = Number(filterData[1])
    if (
        isNaN(year) ||
        isNaN(month) ||
        year > 2030 ||
        year < 2021 ||
        month < 1 ||
        month > 12
    ) {
        return (
            <Fragment>
                <ErrorAlert>
                    <p> Invalid Filter</p>
                </ErrorAlert>
                <div className="center">
                    <Button link='/events'>Show all events</Button>
                </div>
            </Fragment>)
    }
    const items = getFilteredEvents({ year, month })
    console.log(items)
    if (!items || items.length === 0) {
        return (
            <Fragment>
                <ErrorAlert>
                    <p> No Events for the chosen filter!</p>
                </ErrorAlert>
                <div className="center">
                    <Button link='/events'>Show all events</Button>
                </div>
            </Fragment>
        )
    }
    const date = new Date(year, month)
    return (
        <div>
            <ResultsTitle date={date} />
            <EventList items={items} />
        </div>
    )
}

export default FilteredEventsPage
