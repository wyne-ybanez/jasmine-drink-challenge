/* I want to test a whatCanIDrink 
	I am going to test the age function
		if age is equal to or less than 0, and more than 130 
        I expect the alert "Sorry. I can’t tell what drink because that age is incorrect!" */

describe ("whatCanIDrink function", function() {

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
        })
    });
});
        
