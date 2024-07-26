import { ref, reactive, inject } from 'vue'
import { useRouter } from "vue-router";
import axios from 'axios';
import { useStore } from "vuex";
import { forEach } from 'lodash-es';
import apiURL  from "../../connect.js";
export default function Category() {
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
    const responseData = reactive({
        data: [],
        total: 0,
    })
 
    const getCategory = async () => {
        try {
            const response = await axios.get(`${API_BACK_END}categories`, { headers });
            if (response.data.status === 'success') {
                responseData.data = response.data.data;
              
            }
        } catch (error) {
            console.error(error);
        }
    }
  

    return {
        getCategory,
        responseData,  
    }
}