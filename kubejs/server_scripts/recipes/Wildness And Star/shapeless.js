ServerEvents.recipes(event => {
    // 耐火粘土
    event.shapeless("wild_n_star:fire_clay", [
        "minecraft:clay_ball",
        'wild_n_star:dust_bauxite'
    ])
    .id("wild_n_star:shapeless/fire_clay")

    // 铝土矿粉
    event.shapeless('wild_n_star:dust_bauxite', [
        '#forge:ores/aluminum', 
        Item.of('immersiveengineering:hammer')
    ])
    .id("wild_n_star:shapeless/dust_bauxite")

    event.shapeless('wild_n_star:dust_bauxite', [
        '#forge:raw_materials/aluminum', 
        Item.of('immersiveengineering:hammer')
    ])
    .id("wild_n_star:shapeless/dust_bauxite_raw")
})