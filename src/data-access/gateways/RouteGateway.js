export function findByName(name) {
}

export function findAll() {
    // call to ldflex to find every :Route
    //var routes = RouteRDF.findAll();
    // convert the routes to JSON
    //var parsedRoutes = RouteJSONtoRDF.toJSON(routes);
    //return parsedRoutes;
    return new Array();
}

export function read(routeFile) {
    let routeReader = new ReadRoute();
    let routeList  = routeReader.readRoute(routeFile);
    return routeList;
}

export function add(route) {
    // Note: route is in GeoJSON format, or similar
    // pass the route to RouteJSONtoRDF, receive RDF object
    //var parsedRoute = RouteJSONtoRDF.toRDF(route);
    // call to add the route in the pod accordingly
    //await RouteRDF.add(parsedRoute);
}

export function deleteByName(name) {
    // call to find the route by the name
    //var route = await RouteRDF.findByName(name);
    // if any, call again to delete it
    //if(route && route.name) {
    //    RouteRDF.delete(route);
    //}
}

export function updateByName(name, route) {
    // call to ldflex to find route by the name
    //var route = await RouteRDF.findByName(name);
    // if any, modify it
    //if(route && route.name) {
    //    RouteRDF.update(route);
    //}
}