import { useEffect } from "react";
import localforage from "localforage";

function IndexedDB(setValue) {
  useEffect(() => {
    localforage.getItem("inputData").then((data) => {
      if (data) {
        Object.keys(data).forEach((key) => setValue(key, data[key]));
      }
    });
  }, [setValue]);
}
export default IndexedDB;
