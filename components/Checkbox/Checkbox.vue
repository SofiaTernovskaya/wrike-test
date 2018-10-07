<template>

  <div class="Checkbox">
    <input :id="checkbox.id"
           type="checkbox"
           class="Checkbox__input"
           v-bind="{checked : checkbox.checked}"
    >
    <label :for="checkbox.id" class="Checkbox__label">{{checkbox.label}}</label>
  </div>


</template>

<script>

  export default {
    name: 'Checkbox',
    props: ['checkbox']
  }

</script>

<style lang="scss" src="./Checkbox.scss" />
