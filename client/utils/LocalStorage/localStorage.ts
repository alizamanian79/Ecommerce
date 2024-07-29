// utils/localStorageUtils.ts

type StoredObject = {
  id: string; // Unique identifier for each object
  [key: string]: any; // Other properties of the object
};

// Function to get array from localStorage by title
const getArrayFromLocalStorage = (title: string): StoredObject[] => {
  const storedData = localStorage.getItem(title);
  return storedData ? JSON.parse(storedData) : [];
};

// Function to save array to localStorage by title
const saveArrayToLocalStorage = (title: string, data: StoredObject[]) => {
  localStorage.setItem(title, JSON.stringify(data));
};

// Initialize array if it does not exist
const initializeArray = (title: string) => {
  if (!localStorage.getItem(title)) {
    saveArrayToLocalStorage(title, []);
  }
};

// Add multiple objects to the array
export const addObjects = (title: string, newObjects: StoredObject[]) => {
  initializeArray(title);
  const data = getArrayFromLocalStorage(title);
  const updatedData = [...data, ...newObjects];
  saveArrayToLocalStorage(title, updatedData);
};

// Get all objects from the array
export const getAllObjects = (title: string): StoredObject[] => {
  initializeArray(title);
  return getArrayFromLocalStorage(title);
};

// Get an object by ID from the array
export const getObjectById = (title: string, id: string): StoredObject | undefined => {
  initializeArray(title);
  const data = getArrayFromLocalStorage(title);
  return data.find((item) => item.id === id);
};

// Delete an object by ID from the array
export const deleteObjectById = (title: string, id: string) => {
  initializeArray(title);
  const data = getArrayFromLocalStorage(title);
  const updatedData = data.filter((item) => item.id !== id);
  saveArrayToLocalStorage(title, updatedData);
};

// Edit an object by ID in the array
export const editObjectById = (title: string, id: string, updatedObject: Partial<StoredObject>) => {
  initializeArray(title);
  const data = getArrayFromLocalStorage(title);
  const updatedData = data.map((item) => (item.id === id ? { ...item, ...updatedObject } : item));
  saveArrayToLocalStorage(title, updatedData);
};

// Clear all objects from the array
export const clearAllObjects = (title: string) => {
  localStorage.removeItem(title);
};
