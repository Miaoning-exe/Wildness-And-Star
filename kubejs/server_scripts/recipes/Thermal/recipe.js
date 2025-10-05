ServerEvents.recipes(event => {
    //树汁提取器
    event.remove({output:"thermal:device_tree_extractor"})
    event.shaped("thermal:device_tree_extractor", [
        "ABA",
        "CDC",
        "AEA"
    ], {
        A: "#minecraft:planks",
        B: 'create:mechanical_pump',
        C: '#forge:glass',
        D: 'create:fluid_tank',
        E: 'wild_n_star:nature_crystal'
    })

    //橡胶
    event.remove({id:"thermal:rubber_from_vine"})
    event.remove({id:"thermal:rubber_3"})
    event.remove({id:"thermal:rubber_from_dandelion"})
    event.recipes.create.compacting("thermal:rubber", [
        Fluid.of("thermal:latex", 500)
    ])
    .id("thermal:rubber_compacting")

    // //硫化橡胶
    // event.remove({type:"smelting", output:"tehrmal:cured_rubber"})
    // event.remove({id:"thermal:smelting/cured_rubber_from_smelting"})
    // event.recipes.create.compacting("thermal:cured_rubber", [
    //     "#forge:gems/sulfur",
    //     "thermal:rubber"
    // ])
    // .heated()
    // .id("thermal:cured_rubber_compacting")

})