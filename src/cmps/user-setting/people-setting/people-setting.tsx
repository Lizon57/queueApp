import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { CiSearch } from "react-icons/ci"
import { BiPlus } from "react-icons/bi"
import errorIcon from "../../../assets/images/error-icon.svg"

import { People } from '../../../models/people'
import { PeopleAmount } from '../../../models/people-amount'

import { TextInput } from '../../common/text-input'
import { Button } from '../../common/button'
import { StatusIndicator } from './status-indicator'
import { PeopleList } from './people-list'
import { ErrorMessage } from '../../common/error-message'
import { peopleService } from '../../../services/people-service'


export function PeopleSetting() {
    const [people, setPeople] = useState<People[]>([])
    const [amount, setAmount] = useState<PeopleAmount | undefined>()

    const { isLoading, error, data } = useQuery('peopleData', peopleService.queryPeopleRequest)


    useEffect(() => {
        setPeople(data)
    }, [data])

    useEffect(() => {
        if (!people) return

        const peopleAmount = people.reduce((amount: PeopleAmount, people: People) => {
            if (people.status === 'approved') amount.approved += 1
            else amount.pending += 1
            return amount
        }, { approved: 0, pending: 0 })

        setAmount(peopleAmount)
    }, [people])


    const onSetFilter = (term: string) => {
        const regex = new RegExp(term, 'gi')
        const filteredPeople = data.filter((people: People) => {
            const fullName = people.firstName + ' ' + people.lastName
            return regex.test(people.email) || regex.test(fullName)
        })
        setPeople(filteredPeople)
    }


    const onRemovePeople = (email: string) => {
        const filteredPeople = data.filter((people: People) => people.email !== email)
        setPeople(filteredPeople)
    }


    return (
        <div className="people-setting-container">
            <section className="amounts-status-container">
                <StatusIndicator text="Active" amount={amount?.approved} />
                <StatusIndicator text="Pending" amount={amount?.pending} className="pending" />
            </section>

            <section className="search-invite-people-container">
                <TextInput label="Search members" Icon={CiSearch} onChange={onSetFilter} />
                <Button Icon={BiPlus} text="Invite people" />
            </section>

            <section className="people-list-container">
                {error as String && <ErrorMessage icon={errorIcon} text="Something went wrong." tryAgainAction={peopleService.queryPeopleRequest} />}
                {!error && <PeopleList
                    isLoading={isLoading}
                    people={people || []}
                    onRemovePeople={onRemovePeople}
                />}
            </section>
        </div>
    )
}