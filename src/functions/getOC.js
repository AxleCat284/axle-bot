const axios = require('axios');
const appID = `9999636c`;
const apiKey = `1a48a6879a6fe41c14f4929d5afb7e3b`;

async function GetRouteSummaryForStop(stop_number) {
    const responseData = await axios.get(`https://api.octranspo1.com/v2.0/GetRouteSummaryForStop?appID=${appID}&apiKey=${apiKey}&stopNo=${stop_number}`);

    let routesData = [];

    if (responseData.data.GetRouteSummaryForStopResult.Error === "") {
        const routes = responseData.data.GetRouteSummaryForStopResult.Routes.Route;

        routes.forEach(route => {
            routesData.push({
                RouteNo: route.RouteNo,
                RouteHeading: route.RouteHeading,
                Direction: route.Direction,
                DirectionID: route.DirectionID
            });
        });
    } else {
        console.log("Error: " + responseData.data.GetRouteSummaryForStopResult.Error);
    }

    const groupedRoutesData = routesData.reduce((accumulator, route) => {
        if (accumulator[route.RouteNo]) {
            accumulator[route.RouteNo].push(route.RouteHeading);
        } else {
            accumulator[route.RouteNo] = [route.RouteHeading];
        }
        return accumulator;
    }, {});

    // Create an array of fields for Discord embed message
    const fields = Object.entries(groupedRoutesData).map(([routeNo, routeHeadings]) => {
        return {
            name: `Route Number: ${routeNo}`,
            value: routeHeadings.join('\n'),
            inline: false,
        };
    });
    return {
        fields,
        stop_name: responseData.data.GetRouteSummaryForStopResult.StopDescription,
        stop_number
    };
}

async function GetNextTripsForStopAllRoutes(stop_number) {
    const responseData = await axios.get(`https://api.octranspo1.com/v2.0/GetNextTripsForStopAllRoutes?appID=${appID}&apiKey=${apiKey}&stopNo=${stop_number}`);
    console.log(responseData.data)
    let routesData = [];

    if (responseData.data.GetRouteSummaryForStopResult.Error === "") {
        const routes = responseData.data.GetRouteSummaryForStopResult.Routes.Route;

        routes.forEach(route => {
            routesData.push({
                RouteNo: route.RouteNo,
                RouteHeading: route.RouteHeading,
                Direction: route.Direction,
                DirectionID: route.DirectionID
            });
        });
    } else {
        console.log("Error: " + responseData.data.GetRouteSummaryForStopResult.Error);
    }

    const groupedRoutesData = routesData.reduce((accumulator, route) => {
        if (accumulator[route.RouteNo]) {
            accumulator[route.RouteNo].push(route.RouteHeading);
        } else {
            accumulator[route.RouteNo] = [route.RouteHeading];
        }
        return accumulator;
    }, {});

    // Create an array of fields for Discord embed message
    const fields = Object.entries(groupedRoutesData).map(([routeNo, routeHeadings]) => {
        return {
            name: `Route Number: ${routeNo}`,
            value: routeHeadings.join('\n'),
            inline: false,
        };
    });

    return {
        fields,
        stop_name: responseData.data.GetRouteSummaryForStopResult.StopDescription,
        stop_number
    };
}

async function GetNextTripsForStop(route_number, stop_number) {

}
async function GTFS() {}

module.exports = { GetRouteSummaryForStop, GetNextTripsForStop, GetNextTripsForStopAllRoutes, GTFS };