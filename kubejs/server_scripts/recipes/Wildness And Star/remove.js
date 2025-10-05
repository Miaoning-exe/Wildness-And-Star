ServerEvents.recipes(event => {
    // 移除安山合金的无序合成
    event.remove({
        output: 'create:andesite_alloy',
        input: 'minecraft:andesite',
        type: "minecraft:crafting_shaped"
    })

    //黄铜
    event.remove({output:'create:brass_ingot'})

    event.remove({output: '#forge:dusts/aluminum'})
    event.remove({output: 'immersiveengineering:dynamo'})
    event.remove({
        output: '#forge:plates', 
        input: Item.of('immersiveengineering:hammer'), 
        not: {output: '#forge:plates/copper'}
    })

    event.remove({output: 'naturesaura:gold_powder'})
})