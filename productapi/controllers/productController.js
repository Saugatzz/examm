import Product from "../model/product.js";
export const getProduct = async (req, res) => {
  try {
    const product = await Product.find();
    res.json(product);
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const createdProduct = await Product.create(req.body);
    res.json(createdProduct);
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    res.json(updatedProduct);
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.send("Product deleted successfully");
  } catch (error) {
    res.json({ error: error.message });
  }
};
