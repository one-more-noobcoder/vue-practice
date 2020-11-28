<template>
  <div class="phrase-page">
    <!-- модальное окно для анимации -->
    <transition name="letters-modal-transition">
      <LettersModal
        v-if="activeCard"
        :letters="activeCard.textLetters"
        v-on:close-modal="deleteActiveTextCard"
      />
    </transition>

    <div class="container">
      <PageTitle combinedTitle titleText="text" extraText="secret meaning" />

      <div class="phrase-page__content">
        <Form v-on:setTextCard="setTextCard" />
        <Message
          class="phrase-page__message"
          :messageTitle="messageText.title"
          :messageText="messageText.text"
        />
      </div>

      <div v-if="textCards.length" class="phrase-page__cards">
        <h3 class="phrase-page__cards-title">Your Gallery of Secrets</h3>

        <div class="phrase-page__cards-list">
          <!-- текстовые карточки -->
          <div class="text-card" tabindex="0" v-for="card in textCards" :key="card.id">
            <p class="text-card__text">{{ card.text }}</p>
            <button class="btn text-card__btn" v-on:click="setActiveTextCard(card.id)">просмотреть</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Form from './components/Form/Form';
import LettersModal from './components/LettersModal/LettersModal';
import PageTitle from '../../components/PageTitle/PageTitle';
import Message from '../../components/Message/Message';

export default {
  components: { Form, PageTitle, Message, LettersModal },
  data: () => {
    return {
      textCards: [],
      activeCard: null
    }
  },
  computed: {
    messageText() {
      return {
        title: !this.textCards.length ? 'Данные отсутствуют' : 'Анализ текста произведен',
        text: !this.textCards.length
          ? 'разместите отрывок текста в форму для поиска тайного смысла'
          : 'нажмите на карточку чтобы узнать, добавляйте новый текст для поиска тайного смысла',
      }
    },
  },
  methods: {
    setTextCard(textCard) {
      this.textCards.push(textCard);
    },
    setActiveTextCard(id) {
      this.activeCard = this.textCards.find(card => card.id === id)
    },
    deleteActiveTextCard() {
      this.activeCard = null;
    }
  },
};
</script>

<style>
.phrase-page {
  position: relative;
  overflow: hidden;
  padding-bottom: 80px;
}

.phrase-page__content {
  display: flex;
  align-items: center;
  margin-bottom: 50px;
}

/* phrase-page__cards */

.phrase-page__cards-title {
  display: flex;
  align-items: center;
  font-size: 20px;
  color: #444444;
  font-weight: 400;
  text-transform: uppercase;
  margin-bottom: 40px;
}

.phrase-page__cards-title::after,
.phrase-page__cards-title::before {
  content: "";
  flex: 0 1 176px;
  height: 1px;
  background: #c4c4c4;
}

.phrase-page__cards-title::after {
  margin-left: 24px;
}

.phrase-page__cards-title::before {
  display: none;
  margin-right: 24px;
}

.phrase-page__cards-list {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
}

/* text-card */

.text-card {
  position: relative;
  flex: 1 1 225px;
  max-width: 260px;
  display: flex;
  flex-direction: column;
  padding: 25px 22px 22px 22px;
  background: #f3f3f3;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  margin-right: 15px;
  margin-bottom: 15px;
  transition: 0.1s opacity;
}

.text-card:hover,
.text-card:focus {
  opacity: 0.8;
}

.text-card__text {
  font-size: 15px;
  margin-bottom: 40px;
}

.btn.text-card__btn {
  align-self: flex-end;
  font-size: 15px;
  line-height: 15px;
  font-variant: small-caps;
  color: #5981ce;
  padding: 0;
  margin-top: auto;
}

.text-card__btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

/* transition */
.letters-modal-transition-enter,
.letters-modal-transition-leave-to {
  opacity: 0;
}

.letters-modal-transition-enter-active,
.letters-modal-transition-leave-active {
  transition: 0.5s opacity;
}

@media screen and (max-width: 870px) {
  .phrase-page__content {
    flex-direction: column;
  }
  .phrase-page__message {
    max-width: 430px;
  }
  .phrase-page__cards-title {
    justify-content: center;
    text-align: center;
  }
  .phrase-page__cards-title::before {
    display: block;
  }
  .phrase-page__cards-list {
    justify-content: center;
  }
}

@media screen and (max-width: 500px) {
  .text-card {
    flex: 1 1 auto;
    max-width: 100%;
  }
}
</style>
