Use **APIRoutes.constant.ts** file to place all the API's .
Use **APPRoutes.constant.ts** file to place all the application related routes.

**To make API calls**
Use:
    **getPromise()** to make **GET** request.
    **postPromise()** to make **POST** request.
    **deletePromise()** to make **DELETE** request.
    **putPromise()** to make **PUT** request.
    These above functions are present in **ComponentBase.class.ts,** so just extend this class.


If particular **api-call/service** is being used in more than **one or two** places then only create a service file for that service, otherwise no need to create a service file instead use functions from **ComponentBase.class.ts**


The **core** folder, located inside **src/**, contains all **globally used resources**, such as components, pipes, constants, services, interfaces, and other reusable entities. This folder serves as a central hub for items **shared across the entire application**.