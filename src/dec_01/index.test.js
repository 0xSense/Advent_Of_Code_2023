import { describe, expect, test } from '@jest/globals';
import * as matchers from 'jest-extended';
import { removeDigitDecoder } from './index.js';

describe('The returned result equals two digits', () => {
    test('expect two values to equal one integer', () => {
        const returnedSum = removeDigitDecoder(2, 9);
        expect(returnedSum).toBe(11)
    });
   
});
