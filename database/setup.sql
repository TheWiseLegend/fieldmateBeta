-- Drop tables if they exist (in reverse order to handle dependencies)
DROP TABLE IF EXISTS Reviews;
DROP TABLE IF EXISTS Bookings;
DROP TABLE IF EXISTS LFG;
DROP TABLE IF EXISTS Field_Amenities;
DROP TABLE IF EXISTS Amenities;
DROP TABLE IF EXISTS Fields;
DROP TABLE IF EXISTS Users;

-- Create Users Table
CREATE TABLE Users (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    phone VARCHAR(15),
    user_role VARCHAR(10) DEFAULT 'player' CHECK (user_role IN ('player', 'vendor')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create Fields Table
CREATE TABLE Fields (
    field_id SERIAL PRIMARY KEY,
    vendor_id INT REFERENCES Users(user_id) ON DELETE SET NULL,
    field_name VARCHAR(50) NOT NULL,
    address VARCHAR(255) NOT NULL, -- FORMAT: "STREET, CITY, STATE"
    capacity INT DEFAULT 10,
    price DECIMAL(10, 2) CHECK (price >= 0) DEFAULT 0,  -- Price in MYR
    status VARCHAR(15) DEFAULT 'available' CHECK (status IN ('available', 'unavailable', 'maintenance')),
    maps_id CHAR(20),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create Amenities Table
CREATE TABLE Amenities (
    amenity_id SERIAL PRIMARY KEY,
    amenity_name VARCHAR(50) NOT NULL
);

-- Create Field_Amenities Table (Linking Fields and Amenities)
CREATE TABLE Field_Amenities (
    field_id INT REFERENCES Fields(field_id) ON DELETE CASCADE,
    amenity_id INT REFERENCES Amenities(amenity_id) ON DELETE CASCADE,
    PRIMARY KEY (field_id, amenity_id)
);

-- Create LFG (Looking For Group) Table
CREATE TABLE LFG (
    lfg_id SERIAL PRIMARY KEY,
    required_players INT DEFAULT 9,  -- Number of players user is looking for
    -- full if required_players reached 0
    status VARCHAR(10) DEFAULT 'open' CHECK (status IN ('open', 'closed')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create Bookings Table
CREATE TABLE Bookings (
    booking_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES Users(user_id),         -- Player who made the booking
    field_id INT REFERENCES Fields(field_id),      -- Field being booked
    start_datetime TIMESTAMP NOT NULL,             -- Start date and time of booking
    duration INT CHECK (duration IN (60, 120)),    -- Duration in minutes
    lfg_id INT REFERENCES LFG(lfg_id) ON DELETE SET NULL,
    current_players INT DEFAULT 1,                 -- Initially 1 player (the one who created the booking)
    status VARCHAR(10) DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create Reviews Table
CREATE TABLE Reviews (
    review_id SERIAL PRIMARY KEY,
    rating INT CHECK (rating BETWEEN 0 AND 5) DEFAULT 0,
    user_id INT REFERENCES Users(user_id) ON DELETE CASCADE,
    field_id INT REFERENCES Fields(field_id) ON DELETE CASCADE,
    review_text TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create Trigger Function to Auto-Update updated_at
CREATE OR REPLACE FUNCTION update_timestamp()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add Trigger for Users Table
CREATE TRIGGER set_timestamp_users
BEFORE UPDATE ON Users
FOR EACH ROW
EXECUTE FUNCTION update_timestamp();

-- Add Trigger for Fields Table
CREATE TRIGGER set_timestamp_fields
BEFORE UPDATE ON Fields
FOR EACH ROW
EXECUTE FUNCTION update_timestamp();

-- Add Trigger for Bookings Table
CREATE TRIGGER set_timestamp_bookings
BEFORE UPDATE ON Bookings
FOR EACH ROW
EXECUTE FUNCTION update_timestamp();

-- Add Trigger for Reviews Table
CREATE TRIGGER set_timestamp_reviews
BEFORE UPDATE ON Reviews
FOR EACH ROW
EXECUTE FUNCTION update_timestamp();
