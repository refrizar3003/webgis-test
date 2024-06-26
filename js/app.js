var highlightLayer;
        function highlightFeature(e) {
            highlightLayer = e.target;

            if (e.target.feature.geometry.type === 'LineString' || e.target.feature.geometry.type === 'MultiLineString') {
              highlightLayer.setStyle({
                color: '#ffff00',
              });
            } else {
              highlightLayer.setStyle({
                fillColor: '#ffff00',
                fillOpacity: 1
              });
            }
            highlightLayer.openPopup();
        }
        var map = L.map('map', {
            zoomControl:false, maxZoom:28, minZoom:1
        }).fitBounds([[-5.572743913898433,105.23360359957545],[-5.567638024724085,105.24315350340154]]);
        var hash = new L.Hash(map);
        map.attributionControl.setPrefix('<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a> &middot; <a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> &middot; <a href="https://qgis.org">QGIS</a>');
        var autolinker = new Autolinker({truncate: {length: 30, location: 'smart'}});
        // remove popup's row if "visible-with-data"
        function removeEmptyRowsFromPopupContent(content, feature) {
         var tempDiv = document.createElement('div');
         tempDiv.innerHTML = content;
         var rows = tempDiv.querySelectorAll('tr');
         for (var i = 0; i < rows.length; i++) {
             var td = rows[i].querySelector('td.visible-with-data');
             var key = td ? td.id : '';
             if (td && td.classList.contains('visible-with-data') && feature.properties[key] == null) {
                 rows[i].parentNode.removeChild(rows[i]);
             }
         }
         return tempDiv.innerHTML;
        }
        // add class to format popup if it contains media
		function addClassToPopupIfMedia(content, popup) {
			var tempDiv = document.createElement('div');
			tempDiv.innerHTML = content;
			if (tempDiv.querySelector('td img')) {
				popup._contentNode.classList.add('media');
					// Delay to force the redraw
					setTimeout(function() {
						popup.update();
					}, 10);
			} else {
				popup._contentNode.classList.remove('media');
			}
		}
        var zoomControl = L.control.zoom({
            position: 'topleft'
        }).addTo(map);
        L.control.locate({locateOptions: {maxZoom: 19}}).addTo(map);
        var measureControl = new L.Control.Measure({
            position: 'topleft',
            primaryLengthUnit: 'meters',
            secondaryLengthUnit: 'kilometers',
            primaryAreaUnit: 'sqmeters',
            secondaryAreaUnit: 'hectares'
        });
        measureControl.addTo(map);
        document.getElementsByClassName('leaflet-control-measure-toggle')[0].innerHTML = '';
        document.getElementsByClassName('leaflet-control-measure-toggle')[0].className += ' fas fa-ruler';
        var bounds_group = new L.featureGroup([]);
        function setBounds() {
        }
        map.createPane('pane_GoogleMaps_0');
        map.getPane('pane_GoogleMaps_0').style.zIndex = 400;
        var layer_GoogleMaps_0 = L.tileLayer('https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
            pane: 'pane_GoogleMaps_0',
            opacity: 1.0,
            attribution: '',
            minZoom: 1,
            maxZoom: 28,
            minNativeZoom: 0,
            maxNativeZoom: 19
        });
        layer_GoogleMaps_0;
        map.addLayer(layer_GoogleMaps_0);
        map.createPane('pane_GoogleTerrainHybrid_1');
        map.getPane('pane_GoogleTerrainHybrid_1').style.zIndex = 401;
        var layer_GoogleTerrainHybrid_1 = L.tileLayer('https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}', {
            pane: 'pane_GoogleTerrainHybrid_1',
            opacity: 1.0,
            attribution: '',
            minZoom: 1,
            maxZoom: 28,
            minNativeZoom: 0,
            maxNativeZoom: 19
        });
        layer_GoogleTerrainHybrid_1;
        map.addLayer(layer_GoogleTerrainHybrid_1);
        map.createPane('pane_GoogleSatellite_2');
        map.getPane('pane_GoogleSatellite_2').style.zIndex = 402;
        var layer_GoogleSatellite_2 = L.tileLayer('https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
            pane: 'pane_GoogleSatellite_2',
            opacity: 1.0,
            attribution: '',
            minZoom: 1,
            maxZoom: 28,
            minNativeZoom: 0,
            maxNativeZoom: 19
        });
        layer_GoogleSatellite_2;
        map.addLayer(layer_GoogleSatellite_2);
        function pop_PetaPesawaran_3(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    for (var i in e.target._eventParents) {
                        if (typeof e.target._eventParents[i].resetStyle === 'function') {
                            e.target._eventParents[i].resetStyle(e.target);
                        }
                    }
                    if (typeof layer.closePopup == 'function') {
                        layer.closePopup();
                    } else {
                        layer.eachLayer(function(feature){
                            feature.closePopup()
                        });
                    }
                },
                mouseover: highlightFeature,
            });
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['KDPPUM'] !== null ? autolinker.link(feature.properties['KDPPUM'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">NAMOBJ</th>\
                        <td>' + (feature.properties['NAMOBJ'] !== null ? autolinker.link(feature.properties['NAMOBJ'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">REMARK</th>\
                        <td>' + (feature.properties['REMARK'] !== null ? autolinker.link(feature.properties['REMARK'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">UUPP</th>\
                        <td>' + (feature.properties['UUPP'] !== null ? autolinker.link(feature.properties['UUPP'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">SRS_ID</th>\
                        <td>' + (feature.properties['SRS_ID'] !== null ? autolinker.link(feature.properties['SRS_ID'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">LCODE</th>\
                        <td>' + (feature.properties['LCODE'] !== null ? autolinker.link(feature.properties['LCODE'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">KDBPUM</th>\
                        <td>' + (feature.properties['KDBPUM'] !== null ? autolinker.link(feature.properties['KDBPUM'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">WIADKD</th>\
                        <td>' + (feature.properties['WIADKD'] !== null ? autolinker.link(feature.properties['WIADKD'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">WADMKK</th>\
                        <td>' + (feature.properties['WADMKK'] !== null ? autolinker.link(feature.properties['WADMKK'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">WADMPR</th>\
                        <td>' + (feature.properties['WADMPR'] !== null ? autolinker.link(feature.properties['WADMPR'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">TIPADM</th>\
                        <td>' + (feature.properties['TIPADM'] !== null ? autolinker.link(feature.properties['TIPADM'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">SHAPE_Leng</th>\
                        <td>' + (feature.properties['SHAPE_Leng'] !== null ? autolinker.link(feature.properties['SHAPE_Leng'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">SHAPE_Area</th>\
                        <td>' + (feature.properties['SHAPE_Area'] !== null ? autolinker.link(feature.properties['SHAPE_Area'].toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            var content = removeEmptyRowsFromPopupContent(popupContent, feature);
			layer.on('popupopen', function(e) {
				addClassToPopupIfMedia(content, e.popup);
			});
			layer.bindPopup(content, { maxHeight: 400 });
        }

        function style_PetaPesawaran_3_0() {
            return {
                pane: 'pane_PetaPesawaran_3',
                opacity: 1,
                color: 'rgba(247,247,247,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(150,150,150,0.41568627450980394)',
                interactive: false,
            }
        }
        map.createPane('pane_PetaPesawaran_3');
        map.getPane('pane_PetaPesawaran_3').style.zIndex = 403;
        map.getPane('pane_PetaPesawaran_3').style['mix-blend-mode'] = 'normal';
        var layer_PetaPesawaran_3 = new L.geoJson(json_PetaPesawaran_3, {
            attribution: '',
            interactive: false,
            dataVar: 'json_PetaPesawaran_3',
            layerName: 'layer_PetaPesawaran_3',
            pane: 'pane_PetaPesawaran_3',
            onEachFeature: pop_PetaPesawaran_3,
            style: style_PetaPesawaran_3_0,
        });
        bounds_group.addLayer(layer_PetaPesawaran_3);
        map.addLayer(layer_PetaPesawaran_3);
        function pop_JALAN_4(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    for (var i in e.target._eventParents) {
                        if (typeof e.target._eventParents[i].resetStyle === 'function') {
                            e.target._eventParents[i].resetStyle(e.target);
                        }
                    }
                    if (typeof layer.closePopup == 'function') {
                        layer.closePopup();
                    } else {
                        layer.eachLayer(function(feature){
                            feature.closePopup()
                        });
                    }
                },
                mouseover: highlightFeature,
            });
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['NAMRJL'] !== null ? autolinker.link(feature.properties['NAMRJL'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">TIPE_JALAN :</th>\
                        <td>' + (feature.properties['REMARK'] !== null ? autolinker.link(feature.properties['REMARK'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['SRS_ID'] !== null ? autolinker.link(feature.properties['SRS_ID'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">LCODE :</th>\
                        <td>' + (feature.properties['LCODE'] !== null ? autolinker.link(feature.properties['LCODE'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">SHAPE_Leng :</th>\
                        <td>' + (feature.properties['SHAPE_Leng'] !== null ? autolinker.link(feature.properties['SHAPE_Leng'].toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            var content = removeEmptyRowsFromPopupContent(popupContent, feature);
			layer.on('popupopen', function(e) {
				addClassToPopupIfMedia(content, e.popup);
			});
			layer.bindPopup(content, { maxHeight: 400 });
        }

        function style_JALAN_4_0(feature) {
            switch(String(feature.properties['REMARK'])) {
                case 'Jalan Kolektor':
                    return {
                pane: 'pane_JALAN_4',
                opacity: 1,
                color: 'rgba(118,222,173,1.0)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 2.0,
                fillOpacity: 0,
                interactive: true,
            }
                    break;
                case 'Jalan Lain':
                    return {
                pane: 'pane_JALAN_4',
                opacity: 1,
                color: 'rgba(213,221,55,1.0)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 2.0,
                fillOpacity: 0,
                interactive: true,
            }
                    break;
                case 'Jalan Masuk':
                    return {
                pane: 'pane_JALAN_4',
                opacity: 1,
                color: 'rgba(227,26,28,1.0)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 2.0,
                fillOpacity: 0,
                interactive: true,
            }
                    break;
                case 'Jalur Eksplorasi':
                    return {
                pane: 'pane_JALAN_4',
                opacity: 1,
                color: 'rgba(255,127,0,1.0)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 2.0,
                fillOpacity: 0,
                interactive: true,
            }
                    break;
            }
        }
        map.createPane('pane_JALAN_4');
        map.getPane('pane_JALAN_4').style.zIndex = 404;
        map.getPane('pane_JALAN_4').style['mix-blend-mode'] = 'normal';
        var layer_JALAN_4 = new L.geoJson(json_JALAN_4, {
            attribution: '',
            interactive: true,
            dataVar: 'json_JALAN_4',
            layerName: 'layer_JALAN_4',
            pane: 'pane_JALAN_4',
            onEachFeature: pop_JALAN_4,
            style: style_JALAN_4_0,
        });
        bounds_group.addLayer(layer_JALAN_4);
        map.addLayer(layer_JALAN_4);
        function pop_SUNGAI_5(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    for (var i in e.target._eventParents) {
                        if (typeof e.target._eventParents[i].resetStyle === 'function') {
                            e.target._eventParents[i].resetStyle(e.target);
                        }
                    }
                    if (typeof layer.closePopup == 'function') {
                        layer.closePopup();
                    } else {
                        layer.eachLayer(function(feature){
                            feature.closePopup()
                        });
                    }
                },
                mouseover: highlightFeature,
            });
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['NAMOBJ'] !== null ? autolinker.link(feature.properties['NAMOBJ'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">TIPE_SUNGAI :</th>\
                        <td>' + (feature.properties['REMARK'] !== null ? autolinker.link(feature.properties['REMARK'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">LCODE :</th>\
                        <td>' + (feature.properties['LCODE'] !== null ? autolinker.link(feature.properties['LCODE'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">STATUS :</th>\
                        <td>' + (feature.properties['STATUS'] !== null ? autolinker.link(feature.properties['STATUS'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">WMAX :</th>\
                        <td>' + (feature.properties['WMAX'] !== null ? autolinker.link(feature.properties['WMAX'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">DBTMAX:</th>\
                        <td>' + (feature.properties['DBTMAX'] !== null ? autolinker.link(feature.properties['DBTMAX'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">SLPRT :</th>\
                        <td>' + (feature.properties['SLPRT'] !== null ? autolinker.link(feature.properties['SLPRT'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">SHAPE_Leng :</th>\
                        <td>' + (feature.properties['SHAPE_Leng'] !== null ? autolinker.link(feature.properties['SHAPE_Leng'].toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            var content = removeEmptyRowsFromPopupContent(popupContent, feature);
			layer.on('popupopen', function(e) {
				addClassToPopupIfMedia(content, e.popup);
			});
			layer.bindPopup(content, { maxHeight: 400 });
        }

        function style_SUNGAI_5_0() {
            return {
                pane: 'pane_SUNGAI_5',
                opacity: 1,
                color: 'rgba(31,120,180,1.0)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 1.0,
                fillOpacity: 0,
                interactive: true,
            }
        }
        map.createPane('pane_SUNGAI_5');
        map.getPane('pane_SUNGAI_5').style.zIndex = 405;
        map.getPane('pane_SUNGAI_5').style['mix-blend-mode'] = 'normal';
        var layer_SUNGAI_5 = new L.geoJson(json_SUNGAI_5, {
            attribution: '',
            interactive: true,
            dataVar: 'json_SUNGAI_5',
            layerName: 'layer_SUNGAI_5',
            pane: 'pane_SUNGAI_5',
            onEachFeature: pop_SUNGAI_5,
            style: style_SUNGAI_5_0,
        });
        bounds_group.addLayer(layer_SUNGAI_5);
        map.addLayer(layer_SUNGAI_5);
        function pop_SEBARAN_MANGROVE_6(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    for (var i in e.target._eventParents) {
                        if (typeof e.target._eventParents[i].resetStyle === 'function') {
                            e.target._eventParents[i].resetStyle(e.target);
                        }
                    }
                    if (typeof layer.closePopup == 'function') {
                        layer.closePopup();
                    } else {
                        layer.eachLayer(function(feature){
                            feature.closePopup()
                        });
                    }
                },
                mouseover: highlightFeature,
            });
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['id'] !== null ? autolinker.link(feature.properties['id'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">kawasan</th>\
                        <td>' + (feature.properties['kawasan'] !== null ? autolinker.link(feature.properties['kawasan'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">luas</th>\
                        <td>' + (feature.properties['luas'] !== null ? autolinker.link(feature.properties['luas'].toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            var content = removeEmptyRowsFromPopupContent(popupContent, feature);
			layer.on('popupopen', function(e) {
				addClassToPopupIfMedia(content, e.popup);
			});
			layer.bindPopup(content, { maxHeight: 400 });
        }

        function style_SEBARAN_MANGROVE_6_0() {
            return {
                pane: 'pane_SEBARAN_MANGROVE_6',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(31,120,180,1.0)',
                interactive: true,
            }
        }
        map.createPane('pane_SEBARAN_MANGROVE_6');
        map.getPane('pane_SEBARAN_MANGROVE_6').style.zIndex = 406;
        map.getPane('pane_SEBARAN_MANGROVE_6').style['mix-blend-mode'] = 'normal';
        var layer_SEBARAN_MANGROVE_6 = new L.geoJson(json_SEBARAN_MANGROVE_6, {
            attribution: '',
            interactive: true,
            dataVar: 'json_SEBARAN_MANGROVE_6',
            layerName: 'layer_SEBARAN_MANGROVE_6',
            pane: 'pane_SEBARAN_MANGROVE_6',
            onEachFeature: pop_SEBARAN_MANGROVE_6,
            style: style_SEBARAN_MANGROVE_6_0,
        });
        bounds_group.addLayer(layer_SEBARAN_MANGROVE_6);
        map.addLayer(layer_SEBARAN_MANGROVE_6);
        function pop_mangrove_point_7(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    for (var i in e.target._eventParents) {
                        if (typeof e.target._eventParents[i].resetStyle === 'function') {
                            e.target._eventParents[i].resetStyle(e.target);
                        }
                    }
                    if (typeof layer.closePopup == 'function') {
                        layer.closePopup();
                    } else {
                        layer.eachLayer(function(feature){
                            feature.closePopup()
                        });
                    }
                },
                mouseover: highlightFeature,
            });
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['TemplateID'] !== null ? autolinker.link(feature.properties['TemplateID'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">JENIS_POHON :</th>\
                        <td>' + (feature.properties['TemplateNa'] !== null ? autolinker.link(feature.properties['TemplateNa'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Confidence :</th>\
                        <td>' + (feature.properties['Confidence'] !== null ? autolinker.link(feature.properties['Confidence'].toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            var content = removeEmptyRowsFromPopupContent(popupContent, feature);
			layer.on('popupopen', function(e) {
				addClassToPopupIfMedia(content, e.popup);
			});
			layer.bindPopup(content, { maxHeight: 400 });
        }

        function style_mangrove_point_7_0() {
            return {
                pane: 'pane_mangrove_point_7',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(248,228,46,1.0)',
                interactive: true,
            }
        }
        map.createPane('pane_mangrove_point_7');
        map.getPane('pane_mangrove_point_7').style.zIndex = 407;
        map.getPane('pane_mangrove_point_7').style['mix-blend-mode'] = 'normal';
        var layer_mangrove_point_7 = new L.geoJson(json_mangrove_point_7, {
            attribution: '',
            interactive: true,
            dataVar: 'json_mangrove_point_7',
            layerName: 'layer_mangrove_point_7',
            pane: 'pane_mangrove_point_7',
            onEachFeature: pop_mangrove_point_7,
            pointToLayer: function (feature, latlng) {
                var context = {
                    feature: feature,
                    variables: {}
                };
                return L.circleMarker(latlng, style_mangrove_point_7_0(feature));
            },
        });
        bounds_group.addLayer(layer_mangrove_point_7);
        map.addLayer(layer_mangrove_point_7);
        var baseMaps = {};
        var overlaysTree = [
            {label: '<img src="legend/mangrove_point_7.png" /> Titik Pohon Mangrove', layer: layer_mangrove_point_7},
            {label: '<img src="legend/SEBARAN_MANGROVE_6.png" /> Pemetaan Sebaran Mangrove', layer: layer_SEBARAN_MANGROVE_6},
            {label: '<img src="legend/SUNGAI_5.png" /> SUNGAI', layer: layer_SUNGAI_5},
            {label: 'JALAN<br /><table><tr><td style="text-align: center;"><img src="legend/JALAN_4_JalanKolektor0.png" /></td><td>Jalan Kolektor</td></tr><tr><td style="text-align: center;"><img src="legend/JALAN_4_JalanLain1.png" /></td><td>Jalan Lain</td></tr><tr><td style="text-align: center;"><img src="legend/JALAN_4_JalanMasuk2.png" /></td><td>Jalan Masuk</td></tr><tr><td style="text-align: center;"><img src="legend/JALAN_4_JalurEksplorasi3.png" /></td><td>Jalur Eksplorasi</td></tr></table>', layer: layer_JALAN_4},
            {label: '<img src="legend/PetaPesawaran_3.png" /> Peta Pesawaran', layer: layer_PetaPesawaran_3},
            {label: "Google Satellite", layer: layer_GoogleSatellite_2},
            {label: "Google Terrain Hybrid", layer: layer_GoogleTerrainHybrid_1},
            {label: "Google Maps", layer: layer_GoogleMaps_0},]
        var lay = L.control.layers.tree(null, overlaysTree,{
            //namedToggle: true,
            //selectorBack: false,
            //closedSymbol: '&#8862; &#x1f5c0;',
            //openedSymbol: '&#8863; &#x1f5c1;',
            //collapseAll: 'Collapse all',
            //expandAll: 'Expand all',
            collapsed: true,
        });
        lay.addTo(map);
        setBounds();
        resetLabels([layer_SEBARAN_MANGROVE_6]);
        map.on("zoomend", function(){
            resetLabels([layer_SEBARAN_MANGROVE_6]);
        });
        map.on("layeradd", function(){
            resetLabels([layer_SEBARAN_MANGROVE_6]);
        });
        map.on("layerremove", function(){
            resetLabels([layer_SEBARAN_MANGROVE_6]);
        });

/////////////////////////////////////////////////////////////
$(window).resize(function() {
  sizeLayerControl();
});

$(document).on("click", ".feature-row", function(e) {
  $(document).off("mouseout", ".feature-row", clearHighlight);
  sidebarClick(parseInt($(this).attr("id"), 10));
});

if ( !("ontouchstart" in window) ) {
  $(document).on("mouseover", ".feature-row", function(e) {
    highlight.clearLayers().addLayer(L.circleMarker([$(this).attr("lat"), $(this).attr("lng")], highlightStyle));
  });
}

$(document).on("mouseout", ".feature-row", clearHighlight);

$("#about-btn").click(function() {
  $("#aboutModal").modal("show");
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#full-extent-btn").click(function() {
  map.fitBounds(layer_SEBARAN_MANGROVE_6.getBounds());
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#legend-btn").click(function() {
  $("#legendModal").modal("show");
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#list-btn").click(function() {
  animateSidebar();
  return false;
});

$("#nav-btn").click(function() {
  $(".navbar-collapse").collapse("toggle");
  return false;
});

$("#sidebar-toggle-btn").click(function() {
  animateSidebar();
  return false;
});

$("#sidebar-hide-btn").click(function() {
  animateSidebar();
  return false;
});

function animateSidebar() {
  $("#sidebar").animate({
    width: "toggle"
  }, 350, function() {
    map.invalidateSize();
  });
}

function clearHighlight() {
  highlight.clearLayers();
}

function sidebarClick(id) {
  var layer = markerClusters.getLayer(id);
  map.setView([layer.getLatLng().lat, layer.getLatLng().lng], 17);
  layer.fire("click");
  /* Hide sidebar and go to the map on small screens */
  if (document.body.clientWidth <= 767) {
    $("#sidebar").hide();
    map.invalidateSize();
  }
}