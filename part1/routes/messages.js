var express = require('express');
var router = express.Router();
var db = require('../db');

var CURRENT_BUYER_ID = 11;
var CURRENT_SELLER_ID = 12;

router.get('/items', async function(req, res, next){
    const [rows] = await db.query(`
        SELECT bl.BookID, bi.Title, u.Name AS SellerName, bl.SellerID
        FROM BookListings bl
        JOIN BookInfo bi ON bl.BookInfoID = bi.BookInfoID
        JOIN Users u ON bl.SellerID = u.UserID
        `);
    res.json(rows);
})

router.post('/messages', async function(req, res, next){
    const { bookID, message } = req.body;
    await db.query(`
        INSERT INTO Messages (BuyerID, SellerID, BookID, TextMessage, SentAt)
        VALUES (?, ?, ?, ?, NOW())
    `, [CURRENT_BUYER_ID, CURRENT_SELLER_ID, bookID, message]);
    res.status(201).json({ message: 'Message sent successfully!' });
});

module.exports = router;