/**
 * 注册晶体
 */
function registryCrystal(event, name, type) {
    event.create(`wild_n_star:${name}_crystal`, type)
}

StartupEvents.registry("item", event => {
    const crystalTypes = [
        "photosynthesis",
        "machine",
        "overworld",
        "nether",
        "end",
        "electromagnetism",
        "nature",
        "magic",
        "information"
    ]

    // 注册晶体
    crystalTypes.forEach(name => registryCrystal(event, name, "basic"))


    event.create("wild_n_star:organic_gels", "basic")   //有机凝胶
    event.create("wild_n_star:crank_train", "basic")    //曲柄连杆  
    event.create("wild_n_star:fire_clay", "basic")      //耐火粘土
    event.create("wild_n_star:dust_bauxite", "basic")   //铝土矿粉
    event.create("wild_n_star:paraffin_wax", "basic")   //石蜡
})



