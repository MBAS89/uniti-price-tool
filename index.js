
const unitiCalculator = ( unitsCategory, primaryUnit, pricePerprimaryUnit, toUnit, qtyOfToUnit, fixedto ) => {

    if (isNaN(pricePerprimaryUnit)) {
        return "Price per unit must be a valid number.";
    } else if (isNaN(qtyOfToUnit)) {
        return "Quantity of converted units must be a valid number.";
    }else if(isNaN(fixedto)){
        return "Fixed to must be a valid number."
    }

    switch (unitsCategory) {
        case "Distance":
            let distanceUnitConversions;

            const distanceBaseConversions = {
                mm: {
                    value: 1, 
                    name: "millimeter"
                }, 
                cm: {
                    value: 10, 
                    name: "centimeter"
                },
                dm: {
                    value: 100, 
                    name: "decimeter"
                },
                m:  {
                    value: 1000, 
                    name: "meter"
                },
                km: {
                    value: 1000000, 
                    name: "kilometer"
                },
                ft: {
                    value: 304.8, 
                    name: "foot"
                },
                yd: {
                    value: 914.4, 
                    name: "yard"
                },
                mi: {
                    value: 1609344, 
                    name: "mile"
                },
                nmi: {
                    value: 1852000, 
                    name: "nautical mile"
                }
            }                

            if (primaryUnit in distanceBaseConversions && toUnit in distanceBaseConversions) {
                const baseValue = distanceBaseConversions[primaryUnit].value;
                distanceUnitConversions = Object.fromEntries(
                    Object.entries(distanceBaseConversions).map(([key, value]) => [key, value.value / baseValue])
                );
            

                const originalUnitConversionFactor = distanceUnitConversions[primaryUnit];
                const newUnitConversionFactor = distanceUnitConversions[toUnit];
                
                const totalPrice = ((newUnitConversionFactor * qtyOfToUnit) * pricePerprimaryUnit) / originalUnitConversionFactor
                
                const totalQty = (newUnitConversionFactor * qtyOfToUnit) / originalUnitConversionFactor
            
            
                return {
                    totalPrice: totalPrice, 
                    qty: totalQty,
                    qtyUnit: primaryUnit,
                    qtyDescription: `${qtyOfToUnit} ${distanceBaseConversions[toUnit].name} is equal to ${totalQty} ${distanceBaseConversions[primaryUnit].name}`,
                    qtyUnitName: distanceBaseConversions[primaryUnit].name,
                    resultDescription: `Given that the cost of one ${distanceBaseConversions[primaryUnit].name} is ${pricePerprimaryUnit}, the total price for ${qtyOfToUnit} ${distanceBaseConversions[toUnit].name} amounts to ${totalPrice}.`
                    
                };

            }else{
                return "The primary unit or the convert to unit does not belong to the Distance category"
            }
            break;
        case "Area":
            let areaUnitConversions;

            const areaBaseConversions = {
                mm2: {
                    value: 1,
                    name: "square millimeter"
                },
                cm2: {
                    value: 100,
                    name: "square centimeter"
                },
                m2: {
                    value: 1000000,
                    name: "square meter"
                },
                a: {
                    value: 100000000,
                    name: "are"
                },
                ha: {
                    value: 10000000000,
                    name: "hectare"
                },
                km2: {
                    value: 1000000000000,
                    name: "square kilometer"
                },
                ft2: {
                    value: 92903.04,
                    name: "square foot"
                },
                yd2: {
                    value: 836127.36,
                    name: "square yard"
                }
            };             

            if (primaryUnit in areaBaseConversions && toUnit in areaBaseConversions) {
                const baseValue = areaBaseConversions[primaryUnit].value;
                areaUnitConversions = Object.fromEntries(
                    Object.entries(areaBaseConversions).map(([key, value]) => [key, value.value / baseValue])
                );
            

                const originalUnitConversionFactor = areaUnitConversions[primaryUnit];
                const newUnitConversionFactor = areaUnitConversions[toUnit];
                
                const totalPrice = ((newUnitConversionFactor * qtyOfToUnit) * pricePerprimaryUnit) / originalUnitConversionFactor
                
                const totalQty = (newUnitConversionFactor * qtyOfToUnit) / originalUnitConversionFactor
            
            
                return {
                    totalPrice: totalPrice.toFixed(fixedto), 
                    qty: totalQty.toFixed(fixedto),
                    qtyUnit: primaryUnit,
                    qtyDescription: `${qtyOfToUnit} ${areaBaseConversions[toUnit].name} is equal to ${totalQty.toFixed(fixedto)} ${areaBaseConversions[primaryUnit].name}`,
                    qtyUnitName: areaBaseConversions[primaryUnit].name,
                    resultDescription: `Given that the cost of one ${areaBaseConversions[primaryUnit].name} is ${pricePerprimaryUnit}, the total price for ${qtyOfToUnit} ${areaBaseConversions[toUnit].name} amounts to ${totalPrice.toFixed(fixedto)}.`
                    
                };

            }else{
                return "The primary unit or the convert to unit does not belong to the Area category"
            }
            break;
        case "Mass":
            let massUnitConversions;

            const massBaseConversions = {
                mg: {
                    value: 1e-3,
                    name: "milligram"
                },
                g: {
                    value: 1,
                    name: "gram"
                },
                kg: {
                    value: 1e3,
                    name: "kilogram"
                },
                t: {
                    value: 1e6,
                    name: "metric ton"
                },
                lb: {
                    value: 453.59237,
                    name: "pound"
                },
                oz: {
                    value: 28.349523125,
                    name: "ounce"
                },
                gr: {
                    value: 0.06479891,
                    name: "grain"
                },
                ton_us: {
                    value: 907184.74,
                    name: "US ton"
                },
                ton_uk: {
                    value: 1016046.9088,
                    name: "UK ton"
                },
                ct: {
                    value: 0.2,
                    name: "carat"
                }
            };                           

            if (primaryUnit in massBaseConversions && toUnit in massBaseConversions) {
                const baseValue = massBaseConversions[primaryUnit].value;
                massUnitConversions = Object.fromEntries(
                    Object.entries(massBaseConversions).map(([key, value]) => [key, value.value / baseValue])
                );
            

                const originalUnitConversionFactor = massUnitConversions[primaryUnit];
                const newUnitConversionFactor = massUnitConversions[toUnit];
                
                const totalPrice = ((newUnitConversionFactor * qtyOfToUnit) * pricePerprimaryUnit) / originalUnitConversionFactor
                
                const totalQty = (newUnitConversionFactor * qtyOfToUnit) / originalUnitConversionFactor
            
            
                return {
                    totalPrice: totalPrice, 
                    qty: totalQty,
                    qtyUnit: primaryUnit,
                    qtyDescription: `${qtyOfToUnit} ${massBaseConversions[toUnit].name} is equal to ${totalQty} ${massBaseConversions[primaryUnit].name}`,
                    qtyUnitName: massBaseConversions[primaryUnit].name,
                    resultDescription: `Given that the cost of one ${massBaseConversions[primaryUnit].name} is ${pricePerprimaryUnit}, the total price for ${qtyOfToUnit} ${massBaseConversions[toUnit].name} amounts to ${totalPrice}.`
                    
                };

            }else{
                return "The primary unit or the convert to unit does not belong to the Mass category"
            }
            break;
        case "Volume":
            let volumeUnitConversions;

            const volumeBaseConversions = {
                ml: {
                    value: 1,
                    name: "milliliter"
                },
                cm3: {
                    value: 1,
                    name: "cubic centimeter"
                },
                l: {
                    value: 1000,
                    name: "liter"
                },
                m3: {
                    value: 1000000,
                    name: "cubic meter"
                },
                in3: {
                    value: 16.387064,
                    name: "cubic inch"
                },
                ft3: {
                    value: 28316.8466,
                    name: "cubic foot"
                },
                yd3: {
                    value: 764554.858,
                    name: "cubic yard"
                },
                gal_us: {
                    value: 3785.4118,
                    name: "US gallon"
                },
                gal_dry_us: {
                    value: 4404.8838,
                    name: "US dry gallon"
                },
                gal_uk: {
                    value: 4546.09,
                    name: "UK gallon"
                },
                oz_us: {
                    value: 29.57353,
                    name: "US fluid ounce"
                },
                oz_uk: {
                    value: 28.4130625,
                    name: "UK fluid ounce"
                },
                qt_us: {
                    value: 946.352946,
                    name: "US quart"
                },
                qt_uk: {
                    value: 1136.5225,
                    name: "UK quart"
                },
                pt_us: {
                    value: 473.176473,
                    name: "US pint"
                },
                pt_uk: {
                    value: 568.26125,
                    name: "UK pint"
                }
            };
                       

            if (primaryUnit in volumeBaseConversions && toUnit in volumeBaseConversions) {
                const baseValue = volumeBaseConversions[primaryUnit].value;
                volumeUnitConversions = Object.fromEntries(
                    Object.entries(volumeBaseConversions).map(([key, value]) => [key, value.value / baseValue])
                );
            

                const originalUnitConversionFactor = volumeUnitConversions[primaryUnit];
                const newUnitConversionFactor = volumeUnitConversions[toUnit];
                
                const totalPrice = ((newUnitConversionFactor * qtyOfToUnit) * pricePerprimaryUnit) / originalUnitConversionFactor
                
                const totalQty = (newUnitConversionFactor * qtyOfToUnit) / originalUnitConversionFactor
            
            
                return {
                    totalPrice: totalPrice, 
                    qty: totalQty,
                    qtyUnit: primaryUnit,
                    qtyDescription: `${qtyOfToUnit} ${volumeBaseConversions[toUnit].name} is equal to ${totalQty} ${volumeBaseConversions[primaryUnit].name}`,
                    qtyUnitName: volumeBaseConversions[primaryUnit].name,
                    resultDescription: `Given that the cost of one ${volumeBaseConversions[primaryUnit].name} is ${pricePerprimaryUnit}, the total price for ${qtyOfToUnit} ${volumeBaseConversions[toUnit].name} amounts to ${totalPrice}.`
                    
                };

            }else{
                return "The primary unit or the convert to unit does not belong to the Volume category"
            }
            break;
        default:
            return "wrong unit type types examples: (Distance, Area, Mass, Volume) pick one!"
    }
}

const allUnitsBasedOnCategory = (category) => {
    switch (category) {
        case "Distance":
            const distanceUnits = [
                {
                    unit: "mm", 
                    name: "millimeter"
                }, 
                {
                    unit: "cm",
                    name: "centimeter"
                },
                {
                    unit: "dm",
                    name: "decimeter"
                },
                {
                    unit: "m", 
                    name: "meter"
                },
                {
                    unit: "km", 
                    name: "kilometer"
                },
                {
                    unit: "ft", 
                    name: "foot"
                },
                {
                    unit: "yd", 
                    name: "yard"
                },
                {
                    unit: "mi", 
                    name: "mile"
                },
                {
                    unit: "nmi", 
                    name: "nautical mile"
                }
            ] 

            return distanceUnits
        case "Area":
            const areaUnits = [
                {
                    unit: "mm2",
                    name: "square millimeter"
                },
                {
                    unit: "cm2",
                    name: "square centimeter"
                },
                {
                    unit: "m2",
                    name: "square meter"
                },
                {
                    unit: "a",
                    name: "are"
                },
                {
                    unit: "ha",
                    name: "hectare"
                },
                {
                    unit: "km2",
                    name: "square kilometer"
                },
                {
                    unit: "ft2",
                    name: "square foot"
                },
                {
                    unit: "yd2",
                    name: "square yard"
                }
            ] 

            return areaUnits
        case "Mass":
            const massUnits = [
                {
                    unit: "mg",
                    name: "milligram"
                },
                {
                    unit: "g",
                    name: "gram"
                },
                {
                    unit: "kg",
                    name: "kilogram"
                },
                {
                    unit: "t",
                    name: "metric ton"
                },
                {
                    unit: "lb",
                    name: "pound"
                },
                {
                    unit: "oz",
                    name: "ounce"
                },
                {
                    unit: "gr",
                    name: "grain"
                },
                {
                    unit: "ton_us",
                    name: "US ton"
                },
                {
                    unit: "ton_uk",
                    name: "UK ton"
                },
                {
                    unit: "ct",
                    name: "carat"
                }
            ] 

            return massUnits
        case "Volume":
            const volumeUnits = [
                {
                    unit: "ml",
                    name: "milliliter"
                },
                {
                    unit: "cm3",
                    name: "cubic centimeter"
                },
                {
                    unit: "l",
                    name: "liter"
                },
                {
                    unit: "m3",
                    name: "cubic meter"
                },
                {
                    unit: "in3",
                    name: "cubic inch"
                },
                {
                    unit: "ft3",
                    name: "cubic foot"
                },
                {
                    unit: "yd3",
                    name: "cubic yard"
                },
                {
                    unit: "gal_us",
                    name: "US gallon"
                },
                {
                    unit: "gal_dry_us",
                    name: "US dry gallon"
                },
                {
                    unit: "gal_uk",
                    name: "UK gallon"
                },
                {
                    unit: "oz_us",
                    name: "US fluid ounce"
                },
                {
                    unit: "oz_uk",
                    name: "UK fluid ounce"
                },
                {
                    unit: "qt_us",
                    name: "US quart"
                },
                {
                    unit: "qt_uk",
                    name: "UK quart"
                },
                {
                    unit: "pt_us",
                    name: "US pint"
                },
                {
                    unit: "pt_uk",
                    name: "UK pint"
                }
            ] 

            return volumeUnits
        default:
            return "wrong units Category types examples: (Distance, Area, Mass, Volume) pick one!"
    }
}

module.exports = { unitiCalculator, allUnitsBasedOnCategory }