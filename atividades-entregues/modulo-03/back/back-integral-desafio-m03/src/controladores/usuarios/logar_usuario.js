const conexao = require('../../conexao');
const { getUsuarioByEmail } = require('../../ferramentas');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const tokenHash = require('../../token_hash');

const logarUsuario = async (req, res) => {
    const { email, senha } = req.body;

    if (!email || !senha)
        return res.status(400).json({ mensagem: "E-mail e senha devem ser informados." });

    try {
        const { userEncontrado, usuario } = await getUsuarioByEmail(email);

        if (!userEncontrado)
            return res.status(400).json({ mensagem: "E-mail e/ou senha inválidos." });

        const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

        if (!senhaCorreta) {
            return res.status(400).json({ mensagem: "E-mail e/ou senha inválidos." });
        }

        const token = jwt.sign({ id: usuario.id }, tokenHash, { expiresIn: '8h' });

        return res.status(200).json({ token });
    }
    catch (error) {
        return res.status(500).json({ mensagem: "Ocorreu um erro inesperado. - " + error.message });
    }
}

module.exports = logarUsuario;