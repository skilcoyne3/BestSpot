(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  Button */
    $(document).on("click", ".uib_w_4", function(evt)
    {
         activate_subpage("#uib_page_2"); 
    });
    
        /* button  Button */
    $(document).on("click", ".uib_w_2", function(evt)
    {
         activate_subpage("#ListingPage"); 
    });
    
     
    $(document).on("click", "#list_View", function(evt)
    {
         activate_subpage("#ListingPage"); 
    });
    
        /* button  #Bck_listings */
    $(document).on("click", "#Bck_listings", function(evt)
    {
         activate_subpage("#ListingPage"); 
    });
    
        /* listitem  .uib_w_6 */
    $(document).on("click", ".uib_w_6", function(evt)
    {
         activate_subpage("#Details"); 
    });
    
        /* button  #Ham_menu */
    $(document).on("click", "#Ham_menu", function(evt)
    {
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($(".uib_w_15"));  
    });
    
        /* listitem  #details */
    $(document).on("click", "#details", function(evt)
    {
         activate_subpage("#Details"); 
    });
    
        /* listitem  #List_Item */
    $(document).on("click", "#List_Item", function(evt)
    {
         activate_subpage("#Details"); 
    });
    
        /* button  #BookNow_btn */
    
    
        /* button  NOT HOOKED */
    $(document).on("click", ".uib_w_27", function(evt)
    {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $(".uib_w_24").modal("toggle");  
    });
    
        /* button  Button */
    $(document).on("click", ".uib_w_27", function(evt)
    {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $(".uib_w_24").modal("toggle");  
    });
    
        /* button  #test hover */
    $(document).on("click", "#test hover", function(evt)
    {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $("#testPop").modal("toggle");  
    });
    
        /* button  .uib_w_30 */
    $(document).on("click", ".uib_w_30", function(evt)
    {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $("#testPop").modal("toggle");  
    });
    
        /* button  #book_Now */
    $(document).on("click", "#book_Now", function(evt)
    {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $("#pop_warn").modal("toggle");  
    });
    
        /* button  #BookNow_btn */
    $(document).on("click", "#BookNow_btn", function(evt)
    {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $(".uib_w_28").modal("toggle");  
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
