ServerEvents.recipes(event => {
    //风车轴承
    event.remove({output: "create:windmill_bearing"})
    event.shaped(Item.of("create:windmill_bearing", 4), [
        " A ", 
        " B ",
        " C "
    ], {
        A: '#minecraft:wooden_slabs',
        B: "wild_n_star:nature_crystal", 
        C: "create:shaft"
    })
})