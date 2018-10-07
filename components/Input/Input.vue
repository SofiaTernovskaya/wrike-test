<template>

  <label :for="item.id"
         :class="['Input', {'Input--error': item.error}]">

    <span class="Input__label">{{item.label}}</span>

    <input :id="item.id"
           :type="item.type"
           :placeholder="item.placeholder"
           :v-model="item.model"
           class="Input__input"
    >

    <span class="Input__validation" v-if="item.validation">{{item.validation}}</span>

  </label>


</template>

<script>

  export default {
    name: 'Input',
    props: ['item']
  }

</script>

<style lang="scss" src="./Input.scss" />
