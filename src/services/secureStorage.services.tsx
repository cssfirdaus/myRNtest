import RNSecureKeyStore, {ACCESSIBLE} from 'react-native-pvt-secure-key-store';
class SecureKeyStorage {
  storingKey = async (key: string, value: string) => {
    return RNSecureKeyStore.set(key, value, {
      accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY,
    });
  };

  retrieveKey = async (key: string) => {
    let value: any;
    try {
      value = await RNSecureKeyStore.get(key);
    } catch (e) {
      throw new Error();
    }
    return value;
  };
}

const secureKeyStorageService = new SecureKeyStorage();
export {secureKeyStorageService};
