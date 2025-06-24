const express = require('express');
const cors = require('cors');

const connection = require('./db.js');

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

/** ==================== 🪑 MESAS ==================== **/
app.get('/api/mesas', (req, res) => {
  connection.query('SELECT * FROM mesas', (err, results) => {
    if (err) return res.status(500).json({ erro: err });
    res.json(results);
  });
});

app.post('/api/mesas', (req, res) => {
  const { Quant_Pessoas, Ocupada } = req.body;
  const sql = 'INSERT INTO mesas (Quant_Pessoas, Ocupada) VALUES (?, ?)';
  connection.query(sql, [Quant_Pessoas, Ocupada], (err, result) => {
    if (err) return res.status(500).json({ erro: err });
    res.status(201).json({ id: result.insertId });
  });
});

app.put('/api/mesas/:id', (req, res) => {
  const { id } = req.params;
  const { Quant_Pessoas, Ocupada } = req.body;
  const sql = 'UPDATE mesas SET Quant_Pessoas = ?, Ocupada = ? WHERE ID_mesa = ?';
  connection.query(sql, [Quant_Pessoas, Ocupada, id], (err) => {
    if (err) return res.status(500).json({ erro: err });
    res.status(200).json({ message: 'Mesa atualizada com sucesso' });
  });
});

app.delete('/api/mesas/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM mesas WHERE ID_mesa = ?';
  connection.query(sql, [id], (err) => {
    if (err) return res.status(500).json({ erro: err });
    res.status(200).json({ message: 'Mesa excluída com sucesso' });
  });
});

/** ==================== 📅 RESERVAS ==================== **/
app.get('/api/reservas', (req, res) => {
  connection.query('SELECT * FROM reservas', (err, results) => {
    if (err) return res.status(500).json({ erro: err });
    res.json(results);
  });
});

app.post('/api/reservas', (req, res) => {
  const {
    ID_mesa, Nome_cliente, Email_cliente, Contacto_cliente,
    Data_reserva, Data_criacao, Num_pessoas, ID_estado_reserva, observacoes
  } = req.body;
  const sql = `INSERT INTO reservas 
    (ID_mesa, Nome_cliente, Email_cliente, Contacto_cliente, Data_reserva, Data_criacao, Num_pessoas, ID_estado_reserva, observacoes)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  connection.query(sql, [ID_mesa, Nome_cliente, Email_cliente, Contacto_cliente, Data_reserva, Data_criacao, Num_pessoas, ID_estado_reserva, observacoes], (err, result) => {
    if (err) return res.status(500).json({ erro: err });
    res.status(201).json({ id: result.insertId });
  });
});

app.put('/api/reservas/:id', (req, res) => {
  const { id } = req.params;
  const {
    ID_mesa, Nome_cliente, Email_cliente, Contacto_cliente,
    Data_reserva, Data_criacao, Num_pessoas, ID_estado_reserva, observacoes
  } = req.body;
  const sql = `UPDATE reservas SET ID_mesa = ?, Nome_cliente = ?, Email_cliente = ?, Contacto_cliente = ?, Data_reserva = ?, Data_criacao = ?, Num_pessoas = ?, ID_estado_reserva = ?, observacoes = ? WHERE ID_reservas = ?`;
  connection.query(sql, [ID_mesa, Nome_cliente, Email_cliente, Contacto_cliente, Data_reserva, Data_criacao, Num_pessoas, ID_estado_reserva, observacoes, id], (err) => {
    if (err) return res.status(500).json({ erro: err });
    res.status(200).json({ message: 'Reserva atualizada com sucesso' });
  });
});

app.delete('/api/reservas/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM reservas WHERE ID_reservas = ?';
  connection.query(sql, [id], (err) => {
    if (err) return res.status(500).json({ erro: err });
    res.status(200).json({ message: 'Reserva excluída com sucesso' });
  });
});

/** ==================== 🍽️ EMENTA ITEMS ==================== **/
app.get('/api/ementa_items', (req, res) => {
  connection.query('SELECT * FROM ementa_items', (err, results) => {
    if (err) return res.status(500).json({ erro: err });
    res.json(results);
  });
});

app.post('/api/ementa_items', (req, res) => {
  const { Nome_Items, Descricao, ID_Categoria, preco, Imagem, tempo_estimado, ingredientes } = req.body;
  const sql = `INSERT INTO ementa_items 
    (Nome_Items, Descricao, ID_Categoria, preco, Imagem, tempo_estimado, ingredientes)
    VALUES (?, ?, ?, ?, ?, ?, ?)`;
  connection.query(sql, [Nome_Items, Descricao, ID_Categoria, preco, Imagem, tempo_estimado, ingredientes], (err, result) => {
    if (err) return res.status(500).json({ erro: err });
    res.status(201).json({ id: result.insertId });
  });
});

app.put('/api/ementa_items/:id', (req, res) => {
  const { id } = req.params;
  const { Nome_Items, Descricao, ID_Categoria, preco, Imagem, tempo_estimado, ingredientes } = req.body;
  const sql = `UPDATE ementa_items SET Nome_Items = ?, Descricao = ?, ID_Categoria = ?, preco = ?, Imagem = ?, tempo_estimado = ?, ingredientes = ? WHERE ID_Items = ?`;
  connection.query(sql, [Nome_Items, Descricao, ID_Categoria, preco, Imagem, tempo_estimado, ingredientes, id], (err) => {
    if (err) return res.status(500).json({ erro: err });
    res.status(200).json({ message: 'Item atualizado com sucesso' });
  });
});

app.delete('/api/ementa_items/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM ementa_items WHERE ID_Items = ?';
  connection.query(sql, [id], (err) => {
    if (err) return res.status(500).json({ erro: err });
    res.status(200).json({ message: 'Item excluído com sucesso' });
  });
});

/** ==================== 🧾 PEDIDOS ==================== **/
app.get('/api/pedidos', (req, res) => {
  connection.query('SELECT * FROM pedidos', (err, results) => {
    if (err) return res.status(500).json({ erro: err });
    res.json(results);
  });
});

app.post('/api/pedidos', (req, res) => {
  const { ID_Item, Quantidade, preco } = req.body;
  const sql = 'INSERT INTO pedidos (ID_Item, Quantidade, preco) VALUES (?, ?, ?)';
  connection.query(sql, [ID_Item, Quantidade, preco], (err, result) => {
    if (err) return res.status(500).json({ erro: err });
    res.status(201).json({ id: result.insertId });
  });
});

app.put('/api/pedidos/:id', (req, res) => {
  const { id } = req.params;
  const { ID_Item, Quantidade, preco } = req.body;
  const sql = 'UPDATE pedidos SET ID_Item = ?, Quantidade = ?, preco = ? WHERE ID_Pedido = ?';
  connection.query(sql, [ID_Item, Quantidade, preco, id], (err) => {
    if (err) return res.status(500).json({ erro: err });
    res.status(200).json({ message: 'Pedido atualizado com sucesso' });
  });
});

app.delete('/api/pedidos/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM pedidos WHERE ID_Pedido = ?';
  connection.query(sql, [id], (err) => {
    if (err) return res.status(500).json({ erro: err });
    res.status(200).json({ message: 'Pedido excluído com sucesso' });
  });
});

/** ==================== 🚚 ENTREGAS ==================== **/
app.get('/api/entregas', (req, res) => {
  connection.query('SELECT * FROM entregas', (err, results) => {
    if (err) return res.status(500).json({ erro: err });
    res.json(results);
  });
});

app.post('/api/entregas', (req, res) => {
  const { Nome_cliente, Email_Cliente, Contacto_cliente, Endereco, data_pedido, observacoes, valor_total, ID_Estado_Pedido } = req.body;
  const sql = `INSERT INTO entregas 
    (Nome_cliente, Email_Cliente, Contacto_cliente, Endereco, data_pedido, observacoes, valor_total, ID_Estado_Pedido)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
  connection.query(sql, [Nome_cliente, Email_Cliente, Contacto_cliente, Endereco, data_pedido, observacoes, valor_total, ID_Estado_Pedido], (err, result) => {
    if (err) return res.status(500).json({ erro: err });
    res.status(201).json({ id: result.insertId });
  });
});

app.put('/api/entregas/:id', (req, res) => {
  const { id } = req.params;
  const { Nome_cliente, Email_Cliente, Contacto_cliente, Endereco, data_pedido, observacoes, valor_total, ID_Estado_Pedido } = req.body;
  const sql = `UPDATE entregas SET Nome_cliente = ?, Email_Cliente = ?, Contacto_cliente = ?, Endereco = ?, data_pedido = ?, observacoes = ?, valor_total = ?, ID_Estado_Pedido = ? WHERE ID_Entrega = ?`;
  connection.query(sql, [Nome_cliente, Email_Cliente, Contacto_cliente, Endereco, data_pedido, observacoes, valor_total, ID_Estado_Pedido, id], (err) => {
    if (err) return res.status(500).json({ erro: err });
    res.status(200).json({ message: 'Entrega atualizada com sucesso' });
  });
});

app.delete('/api/entregas/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM entregas WHERE ID_Entrega = ?';
  connection.query(sql, [id], (err) => {
    if (err) return res.status(500).json({ erro: err });
    res.status(200).json({ message: 'Entrega excluída com sucesso' });
  });
});
/** ==================== 💸 TRANSACOES ==================== **/
app.get('/api/transacoes', (req, res) => {
  connection.query('SELECT * FROM transacoes', (err, results) => {
    if (err) return res.status(500).json({ erro: err });
    res.json(results);
  });
});

app.post('/api/transacoes', (req, res) => {
  const { ID_Entrega, valor, data_transacao, ID_Estado_Transacao, ID_Metodo_Pagamento } = req.body;
  const sql = `INSERT INTO transacoes 
    (ID_Entrega, valor, data_transacao, ID_Estado_Transacao, ID_Metodo_Pagamento)
    VALUES (?, ?, ?, ?, ?)`;
  connection.query(sql, [ID_Entrega, valor, data_transacao, ID_Estado_Transacao, ID_Metodo_Pagamento], (err, result) => {
    if (err) return res.status(500).json({ erro: err });
    res.status(201).json({ id: result.insertId });
  });
});

app.put('/api/transacoes/:id', (req, res) => {
  const { id } = req.params;
  const { ID_Entrega, valor, data_transacao, ID_Estado_Transacao, ID_Metodo_Pagamento } = req.body;
  const sql = `UPDATE transacoes SET ID_Entrega = ?, valor = ?, data_transacao = ?, ID_Estado_Transacao = ?, ID_Metodo_Pagamento = ? WHERE ID_Transacao = ?`;
  connection.query(sql, [ID_Entrega, valor, data_transacao, ID_Estado_Transacao, ID_Metodo_Pagamento, id], (err) => {
    if (err) return res.status(500).json({ erro: err });
    res.status(200).json({ message: 'Transação atualizada com sucesso' });
  });
});

app.delete('/api/transacoes/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM transacoes WHERE ID_Transacao = ?';
  connection.query(sql, [id], (err) => {
    if (err) return res.status(500).json({ erro: err });
    res.status(200).json({ message: 'Transação excluída com sucesso' });
  });
});

/** ==================== 👨‍🍳 EMPREGADOS ==================== **/
app.get('/api/empregados', (req, res) => {
  connection.query('SELECT * FROM empregados', (err, results) => {
    if (err) return res.status(500).json({ erro: err });
    res.json(results);
  });
});

app.post('/api/empregados', (req, res) => {
  const { nome, email, contacto, morada, ID_Cargo } = req.body;
  const sql = 'INSERT INTO empregados (nome, email, contacto, morada, ID_Cargo) VALUES (?, ?, ?, ?, ?)';
  connection.query(sql, [nome, email, contacto, morada, ID_Cargo], (err, result) => {
    if (err) return res.status(500).json({ erro: err });
    res.status(201).json({ id: result.insertId });
  });
});

app.put('/api/empregados/:id', (req, res) => {
  const { id } = req.params;
  const { nome, email, contacto, morada, ID_Cargo } = req.body;
  const sql = 'UPDATE empregados SET nome = ?, email = ?, contacto = ?, morada = ?, ID_Cargo = ? WHERE ID_empregado = ?';
  connection.query(sql, [nome, email, contacto, morada, ID_Cargo, id], (err) => {
    if (err) return res.status(500).json({ erro: err });
    res.status(200).json({ message: 'Empregado atualizado com sucesso' });
  });
});

app.delete('/api/empregados/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM empregados WHERE ID_empregado = ?';
  connection.query(sql, [id], (err) => {
    if (err) return res.status(500).json({ erro: err });
    res.status(200).json({ message: 'Empregado excluído com sucesso' });
  });
});

/** ==================== 🏪 FORNECEDORES ==================== **/
app.get('/api/fornecedores', (req, res) => {
  connection.query('SELECT * FROM fornecedores', (err, results) => {
    if (err) return res.status(500).json({ erro: err });
    res.json(results);
  });
});

app.post('/api/fornecedores', (req, res) => {
  const { nome, contacto, email, morada } = req.body;
  const sql = 'INSERT INTO fornecedores (nome, contacto, email, morada) VALUES (?, ?, ?, ?)';
  connection.query(sql, [nome, contacto, email, morada], (err, result) => {
    if (err) return res.status(500).json({ erro: err });
    res.status(201).json({ id: result.insertId });
  });
});

app.put('/api/fornecedores/:id', (req, res) => {
  const { id } = req.params;
  const { nome, contacto, email, morada } = req.body;
  const sql = 'UPDATE fornecedores SET nome = ?, contacto = ?, email = ?, morada = ? WHERE ID_Fornecedor = ?';
  connection.query(sql, [nome, contacto, email, morada, id], (err) => {
    if (err) return res.status(500).json({ erro: err });
    res.status(200).json({ message: 'Fornecedor atualizado com sucesso' });
  });
});

app.delete('/api/fornecedores/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM fornecedores WHERE ID_Fornecedor = ?';
  connection.query(sql, [id], (err) => {
    if (err) return res.status(500).json({ erro: err });
    res.status(200).json({ message: 'Fornecedor excluído com sucesso' });
  });
});

/** ==================== 🧾 TABELAS AUXILIARES ==================== **/

const tabelasAuxiliares = [
  { nome: 'estado_reserva', chave: 'ID_estado_reserva', campos: ['estado'] },
  { nome: 'estado_pedido', chave: 'ID_Estado_Pedido', campos: ['estado'] },
  { nome: 'estado_transacao', chave: 'ID_Estado_Transacao', campos: ['estado'] },
  { nome: 'metodo_pagamento', chave: 'ID_Metodo_Pagamento', campos: ['metodo'] },
  { nome: 'cargos', chave: 'ID_Cargo', campos: ['nome'] },
  { nome: 'categorias', chave: 'ID_Categoria', campos: ['nome'] },
];

tabelasAuxiliares.forEach(({ nome, chave, campos }) => {
  app.get(`/api/${nome}`, (req, res) => {
    connection.query(`SELECT * FROM pap_db_${nome}`, (err, results) => {
      if (err) return res.status(500).json({ erro: err });
      res.json(results);
    });
  });

  app.post(`/api/${nome}`, (req, res) => {
    const valores = campos.map(c => req.body[c]);
    const sql = `INSERT INTO pap_db_${nome} (${campos.join(', ')}) VALUES (${campos.map(() => '?').join(', ')})`;
    connection.query(sql, valores, (err, result) => {
      if (err) return res.status(500).json({ erro: err });
      res.status(201).json({ id: result.insertId });
    });
  });

  app.put(`/api/${nome}/:id`, (req, res) => {
    const valores = campos.map(c => req.body[c]);
    const sql = `UPDATE pap_db_${nome} SET ${campos.map(c => `${c} = ?`).join(', ')} WHERE ${chave} = ?`;
    connection.query(sql, [...valores, req.params.id], (err) => {
      if (err) return res.status(500).json({ erro: err });
      res.status(200).json({ message: `${nome} atualizado com sucesso` });
    });
  });

  app.delete(`/api/${nome}/:id`, (req, res) => {
    connection.query(`DELETE FROM pap_db_${nome} WHERE ${chave} = ?`, [req.params.id], (err) => {
      if (err) return res.status(500).json({ erro: err });
      res.status(200).json({ message: `${nome} excluído com sucesso` });
    });
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
