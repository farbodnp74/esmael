<template>
  <nav class="grid grid-cols-10 bg-[#f9fafb] p-5" dir="rtl">
    <div class="inline-block inline-flex col-span-2">
      <img class="h-12 w-12" src="https://torob.com/static/images/logo_original.png">
      <p class="text-red-500 text-3xl font-bold pt-2 px-2">
        ترب
      </p>
    </div>
    <div class="col-span-2">
      <input/>
    </div>
    <div class="col-span-3">

    </div>
    <div class="col-span-3 " dir="ltr">
      <button class="border border-gray-700 p-3 rounded-lg">
        ثبت نام / ورود
      </button>
    </div>

  </nav>
  <nav class="grid grid-cols-10 bg-[#f9fafb] px-5 pb-5" dir="rtl">
    <div class="mx-auto text-center">
      <p class="text-gray-700 hover:text-red-500 text-sm font-medium pt-2 px-2">
        موبایل و کالای دیجیتال
      </p>
    </div>
    <div class="mx-auto text-center">
      <p class="text-gray-700 hover:text-red-500 text-sm font-medium pt-2 ">
        لپ‌تاپ، کامپیوتر، اداری
      </p>
    </div>
    <div class="mx-auto text-center">
      <p class="text-gray-700 hover:text-red-500 text-sm font-medium pt-2 ">
        لپ‌تاپ، کامپیوتر، اداری
      </p>
    </div>
    <div class="mx-auto text-center">
      <p class="text-gray-700 hover:text-red-500 text-sm font-medium pt-2 ">
        هایپر مارکت
      </p>
    </div>
    <div class="mx-auto text-center">
      <p class="text-gray-700 hover:text-red-500 text-sm font-medium pt-2 ">
        مد و پوشاک
      </p>
    </div>
    <div class="mx-auto text-center">
      <p class="text-gray-700 hover:text-red-500 text-sm font-medium pt-2 ">
        زیبایی و بهداشت
      </p>
    </div>
    <div class="mx-auto text-center">
      <p class="text-gray-700 hover:text-red-500 text-sm font-medium pt-2 ">
        صوتی و تصویری
      </p>
    </div>
    <div class="mx-auto text-center">
      <p class="text-gray-700 hover:text-red-500 text-sm font-medium pt-2 ">
        خودرو و سایر وسایل نقلیه
      </p>
    </div>
  </nav>
  <div class="min-h-screen bg-slate-100 w-full" dir="rtl">
    <nav aria-label="Progress" class="hidden sm:block px-5 py-3 ">
      <ol role="list" class="flex px-24">
        <li v-for="(step, stepIdx) in steps" :key="step.name" class="flex  items-center">
          <a :href="step.href" aria-current="page" class="hover:text-red-600 text-sm text-gray-600">{{ step.name }}</a>

          <ChevronLeftIcon v-if="stepIdx !== steps.length - 1" class="w-5 h-5  text-gray-600 mx-4" aria-hidden="true" />
        </li>
      </ol>
    </nav>
    <div class="w-full grid  px-12 grid-cols-3">
      <div class="col-span-2 bg-white m-5 p-5 rounded-lg">
       <div class="grid grid-cols-4 px-5">
         <div>
           <img src="https://storage1.torob.com/backend-api/base/images/_s/_a/_s_aGvzoB6MekVjG.png_/216x216.jpg"/>
         </div>
         <div class="col-span-3 px-12 pt-8 font-bold ">
           مانیتور شیائومی Mi Curved Gaming Monitor نمایشگر منحنی 34 اینچ ا Mi Curved Gaming Monitor 34
            <br/>
           <p class="text-red-600 pt-8">
             از ۱۷٫۶۰۰٫۰۰۰ تومان تا ۳۲٫۵۰۰٫۰۰۰ تومان
           </p>

         </div>
         <div></div>
         <div class=" text-white px-12 col-span-2 grid">
           <div class="-mt-4 inline-flex">
             <button class="bg-[#d73948] rounded-lg px-4 py-2 w-full">
               خرید از ارزان ترین فروشنده
             </button>
           </div>
         </div>
         <div class=" text-white grid">
           <div class="-mt-4 inline-flex">
             <button class="bg-[#d73948] rounded-lg px-4 py-2 w-full">
             </button>
           </div>
         </div>
       </div>
      </div>
      <div class="bg-white m-5 p-5 rounded-lg h-64 mb-5" dir="rtl">
        <p class="font-bold text-lg">
          لیست تغییرات قیمت
        </p>

        <div id="main" class="" >

        </div>

      </div>

    </div>
    <div class="w-full grid  px-12 grid-cols-3">
      <div class="col-span-2 bg-white m-5 p-5 rounded-lg">
        <div class="w-full px-5">
          <div class="font-bold inline-flex w-full inline-block text-lg" dir="rtl">
           فروشنده ها
            </div>
          <br/>
              <p class="pt-5 inline-flex inline-block border-b pb-2  border-gray-200 ">
              خرید اینترنتی
          </p>
          <br/>

        </div>
      </div>
      <div class="bg-white overflow-y-scroll scrollbar h-96 m-5 p-5 rounded-lg" dir="rtl">
        <p class="font-bold text-lg" dir="rtl">
          مشخصات مانیتور شیائومی Mi Curved Gaming Monitor نمایشگر منحنی 34 اینچ ا Mi Curved Gaming Monitor 34
        </p>
        <p class="pt-5 border-b pb-2  border-gray-200 ">
          مشخصات کلی
        </p>
        <br/>
        <div class=" pb-2  text-gray-600">
          <p class="text-gray-800 font-medium">
            سری مدل
          </p>
            <p class="text-gray-400">
              XMMNT
            </p>
        </div>
        <br/>
        <div class=" pb-2  text-gray-600">
          <p class="text-gray-800 font-medium">
            برند
          </p>
          <p class="text-gray-400">

            شیائومی
          </p>
        </div>
        <br/>
        <div class=" pb-2  text-gray-600">
          <p class="text-gray-800 font-medium">
            سال ساخت
          </p>
          <p class="text-gray-400">

            2020
          </p>
        </div>
        <br/>
        <div class=" pb-2  text-gray-600">
          <p class="text-gray-800 font-medium">
            قطعات
          </p>
          <p class="text-gray-400">

            چین
          </p>
        </div>
        <br/>
        <div class=" pb-2  text-gray-600">
          <p class="text-gray-800 font-medium">
            قطعات
          </p>
          <p class="text-gray-400">

            چین
          </p>
        </div>
        <br/>
        <div class=" pb-2  text-gray-600">
          <p class="text-gray-800 font-medium">
            قطعات
          </p>
          <p class="text-gray-400">

            چین
          </p>
        </div>
        <br/>
        <div class=" pb-2  text-gray-600">
          <p class="text-gray-800 font-medium">
            قطعات
          </p>
          <p class="text-gray-400">

            چین
          </p>
        </div>
        <br/>


      </div>

    </div>
  </div>

</template>

<script setup>

const steps = [
  { name: 'ترب', href: '#', status: 'complete' },
  { name: '   لپ‌تاپ، کامپیوتر، اداری', href: '#', status: 'complete' },
  { name: 'کامپیوتر', href: '#', status: 'complete' },
]
import { ChevronLeftIcon, ChevronUpIcon } from '@heroicons/vue/solid'
import * as echarts from 'echarts';

if (process.client){
  var chartDom = document.getElementById('main');
  var myChart = echarts.init(chartDom);
  var option;
  option = {
    xAxis: {
      type: '',
      data: []
    },
    yAxis: {
      type: ''
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
      }
    ]
  };

  option && myChart.setOption(option);
}







</script>

<style scoped>

  .scrollbar::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  .scrollbar::-webkit-scrollbar-track {
    border-radius: 100vh;
    background: #f7f4ed;
  }

  .scrollbar::-webkit-scrollbar-thumb {
    background: #e6e6e6;
    border-radius: 100vh;
    border: 2px solid #f6f7ed;
  }

  .scrollbar::-webkit-scrollbar-thumb:hover {
    background: #e6e6e6;
  }
  #main {
    height: 250px !important;
    width: 400px!important;

  }

</style>
