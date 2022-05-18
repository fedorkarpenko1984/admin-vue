import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Category from "../views/Category";
import Products from "../views/Products";
import Warehouse from "../views/Warehouse";
import Sales from "../views/Sales";
import Additions from "../views/Additions";

export const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/category',
    component: Category,
    ru: 'Категории'
  },
  {
    path: '/products',
    component: Products,
    ru: 'Товары'
  },
  {
    path: '/warehouse',
    component: Warehouse,
    ru: 'Склад'
  },
  {
    path: '/sales',
    component: Sales,
    ru: 'Продажи'
  },
  {
    path: '/additions',
    component: Additions,
    ru: 'Поступления'
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
