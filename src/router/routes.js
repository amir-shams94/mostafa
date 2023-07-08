const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/seller",
        name: "TemplateStatesSell",
        component: () => import("components/sell/TemplateSell.vue"),
        children: [
          {
            path: "",
            name: "statesIndexSell",
            component: () => import("components/sell/IndexSell.vue"),
          },
          {
            path: "/states/:state",
            name: "citiesSell",
            component: () => import("components/sell/IndexCites.vue"),
          },
          {
            path: "/states/:state/city/:city",
            name: "sentSell",
            component: () => import("components/sell/FormSend.vue"),
          },
          {
            path: "/kindOfProperty",
            name: "kindOfPropertySell",
            component: () => import("components/sell/kindOfProperty.vue"),
          },
          {
            path: "/criteria",
            name: "criteriaSell",
            component: () => import("components/sell/HomeCriteria.vue"),
          },
          {
            path: "/approximatly",
            name: "approximatlySell",
            component: () => import("components/sell/ApproximatlyHome.vue"),
          },
          {
            path: "/payment",
            name: "paymentSell",
            component: () => import("components/sell/PaymentSell.vue"),
          },
          {
            path: "/reason",
            name: "reasonSell",
            component: () => import("components/sell/WhatReason.vue"),
          },
          {
            path: "/information",
            name: "informationSell",
            component: () => import("components/sell/PersonalInformation.vue"),
          },
          {
            path: "/congratulations",
            name: "congratulationsSell",
            component: () => import("components/sell/CongratulationsPage.vue"),
          },
        ],
      },
      {
        path: "/buyer",
        name: "TemplateStates",
        component: () => import("components/buy/TemplateBuy.vue"),
        children: [
          {
            path: "",
            name: "statesIndex",
            component: () => import("components/buy/IndexBuy.vue"),
          },
          {
            path: "/states/:state",
            name: "cities",
            component: () => import("components/buy/IndexCites.vue"),
          },
          {
            path: "/states/:state/city/:city",
            name: "sent",
            component: () => import("components/buy/FormSend.vue"),
          },
          {
            path: "/kindOfProperty",
            name: "kindOfProperty",
            component: () => import("components/buy/kindOfProperty.vue"),
          },
          {
            path: "/criteria",
            name: "criteria",
            component: () => import("components/buy/HomeCriteria.vue"),
          },
          {
            path: "/approximatly",
            name: "approximatly",
            component: () => import("components/buy/ApproximatlyHome.vue"),
          },
          {
            path: "/payment",
            name: "payment",
            component: () => import("components/buy/PaymentBuy.vue"),
          },
          {
            path: "/reason",
            name: "reason",
            component: () => import("components/buy/WhatReason.vue"),
          },
          {
            path: "/information",
            name: "information",
            component: () => import("components/buy/PersonalInformation.vue"),
          },
          {
            path: "/congratulations",
            name: "congratulations",
            component: () => import("components/buy/CongratulationsPage.vue"),
          },
        ],
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
