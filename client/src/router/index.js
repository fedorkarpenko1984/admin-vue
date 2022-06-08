import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Category from "../views/Categories";
import Products from "../views/Products";
import Warehouse from "../views/Warehouse";
import Sales from "../views/Sales";
import Additions from "../views/Additions";
import ProductPage from "../views/ProductPage";

export const routes = [
  {
    path: '/',
    component: Home,
    ru: ''
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
  },
  {
    path: '/product/:id',
    component: ProductPage,
    ru: ''
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
