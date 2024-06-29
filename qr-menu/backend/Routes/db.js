const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://mgoel1296:manugoel@cluster0.ubjmxr4.mongodb.net/Go_food?retryWrites=true&w=majority";
const mongodb = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB");

        // Fetch data from 'food_items' collection
        const food_items = await mongoose.connection.collection("food_items").find({}).toArray();

        // Fetch data from 'food_Category' collection
        const foodCategory = await mongoose.connection.collection("food_category").find({}).toArray();

        // Store fetched data in global variables
        global.food_items = food_items;
        global.foodCategory = foodCategory;

        // console.log("Fetched data:", global.food_items);
        // console.log("Fetched food categories:", global.foodCategory);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
    }
}

module.exports = mongodb;

