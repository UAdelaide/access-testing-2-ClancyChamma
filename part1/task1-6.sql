SELECT bi.Title, bi.Author, COUNT(p.PurchaseID) AS NumTimesSold FROM BookInfo bi JOIN Bo
okListings bl ON bi.BookInfoID = bl.BookInfoID JOIN Purchases p ON bl.BookID = p.BookID GROUP B
Y bi.BookInfoID, bi.Title, bi.Author ORDER BY NumTimesSold DESC LIMIT 10;