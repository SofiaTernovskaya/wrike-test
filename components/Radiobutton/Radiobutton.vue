<template>

  <div class="Radiobutton">

    <input type="radio"
           class="Radiobutton__input"
           :id="radiobutton.id"
           :name="radiobutton.name"
           v-bind="{checked : radiobutton.checked}"
    />
    <label :for="radiobutton.id" class="Radiobutton__label">{{radiobutton.label}}</label>

  </div>

</template>

<script>

  export default {
    name: 'Radiobutton',
    props: ['radiobutton']
  }

</script>

<style lang="scss" src="./Radiobutton.scss"/>
