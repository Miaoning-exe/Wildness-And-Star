ServerEvents.recipes(event => {
    const create = event.recipes.create

    // 黄金叶磨粉
    create.milling([
        Item.of('naturesaura:gold_powder', 2),
        Item.of('naturesaura:gold_powder', 1).withChance(0.5)
    ], [
        'naturesaura:gold_leaf'
    ])
    .id("wild_n_star:crushing/gold_powder")
})