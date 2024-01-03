const config = require("../../../config.json");
const { GetNextTripsForStopAllRoutes } = require("../../functions/getOC");
const messages = config.messages.discord

module.exports = {
    name: 'trips-routes',
    description: 'Retrieves next three trips for all routes for a given stop number.',
    options: [
        {
            name: 'stopnum',
            description: 'Enter the stop number, example 3000',
            type: 3,
            required: true
        }
    ],

    execute: async (interaction, client, InteractionCreate) => {
        try {
            const stopnum = interaction.options.getString('stopnum')
            const routeDATA = await GetNextTripsForStopAllRoutes(stopnum);
            const stop_data_embed = {
                color: 0xffa600,
                title: `${routeDATA.stop_name} || ${routeDATA.stop_number}`,
                description: "",
                fields: routeDATA.fields
                ,
                timestamp: new Date().toISOString(),
                footer: {text: `${messages.defaultbetter}`, iconURL: `${messages.icon}`},
                };
            //    await interaction.reply({ content: "testing", ephemeral: false })
           await interaction.reply({ embeds: [ stop_data_embed ], ephemeral: false })
        
    } catch (err) {
        await interaction.reply({content: `An error happened!\n${err}`, ephemeral: false})
    }

    }
};;
