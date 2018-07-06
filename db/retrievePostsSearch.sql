SELECT title, content, username FROM posts
JOIN users
    ON (posts.author_id = users.id )
WHERE title = $1;