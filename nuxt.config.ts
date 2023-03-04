
export default defineNuxtConfig({
    app: {
        head: {
            script: [
                {
                    children: `https://cdnjs.cloudflare.com/ajax/libs/echarts/5.4.1/echarts.min.js`,
                    type: "text/javascript",
                    async: true,
                },

            ],
            charset: "utf-8",
            title: "Esmael Project",
            meta: [
                {
                    name: "description",
                    content:
                        "پرشین سایکولوژی جلسات آنلاین روانشناسی را در هر مکان و هر زمان با بهترین قیمت، تخصص و امنیت به شما ارائه می دهد",
                },
            ]
        },
    },
    modules: ["@nuxtjs/tailwindcss"],
    build: {
        transpile: ["@heroicons/vue", "@headlessui/vue","apexcharts"]
    },
    css: ["@/assets/main.css"]
});
