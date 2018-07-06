SELECT * FROM posts
WHERE id != $1 AND title = $2;