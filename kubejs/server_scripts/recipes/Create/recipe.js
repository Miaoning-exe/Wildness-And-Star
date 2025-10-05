ServerEvents.recipes(event => {
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
})