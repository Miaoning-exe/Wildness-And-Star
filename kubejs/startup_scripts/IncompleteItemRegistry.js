/**
 * 注册不完整物品
 */
function registryIncompleteItem(event, name) {
    event.create(`wild_n_star:${name}`, "create:sequenced_assembly")
}

StartupEvents.registry("item", event => {
    // 定义不完整物品的名称和类型
    const incompleteItems = [
        "incomplete_crank_train",
        "incomplete_electron_tube"
    ]

    // 注册不完整物品
    incompleteItems.forEach(name => registryIncompleteItem(event, name))
})