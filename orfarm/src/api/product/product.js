import { ref, reactive, inject } from 'vue'
import { useRouter } from "vue-router";
import axios from 'axios';
import apiURL from "../../connect";
import { useStore} from "vuex";

export default function Product() {
    const API_BACK_END = apiURL.baseURL;
    const headers = {
        'accept': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
    const responseProduct = reactive({
        data: [],
        productCategory: [],
    }) 
    const store = useStore();
    
    const getProduct = async () => {
        try {
            const response = await axios.get(`${API_BACK_END}products`, {headers });
            if(response.data.status === 'success'){
                const userdata = await store.getters['user'];
                responseProduct.data = response.data.data;
                const discountPercentage = userdata.active_user_package?.package[0]['reduced_price'] ?? "";
                if(discountPercentage){
                    responseProduct.data.forEach(product => {
                        product.price = product.price - (product.price * (discountPercentage / 100));
                    });
                }
                    
                
            }
        } catch (error) {
            console.error('Error fetching the product:', error);
        }
    }
    // lấy ra sản phẩm theo id 
    const findProduct = async (id) =>{
        try {
            const response = await axios.post(`${API_BACK_END}products/${id}`);
            if(response.data.status === 'success'){
                responseProduct.data = response.data.data;
                const userdata = await store.getters['user'];
                const discountPercentage = userdata.active_user_package?.package[0]['reduced_price'] ?? "";
                if(discountPercentage){
                    responseProduct.data.price = responseProduct.data.price - (responseProduct.data.price * (discountPercentage / 100));
                }
                const responsecategory = await axios.post(`${API_BACK_END}products/bycategory/${responseProduct.data.category_id}`);
                if(responsecategory.data.status === 'success'){
                    responseProduct.productCategory = responsecategory.data.data;
                    const userdata = await store.getters['user'];
                    const discountPercentage = userdata.active_user_package?.package[0]['reduced_price'] ?? "";
                    if(discountPercentage){
                        responseProduct.productCategory.forEach(product => {
                            product.price = product.price - (product.price * (discountPercentage / 100));
                        });
                    }
                }
            }
        } catch (error) {
            console.error('Error fetching the product:', error);
        }
    }
    const searchProduct = async (searchValues) => {
        try {
            const response = await axios.post(`${API_BACK_END}search-product`, {searchValues} ,{ headers });
            if(response.data.status === 'success'){
                responseProduct.data = response.data.data;
            }
        } catch (error) {
            console.error(error);
        }
    }
    const getProductTop = async () => {
        try {
            const response = await axios.get(`${API_BACK_END}products/get-product-top `, {headers });
            if(response.status === 200){
                responseProduct.data = response.data;
                const userdata = await store.getters['user'];
                const discountPercentage = userdata.active_user_package?.package[0]['reduced_price'] ?? "";
                if(discountPercentage){
                    responseProduct.data.forEach(product => {
                        product.price = product.price - (product.price * (discountPercentage / 100));
                    });
                }
            }
        } catch (error) {
            console.error('Error fetching the product:', error);
        }
    }
    return {
        getProduct,
        responseProduct,
        findProduct,
        searchProduct,
        getProductTop
        
    }
}