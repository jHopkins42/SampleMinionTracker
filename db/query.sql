SELECT employees.company_db AS employees, reviews.review
FROM roles
LEFT JOIN movies
ON reviews.movie_id = movies.id
ORDER BY movies.movie_name;
