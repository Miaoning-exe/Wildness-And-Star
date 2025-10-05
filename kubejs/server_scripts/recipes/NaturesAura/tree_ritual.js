ServerEvents.recipes(event => {
    event.custom(
        {
            "type": "naturesaura:tree_ritual",
            "ingredients": [
                {
                    "tag": "forge:seeds"
                },
                {
                    "tag": "minecraft:flowers"
                },
                {
                    "item": "naturesaura:gold_leaf"
                },
                {
                    "item": "minecraft:gold_ingot"
                },
                {
                    "type": "forge:nbt",
                    "item": "naturesaura:aura_bottle",
                    "nbt": {"stored_type": "naturesaura:overworld"}
                },
                {
                    "item": "minecraft:moss_block"
                },
                {
                    "item": "minecraft:flowering_azalea"
                }
            ],
            "sapling": {"item": "minecraft:oak_sapling"},
            "output": {"item": "wild_n_star:nature_crystal","count": 1},
            "time": 200
        }
    )
    .id("wild_n_star:nature_crystal_tree_ritual")
})