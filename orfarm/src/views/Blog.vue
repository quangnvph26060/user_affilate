<script setup>
import Pagination from '@/components/Pagination.vue'
import BlogSlider from '@/components/BlogSlider.vue'
const blogs = [
  {
    title: 'Cá Hồi Nướng Bơ, Giàu Dinh Dưỡng Cho Cơ Thể',
    image: '../assets/img/blog/blog-bg-8.jpg',
    link: 'blog-details.html',
    category: 'Phong Cách Sống',
    categoryLink: 'shop-details.html',
    author: 'Quản Trị Viên',
    authorLink: '#',
    date: '15 THÁNG 9. 2022',
    dateLink: '#',
    excerpt:
      'Đây là những người làm cho cuộc sống của bạn dễ dàng hơn. Egestas là phòng tắm hành lang...'
  },
  {
    title: 'Cá Hồi Nướng Bơ, Giàu Dinh Dưỡng Cho Cơ Thể',
    image: '../assets/img/blog/blog-bg-7.jpg',
    link: 'blog-details.html',
    category: 'Phong Cách Sống',
    categoryLink: 'shop-details.html',
    author: 'Quản Trị Viên',
    authorLink: '#',
    date: '15 THÁNG 9. 2022',
    dateLink: '#',
    excerpt:
      'Đây là những người làm cho cuộc sống của bạn dễ dàng hơn. Egestas là phòng tắm hành lang...'
  },
  {
    title: 'Cá Hồi Nướng Bơ, Giàu Dinh Dưỡng Cho Cơ Thể',
    image: '../assets/img/blog/blog-bg-1.jpg',
    link: 'blog-details.html',
    category: 'Phong Cách Sống',
    categoryLink: 'shop-details.html',
    author: 'Quản Trị Viên',
    authorLink: '#',
    date: '15 THÁNG 9. 2022',
    dateLink: '#',
    excerpt:
      'Đây là những người làm cho cuộc sống của bạn dễ dàng hơn. Egestas là phòng tắm hành lang...'
  },
  {
    title: 'Cá Hồi Nướng Bơ, Giàu Dinh Dưỡng Cho Cơ Thể',
    image: '../assets/img/blog/blog-bg-6.jpg',
    link: 'blog-details.html',
    category: 'Phong Cách Sống',
    categoryLink: 'shop-details.html',
    author: 'Quản Trị Viên',
    authorLink: '#',
    date: '15 THÁNG 9. 2022',
    dateLink: '#',
    excerpt:
      'Đây là những người làm cho cuộc sống của bạn dễ dàng hơn. Egestas là phòng tắm hành lang...'
  },
  {
    title: 'Cá Hồi Nướng Bơ, Giàu Dinh Dưỡng Cho Cơ Thể',
    image: '../assets/img/blog/blog-bg-5.jpg',
    link: 'blog-details.html',
    category: 'Phong Cách Sống',
    categoryLink: 'shop-details.html',
    author: 'Quản Trị Viên',
    authorLink: '#',
    date: '15 THÁNG 9. 2022',
    dateLink: '#',
    excerpt:
      'Đây là những người làm cho cuộc sống của bạn dễ dàng hơn. Egestas là phòng tắm hành lang...'
  },
  {
    title: 'Cá Hồi Nướng Bơ, Giàu Dinh Dưỡng Cho Cơ Thể',
    image: '../assets/img/blog/blog-bg-4.jpg',
    link: 'blog-details.html',
    category: 'Phong Cách Sống',
    categoryLink: 'shop-details.html',
    author: 'Quản Trị Viên',
    authorLink: '#',
    date: '15 THÁNG 9. 2022',
    dateLink: '#',
    excerpt:
      'Đây là những người làm cho cuộc sống của bạn dễ dàng hơn. Egestas là phòng tắm hành lang...'
  },
  {
    title: 'Cá Hồi Nướng Bơ, Giàu Dinh Dưỡng Cho Cơ Thể',
    image: '../assets/img/blog/blog-bg-2.jpg',
    link: 'blog-details.html',
    category: 'Phong Cách Sống',
    categoryLink: 'shop-details.html',
    author: 'Quản Trị Viên',
    authorLink: '#',
    date: '15 THÁNG 9. 2022',
    dateLink: '#',
    excerpt:
      'Đây là những người làm cho cuộc sống của bạn dễ dàng hơn. Egestas là phòng tắm hành lang...'
  },
  {
    title: 'Cá Hồi Nướng Bơ, Giàu Dinh Dưỡng Cho Cơ Thể',
    image: '../assets/img/blog/blog-bg-9.jpg',
    link: 'blog-details.html',
    category: 'Phong Cách Sống',
    categoryLink: 'shop-details.html',
    author: 'Quản Trị Viên',
    authorLink: '#',
    date: '15 THÁNG 9. 2022',
    dateLink: '#',
    excerpt:
      'Đây là những người làm cho cuộc sống của bạn dễ dàng hơn. Egestas là phòng tắm hành lang...'
  },
  {
    title: 'Cá Hồi Nướng Bơ, Giàu Dinh Dưỡng Cho Cơ Thể',
    image: '../assets/img/blog/blog-bg-3.jpg',
    link: 'blog-details.html',
    category: 'Phong Cách Sống',
    categoryLink: 'shop-details.html',
    author: 'Quản Trị Viên',
    authorLink: '#',
    date: '15 THÁNG 9. 2022',
    dateLink: '#',
    excerpt:
      'Đây là những người làm cho cuộc sống của bạn dễ dàng hơn. Egestas là phòng tắm hành lang...'
  }
]
</script>

<template>
  <BlogSlider/>
  <section class="blog-area pt-80">
    <div class="container">
      <div class="row">
        <div class="col-lg-4" v-for="(blog, index) in blogs" :key="index">
          <div class="tpblog__item tpblog__item-2 mb-20">
            <div class="tpblog__thumb fix">
              <a :href="blog.link">
                <img src="../assets/img/blog/blog-bg-8.jpg" :alt="blog.title"
              /></a>
            </div>
            <div class="tpblog__wrapper">
              <div class="tpblog__entry-wap">
                <span class="cat-links"
                  ><a :href="blog.categoryLink">{{ blog.category }}</a></span
                >
                <span class="author-by"
                  ><a :href="blog.authorLink">{{ blog.author }}</a></span
                >
                <span class="post-data"
                  ><a :href="blog.dateLink">{{ blog.date }}</a></span
                >
              </div>
              <h4 class="tpblog__title">
                <a :href="blog.link">{{ blog.title }}</a>
              </h4>
              <p>{{ blog.excerpt }}</p>
              <div class="tpblog__details">
                <a :href="blog.link">Tiếp tục đọc <i class="icon-chevrons-right"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-12 mb-80">
         <Pagination/>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.tpblog__wrapper a {
  color: inherit;
  font-weight: 500;
}
.tpblog__item-2 .tpblog__thumb {
  border-radius: 10px;
}

.tpblog__thumb {
  border-radius: 10px 10px 0 0;
}
.tpblog__thumb img {
  width: 100%;
  -webkit-transition: all 1s ease-out 0s;
  -moz-transition: all 1s ease-out 0s;
  -ms-transition: all 1s ease-out 0s;
  -o-transition: all 1s ease-out 0s;
  transition: all 1s ease-out 0s;
}
.tpblog__item-2 .tpblog__wrapper {
  padding: 20px 28px 20px 0px;
}

.tpblog__wrapper {
  border-radius: 0 0 10px 10px;
  background-color: var(--tp-common-white);
  padding: 20px 28px 20px 30px;
}
.tpblog__entry-wap .cat-links {
  color: var(--tp-heading-secondary);
}

@media only screen and (min-width: 1400px) and (max-width: 1600px),
  only screen and (min-width: 1200px) and (max-width: 1399px),
  only screen and (min-width: 576px) and (max-width: 767px) {
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
  content: '';
  height: 3px;
  width: 3px;
  border-radius: 50%;
  background-color: #cfd4de;
  top: 50%;
  transform: translateY(-50%);
  right: 0px;
}
.tpblog__entry-wap span:last-child {
  margin-right: 0;
  padding-right: 0;
}

.tpblog__title > a {
  font-weight: 700;
  font-size: 18px;
  color: var(--tp-theme-1);
}
@media only screen and (min-width: 1400px) and (max-width: 1600px) {
  .tpblog__title > a {
    font-size: 16px;
  }
}

.tpblog__title {
  margin-bottom: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  word-break: break-word;
}

.tpblog__wrapper p {
  margin-bottom: 25px;
  font-size: 16px;
}
.tpblog__details {
  font-weight: 600;
  text-transform: uppercase;
  font-size: 12px;
  color: var(--tp-heading-secondary);
}
.tpblog__item:hover .tpblog__thumb img {
  transform: scale(1.05);
}
.tpblog__entry-wap .cat-links {
  color: var(--tp-heading-secondary);
}
.basic-pagination ul li:not(:last-child) {
  margin-right: 5px;
}

.basic-pagination ul li {
  display: inline-block;
  list-style: none;
}
.basic-pagination ul li a:hover,
.basic-pagination ul li a.current,
.basic-pagination ul li span:hover,
.basic-pagination ul li span.current {
  background: var(--tp-heading-secondary);
  border-color: var(--tp-heading-secondary);
  color: var(--tp-common-white);
}

.basic-pagination ul li a,
.basic-pagination ul li span {
  display: inline-block;
  width: 40px;
  height: 40px;
  line-height: 38px;
  text-align: center;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -o-border-radius: 50%;
  -ms-border-radius: 50%;
  border-radius: 50%;
  border: 1px solid #dce1e8;
  font-size: 14px;
  font-weight: 600;
  color: var(--tp-text-3);
  -webkit-transition: all 0.2s ease-out 0s;
  -moz-transition: all 0.2s ease-out 0s;
  -ms-transition: all 0.2s ease-out 0s;
  -o-transition: all 0.2s ease-out 0s;
  transition: all 0.2s ease-out 0s;
}
.icon-chevrons-right:before {
  content: '\f101';
  font: normal normal normal 14px/1 FontAwesome;
}
.tpblog__details a i {
    display: inline-block;
    font-size: 16px;
    margin-left: 3px;
    opacity: 0;
    visibility: hidden;
    transition: all 0.2s ease-out 0s;
}
.tpblog__item:hover .tpblog__details a i{
    opacity:100;
    visibility:visible;
}
.tpblog__details a:hover i {
    opacity: 1;
    visibility: visible;
    animation: shakenext 1s ease infinite;
}
.tpblog__title a:hover {
    color: var(--tp-heading-secondary);
}
</style>
