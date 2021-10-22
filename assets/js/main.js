//Il nostro compito é quello di rappresentare, utilizzando la struttura dati piú appropriata, una lista di membri di un team. Ciascun membro del team avrá come caratteristica name, role, image



const team = [
    {
        name: 'Mario',
        role: 'meccanico',
        image: 'https://images.unsplash.com/photo-1452475168325-672188dc4dc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1774&q=80'
    },
    {
        name: 'Matteo',
        role: 'elettricista',
        image: 'https://images.unsplash.com/photo-1442115597578-2d0fb2413734?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80'
    },
    {
        name: 'Giacomo',
        role: 'vetraio',
        image: 'https://i.picsum.photos/id/100/2500/1656.jpg?hmac=gWyN-7ZB32rkAjMhKXQgdHOIBRHyTSgzuOK6U0vXb1w'
    },
    {
        name: 'Giovanni',
        role: 'falegname',
        image: 'https://i.picsum.photos/id/1003/1181/1772.jpg?hmac=oN9fHMXiqe9Zq2RM6XT-RVZkojgPnECWwyEF1RvvTZk'
    },
    {
        name: 'Mattia',
        role: 'medico',
        image: 'https://i.picsum.photos/id/1008/5616/3744.jpg?hmac=906z84ml4jhqPMsm4ObF9aZhCRC-t2S_Sy0RLvYWZwY'
    }
];

/*console.log(team);*/


for (let index = 0; index < team.length; index++) {
    const ciclTeam = team[index]
    /*console.log(ciclTeam);*/

    for (const key in ciclTeam) {
       console.log(ciclTeam[key]);
    }
    console.log('________________');
    
}