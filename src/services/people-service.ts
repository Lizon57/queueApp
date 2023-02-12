const queryPeopleRequest = () => {
    return fetch('https://voicetest20202.s3.amazonaws.com/users.json')
        .then(res => res.json())
}


export const peopleService = {
    queryPeopleRequest
}