const TextService = require('../services/textService');

const createPost = (req, res) => {
  const { title, content, status, author } = req.body
  const newText = TextService.createText({ title, content, status, author})
  res.status(201).json({ message: `Texto ${newText.title} criado com sucesso` })
}

const listPosts = (req, res) => {
  const texts = TextService.getAllTexts()
  res.json(texts)
}

const listPost = (req, res) => {
  const { id } = req.query

  const text = TextService.getTextById(id)

  if (!text) {
    res.status(404).json({ message: `Text com ID ${id} não encontrado`})
  }

  res.json(text)
};

const updatePost = (req, res) => {
  const { id } = req.query;
  const { title, content, status, author } = req.body;
  const text = TextService.getTextById(id);

  if (!text) {
    return res.status(404).json({ message: `Texto com ID ${id} não encontrado` });
  }

  const updatedText = TextService.updateText(id, { title, content, status, author });
  res.status(200).json({ message: `Texto com ID ${id} atualizado com sucesso`, updatedText });
};

const deletePost = (req, res) => {
  const { id } = req.query;
  const text = TextService.getTextById(id);

  if (!text) {
    return res.status(404).json({ message: `Texto com ID ${id} não encontrado` });
  }

  TextService.deleteText(id);
  res.status(200).json({ message: `Texto com ID ${id} deletado com sucesso` });
};

module.exports = {
  createPost,
  listPosts,
  listPost,
  updatePost,
  deletePost
}