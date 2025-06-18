SELECT b.Title, b.Author, p.PurchaseDate FROM Purchases p JOIN B
ookListings bl ON p.BookID = bl.BookID JOIN BookInfo b ON bl.BookInfoID
 = b.BookInfoID WHERE p.BuyerID = 1 AND p.PurchaseDate >= CURDATE() - I
NTERVAL 30 DAY ORDER BY p.purchaseDate DESC;