import EncryptedStorage from 'react-native-encrypted-storage';

export async function storeDataLocally(dataName, data) {
  try {
    await EncryptedStorage.setItem(String(dataName), JSON.stringify(data));
    console.log('data stored locally')
  } catch (error) {
    console.log('erorr local:', error, error.code);
  }
}

export async function retrieveData(dataName) {
  try {
    const session = await EncryptedStorage.getItem(String(dataName));
    if (session !== undefined) {
      return [JSON.parse(session)];
    }
  } catch (error) {
    console.log('error in accessing the transactions from storage: ', error);
  }
}
