import React, { useState, useEffect } from "react";

interface InventoryItem {
  id: number;
  name: string;
  imageUrl: string;
  expirationDate: string;
}

const ExpirationList: React.FC = () => {
  const [expiringItems, setExpiringItems] = useState<InventoryItem[]>([]);

  useEffect(() => {
    // Fetch expiring items from the backend
    // This is a placeholder and should be replaced with actual API call
    const fetchExpiringItems = async () => {
      // const response = await fetch('/api/inventory/expiring');
      // const data = await response.json();
      // setExpiringItems(data);

      // Placeholder data
      setExpiringItems([
        {
          id: 1,
          name: "Milk",
          imageUrl:
            "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          expirationDate: "2023-03-20",
        },
        {
          id: 2,
          name: "Bread",
          imageUrl:
            "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          expirationDate: "2023-03-22",
        },
        // Add more placeholder items as needed
      ]);
    };

    fetchExpiringItems();
  }, []);

  const sortedItems = [...expiringItems].sort(
    (a, b) =>
      new Date(a.expirationDate).getTime() -
      new Date(b.expirationDate).getTime()
  );

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-primary-600">
        Expiration List
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedItems.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-lg shadow-soft hover-lift"
          >
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-primary-600">
              {item.name}
            </h3>
            <p className="text-red-500 font-semibold">
              Expires: {item.expirationDate}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpirationList;
