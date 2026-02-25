import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Clear in correct order (because of foreign keys)
  await prisma.color.deleteMany();
  await prisma.variant.deleteMany();
  await prisma.car.deleteMany();

  // Create Cars
  await prisma.car.createMany({
    data: [
      {
        "model": "Tesla Model S",
        "description": "Premium electric sedan with extreme acceleration and long range.",
        "basePrice": 9200000,
        "range": 650,
        "topSpeed": 322,
        "modelImg": "https://images.unsplash.com/photo-1617788138017-80ad40651399",
        "moreInfo": {
          "battery": { "capacityKwh": 100, "fastCharging": "15 min (320 km)" },
          "performance": { "horsePower": 1020, "torqueNm": 1420, "zeroToHundred": 2.1, "driveType": "Dual Motor AWD" },
          "dimensions": { "lengthMm": 4970, "widthMm": 1964, "heightMm": 1445, "wheelbaseMm": 2960 },
          "features": ["Autopilot", "Premium Audio", "Panoramic Roof"],
          "warranty": { "vehicle": "4 Years / 80,000 km", "battery": "8 Years / 240,000 km" }
        },
        "category": "Sedan"
      },

      {
        "model": "Tesla Model 3",
        "description": "Compact luxury electric sedan with high efficiency.",
        "basePrice": 6000000,
        "range": 568,
        "topSpeed": 261,
        "modelImg": "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2",
        "moreInfo": {
          "battery": { "capacityKwh": 75, "fastCharging": "20 min (280 km)" },
          "performance": { "horsePower": 480, "torqueNm": 639, "zeroToHundred": 3.3, "driveType": "Dual Motor AWD" },
          "dimensions": { "lengthMm": 4694, "widthMm": 1849, "heightMm": 1443, "wheelbaseMm": 2875 },
          "features": ["Glass Roof", "Autopilot", "15-inch Touchscreen"],
          "warranty": { "vehicle": "4 Years / 80,000 km", "battery": "8 Years / 192,000 km" }
        },
        "category": "Sedan"
      },

      {
        "model": "Tesla Model X",
        "description": "Luxury electric SUV with falcon-wing doors.",
        "basePrice": 11000000,
        "range": 560,
        "topSpeed": 262,
        "modelImg": "https://images.unsplash.com/photo-1603386329225-868f9b1ee6d7",
        "moreInfo": {
          "battery": { "capacityKwh": 100, "fastCharging": "20 min (300 km)" },
          "performance": { "horsePower": 1020, "torqueNm": 1050, "zeroToHundred": 2.6, "driveType": "Tri Motor AWD" },
          "dimensions": { "lengthMm": 5057, "widthMm": 1999, "heightMm": 1684, "wheelbaseMm": 2965 },
          "features": ["Falcon Doors", "HEPA Filter", "Autopilot"],
          "warranty": { "vehicle": "4 Years / 80,000 km", "battery": "8 Years / 240,000 km" }
        },
        "category": "SUV"
      },

      {
        "model": "BMW i4",
        "description": "Sporty electric sedan with German engineering.",
        "basePrice": 7200000,
        "range": 590,
        "topSpeed": 225,
        "modelImg": "https://images.unsplash.com/photo-1617654112368-307921291f42",
        "moreInfo": {
          "battery": { "capacityKwh": 83.9, "fastCharging": "31 min (80%)" },
          "performance": { "horsePower": 544, "torqueNm": 795, "zeroToHundred": 3.9, "driveType": "Dual Motor AWD" },
          "dimensions": { "lengthMm": 4783, "widthMm": 1852, "heightMm": 1448, "wheelbaseMm": 2856 },
          "features": ["Curved Display", "Adaptive Cruise", "Harman Kardon Audio"],
          "warranty": { "vehicle": "3 Years / Unlimited km", "battery": "8 Years / 160,000 km" }
        },
        "category": "Sedan"
      },

      {
        "model": "Hyundai Ioniq 5",
        "description": "Futuristic electric crossover with ultra-fast charging.",
        "basePrice": 4800000,
        "range": 631,
        "topSpeed": 185,
        "modelImg": "https://images.unsplash.com/photo-1631856955226-65f64fdf75f1",
        "moreInfo": {
          "battery": { "capacityKwh": 72.6, "fastCharging": "18 min (10-80%)" },
          "performance": { "horsePower": 305, "torqueNm": 605, "zeroToHundred": 5.2, "driveType": "AWD" },
          "dimensions": { "lengthMm": 4635, "widthMm": 1890, "heightMm": 1625, "wheelbaseMm": 3000 },
          "features": ["AR HUD", "Vehicle-to-Load", "Panoramic Roof"],
          "warranty": { "vehicle": "3 Years / Unlimited km", "battery": "8 Years / 160,000 km" }
        },
        "category": "SUV"
      },

      {
        "model": "Tata Nexon EV",
        "description": "Affordable electric SUV for Indian roads.",
        "basePrice": 1600000,
        "range": 465,
        "topSpeed": 150,
        "modelImg": "https://images.unsplash.com/photo-1580273916550-e323be2ae537",
        "moreInfo": {
          "battery": { "capacityKwh": 40.5, "fastCharging": "56 min (0-80%)" },
          "performance": { "horsePower": 143, "torqueNm": 215, "zeroToHundred": 9.2, "driveType": "FWD" },
          "dimensions": { "lengthMm": 3993, "widthMm": 1811, "heightMm": 1606, "wheelbaseMm": 2498 },
          "features": ["ZConnect App", "JBL Audio", "Sunroof"],
          "warranty": { "vehicle": "3 Years / 125,000 km", "battery": "8 Years / 160,000 km" }
        },
        "category": "EV"
      },

      {
        "model": "Mahindra XUV400 EV",
        "description": "Spacious electric SUV built for Indian families.",
        "basePrice": 1700000,
        "range": 456,
        "topSpeed": 150,
        "modelImg": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d",
        "moreInfo": {
          "battery": { "capacityKwh": 39.4, "fastCharging": "50 min (0-80%)" },
          "performance": { "horsePower": 150, "torqueNm": 310, "zeroToHundred": 8.3, "driveType": "FWD" },
          "dimensions": { "lengthMm": 4200, "widthMm": 1821, "heightMm": 1634, "wheelbaseMm": 2600 },
          "features": ["AdrenoX System", "Sunroof", "Connected Car Tech"],
          "warranty": { "vehicle": "3 Years / 100,000 km", "battery": "8 Years / 160,000 km" }
        },
        "category": "EV"
      },

      {
        "model": "Kia EV6",
        "description": "Performance-oriented electric crossover.",
        "basePrice": 6500000,
        "range": 528,
        "topSpeed": 192,
        "modelImg": "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6",
        "moreInfo": {
          "battery": { "capacityKwh": 77.4, "fastCharging": "18 min (10-80%)" },
          "performance": { "horsePower": 325, "torqueNm": 605, "zeroToHundred": 5.2, "driveType": "AWD" },
          "dimensions": { "lengthMm": 4680, "widthMm": 1880, "heightMm": 1550, "wheelbaseMm": 2900 },
          "features": ["Dual Screens", "Meridian Audio", "Smart Cruise"],
          "warranty": { "vehicle": "3 Years / Unlimited km", "battery": "8 Years / 160,000 km" }
        },
        "category": "EV"
      }

    ],
  });

  // Variants
  await prisma.variant.createMany({
    data: [
      { "name": "Long Range", "price": 9200000, "carId": 1 },
      { "name": "Plaid", "price": 11000000, "carId": 1 },

      { "name": "Standard Range", "price": 6000000, "carId": 2 },
      { "name": "Performance", "price": 6800000, "carId": 2 },

      { "name": "Luxury AWD", "price": 7500000, "carId": 3 },
      { "name": "M Sport", "price": 8200000, "carId": 3 },

      { "name": "Eco Plus", "price": 1600000, "carId": 4 },
      { "name": "Max Range", "price": 1850000, "carId": 4 },

      { "name": "GT Line", "price": 6500000, "carId": 5 },
      { "name": "AWD Performance", "price": 7200000, "carId": 5 }
    ],
  });

  // Colors (Real 16:9 images)
  await prisma.color.createMany({
    data: [
      {
        "name": "Pearl White",
        "imageUrl": "https://images.unsplash.com/photo-1617788138017-80ad40651399",
        "carId": 1
      },
      {
        "name": "Solid Black",
        "imageUrl": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d",
        "carId": 1
      },
      {
        "name": "Midnight Silver",
        "imageUrl": "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2",
        "carId": 2
      },
      {
        "name": "Deep Blue Metallic",
        "imageUrl": "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6",
        "carId": 2
      },
      {
        "name": "Crimson Red",
        "imageUrl": "https://images.unsplash.com/photo-1560958089-b8a1929cea89",
        "carId": 3
      },
      {
        "name": "Arctic White",
        "imageUrl": "https://images.unsplash.com/photo-1631856955226-65f64fdf75f1",
        "carId": 3
      },
      {
        "name": "Carbon Black",
        "imageUrl": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d",
        "carId": 4
      },
      {
        "name": "Electric Blue",
        "imageUrl": "https://images.unsplash.com/photo-1580273916550-e323be2ae537",
        "carId": 4
      },
      {
        "name": "Glacier White",
        "imageUrl": "https://images.unsplash.com/photo-1617654112368-307921291f42",
        "carId": 5
      },
      {
        "name": "Matte Grey",
        "imageUrl": "https://images.unsplash.com/photo-1603386329225-868f9b1ee6d7",
        "carId": 5
      }
    ],
  });

  console.log("✅ Seeding completed!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });