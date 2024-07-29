import React, { useState } from 'react';
import {
  addObjects,
  getAllObjects,
  getObjectById,
  deleteObjectById,
  editObjectById,
  clearAllObjects
} from '../../../../utils/LocalStorage/localStorage'; 


 
 const [objectId, setObjectId] = useState<string>('');
  const [objectData, setObjectData] = useState<Partial<StoredObject>>({});
  const [result, setResult] = useState<string | null>(null);
  const [arrayTitle, setArrayTitle] = useState<string>('jdd');

  const handleAddObjects = () => {
    const newObjects: StoredObject[] = [
      { id: '1', name: 'Object One', value: 123 },
      { id: '2', name: 'Object Two', value: 456 }
    ]; // Customize as needed
    addObjects(arrayTitle, newObjects);
    setResult(`Added objects: ${JSON.stringify(newObjects)}`);
  };

  const handleGetAllObjects = () => {
    const allObjects = getAllObjects(arrayTitle);
    setResult(`All objects: ${JSON.stringify(allObjects)}`);
  };

  const handleGetObject = () => {
    const obj = getObjectById(arrayTitle, objectId);
    setResult(obj ? `Object found: ${JSON.stringify(obj)}` : 'Object not found');
  };

  const handleDeleteObject = () => {
    deleteObjectById(arrayTitle, objectId);
    setResult(`Deleted object with ID: ${objectId}`);
  };

  const handleEditObject = () => {
    const updatedObject: Partial<StoredObject> = { value: 789 }; // Customize as needed
    editObjectById(arrayTitle, objectId, updatedObject);
    setResult(`Edited object with ID: ${objectId}`);
  };

  const handleClearAllObjects = () => {
    clearAllObjects(arrayTitle);
    setResult('Cleared all objects');
  };
