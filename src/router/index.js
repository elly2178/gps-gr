import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddDoctor from '../views/AddDoctor.vue'
import EditDoctor from '../views/EditDoctor.vue' 
import UploadData from '../views/UploadData.vue' 
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/add',
    name: 'AddDoctor',
    component: AddDoctor
  },
  {
    path: '/doctors/:id',
    name: 'EditDoctor',
    component: EditDoctor,
    props:true
  },
  {
    path: '/doctors/uploadData',
    name: 'UploadData',
    component: UploadData,
    props:true
  },
   
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
