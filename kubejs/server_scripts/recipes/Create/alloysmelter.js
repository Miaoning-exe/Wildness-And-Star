ServerEvents.recipes(event =>{
    //安山合金
    event.remove({ output: 'create:andesite_alloy' })
    event.custom(
        {"type":"immersiveengineering:alloy",
        "conditions":
        [{"type":"forge:not",
        "value":{"type":"forge:tag_empty",
        "tag":"create:create_ingots"}}],
        "input0":{"base_ingredient":{"tag":"create:stone_types/andesite"},"count":1},
        "input1":{"base_ingredient":{"tag":"forge:ingots/iron"},"count":1},
        "result":{"base_ingredient":{"item":"create:andesite_alloy"},
        "count":3},
        "time":100
    })
    .id("wild_n_star:alloysmelter/andesite_alloy_iton")

    event.custom(
        {"type":"immersiveengineering:alloy",
        "conditions":
        [{"type":"forge:not",
        "value":{"type":"forge:tag_empty",
        "tag":"create:create_ingots"}}],
        "input0":{"base_ingredient":{"tag":"create:stone_types/andesite"},"count":1},
        "input1":{"base_ingredient":{"tag":"forge:ingots/zinc"},"count":1},
        "result":{"base_ingredient":{"item":"create:andesite_alloy"},
        "count":3},
        "time":100
    })
    .id("wild_n_star:alloysmelter/andesite_alloy_zincs")

})