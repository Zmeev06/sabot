<script setup lang='ts'>
import InputText from 'primevue/inputtext';
import { ref } from 'vue';
import { loginUser } from '@services/auth/loginService';
import { useRouter } from 'vue-router';

const email = ref('')
const password = ref('')

const router = useRouter()

const login = async () => {
  const { status } = await loginUser(email.value, password.value)
  if (status === 200) {
    router.push('/projects')
  }
}
</script>
<template lang='html'>
  <Teleport to="body">
  <div class="w-screen h-screen flex items-center justify-center fixed top-0 left-0 z-[999] bg-white">
    <div class="flex flex-col gap-2">
      <InputText class=" border-2 block" type="text" v-model="email" placeholder="email" />
      <InputText  class=" border-2 block" type="text" v-model="password" placeholder="password" />
      <div class="p-4 bg-cyan-600 cursor-pointer" @click="login">
        Вход
      </div>
    </div>
  </div>
</Teleport>
</template>
<style lang='scss'>
    
</style>@//services/loginService