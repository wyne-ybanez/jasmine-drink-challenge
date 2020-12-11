/* Drink About is a simple function that will check the age and return a drink appropriate for your age. Create a function called whatCanIDrink. This function should take in age as parameter. The function should do the following:

If the age is less than 0, then it should return "Sorry. I can’t tell what drink because that age is incorrect!"
If the age is less than 14, then it should return "Drink Toddy"
If the age is less than 18, then it should return "Drink Coke"
If the age is less than 21, then it should return "Drink Beer"
If the age is less than 130, then it should return "Drink Whisky"
Else return "Sorry. I can’t tell what drink because that age is incorrect!" */

function whatCanIDrink (age) {
    if (age <= 0) {
        return "Sorry. I can't tell you what to drink because that age is incorrect!";
    } else if (age < 14 && age > 0) {
        return "Drink Toddy";
    } else if (age < 18 && age >= 14) {
        return "Drink Coke";
    } else if (age < 21 && age >= 18) {
        return "Drink Beer";
    } else if (age < 130) {
        return "Drink Whisky";
    } else {
        return "Sorry. I can't tell you what to drink because that age is incorrect!";
    }
};