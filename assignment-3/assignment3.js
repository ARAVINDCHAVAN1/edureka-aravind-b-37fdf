// Solution - 1

class restaurantManager {
    restaurantList = [{
        id: 1,
        restaurantName: 'KFC',
        address: 'Anand Vihar',
        city: 'Delhi'
    },
    {
        id: 2,
        restaurantName: 'Domino',
        address: 'Savita Vihar',
        city: 'Delhi'
    },
    {
        id: 3,
        restaurantName: 'Burger King',
        address: 'Civil Lines',
        city: 'Pune'
    },
    {
        id: 4,
        restaurantName: 'Subway',
        address: 'Cantonment',
        city: 'Mumbai'
    }]

    printAllRestaurantNames = () => {
        return this.restaurantList.map(restaurant => restaurant.restaurantName);
    }
    

    filterRestaurantByCity = (cityName) => {
        return this.restaurantList.filter(restaurant => restaurant.city == cityName);
    }
}

const restaurantObj = new restaurantManager();
restaurantObj.printAllRestaurantNames();       // ['KFC', 'Domino', 'Burger King']
restaurantObj.filterRestaurantByCity('Pune');  // [{},{}]

console.log(restaurantObj);



// Solution - 3

const orderData = {
    'Below 500': 20,
    '500-1000': 29,
    '1000-1500': 30,
    '1500-2000': 44,
    'Above 2000': 76
  };
  
  // a) 
  const total = Object.values(orderData).reduce((prev, next) => prev + next);  // Calculating the total of all key values 
  
  // b) 
  const headers = Object.keys(orderData);  // Computing all keys of the Object
  
  //c) 
  const response = headers.map((item, index) => {  
    return {
      'id': index + 1,
      'restaurant': 'Punjabi Tadka',
      'order': item,
      'order percentage': ((orderData[item] / total) * 100).toFixed(2)
    }
  })
  console.log(response);