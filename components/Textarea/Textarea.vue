<template>

  <label :for="textarea.id"
         class="Textarea">

    <span class="Textarea__label">{{textarea.label}}</span>

    <textarea class="Textarea__textarea"
              :placeholder="textarea.placeholder"
    ></textarea>

  </label>

</template>

<script>

  export default {
    name: 'Textarea',
    props: ['textarea']
  }

</script>

<style lang="scss" src="./Textarea.scss" />
