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
    .id("wild_n_star:shaped/device_tree_extractor")

    //风车轴承
    event.remove({output: "create:windmill_bearing"})
    event.shaped(Item.of("create:windmill_bearing", 4), [
        " A ", 
        " B ",
        " C "
    ], {
        A: 'wild_n_star:organic_gels',
        B: 'create:andesite_casing', 
        C: "create:shaft"
    })
    .id("wild_n_star:shaped/windmill_bearing")
})