-- FILE: insert_sample_data.sql

-- Insert sample data into Users table
DO $$
BEGIN
    FOR i IN 1..100 LOOP
        INSERT INTO Users (name, email, password, phone, user_role)
        VALUES (
            'User ' || i,
            'user' || i || '@example.com',
            'password' || i,
            '123456789' || i,
            CASE WHEN i % 2 = 0 THEN 'player' ELSE 'vendor' END
        );
    END LOOP;
END $$;

-- Insert sample data into Fields table
DO $$
BEGIN
    FOR i IN 1..100 LOOP
        INSERT INTO Fields (vendor_id, field_name, address, capacity, price, status, maps_id)
        VALUES (
            (SELECT user_id FROM Users WHERE user_role = 'vendor' ORDER BY RANDOM() LIMIT 1),
            'Field ' || i,
            'Address ' || i,
            10 + (i % 10),
            50 + (i * 0.5),
            CASE WHEN i % 3 = 0 THEN 'maintenance' ELSE 'available' END,
            'MAP' || i
        );
    END LOOP;
END $$;

-- Insert sample data into Amenities table
DO $$
BEGIN
    FOR i IN 1..100 LOOP
        INSERT INTO Amenities (amenity_name)
        VALUES ('Amenity ' || i);
    END LOOP;
END $$;

-- Insert sample data into Field_Amenities table
DO $$
BEGIN
    FOR i IN 1..100 LOOP
        INSERT INTO Field_Amenities (field_id, amenity_id)
        VALUES (
            (SELECT field_id FROM Fields ORDER BY RANDOM() LIMIT 1),
            (SELECT amenity_id FROM Amenities ORDER BY RANDOM() LIMIT 1)
        );
    END LOOP;
END $$;

-- Insert sample data into Bookings table
DO $$
BEGIN
    FOR i IN 1..100 LOOP
        INSERT INTO Bookings (user_id, field_id, start_datetime, duration, lfg_id, current_players, status)
        VALUES (
            (SELECT user_id FROM Users WHERE user_role = 'player' ORDER BY RANDOM() LIMIT 1),
            (SELECT field_id FROM Fields ORDER BY RANDOM() LIMIT 1),
            NOW() + (i || ' hours')::INTERVAL,
            CASE WHEN i % 2 = 0 THEN 60 ELSE 120 END,
            NULL,
            1,
            CASE WHEN i % 3 = 0 THEN 'confirmed' ELSE 'pending' END
        );
    END LOOP;
END $$;

-- Insert sample data into LFG table
DO $$
BEGIN
    FOR i IN 1..100 LOOP
        INSERT INTO LFG (required_players, status)
        VALUES (
            9,
            CASE WHEN i % 3 = 0 THEN 'closed' ELSE 'open' END
        );
    END LOOP;
END $$;

-- Insert sample data into Reviews table
DO $$
BEGIN
    FOR i IN 1..100 LOOP
        INSERT INTO Reviews (rating, user_id, field_id, review_text)
        VALUES (
            (i % 6),
            (SELECT user_id FROM Users ORDER BY RANDOM() LIMIT 1),
            (SELECT field_id FROM Fields ORDER BY RANDOM() LIMIT 1),
            'Review text ' || i
        );
    END LOOP;
END $$;