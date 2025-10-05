ServerEvents.recipes(event =>{
    // 高炉砖
    event.remove({ output: "immersiveengineering:blastbrick" })
    event.custom(
        {"type":"immersiveengineering:alloy",
        "input0":{"base_ingredient":{"item":"immersiveengineering:cokebrick"},"count":4},
        "input1":{"base_ingredient":{"item":'minecraft:nether_brick'},"count":4},
        "result":{"base_ingredient":{"item":"immersiveengineering:blastbrick"},"count":3},
        "time":100
    })
    .id("wild_n_star:alloysmelter/blastbrick")

    //安山合金
    event.remove({ output: 'create:andesite_alloy' })
    event.custom({
        "type":"immersiveengineering:alloy",
        "input0":{"base_ingredient":{"tag":"create:stone_types/andesite"},"count":1},
        "input1":{"base_ingredient":{"tag":"forge:ingots/iron"},"count":1},
        "result":{"base_ingredient":{"item":"create:andesite_alloy"},
        "count":3},
        "time":100
    })
    .id("wild_n_star:alloysmelter/andesite_alloy_iton")

    event.custom(
        {"type":"immersiveengineering:alloy",
        "input0":{"base_ingredient":{"tag":"create:stone_types/andesite"},"count":1},
        "input1":{"base_ingredient":{"tag":"forge:ingots/zinc"},"count":1},
        "result":{"base_ingredient":{"item":"create:andesite_alloy"},
        "count":3},
        "time":100
    })
    .id("wild_n_star:alloysmelter/andesite_alloy_zincs")


    // 硫化橡胶
    event.remove({type:"smelting", output:'thermal:cured_rubber'})
    event.remove({id:"thermal:smelting/cured_rubber_from_smelting"})

    event.custom({
        "type":"immersiveengineering:alloy",
        "input0":{"base_ingredient":{"item":"thermal:rubber"},"count":3},
        "input1":{"base_ingredient":{"tag":'forge:dusts/sulfur'},"count":4},
        "result":{"base_ingredient":{"item":'thermal:cured_rubber'},"count":1},
        "time":100
    })
    .id("wild_n_star:alloysmelter/cured_rubber")
})