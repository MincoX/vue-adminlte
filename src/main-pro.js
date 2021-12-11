import { createApp } from 'vue'
import Entry from '@/Entry.vue'
import router from '@/router'

createApp(Entry).use(router).mount('#entry')
