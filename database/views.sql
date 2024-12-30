-- FILE: view_queries.sql

SELECT * FROM get_LFGs_Near_You('Address 1');

-- Function to see all LFGs connected to bookings with fields at the same address as the given one
DROP FUNCTION get_LFGs_Near_You;
CREATE OR REPLACE FUNCTION get_LFGs_Near_You(given_address VARCHAR)
RETURNS TABLE (
    lfg_id INT,
    required_players INT,
    status VARCHAR(10),
	price DECIMAL(10, 2),
	start_datetime TIMESTAMP,
	duration INT,
	name VARCHAR(50)
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        l.lfg_id,
        l.required_players,
        l.status,
		f.price,
		b.start_datetime,
		b.duration,
		u.name
    FROM 
        Bookings b
    JOIN 
        Fields f ON b.field_id = f.field_id
    JOIN 
        LFG l ON b.lfg_id = l.lfg_id
    JOIN 
        Users u ON b.user_id = u.user_id
    WHERE 
        f.address = given_address
        AND l.status = 'open'
        AND l.required_players > 0;
END;
$$ LANGUAGE plpgsql;

-- -- View to see all LFGs connected to bookings with fields at the same address as the given one
-- CREATE OR REPLACE VIEW LFGs_Near_You AS
-- SELECT 
--     l.lfg_id,
--     l.required_players,
--     l.status,
--     l.created_at,
--     l.updated_at
-- FROM 
--     Bookings b
-- JOIN 
--     Fields f ON b.field_id = f.field_id
-- JOIN 
--     LFG l ON b.lfg_id = l.lfg_id
-- WHERE 
--     f.address = $1
--     AND l.status = 'open'
--     AND l.required_players > 0;

-- View to show all fields limiting the columns to: name, address, price, and rating
CREATE OR REPLACE VIEW Fields_Limited_Info AS
SELECT 
    f.field_name AS name,
    f.address,
    f.price,
    COALESCE(AVG(r.rating), 0) AS rating
FROM 
    Fields f
LEFT JOIN 
    Reviews r ON f.field_id = r.field_id
GROUP BY 
    f.field_id;