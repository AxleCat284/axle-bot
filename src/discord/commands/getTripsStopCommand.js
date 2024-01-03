const config = require("../../../config.json");
const messages = config.messages.discord

module.exports = {
    name: 'trips-stop',
    description: 'Retrieves next three trips on the route for a given stop number.',
    options: [
        {
            name: 'stopnum',
            description: 'Enter the stop number, example 3000',
            type: 3,
            required: true
        },
        {
            name: 'routenum',
            description: 'Enter the route number, example 85',
            type: 3,
            required: true
        }
    ],

    execute: async (interaction, client, InteractionCreate) => {
        try {
        const route_number = interaction.options.getInteger('route')
        // https://www.octranspo.com/images/files/routes/019map.gif
        function padRouteNumber(route_number) {
            // If route_number is not a 3 digit number
            if (route_number.toString().length !== 3) {
                // Add leading zeros until it becomes a 3 digit number
                while (route_number.toString().length < 3) {
                    route_number = '0' + route_number.toString();
                }
            }

            return route_number;
        }
        const message = `Route Map for ${padRouteNumber(route_number)}\nhttps://www.octranspo.com/images/files/routes/${padRouteNumber(route_number)}map.gif`
        await interaction.reply({ content: message, ephemeral: false })
    } catch (err) {
        await interaction.reply({content: `An error happened!\n${err}`, ephemeral: false})
    }

    }
};;
