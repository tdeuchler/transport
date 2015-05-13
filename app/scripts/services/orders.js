'use strict';

/**
 * @ngdoc function
 * @name parkTransportApp.service:OrdersService
 * @description
 * # OrdersService
 * Service to get orders
 */
angular.module('transportApp')
  .service('ordersService', ['$http', function ($http) {
   		this.getOrders = function(){
   			return [ {
            "CustomerId": "5317ce3b859d26944b8b459e",
            "Customer": "MOHAWK CUSTOMS & SHIPPING CORP",
            "CustomerCityState": "ITASCA, IL",
            "BillToId": "5317ce3b859d26944b8b459e",
            "BillTo": "MOHAWK CUSTOMS & SHIPPING CORP",

          
        },
        {
            "CustomerId": "531935b7859d260b738b45b4",
            "Customer": "BRISK LOGISTICS INC.",
            "CustomerCityState": "ELK GROVE VILLAGE, IL",
            "BillToId": "531935b7859d260b738b45b4",
            "BillTo": "BRISK LOGISTICS INC.",

           
        },
        {
            "CustomerId": "5317b1dd859d26b1498b4571",
            "Customer": "YANG MING (AMERICA) CORPORATION - CSC",
            "CustomerCityState": "DOWNERS GROVE, IL",
            "BillToId": "5317b1dd859d26b1498b4571",
            "BillTo": "YANG MING (AMERICA) CORPORATION - CSC",

           
        },
        {
            "CustomerId": "4fe8e3dd859d266a3f000000",
            "Customer": "CHEETAH EXPRESS INC",
            "CustomerCityState": "ELK GROVE VILLAGE, IL",
            "BillToId": "4fe8e3dd859d266a3f000000",
            "BillTo": "CHEETAH EXPRESS INC",

           
        },
        {
            "CustomerId": "4fe8e3dd859d266a3f000000",
            "Customer": "CHEETAH EXPRESS INC",
            "CustomerCityState": "ELK GROVE VILLAGE, IL",
            "BillToId": "4fe8e3dd859d266a3f000000",
            "BillTo": "CHEETAH EXPRESS INC",

           
        },
        {
            "CustomerId": "4fe8e3dd859d266a3f000000",
            "Customer": "CHEETAH EXPRESS INC",
            "CustomerCityState": "ELK GROVE VILLAGE, IL",
            "BillToId": "4fe8e3dd859d266a3f000000",
            "BillTo": "CHEETAH EXPRESS INC",

           
        },
        {
            "CustomerId": "53fe38e5859d268a6d28a635",
            "Customer": "NIPPON EXPRESS USA (CA)",
            "CustomerCityState": "TORRANCE, CA",
            "BillToId": "53fe38e5859d268a6d28a635",
            "BillTo": "NIPPON EXPRESS USA (CA)",

           
        },
        {
            "CustomerId": "4f565d7c859d264b63000bee",
            "Customer": "AXON INT'L",
            "CustomerCityState": "ELK GROVE VILLAGE, IL",
            "BillToId": "4f565d7c859d264b63000bee",
            "BillTo": "AXON INT'L",

           
        },
        {
            "CustomerId": "4f565d7b859d264b63000068",
            "Customer": "KINTETSU WORLD EXPRESS (USA) ,INC.",
            "CustomerCityState": "WOOD DALE, IL",
            "BillToId": "4f565d7b859d264b63000068",
            "BillTo": "KINTETSU WORLD EXPRESS (USA) ,INC.",
           
            
        },
        {
            "CustomerId": "4fba554c859d260e60000005",
            "Customer": "JAS FORWARDING (IL NEW)",
            "CustomerCityState": "MT PROSPECT, IL",
            "BillToId": "4fba554c859d260e60000005",
            "BillTo": "JAS FORWARDING (IL NEW)",
           
            
        },
        {
            "CustomerId": "5317ce3b859d26944b8b459e",
            "Customer": "MOHAWK CUSTOMS & SHIPPING CORP",
            "CustomerCityState": "ITASCA, IL",
            "BillToId": "5317ce3b859d26944b8b459e",
            "BillTo": "MOHAWK CUSTOMS & SHIPPING CORP",

          
        },
        {
            "CustomerId": "531935b7859d260b738b45b4",
            "Customer": "BRISK LOGISTICS INC.",
            "CustomerCityState": "ELK GROVE VILLAGE, IL",
            "BillToId": "531935b7859d260b738b45b4",
            "BillTo": "BRISK LOGISTICS INC.",

           
        },
        {
            "CustomerId": "5317b1dd859d26b1498b4571",
            "Customer": "YANG MING (AMERICA) CORPORATION - CSC",
            "CustomerCityState": "DOWNERS GROVE, IL",
            "BillToId": "5317b1dd859d26b1498b4571",
            "BillTo": "YANG MING (AMERICA) CORPORATION - CSC",

           
        },
        {
            "CustomerId": "4fe8e3dd859d266a3f000000",
            "Customer": "CHEETAH EXPRESS INC",
            "CustomerCityState": "ELK GROVE VILLAGE, IL",
            "BillToId": "4fe8e3dd859d266a3f000000",
            "BillTo": "CHEETAH EXPRESS INC",

           
        },
        {
            "CustomerId": "4fe8e3dd859d266a3f000000",
            "Customer": "CHEETAH EXPRESS INC",
            "CustomerCityState": "ELK GROVE VILLAGE, IL",
            "BillToId": "4fe8e3dd859d266a3f000000",
            "BillTo": "CHEETAH EXPRESS INC",

           
        },
        {
            "CustomerId": "4fe8e3dd859d266a3f000000",
            "Customer": "CHEETAH EXPRESS INC",
            "CustomerCityState": "Chicago, IL",
            "BillToId": "4fe8e3dd859d266a3f000000",
            "BillTo": "CHEETAH EXPRESS INC",

           
        },
        {
            "CustomerId": "53fe38e5859d268a6d28a635",
            "Customer": "NIPPON EXPRESS USA (CA)",
            "CustomerCityState": "TORRANCE, CA",
            "BillToId": "53fe38e5859d268a6d28a635",
            "BillTo": "NIPPON EXPRESS USA (CA)",

           
        },
        {
            "CustomerId": "4f565d7c859d264b63000bee",
            "Customer": "AXON INT'L",
            "CustomerCityState": "ELK GROVE VILLAGE, IL",
            "BillToId": "4f565d7c859d264b63000bee",
            "BillTo": "AXON INT'L",

           
        },
        {
            "CustomerId": "4f565d7b859d264b63000068",
            "Customer": "KINTETSU WORLD EXPRESS (USA) ,INC.",
            "CustomerCityState": "WOOD DALE, IL",
            "BillToId": "4f565d7b859d264b63000068",
            "BillTo": "KINTETSU WORLD EXPRESS (USA) ,INC.",
           
            
        },
        {
            "CustomerId": "4fba554c859d260e60000005",
            "Customer": "JAS FORWARDING (IL NEW)",
            "CustomerCityState": "MT PROSPECT, IL",
            "BillToId": "4fba554c859d260e60000005",
            "BillTo": "JAS FORWARDING (IL NEW)",
           
            
        },
        {
            "CustomerId": "5317ce3b859d26944b8b459e",
            "Customer": "MOHAWK CUSTOMS & SHIPPING CORP",
            "CustomerCityState": "ITASCA, IL",
            "BillToId": "5317ce3b859d26944b8b459e",
            "BillTo": "MOHAWK CUSTOMS & SHIPPING CORP",

          
        },
        {
            "CustomerId": "531935b7859d260b738b45b4",
            "Customer": "BRISK LOGISTICS INC.",
            "CustomerCityState": "ELK GROVE VILLAGE, IL",
            "BillToId": "531935b7859d260b738b45b4",
            "BillTo": "BRISK LOGISTICS INC.",

           
        },
        {
            "CustomerId": "5317b1dd859d26b1498b4571",
            "Customer": "YANG MING (AMERICA) CORPORATION - CSC",
            "CustomerCityState": "DOWNERS GROVE, IL",
            "BillToId": "5317b1dd859d26b1498b4571",
            "BillTo": "YANG MING (AMERICA) CORPORATION - CSC",

           
        },
        {
            "CustomerId": "4fe8e3dd859d266a3f000000",
            "Customer": "CHEETAH EXPRESS INC",
            "CustomerCityState": "ELK GROVE VILLAGE, IL",
            "BillToId": "4fe8e3dd859d266a3f000000",
            "BillTo": "CHEETAH EXPRESS INC",

           
        },
        {
            "CustomerId": "4fe8e3dd859d266a3f000000",
            "Customer": "CHEETAH EXPRESS INC",
            "CustomerCityState": "ELK GROVE VILLAGE, IL",
            "BillToId": "4fe8e3dd859d266a3f000000",
            "BillTo": "CHEETAH EXPRESS INC",

           
        },
        {
            "CustomerId": "4fe8e3dd859d266a3f000000",
            "Customer": "CHEETAH EXPRESS INC",
            "CustomerCityState": "ELK GROVE VILLAGE, IL",
            "BillToId": "4fe8e3dd859d266a3f000000",
            "BillTo": "CHEETAH EXPRESS INC",

           
        },
        {
            "CustomerId": "53fe38e5859d268a6d28a635",
            "Customer": "NIPPON EXPRESS USA (CA)",
            "CustomerCityState": "TORRANCE, CA",
            "BillToId": "53fe38e5859d268a6d28a635",
            "BillTo": "NIPPON EXPRESS USA (CA)",

           
        },
        {
            "CustomerId": "4f565d7c859d264b63000bee",
            "Customer": "AXON INT'L",
            "CustomerCityState": "ELK GROVE VILLAGE, IL",
            "BillToId": "4f565d7c859d264b63000bee",
            "BillTo": "AXON INT'L",

           
        },
        {
            "CustomerId": "4f565d7b859d264b63000068",
            "Customer": "KINTETSU WORLD EXPRESS (USA) ,INC.",
            "CustomerCityState": "WOOD DALE, IL",
            "BillToId": "4f565d7b859d264b63000068",
            "BillTo": "KINTETSU WORLD EXPRESS (USA) ,INC.",
           
            
        },
        {
            "CustomerId": "4fba554c859d260e60000005",
            "Customer": "JAS FORWARDING (IL NEW)",
            "CustomerCityState": "MT PROSPECT, IL",
            "BillToId": "4fba554c859d260e60000005",
            "BillTo": "JAS FORWARDING (IL NEW)",
           
            
        }
    ];
   		},

        this.getOrder = function( params ){
            return [ {
            "CustomerId": "4fba005",
            "Customer": params.searchString + ' Home',
            "CustomerCityState": "Chicago, IL",
            "BillToId": "4f005",
            "BillTo": "Testing Search",
           
            
        },{
            "CustomerId": "234XX",
            "Customer": params.searchString + ' Incorporated',
            "CustomerCityState": "Dundee, IL",
            "BillToId": "Local",
            "BillTo": "Local Spec",
           
            
        },{
            "CustomerId": "2305",
            "Customer": params.searchString,
            "CustomerCityState": "Naperville, IL",
            "BillToId": "N/A",
            "BillTo": "Search",
           
            
        },{
            "CustomerId": "4TY5",
            "Customer": params.searchString + ' Ltd.',
            "CustomerCityState": "Chicago, IL",
            "BillToId": "N/A",
            "BillTo": "Accounts",
           
            
        }]
        }
  }]);
