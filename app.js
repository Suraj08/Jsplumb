/*

jsPlumb.ready(function()
{

//jsPlumb.Defaults.Container ="#container";
//var sourceDiv = $("#sub1div1");
//var targetDiv = $("#sub1div2");


//jsPlumb.setContainer($("body"));

//jsPlumb.setContainer(document.getElementById("container"));

 var e0 = jsPlumb.addEndpoint("#sub1div1");
 var e1 = jsPlumb.addEndpoint("#sub2div2");

//jsPlumb.connect({ source:e0, target:e1 });



jsPlumb.connect({
    source:e0, 
    target:e1,
    anchors: ["TopLeft", "TopCenter"],
    paintStyle: { strokeStyle: "blue", lineWidth: 5 },
    connector: ["Flowchart", { minStubLength: 40}]
});

 // jsPlumb.connect({ source:e0, target:e1, container:$("#container") });





});  */


jsPlumb.ready(function()
{
  

/*  jsPlumb.setContainer($("body"));
      var e0 = jsPlumb.addEndpoint("sub1div1"),
      e1 = jsPlumb.addEndpoint("sub1div2");
      jsPlumb.connect({ source:e0, target:e1 });      */   


        
          //        jsPlumb.Defaults.Container ="container";

       //      jsPlumb.setContainer(document.getElementById("container"));

       //     jsPlumb.setContainer($("body"));

          //  jsPlumb.getInstance("container");

               //  jsPlumb.setContainer("container");



            jsPlumb.getInstance({
               container:"container"
                             });


          var endpointOptions = { isSource:true, isTarget:true }; 

           var source = jsPlumb.addEndpoint('sub1div1', { anchor:"Continuous" }, endpointOptions);


           var target = jsPlumb.addEndpoint('sub1div2', {anchor:"Continuous" }, endpointOptions);

 
              jsPlumb.connect({
  source:'source',
  target:'target'
  
});  

});




































