import secureLocalStorage from "react-secure-storage";
class LocalStorageStorage {

    getSingleItem(key) {
        const items = secureLocalStorage.getItem(key);
        if (items) return items;
        return null
    }

    getItem(key) {
        const items = secureLocalStorage.getItem(key);
        if (items) {
            return JSON.parse(items);
        }
        return null;
    }

    setItem(key, values) {
        secureLocalStorage.setItem(key, values);
    }

    removeItem(key) {
        secureLocalStorage.removeItem(key);
    }

    clearAllItem() {
        secureLocalStorage.clear();
    }

}

const localStorageCall = () => new LocalStorageStorage();
export default localStorageCall; 
