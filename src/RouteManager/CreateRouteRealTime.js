import GeoCoordinate from "../Entities/GeoCoordinate";
import BasicRoute from "../Entities/BasicRoute";
import * as CreateRoute from "./CreateRoute";

export default {
    main(){
        main();
    },

    getRoute(){
        route.getRoute();
    },
    stop(){
        stop();
    }
}

class RouteCreator{
    constructor(){
        this.geoCoordinates = [];
        this.nameRoute = "";
        this.routeIsOver = false;
    }

    addCoords(coords){
        if(!this.checkCoordsAlreadyExist(coords)){
            this.geoCoordinates.push(coords);
            console.log(coords)
        }
        
    }
    checkCoordsAlreadyExist(coords){
        let aux = false;
        this.geoCoordinates.map(a =>{
            if(a.lat === coords.lat && a.lng === coords.lng){
                aux = true;
            }
        })
        return aux;
    }
    putNameToRoute(name){
        this.nameRoute = name;
    }

    getRoute(){
        let r = new BasicRoute(this.nameRoute, this.geoCoordinates);
        CreateRoute.default.createNormalBasic(r);
    }

    resetRoute(){
        this.geoCoordinates = [];
        this.nameRoute = "";
    }
}

const route = new RouteCreator();

function stop(){
    route.routeIsOver = true;
}
async function main (){
        while(!route.routeIsOver){
            navigator.geolocation.getCurrentPosition((position) =>{
                    putCoords(position.coords.latitude, position.coords.longitude);
            }, error, options);

            await sleep(2000);
        }
        route.putNameToRoute("finalTest");
        route.getRoute();
}

function putCoords(lat, long){
        let latitude = lat;
        let longitude = long;
        route.addCoords(new GeoCoordinate(latitude, longitude));
}

function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
   }

   
function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};