-- Drop existing tables if they exist (in correct order with CASCADE)
DROP TABLE IF EXISTS Color CASCADE;
DROP TABLE IF EXISTS Variant CASCADE;
DROP TABLE IF EXISTS Car CASCADE;

-- Create tables for Tesla project in Supabase

-- Create Car table
CREATE TABLE Car (
    id SERIAL PRIMARY KEY,
    model VARCHAR NOT NULL,
    description TEXT NOT NULL,
    "basePrice" DECIMAL NOT NULL,
    "range" INTEGER NOT NULL,
    "topSpeed" INTEGER NOT NULL,
    "modelImg" VARCHAR NOT NULL,
    "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    "moreInfo" JSONB,
    "category" VARCHAR
);

-- Create Variant table
CREATE TABLE Variant (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    price DECIMAL NOT NULL,
    "carId" INTEGER NOT NULL,
    FOREIGN KEY ("carId") REFERENCES Car(id) ON DELETE CASCADE
);

-- Create Color table
CREATE TABLE Color (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    "imageUrl" VARCHAR NOT NULL,
    "carId" INTEGER NOT NULL,
    FOREIGN KEY ("carId") REFERENCES Car(id) ON DELETE CASCADE
);

-- Create indexes for better performance
CREATE INDEX idx_Variant_carId ON Variant("carId");
CREATE INDEX idx_Color_carId ON Color("carId");
CREATE INDEX idx_Car_model ON Car(model);
CREATE INDEX idx_Car_category ON Car("category");

-- Insert seed data
-- Cars
INSERT INTO Car (model, description, "basePrice", "range", "topSpeed", "modelImg", "moreInfo", "category") VALUES
('Tesla Model S', 'Premium electric sedan with extreme acceleration and long range.', 9200000, 650, 322, 'https://images.unsplash.com/photo-1617788138017-80ad40651399', '{"battery": {"capacityKwh": 100, "fastCharging": "15 min (320 km)"}, "performance": {"horsePower": 1020, "torqueNm": 1420, "zeroToHundred": 2.1, "driveType": "Dual Motor AWD"}, "dimensions": {"lengthMm": 4970, "widthMm": 1964, "heightMm": 1445, "wheelbaseMm": 2960}, "features": ["Autopilot", "Premium Audio", "Panoramic Roof"], "warranty": {"vehicle": "4 Years / 80,000 km", "battery": "8 Years / 240,000 km"}}', 'Sedan'),
('Tesla Model 3', 'Compact luxury electric sedan with high efficiency.', 6000000, 568, 261, 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2', '{"battery": {"capacityKwh": 75, "fastCharging": "20 min (280 km)"}, "performance": {"horsePower": 480, "torqueNm": 639, "zeroToHundred": 3.3, "driveType": "Dual Motor AWD"}, "dimensions": {"lengthMm": 4694, "widthMm": 1849, "heightMm": 1443, "wheelbaseMm": 2875}, "features": ["Glass Roof", "Autopilot", "15-inch Touchscreen"], "warranty": {"vehicle": "4 Years / 80,000 km", "battery": "8 Years / 192,000 km"}}', 'Sedan'),
('Tesla Model X', 'Luxury electric SUV with falcon-wing doors.', 11000000, 560, 262, 'https://images.unsplash.com/photo-1603386329225-868f9b1ee6d7', '{"battery": {"capacityKwh": 100, "fastCharging": "20 min (300 km)"}, "performance": {"horsePower": 1020, "torqueNm": 1050, "zeroToHundred": 2.6, "driveType": "Tri Motor AWD"}, "dimensions": {"lengthMm": 5057, "widthMm": 1999, "heightMm": 1684, "wheelbaseMm": 2965}, "features": ["Falcon Doors", "HEPA Filter", "Autopilot"], "warranty": {"vehicle": "4 Years / 80,000 km", "battery": "8 Years / 240,000 km"}}', 'SUV'),
('BMW i4', 'Sporty electric sedan with German engineering.', 7200000, 590, 225, 'https://images.unsplash.com/photo-1617654112368-307921291f42', '{"battery": {"capacityKwh": 83.9, "fastCharging": "31 min (80%)"}, "performance": {"horsePower": 544, "torqueNm": 795, "zeroToHundred": 3.9, "driveType": "Dual Motor AWD"}, "dimensions": {"lengthMm": 4783, "widthMm": 1852, "heightMm": 1448, "wheelbaseMm": 2856}, "features": ["Curved Display", "Adaptive Cruise", "Harman Kardon Audio"], "warranty": {"vehicle": "3 Years / Unlimited km", "battery": "8 Years / 160,000 km"}}', 'Sedan'),
('Hyundai Ioniq 5', 'Futuristic electric crossover with ultra-fast charging.', 4800000, 631, 185, 'https://images.unsplash.com/photo-1631856955226-65f64fdf75f1', '{"battery": {"capacityKwh": 72.6, "fastCharging": "18 min (10-80%)"}, "performance": {"horsePower": 305, "torqueNm": 605, "zeroToHundred": 5.2, "driveType": "AWD"}, "dimensions": {"lengthMm": 4635, "widthMm": 1890, "heightMm": 1625, "wheelbaseMm": 3000}, "features": ["AR HUD", "Vehicle-to-Load", "Panoramic Roof"], "warranty": {"vehicle": "3 Years / Unlimited km", "battery": "8 Years / 160,000 km"}}', 'SUV'),
('Tata Nexon EV', 'Affordable electric SUV for Indian roads.', 1600000, 465, 150, 'https://images.unsplash.com/photo-1580273916550-e323be2ae537', '{"battery": {"capacityKwh": 40.5, "fastCharging": "56 min (0-80%)"}, "performance": {"horsePower": 143, "torqueNm": 215, "zeroToHundred": 9.2, "driveType": "FWD"}, "dimensions": {"lengthMm": 3993, "widthMm": 1811, "heightMm": 1606, "wheelbaseMm": 2498}, "features": ["ZConnect App", "JBL Audio", "Sunroof"], "warranty": {"vehicle": "3 Years / 125,000 km", "battery": "8 Years / 160,000 km"}}', 'EV'),
('Mahindra XUV400 EV', 'Spacious electric SUV built for Indian families.', 1700000, 456, 150, 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d', '{"battery": {"capacityKwh": 39.4, "fastCharging": "50 min (0-80%)"}, "performance": {"horsePower": 150, "torqueNm": 310, "zeroToHundred": 8.3, "driveType": "FWD"}, "dimensions": {"lengthMm": 4200, "widthMm": 1821, "heightMm": 1634, "wheelbaseMm": 2600}, "features": ["AdrenoX System", "Sunroof", "Connected Car Tech"], "warranty": {"vehicle": "3 Years / 100,000 km", "battery": "8 Years / 160,000 km"}}', 'EV'),
('Kia EV6', 'Performance-oriented electric crossover.', 6500000, 528, 192, 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6', '{"battery": {"capacityKwh": 77.4, "fastCharging": "18 min (10-80%)"}, "performance": {"horsePower": 325, "torqueNm": 605, "zeroToHundred": 5.2, "driveType": "AWD"}, "dimensions": {"lengthMm": 4680, "widthMm": 1880, "heightMm": 1550, "wheelbaseMm": 2900}, "features": ["Dual Screens", "Meridian Audio", "Smart Cruise"], "warranty": {"vehicle": "3 Years / Unlimited km", "battery": "8 Years / 160,000 km"}}', 'EV');

-- Variants
INSERT INTO Variant (name, price, "carId") VALUES
('Long Range', 9200000, 1),
('Plaid', 11000000, 1),
('Standard Range', 6000000, 2),
('Performance', 6800000, 2),
('Luxury AWD', 7500000, 3),
('M Sport', 8200000, 3),
('Eco Plus', 1600000, 4),
('Max Range', 1850000, 4),
('GT Line', 6500000, 5),
('AWD Performance', 7200000, 5);

-- Colors
INSERT INTO Color (name, "imageUrl", "carId") VALUES
('Pearl White', 'https://images.unsplash.com/photo-1617788138017-80ad40651399', 1),
('Solid Black', 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d', 1),
('Midnight Silver', 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2', 2),
('Deep Blue Metallic', 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6', 2),
('Crimson Red', 'https://images.unsplash.com/photo-1560958089-b8a1929cea89', 3),
('Arctic White', 'https://images.unsplash.com/photo-1631856955226-65f64fdf75f1', 3),
('Carbon Black', 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d', 4),
('Electric Blue', 'https://images.unsplash.com/photo-1580273916550-e323be2ae537', 4),
('Glacier White', 'https://images.unsplash.com/photo-1617654112368-307921291f42', 5),
('Matte Grey', 'https://images.unsplash.com/photo-1603386329225-868f9b1ee6d7', 5);
