const express = require("express");
const path = require("path");

const app = express();
const PORT = 3002;

// Servir o XML diretamente
app.get("/0_1.xml", (req, res) => {
  const filePath = path.join(__dirname, "0_1.xml"); // caminho absoluto
  res.sendFile(filePath, err => {
    if (err) {
      res.status(500).send("Erro ao carregar o XML: " + err.message);
    }
  });
});

// Servidor ouvindo em todas as interfaces da rede local
app.listen(PORT, "26.112.59.47", () => {
  console.log(`Servidor rodando em http://26.112.59.47:${PORT}`);
  console.log("Use o IP da sua máquina para acessar de outro PC na rede.");
});
