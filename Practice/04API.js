const express = require("express");

const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// In-memory storage for shipments
const shipments = {};

// POST: Create a new shipment
app.post("/newshipment", (req, res) => {
  try {
    const { shipment_id, sender_name, recipient_name, shipment_status } = req.body;

    // Basic validation
    if (!shipment_id || !sender_name || !recipient_name || !shipment_status) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Save to in-memory object
    shipments[shipment_id] = {
      sender_name,
      recipient_name,
      shipment_status,
    };

    return res.status(200).json({
      shipment_id,
      sender_name,
      recipient_name,
      shipment_status,
      message: "Shipment created successfully",
    });
  } catch (err) {
    res.status(400).json({ message: "Data send failed" });
  }
});

// GET: Retrieve shipment status by ID
app.get("/shipment/:id", (req, res) => {
  try {
    const shipment_id = req.params.id;
    const shipment = shipments[shipment_id];

    if (!shipment) {
      return res.status(404).json({ message: "Shipment not found" });
    }

    return res.status(200).json({
      shipment_id,
      shipment_status: shipment.shipment_status,
      message: "Shipment retrieved successfully",
    });
  } catch (err) {
    return res.status(400).json({ message: "Something went wrong" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Shipment Tracking API is running at http://localhost:${port}`);
});
