JEIEvents.hideItems(event =>{

    //Delete rainbow items in JEI

        event.hide(['ironfurnaces:item_linker',
        'ironfurnaces:rainbow_coal',
        'ironfurnaces:rainbow_core',
        'ironfurnaces:rainbow_plating',
        'ironfurnaces:million_furnace'
    ])

    //Delete unused furnace upgrades in JEI
    event.hide(['ironfurnaces:upgrade_silver',
    'ironfurnaces:upgrade_gold'
    ])
})