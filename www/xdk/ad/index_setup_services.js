var data_views   = { group:[], single:[], bindings:{}};

data_views.group.push({"model":{"location_name":null,"address":null,"city":null,"zip":null,"state":null,"lat":null,"lng":null,"distance":null,"recommendations":null,"available_spots":null,"price_formatted":null,"www_reserve_url":null},"child":".uib_w_6","parent":".uib_w_5"});

data_views.group.push({"model":{"location_name":null,"address":null,"city":null,"zip":null,"state":null,"lat":null,"lng":null,"distance":null,"recommendations":null,"available_spots":null,"price_formatted":null,"www_reserve_url":null},"child":".uib_w_19","parent":".uib_w_17"});


data_views.single.push({"selector":".uib_w_21","options":{"effect":["html","attributes"]}});
data_views.single.push({"selector":".uib_w_20","options":{"effect":["html","attributes"]}});

data_views.single.push({"selector":".uib_col_12","options":{"effect":["html","attributes"]}});

data_views.single.push({"selector":"#BookNow_btn","options":{"effect":["html","attributes"]}});
/* prepare controllers */

data_support.prepare_mvc(".uib_w_6", "intel.xdk.services.parkWhizsearch", ["parking_listings"], "standard-list", data_views);

data_support.prepare_mvc(".uib_w_19", "intel.xdk.services.parkWhizsearch", ["parking_listings"], "standard-list", data_views);


data_support.prepare_mvc(".uib_w_21", "uib_w_19_data", [], "null", data_views);
data_support.prepare_mvc(".uib_w_20", "uib_w_19_data", [], "null", data_views);






/*var data_views   = { group:[], single:[], bindings:{}};

data_views.group.push({"model":{"id":null,"title":null,"year":null,"mpaa_rating":null,"runtime":null,"posters.thumbnail":null},"child":".uib_w_2","parent":".uib_w_1"});
data_views.single.push({"selector":".uib_w_3","options":{"effect":["html","attributes"]}});


data_support.prepare_mvc(".uib_w_2", "intel.xdk.services.movie_search", ["movies"], "standard-list", data_views);
data_support.prepare_mvc(".uib_w_3", "uib_w_2_data", [], "null", data_views);*/data_support.prepare_mvc("#Bck_listings", "uib_w_19_data", [], "null", data_views);
data_support.prepare_mvc(".uib_col_12", "uib_w_19_data", [], "null", data_views);

data_support.prepare_mvc("#BookNow_btn", "uib_w_19_data", [], "null", data_views);
