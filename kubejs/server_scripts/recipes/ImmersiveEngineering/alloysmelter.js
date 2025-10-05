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


})