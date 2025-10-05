ServerEvents.recipes(event => {
    // 传动杆
    event.remove({ output: 'create:shaft' })
    event.custom({
        "type": 'immersiveengineering:blueprint',
        "category": 'create',
        "inputs": [
            { "base_ingredient": { "item": "create:andesite_alloy" }, "count": 2 }
        ],
        "result": {
            "item": "create:shaft",
            "count": 6
        }
    }).id('wild_n_star:blueprint/shaft');

    //手摇曲柄
    event.remove({ output: 'create:hand_crank' })
    event.custom(
        {
        "type":"immersiveengineering:blueprint",
        "category":"create",
        "inputs":[
            {"base_ingredient":{"item":"create:cogwheel"},"count":1},
            {"tag":"minecraft:planks","count":3},
            {"item":"create:shaft"},
        ],
        "result":{"item":"create:hand_crank","count":1}
        }  
    )
    .id("wild_n_star:blueprint/hand_crank")

    //齿轮
    event.remove({ output: 'create:cogwheel' })
    event.custom(
        {
        "type":"immersiveengineering:blueprint",
        "category":"create",
        "inputs":[
            {"base_ingredient":{"tag":"minecraft:planks"},"count":3},
            {"item":"create:shaft","count":2},
        ],
        "result":{"item":"create:cogwheel","count":4}
        }  
    )
    .id("wild_n_star:blueprint/cogwheel")

    //大齿轮
    event.remove({ output: 'create:large_cogwheel' })
    event.custom(
        {
        "type":"immersiveengineering:blueprint",
        "category":"create",
        "inputs":[
            {"base_ingredient":{"tag":"minecraft:planks"},"count":6},
            {"item":"create:shaft","count":2},
        ],
        "result":{"item":"create:large_cogwheel","count":4}
        }  
    )
    .id("wild_n_star:blueprint/large_cogwheel")

    //搅拌头
    event.remove({ output: 'create:whisk'})
    event.custom(
        {
        "type":"immersiveengineering:blueprint",
        "category":"create",
        "inputs":[
            {"base_ingredient":{"tag":"forge:plates/iron"},"count":6},
            {"item":"create:andesite_alloy","count":4},
            {"item":"create:shaft","count":2},
        ],
        "result":{"item":"create:whisk"}
        }  
    )
    .id("create:whisk_workbench")
});
