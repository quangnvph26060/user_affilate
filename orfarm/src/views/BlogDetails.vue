<script setup>
import BreadCrumb from '@/components/BreadCrumb.vue'
import {reactive,  ref } from 'vue'

const breadCrumbPath = [{ route: '/', name: 'Trang chủ' }, { route: '/', name:'Lối sống' },{name:'Những Công Dụng Tuyệt Vời Nhất Của Thịt Bò Tươi Đối Với Sức Khỏe Phụ Nữ'}]
const form = reactive({
      name: '',
      email: '',
      message: '',
      saveInfo: false
    });
</script>

<template>
    <BreadCrumb :breadCrumbPath="breadCrumbPath"/>
    <section class="blog-details-area pb-50">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="tp-blog-details__thumb">
                    <img src="../assets/img/blog/blog-details-1.jpg" alt="">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xl-10 col-lg-12 mx-auto">
                <div class="tp-blog-details__wrapper">
                    <div class="tp-blog-details__content">
                        <div class="tpblog__entry-wap" style="margin-bottom:5px;">
                            <span class="cat-links"><a href="shop-details.html">Phong cách sống</a></span>
                            <span class="author-by"><a href="#">Quản trị viên</a></span>
                            <span class="post-data"><a href="#">15 THÁNG 9, 2022</a></span>
                        </div>
                        <h2 class="tp-blog-details__title mb-25">Những Lợi Ích Tuyệt Vời Của Thịt Bò Tươi Đối Với Sức Khỏe Phụ Nữ</h2>
                        <p>
                            Đây là những người làm cho cuộc sống của bạn trở nên dễ dàng hơn. Các viên gạch lớn được sắp xếp trên mặt bàn gần cửa sổ của phòng khách, chúng được kết nối với nhà bếp. Cách hoàn hảo để thưởng thức pha trà trên những quả trái cây treo thấp để nhận diện. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                        </p>
                        <p>
                            Các viên gạch lớn được sắp xếp trên mặt bàn gần cửa sổ của phòng khách, chúng được kết nối với nhà bếp qua khe hở trên tường của tòa nhà hiện có. Đối với tôi, phần quan trọng nhất của việc cải thiện kỹ năng chụp ảnh là chia sẻ nó. Đăng ký tài khoản Exposure, hoặc đăng thường xuyên lên Tumblr, hoặc cả hai. Nói với mọi người rằng bạn đang cố gắng cải thiện kỹ năng chụp ảnh của mình.
                        </p>
                        <div class="tp-blog-details__quation pt-15 pb-40 text-center">
                            <i>“ Đĩa ở đáy bát có thể được xoay ngược chiều kim đồng hồ để <br> thoát nước khi rửa rau và có thể được xoay. ”</i>
                        </div>
                        <p>
                            Form là một chiếc ghế không tay hiện đại với biểu hiện tối giản. Với thiết kế đơn giản và hiện đại, Foody có hình dáng mềm mại và chào đón cùng một cái nhìn rõ ràng là dành cho gia đình. Các chân ghế xuất hiện như thể chúng đang mọc ra từ vỏ ghế. Điều này mang lại sự linh hoạt cho thiết kế và làm cho việc thay đổi khung ghế trở nên khả thi. Unika là một loạt đèn treo bằng thủy tinh nhỏ, được thổi bằng miệng, ban đầu được thiết kế cho nhà hàng.
                        </p>
                    </div>
                    <div class="tp-blog-details__img">
                        <div class="row">
                            <div class="col-lg-6 col-md-6">
                                <div class="tp-blog-details__img-item mb-30">
                                    <img src="../assets/img/blog/blog-details-sm-1.jpg" alt="">
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="tp-blog-details__img-item mb-30">
                                    <img src="../assets/img/blog/blog-details-sm-2.jpg" alt="">
                                </div>
                            </div>
                            <div class="col-lg-12 col-md-12">
                                <div class="tp-blog-details__img-item mb-30">
                                    <img src="../assets/img/blog/blog-details-sm-3.jpg" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tp-blog-details__content">
                        <p>
                            Việc bị nhốt trong bốn bức tường đã hạn chế suy nghĩ của chúng ta. Tôi cảm thấy như suy nghĩ hạn chế của chúng ta vang vọng qua bức tường này. Chúng ta đã quá quen với lịch trình và cuộc sống có thể dự đoán được đến mức đã thành công trong việc đàn áp khía cạnh sáng tạo của mình. Khi bạn bước ra khỏi bốn bức tường này vào một buổi sáng yên bình, bạn sẽ nhận ra thiên nhiên có rất nhiều điều để cung cấp cho bạn. Nó là vô hạn. Suy nghĩ, lo lắng, hạn chót của bạn sẽ không vang vọng ở đây.
                        </p>
                        <p>
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione sequi nesciunt. Họ sẽ cùng bạn tham gia các chuyến đi bộ chụp ảnh.
                        </p>
                    </div>
                    <div class="postbox__tag-border mb-45">
                        <div class="row align-items-center">
                            <div class="col-xl-7 col-lg-6 col-md-12">
                                <div class="postbox__tag">
                                    <div class="postbox__tag-list tagcloud">
                                        <span>Gắn thẻ: </span>
                                        <a href="blog.html">Nội thất</a>
                                        <a href="blog.html">Bàn</a>
                                        <a href="blog.html">Thời trang</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-5 col-lg-6 col-md-12">
                                <div class="postbox__social-tag">
                                    <span>chia sẻ:</span>
                                    <a class="blog-d-lnkd" href="#"><i class="fab fa-linkedin-in"></i></a>
                                    <a class="blog-d-pin" href="#"><i class="fab fa-pinterest-p"></i></a>
                                    <a class="blog-d-fb" href="#"><i class="fab fa-facebook-f"></i></a>
                                    <a class="blog-d-tweet" href="#"><i class="fab fa-twitter"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tp-blog-details__post-link mb-15">
                        <div class="row">
                            <div class="col-lg-6 col-md-6">
                                <div class="tp-blog-details__post-item mb-30">
                                    <span><i class="fa fa-chevron-left"></i> Bài Viết Trước</span>
                                    <a href="#">Những Lý Do Phổ Biến Bạn Phải Uống <br> Nước Ép Mỗi Ngày</a>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="tp-blog-details__post-item text-end mb-30">
                                    <span>Bài Viết Tiếp Theo <i class="fa fa-chevron-right"></i></span>
                                    <a href="#">Chuyển Giao Các Trang Phục Yêu Thích Của Bạn Vào <br> Mùa Thu Pháp </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tp-blog-details__author d-flex  mb-45">
                        <div class="tp-blog-details__author-img mr-30">
                            <img src="../assets/img/blog/blog-details-author.jpg" alt="">
                        </div>
                        <div class="tp-blog-details__author-text">
                            <h3 class="tp-blog-details__author-title">MICHAEL ANTHONY</h3>
                            <p>Các viên gạch có khả năng chống nước và bụi bẩn cao và có thể được làm sạch, vì vậy chúng phù hợp với việc trồng cây và nấu ăn và các chức năng khác.</p>
                            <a href="#" class="author-btn">Tất Cả Bài Viết Của Tác Giả</a>
                        </div>
                    </div>
                    <div class="postbox__comment mb-65">
                        <h3 class="postbox__comment-title mb-35">ĐỂ LẠI BÌNH LUẬN</h3>
                        <ul>
                            <li>
                                <div class="postbox__comment-box d-flex">
                                    <div class="postbox__comment-info">
                                        <div class="postbox__comment-avater mr-25">
                                            <img src="../assets/img/blog/comment-1.jpg" alt="">
                                        </div>
                                    </div>
                                    <div class="postbox__comment-text">
                                        <div class="postbox__comment-name">
                                            <h5>Kristin Watson</h5>
                                        </div>
                                        <p>Các viên gạch có khả năng chống nước và bụi bẩn cao và có thể được làm sạch, vì vậy chúng phù hợp với việc trồng cây và nấu ăn và các chức năng khác. Có ít plugin và ứng dụng có sẵn cho mục đích này, nhiều trong số đó yêu cầu đăng ký hàng tháng.</p>
                                        <div class="postbox__comment-reply">
                                            <a href="#">Để Lại Trả Lời</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="children mb-30">
                                <div class="postbox__comment-box pl-90 d-flex">
                                    <div class="postbox__comment-info">
                                        <div class="postbox__comment-avater mr-25">
                                            <img src="../assets/img/blog/comment-2.jpg" alt="">
                                        </div>
                                    </div>
                                    <div class="postbox__comment-text">
                                        <div class="postbox__comment-name">
                                            <h5>Brooklyn Simmons</h5>
                                        </div>
                                        <p>Đưa vào các ví dụ kinh nghiệm cá nhân của bạn, hoặc những điều bạn nhận thấy mà bạn <br> cảm thấy người khác sẽ thấy hữu ích.</p>
                                        <div class="postbox__comment-reply">
                                            <a href="#">Để Lại Trả Lời</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="postbox__comment-box d-flex">
                                    <div class="postbox__comment-info">
                                        <div class="postbox__comment-avater mr-25">
                                            <img src="../assets/img/blog/comment-3.jpg" alt="">
                                        </div>
                                    </div>
                                    <div class="postbox__comment-text">
                                        <div class="postbox__comment-name">
                                            <h5>Kristin Watson</h5>
                                        </div>
                                        <p>Các viên gạch có khả năng chống nước và bụi bẩn cao và có thể được làm sạch, vì vậy chúng phù hợp với việc trồng cây và nấu ăn và các chức năng khác. Có ít plugin và ứng dụng có sẵn cho mục đích này, nhiều trong số đó yêu cầu đăng ký hàng tháng.</p>
                                        <div class="postbox__comment-reply">
                                            <a href="#">Để Lại Trả Lời</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="tpreview__form postbox__form">
    <h4 class="tpreview__form-title mb-10">ĐỂ LẠI PHẢN HỒI</h4>
    <p>Địa chỉ email của bạn sẽ không được công bố. Các trường bắt buộc được đánh dấu *</p>
    <form @submit.prevent="submitForm">
      <div class="row">
        <div class="col-lg-6">
          <div class="tpreview__input mb-30">
            <input type="text" v-model="form.name" placeholder="Tên" required>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="tpreview__input mb-30">
            <input type="email" v-model="form.email" placeholder="Email" required>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="tpreview__input mb-5">
            <textarea v-model="form.message" placeholder="Lời nhắn" required></textarea>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="tpfooter__widget-newsletter-check postbox__check-box">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" v-model="form.saveInfo" id="flexCheckDefault2">
              <label class="form-check-label" for="flexCheckDefault2">
                Lưu tên, email và trang web của tôi trong trình duyệt này cho lần bình luận tiếp theo.
              </label>
            </div>
          </div>
          <div class="tpreview__submit mt-25">
            <button class="tp-btn" type="submit">Đăng Bình Luận</button>
          </div>
        </div>
      </div>
    </form>
  </div>
                </div>
            </div>
        </div>
    </div>
</section>

</template>
<style scoped>
.tp-blog-details__thumb img {
    max-width: 100%;
}
.tp-blog-details__wrapper {
    padding: 35px 70px 30px 70px;
    margin-top: -120px;
    background-color: var(--tp-common-white);
}
.tpblog__entry-wap .cat-links {
    color: var(--tp-heading-secondary);
}

@media only screen and (min-width: 1400px) and (max-width: 1600px), only screen and (min-width: 1200px) and (max-width: 1399px), only screen and (min-width: 576px) and (max-width: 767px) {
    .tpblog__entry-wap span {
        margin-right: 4px;
        padding-right: 7px;
    }
}
.tpblog__entry-wap span {
    font-weight: 500;
    font-size: 12px;
    text-transform: uppercase;
    margin-right: 8px;
    padding-right: 10px;
    position: relative;
    display: inline-block;
    margin-bottom: 8px;
}
.tpblog__entry-wap span::after {
    position: absolute;
    content: "";
    height: 3px;
    width: 3px;
    border-radius: 50%;
    background-color: #CFD4DE;
    top: 50%;
    transform: translateY(-50%);
    right: 0px;
}
.tpblog__entry-wap a{
    color:inherit;
}
.tp-blog-details__title {
    font-weight: 700;
    font-size: 40px;
    line-height: 1.11;
    color: var(--tp-heading-primary);
}
.tp-blog-details__content p {
    font-size: 18px;
    line-height: 1.5;
    color: var(--tp-text-body);
    margin-bottom: 25px;
}
.tp-blog-details__quation {
    font-family: var(--tp-ff-jost);
    font-style: italic;
    font-weight: 400;
    font-size: 24px;
    line-height: 1.25;
    color: var(--tp-heading-primary);
}
.tp-blog-details__img-item img{
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
}
.tp-blog-details__img-item {
    display:flex;
    justify-content:center;
}

.postbox__tag-border {
    padding-top: 15px;
    padding-bottom: 25px;
    border-bottom: 1px solid #E6ECF0;
}
.postbox__tag-list span, .postbox__social-tag span {
    font-family: var(--tp-ff-jost);
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 17px;
    text-transform: uppercase;
    color: var(--tp-heading-primary);
    display: inline-block;
    margin-right: 8px;
}
.tagcloud a {
    font-family: var(--tp-ff-jost);
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: var(--tp-text-body);
    background: var(--tp-border-3);
    padding: 8px 20px;
    display: inline-block;
    border-radius: 30px;
    margin: 0px 5px 5px 5px;
}
.postbox__social-tag {
    text-align: end;
}
.postbox__tag-border a{
    color: inherit; 
}
.postbox__social-tag a {
    margin-left: 5px;
}
.tp-blog-details__post-item span {
    font-family: var(--tp-ff-jost);
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 17px;
    color: var(--tp-text-3);
    display: block;
    margin-bottom: 10px;
}
.tp-blog-details__post-item a {
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
    letter-spacing: -0.03em;
    color: var(--tp-heading-primary);
    display: block;
}
.tp-blog-details__post-item span i {
    font-size: 12px;
}
.tp-blog-details__author {
    background-color: var(--tp-grey-8);
    padding: 40px;
    border: 1px solid #EBEBF3;
    border-radius: 10px;
}
.tp-blog-details__author-img {
    flex: 0 0 auto;
}
.tp-blog-details__author-img img {
    height: 80px;
    width: 80px;
    border-radius: 50%;
    object-fit: cover;
}
.tp-blog-details__author-title {
    font-family: var(--tp-ff-jost);
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 17px;
    text-transform: uppercase;
    color: var(--tp-heading-primary);
}
.tp-blog-details__author-text p {
    font-family: var(--tp-ff-jost);
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    color: #4D5574;
    margin-bottom: 20px;
}
.tp-blog-details__author-text .author-btn {
    font-family: var(--tp-ff-jost);
    font-weight: 600;
    font-size: 12px;
    line-height: 17px;
    text-transform: uppercase;
    color: var(--tp-common-white);
    background-color: var(--tp-heading-primary);
    padding: 11px 33px;
    border-radius: 30px;
}
.postbox__comment-title {
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    letter-spacing: -0.03em;
    text-transform: uppercase;
    color: var(--tp-heading-primary);
}
.postbox__comment ul li {
    list-style: none;
}
.postbox__comment-box {
    border-bottom: 1px dashed #E6ECF0;
    margin-bottom: 30px;
    padding-bottom: 30px;
}
.postbox__comment-avater img {
    height: 70px;
    width: 70px;
    border-radius: 50%;
    object-fit: cover;
}
.postbox__comment-name h5 {
    font-family: var(--tp-ff-jost);
    font-weight: 600;
    font-size: 12px;
    line-height: 17px;
    text-transform: uppercase;
    color: var(--tp-heading-primary);
}
.postbox__comment-text p {
    font-family: var(--tp-ff-jost);
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    color: var(--tp-text-body);
}
.postbox__comment-reply a {
    font-family: var(--tp-ff-jost);
    font-weight: 500;
    font-size: 12px;
    line-height: 17px;
    text-transform: uppercase;
    color: var(--tp-heading-secondary);
}

.tpreview__form-title {
    color: var(--tp-heading-primary);
    font-weight: 600;
    font-size: 20px;
}

.postbox__form p {
    font-family: var(--tp-ff-jost);
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    color: var(--tp-text-body);
    margin-bottom: 25px;
}
.tpreview__input input {
    height: 60px;
    width: 100%;
    border: 1px solid var(--tp-border-1);
    border-radius: 30px;
    padding: 5px 30px;
}
.tpreview__input textarea {
    width: 100%;
    padding: 10px;
    height: 220px;
    border: 1px solid var(--tp-border-1);
    border-radius: 10px;
    outline: 0;
}
.form-check {
    display: block;
    min-height: 1.5rem;
    padding-left: 1.5em;
    margin-bottom: .125rem;
}
.tpfooter__widget-newsletter-check .form-check-input.form-check-input[type=checkbox] {
    border-radius: 2px;
}
.tpfooter__widget-newsletter-check .form-check-label {
    font-size: 14px;
    color: var(--tp-common-white);
}

.postbox__check-box label {
    font-family: var(--tp-ff-jost);
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    color: var(--tp-text-body) !important;
}
.tagcloud a:hover {
    background-color: var(--tp-heading-secondary);
    color: var(--tp-common-white);
}
.tp-blog-details__post-item a:hover {
    color: var(--tp-heading-secondary);
}
.tp-blog-details__author-text .author-btn:hover {
    background-color: var(--tp-heading-secondary);
}
@media (max-width: 767px) {
    .tp-blog-details__wrapper {
        padding: 35px 15px 30px 15px;
        margin-top: 0;
    }
    .tp-blog-details__title {
        font-size: 18px;
    }
    .tp-blog-details__content p {
        font-size: 16px;
    }
    .tp-blog-details__quation {
        font-size: 17px;
    }
    .tagcloud a {
        padding: 4px 15px;
    }
    .postbox__social-tag {
        text-align: start;
    }
    .tp-blog-details__author {
        flex-wrap: wrap;
        padding: 40px 15px 40px 15px;
    }
    .tp-blog-details__author-img {
        margin-right: 0;
        margin-bottom: 20px;
    }
    .postbox__comment-box {
        padding-left: 0;
    }
}
</style>
