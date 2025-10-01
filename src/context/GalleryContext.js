import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";
import { GalleryItems as initialItems } from "../data/GalleryItems";

const GalleryContext = createContext();

export const GalleryProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  // Load items from AsyncStorage on mount
  useEffect(() => {
    const loadItems = async () => {
      try {
        const storedItems = await AsyncStorage.getItem("@gallery_items");
        if (storedItems) {
          setItems(JSON.parse(storedItems));
        } else {
          setItems(initialItems); // default items
        }
      } catch (error) {
        console.log("Failed to load items from storage:", error);
        setItems(initialItems);
      }
    };
    loadItems();
  }, []);

  // Save items to AsyncStorage
  const saveItemsToStorage = async (newItems) => {
    try {
      await AsyncStorage.setItem("@gallery_items", JSON.stringify(newItems));
    } catch (error) {
      console.log("Failed to save items:", error);
    }
  };

  // Update caption
  const updateCaption = (id, newCaption) => {
    const newItems = items.map((item) =>
      item.id === id ? { ...item, name: newCaption } : item
    );
    setItems(newItems);
    saveItemsToStorage(newItems);
  };

  // Add new item
  const addItem = (item) => {
    const newItems = [...items, item];
    setItems(newItems);
    saveItemsToStorage(newItems);
  };

  return (
    <GalleryContext.Provider value={{ items, updateCaption, addItem }}>
      {children}
    </GalleryContext.Provider>
  );
};

// Custom hook
export const useGallery = () => useContext(GalleryContext);
