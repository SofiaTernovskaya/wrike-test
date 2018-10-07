<template>

  <div class="UiKitContainer">

    <div class="UiKitContainer__container">

      <nuxt-link to="/" class="UiKitContainer__link">Вернуться на главную</nuxt-link>

      <h2 class="UiKitContainer__title">Компоненты</h2>

      <Checkbox :checkbox="checkbox" class="UiKitContainer__item"/>

      <Radiobutton :radiobutton="radiobutton" class="UiKitContainer__item" />

      <Input v-for="(item, idx) in inputs"
             :key="idx"
             :item="item"
             class="UiKitContainer__item"
      />

      <Textarea :textarea="textarea" class="UiKitContainer__item"/>

      <h2 class="UiKitContainer__title">Кнопки</h2>

      <button class="UiKitContainer__button UiKitContainer__button--primary">Primary button</button>
      <button class="UiKitContainer__button UiKitContainer__button--secondary">Secondary button</button>

      <h2 class="UiKitContainer__title">Цвета</h2>

      <div class="UiKitContainer__item UiKitContainer__color">
        <span class="UiKitContainer__color-name">$main-text-color</span>
        <div class="UiKitContainer__color-square UiKitContainer__color-square--text"></div>
      </div>
      <div class="UiKitContainer__item UiKitContainer__color">
        <span class="UiKitContainer__color-name">$error-color</span>
        <div class="UiKitContainer__color-square UiKitContainer__color-square--error"></div>
      </div>
      <div class="UiKitContainer__item UiKitContainer__color">
        <span class="UiKitContainer__color-name">$primary-decoration-color</span>
        <div class="UiKitContainer__color-square UiKitContainer__color-square--decoration"></div>
      </div>

    </div>

  </div>

</template>

<script>

  import Checkbox from "../Checkbox/Checkbox";
  import Radiobutton from "../Radiobutton/Radiobutton";
  import Input from "../Input/Input";
  import Textarea from "../Textarea/Textarea";
  export default {
    name: 'UiKitContainer',
    components: {Textarea, Input, Radiobutton, Checkbox},
    data() {
      return {
        checkbox: {
          id: 'checkbox',
          label: 'Чекбокс',
          checked: true
        },
        radiobutton:
        {
          id: 'everybody',
          label: 'Радиобаттон',
          name: 'access',
          checked: true
        },
        inputs: [
          {
            id: 'input-1',
            label: 'Инпут',
            type: 'text',
            model: 'surname',
            placeholder: 'Введите что-то',
            validation: 'Инпут обычный'
          },
          {
            id: 'input-2',
            label: 'Инпут',
            type: 'text',
            model: 'name',
            placeholder: 'Введите что-то',
            validation: 'Инпут с ошибкой',
            error: true
          }
        ],
        textarea: {
          id: 'textarea',
          label: 'Текстареа',
          type: 'textarea',
          model: 'biography',
          placeholder: 'Напишите что-нибудь',
        }
      }
    }
  }

</script>

<style lang="scss" src="./UiKitContainer.scss" />
