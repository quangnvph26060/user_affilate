<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
const props = defineProps({
  isHomePage: Boolean,
  isGrey:Boolean,
});

const isScrollOpen = ref(false)

const handleScroll = () => {
  const scroll = window.scrollY
  if (scroll < 245) {
    isScrollOpen.value = false
  } else {
    isScrollOpen.value = true
  }
}

const scrollToTop = () => {
  const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
  if (currentScroll > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, currentScroll - currentScroll / 20);
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <!-- Phần Chính -->
  <section
    class="feature-area mainfeature__bg pt-50 pb-40  " :class="{'grey-bg':isGrey}"
    v-if="!isHomePage"
    data-background="../assets/img/shape/footer-shape-1.svg"
  >
    <div class="container">
      <div class="mainfeature__border pb-15">
        <div class="row row-cols-lg-5 row-cols-md-3 row-cols-2">
          <div class="col">
            <div class="mainfeature__item text-center mb-30">
              <div class="mainfeature__icon">
                <img src="../assets/img/icon/feature-icon-1.svg" alt="" />
              </div>
              <div class="mainfeature__content">
                <h4 class="mainfeature__title">Giao hàng nhanh</h4>
                <p>Toàn bộ khu vực Đông & Tây Ấn Độ</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="mainfeature__item text-center mb-30">
              <div class="mainfeature__icon">
                <img src="../assets/img/icon/feature-icon-2.svg" alt="" />
              </div>
              <div class="mainfeature__content">
                <h4 class="mainfeature__title">Thanh toán an toàn</h4>
                <p>Thanh toán 100% bảo mật</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="mainfeature__item text-center mb-30">
              <div class="mainfeature__icon">
                <img src="../assets/img/icon/feature-icon-3.svg" alt="" />
              </div>
              <div class="mainfeature__content">
                <h4 class="mainfeature__title">Giảm giá online</h4>
                <p>Thêm giảm giá mua hàng nhiều</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="mainfeature__item text-center mb-30">
              <div class="mainfeature__icon">
                <img src="../assets/img/icon/feature-icon-4.svg" alt="" />
              </div>
              <div class="mainfeature__content">
                <h4 class="mainfeature__title">Trung tâm hỗ trợ</h4>
                <p>Hỗ trợ 24/7 nhiệt tình</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="mainfeature__item text-center mb-30">
              <div class="mainfeature__icon">
                <img src="../assets/img/icon/feature-icon-5.svg" alt="" />
              </div>
              <div class="mainfeature__content">
                <h4 class="mainfeature__title">Các mặt hàng tuyển chọn</h4>
                <p>Từ các người bán được chọn lọc</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer>
    <div class="tpfooter__area theme-bg-2" :class="{'footer-border':isHomePage}" >
      <div class="tpfooter__top pb-15">
        <div class="container">
          <div class="row">
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div class="tpfooter__widget footer-col-1 mb-50">
                <h4 class="tpfooter__widget-title">Hãy để chúng tôi giúp bạn</h4>
                <p>
                  Nếu bạn có bất kỳ câu hỏi nào, vui lòng liên hệ với chúng tôi qua:
                  <a href="mailto:support@example.com">support@example.com</a>
                </p>
                <div class="tpfooter__widget-social mt-45">
                  <span class="tpfooter__widget-social-title" style="margin-bottom:5px;">Mạng xã hội:</span>
                  <a href="#"><i class="fab fa-facebook-f"></i></a>
                  <a href="#"><i class="fab fa-twitter"></i></a>
                  <a href="#"><i class="fab fa-youtube"></i></a>
                  <a href="#"><i class="fab fa-pinterest-p"></i></a>
                  <a href="#"><i class="fab fa-skype"></i></a>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div class="tpfooter__widget footer-col-2 mb-50">
                <h4 class="tpfooter__widget-title">Bạn đang tìm Orfarm?</h4>
                <p>
                  68 St. Vicent Place, Glasgow, Greater <br />
                  Newyork NH2012, Anh Quốc.
                </p>
                <div class="tpfooter__widget-time-info mt-35">
                  <span>Thứ hai – Thứ sáu: <b>8:10 AM – 6:10 PM</b></span>
                  <span>Thứ bảy: <b>10:10 AM – 06:10 PM</b></span>
                  <span>Chủ nhật: <b>Đóng cửa</b></span>
                </div>
              </div>
            </div>
            <div class="col-xl-2 col-lg-4 col-md-4 col-sm-5">
              <div class="tpfooter__widget footer-col-3 mb-50">
                <h4 class="tpfooter__widget-title">DANH MỤC HOT</h4>
                <div class="tpfooter__widget-links">
                  <ul>
                    <li><a href="#">Trái cây & Rau củ</a></li>
                    <li><a href="#">Sản phẩm sữa</a></li>
                    <li><a href="#">Thực phẩm đóng gói</a></li>
                    <li><a href="#">Đồ uống</a></li>
                    <li><a href="#">Sức khỏe & Sắc đẹp</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-md-8 col-sm-7">
              <div class="tpfooter__widget footer-col-4 mb-50">
                <h4 class="tpfooter__widget-title">Bản tin của chúng tôi</h4>
                <div class="tpfooter__widget-newsletter">
                  <p>
                    Đăng ký nhận bản tin của Orfarm để nhận thông tin cập nhật
                    về sản phẩm mới & thông tin khác.
                  </p>
                  <form action="index.html">
                    <span
                      ><i><img src="../assets/img/shape/message-1.svg" alt="" /></i
                    ></span>
                    <input type="email" placeholder="Địa chỉ email của bạn..." />
                    <button class="tpfooter__widget-newsletter-submit tp-news-btn">
                      Đăng ký
                    </button>
                  </form>
                  <div class="tpfooter__widget-newsletter-check mt-10">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Tôi chấp nhận các điều khoản & chính sách bảo mật.
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tpfooter___bottom pt-40 pb-40">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-7 col-sm-12">
              <div class="tpfooter__copyright">
                <span class="tpfooter__copyright-text"
                  >Bản quyền © <a href="#">ORFARM</a> - Đã đăng ký bảo lưu mọi quyền.
                  Được hỗ trợ bởi <a href="#">ThemePure</a>.</span
                >
              </div>
            </div>
            <div class="col-lg-6 col-md-5 col-sm-12">
              <div class="tpfooter__copyright-thumb text-end">
                <img src="../assets/img/shape/footer-payment.png " alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Top -->
    <button
      class="scroll-top scroll-to-target"
      :class="{ open: isScrollOpen }"
      data-target="html"
      @click="scrollToTop"
    >
      <i class="icon-chevrons-up"></i>
    </button>
  </footer>
</template>

<style scoped>
.mainfeature__bg {
  background-image: url('../assets/img/shape/footer-shape-1.svg');
  background-repeat: repeat-x;
}

.mainfeature__border {
  border-bottom: 1px solid #484492;
}
.mainfeature__icon {
  margin-bottom: 10px;
}
.mainfeature__icon img {
  height: 25px;
  width: 25px;
}
.mainfeature__title {
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  color: var(--tp-common-white);
  margin-bottom: 2px;
}
.mainfeature__content p {
  color: var(--tp-grey-10);
  font-size: 14px;
  margin-bottom: 0;
}
.tpfooter__top {
  border-bottom: 1px solid #484492;
}
.tpfooter__widget-title {
  text-transform: uppercase;
  font-weight: 700;
  font-size: 14px;
  color: var(--tp-common-white);
  margin-bottom: 30px;
}
.tpfooter__widget p {
  color: var(--tp-grey-10);
  font-size: 16px;
  margin-bottom: 0;
}
.tpfooter__widget p a {
  color: var(--tp-heading-secondary);
}
.tpfooter__widget-social-title {
  color: var(--tp-grey-10);
  display: block;
}
.tpfooter__widget-social a {
  color: var(--tp-common-white);
  font-size: 16px;
  margin-right: 5px;
}
.tpfooter__widget-time-info span {
  font-size: 16px;
  color: var(--tp-grey-10);
  display: block;
}
.tpfooter__widget-time-info span b {
  font-weight: 400;
  font-size: 16px;
  color: var(--tp-common-white);
}
.tpfooter__widget-links ul {
  padding-left: 0;
}
.tpfooter__widget-links ul li {
  list-style: none;
}
.tpfooter__widget-links ul li a {
  font-size: 16px;
  color: var(--tp-grey-10);
  -webkit-transition: all 0.3s ease-out 0s;
  -moz-transition: all 0.3s ease-out 0s;
  -ms-transition: all 0.3s ease-out 0s;
  -o-transition: all 0.3s ease-out 0s;
  transition: all 0.3s ease-out 0s;
  display: inline-block;
  margin-bottom: 8px;
}
.tpfooter__widget-links ul li a:hover {
  color: var(--tp-common-white);
  padding-left: 8px;
}
.tpfooter__widget-newsletter p {
  font-size: 16px;
  color: var(--tp-common-white);
  margin-bottom: 20px;
}
.tpfooter__widget-newsletter p {
  font-size: 16px;
  color: var(--tp-common-white);
  margin-bottom: 20px;
}
.tpfooter__widget-newsletter form {
  position: relative;
}
.tpfooter__widget-newsletter form span {
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
}
.tpfooter__widget-newsletter form input {
  border-radius: 3px;
  height: 50px;
  width: 100%;
  background-color: var(--tp-common-white);
  border: none;
  padding: 5px 150px 5px 50px;
}
.tpfooter__widget-newsletter-submit {
  position: absolute;
  right: 2px;
  top: 50%;
  transform: translateY(-50%);
}
.tpfooter__widget-newsletter-check .form-check-label {
  font-size: 14px;
  color: var(--tp-common-white);
}
.tpfooter__copyright-text {
  font-size: 16px;
  color: var(--tp-grey-10);
}
.tpfooter__copyright-text a {
  color: var(--tp-heading-secondary);
}
.tpfooter__copyright-thumb img {
  max-width: 100%;
}
.scroll-top.open {
  bottom: 30px;
}
.icon-chevrons-up:before {
  content: '\f102';
  font: normal normal normal 14px/1 FontAwesome;
}

.scroll-top::after {
  position: absolute;
  z-index: -1;
  content: '';
  top: 100%;
  left: 5%;
  height: 10px;
  width: 90%;
  background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0) 80%);
}
.footer-border {
    border-top: 2px solid var(--tp-heading-secondary);
}
.tpfooter__area.footer-border{
  padding-top:55px;
}

.mainfeature__item:hover .mainfeature__icon img {
    animation: animation-plus 1s infinite linear alternate;
}
.tpfooter__widget-social a:hover {
    color: var(--tp-heading-secondary);
}
</style>
