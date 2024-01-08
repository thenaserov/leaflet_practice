var nodeMaps = {
    11: {fid: "recloser.1", gis_type: "recloser"},
    12: {fid: "recloser.2" , gis_type: "reclose"},
    13: {fid: "V_meter.3", gis_type: "V_meter"},
    14: {fid: "V_meter.34", gis_type: "V_meter"},
    15: {fid: "recloser.3", gis_type: "recloser"},
    16: {fid: "V_meter.51", gis_type: "V_meter"},
    17: {fid: "V_meter.20", gis_type: "V_meter"},
    18: {fid: "recloser.4", gis_type: "recloser"},
    19: {fid: "recloser.5", gis_type: "recloser"},
    20: {fid: "recloser.6", gis_type: "recloser"},
    21: {fid: "recloser.7", gis_type: "recloser"},
    22: {fid: "recloser.8", gis_type: "recloser"},
    23: {fid: "recloser.9", gis_type: "recloser"},
    24: {fid: "recloser.10", gis_type: "recloser"},
    25: {fid: "V_meter.21", gis_type: "V_meter"},
    26: {fid: "V_meter.65", gis_type: "V_meter"},
    27: {fid: "V_meter.23", gis_type: "V_meter"},
    28: {fid: "V_meter.24", gis_type: "V_meter"},
    29: {fid: "V_meter.40", gis_type: "V_meter"},
    30: {fid: "V_meter.26", gis_type: "V_meter"},
    31: {fid: "V_meter.27", gis_type: "V_meter"},
    32: {fid: "V_meter.28", gis_type: "V_meter"},
    40: {fid: "Flt_Indc.1", gis_type: "Flt_Indc"},
    41: {fid: "Flt_Indc.2", gis_type: "Flt_Indc"},
    42: {fid: "Flt_Indc.3", gis_type: "Flt_Indc"},
    43: {fid: "Flt_Indc.4", gis_type: "Flt_Indc"},
    44: {fid: "Flt_Indc.5", gis_type: "Flt_Indc"},
    45: {fid: "Flt_Indc.6", gis_type: "Flt_Indc"},
    46: {fid: "Flt_Indc.7", gis_type: "Flt_Indc"},
    47: {fid: "Flt_Indc.8", gis_type: "Flt_Indc"},
    48: {fid: "Flt_Indc.9", gis_type: "Flt_Indc"},
    50: {fid: "HV_Substat.1", gis_type: "HV_Substat"},
    51: {fid: "HV_Substat.2", gis_type: "HV_Substat"},
    52: {fid: "HV_Substat.3", gis_type: "HV_Substat"},
};

var map = L.map('map').setView([33.0639, 46.9092], 9);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

function setBrkSVG(strokeColor, fillColor, opacity = "1", tag, blink) {
    pointSVG = `<svg width="35" height="17">
    <circle cx="7" cy="7" r="6" stroke="${strokeColor}" stroke-width="2" fill="${fillColor}" opacity=${opacity}></circle>
    <text style="white-space: pre; fill: rgb(255, 18, 18); font-family: Arial, sans-serif; font-size: 10px;" x="12.725" y="16.02" opacity=${opacity}>${tag}</text>
</svg>`;
}

function basePointTypeGeoJSON() {
    return {
        type: "FeatureCollection", features: [], // feature: type, id, geometry: type, coordinate, geometry_name, properties
        crs: {
            "type": "name", "properties": {
                "name": "urn:ogc:def:crs:EPSG::4326"
            }
        }
    };
}


// tutorial 3
// var LeafIcon = L.Icon.extend({
//     options: {
//         shadowUrl: 'leaf-shadow.png',
//         iconSize:     [38, 95],
//         shadowSize:   [50, 64],
//         iconAnchor:   [22, 94],
//         shadowAnchor: [4, 62],
//         popupAnchor:  [-3, -76]
//     }
// });


// var greenIcon = new LeafIcon({iconUrl: 'leaf-green.png'}),
//     redIcon = new LeafIcon({iconUrl: 'leaf-red.png'}),
//     orangeIcon = new LeafIcon({iconUrl: 'leaf-orange.png'});


// L.icon = function (options) {
//     return new L.Icon(options);
// };


// L.marker([51.5, -0.09], {icon: greenIcon}).addTo(map).bindPopup("I am a green leaf.");
// L.marker([51.495, -0.083], {icon: redIcon}).addTo(map).bindPopup("I am a red leaf.");
// L.marker([51.49, -0.1], {icon: orangeIcon}).addTo(map).bindPopup("I am an orange leaf.");

// // tutorial 4
// var marker = L.marker([50.4501, 30.5234],
//     {alt: 'Kyiv'}).addTo(map) // "Kyiv" is the accessible name of this marker
//     .bindPopup('Kyiv, Ukraine is the birthplace of Leaflet!');


// // tutorial 5
// var geojsonFeature = {
//     "type": "Feature",
//     "properties": {
//         "name": "Coors Field",
//         "amenity": "Baseball Stadium",
//         "popupContent": "This is where the Rockies play!"
//     },
//     "geometry": {
//         "type": "Point",
//         "coordinates": [-104.99404, 39.75621]
//     }
// };

// L.geoJSON(geojsonFeature).addTo(map);

// var myLines = [{
//     "type": "LineString",
//     "coordinates": [[-100, 40], [-105, 45], [-110, 55]]
// }, {
//     "type": "LineString",
//     "coordinates": [[-105, 40], [-110, 45], [-115, 55]]
// }];

// var myLayer = L.geoJSON().addTo(map);
// myLayer.addData(geojsonFeature);

// var myLines = [{
//     "type": "LineString",
//     "coordinates": [[-100, 40], [-105, 45], [-110, 55]]
// }, {
//     "type": "LineString",
//     "coordinates": [[-105, 40], [-110, 45], [-115, 55]]
// }];

// var myStyle = {
//     "color": "#ff7800",
//     "weight": 5,
//     "opacity": 0.65
// };

// L.geoJSON(myLines, {
//     style: myStyle
// }).addTo(map);

// var states = [{
//     "type": "Feature",
//     "properties": {"party": "Republican"},
//     "geometry": {
//         "type": "Polygon",
//         "coordinates": [[
//             [-104.05, 48.99],
//             [-97.22,  48.98],
//             [-96.58,  45.94],
//             [-104.03, 45.94],
//             [-104.05, 48.99]
//         ]]
//     }
// }, {
//     "type": "Feature",
//     "properties": {"party": "Democrat"},
//     "geometry": {
//         "type": "Polygon",
//         "coordinates": [[
//             [-109.05, 41.00],
//             [-102.06, 40.99],
//             [-102.03, 36.99],
//             [-109.04, 36.99],
//             [-109.05, 41.00]
//         ]]
//     }
// }];

// L.geoJSON(states, {
//     style: function(feature) {
//         switch (feature.properties.party) {
//             case 'Republican': return {color: "#ff0000"};
//             case 'Democrat':   return {color: "#0000ff"};
//         }
//     }
// }).addTo(map);

// var geojsonMarkerOptions = {
//     radius: 8,
//     fillColor: "#ff7800",
//     color: "#000",
//     weight: 1,
//     opacity: 1,
//     fillOpacity: 0.8
// };

// L.geoJSON(someGeojsonFeature, {
//     pointToLayer: function (feature, latlng) {
//         return L.circleMarker(latlng, geojsonMarkerOptions);
//     }
// }).addTo(map);

// function onEachFeature(feature, layer) {
//     // does this feature have a property named popupContent?
//     if (feature.properties && feature.properties.popupContent) {
//         layer.bindPopup(feature.properties.popupContent);
//     }
// }

// var geojsonFeature = {
//     "type": "Feature",
//     "properties": {
//         "name": "Coors Field",
//         "amenity": "Baseball Stadium",
//         "popupContent": "This is where the Rockies play!"
//     },
//     "geometry": {
//         "type": "Point",
//         "coordinates": [-104.99404, 39.75621]
//     }
// };

// L.geoJSON(geojsonFeature, {
//     onEachFeature: onEachFeature
// }).addTo(map);

// var someFeatures = [{
//     "type": "Feature",
//     "properties": {
//         "name": "Coors Field",
//         "show_on_map": true
//     },
//     "geometry": {
//         "type": "Point",
//         "coordinates": [-104.99404, 39.75621]
//     }
// }, {
//     "type": "Feature",
//     "properties": {
//         "name": "Busch Field",
//         "show_on_map": false
//     },
//     "geometry": {
//         "type": "Point",
//         "coordinates": [-104.98404, 39.74621]
//     }
// }];

// L.geoJSON(someFeatures, {
//     filter: function(feature, layer) {
//         return feature.properties.show_on_map;
//     }
// }).addTo(map);




// ali wms

var COMMENTS_layer = L.tileLayer.wms("http://localhost:8080/geoserver/Ilam_workspace/wms", {
    layers: 'Ilam_workspace:COMMENTS',
    format: 'image/png',
    transparent: true,
    version: '1.1.0',
    attribution: "states"

});

// COMMENTS_layer.addTo(map)
var Ov_HdMVL_layer = L.tileLayer.wms("http://localhost:8080/geoserver/Ilam_workspace/wms", {
    layers: 'Ilam_workspace:Ov_HdMVL',
    format: 'image/png',
    transparent: true,
    version: '1.1.0',
    attribution: "states"

});
// Ov_HdMVL_layer.addTo(map)

var recloser_layer = L.tileLayer.wms("http://localhost:8080/geoserver/Ilam_workspace/wms", {
    layers: 'Ilam_workspace:recloser',
    format: 'image/png',
    transparent: true,
    version: '1.1.0',
    attribution: "states"

});

var PLAN_layer = L.tileLayer.wms("http://localhost:8080/geoserver/Ilam_workspace/wms", {
    layers: 'Ilam_workspace:PLAN',
    format: 'image/png',
    transparent: true,
    version: '1.1.0',
    attribution: "states"

});

var substat_layer = L.tileLayer.wms("http://localhost:8080/geoserver/Ilam_workspace/wms", {
    layers: 'Ilam_workspace:substat',
    format: 'image/png',
    transparent: true,
    version: '1.1.0',
    attribution: "states"

});

var REGIONS_layer = L.tileLayer.wms("http://localhost:8080/geoserver/Ilam_workspace/wms", {
    layers: 'Ilam_workspace:substat',
    format: 'image/png',
    transparent: true,
    version: '1.1.0',
    attribution: "states"

});


var recloser_layer = L.layerGroup([recloser_layer]);
var Ov_HdMVL_layer = L.layerGroup([Ov_HdMVL_layer]);
var COMMENTS_layer = L.layerGroup([COMMENTS_layer]);
var PLAN_layer = L.layerGroup([PLAN_layer]);
var substat_layer = L.layerGroup([substat_layer]);


// recloser_layer.addTo(map)
// Ov_HdMVL_layer.addTo(map)


// WFS
// Ilam_workspace:COMMENTS 

var url_recloser = 'http://localhost:8080/geoserver/wfs?service=wfs&version=2.0.0&request=GetFeature&typeNames=Ilam_workspace:recloser&outputFormat=json&srsName=epsg:4326';
// TODO : this link might be invalid
var url_Auto_Switch = 'http://localhost:8080/geoserver/wfs?service=wfs&version=2.0.0&request=GetFeature&typeNames=Ilam_workspace:Auto_Switch&outputFormat=json&srsName=epsg:4326';
var url_Circ_Brk = 'http://localhost:8080/geoserver/wfs?service=wfs&version=2.0.0&request=GetFeature&typeNames=Ilam_workspace:Circ_Brk&outputFormat=json&srsName=epsg:4326';



var recloser_wfs_layer = L.geoJSON(null, {
    pointToLayer: function (feature, latlng) {

        return L.circleMarker(latlng, {

            radius: 5, fillColor: "#00ffcc", color: "#1f1f7a", weight: 1, opacity: 1, fillOpacity: 0.8,

            contextmenu: true, contextmenuItems: [{
                text: 'Set Alarm', // callback: setAlarm,
                contextmenuInheritItems: true,
            }],
        },);
    },
    onEachFeature: function (feature, layer) {

        var message = feature.id;
        layer.bindPopup("<p><strong>" + message + "</strong></p>");
        layer.on({
            mouseover: function (e) {
                var layer = e.target;
                layer.setStyle({
                    radius: 5, fillColor: "#13d30c", color: "#000", weight: 1, opacity: 1, fillOpacity: 0.8
                });
            }, mouseout: function (e) {
                var layer = e.target;
                layer.setStyle({
                    radius: 5, fillColor: "#00ffcc", color: "#1f1f7a", weight: 1, opacity: 1, fillOpacity: 0.8
                });

            }, click: function (e) {

            }
            , dblclick: function (e) {
            }
        });
    },

}); 



//  json list
let json_list = {};


// sample get json
$.getJSON(url_recloser).then((res) => {
	json_list["recloser"] = res;
	recloser_wfs_layer.addData(res);
});

// $getJSON(url_Auto_Switch).then((res) => {
//     // case sensitivity might effect this operation
//     json_list["auto_switch"] = res
//     recloser_wfs2_layer.addData(res);
// });

// should i write a get json here for auto switch


function setValue(input) {

    if (input === 2 || input === "CLOSE") {
        return "CLOSE";

    } else if (input === 1 || input === "OPEN") {
        return "OPEN";

    } else if (input === 3 || input === "FAULTY") {
        return "FAULTY";

    } else if (input === 0 || input === "INTERMEDIATE") {
        return "INTERMEDIATE";
    }
}

function setOPCQuality(input) {
    exOPCQualityStates = {
        MANUAL: 512, BADDATA: 264, GOOD: 448
    }

    tagChar = "";
    if (input & exOPCQualityStates.MANUAL) {
        tagChar = "MANUAL";
    } else if ((input & exOPCQualityStates.GOOD) == exOPCQualityStates.GOOD) {
        tagChar = "GOOD";
    } else if (input & exOPCQualityStates.BADDATA) {
        tagChar = 'BAD DATA';
    }

    return tagChar;

}

function setUserQualities(input) {
    exUserQualities = {
        AlarmInhibit: 16,
        AlarmNotAck: 32,
        DispatcherNote: 64,
        SirenInhibit: 128,
        ControlInhibit: 256,
        OperatorBlocked: 4096,
        EventInhibit: 65536
    }

    tagChar = "";
    if (input & exUserQualities.DispatcherNote) {
        tagChar = "(N)";
    } else if (input & exUserQualities.OperatorBlocked) {
        tagChar = "(O)";
    } else if (input & exUserQualities.EventInhibit) {
        tagChar = "(Ev)";
    } else if (input & exUserQualities.AlarmInhibit) {
        tagChar = "(A)";
    } else if (input & exUserQualities.ControlInhibit) {
        tagChar = "(C)";
    } else if (input & exUserQualities.SirenInhibit) {
        tagChar = "(S)";
    }

    return tagChar;
}

function _isEmpty(object) {
    for (const property in object) {
        return false;
    }
    return true;
}

function setBrkSVG(strokeColor, fillColor, opacity = "1", tag, blink) {
    pointSVG = `<svg width="35" height="17">
    <circle cx="7" cy="7" r="6" stroke="${strokeColor}" stroke-width="2" fill="${fillColor}" opacity=${opacity}></circle>
    <text style="white-space: pre; fill: rgb(255, 18, 18); font-family: Arial, sans-serif; font-size: 10px;" x="12.725" y="16.02" opacity=${opacity}>${tag}</text>
</svg>`;

//     blinkPointSVG = `<svg width="12" height="12">
//     <circle cx="6" cy="6" r="6" stroke="${strokeColor}" stroke-width="2" fill="${fillColor}" opacity="1"></circle>
// <text style="white-space: pre; fill: rgb(255, 18, 18); font-family: Arial, sans-serif; font-size: 13px;" x="12.725" y="16.02">${tag}</text>
// <animate attributeName="opacity" dur="1s" keyTimes="0;0.5;1" values="0;1;0" repeatCount="indefinite"/>
// </svg>`;

    if (blink) {
        return L.divIcon({
            html: pointSVG, className: "blinking", iconSize: [12, 12], // iconAnchor: [12, 40],
        });

    } else {
        return L.divIcon({
            html: pointSVG, className: "", iconSize: [12, 12], // iconAnchor: [12, 40],
        });
    }

}

function setBrkSVGCross(fillColor, tag, blink) {

    if (blink) {
        return L.divIcon({
            html: `<svg viewBox="315.844 153.981 18.994 20.631" width="35" height="20.631">
    <g transform="matrix(1, 0, 0, 1, 315.843323, 153.98111)">
    <path style="fill:${fillColor};" d="M11.145,9.085L7.723,5.664l3.422-3.421c0.243-0.244,0.243-0.64,0-0.883L9.967,0.183
c-0.244-0.244-0.64-0.244-0.883,0L5.662,3.604l-3.42-3.421c-0.244-0.244-0.639-0.244-0.883,0L0.183,1.36
c-0.243,0.244-0.243,0.639,0,0.883l3.421,3.421L0.183,9.085c-0.243,0.244-0.243,0.639,0,0.883l1.177,1.178
c0.244,0.243,0.639,0.243,0.883,0l3.42-3.422l3.422,3.422c0.243,0.243,0.639,0.243,0.883,0l1.178-1.178
C11.389,9.724,11.389,9.329,11.145,9.085z"></path>
</g>
<text style="fill: rgb(225,0,0); font-family: Arial, sans-serif; font-size: 10px; white-space: pre;" x="328.16" y="172.395">${tag}</text>
</svg>`,
            className: "blinking",
            iconSize: [12, 12], // iconAnchor: [12, 40],
        });
    } else {
        return L.divIcon({
            html: `<svg viewBox="315.844 153.981 18.994 20.631" width="35" height="20.631">
    <g transform="matrix(1, 0, 0, 1, 315.843323, 153.98111)">
    <path style="fill:${fillColor};" d="M11.145,9.085L7.723,5.664l3.422-3.421c0.243-0.244,0.243-0.64,0-0.883L9.967,0.183
c-0.244-0.244-0.64-0.244-0.883,0L5.662,3.604l-3.42-3.421c-0.244-0.244-0.639-0.244-0.883,0L0.183,1.36
c-0.243,0.244-0.243,0.639,0,0.883l3.421,3.421L0.183,9.085c-0.243,0.244-0.243,0.639,0,0.883l1.177,1.178
c0.244,0.243,0.639,0.243,0.883,0l3.42-3.422l3.422,3.422c0.243,0.243,0.639,0.243,0.883,0l1.178-1.178
C11.389,9.724,11.389,9.329,11.145,9.085z"></path>
</g>
<text style="fill: rgba(225,0,0,0.91); font-family: Arial, sans-serif; font-size: 10px; white-space: pre;" x="328.16" y="172.395">${tag}</text>
</svg>`,
            className: "",
            iconSize: [12, 12], // iconAnchor: [12, 40],
        });
    }

}

function VMeterSVG(fillColor, tag, blink) {
    if (blink) {
        return L.divIcon({
            html: `<svg height="20" width="100">
               <rect width="100" height="50" style="fill:${fillColor};stroke-width:1;opacity: 0.5" />
               <circle cx="9" cy="10" r="5" style="fill:rgb(142,0,225);stroke-width:1;opacity: 0.5" />
               <text x="15" y="15" fill="blue" font-size="smaller">${tag}</text>
                </svg>`, className: "blinking", iconSize: [20, 20], // iconAnchor: [12, 40],
        });
    } else {
        return L.divIcon({
            html: `<svg height="20" width="100">
               <rect width="100" height="50" style="fill:${fillColor};stroke-width:1;opacity: 0.5" />
               <circle cx="9" cy="10" r="5" style="fill:rgb(142,0,225);stroke-width:1;opacity: 0.5" />
               <text x="15" y="15" fill="blue" font-size="smaller">${tag}</text>
                </svg>`, className: "", iconSize: [20, 20], // iconAnchor: [12, 40],
        });
    }
}   





// ********************************************************* WFS LAYERS *********************************************************


var recloser_wfs2_layer = L.geoJSON(null, {
    pointToLayer: function (feature, latlng) {
        // latlng.lat = latlng.lat + lt;
        // latlng.lng = latlng.lng + (lg);
        if (feature.E) {
            marker = L.marker(latlng, {
                icon: setBrkSVG("rgba(0,0,0,0.22)", "rgba(18,255,219,0.35)", "0.4", "E", ""), draggable: false,
            });
            marker.E = true;

            return marker;

        } else {

            opc = setOPCQuality(feature.SCADA_FEATURES.OPCQuality);
            value = setValue(feature.SCADA_FEATURES.value);
            user = setUserQualities(feature.SCADA_FEATURES.userQuality)
            needack = (feature.SCADA_FEATURES.userQuality & exUserQualities.AlarmNotAck);


            if (opc === "MANUAL" && value === "OPEN") {
                marker = L.marker(latlng, {
                    icon: setBrkSVG("#FF7E3D", "transparent", "1", user, needack), draggable: false,
                });

                marker["id"] = feature.id;
                marker["properties"] = feature.properties;
                marker["SCADA_DESCRIPTION"] = feature.SCADA_FEATURES;

                return marker;

            } else if (opc === "MANUAL" && value === "CLOSE") {
                marker = L.marker(latlng, {
                    icon: setBrkSVG("#FF7E3D", "#FF7E3D", "1", user, needack), draggable: false,
                });
                marker["id"] = feature.id;
                marker["properties"] = feature.properties;
                marker["SCADA_DESCRIPTION"] = feature.SCADA_FEATURES;

                return marker;

            } else if (opc === "MANUAL" && (value === "FAULTY" || value === "INTERMEDIATE")) {
                marker = L.marker(latlng, {
                    icon: setBrkSVGCross("#FF7E3D", user, needack),
                    draggable: false,
                });
                marker["id"] = feature.id;
                marker["properties"] = feature.properties;
                marker["SCADA_DESCRIPTION"] = feature.SCADA_FEATURES;

                return marker;

            } else if (opc === "GOOD" && value === "OPEN") {
                marker = L.marker(latlng, {
                    icon: setBrkSVG("#3dff40", "transparent", "1", user, needack), draggable: false,
                });

                marker["id"] = feature.id;
                marker["properties"] = feature.properties;
                marker["SCADA_DESCRIPTION"] = feature.SCADA_FEATURES;

                return marker;

            } else if (opc === "GOOD" && value === "CLOSE") {
                marker = L.marker(latlng, {
                    icon: setBrkSVG("#3dff40", "#3dff40", "1", user, needack), draggable: false,
                });
                marker["id"] = feature.id;
                marker["properties"] = feature.properties;
                marker["SCADA_DESCRIPTION"] = feature.SCADA_FEATURES;

                return marker;

            } else if (opc === "GOOD" && (value === "FAULTY" || value === "INTERMEDIATE")) {
                marker = L.marker(latlng, {
                    icon: setBrkSVGCross("#3dff40", user, needack),
                    draggable: false,
                });
                marker["id"] = feature.id;
                marker["properties"] = feature.properties;
                marker["SCADA_DESCRIPTION"] = feature.SCADA_FEATURES;

                return marker;

            } else if (opc === "BAD DATA" && value === "OPEN") {
                marker = L.marker(latlng, {
                    icon: setBrkSVG("#eefc2f", "transparent", "1", user, needack), draggable: false,
                });

                marker["id"] = feature.id;
                marker["properties"] = feature.properties;
                marker["SCADA_DESCRIPTION"] = feature.SCADA_FEATURES;

                return marker;

            } else if (opc === "BAD DATA" && value === "CLOSE") {
                marker = L.marker(latlng, {
                    icon: setBrkSVG("#eefc2f", "#eefc2f", "1", user, needack), draggable: false,
                });
                marker["id"] = feature.id;
                marker["properties"] = feature.properties;
                marker["SCADA_DESCRIPTION"] = feature.SCADA_FEATURES;

                return marker;

            } else if (opc === "BAD DATA" && (value === "FAULTY" || value === "INTERMEDIATE")) {
                marker = L.marker(latlng, {
                    icon: setBrkSVGCross("#eefc2f", user, needack),
                    draggable: false,
                });
                marker["id"] = feature.id;
                marker["properties"] = feature.properties;
                marker["SCADA_DESCRIPTION"] = feature.SCADA_FEATURES;

                return marker;

            }


        }

    }
    , onEachFeature: function (feature, layer) {

        layer.on({

            

            dblclick: function (e) {
                if (!e.sourceTarget.E) window.interface.buildingblockClicked(e.sourceTarget.SCADA_DESCRIPTION.id, 1);
            },

            click: function (e) {
                if (e.sourceTarget.E) {
                    document.getElementById("featureDescription").innerHTML = `<p>
                    FID: ${e.sourceTarget.feature.id}<br>

                    ID: ${e.sourceTarget.feature.properties.ID}<br>
                    Ins_Year: ${e.sourceTarget.feature.properties.Ins_Year}<br>
                    Type: ${e.sourceTarget.feature.properties.Type}<br>
                    Kslc: ${e.sourceTarget.feature.properties.Kslc}<br>
                    Specific_I: ${e.sourceTarget.feature.properties.Specific_I}<br>
                    Vol_Type: ${e.sourceTarget.feature.properties.Vol_Type}<br>
                    Proj_ID: ${e.sourceTarget.feature.properties.Proj_ID}<br>
                    Attach: ${e.sourceTarget.feature.properties.Attach}<br>
                    Descriptio: ${e.sourceTarget.feature.properties.Descriptio}<br>
                    Line_ID_Cd: ${e.sourceTarget.feature.properties.Line_ID_Cd}<br>
                    Enabled: ${e.sourceTarget.feature.properties.Enabled}<br>
                    fj_feeder_: ${e.sourceTarget.feature.properties.fj_feeder_}<br>
                    fj_reg_no: ${e.sourceTarget.feature.properties.fj_reg_no}<br>
                    PostID: ${e.sourceTarget.feature.properties.PostID}<br>
                    Post_Type: ${e.sourceTarget.feature.properties.Post_Type}<br>
                    Post_Code: ${e.sourceTarget.feature.properties.Post_Code}<br>
                    Post_Name: ${e.sourceTarget.feature.properties.Post_Name}<br>
                    Manufactor: ${e.sourceTarget.feature.properties.Manufactor}<br>
                    GlobalID: ${e.sourceTarget.feature.properties.GlobalID}<br><p>
                   `;
                    document.getElementById("SCADADescription").innerHTML = `<p></p>`;
                } else {
                    document.getElementById("featureDescription").innerHTML = `<p>
                    FID: ${e.sourceTarget.SCADA_DESCRIPTION.fid}<br>

                    ID: ${e.sourceTarget.properties.ID}<br>
                    Ins_Year: ${e.sourceTarget.properties.Ins_Year}<br>
                    Type: ${e.sourceTarget.properties.Type}<br>
                    Kslc: ${e.sourceTarget.properties.Kslc}<br>
                    Specific_I: ${e.sourceTarget.properties.Specific_I}<br>
                    Vol_Type: ${e.sourceTarget.properties.Vol_Type}<br>
                    Proj_ID: ${e.sourceTarget.properties.Proj_ID}<br>
                    Attach: ${e.sourceTarget.properties.Attach}<br>
                    Descriptio: ${e.sourceTarget.properties.Descriptio}<br>
                    Line_ID_Cd: ${e.sourceTarget.properties.Line_ID_Cd}<br>
                    Enabled: ${e.sourceTarget.properties.Enabled}<br>
                    fj_feeder_: ${e.sourceTarget.properties.fj_feeder_}<br>
                    fj_reg_no: ${e.sourceTarget.properties.fj_reg_no}<br>
                    PostID: ${e.sourceTarget.properties.PostID}<br>
                    Post_Type: ${e.sourceTarget.properties.Post_Type}<br>
                    Post_Code: ${e.sourceTarget.properties.Post_Code}<br>
                    Post_Name: ${e.sourceTarget.properties.Post_Name}<br>
                    Manufactor: ${e.sourceTarget.properties.Manufactor}<br>
                    GlobalID: ${e.sourceTarget.properties.GlobalID}<br><p>
                   `;

                    document.getElementById("SCADADescription").innerHTML = `<p>                    
                    ID: ${e.sourceTarget.SCADA_DESCRIPTION.id}<br>
                    Value: ${setValue(e.sourceTarget.SCADA_DESCRIPTION.value)} <br>
                    OPC Quality: ${setOPCQuality(e.sourceTarget.SCADA_DESCRIPTION.OPCQuality)}<br>
                    User Quality: ${setUserQualities(e.sourceTarget.SCADA_DESCRIPTION.userQuality)}<br>
                    </p>
    
    `;
                }

            }
        });

    }
});


// var Auto_Switch_wfs2_layer = L.geoJSON(null, {
//     pointToLayer: function (feature, latlng) {
//         // latlng.lat = latlng.lat + lt;
//         // latlng.lng = latlng.lng + (lg);
//         if (feature.E) {
//             marker = L.marker(latlng, {
//                 icon: setBrkSVG("rgba(0,0,0,0.22)", "rgba(18,255,219,0.35)", "0.4", "E", ""), draggable: false,
//             });
//             marker.E = true;

//             return marker;

//         } else {

//             opc = setOPCQuality(feature.SCADA_FEATURES.OPCQuality);
//             value = setValue(feature.SCADA_FEATURES.value);
//             user = setUserQualities(feature.SCADA_FEATURES.userQuality)
//             needack = (feature.SCADA_FEATURES.userQuality & exUserQualities.AlarmNotAck);


//             if (opc === "MANUAL" && value === "OPEN") {
//                 marker = L.marker(latlng, {
//                     icon: setBrkSVG("#FF7E3D", "transparent", "1", user, needack), draggable: false,
//                 });

//                 marker["id"] = feature.id;
//                 marker["properties"] = feature.properties;
//                 marker["SCADA_DESCRIPTION"] = feature.SCADA_FEATURES;

//                 return marker;

//             } else if (opc === "MANUAL" && value === "CLOSE") {
//                 marker = L.marker(latlng, {
//                     icon: setBrkSVG("#FF7E3D", "#FF7E3D", "1", user, needack), draggable: false,
//                 });
//                 marker["id"] = feature.id;
//                 marker["properties"] = feature.properties;
//                 marker["SCADA_DESCRIPTION"] = feature.SCADA_FEATURES;

//                 return marker;

//             } else if (opc === "MANUAL" && (value === "FAULTY" || value === "INTERMEDIATE")) {
//                 marker = L.marker(latlng, {
//                     icon: setBrkSVGCross("#FF7E3D", user, needack),
//                     draggable: false,
//                 });
//                 marker["id"] = feature.id;
//                 marker["properties"] = feature.properties;
//                 marker["SCADA_DESCRIPTION"] = feature.SCADA_FEATURES;

//                 return marker;

//             } else if (opc === "GOOD" && value === "OPEN") {
//                 marker = L.marker(latlng, {
//                     icon: setBrkSVG("#3dff40", "transparent", "1", user, needack), draggable: false,
//                 });

//                 marker["id"] = feature.id;
//                 marker["properties"] = feature.properties;
//                 marker["SCADA_DESCRIPTION"] = feature.SCADA_FEATURES;

//                 return marker;

//             } else if (opc === "GOOD" && value === "CLOSE") {
//                 marker = L.marker(latlng, {
//                     icon: setBrkSVG("#3dff40", "#3dff40", "1", user, needack), draggable: false,
//                 });
//                 marker["id"] = feature.id;
//                 marker["properties"] = feature.properties;
//                 marker["SCADA_DESCRIPTION"] = feature.SCADA_FEATURES;

//                 return marker;

//             } else if (opc === "GOOD" && (value === "FAULTY" || value === "INTERMEDIATE")) {
//                 marker = L.marker(latlng, {
//                     icon: setBrkSVGCross("#3dff40", user, needack),
//                     draggable: false,
//                 });
//                 marker["id"] = feature.id;
//                 marker["properties"] = feature.properties;
//                 marker["SCADA_DESCRIPTION"] = feature.SCADA_FEATURES;

//                 return marker;

//             } else if (opc === "BAD DATA" && value === "OPEN") {
//                 marker = L.marker(latlng, {
//                     icon: setBrkSVG("#eefc2f", "transparent", "1", user, needack), draggable: false,
//                 });

//                 marker["id"] = feature.id;
//                 marker["properties"] = feature.properties;
//                 marker["SCADA_DESCRIPTION"] = feature.SCADA_FEATURES;

//                 return marker;

//             } else if (opc === "BAD DATA" && value === "CLOSE") {
//                 marker = L.marker(latlng, {
//                     icon: setBrkSVG("#eefc2f", "#eefc2f", "1", user, needack), draggable: false,
//                 });
//                 marker["id"] = feature.id;
//                 marker["properties"] = feature.properties;
//                 marker["SCADA_DESCRIPTION"] = feature.SCADA_FEATURES;

//                 return marker;

//             } else if (opc === "BAD DATA" && (value === "FAULTY" || value === "INTERMEDIATE")) {
//                 marker = L.marker(latlng, {
//                     icon: setBrkSVGCross("#eefc2f", user, needack),
//                     draggable: false,
//                 });
//                 marker["id"] = feature.id;
//                 marker["properties"] = feature.properties;
//                 marker["SCADA_DESCRIPTION"] = feature.SCADA_FEATURES;

//                 return marker;

//             }


//         }

//     }
//     , onEachFeature: function (feature, layer) {

//         layer.on({

//             dblclick: function (e) {
//                 if (!e.sourceTarget.E) window.interface.buildingblockClicked(e.sourceTarget.SCADA_DESCRIPTION.id, 1);
//             },

//             click: function (e) {
//                 if (e.sourceTarget.E) {
//                     document.getElementById("featureDescription").innerHTML = `<p>
//                     FID: ${e.sourceTarget.feature.id}<br>

//                     ID: ${e.sourceTarget.feature.properties.ID}<br>
//                     Ins_Year: ${e.sourceTarget.feature.properties.Ins_Year}<br>
//                     Type: ${e.sourceTarget.feature.properties.Type}<br>
//                     Kslc: ${e.sourceTarget.feature.properties.Kslc}<br>
//                     Specific_I: ${e.sourceTarget.feature.properties.Specific_I}<br>
//                     Vol_Type: ${e.sourceTarget.feature.properties.Vol_Type}<br>
//                     Proj_ID: ${e.sourceTarget.feature.properties.Proj_ID}<br>
//                     Attach: ${e.sourceTarget.feature.properties.Attach}<br>
//                     Descriptio: ${e.sourceTarget.feature.properties.Descriptio}<br>
//                     Line_ID_Cd: ${e.sourceTarget.feature.properties.Line_ID_Cd}<br>
//                     Enabled: ${e.sourceTarget.feature.properties.Enabled}<br>
//                     fj_feeder_: ${e.sourceTarget.feature.properties.fj_feeder_}<br>
//                     fj_reg_no: ${e.sourceTarget.feature.properties.fj_reg_no}<br>
//                     PostID: ${e.sourceTarget.feature.properties.PostID}<br>
//                     Post_Type: ${e.sourceTarget.feature.properties.Post_Type}<br>
//                     Post_Code: ${e.sourceTarget.feature.properties.Post_Code}<br>
//                     Post_Name: ${e.sourceTarget.feature.properties.Post_Name}<br>
//                     Manufactor: ${e.sourceTarget.feature.properties.Manufactor}<br>
//                     GlobalID: ${e.sourceTarget.feature.properties.GlobalID}<br><p>
//                    `;
//                     document.getElementById("SCADADescription").innerHTML = `<p></p>`;
//                 } else {
//                     document.getElementById("featureDescription").innerHTML = `<p>
//                     FID: ${e.sourceTarget.SCADA_DESCRIPTION.fid}<br>

//                     ID: ${e.sourceTarget.properties.ID}<br>
//                     Ins_Year: ${e.sourceTarget.properties.Ins_Year}<br>
//                     Type: ${e.sourceTarget.properties.Type}<br>
//                     Kslc: ${e.sourceTarget.properties.Kslc}<br>
//                     Specific_I: ${e.sourceTarget.properties.Specific_I}<br>
//                     Vol_Type: ${e.sourceTarget.properties.Vol_Type}<br>
//                     Proj_ID: ${e.sourceTarget.properties.Proj_ID}<br>
//                     Attach: ${e.sourceTarget.properties.Attach}<br>
//                     Descriptio: ${e.sourceTarget.properties.Descriptio}<br>
//                     Line_ID_Cd: ${e.sourceTarget.properties.Line_ID_Cd}<br>
//                     Enabled: ${e.sourceTarget.properties.Enabled}<br>
//                     fj_feeder_: ${e.sourceTarget.properties.fj_feeder_}<br>
//                     fj_reg_no: ${e.sourceTarget.properties.fj_reg_no}<br>
//                     PostID: ${e.sourceTarget.properties.PostID}<br>
//                     Post_Type: ${e.sourceTarget.properties.Post_Type}<br>
//                     Post_Code: ${e.sourceTarget.properties.Post_Code}<br>
//                     Post_Name: ${e.sourceTarget.properties.Post_Name}<br>
//                     Manufactor: ${e.sourceTarget.properties.Manufactor}<br>
//                     GlobalID: ${e.sourceTarget.properties.GlobalID}<br><p>
//                    `;

//                     document.getElementById("SCADADescription").innerHTML = `<p>                    
//                     ID: ${e.sourceTarget.SCADA_DESCRIPTION.id}<br>
//                     Value: ${setValue(e.sourceTarget.SCADA_DESCRIPTION.value)} <br>
//                     OPC Quality: ${setOPCQuality(e.sourceTarget.SCADA_DESCRIPTION.OPCQuality)}<br>
//                     User Quality: ${setUserQualities(e.sourceTarget.SCADA_DESCRIPTION.userQuality)}<br>
//                     </p>
    
//     `;
//                 }

//             }
//         });

//     }
// });


var Circ_Brk_layer = L.geoJSON(null, {
    pointToLayer: function (feature, latlng) {
        // latlng.lat = latlng.lat + lt;
        // latlng.lng = latlng.lng + (lg);
        if (feature.E) {
            marker = L.marker(latlng, {
                icon: setBrkSVG("rgba(0,0,0,0.22)", "rgba(18,255,219,0.35)", "0.4", "E", ""), draggable: false,
            });
            marker.E = true;

            return marker;

        } else {

            opc = setOPCQuality(feature.SCADA_FEATURES.OPCQuality);
            value = setValue(feature.SCADA_FEATURES.value);
            user = setUserQualities(feature.SCADA_FEATURES.userQuality)
            needack = (feature.SCADA_FEATURES.userQuality & exUserQualities.AlarmNotAck);


            if (opc === "MANUAL" && value === "OPEN") {
                marker = L.marker(latlng, {
                    icon: setBrkSVG("#FF7E3D", "transparent", "1", user, needack), draggable: false,
                });

                marker["id"] = feature.id;
                marker["properties"] = feature.properties;
                marker["SCADA_DESCRIPTION"] = feature.SCADA_FEATURES;

                return marker;

            } else if (opc === "MANUAL" && value === "CLOSE") {
                marker = L.marker(latlng, {
                    icon: setBrkSVG("#FF7E3D", "#FF7E3D", "1", user, needack), draggable: false,
                });
                marker["id"] = feature.id;
                marker["properties"] = feature.properties;
                marker["SCADA_DESCRIPTION"] = feature.SCADA_FEATURES;

                return marker;

            } else if (opc === "MANUAL" && (value === "FAULTY" || value === "INTERMEDIATE")) {
                marker = L.marker(latlng, {
                    icon: setBrkSVGCross("#FF7E3D", user, needack),
                    draggable: false,
                });
                marker["id"] = feature.id;
                marker["properties"] = feature.properties;
                marker["SCADA_DESCRIPTION"] = feature.SCADA_FEATURES;

                return marker;

            } else if (opc === "GOOD" && value === "OPEN") {
                marker = L.marker(latlng, {
                    icon: setBrkSVG("#3dff40", "transparent", "1", user, needack), draggable: false,
                });

                marker["id"] = feature.id;
                marker["properties"] = feature.properties;
                marker["SCADA_DESCRIPTION"] = feature.SCADA_FEATURES;

                return marker;

            } else if (opc === "GOOD" && value === "CLOSE") {
                marker = L.marker(latlng, {
                    icon: setBrkSVG("#3dff40", "#3dff40", "1", user, needack), draggable: false,
                });
                marker["id"] = feature.id;
                marker["properties"] = feature.properties;
                marker["SCADA_DESCRIPTION"] = feature.SCADA_FEATURES;

                return marker;

            } else if (opc === "GOOD" && (value === "FAULTY" || value === "INTERMEDIATE")) {
                marker = L.marker(latlng, {
                    icon: setBrkSVGCross("#3dff40", user, needack),
                    draggable: false,
                });
                marker["id"] = feature.id;
                marker["properties"] = feature.properties;
                marker["SCADA_DESCRIPTION"] = feature.SCADA_FEATURES;

                return marker;

            } else if (opc === "BAD DATA" && value === "OPEN") {
                marker = L.marker(latlng, {
                    icon: setBrkSVG("#eefc2f", "transparent", "1", user, needack), draggable: false,
                });

                marker["id"] = feature.id;
                marker["properties"] = feature.properties;
                marker["SCADA_DESCRIPTION"] = feature.SCADA_FEATURES;

                return marker;

            } else if (opc === "BAD DATA" && value === "CLOSE") {
                marker = L.marker(latlng, {
                    icon: setBrkSVG("#eefc2f", "#eefc2f", "1", user, needack), draggable: false,
                });
                marker["id"] = feature.id;
                marker["properties"] = feature.properties;
                marker["SCADA_DESCRIPTION"] = feature.SCADA_FEATURES;

                return marker;

            } else if (opc === "BAD DATA" && (value === "FAULTY" || value === "INTERMEDIATE")) {
                marker = L.marker(latlng, {
                    icon: setBrkSVGCross("#eefc2f", user, needack),
                    draggable: false,
                });
                marker["id"] = feature.id;
                marker["properties"] = feature.properties;
                marker["SCADA_DESCRIPTION"] = feature.SCADA_FEATURES;

                return marker;

            }


        }

    }
    , onEachFeature: function (feature, layer) {

        layer.on({

            

            dblclick: function (e) {
                if (!e.sourceTarget.E) window.interface.buildingblockClicked(e.sourceTarget.SCADA_DESCRIPTION.id, 1);
            },

            click: function (e) {
                if (e.sourceTarget.E) {
                    document.getElementById("featureDescription").innerHTML = `<p>
                    FID: ${e.sourceTarget.feature.id}<br>

                    ID: ${e.sourceTarget.feature.properties.ID}<br>
                    Ins_Year: ${e.sourceTarget.feature.properties.Ins_Year}<br>
                    Type: ${e.sourceTarget.feature.properties.Type}<br>
                    Kslc: ${e.sourceTarget.feature.properties.Kslc}<br>
                    Specific_I: ${e.sourceTarget.feature.properties.Specific_I}<br>
                    Vol_Type: ${e.sourceTarget.feature.properties.Vol_Type}<br>
                    Proj_ID: ${e.sourceTarget.feature.properties.Proj_ID}<br>
                    Attach: ${e.sourceTarget.feature.properties.Attach}<br>
                    Descriptio: ${e.sourceTarget.feature.properties.Descriptio}<br>
                    Line_ID_Cd: ${e.sourceTarget.feature.properties.Line_ID_Cd}<br>
                    Enabled: ${e.sourceTarget.feature.properties.Enabled}<br>
                    fj_feeder_: ${e.sourceTarget.feature.properties.fj_feeder_}<br>
                    fj_reg_no: ${e.sourceTarget.feature.properties.fj_reg_no}<br>
                    PostID: ${e.sourceTarget.feature.properties.PostID}<br>
                    Post_Type: ${e.sourceTarget.feature.properties.Post_Type}<br>
                    Post_Code: ${e.sourceTarget.feature.properties.Post_Code}<br>
                    Post_Name: ${e.sourceTarget.feature.properties.Post_Name}<br>
                    Manufactor: ${e.sourceTarget.feature.properties.Manufactor}<br>
                    GlobalID: ${e.sourceTarget.feature.properties.GlobalID}<br><p>
                   `;
                    document.getElementById("SCADADescription").innerHTML = `<p></p>`;
                } else {
                    document.getElementById("featureDescription").innerHTML = `<p>
                    FID: ${e.sourceTarget.SCADA_DESCRIPTION.fid}<br>

                    ID: ${e.sourceTarget.properties.ID}<br>
                    Ins_Year: ${e.sourceTarget.properties.Ins_Year}<br>
                    Type: ${e.sourceTarget.properties.Type}<br>
                    Kslc: ${e.sourceTarget.properties.Kslc}<br>
                    Specific_I: ${e.sourceTarget.properties.Specific_I}<br>
                    Vol_Type: ${e.sourceTarget.properties.Vol_Type}<br>
                    Proj_ID: ${e.sourceTarget.properties.Proj_ID}<br>
                    Attach: ${e.sourceTarget.properties.Attach}<br>
                    Descriptio: ${e.sourceTarget.properties.Descriptio}<br>
                    Line_ID_Cd: ${e.sourceTarget.properties.Line_ID_Cd}<br>
                    Enabled: ${e.sourceTarget.properties.Enabled}<br>
                    fj_feeder_: ${e.sourceTarget.properties.fj_feeder_}<br>
                    fj_reg_no: ${e.sourceTarget.properties.fj_reg_no}<br>
                    PostID: ${e.sourceTarget.properties.PostID}<br>
                    Post_Type: ${e.sourceTarget.properties.Post_Type}<br>
                    Post_Code: ${e.sourceTarget.properties.Post_Code}<br>
                    Post_Name: ${e.sourceTarget.properties.Post_Name}<br>
                    Manufactor: ${e.sourceTarget.properties.Manufactor}<br>
                    GlobalID: ${e.sourceTarget.properties.GlobalID}<br><p>
                   `;

                    document.getElementById("SCADADescription").innerHTML = `<p>                    
                    ID: ${e.sourceTarget.SCADA_DESCRIPTION.id}<br>
                    Value: ${setValue(e.sourceTarget.SCADA_DESCRIPTION.value)} <br>
                    OPC Quality: ${setOPCQuality(e.sourceTarget.SCADA_DESCRIPTION.OPCQuality)}<br>
                    User Quality: ${setUserQualities(e.sourceTarget.SCADA_DESCRIPTION.userQuality)}<br>
                    </p>
    
    `;
                }

            }
        });

    }
});




var overlayMaps = {
    "recloser_layer": recloser_layer,
    "Ov_HdMVL_layer": Ov_HdMVL_layer,
    "COMMENTS_layer": COMMENTS_layer,
	"PLAN_layer": PLAN_layer,
	"substat_layer": substat_layer, 
	"recloser_wfs_layer": recloser_wfs_layer,
    "recloser_wfs2_layer": recloser_wfs2_layer,
    "Circ_Brk_layer": Circ_Brk_layer
    // "Auto_Switch_wfs2_layer": Auto_Switch_wfs2_layer
};

var layerControl = L.control.layers(overlayMaps).addTo(map);

var recloser_layer = L.layerGroup([recloser_layer]);
var Ov_HdMVL_layer = L.layerGroup([Ov_HdMVL_layer]);
var COMMENTS_layer = L.layerGroup([COMMENTS_layer]);
var PLAN_layer = L.layerGroup([PLAN_layer]);
var substat_layer = L.layerGroup([substat_layer]);

layerControl.addOverlay(recloser_layer, "Recloser");
layerControl.addOverlay(Ov_HdMVL_layer, "Ov_HdMVL");
layerControl.addOverlay(COMMENTS_layer, "COMMENTS");
layerControl.addOverlay(PLAN_layer, "PLAN");
layerControl.addOverlay(substat_layer, "substat");
layerControl.addOverlay(recloser_wfs_layer, "recloser_wfs_layer");
layerControl.addOverlay(recloser_wfs2_layer, "recloser_wfs2_layer");
layerControl.addOverlay(Circ_Brk_layer, "Circ_Brk_layer");
// layerControl.addOverlay(Auto_Switch_wfs2_layer, "Auto_Switch_wfs2_layer");

function displaymanager(svgDoc) {
	
    this.displayItems = $("[payahmi]");
    this.displayList = {};
    this.bbList = [];

    function _updateDisplay(id, newdata) {
        this.value = newdata["value"];
        this.exOPCQuality = newdata["OPCQuality"];
        this.exUserQuality = newdata["userQuality"];
        this.point = pointList.filter(d => d.id === id)[0];
        this.newGISPointList;
        var changedType;
        [this.newGISPointList, changedType] = newPointList(id, newdata);
        _updateLayers(this.newGISPointList, changedType);
    }

    function _updateLayers(newPoints, changedType) {

        // todo
        // searchedCache.clearLayers();
        switch (changedType) {
            // todo
            case "recloser":
                recloser_handler(newPoints, json_list.recloser);
                break;
            case "Circ_Brk":
                Circ_Brk_handler(newPoints, json_list.Circ_Brk);

            // case "Auto_Switch":
            //     Auto_Switch_handler(newPoints, json_list.auto_switch);
            //     break;
            // case "V_meter":
            //     v_meter_handler(newPoints, json_list.V_meter);
            //     break;
            // case "Flt_Indc":
            //     Flt_Indc_handler(newPoints, json_list.Flt_Indc);
            //     break;
            // case "HV_Substat":
            //     HV_Substat_handler(newPoints, json_list.HV_Substat);
        }
    }

    function newPointList(id, newdata) {

        let changedPoint = pointList.filter(d => d.id === id)[0];
        changedPoint.value = newdata["value"];
        changedPoint.OPCQuality = newdata["OPCQuality"];
        changedPoint.userQuality = newdata["userQuality"];
        return [updatePointListWithNewRecord(pointList, changedPoint), changedPoint.gis_type];
    }

    function updatePointListWithNewRecord(src, newRecord) {
        return src.map(function (item) {
            return (item.id === newRecord.id) ? newRecord : item;
        });
    }

	// function number one
	function _init(){
		getLayersInterval = setInterval(_getPoints, 1000);
	}
	// function number two
	function _getPoints() {
        if (_isEmpty(json_list["recloser"]) || json_list["recloser"] === "undefined") {
            // wfs
            $.getJSON(url_recloser).then((res) => {
                json_list["recloser"] = res;
            });

        }
         
        // else if(_isEmpty(json_list["Auto_Switch"]) || json_list["AutoSwitch"] === "undefined") {
        //     // wfs : TODO : the url provided here might not be correct
        //     $.getJSON(url_Auto_Switch).then((res) => {
        //         json_list["Auto_Switch"] = res;
        //     });
        // }


        else if(_isEmpty(json_list["Circ_Brk"]) || json_list["AutoSwitch"] === "undefined") {
            // wfs : TODO : the url provided here might not be correct
            $.getJSON(url_Circ_Brk).then((res) => {
                json_list["Circ_Brk"] = res;
            });
        }

        else {

            $.getJSON("/v1/data/gisread").then((res) => {
               pointList = res["pointDataList"];
                pointList.forEach((el) => {
                    el.fid = nodeMaps[el["gis_id"]].fid;
                    el.gis_type = nodeMaps[el["gis_id"]].gis_type;
                });
                // console.log(JSON.stringify(pointList));
                _init_GIS(pointList);
                clearInterval(getLayersInterval);
            });
        }
    }

    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    // control of wfs for recloser
    function recloser_handler(pointList, GeoJSON) {
        recloser_wfs2_layer.clearLayers();
        tmp = fillJSON(pointList, GeoJSON, "recloser");
        recloser_wfs2_layer.addData(tmp);
    }

    function Circ_Brk_handler(pointList, GeoJSON) {
        Circ_Brk_layer.clearLayers();
        tmp = fillJSON(pointList, GeoJSON, "Circ_Brk");
        Circ_Brk_layer.addData(tmp);
    }

    // function Auto_Switch_handler(pointList, GeoJSON) {
    //     Auto_Switch_wfs2_layer.clearLayers();
    //     tmp = fillJSON(pointList, GeoJSON, "Auto_Switch");
    //     Auto_Switch_wfs2_layer.addData(tmp);
    // }

    function fillJSON(pointList, GeoJSON, gis_type) {
        var filteredPoints = pointList.filter(d => d.gis_type === gis_type);
        let outPut = basePointTypeGeoJSON();
        pointsIdx = [];
        for (let i in filteredPoints) {

            tmpPoint = GeoJSON.features.filter(d => d.id === filteredPoints[i].fid)[0];
            pointsIdx.push(GeoJSON.features.indexOf(tmpPoint));
            tmpPoint.SCADA_FEATURES = filteredPoints[i];
            outPut.features.push(tmpPoint);
        }

        for (let i in GeoJSON.features) {
            if (!pointsIdx.includes(parseInt(i, 10))) {

                tmpPoint = GeoJSON.features[i]
                tmpPoint.E = true;
                outPut.features.push(tmpPoint);
            }
        }

        return outPut;
    }
    //  
    function _init_GIS(pointList) {
        recloser_handler(pointList, json_list.recloser);
        Circ_Brk_handler(pointList, json_list.Circ_Brk);
        // Auto_Switch_handler(pointList, json_list.Auto_Switch);
        // todo
    }

	this.initialize = _init;
    this.updateDisplay = _updateDisplay;
    // this.locateToPoint=_locateToPoint;
	
}




function _isEmpty(object) {
    for (const property in object) {
        return false;
    }
    return true;
}

// function setBrkSVG(strokeColor, fillColor, opacity = "1", tag, blink) {
//     pointSVG = `<svg width="35" height="17">
//     <circle cx="7" cy="7" r="6" stroke="${strokeColor}" stroke-width="2" fill="${fillColor}" opacity=${opacity}></circle>
//     <text style="white-space: pre; fill: rgb(255, 18, 18); font-family: Arial, sans-serif; font-size: 10px;" x="12.725" y="16.02" opacity=${opacity}>${tag}</text>
// </svg>`;
// }
function setValue(input) {

    if (input === 2 || input === "CLOSE") {
        return "CLOSE";

    } else if (input === 1 || input === "OPEN") {
        return "OPEN";

    } else if (input === 3 || input === "FAULTY") {
        return "FAULTY";

    } else if (input === 0 || input === "INTERMEDIATE") {
        return "INTERMEDIATE";
    }
}

function setOPCQuality(input) {
    exOPCQualityStates = {
        MANUAL: 512, BADDATA: 264, GOOD: 448
    }

    tagChar = "";
    if (input & exOPCQualityStates.MANUAL) {
        tagChar = "MANUAL";
    } else if ((input & exOPCQualityStates.GOOD) == exOPCQualityStates.GOOD) {
        tagChar = "GOOD";
    } else if (input & exOPCQualityStates.BADDATA) {
        tagChar = 'BAD DATA';
    }

    return tagChar;

}

function setUserQualities(input) {
    exUserQualities = {
        AlarmInhibit: 16,
        AlarmNotAck: 32,
        DispatcherNote: 64,
        SirenInhibit: 128,
        ControlInhibit: 256,
        OperatorBlocked: 4096,
        EventInhibit: 65536
    }

    tagChar = "";
    if (input & exUserQualities.DispatcherNote) {
        tagChar = "(N)";
    } else if (input & exUserQualities.OperatorBlocked) {
        tagChar = "(O)";
    } else if (input & exUserQualities.EventInhibit) {
        tagChar = "(Ev)";
    } else if (input & exUserQualities.AlarmInhibit) {
        tagChar = "(A)";
    } else if (input & exUserQualities.ControlInhibit) {
        tagChar = "(C)";
    } else if (input & exUserQualities.SirenInhibit) {
        tagChar = "(S)";
    }

    return tagChar;
}