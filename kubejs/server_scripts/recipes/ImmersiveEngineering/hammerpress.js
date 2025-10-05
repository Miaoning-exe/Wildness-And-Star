ServerEvents.recipes(event => {
    // 金板
    event.shapeless('#forge:plates/gold', [
        'immersiveengineering:hammer',
        '#forge:ingots/gold'
    ])
    .id("wild_n_star:hammerpress/gold_palte")

    // 传送带
    event.remove({output: "create:belt_connector"})
    event.shapeless('create:belt_connector', [
        "thermal:cured_rubber",
        Item.of('immersiveengineering:hammer')
    ])
    .id("wild_n_star:hammerpress/belt")
})