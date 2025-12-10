import express from "express"
import Product from "../models/Product.js";

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const [products, total] = await Promise.all([
            Product.find().skip(skip).limit(limit),
            Product.countDocuments()
        ])
        res.json({
            data: products,
            page,
            limit,
            total,
            totalPages: Math.ceil(total / limit),
            hasNextPage: page * limit < total,
            hasPrevPage: page > 1
        })
    } catch (err) {
        return res.status(500).json(err);
    }
})

router.get("/cursor", async (req, res) => {
  try {
    const limit = Number(req.query.limit) || 10;
    const cursor = req.query.cursor; // last item timestamp

    let query = {};
    if (cursor) {
      query = { createdAt: { $lt: cursor } };  
    }

    const products = await Product.find(query)
      .sort({ createdAt: -1 }) // newest first
      .limit(limit + 1);       // fetch extra to check availability

    let nextCursor = null;
    if (products.length > limit) {
      nextCursor = products[limit - 1].createdAt;
      products.pop(); // remove extra record
    }

    return res.json({
      data: products,
      nextCursor,
      hasMore: !!nextCursor,
    });

  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});


export default router;