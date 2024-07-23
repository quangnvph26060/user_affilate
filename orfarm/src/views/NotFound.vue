<script setup>

</script>

<template>
   <section class="error-area pt-80 pb-80">
      <div class="container">
          <div class="row justify-content-center">
              <div class="col-xxl-6 col-lg-8 col-md-11">
                  <div class="tperror__wrapper text-center">
                      <div class="tperror__thumb p-relative mb-55">
                          <img src="../assets/img/shape/erorr-bg.png" alt="">
                          <div class="tperror__shape">
                              <img src="../assets/img/shape/erorr-shape.png" alt="">
                          </div>
                      </div>
                      <div class="tperror__content">
                          <h4 class="tperror__title mb-25">Ối... Liên kết này đã bị hỏng.</h4>
                          <p>Xin lỗi vì sự bất tiện này. Truy cập trang chủ của chúng tôi hoặc xem các bộ sưu tập mới nhất.</p>
                          <div class="tperror__btn">
                              <a href="/">Quay lại trang chủ</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
</template>

<style scoped>
.tperror__thumb > img {
    animation: left-right 3s infinite linear;
    max-width: 100%;
}
.tperror__shape {
    position: absolute;
    bottom: -22px;
    left: 50%;
    transform: translateX(-60%);
    z-index: -1;
}
.tperror__shape img {
    max-width: 100%;
}
.tperror__title {
    font-family: "Quicksand";
    font-weight: 700;
    font-size: 48px;
    line-height: 40px;
    letter-spacing: -0.03em;
    color: var(--tp-heading-primary);
}
.tperror__content p {
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    color: var(--tp-text-body);
    margin-bottom: 45px;
}
.tperror__btn a {
    font-weight: 600;
    font-size: 13px;
    line-height: 19px;
    text-align: center;
    text-transform: uppercase;
    color: var(--tp-common-white);
    background-color: var(--tp-heading-secondary);
    display: inline-block;
    padding: 16px 35px;
    border-radius: 30px;
}
.tperror__btn a:hover {
   background-color: #859A00;
}
@media (max-width: 767px) {
    .tperror__title {
        font-size: 22px;
    }
}


</style>
