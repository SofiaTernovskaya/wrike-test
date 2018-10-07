<template>

  <section class="Container">

    <button type="button"
            class="Container__button"
            @click="showModal"
    >
      Нажми сюда
    </button>

    <nuxt-link
      to="/uikit"
      class="Container__button"
    >Посмотреть uiKit</nuxt-link>


    <Popup v-show="isModalVisible"
           @close="closeModal"/>


  </section>

</template>

<script>

  import Popup from "~/components/Popup/Popup";

  export default {
    name: 'Container',
    components: {Popup},
    data() {
      return {
        isModalVisible: false
      }
    },
    methods: {
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      }
    },
  }

</script>

<style lang="scss" src="./Container.scss" />
