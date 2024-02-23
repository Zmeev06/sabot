<script setup lang="ts">
import InputText from 'primevue/inputtext';
import { ref } from 'vue';
import { loginUser } from '@services/auth/loginService';
import { useRouter } from 'vue-router';

const email = ref('user@example.com');
const password = ref('string');

const router = useRouter();

const login = async () => {
  const { status } = await loginUser(email.value, password.value);
  if (status === 200) {
    router.push('/projects/1/analytics/position-analysis');
  }
};
</script>
<template lang="html">
  <Teleport to="body">
    <div
      class="fixed left-0 top-0 z-[999] flex h-screen w-screen items-center justify-center bg-white"
    >
      <div class="flex flex-col gap-2">
        <InputText
          class="block border-2"
          type="text"
          v-model="email"
          placeholder="email"
        />
        <InputText
          class="block border-2"
          type="text"
          v-model="password"
          placeholder="password"
        />
        <div class="cursor-pointer bg-cyan-600 p-4" @click="login">Вход</div>
      </div>
    </div>
  </Teleport>
</template>
<style lang="scss"></style>
@//services/loginService
