<template>

  <div class="Popup" @click="close">

    <div class="Popup__container" @click.stop>

      <form  class="Popup__form">

        <div class="Popup__header">

          Popup title is here

          <button @click="close" class="Popup__close">
            <IconClose class="Popup__close-icon"/>
          </button>

        </div>

        <div :class="['Popup__content',
                 {'Popup__content--edit': toggleForm }]">

          <div class="Popup__content-col Popup__content-personal">

            <div class="Popup__content-personal-row">

              <div class="Popup__content-personal-col">
                <div class="Popup__content-personal-img-wrapper">
                  <img src="/img/oval.jpg"
                       srcset="/img/oval.jpg 1x, /img/oval@2x.jpg 2x"
                       alt="avatar"
                       class="Popup__content-personal-img">
                </div>
              </div>

              <div class="Popup__content-personal-col">
                <div class="Popup__content-personal-name">
                  <p class="Popup__content-personal-name-line">Иванов</p>
                  <p class="Popup__content-personal-name-line">Иван</p>
                  <p class="Popup__content-personal-name-line">Иванович</p>
                </div>
              </div>

            </div>

            <p class="Popup__content-personal-description">
              Родился 3 октября (21 сентября по старому стилю) 1895 года в селе Константиново Рязанской губернии в
              крестьянской семье. Его отец с 12 лет служил в Москве в лавке, бывая в деревне, даже после женитьбы,
              только наездами.
            </p>

            <Checkbox :checkbox="checkbox" v-if="toggleForm"/>

            <div class="Popup__radiobuttons" v-if="toggleForm">

              <Radiobutton v-for="(item, idx) in radiobuttons"
                           :key="idx"
                           :radiobutton="item"
                           :idx="idx"
              />
            </div>


          </div>

          <div class="Popup__content-col" v-show="toggleForm">

            <Input v-for="(item, idx) in inputs"
                   :key="idx"
                   :item="item"
                   class="Popup__form-item"
            />

            <Textarea :textarea="textarea" class="Popup__form-item"/>


          </div>

        </div>

        <div class="Popup__footer">

          <button type="button" class="Popup__button Popup__button--secondary" @click="toggleForm = !toggleForm">

            <IconPencil class="Popup__button-icon"/>

            Edit
          </button>
          <button type="submit"
                  class="Popup__button Popup__button--primary">Save
          </button>

        </div>

      </form>

    </div>

  </div>

</template>

<script>
  import Checkbox from "../Checkbox/Checkbox";
  import Radiobutton from "../Radiobutton/Radiobutton";
  import Input from "../Input/Input";
  import Textarea from "../Textarea/Textarea";
  import IconPencil from "../IconPencil/IconPencil";
  import IconClose from "../IconClose/IconClose";

  export default {
    name: 'Popup',
    components: {IconClose, IconPencil, Textarea, Input, Radiobutton, Checkbox},
    data() {
      return {
        toggleForm: false,
        checkbox: {
          id: 'checkbox',
          label: 'С условиями согласен',
          checked: true
        },
        radiobuttons: [
          {
            id: 'everybody',
            label: 'Доступно всем',
            name: 'access',
            checked: true
          },
          {
            id: 'only-me',
            label: 'Только мне',
            name: 'access'
          }
        ],
        inputs: [
          {
            id: 'surname',
            label: 'Фамилия',
            type: 'text',
            model: 'surname',
            placeholder: 'Введите фамилию',
            validation: 'Фамилия на русском языке',
            error: true
          },
          {
            id: 'name',
            label: 'Имя',
            type: 'text',
            model: 'name',
            placeholder: 'Введите имя',
            validation: 'Имя на русском языке'
          },
          {
            id: 'last-name',
            label: 'Отчество',
            type: 'text',
            model: 'lastName',
            placeholder: 'Введите отчество',
            validation: 'Отчество на русском языке'
          }
        ],
        textarea: {
          id: 'biography',
          label: 'Биография',
          type: 'textarea',
          model: 'biography',
          placeholder: 'Напишите биографию',
        }
      }
    },
    methods: {
      close() {
        this.$emit('close');
      },
    },
  }

</script>

<style lang="scss" src="./Popup.scss"/>
