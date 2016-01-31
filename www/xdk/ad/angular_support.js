(function()
{
    window.data_support = {}; //namespace
    
    window.angular_controllers = {};  //global   {"safe_name":{controller: scope:}, "other_name":{controller: scope:}}
    
    var safe_apply =  function(fn)
    {
        var phase = this.$root.$$phase;
        if(phase == '$apply' || phase == '$digest')
        {
            if(fn && (typeof(fn) === 'function')) {
                fn();
            }
        }
        else
        {
            this.$apply(fn);
        }
    };
    
    /*
        @param {String} safe_name == "uib_w_2" or "party_boat".   Name with no #, ., - or other illegal punctuation etc.
        @param {String} selector -- ".uib_w_2" or "#party-boat", etc.
        @param {String|null| event_key -- "standard-list" et al
        @param {Object} data_views    -- example:  { group:[{parent:".uib_w_1", child:".uib_w_2"}],  single:["#party-boat"]};
    */
    function get_group_view_controller(safe_name, selector, data_event, data_path_array, event_key, data_views)
    {
        return function($scope)
        {
            window.angular_controllers[safe_name].scope = $scope;
                
            $scope.safe_apply = safe_apply;
            
            var get_data_handler = data_event_handlers.on_data_proplist[event_key];
            var data_handler_f   = get_data_handler ? get_data_handler(selector) : function(data){};
            
            $(document).on(data_event, function(evt, data)
            { 
                data_path_array.forEach(function(d){ data = data[d]; });
                data = filter(data, is_object);
                $scope.safe_apply(function()
                { 
                    $scope.entries = data; 
                    setTimeout(function(){ data_handler_f(data); }, 200);  //best to execute other code _after_ angular is done.
                }); 
            }); 
            
            $scope.entries = [];
            
            var click_handler_f = data_event_handlers.on_click_proplist[event_key](selector);
            var action_f = null; //get_event_handler(selector);
                
            $scope.select_entry = function($event, entry)
            {
                if(click_handler_f){ click_handler_f(entry); }
                if(action_f){ action_f($event); }
                
            };
        };
    }
  
    function filter(arr, predicate)
    {
        var i, res = [];
        for(i=0; i < arr.length; i++){ if(predicate(arr[i])){ res.push(arr[i]); } }
        return res;
    }
    function is_object(e){ return typeof(e) == "object"; }
    
    function get_single_view_controller(safe_name, selector, data_event, data_path_array, event_key, data_views)
    {
        var get_data_handler = data_event_handlers.on_data_proplist[event_key];
        var data_handler_f   = get_data_handler ? get_data_handler(selector) : function(data){};
        
        return function($scope)
        {
            window.angular_controllers[safe_name].scope = $scope;
                
            $scope.safe_apply = safe_apply;
            
            
            $(document).on(data_event, function(evt, data)
            { 
              data_path_array.forEach(function(d){ data = data[d]; });
              $scope.safe_apply(function()
              { 
                $scope.entry = data; 
                setTimeout(function(){ data_handler_f(data); }, 200);
              }); });
            
            $scope.entry = [];
                
        };
    }
    

    function find(arr, f)
    {
        var i, res;
        for(i=0; i<arr.length; i++)
        {
            res = f(arr[i]);
            if(res){ return arr[i]; }
        }
    }

    data_support.prepare_mvc = function(selector, data_event, data_path_array, event_key, data_views)
    {
        var safe_name = data_support.safe_name(selector);
        
        window.angular_controllers[safe_name] = {};
        //var get_controller_f = (data_views.single.indexOf(selector) >= 0) ? get_single_view_controller : get_group_view_controller; 
        var get_controller_f = find(data_views.single, function(entry){ return entry.selector === selector; }) ? get_single_view_controller 
                                                                                                               : get_group_view_controller;
        window.angular_controllers[safe_name].controller = get_controller_f(safe_name, selector, data_event, data_path_array, event_key, data_views);
    };
    
   
    data_support.delayed_ready = function(f)
    {
      angular.element(document).ready(f);
    };
  
    
    
    data_support.entry_from_$this = function($this, selector)
     {
         console.log("entry_from_event", $this);
         //var safe_name = (selector === "#party-boat") ? "party_boat"  : "uib_w_2"; // temp
        var safe_name = data_support.safe_name(selector);
         var data = angular_controllers[safe_name].scope.entries;
         if(data)
         {
             var index = parseInt($this.attr("data-adidx"));
             if(data && ! isNaN(index))
             {
                 return data[index];
             }
             else{ return undefined; }
         }
        else
        {
            return angular_controllers[safe_name].scope.entry;
        }
     };
    
})();
     
