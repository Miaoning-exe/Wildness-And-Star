ServerEvents.recipes(event => {
    // 水车
    event.replaceInput(
        {output: 'create:water_wheel'},
        'create:shaft',
        'wild_n_star:nature_crystal'
    )
    event.replaceInput(
        {output: 'create:water_wheel'},
        '#minecraft:planks',
        '#forge:treated_wood'
    )

    // 辊压机
    event.replaceInput(
        {output: 'create:mechanical_press'},
        'minecraft:iron_block',
        'immersiveengineering:storage_steel'
    )

    // 焦炉砖
    event.replaceInput(
        {output: "immersiveengineering:cokebrick"},
        'minecraft:clay_ball',
        'wild_n_star:fire_clay'
    )
})