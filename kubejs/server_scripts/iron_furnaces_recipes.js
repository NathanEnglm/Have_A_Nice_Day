ServerEvents.recipes(event => {

    //Delete rainbow items
    event.remove({output: ['ironfurnaces:item_linker',
        'ironfurnaces:rainbow_coal',
        'ironfurnaces:rainbow_core',
        'ironfurnaces:rainbow_plating',
        'ironfurnaces:million_furnace']
    })

    //Delete craft for unused furnace updates
    event.remove({output: [
        'ironfurnaces:upgrade_silver',
        'ironfurnaces:upgrade_gold'
    ]
    })

    //IRON FURNACE
    //Remove iron furnace crafts
    event.remove({
        output: 'ironfurnaces:iron_furnace'
    })

    //Add craft for iron furnace
    event.shaped(
        Item.of( 'ironfurnaces:iron_furnace', 1),
        [
          'AAA', 
          'ABA', 
          'AAA'  
        ],
        {
          A: 'minecraft:iron_ingot', 
          B: 'ironfurnaces:copper_furnace'
        }
      )

      //Remove iron furnace upgrader crafts
    event.remove({
        output: 'ironfurnaces:upgrade_iron2'
    })

    //Add craft for iron furnace upgrader
    event.shaped(
        Item.of('ironfurnaces:upgrade_iron2', 1),
        [
          'AAA', 
          'ABA', 
          'AAA'  
        ],
        {
          A: 'minecraft:iron_ingot', 
          B: 'minecraft:furnace'
        }
      ) 

    //SILVER FURNACE
    //Remove silver furnace crafts
    event.remove({
        output: 'ironfurnaces:silver_furnace'
    })

    //Add craft for silver furnace
    event.shaped(
        Item.of( 'ironfurnaces:silver_furnace', 1),
        [
          'AAA', 
          'ABA', 
          'AAA'  
        ],
        {
          A: 'galosphere:silver_ingot', 
          B: 'ironfurnaces:iron_furnace'
        }
      )

      //Remove silver furnace upgrader crafts
    event.remove({
        output: 'ironfurnaces:upgrade_silver2'
    })

    //Add craft for silver furnace upgrader
    event.shaped(
        Item.of('ironfurnaces:upgrade_silver2', 1),
        [
          'AAA', 
          'ABA', 
          'AAA'  
        ],
        {
          A: 'galosphere:silver_ingot', 
          B: 'minecraft:furnace'
        }
      ) 

    //GOLD FURNACE
    //Remove gold furnace crafts
    event.remove({
        output: 'ironfurnaces:gold_furnace'
    })

    //Add craft for gold furnace
    event.shaped(
        Item.of( 'ironfurnaces:gold_furnace', 1),
        [
          'AAA', 
          'ABA', 
          'AAA'  
        ],
        {
          A: 'minecraft:gold_ingot', 
          B: 'ironfurnaces:silver_furnace'
        }
      )

      //Remove gold furnace upgrader crafts
    event.remove({
        output: 'ironfurnaces:upgrade_gold2'
    })

    //Add craft for gold furnace upgrader
    event.shaped(
        Item.of('ironfurnaces:upgrade_gold2', 1),
        [
          'AAA', 
          'ABA', 
          'AAA'  
        ],
        {
          A: 'minecraft:gold_ingot', 
          B: 'minecraft:furnace'
        }
      ) 

    //DIAMOND FURNACE
    //Remove diamond furnace crafts
    event.remove({
        output: 'ironfurnaces:diamond_furnace'
    })

    //Add craft for diamond furnace
    event.shaped(
        Item.of( 'ironfurnaces:diamond_furnace', 1),
        [
          'AAA', 
          'ABA', 
          'AAA'  
        ],
        {
          A: 'minecraft:diamond', 
          B: 'ironfurnaces:gold_furnace'
        }
      )

      //Remove diamond furnace upgrader crafts
    event.remove({
        output: 'ironfurnaces:upgrade_diamond'
    })

    //Add craft for diamond furnace upgrader
    event.shaped(
        Item.of('ironfurnaces:upgrade_diamond', 1),
        [
          'AAA', 
          'ABA', 
          'AAA'  
        ],
        {
          A: 'minecraft:diamond', 
          B: 'minecraft:furnace'
        }
      ) 

    //EMERALD FURNACE
    //Remove emerald furnace upgrader crafts
    event.remove({
        output: 'ironfurnaces:upgrade_emerald'
    })

    //Add craft for emerald furnace upgrader
    event.shaped(
        Item.of('ironfurnaces:upgrade_emerald', 1),
        [
          'AAA', 
          'ABA', 
          'AAA'  
        ],
        {
          A: 'minecraft:emerald', 
          B: 'minecraft:furnace'
        }
      ) 

    //CRYSTAL FURNACE
    //Remove crystal furnace crafts
    event.remove({
        output: 'ironfurnaces:crystal_furnace'
    })

    //Add craft for crystal furnace
    event.shaped(
        Item.of( 'ironfurnaces:crystal_furnace', 1),
        [
          'AAA', 
          'ABA', 
          'AAA'  
        ],
        {
          A: 'alexsmobs:rainbow_glass', 
          B: 'ironfurnaces:diamond_furnace'
        }
      )

      //Remove diamond furnace upgrader crafts
    event.remove({
        output: 'ironfurnaces:upgrade_crystal'
    })

    //Add craft for diamond furnace upgrader
    event.shaped(
        Item.of('ironfurnaces:upgrade_crystal', 1),
        [
          'AAA', 
          'ABA', 
          'AAA'  
        ],
        {
          A: 'alexsmobs:rainbow_glass', 
          B: 'minecraft:furnace'
        }
      ) 

    //OBSIDIAN FURNACE
    //Remove obsidian furnace crafts
    event.remove({
        output: 'ironfurnaces:obsidian_furnace'
    })

    //Add craft for obsidian furnace with emerald
    event.shaped(
        Item.of( 'ironfurnaces:obsidian_furnace', 1),
        [
          'AAA', 
          'ABA', 
          'AAA'  
        ],
        {
          A: 'minecraft:obsidian', 
          B: 'ironfurnaces:emerald_furnace'
        }
      )

      //Add craft for obsidian furnace with crystal
    event.shaped(
        Item.of( 'ironfurnaces:obsidian_furnace', 1),
        [
          'AAA', 
          'ABA', 
          'AAA'  
        ],
        {
          A: 'minecraft:obsidian', 
          B: 'ironfurnaces:crystal_furnace'
        }
      )

      //Remove obsidian furnace upgrader crafts
    event.remove({
        output: [
            'ironfurnaces:upgrade_obsidian',
            'ironfurnaces:upgrade_obsidian2'
        ]
    })

    //Add craft for obsidian furnace upgraders
    event.shaped(
        Item.of('ironfurnaces:upgrade_obsidian', 1),
        [
          'AAA', 
          'ABA', 
          'AAA'  
        ],
        {
          A: 'minecraft:obsidian', 
          B: 'minecraft:furnace'
        }
      ) 

      event.shaped(
        Item.of('ironfurnaces:upgrade_obsidian2', 1),
        [
          'AAA', 
          'ABA', 
          'AAA'  
        ],
        {
          A: 'minecraft:obsidian', 
          B: 'minecraft:furnace'
        }
      ) 

      //NETHERITE FURNACE
    //Remove netherite furnace crafts
    event.remove({
        output: 'ironfurnaces:netherite_furnace'
    })

    //Add craft for netherite furnace
    event.shaped(
        Item.of( 'ironfurnaces:netherite_furnace', 1),
        [
          'AAA', 
          'CBD', 
          'AEA'  
        ],
        {
          A: 'minecraft:netherite_ingot', 
          B: 'ironfurnaces:obsidian_furnace',
          C: 'minecraft:diamond_block',
          D: 'minecraft:emerald_block',
          E: 'minecraft:nether_star'
        }
      )

      //Remove netherite furnace upgrader crafts
    event.remove({
        output: 'ironfurnaces:upgrade_netherite'
    })

    //Add craft for netherite furnace upgrader
    event.shaped(
        Item.of( 'ironfurnaces:netherite_furnace', 1),
        [
          'AAA', 
          'CBD', 
          'AEA'  
        ],
        {
          A: 'minecraft:netherite_ingot', 
          B: 'ironfurnaces:obsidian_furnace',
          C: 'minecraft:diamond_block',
          D: 'minecraft:emerald_block',
          E: 'minecraft:nether_star'
        }
      ) 
  })