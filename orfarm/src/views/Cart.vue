<script setup>
import BreadCrumb from '@/components/BreadCrumb.vue'
import { computed, ref, reactive} from 'vue'
import store from '../stores/index.js';
import { mapState } from 'vuex';
import axios from 'axios';
import apiURL  from "../connect.js";
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

const notyf = new Notyf();
const API_BACK_END = apiURL.URL;
const API_BACK_END_V1 = apiURL.baseURL;
const breadCrumbPath = [{ route: '/', name: 'Trang chủ' }, { name: 'Giỏ Hàng' }]

const globalStore = ref(store.state.global);
const total = computed(() => {
  let totalValue = 0;
  if( store.state.global.cart){
    store.state.global.cart.forEach(item => {
    totalValue += item.product.price * item.amount;
  });
  }
  return totalValue;
});


const changeQuantity = async (item, condition) => {
  const cart = {
    product_id: item.product.id,
    amount: condition,
    user_id: store.state.auth.user.id,
  };

  try {
    if (item.amount === 1 && condition === -1) {
      await deleteCartItem(item.id);
    } else {
      await updateCartItem(cart);
    }
    
  } catch (error) {
    console.error('Error processing cart item:', error);
  }
};

const deleteCartItem = async (itemId) => {
  try {
    const response = await axios.delete(`${API_BACK_END_V1}cart/${itemId}`);
    if (response.data.status === 'success') {
      showAlert('success', 'Đã xóa sản phẩm khỏi giỏ hàng!');
      store.dispatch('getCart');
    } else {
      showAlert('error','Failed to delete cart item');
    }
  } catch (error) {
    console.error('Error deleting cart item:', error);
  }
};

const updateCartItem = async (cart) => {
  try {
    const response = await axios.post(`${API_BACK_END_V1}cart`, cart);
    if (response.data.status === 'success') {
      showAlert('success', 'Thay đổi số lượng thành công!');
      store.dispatch('getCart');
    } else {
      showAlert('error','Failed to update cart item');
    }
  } catch (error) {
    console.error('Error updating cart item:', error);
  }
};

const showAlert = async (icon, title) => {
  if(icon == 'success'){
    await  notyf.success({
					message: title,
					duration: 2000,
					position: {
						x: 'right',
						y: 'top',
					  },
				  });
  }else{
    await  notyf.error({
					message: title,
					duration: 2000,
					position: {
						x: 'right',
						y: 'top',
					  },
				  });
  }
 
};

const getImageUrl = (imagePath) => {
      return `${API_BACK_END}/${imagePath}`;
    };

const formatCurrency = (value) => {
  const formattedNumber = new Intl.NumberFormat('en-VN', {
        style: 'decimal',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(value);
      return `${formattedNumber} VND`;
    };


</script>

<template>
  <BreadCrumb :breadCrumbPath="breadCrumbPath" />
  <section class="cart-area pb-80">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <form action="#">
            <div class="table-content table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th class="product-thumbnail">Hình ảnh</th>
                    <th class="cart-product-name">Sản Phẩm</th>
                    <th class="product-price">Đơn giá</th>
                    <th class="product-quantity">Số lượng</th>
                    <th class="product-subtotal">Tổng cộng</th>
                    <th class="product-remove">Xóa</th>
                  </tr>
                </thead>
                <tbody v-if='store.state.global.cart && store.state.global.cart.length > 0'>
                  <tr v-for="(item, index) in store.state.global.cart" :key="index">
                    <td class="product-thumbnail">
                      <a :href="'product-details?id=' + item.product.id">
                        <img :src="getImageUrl(item.product.images[0].image_path)" :alt="item.product.name" />
                      </a>
                    </td>
                    <td class="product-name">
                      <a :href="'prodcut-details?id=' + item.product.id">{{ item.product.name }}</a>
                    </td>
                    <td class="product-price">
                      <span class="amount">{{ formatCurrency(item.product.price) }}</span>
                    </td>
                    <td class="product-quantity">
                      <span class="cart-minus" @click="changeQuantity(item,-1)"
                        >-</span
                      >
                      <input class="cart-input" type="text" :value="item.amount" />
                      <span class="cart-plus" @click="changeQuantity(item,1)">+</span>
                    </td>
                    <td class="product-subtotal">
                      <span class="amount">{{ formatCurrency(item.amount * item.product.price) }}</span>
                    </td>
                    <td class="product-remove" @click="deleteCartItem(item.id)">
                      <a href="#"><i class="fa fa-times"></i></a>
                    </td>
                  </tr>
                </tbody>
                <tbody v-else>
                  <tr>
                    <td class="product-thumbnail" colspan="6" style="text-align: center; padding-top:50px; padding-bottom:50px;">
                      <img src="../assets/img/shape/erorr-bg.png" alt="">
                      <br/>
                      Hiện tại chưa có sản phẩm nào trong giỏ hàng
                    
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="coupon-all">
                  <div class="coupon">
                    <input
                      id="coupon_code"
                      class="input-text"
                      name="coupon_code"
                      value=""
                      placeholder="Mã giảm giá"
                      type="text"
                    />
                    <button
                      class="tp-btn tp-color-btn banner-animation"
                      name="apply_coupon"
                    >
                      Áp dụng mã giảm giá
                    </button>
                  </div>
                 
                </div>
              </div>
            </div>
            <div class="row justify-content-end">
              <div class="col-md-5">
                <div class="cart-page-total">
                  <h2>Tổng cộng giỏ hàng</h2>
                  <ul class="mb-20">
                    <li>
                      Tổng cộng <span>{{formatCurrency( total) }}</span>
                    </li>
                  </ul>
                  <a href="/checkout" class="tp-btn tp-color-btn banner-animation"
                    >Tiến hành thanh toán</a  
                  >
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.table-content table {
  background: var(--tp-common-white);
  border-color: var(--tp-border-1);
  border-radius: 0;
  border-style: solid;
  border-width: 1px 0 0 1px;
  text-align: center;
  width: 100%;
  margin-bottom: 0;
}
.table-content table a {
  color: inherit;
}
.table-content .table > :not(:last-child) > :last-child > * {
  border-bottom-color: var(--tp-border-1);
}
.table-content table th {
  font-size: 16px;
  font-weight: 700;
}
.table-content table th,
.table-content table td {
  border-bottom: 1px solid var(--tp-border-1);
  border-right: 1px solid var(--tp-border-1);
}
.table td,
.table th {
  border-top: 1px solid var(--tp-border-1);
}
.table-content table.table > :not(:first-child) {
  border-top: 0;
}
td.product-thumbnail img {
  width: 125px;
  height: 125px;
  object-fit:cover;
  border-radius: 5px; 
}
.table-content table td.product-name {
  font-size: 16px;
  font-weight: 500;
  text-transform: capitalize;
}
.table-content table td:not(:first-child) {
  vertical-align: middle;
}
.table-content .product-quantity {
  user-select: none;
  float: none;
}

.product-quantity .cart-plus,
.product-quantity .cart-minus {
  user-select: none;
  width: 25px;
  height: 30px;
  border: 1px solid var(--tp-border-1);
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  font-size: 14px;
}

.product-quantity > input {
  width: 80px;
  border-radius: 3px;
}

.product-quantity input {
  color: #000;
  font-size: 14px;
  font-weight: normal;
  border: 1px solid var(--tp-border-1);
}
.cart-input {
  height: 30px;
  width: 32px;
  text-align: center;
  font-size: 14px;
  border: none;
  border-top: 2px solid var(--tp-border-1);
  border-bottom: 2px solid var(--tp-border-1);
  display: inline-block;
  vertical-align: middle;
  margin: 0 -3px;
  padding-bottom: 0px;
}
.table-content table td.product-subtotal {
  font-size: 16px;
}
.fa-times:before {
  content: '\f00d';
  font: normal normal normal 14px/1 FontAwesome;
}
.coupon-all {
  margin-top: 50px;
}
.coupon {
  float: left;
}
#coupon_code {
  height: 52px;
  border: 1px solid var(--tp-border-1);
  padding: 0 15px;
  margin-right: 10px;
  border-radius: 8px;
}
.coupon2 {
  float: right;
}
.cart-page-total {
  padding-top: 50px;
}
.cart-page-total > h2 {
  font-size: 25px;
  margin-bottom: 20px;
  text-transform: capitalize;
}
.cart-page-total > ul {
  border: 1px solid var(--tp-border-1);
  padding-left: 0;
}
.cart-page-total > ul > li {
  list-style: none;
  font-size: 15px;
  color: #6f7172;
  padding: 10px 30px;
  border-bottom: 1px solid var(--tp-border-1);
  font-weight: 400;
}
.cart-page-total li:last-child {
  border-bottom: 0;
}

.cart-page-total ul > li > span {
  float: right;
}
.product-quantity .cart-plus:hover,
.product-quantity .cart-minus:hover {
  cursor: pointer;
  color: var(--tp-common-white);
  background: var(--tp-heading-secondary);
}
@media (max-width: 767px) {
  .table-content table {
      width: 300%;
  }
  .coupon {
    float: none;
}
.coupon2 {
  float: none;
  margin-top: 15px;
}
#coupon_code {
  margin-bottom: 15px;
}

}

</style>
