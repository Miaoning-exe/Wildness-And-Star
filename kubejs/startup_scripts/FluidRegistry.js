StartupEvents.registry("fluid", event => {

    /**
     * 注册简单流体
     * @param {string} id 
     * @param {dev.latvian.mods.rhino.mod.util.color.Color_} color 
     * @param {boolean} [isThin] 默认为true
     * @param {boolean} [hasBlock] 默认为true
     * @param {boolean} [hasBucket] 默认为true
     * @returns 
     */
    let simpleFluid = function (id, color, isThin, hasBlock, hasBucket) {
        let ret = event.create(id)
        isThin = isThin == null ? true : isThin
        hasBlock = hasBlock == null ? true : hasBlock
        hasBucket = hasBucket == null ? true : hasBucket

        if (isThin)
            ret.thinTexture(color)
        else
            ret.thickTexture(color)
        if (!hasBlock)
            ret.noBlock()
        else
            ret.translationKey("block.createdelight." + id.split(":")[1])
        if (!hasBucket)
            ret.noBucket()
        else {
            ret.bucketColor(color)
            ret.translationKey("item.createdelight." + id.split(":")[1] + "_bucket")
        }
        ret.translationKey("fluid.createdelight." + id.split(":")[1])
        return ret
    }

    /**
     * 注册特殊材质的流体
     * @param {string} id 
     * @param {boolean} [hasBlock] 默认为true
     * @param {boolean} [hasBucket] 默认为true
     * @param {ResourceLocation_} resourcelocation 默认存放在createdelight/asset/fluid/id下,且必须为still及flowing两个
     * @returns 
     */
    let textureFluid = function (id, hasBlock, hasBucket, resourcelocation) {
        let ret = event.create(id)
        hasBlock = hasBlock == null ? true : hasBlock
        hasBucket = hasBucket == null ? true : hasBucket
        resourcelocation = resourcelocation == null? `createdelight:fluid/${id.split(":")[1]}` : resourcelocation


        if (!hasBlock)
            ret.noBlock()
        else
            ret.translationKey("block.createdelight." + id.split(":")[1])
        if (!hasBucket)
            ret.noBucket()
        else {
            ret.translationKey("item.createdelight." + id.split(":")[1] + "_bucket")
        }
        ret.translationKey("fluid.createdelight." + id.split(":")[1])
        ret.stillTexture(resourcelocation + "/still")
        ret.flowingTexture(resourcelocation + "/flowing")
        return ret
    }

    simpleFluid('wild_n_star:plant_essences', 0x47e512) //植物精华
    simpleFluid('wild_n_star:liquid_rose_quartz', 0xFF3E96) //植物精华
    simpleFluid('wild_n_star:liquid_aura', 0x9eff28) //植物精华
})
