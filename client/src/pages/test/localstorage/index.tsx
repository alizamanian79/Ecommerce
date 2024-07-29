// components/LocalStorageManager.tsx

import React, { useState } from 'react';
import {
  addObjects,
  getAllObjects,
  getObjectById,
  deleteObjectById,
  editObjectById,
  clearAllObjects
} from '../../../../utils/LocalStorage/localStorage';

// Define the StoredObject type to be used in the component
type StoredObject = {
  id: string;
  name?: string; // Optional fields
  value?: number; // Optional fields
  [key: string]: any;
};

const LocalStorageManager: React.FC = () => {
  const [objectId, setObjectId] = useState<string>('1');
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

  return (
    <div>
      <h1>LocalStorage Manager</h1>
      <div>
        <button onClick={handleAddObjects}>Add Objects</button><br /><br />
        <button onClick={handleGetAllObjects}>Get All Objects</button><br /><br />
        <button onClick={handleGetObject}>Get Object</button><br /><br />
        <button onClick={handleDeleteObject}>Delete Object</button><br /><br />
        <button onClick={handleEditObject}>Edit Object</button><br /><br />
        <button onClick={handleClearAllObjects}>Clear All Objects</button><br /><br />
      </div>
      <div>
        <input
          type="text"
          value={objectId}
          onChange={(e) => setObjectId(e.target.value)}
          placeholder="Object ID"
        />
        <input
          type="text"
          value={JSON.stringify(objectData)}
          onChange={(e) => setObjectData(JSON.parse(e.target.value))}
          placeholder="Object Data (JSON)"
        />
        <input
          type="text"
          value={arrayTitle}
          onChange={(e) => setArrayTitle(e.target.value)}
          placeholder="Array Title"
        />
      </div>
      <div>
        <p>Result: {result}</p>
      </div>
    </div>
  );
};

export default LocalStorageManager;
