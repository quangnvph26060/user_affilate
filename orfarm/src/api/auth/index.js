import { useRouter } from "vue-router";
import { ref, reactive, inject } from 'vue'
import { useStore } from 'vuex';
import store from '../../stores/index.js';
import validator from "../validator/validator.js";
import apiURL  from "../../connect.js";
import axios from 'axios';
import Swal from 'sweetalert2';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

const notyf = new Notyf();
export default function Auth() {
	const API_BACK_END = apiURL.baseURL;
	const otpSent = ref(false); 
	const resetPasswordForm = ref(false);
	const forgotPasswordForm = reactive({
        email: '',
		otp:'',
		password:'',
		confirmPassword:'',
    });
	const loginForm = reactive({
        phone: '',
        password: '',
		type: 'api',
    });
	const resultOtp = reactive({
		status: false,
	})
	const isOtp = reactive({
		status: false,
	})
	const errors = reactive({
		phone: '',
		password: '',
		confirmPassword: '',
		referral_code: '',
		name: '',
		email: '',
		otp:'',
		address:'',
	});
	const {
		checkNumber,
        checkPhoneNumber,
		checkEmail
    } = validator();
    const showErrorPopup = (icon, message,status) => {
        swal({
            icon: icon,
            html: message,
            showConfirmButton: status,
        });
    };
	const router = useRouter()
	const swal = inject('$swal');
	// Hàm xử lý lỗi
	const handleError = (error) => {
		if (error.response) {
			console.error('Server responded with a status:', error.response.status);
			console.error('Response data:', error.response.data);
		} else if (error.request) {
			console.error('No response received:', error.request);
		} else {
			console.error('Error setting up the request:', error.message);
		}
		return error;
	};
	const validateFormRegister = async (formSignup) => {
		let is_flag = true;
		errors.confirmPassword = '';
		errors.phone = '';
		errors.password = '';
		errors.name = '';
		errors.email = '';
		if(formSignup.name == ""){
			errors.name = 'Họ và tên không để trống!';
			is_flag = false;
		}
		if(formSignup.email == ""){
			errors.email = 'Email không để trống!';
			is_flag = false;
		}else if(!checkEmail(formSignup.email)){
			errors.email = 'Email sai định dạng!';
			is_flag = false;
		}
		if(formSignup.phone == ""){
			errors.phone = 'Số điện thoại không để trống!';
			is_flag = false;
		}else if(!checkPhoneNumber(formSignup.phone)){
			errors.phone = 'Số điện thoại sai định dạng!';
			is_flag = false;
		}
		if(formSignup.password == ""){
			errors.password  = 'Mật khẩu không để trống!';
			is_flag = false;
		}else if(formSignup.password.length < 8){
			errors.password  = 'Mật khẩu ít hơn 8 ký tự!';
			is_flag = false;
		}
		if(formSignup.confirmPassword == ""){
			errors.confirmPassword  = 'Mật khẩu xác nhận không để trống!';
			is_flag = false;
		}else if(formSignup.confirmPassword.length < 8){
			errors.confirmPassword  = 'Mật khẩu xác nhận ít hơn 8 ký tự!';
			is_flag = false;
		} else if(formSignup.confirmPassword != formSignup.password ){
			errors.confirmPassword  = 'Mật khẩu xác nhận không chính xác!';
			is_flag = false;
		}
		return is_flag
	}

	setTimeout(function() {
		if(isOtp.status == true){
			localStorage.removeItem('user');
		}
	}, 300000); //5p

	const submitResgiter = async (formSignup,$type)=>{
		const status = await validateFormRegister(formSignup);
        if (status == false) {
			resultOtp.status = false;
            return;
        }
		if (status == true) {
			resultOtp.status = true;
        }
		if($type == "sendotp"){
			isOtp.status = true;
			resultOtp.status = true;
			try {
				const otp = Math.floor(Math.random() * 900000);
				const formSignupWithOTP = { ...formSignup, otp };	
				const response = await axios.post(`${API_BACK_END}send-otp`, formSignupWithOTP);
				if(response.data.status === 'success'){
					var userJSON = JSON.stringify(response.data.data);
					var encodedData = btoa(userJSON);
					localStorage.setItem('user',encodedData);
					showErrorPopup('success','Đã gửi mã OTP về email của bạn', false);
				} 
			} catch (error) {
				resultOtp.status = false;
				const keys = Object.keys(error.response.data.message);
				const Key = keys[0];
				if(Key === 'phone'){
					errors.phone = "Số điện thoại đã tồn tại"
				}else if(Key === 'email'){
					errors.email = "Email đã tồn tại"
				}
			}
		}
		if($type == "register"){
			var encodedData = localStorage.getItem('user');
			if(!encodedData){
				return;
			}
			var decodedData = atob(encodedData);
			var userObject = JSON.parse(decodedData);
			if(userObject['otp'] === parseInt(formSignup['otp'])){
				try {
					const response = await axios.post(`${API_BACK_END}register`, formSignup);
					if(response.data.status === 'success'){
						showErrorPopup('success','Đăng ký thành công',true);
						await router.push({ name: 'login' })
						// window.location.href = 'http://localhost:5173/login';
					} 
				} catch (error) {
					resultOtp.status = false;
					const keys = Object.keys(error.response.data.message);
					const Key = keys[0];
					if(Key === 'phone'){
						errors.phone = "Số điện thoại đã tồn tại"
					}else if(Key === 'email'){
						errors.email = "Email đã tồn tại"
					}
				}
			}else{
				showErrorPopup('error','OTP error!',true);
			}
			
		}
	}
	const validateFormLogin = async (loginForm) => {
		let is_flag = true;
		errors.phone = '';
		errors.password = '';
		if(loginForm.phone == ""){
			errors.phone = 'Tài khoản không để trống!';
			is_flag = false;
		}
		if(loginForm.password == ""){
			errors.password  = 'Mật khẩu không để trống!';
			is_flag = false;
		}else if(loginForm.password.length < 8){
			errors.password  = 'Mật khẩu ít hơn 8 ký tự!';
			is_flag = false;
		}
		return is_flag;
	}
	const submitLogin = async () => {
		const status = await validateFormLogin(loginForm);
        if (status == false) {
            return;
        }
		try {
			const response = await axios.post(`${API_BACK_END}auth/login`, loginForm);
			if(response.data.status === 'error'||
				response.data.role === "Admin"
			)
			{
				showErrorPopup('error','Thông tin không chính xác',true);
				return;
			}
			// await store.dispatch('login', {
			// 	user: response.data.userData,
			// 	token: response.data.accessToken,
			// });
			if (response.data.status == 'success') {
				
				await store.dispatch('setTokenUser', { 'token': response.data.accessToken })
				await store.dispatch('getUser')
				await store.dispatch('getCart')
				await  notyf.success({
					message: 'Đăng nhập thành công!',
					duration: 2000,
					position: {
						x: 'right',
						y: 'top',
					  },
				  });
				
				await router.push({ name: 'home' })
			}
			
		} catch (error) {
			errors.phone='Tài khoản/mật khẩu không đúng'
			console.error(error)
		}
	}
	const validateFormForgotPassword = async (forgotPasswordForm) => {
		let is_flag = true;
		const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
		errors.email = '';

		if (forgotPasswordForm.email == "") {
			errors.email = 'Email không để trống!';
			is_flag = false;
		} else if (!re.test(forgotPasswordForm.email)) {
			errors.email = 'Email không đúng định dạng!';
			is_flag = false;
		}
		
		
		return is_flag;
	}

	const submitForgotPassword = async () => {
		const status = await validateFormForgotPassword(forgotPasswordForm);
        if (status == false) {
            return;
        }
		try {
			const response = await axios.post(`${API_BACK_END}send-otp-user`, forgotPasswordForm);
			if(response.data.status === 'error'||
				response.data.role === "Admin"
			)
			{
				showErrorPopup('error','Thông tin không chính xác',true);
				return;
			}

			if (response.data.status == 'success') {
				otpSent.value = true;
				
				await  notyf.success({
					message: 'Gửi OTP về email của bạn thành công!',
					duration: 2000,
					position: {
						x: 'right',
						y: 'top',
					  },
				  });
			}
			
		} catch (error) {
			console.error(error)
		}
	}

	const validateFormOTP = async (forgotPasswordForm) => {
		let is_flag = true;
		const re = /^[0-9]{6}$/;
		errors.otp = '';

		if (forgotPasswordForm.otp == "") {
			errors.email = 'OTP không để trống!';
			is_flag = false;
		} else if (!re.test(forgotPasswordForm.otp)) {
			errors.otp = 'OTP không đúng định dạng!';
			is_flag = false;
		}
		
		
		return is_flag;
	}

	const submitOtp = async () => {
		const status = await validateFormOTP(forgotPasswordForm);
        if (status == false) {
            return;
        }
		try {
			const response = await axios.post(`${API_BACK_END}check-otp`, forgotPasswordForm);
			if(response.data.status === 'error'||
				response.data.role === "Admin"
			)
			{
				showErrorPopup('error','Thông tin không chính xác',true);
				return;
			}

			if (response.data.status == 'success') {
				
				await  notyf.success({
					message: 'Xác thực OTP thành công!',
					duration: 2000,
					position: {
						x: 'right',
						y: 'top',
					  },
				  });
				
				resetPasswordForm.value = true;
			}
			
		} catch (error) {
			console.error(error)
		}
	}

	const validateNewPassword = async (forgotPasswordForm) => {
		let is_flag = true;
		
		errors.password = '';
		errors.confirmPassword = '';

		if (forgotPasswordForm.password === "") {
			errors.password = 'Mật khẩu không để trống!';
			is_flag = false;
		} else if (forgotPasswordForm.password.length < 8) {
			errors.password = 'Mật khẩu phải có ít nhất 8 ký tự!';
			is_flag = false;
		}
	
		// Confirm password must match password
		if (forgotPasswordForm.confirmPassword === "") {
			errors.confirmPassword = 'Xác nhận mật khẩu không để trống!';
			is_flag = false;
		} else if (forgotPasswordForm.password !== forgotPasswordForm.confirmPassword) {
			errors.confirmPassword = 'Mật khẩu không khớp!';
			is_flag = false;
		}
		
		return is_flag;
	}
	const submitNewPassword = async () => {
		const status = await validateNewPassword(forgotPasswordForm);
        if (status == false) {
            return;
        }
		try {
			const response = await axios.post(`${API_BACK_END}new-password`, forgotPasswordForm);
			if(response.data.status === 'error'||
				response.data.role === "Admin"
			)
			{
				showErrorPopup('error','Không cập nhật được mật khẩu',true);
				return;
			}

			if (response.data.status == 'success') {
				
				await  notyf.success({
					message: 'Cập nhật mật khẩu thành công!',
					duration: 2000,
					position: {
						x: 'right',
						y: 'top',
					  },
				  });
				
				await router.push({ name: 'login' })
			}
			
		} catch (error) {
			console.error(error)
		}
	}
	
	const logout = async () => {
        const headers = {
            'accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
        try {
            const { data } = await axios.post(`${API_BACK_END}auth/logout `, {}, { headers: headers });
            if (data.status == 'success') {
                await store.dispatch('logout')
				await  notyf.success({
					message: 'Đăng xuất thành công!',
					duration: 2000,
					position: {
						x: 'right',
						y: 'top',
					  },
				  });
				await router.push({ name: 'login' })
            }
        } catch ({ res }) {
            await store.dispatch('logout')
        }
    }
	const editUserInfo = async (id) => {
		const headers = {
            'accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
        try {
            const  response  = await axios.post(`${API_BACK_END}/auth/edit-user-info`, {id}, { headers: headers });

        } catch (error) {
			throw handleError(error);
        }
	}
	const FormEdituser = reactive({
        phone: '',
        name: '',
		address: '',
    });
	const editUser = async (FormEdituser) => {
		const headers = {
            'accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
		try {
            const response  = await axios.post(`${API_BACK_END}edit-user`,FormEdituser, { headers: headers });

        } catch (error) {
			throw handleError(error);
        }
	}
	return {
		loginForm,
		submitLogin,
		logout,
		errors,
		resultOtp,
		submitResgiter,
		editUserInfo,
		forgotPasswordForm,
		submitForgotPassword,
		otpSent,
		submitOtp,
		resetPasswordForm,
		submitNewPassword,
		FormEdituser,
		editUser
	}
}
