import {test, expect} from "vitest"


function SarcasticScoreToString(score) {
    
    if (typeof score === 'string') {
        return "Letters? This isn't Wordle!";
    } else if (isNaN(score)) {
        return "Not a number. Is this modern art?";
    } else if (score < 0) {
        return "Negative score? Did you even try?";
    } else if (score === 0) {
        return "Zero? Didn't write your name?";
    } else if (score >= 1 && score < 20) {
        return "At least you tried... sort of.";
    } else if (score >= 20 && score < 50) {
        return "Almost there... if you're aiming low.";
    } else if (score >= 50 && score < 70) {
        return "Mediocre, just mediocre.";
    } else if (score >= 70 && score < 100) {
        return "Great job! For a robot.";
    } else if (score === 100) {
        return "100? Do you have a life?";
    } else if (score > 100) {
        return "Overachiever much?";
    } else {
        return "That doesn't even make sense!";
    }
}

test("Testing for string input", () => {
    expect(SarcasticScoreToString("s")).toEqual("Letters? This isn't Wordle!");
});

test("Testing for NaN input", () => {
    expect(SarcasticScoreToString(NaN)).toEqual("Not a number. Is this modern art?");
});

test("Testing for negative score", () => {
    expect(SarcasticScoreToString(-10)).toEqual("Negative score? Did you even try?");
});

test("Testing for score 0", () => {
    expect(SarcasticScoreToString(0)).toEqual("Zero? Didn't write your name?");
});

test("Testing for score between 1 and 19", () => {
    expect(SarcasticScoreToString(10)).toEqual("At least you tried... sort of.");
});

test("Testing for score between 20 and 49", () => {
    expect(SarcasticScoreToString(35)).toEqual("Almost there... if you're aiming low.");
});

test("Testing for score between 50 and 69", () => {
    expect(SarcasticScoreToString(55)).toEqual("Mediocre, just mediocre.");
});

test("Testing for score between 70 and 99", () => {
    expect(SarcasticScoreToString(85)).toEqual("Great job! For a robot.");
});

test("Testing for score 100", () => {
    expect(SarcasticScoreToString(100)).toEqual("100? Do you have a life?");
});

test("Testing for score greater than 100", () => {
    expect(SarcasticScoreToString(105)).toEqual("Overachiever much?");
});

test("Testing for undefined input", () => {
    expect(SarcasticScoreToString(undefined)).toEqual("That doesn't even make sense!");
});

test("Testing for null input", () => {
    expect(SarcasticScoreToString(null)).toEqual("That doesn't even make sense!");
});

test("Testing for object input", () => {
    expect(SarcasticScoreToString({})).toEqual("That doesn't even make sense!");
});

