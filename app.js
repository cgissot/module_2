(function () {
'use strict';
angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var itemsToBuy = this;

  itemsToBuy.items = ShoppingListCheckOffService.getItemsToBuy();

  itemsToBuy.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemsToBuy.items[itemIndex].name, itemsToBuy.items[itemIndex].quantity,itemIndex);
  };

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var showList = this;

  showList.items = ShoppingListCheckOffService.getItemsBought();
}

function ShoppingListCheckOffService() {
  var service = this;
  // List of shopping items
  var itemsToBuy = [{ name: "cookies", quantity: 10 },{ name: "pepsi", quantity: 1 },{ name: "cakes", quantity: 2 },{ name: "fanta", quantity: 10 },{ name: "chips", quantity: 29 }];
  var itemsBought = [];

  service.buyItem = function (itemName, quantity, itemIdex) {

    var item = {
      name: itemName,
      quantity: quantity
    };
    itemsToBuy.splice(itemIdex, 1);
    itemsBought.push(item);

  };

  service.getItemsToBuy = function () {
    return itemsToBuy;
  };

  service.getItemsBought = function () {
    return itemsBought;
  };

}
})();
