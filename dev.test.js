import { expect } from "chai";
import { findOddRed } from "./dev.js";

describe("findOddRed", () => {
      it("should return 5 for [2, 4, 6, 8, 10, 1, 3, 5]", () => {
        const input = [2, 4, 6, 8, 10, 1, 3, 5];
        const expected = 5;
        expect(findOddRed(input)).to.equal(expected);
    });
    it("should return 7 for [2, 4, 6, 8, 10, 1, 3, 5, 7]", () => {
        const input = [2, 4, 6, 8, 10, 1, 3, 5, 7];
        const expected = 7;
        expect(findOddRed(input)).to.equal(expected);
    });
    it("should return 1 for [2, 4, 6, 8, 10, 1]", () => {
        const input = [2, 4, 6, 8, 10, 1];
        const expected = 1;
        expect(findOddRed(input)).to.equal(expected);
    });
});