ServerEvents.recipes(event => {
    const create = event.recipes.create

    // 传送带
    create.pressing('create:belt_connector', [
        "thermal:cured_rubber"
    ])
    .id("wild_n_star:pressing/belt")
})