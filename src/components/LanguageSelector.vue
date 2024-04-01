<script setup lang="ts">
import { ref } from 'vue';
import { ELanguage } from '@/models/enum/ELanguage';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
const selectedLang = ref(ELanguage.US);
const onChangeLanguage = () => {
  locale.value = selectedLang.value;

  document.documentElement.setAttribute(
    'lang',
    `${selectedLang.value.substring(0, 2)}`.toLowerCase(),
  );
};
</script>

<template>
  <label for="langSelect">{{ $t('Language') }} : </label>
  <select id="langSelect" v-model="selectedLang" @change="onChangeLanguage">
    <option :value="ELanguage.US">{{ $t('LanguageOptions.en-US') }}</option>
    <option :value="ELanguage.TW">{{ $t('LanguageOptions.zh-TW') }}</option>
    <option :value="ELanguage.CN">{{ $t('LanguageOptions.zh-CN') }}</option>
    <option :value="ELanguage.KR">{{ $t('LanguageOptions.ko-KR') }}</option>
  </select>
</template>
