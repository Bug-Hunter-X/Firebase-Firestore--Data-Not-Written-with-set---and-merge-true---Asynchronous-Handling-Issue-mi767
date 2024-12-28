The solution involved ensuring that the `set()` operation was properly awaited.  This prevents the function from continuing before the write operation is complete. By adding `.then()` to handle the successful write and `.catch()` to handle potential errors, we ensure reliable data persistence.

```javascript
async function addDataToFirestore(data) {
  try {
    const docRef = db.collection('myCollection').doc('myDoc');
    await docRef.set(data, { merge: true });
    console.log('Data added successfully!');
  } catch (error) {
    console.error('Error adding data:', error);
  }
}
```
This change guarantees the data is written to Firestore before the function completes.  Error handling is also implemented to gracefully manage any potential issues during the write process.