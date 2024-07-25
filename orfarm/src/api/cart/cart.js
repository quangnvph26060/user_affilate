import { ref, reactive, inject } from 'vue'
import { useRouter } from "vue-router";
import axios from 'axios';
import { useStore } from "vuex";
import { forEach } from 'lodash-es';
import apiURL  from "../../connect.js";
export default function Cart() {
    const API_BACK_END = apiURL.baseURL;
    // const headers = {
    //     'accept': 'application/json',
    //     'Authorization': 'Bearer ' + localStorage.getItem('token')
    // }
    const showErrorPopup = (icon, message, status) => {
        swal({
            icon: icon,
            html: message,
            showConfirmButton: status,
        });
    };
    const headers = {
        'accept': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
    const router = useRouter()
    const swal = inject('$swal');
    const store = useStore();
    const user = store.getters['user'];
    const discountPercentage = user.active_user_package?.package[0]['reduced_price'] ?? "";
    const responseCart = reactive({
        data: [],
        total: 0,
        error: "",
    })
    const getToCart = async () => {
        try {
            const response = await axios.get(`${API_BACK_END}cart`, { headers });
            if (response.data.status === 'success') {
                responseCart.data = response.data.data;
                let total = 0;
                responseCart.data.forEach(function (item) {
                    let amount = item['amount'];
                    let price = item['product']['price']; 
                    if(discountPercentage != ""){
                        price = price - (price * (discountPercentage / 100));
                    } 
                    total += amount * price;
                })
                responseCart.total = total;
            }
        } catch (error) {
            responseCart.error = error;
            console.error(error);
        }
    }
    const delToCart = async (id) => {
        try {
            const response = await axios.delete(`${API_BACK_END}cart/${id}`);
            if (response.data.status === 'success') {
                getToCart();
            }
        } catch (error) {
            console.error(error);
        }
    };
    const updateToCart = async (id, amount) => {
        const formData = {
            'id': id,
            'amount': amount
        }
        try {
            const response = await axios.post(`${API_BACK_END}cart/update/${id}`, formData);
            if (response.data.status === 'success') {
                getToCart();
            }
        } catch (error) {
            console.error(error);
        }
    };
    const clearCartUser = async () => {
        const headers = {
            'accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
        try {
            const response = await axios.post(`${API_BACK_END}cart/clear-cart`, {}, { headers: headers });
            if (response.data.status === 'success') {
                getToCart();
            }
        } catch (error) {
            console.error(error);
        }
    };
    return {
        getToCart,
        responseCart,
        delToCart,
        updateToCart,
        clearCartUser
    }
}