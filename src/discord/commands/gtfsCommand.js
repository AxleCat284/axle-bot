const config = require("../../../config.json");
const messages = config.messages.discord

module.exports = {
    name: 'gtfs',
    description: 'Returns a png of the route searched',
    options: [
        {
            name: 'route',
            description: 'enter the route number example 001 or 113',
            type: 4,
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
