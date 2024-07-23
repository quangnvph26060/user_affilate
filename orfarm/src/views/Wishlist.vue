<script setup>
import BreadCrumb from '@/components/BreadCrumb.vue'
import { computed, ref } from 'vue'

const breadCrumbPath = [{ route: '/', name: 'Trang chủ' }, { name: 'Danh sách mong muốn' }]
const cart = ref([
  {
    id: 1,
    name: 'Bữa sáng Mùa hè Cho Buổi Sáng Khỏe Mạnh',
    price: 130.0,
    quantity: 1,
    subtotal: 130.0,
    image: '../assets/img/product/products19-min.jpg'
  },
  {
    id: 2,
    name: 'Những Lợi Ích Tuyệt Vời Nhất Của Thịt Bò Tươi',
    price: 120.5,
    quantity: 1,
    subtotal: 120.5,
    image: '../assets/img/product/products20-min.jpg'
  }
])

const minusQuantity = (item) => {
  const foundItem = cart.value.find((p) => p.id === item.id)
  if (foundItem && foundItem.quantity > 1) {
    foundItem.quantity--
  }
}

// Function to increase quantity
const plusQuantity = (item) => {
  const foundItem = cart.value.find((p) => p.id === item.id)
  if (foundItem) {
    foundItem.quantity++
  }
}
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
                    <th class="cart-product-name">Khóa học</th>
                    <th class="product-price">Đơn giá</th>
                    <th class="product-quantity">Số lượng</th>
                    <th class="product-add-to-cart">Thêm vào giỏ hàng</th>
                    <th class="product-remove">Xóa</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in cart" :key="index">
                    <td class="product-thumbnail">
                      <a :href="'shop-details.html?id=' + item.id">
                        <img src="../assets/img/product/products20-min.jpg" :alt="item.name" />
                      </a>
                    </td>
                    <td class="product-name">
                      <a :href="'shop-details.html?id=' + item.id">{{ item.name }}</a>
                    </td>
                    <td class="product-price">
                      <span class="amount">${{ item.price.toFixed(2) }}</span>
                    </td>
                    <td class="product-quantity">
                      <span class="cart-minus" @click="minusQuantity(item)">-</span>
                      <input class="cart-input" type="text" :value="item.quantity" />
                      <span class="cart-plus" @click="plusQuantity(item)">+</span>
                    </td>
                    <td class="product-add-to-cart">
                      <button class="tp-btn tp-color-btn tp-wish-cart banner-animation">
                        Thêm vào giỏ hàng
                      </button>
                    </td>
                    <td class="product-remove">
                      <a href="#"><i class="fa fa-times"></i></a>
                    </td>
                  </tr>
                </tbody>
              </table>
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
  float: none;
}

.product-quantity .cart-plus,
.product-quantity .cart-minus {
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
.product-quantity .cart-plus:hover,
.product-quantity .cart-minus:hover {
  cursor: pointer;
  color: var(--tp-common-white);
  background: var(--tp-heading-secondary);
}
.tp-wish-cart {
  min-width: 150px;
}

.tp-btn {
  background-color: var(--tp-heading-secondary);
  text-align: center;
  color: var(--tp-common-white);
  font-weight: 600;
  border-radius: 50px;
  display: inline-block;
  font-size: 13px;
  text-transform: uppercase;
  padding: 13px 53px;
  -webkit-transition: all 0.3s ease-out 0s;
  -moz-transition: all 0.3s ease-out 0s;
  -ms-transition: all 0.3s ease-out 0s;
  -o-transition: all 0.3s ease-out 0s;
  transition: all 0.3s ease-out 0s;
}
.tp-btn:hover {
  color: var(--tp-common-white);
  background-color: var(--tp-heading-primary);
}
@media (max-width: 767px) {
  .table-content table {
      width: 300%;
  }
}
</style>
