ServerEvents.recipes(event => {
    // 锤子砸金板
    event.shapeless('#forge:plates/gold', [
        'immersiveengineering:hammer',
        '#forge:ingots/gold'
    ])
    .id("wild_n_star:hammerpress/gold_palte")
})