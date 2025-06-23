function city (city) {

    const keys = Object.keys(city)
    for (const key of keys) {
        const value = city[key];
        console.log(`${key} -> ${value}`)
    }


}
city({ name: `Sofia`,
    area: 492,
    population: 123123123,
    country: `Bulgaria`,
    postCode: 1000
})