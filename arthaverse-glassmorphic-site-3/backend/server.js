
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const PORT = 5001;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/arthaverse", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const FormSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Contact = mongoose.model("Contact", FormSchema);

app.post("/api/contact", async (req, res) => {
  try {
    const form = new Contact(req.body);
    await form.save();
    res.status(200).json({ message: "Submitted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error submitting form" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
