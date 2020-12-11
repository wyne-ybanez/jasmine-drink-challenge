/* I want to test a whatCanIDrink 
	I am going to test the age function
		if age is equal to or less than 0, and more than 130 
        I expect the alert "Sorry. I can’t tell what drink because that age is incorrect!" */

describe ("whatCanIDrink function", function() {

    // Create new instance of function every single time
    beforeEach (function () {
        drink = new whatCanIDrink ();
    });

    // Age should be defined 
    describe("Check Age", function() {
        it ("person should exist", function() {
        expect(whatCanIDrink).toBeDefined;
    });

        it("should return drink toddy when called as whatCanIDrink(13)", function () {
            var result = whatCanIDrink(13);
            expect(result).toBe("Drink Toddy");
        });

        it("should return drink coke when called as whatCanIDrink(16)", function () {
            var result = whatCanIDrink(16);
            expect(result).toBe("Drink Coke");
        });

        it("should return drink beer when called as whatCanIDrink(20)", function () {
            var result = whatCanIDrink(20);
            expect(result).toBe("Drink Beer");
        });

        it("should return drink whisky when called as whatCanIDrink(60)", function () {
            var result = whatCanIDrink(60);
            expect(result).toBe("Drink Whisky");
        });

        it("should return error message when called as whatCanIDrink(0) or whatCanIDrink(131)", function () {
            var result1 = whatCanIDrink(0);
            var result2 = whatCanIDrink(131);
            expect(result1).toBe("Sorry. I can't tell you what to drink because that age is incorrect!");
            expect(result2).toBe("Sorry. I can't tell you what to drink because that age is incorrect!");        
        });

        // To Test that it always returns a Drink 
        it("should contain Drink when called as whatCanIDrink(7)", function() {
            var result = whatCanIDrink(7).indexOf("Drink");
            expect(result).not.toEqual(-1);
        });
    });
});
        
