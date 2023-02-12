import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { CiSearch } from "react-icons/ci"
import { BiPlus } from "react-icons/bi"

import { People } from '../../../models/people'

import { TextInput } from '../../common/text-input'
import { Button } from '../../common/button'
import { StatusIndicator } from './status-indicator'
import { PeopleList } from './people-list'


export function PeopleSetting() {
    const [people, setPeople] = useState<People[]>([])


    const { isLoading, error, data } = useQuery('repoData', () =>
        fetch('https://voicetest20202.s3.amazonaws.com/users.json')
            .then(res => res.json())
    )


    useEffect(() => {
        setPeople(data)
    }, [data])


    const onSetFilter = (term: string) => {
        console.log(term)
    }


    const onRemovePeople = (email: string) => {
        console.log(email)
    }


    if (error) return <span>'An error has occurred: '</span>

    return (
        <div className="people-setting-container">
            <section className="amounts-status-container">
                <StatusIndicator text="Active" />
                <StatusIndicator text="Pending" className="pending" />
            </section>

            <section className="search-invite-people-container">
                <TextInput label="Search members" Icon={CiSearch} onChange={onSetFilter} />
                <Button Icon={BiPlus} text="Invite people" />
            </section>

            <section className="people-list-container">
                <PeopleList
                    isLoading={isLoading}
                    people={people || []}
                    onRemovePeople={onRemovePeople}
                />
            </section>
        </div>
    )
}