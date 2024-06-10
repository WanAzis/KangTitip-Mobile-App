// import { collection, getDocs } from "firebase/firestore";
import { firestore, collection, getDocs } from "@/firebaseConfig";

const fetchProducts = async () => {
    try {
        const products = [];
        const querySnapshot = await getDocs(collection(firestore, "Product"));
        querySnapshot.forEach((doc) => {
        products.push({ id: doc.id, ...doc.data() });
        });
        return products;
    } catch (error) {
        console.error("Error fetching products: ", error);
        return [];
    }
};

export default fetchProducts;