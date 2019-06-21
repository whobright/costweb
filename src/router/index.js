import Vue from 'vue';
import Router from 'vue-router';
//import main from '@/views/main';
import error from '@/views/error';
import login from '@/views/login';
import page404 from '@/views/page404';
import test from '@/components/test';
// import charts from '@/views/fengzhuang/charts';

// 按需加载
// 存款
//const depPage1 = () => import('@/views/deposits/page1');
//const myTest = () => import('@/views/myTest');

//全行
const allBank = () => import('@/views/allBank/allBank');
const allBankPage1 = () => import('@/views/allBank/components/top1');
const allBankPage2 = () => import('@/views/allBank/components/top2');
const allBankPage3 = () => import('@/views/allBank/components/top3');
// 总行
const headOffice = () => import('@/views/headOffice/headOffice');

// 总行大对公
const folioPage1 = () => import('@/views/headOffice/folio/folioPage1');
const folioPage2 = () => import('@/views/headOffice/folio/folioPage2');
const folioPage3 = () => import('@/views/headOffice/folio/folioPage3');
//零售
const resale = () => import('@/views/resale/resale');
const resalePage1 = () => import('@/views/resale/page1');
const resalePage2 = () => import('@/views/resale/page2');
const resalePage3 = () => import('@/views/resale/page3');
//科目树
const subjectTree = () => import('@/views/subjectTree/subjectTree');

//大对公分行投产对比
const compar =()=>import('@/views/compar/compar.vue');
//大零售不含运营
const noOperate=()=>import('@/views/compar/noOperate.vue');
//大零售运营
const retailBranch=()=>import('@/views/compar/retailBranch.vue');
//大零售含运营
const Operate=()=>import('@/views/compar/Operate.vue');
//大对公费用执行分析
const analyse=()=>import('@/views/analyse/analyse');



Vue.use(Router);

// const titles = {
//   depPage: '存款规模',
//   govPage: '政府银行',
//   aumPage: 'AUM',
//   rightContent: '地方债务',
//   balancedebtPage: '资产负债',
//   institutions: '机构'
// };
const router = new Router({
  routes: [
    {
      path: '*',
      name: 'page404',
      component: page404
    }, {
      path: '/',
      name: 'login',
      component: login,
      meta: {
        title: '登录'
      }
    },
    {
      path: '/error',
      name: 'error',
      component: error
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/allBank',
      name: 'allBank',
      component: allBank,
      redirect:'/allBankPage1',
      children:[
        {
          path: '/allBankPage1',
          name: 'allBankPage1',
          component: allBankPage1,
        },
        {
          path: '/allBankPage2',
          name: 'allBankPage2',
          component: allBankPage2,
        },
        {
          path: '/allBankPage3',
          name: 'allBankPage3',
          component: allBankPage3,
        },
      ]
    },
    {
      path:'/analyse',
      name:'analyse',
      component:analyse
     },
   {
     path:'/retailBranch',
     name:'retailBranch',
     component:retailBranch
   },
   {
     path: '/noOperate',
     name: 'noOperate',
     component: noOperate
   },
   {
     path: '/Operate',
     name: 'Operate',
     component: Operate
   },
   {
     path:'/compar',
     name:'compar',
     component:compar
   },

    {
      path: '/headOffice',
      name: 'headOffice',
      component: headOffice,
      redirect: '/headOffice/folioPage1',
      children: [
        {
          path: 'folioPage1',
          name: 'folioPage1',
          component: folioPage1
        },
        {
          path: 'folioPage2',
          name: 'folioPage2',
          component: folioPage2
        },
        {
          path: 'folioPage3',
          name: 'folioPage3',
          component: folioPage3
        },
        {
          path: 'retailPage1',
          name: 'retailPage1',
          component: folioPage1
        },
        {
          path: 'retailPage2',
          name: 'retailPage2',
          component: folioPage2
        },
        {
          path: 'retailPage3',
          name: 'retailPage3',
          component: folioPage3
        }
      ]
    },
    {
      path: '/resale',
      name: 'resale',
      component: resale
    //   redirect:'/resale',
    //   children:[
    //     {
    //       path: '/resalePage1',
    //       name: 'resalePage1',
    //       component: resalePage1,
    //     },
    //     {
    //       path: '/resalePage2',
    //       name: 'resalePage2',
    //       component: resalePage2,
    //     },
    //     {
    //       path: '/resalePage3',
    //       name: 'resalePage3',
    //       component: resalePage3,
    //     },
    //   ]
    // },
      },
    {
      path: '/subjectTree',
      name: 'subjectTree',
      component: subjectTree
    },

  
  ]

});

// router.afterEach((to, from) => {
//   /* 路由发生变化修改页面 title */
//   let fullRoute = to.path;
//   if (fullRoute === '/') {
//     document.title = '登录页';
//     return;
//   }
//   let routerArr = fullRoute.split('/');
//   if (routerArr.length < 3) return;
//   let lastRoute = routerArr[2].replace(/\d+/g, '');
//   let titleText = titles[lastRoute];
//   if (titleText) {
//     document.title = titleText;
//   }
//   // next();
// });

export default router;
