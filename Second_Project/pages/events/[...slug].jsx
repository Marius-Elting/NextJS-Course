import { useRouter } from 'next/router'
import React, { Fragment } from 'react'
import EventList from '../../components/events/EventList'
import ResultsTitle from '../../components/events/ResultTitle'
import Button from '../../components/ui/Button'

import ErrorAlert from "../../components/ui/ErrorAlert"
import { getFilteredEvents } from '../../helpers/ApiUtil'
const FilteredEventsPage = (props) => {
    const router = useRouter()

    if (props.hasError) {
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

    const date = new Date(props.year, props.month)
    console.log(date)
    return (
        <div>
            <ResultsTitle date={date} />
            <EventList items={props.items} />
        </div>
    )
}

export async function getServerSideProps(context) {
    const { params } = context

    const filterData = params.slug

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
        return {
            props: { hasError: true }
        }
    }
    const items = await getFilteredEvents({ year, month })
    if (!items || items.length === 0) {
        return {
            props: { hasError: true }
        }

    }
    console.log(year, month)
    console.log(items)
    return {
        props: { items, year, month }
    }
}


export default FilteredEventsPage
