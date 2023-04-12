const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
// const path = require("path")
const app = express();
const port = 3001;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    course: { type: String, required: false, default: "" },
    specialization: { type: String, required: false, default: "" },
    programmingLanguage: { type: String, required: false, default: "" },
});

const User = mongoose.model("User", userSchema);

mongoose.connect("mongodb://127.0.0.1/connect", { useNewUrlParser: true });

app.post("/signup", async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            res.status(400).json({ message: "User already exists" });
            return;
        }

        const newUser = new User({ email, password });
        await newUser.save();

        res.json({ message: "User created successfully" });
    } catch (error) {
        res.status(500).json({ message: "An error occurred" });
        console.log(error);
    }
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email, password });
        if (user) {
            res.json({ message: "Login successful" });
        } else {
            res.status(401).json({ message: "Invalid credentials" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.get("/user", async (req, res) => {
    const { email } = req.query;

    if (!email) {
        return res.status(400).send({
            success: false,
            message: "Email ID is required"
        })
    }

    try {
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "Invalid credentials! User not found."
            })
        }

        return res.status(200).json({
            success: true,
            message: "User details found",
            data: user
        })

    } catch (err) {
        console.log("Error in /matched-profile: ", err);
        return res.status(500).send({
            success: false,
            message: "Internal Server Error.",
        });
    }
})

app.post("/update-profile", async (req, res) => {
    const { email, course, specialization, programmingLanguage } = req.body;

    try {
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "Invalid EmailID. No Data Found.",
            });
        }

        const updatedUser = await User.updateOne(
            { email: email },
            {
                $set: {
                    course: String(course).toLowerCase(),
                    specialization: String(specialization).toLowerCase(),
                    programmingLanguage:
                        String(programmingLanguage).toLowerCase(),
                },
            }
        );

        return res.status(200).json({
            success: true,
            email: email,
            message: "User profile updated successfully.",
        });
    } catch (err) {
        console.log("Error in /update-profile: ", err);
        return res.status(500).send({
            success: false,
            message: "Internal Server Error.",
        });
    }
});

app.post("/matched-profiles", async (req, res) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "Invalid EmailID. No Data Found.",
            });
        }

        if (!user.course || !user.specialization || !user.programmingLanguage) {
            return res.status(400).send({
                success: false,
                message: "Incomplete user profile.",
            });
        }

        const users = await User.find({
            $or: [
                { course: user?.course },
                { specialization: user?.specialization },
                { programmingLanguage: user?.programmingLanguage },
            ],
        });

        const matchedProfiles = users.filter((user) => user.email !== email);

        return res.status(200).json({
            success: true,
            user: user,
            data: matchedProfiles,
        });
    } catch (err) {
        console.log("Error in /matched-profile: ", err);
        return res.status(500).send({
            success: false,
            message: "Internal Server Error.",
        });
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
