ServerEvents.recipes(event => {

    //Delete one probes helmet items
    event.remove({output: ['theoneprobe:diamond_helmet_probe',
    'theoneprobe:gold_helmet_probe',
    'theoneprobe:iron_helmet_probe']
    })
})