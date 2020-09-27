const mongoose = require('mongoose');
const Order = mongoose.model('Order');

// list
exports.listOrder = async (req, res) => {
  try {
    const data = await Order.find({}); //receive data
    res.status(200).send(data); //return and show data
  } catch (e) {
    res.status(500).send({message: 'Falha ao carregar as menções.'});
  }
};

// create
exports.createOrder = async (req, res) => {
  try {
    const order = new Order({
      client: req.body.client,
      address: req.body.address,
      contact: req.body.contact,
      order: req.body.order 
    });

    console.log(order)

    await order.save();

    res.status(201).send({message: 'Menção cadastrada com sucesso!'});
  } catch (e) {
    res.status(500).send({message: 'Falha ao cadastrar a menção.'});
  }
};
