import { useRouter } from "vue-router";
import apiURL  from "../../connect.js";
export default function Order() {
	const API_BACK_END = apiURL.baseURL;
    const responseComment = {
        data: [],
        count: 0
    }; 
    const router = useRouter();
    const headers = {
        'accept': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
    const getCommnentAll = async (id) => {
        try {
            const  response  = await axios.post(`${API_BACK_END}comment/get-comment`,{id:id}, { headers: headers });
                if(response.status === 200){
                    responseComment.data = response.data.data
                    responseComment.count = response.data.data.length
                }
        } catch (error) {
			throw handleError(error);
        }
    }
    const submitCommnent = async (formDataOrder) => {
        try {
            const  response  = await axios.post(`${API_BACK_END}comment`,formDataOrder, { headers: headers });
                if(response.data.status === 'success'){
                    await router.push({ name: 'InformationLine' })
                }
        } catch (error) {
			throw handleError(error);
        }
    }
    return {
        submitCommnent,
        getCommnentAll,
        responseComment
    }
}