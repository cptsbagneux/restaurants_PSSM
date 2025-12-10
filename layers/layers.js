ol.proj.proj4.register(proj4);
//ol.proj.get("IGNF:RGF93LAMB93.IGN69").setExtent([647107.853047, 6854571.102449, 651166.836330, 6856567.391773]);
var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_CommunedeBagneux_1 = new ol.format.GeoJSON();
var features_CommunedeBagneux_1 = format_CommunedeBagneux_1.readFeatures(json_CommunedeBagneux_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:RGF93LAMB93.IGN69'});
var jsonSource_CommunedeBagneux_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CommunedeBagneux_1.addFeatures(features_CommunedeBagneux_1);
var lyr_CommunedeBagneux_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CommunedeBagneux_1, 
                style: style_CommunedeBagneux_1,
                popuplayertitle: 'Commune de Bagneux',
                interactive: false,
                title: '<img src="styles/legend/CommunedeBagneux_1.png" /> Commune de Bagneux'
            });
var format_RESTAURANTSFORMATIONPSSMlocformation_2 = new ol.format.GeoJSON();
var features_RESTAURANTSFORMATIONPSSMlocformation_2 = format_RESTAURANTSFORMATIONPSSMlocformation_2.readFeatures(json_RESTAURANTSFORMATIONPSSMlocformation_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:RGF93LAMB93.IGN69'});
var jsonSource_RESTAURANTSFORMATIONPSSMlocformation_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RESTAURANTSFORMATIONPSSMlocformation_2.addFeatures(features_RESTAURANTSFORMATIONPSSMlocformation_2);
var lyr_RESTAURANTSFORMATIONPSSMlocformation_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RESTAURANTSFORMATIONPSSMlocformation_2, 
                style: style_RESTAURANTSFORMATIONPSSMlocformation_2,
                popuplayertitle: 'RESTAURANTS FORMATION PSSM - loc formation',
                interactive: false,
                title: '<img src="styles/legend/RESTAURANTSFORMATIONPSSMlocformation_2.png" /> RESTAURANTS FORMATION PSSM - loc formation'
            });
var format_Restaurantsprochesdevous_3 = new ol.format.GeoJSON();
var features_Restaurantsprochesdevous_3 = format_Restaurantsprochesdevous_3.readFeatures(json_Restaurantsprochesdevous_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:RGF93LAMB93.IGN69'});
var jsonSource_Restaurantsprochesdevous_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Restaurantsprochesdevous_3.addFeatures(features_Restaurantsprochesdevous_3);
var lyr_Restaurantsprochesdevous_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Restaurantsprochesdevous_3, 
                style: style_Restaurantsprochesdevous_3,
                popuplayertitle: 'Restaurants proches de vous',
                interactive: true,
    title: 'Restaurants proches de vous<br />\
    <img src="styles/legend/Restaurantsprochesdevous_3_0.png" /> Moins de 100 mètres<br />\
    <img src="styles/legend/Restaurantsprochesdevous_3_1.png" /> Moins de 200 mètres<br />\
    <img src="styles/legend/Restaurantsprochesdevous_3_2.png" /> 500 mètres<br />\
    <img src="styles/legend/Restaurantsprochesdevous_3_3.png" /> Moins de 500 mètres<br />\
    <img src="styles/legend/Restaurantsprochesdevous_3_4.png" /> Moins de 1km<br />' });

lyr_GoogleMaps_0.setVisible(true);lyr_CommunedeBagneux_1.setVisible(true);lyr_RESTAURANTSFORMATIONPSSMlocformation_2.setVisible(true);lyr_Restaurantsprochesdevous_3.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_CommunedeBagneux_1,lyr_RESTAURANTSFORMATIONPSSMlocformation_2,lyr_Restaurantsprochesdevous_3];
lyr_CommunedeBagneux_1.set('fieldAliases', {'dep': 'dep', 'insee_com': 'insee_com', 'nom_com': 'nom_com', 'iris': 'iris', 'code_iris': 'code_iris', 'nom_iris': 'nom_iris', 'typ_iris': 'typ_iris', 'POP65P': 'POP65P', 'part pop65': 'part pop65', });
lyr_RESTAURANTSFORMATIONPSSMlocformation_2.set('fieldAliases', {'CODE COMM': 'CODE COMM', 'NOM COMM': 'NOM COMM', 'ADRESSE': 'ADRESSE', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'ETIQUETTE': 'ETIQUETTE', });
lyr_Restaurantsprochesdevous_3.set('fieldAliases', {'CODE COMM': 'CODE COMM', 'NOM COMM': 'NOM COMM', 'RESTAURANT': 'RESTAURANT', 'CATEGORIE': 'CATEGORIE', 'DISTANCE': 'DISTANCE', 'ADRESSE': 'ADRESSE', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', });
lyr_CommunedeBagneux_1.set('fieldImages', {'dep': 'TextEdit', 'insee_com': 'TextEdit', 'nom_com': 'TextEdit', 'iris': 'TextEdit', 'code_iris': 'TextEdit', 'nom_iris': 'TextEdit', 'typ_iris': 'TextEdit', 'POP65P': 'Range', 'part pop65': 'Range', });
lyr_RESTAURANTSFORMATIONPSSMlocformation_2.set('fieldImages', {'CODE COMM': 'Range', 'NOM COMM': 'TextEdit', 'ADRESSE': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'ETIQUETTE': 'TextEdit', });
lyr_Restaurantsprochesdevous_3.set('fieldImages', {'CODE COMM': 'Range', 'NOM COMM': 'TextEdit', 'RESTAURANT': 'TextEdit', 'CATEGORIE': 'TextEdit', 'DISTANCE': 'TextEdit', 'ADRESSE': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', });
lyr_CommunedeBagneux_1.set('fieldLabels', {'dep': 'no label', 'insee_com': 'no label', 'nom_com': 'no label', 'iris': 'no label', 'code_iris': 'no label', 'nom_iris': 'no label', 'typ_iris': 'no label', 'POP65P': 'no label', 'part pop65': 'no label', });
lyr_RESTAURANTSFORMATIONPSSMlocformation_2.set('fieldLabels', {'CODE COMM': 'no label', 'NOM COMM': 'no label', 'ADRESSE': 'no label', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'ETIQUETTE': 'no label', });
lyr_Restaurantsprochesdevous_3.set('fieldLabels', {'CODE COMM': 'hidden field', 'NOM COMM': 'hidden field', 'RESTAURANT': 'inline label - always visible', 'CATEGORIE': 'inline label - always visible', 'DISTANCE': 'inline label - always visible', 'ADRESSE': 'inline label - always visible', 'LATITUDE': 'hidden field', 'LONGITUDE': 'hidden field', });
lyr_Restaurantsprochesdevous_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});