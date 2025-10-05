ServerEvents.recipes(event => {
    // 安山合金浇筑调整
    event.custom({
        "type": "tconstruct:casting_basin",
        "cast": {
            "item": "minecraft:andesite"
        },
        "cast_consumed": true,
        "cooling_time": 20,
        "fluid": {
            "amount": 30,
            "tag": "forge:molten_iron"
        },
        "result": "create:andesite_alloy"
    })
    .id("wild_n_star:casting/andesite_alloy_iron")

    event.custom({
        "type": "tconstruct:casting_basin",
        "cast": {
            "item": "minecraft:andesite"
        },
        "cast_consumed": true,
        "cooling_time": 20,
        "fluid": {
            "amount": 30,
            "tag": "forge:molten_zinc"
        },
        "result": "create:andesite_alloy"
    })
    .id("wild_n_star:casting/andesite_alloy_zinc")
})