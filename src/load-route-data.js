const loadRouteData = (matchingRoutes, dispatch) => {
    const dataCalls = matchingRoutes.map(({ route, match }) => {
        const {
            loadData
        } = route;
        
        if (loadData) { 
            return route.loadData(
                dispatch,
                match.params || {}
            );
        }
        return Promise.resolve();
    });

    return dataCalls;
};

export default loadRouteData;
