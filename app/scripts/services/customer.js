'use strict';


angular.module('transportApp')
  .service('customerService', ['$http', function ($http) {
   		this.getCustomer = function(customerId){
   			return [ {
            "CustomerId": "5317ce3b859d26944b8b459e",
            "Customer": "MOHAWK CUSTOMS & SHIPPING CORP",
            "CustomerCityState": "ITASCA, IL",
            "BillToId": "5317ce3b859d26944b8b459e",
            "BillTo": "MOHAWK CUSTOMS & SHIPPING CORP",
            "notes": "These are the notThe Cable News Network is an American basic cable and satellite television channel that is owned by the Turner Broadcasting System division of Time Warner. The 24-hour cable news channel was founded in 1980 by American media proprietor Ted Turner.es..."

          
        },
        {
            "CustomerId": "531935b7859d260b738b45b4",
            "Customer": "BRISK LOGISTICS INC.",
            "CustomerCityState": "ELK GROVE VILLAGE, IL",
            "BillToId": "531935b7859d260b738b45b4",
            "BillTo": "BRISK LOGISTICS INC.",
            "notes": "These are the notes..."
           
        },
        {
            "CustomerId": "5317b1dd859d26b1498b4571",
            "Customer": "YANG MING (AMERICA) CORPORATION - CSC",
            "CustomerCityState": "DOWNERS GROVE, IL",
            "BillToId": "5317b1dd859d26b1498b4571",
            "BillTo": "YANG MING (AMERICA) CORPORATION - CSC",
            "notes": "These are the notes..."
           
        },
        {
            "CustomerId": "4fe8e3dd859d266a3f000000",
            "Customer": "CHEETAH EXPRESS INC",
            "CustomerCityState": "ELK GROVE VILLAGE, IL",
            "BillToId": "4fe8e3dd859d266a3f000000",
            "BillTo": "CHEETAH EXPRESS INC",
            "notes": "These are the notes..."
           
        },

        {
            "CustomerId": "53fe38e5859d268a6d28a635",
            "Customer": "NIPPON EXPRESS USA (CA)",
            "CustomerCityState": "TORRANCE, CA",
            "BillToId": "53fe38e5859d268a6d28a635",
            "BillTo": "NIPPON EXPRESS USA (CA)",
            "notes": "These are the notes..."
           
        },
        {
            "CustomerId": "4f565d7c859d264b63000bee",
            "Customer": "AXON INT'L",
            "CustomerCityState": "ELK GROVE VILLAGE, IL",
            "BillToId": "4f565d7c859d264b63000bee",
            "BillTo": "AXON INT'L",
            "notes": "These are the notes...The Cable News Network is an American basic cable and satellite television channel that is owned by the Turner Broadcasting System division of Time Warner. The 24-hour cable news channel was founded in 1980 by American media proprietor Ted Turner."
           
        },
        {
            "CustomerId": "4f565d7b859d264b63000068",
            "Customer": "KINTETSU WORLD EXPRESS (USA) ,INC.",
            "CustomerCityState": "WOOD DALE, IL",
            "BillToId": "4f565d7b859d264b63000068",
            "BillTo": "KINTETSU WORLD EXPRESS (USA) ,INC.",
                       "notes": "These are the noteThe Cable News Network is an American basic cable and satellite television channel that is owned by the Turner Broadcasting System division of Time Warner. The 24-hour cable news channel was founded in 1980 by American media proprietor Ted Turner.s..."
            
        },
        {
            "CustomerId": "4fba554c859d260e60000005",
            "Customer": "JAS FORWARDING (IL NEW)",
            "CustomerCityState": "MT PROSPECT, IL",
            "BillToId": "4fba554c859d260e60000005",
            "BillTo": "JAS FORWARDING (IL NEW)",
                       "notes": "These are the notes..."
            
        }
       
    ].filter(function(customer){
        return customer.CustomerId === customerId;
    })[0];
   		}
  }]);
