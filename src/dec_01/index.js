import { documentArrayOfValues } from './constants.mjs';

/* December 1st advent of Code 
 calibration values are recorded by 
 receiving the first digit and the last digit from a document of
 values with characters and digits thrown together
*/

export async function splitStrings(array)
{
    return array.map(element => {
        return element.split(''); 
    });
};

export async function filterForNumbers(segmentedArray)
{
    console.log( segmentedArray);
    segmentedArray.filter((element) => Number(element));
};

let segmentedStrings = splitStrings(documentArrayOfValues);
filterForNumbers();
