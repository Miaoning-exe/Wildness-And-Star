ServerEvents.tags("fluid", event => {
    
    //水
    event.removeAll('minecraft:water')
	event.add('minecraft:water', [
		'minecraft:water', 
		'minecraft:flowing_water', 
	])	
})