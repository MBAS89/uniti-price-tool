# uniti-price-tool

## Overview
`uniti-price-tool` is a Node.js package that facilitates unit conversions and price calculations across various categories of units including Distance, Area, Mass, and Volume. It offers a simple interface to convert quantities between different units and calculate total prices based on the provided unit quantities and prices per unit.

## Installation

You can install `uniti-price-tool` via npm:

```bash
npm install uniti-price-tool
```
## Usage Of unitiCalculator 
To use uniti-price-tool, require it in your Node.js application:
```javascript
const { unitiCalculator } = require('uniti-price-tool')
```
Then, you can use the `unitiCalculator` function to perform unit conversions and price calculations. The function takes the following parameters:

* `unitsCategory`: The category of units (e.g., "Distance", "Area", "Mass", "Volume").
* `primaryUnit`: The primary unit for conversion.
* `pricePerprimaryUnit`: The price per primary unit.
* `toUnit`: The unit to convert to.
* `qtyOfToUnit`: The quantity of units to convert.
* `fixedto`: The number of decimal places to round the result to.


The function returns an object containing the total price and quantity of converted units, along with descriptive information.

## Example
Here's an example of how to use `unitiCalculator` to convert distances:

```javascript
const unitiPriceTool = require('uniti-price-tool');

const result = unitiPriceTool("Distance", "m", 1.5, "ft", 10, 2);

//The m represent meter it's the primary unit
//The 1.5 the price of 1 metr is 1.5
//The ft represent foot the converted to unit
//The 10 is how many foot mean the qty of the converted to unit

console.log(result);
```
This will output:

```json
{
  "totalPrice": 4.92,
  "qty": 32.81,
  "qtyUnit": "m",
  "qtyDescription": "10 foot is equal to 32.81 meter",
  "qtyUnitName": "meter",
  "resultDescription": "Given that the cost of one meter is 1.5, the total price for 10 foot amounts to 4.92."
}
```

## Usage Of unitiCalculator 
To use uniti-price-tool, require it in your Node.js application:
```javascript
const { allUnitsBasedOnCategory } = require('uniti-price-tool')
```
Then, you can use the `allUnitsBasedOnCategory` function to retrieve all unit symbols and their names based on the provided category. The function takes the following parameters:

* `category`: The category of units (e.g., "Distance", "Area", "Mass", "Volume").

The function returns an array of objects, each containing information about a unit within the specified category. Each object in the array includes two properties:
* `unit`: The symbol of the unit.
* `name`: The name of the unit.

## Example
Here's an example of how to use `allUnitsBasedOnCategory` to retrieve all units symbols and their names based on the provided category:

```javascript
const { allUnitsBasedOnCategory } = require('uniti-price-tool')

const result = allUnitsBasedOnCategory("Distance")

//The Distance represent the units category

console.log(result);
```
This will output:

```javascript
 [
    { unit: 'mg', name: 'milligram' },
    { unit: 'g', name: 'gram' },
    { unit: 'kg', name: 'kilogram' },
    { unit: 't', name: 'metric ton' },
    { unit: 'lb', name: 'pound' },
    { unit: 'oz', name: 'ounce' },
    { unit: 'gr', name: 'grain' },
    { unit: 'ton_us', name: 'US ton' },
    { unit: 'ton_uk', name: 'UK ton' },
    { unit: 'ct', name: 'carat' }
 ]
```

## Unit Categories and Their Units with Names

| Category | Unit | Name                   | Category | Unit | Name                   |
|----------|------|------------------------|----------|------|------------------------|
| Distance | mm   | millimeter             | Area     | mm2  | square millimeter      |
|          | cm   | centimeter             |          | cm2  | square centimeter      |
|          | dm   | decimeter              |          | m2   | square meter           |
|          | m    | meter                  |          | a    | are                    |
|          | km   | kilometer              |          | ha   | hectare                |
|          | ft   | foot                   |          | km2  | square kilometer       |
|          | yd   | yard                   |          | ft2  | square foot            |
|          | mi   | mile                   |          | yd2  | square yard            |
|          | nmi  | nautical mile          |          |      |                        |
|----------|------|------------------------|----------|------|------------------------|
| Mass     | mg   | milligram              | Volume   | ml   | milliliter             |
|          | g    | gram                   |          | cm3  | cubic centimeter       |
|          | kg   | kilogram               |          | l    | liter                  |
|          | t    | metric ton             |          | m3   | cubic meter            |
|          | pound| pound                  |          | in3  | cubic inch             |
|          | oz   | ounce                  |          | ft3  | cubic foot             |
|          | gr   | grain                  |          | yd3  | cubic yard             |
|          | ton_us| US ton                |          | gal_us| US gallon              |
|          | ton_uk| UK ton                |          | gal_dry_us| US dry gallon     |
|          | ct   | carat                  |          | gal_uk| UK gallon              |
|          |      |                        |          | oz_us| US fluid ounce         |
|          |      |                        |          | oz_uk| UK fluid ounce         |
|          |      |                        |          | qt_us| US quart               |
|          |      |                        |          | qt_uk| UK quart               |
|          |      |                        |          | pt_us| US pint                |
|          |      |                        |          | pt_uk| UK pint                |


## Error Handling

`unitiCalculator` returns strings with error messages if input validation fails. These error messages help you identify and resolve issues with your input parameters. Here are the possible error messages and their explanations:

1. **"Price per unit must be a valid number."**  
   This error occurs when the `pricePerprimaryUnit` parameter provided to `unitiCalculator` is not a valid number.

2. **"Quantity of converted units must be a valid number."**  
   This error occurs when the `qtyOfToUnit` parameter provided to `unitiCalculator` is not a valid number.

3. **"Fixed to must be a valid number."**  
   This error occurs when the `fixedto` parameter provided to `unitiCalculator` is not a valid number.

4. **"The primary unit or the convert to unit does not belong to the Distance category"**  
   This error occurs when either the `primaryUnit` or the `toUnit` parameter provided to `unitiCalculator` does not belong to the Distance category.

5. **"The primary unit or the convert to unit does not belong to the Area category"**  
   This error occurs when either the `primaryUnit` or the `toUnit` parameter provided to `unitiCalculator` does not belong to the Area category.

6. **"The primary unit or the convert to unit does not belong to the Mass category"**  
   This error occurs when either the `primaryUnit` or the `toUnit` parameter provided to `unitiPriceTool` does not belong to the Mass category.

7. **"The primary unit or the convert to unit does not belong to the Volume category"**  
   This error occurs when either the `primaryUnit` or the `toUnit` parameter provided to `unitiCalculator` does not belong to the Volume category.
   
8. **"Wrong unit type types examples: (Distance, Area, Mass, Volume) pick one!"**  
   This error occurs when the `unitsCategory` parameter value provided to `unitiCalculator` does not match any category name.
   
##
`allUnitsBasedOnCategory` returns strings with error message if input validation fails. These error messages help you identify and resolve issues with your input parameters. Here are the possible error messages and their explanations:

* **"Wrong units Category types examples: (Distance, Area, Mass, Volume) pick one!"**  
   This error occurs when the `category` parameter value provided to `allUnitsBasedOnCategory` does not match any category name.

Make sure to handle these error messages appropriately in your code to ensure smooth execution and accurate results from `unitiCalculator` or `allUnitsBasedOnCategory`.

## Contribution
Contributions are welcome! Feel free to submit issues or pull requests.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

