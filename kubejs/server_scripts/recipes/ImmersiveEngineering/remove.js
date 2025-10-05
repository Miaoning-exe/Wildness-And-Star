ServerEvents.recipes(event => {
    event.remove({output: '#forge:dusts/aluminum'})
    event.remove({output: 'immersiveengineering:dynamo'})
    event.remove({
        output: '#forge:plates', 
        input: Item.of('immersiveengineering:hammer'), 
        not: {output: '#forge:plates/copper'}
    })
})