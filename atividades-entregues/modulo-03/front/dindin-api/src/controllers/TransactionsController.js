const api = require('../services/api');

class TransactionController {
  async listAll(req, res) {
    try {
      const response = await api.get('/transactions');

      return res.status(200).json(response.data);

    } catch (error) {
      return res.status(400).json("Falha ao listar as transações");
    }
  }

  async create(req, res) {
    try {
      const { body } = req;

      const response = await api.post('/transactions', {
        ...body
      });

      return res.status(200).json(response.data);
    } catch (error) {
      return res.status(400).json("Falha ao criar uma transação");
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      const response = await api.delete(`/transactions/${id}`);

      return res.status(200).json(response.data);
    } catch (error) {
      return res.status(400).json("Falha ao deletar a transação");
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { body } = req;

      const response = await api.put(`/transactions/${id}`, {
        ...body
      });

      return res.status(200).json(response.data);
    } catch (error) {
      return res.status(400).json("Falha ao atualizar a transação");
    }
  }

  async updateOnePropertie(req, res) {
    try {
      const { id } = req.params;
      const { body } = req;

      const response = await api.patch(`/transactions/${id}`, {
        ...body
      });

      return res.status(200).json(response.data);
    } catch (error) {
      return res.status(400).json("Falha ao atualizar a transação");
    }
  }

  async detailOne(req, res) {
    try {
      const { id } = req.params;

      const response = await api.get(`/transactions/${id}`);

      return res.status(200).json(response.data);
    } catch (error) {
      return res.status(400).json("Falha ao detalhar a transação");
    }
  }
}

module.exports = new TransactionController();