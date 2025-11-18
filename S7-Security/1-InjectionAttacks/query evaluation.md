SELECT id, username, is_admin, email FROM users WHERE username = '${username}' AND password = '${password}'

SELECT id, username, is_admin, email FROM users WHERE username = 'admin' AND password = 'admin123'

SELECT id, username, is_admin, email FROM users WHERE username = 'admin' OR ('1'='1' AND password = 'falsdflasjdfljasdf')

SELECT id, username, is_admin, email FROM users WHERE username = 'admin' OR (true AND false)

SELECT id, username, is_admin, email FROM users WHERE username = 'admin' OR false

SELECT id, username, is_admin, email FROM users WHERE username = 'admin' 


// Query 2: Query Stacking attack

INSERT INTO blog_posts (id, title, content) VALUES (123, 'Blog Post for MongoDB 2', 'test'); 
DROP TABLE users; 

INSERT INTO blog_posts (id, title, content) VALUES (124, 'Blog Post for MongoDB 3', 'test'); 
DROP TABLE users; 


--');


Query 3: Data Exfiltrateion / Union Based Injection attack

SELECT username, email  FROM users 
    WHERE username = 'admin' 
UNION 
SELECT credit_card, api_key FROM users 
    WHERE '1'='1'



Parametrized Query

query = `SELECT id, username, is_admin, email, password
      FROM users 
      WHERE username = ?`


db.get(query, [username], async (err, user) => {
