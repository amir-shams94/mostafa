const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/seller',
        name: 'TemplateStatesSell',
        component: () => import('components/sell/TemplateSell.vue'),
        children: [
          {
            path: '',
            name: 'statesIndexSell',
            component: () => import('components/sell/IndexSell.vue'),
          },
          {
            path: '/states/:state',
            name: 'citiesSell',
            component: () => import('components/sell/IndexCites.vue'),
          },
          {
            path: '/states/:state/city/:city',
            name: 'sentSell',
            component: () => import('components/sell/FormSend.vue'),
          },
          {
            path: '/kindOfPropertySell',
            name: 'kindOfPropertySell',
            component: () => import('components/sell/kindOfProperty.vue'),
          },
          {
            path: '/criteria',
            name: 'criteriaSell',
            component: () => import('components/sell/HomeCriteria.vue'),
          },
          {
            path: '/approximatly',
            name: 'approximatlySell',
            component: () => import('components/sell/ApproximatlyHome.vue'),
          },
          {
            path: '/payment',
            name: 'paymentSell',
            component: () => import('components/sell/PaymentSell.vue'),
          },
          {
            path: '/reason',
            name: 'reasonSell',
            component: () => import('components/sell/WhatReason.vue'),
          },
          {
            path: '/information',
            name: 'informationSell',
            component: () => import('components/sell/PersonalInformation.vue'),
          },
          {
            path: '/congratulations',
            name: 'congratulationsSell',
            component: () => import('components/sell/CongratulationsPage.vue'),
          },
        ],
      },
      {
        path: '/buyer',
        name: 'TemplateStates',
        component: () => import('components/buy/TemplateBuy.vue'),
        children: [
          {
            path: '',
            name: 'statesIndex',
            component: () => import('components/buy/IndexBuy.vue'),
          },
          {
            path: 'states/:state',
            name: 'cities',
            component: () => import('components/buy/IndexCitesBuy.vue'),
          },
          {
            path: 'kindOfPropertyBuyer',
            name: 'kindOfPropertyBuyer',
            component: () => import('components/buy/kindOfProperty.vue'),
          },
          {
            path: 'RangePrice',
            name: 'RangePrice',
            component: () => import('components/buy/RangePrice.vue'),
          },
          {
            path: 'paymentBuy',
            name: 'paymentBuy',
            component: () => import('components/buy/PaymentBuy.vue'),
          },
          {
            path: 'optionOffer',
            name: 'optionOffer',
            component: () => import('components/buy/HowQuickly.vue'),
          },

          {
            path: 'PropertyBeUsed',
            name: 'PropertyBeUsed',
            component: () => import('components/buy/PropertyBeUsed.vue'),
          },
          {
            path: 'informationBuy',
            name: 'informationBuy',
            component: () =>
              import('components/buy/PersonalInformationBuy.vue'),
          },
          {
            path: 'congratulations',
            name: 'congratulations',
            component: () => import('components/buy/CongratulationsPage.vue'),
          },
        ],
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
