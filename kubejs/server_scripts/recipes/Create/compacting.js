ServerEvents.recipes(event => {
    const create = event.recipes.create

    //橡胶
    event.remove({id:"thermal:rubber_from_vine"})
    event.remove({id:"thermal:rubber_3"})
    event.remove({id:"thermal:rubber_from_dandelion"})
    create.compacting("thermal:rubber", [
        Fluid.of("thermal:latex", 500)
    ])
    .id("wild_n_star:compacting/rubber_compacting")
})