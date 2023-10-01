ServerEvents.recipes(event => { 

    //IRON CHEST
    //Remove iron chest crafts
    event.remove({
        output: 'ironchest:iron_chest'
    })

    //Add craft for iron chest
    event.shaped(
        Item.of('ironchest:iron_chest', 1),
        [
          'AAA', 
          'ABA', 
          'AAA'  
        ],
        {
          A: 'minecraft:iron_ingot', 
          B: 'ironchest:copper_chest'
        }
      )

      //Remove iron chest upgrader crafts
    event.remove({
        output: 'ironchest:copper_to_iron_chest_upgrade'
    })

    //Add craft for iron chest upgrader
    event.shaped(
        Item.of('ironchest:copper_to_iron_chest_upgrade', 1),
        [
          'AAA', 
          'ABA', 
          'AAA'  
        ],
        {
          A: 'minecraft:iron_ingot', 
          B: 'minecraft:copper_ingot'
        }
      )

    //GOLD CHEST
    //Remove gold chest crafts
    event.remove({
        output: 'ironchest:gold_chest'
    })

    //Add craft for gold chest
    event.shaped(
        Item.of('ironchest:gold_chest', 1),
        [
          'AAA', 
          'ABA', 
          'AAA'  
        ],
        {
          A: 'minecraft:gold_ingot', 
          B: 'ironchest:iron_chest'
        }
      )

      //Remove gold chest upgrader crafts
    event.remove({
        output: 'ironchest:iron_to_gold_chest_upgrade'
    })

    //Add craft for gold chest upgrader
    event.shaped(
        Item.of('ironchest:iron_to_gold_chest_upgrade', 1),
        [
          'AAA', 
          'ABA', 
          'AAA'  
        ],
        {
          A: 'minecraft:gold_ingot', 
          B: 'minecraft:iron_ingot'
        }
      )

    //DIAMOND CHEST
    //Remove diamond chest crafts
    event.remove({
        output: 'ironchest:diamond_chest'
    })

    //Add craft for diamond chest
    event.shaped(
        Item.of('ironchest:diamond_chest', 1),
        [
          'AAA', 
          'ABA', 
          'AAA'  
        ],
        {
          A: 'minecraft:diamond', 
          B: 'ironchest:gold_chest'
        }
      )

      //Remove diamond chest upgrader crafts
    event.remove({
        output: 'ironchest:gold_to_diamond_chest_upgrade'
    })

    //Add craft for diamond chest upgrader
    event.shaped(
        Item.of('ironchest:gold_to_diamond_chest_upgrade', 1),
        [
          'AAA', 
          'ABA', 
          'AAA'  
        ],
        {
          A: 'minecraft:diamond', 
          B: 'minecraft:gold_ingot'
        }
      )

      //CRYSTAL CHEST
    //Remove crystal chest crafts
    event.remove({
        output: 'ironchest:crystal_chest'
    })

    //Add craft for crystal chest
    event.shaped(
        Item.of('ironchest:crystal_chest', 1),
        [
          'AAA', 
          'ABA', 
          'AAA'  
        ],
        {
          A: 'alexsmobs:rainbow_glass', 
          B: 'ironchest:diamond_chest'
        }
      )

      //Remove crystal chest upgrader crafts
    event.remove({
        output: 'ironchest:diamond_to_crystal_chest_upgrade'
    })

    //Add craft for crystal chest upgrader
    event.shaped(
        Item.of('ironchest:diamond_to_crystal_chest_upgrade', 1),
        [
          'AAA', 
          'ABA', 
          'AAA'  
        ],
        {
          A: 'alexsmobs:rainbow_glass', 
          B: 'minecraft:diamond'
        }
      )
})