// Code your solution in this file.

function lowerCaseDrivers(drivers) {
  const newArr = drivers.map ( function(driver) { return driver.toLowerCase(); } );
  return newArr;
}

function nameToAttributes(drivers) {
  const newArr = drivers.map (
    function(driver) {
      const names = driver.split(" ");
      const driverObj = {}
      driverObj.firstName = names[0];
      driverObj.lastName = names[1];
      return driverObj;
    }
  );

  return newArr;
}

function attributesToPhrase(drivers) {
  const newArr = drivers.map (
    function(driver) {
      return `${driver.name} is from ${driver.hometown}`;
    }
  );

  return newArr;
}
