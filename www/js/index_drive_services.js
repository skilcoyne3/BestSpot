data_support.late(init_data_driving);



   utils.dispatch_case("driving-on-change", "twitter%20bootstrap/input",
                       function(domNode, data, f){ $(domNode).find("input").on("change keydown paste input", f); });
   utils.dispatch_case("driving-get-value", "twitter%20bootstrap/input",
                       function(domNode, data)
                       {
                         return $(domNode).find("input").val(); 
                       });