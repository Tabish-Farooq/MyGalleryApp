import { createContext, useContext, useState } from "react";
import { GalleryItems as initialItems } from "../data/GalleryItems";

const GalleryContext = createContext();

export const GalleryProvider = ({ children }) => {
  const [items, setItems] = useState(initialItems);

  const updateCaption = (id, newCaption) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, name: newCaption } : item
      )
    );
  };

  const addItem = (item) => {
    setItems((prev) => [...prev, item]);
  };

  return (
    <GalleryContext.Provider value={{ items, updateCaption, addItem }}>
      {children}
    </GalleryContext.Provider>
  );
};

export const useGallery = () => useContext(GalleryContext);
