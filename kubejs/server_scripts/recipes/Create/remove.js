ServerEvents.recipes(event => {
    // 移除安山合金的无序合成
    event.remove({
        output: 'create:andesite_alloy',
        input: 'minecraft:andesite',
        type: "minecraft:crafting_shaped"
    })

    //黄铜
    event.remove({output:'create:brass_ingot'})
})