const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Database
let dbUser = [
    {
        username: 'reza',
        fullName: "Reza Arga",
        itemBuy: [],
    },
    {
        username: 'rizki',
        fullName: "Rizki Dwi Santoso",
        itemBuy: [],
    },
    {
        username: 'bima',
        fullName: "Bima Khansa",
        itemBuy: [],
    },
    {
        username: 'dio',
        fullName: "Dio Meiwandany",
        itemBuy: [],
    }
];

let dbStockObat = [
    ["PARACETAMOL", 50],
    ["IBUPROFEN", 30],
    ["OBH", 70],
    ["TOLAK ANGIN", 100],
    ["HANSAPLAST", 250],
];

app.use(bodyParser.json());

// Endpoint untuk menambahkan user baru
app.post('/user', (req, res) => {
    const { username, fullName } = req.body;
    if (!username || !fullName) {
        return res.status(400).json({ message: 'Username dan fullName harus diisi' });
    }

    const existingUser = dbUser.find(user => user.username === username);
    if (existingUser) {
        return res.status(409).json({ message: 'Username tersebut sudah tersedia, mohon diganti' });
    }

    dbUser.push({
        username,
        fullName,
        itemBuy: []
    });

    res.status(201).json({ message: `User ${username} dengan Nama Lengkap ${fullName} sudah berhasil dibuat. Selamat belanja!` });
});

// Endpoint untuk membaca stok obat
app.get('/stock', (req, res) => {
    res.json(dbStockObat.reduce((acc, [item, stock]) => {
        acc[item] = stock;
        return acc;
    }, {}));
});

// Endpoint untuk membaca semua pengguna
app.get('/users', (req, res) => {
    res.json(dbUser);
});

// Endpoint untuk menghapus riwayat pembelian dengan stok tertentu
app.delete('/purchase-history/:itemName', (req, res) => {
    const itemName = req.params.itemName;
    dbUser.forEach(user => {
        user.itemBuy = user.itemBuy.filter(([item]) => item !== itemName);
    });
    res.status(204).send();
});

// Menjalankan server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
