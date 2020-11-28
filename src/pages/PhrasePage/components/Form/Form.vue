<template>
  <div class="form">
    <textarea class="form__textarea" id="textarea" v-model="text" :placeholder="placeholder" maxlength="100"></textarea>

    <div class="form__box-footer">
      <button
        class="btn btn_type_common btn_theme_red form__btn"
        type="button"
        :disabled="disabledBtn"
        v-on:click="findSecretPhrase"
      >Анализ текста</button>
    </div>
  </div>
</template>

<script>
import { nanoid } from 'nanoid';

export default {
  data: () => {
    return {
      text: "",
      placeholder: 'Место для текста...',
      phrases: ["ты пидор", 'просто пес', "грешный пес", "пшеничный лось", "прихвостень", 'слыш псина', 'ебать ты лох'],
    };
  },
  computed: {
    disabledBtn() {
      return this.text === "";
    },
  },
  methods: {
    findSecretPhrase() {
      this.mixPhrases(); // перемешиваем массив фраз
      // проходимся по всем фразам до первого полного совпадения
      for (let i = 0; i < this.phrases.length; i++) {
        const lettersWithPhrase = this.checkPhrase(this.getLettersFromText(), this.phrases[i]);

        if (lettersWithPhrase) { // передаем данные в родительский компонент
          const textCard = {
            id: nanoid(),
            text: this.text,
            textLetters: lettersWithPhrase
          };

          this.$emit('setTextCard', textCard);
          this.text = '';
          this.placeholder = 'Место для текста...';
          return;
        }
      }

      // если совпадений не было 
      this.text = '';
      this.placeholder = 'Данный текст не содержит тайного смысла, попробуйте другой';
    },
    mixPhrases() {
      this.phrases = this.phrases.sort(() => Math.random() - 0.5);
    },
    getLettersFromText() { // исходные буквы из текста с первоначальными настройками
      return this.text
        .toLowerCase()
        .split("")
        .map((letter) => {
          return {
            value: letter,
            indexInFhrase: null,
          };
        });
    },
    checkPhrase(lettersArr, phrase) {
      // ищем нужные буквы в массиве букв из текста, для целевых букв выставляем их индекс во фразе
      for (let i = 0; i < phrase.length; i++) {
        for (let y = 0; y < lettersArr.length; y++) {
          if (phrase[i] === lettersArr[y].value && !lettersArr[y].indexInFhrase) {
            lettersArr[y].indexInFhrase = i + 1;
            break;
          }
        }
      }

      return lettersArr.filter(letter => letter.indexInFhrase).length === phrase.length
        ? lettersArr
        : false
    }
  },
};
</script>

<style>
.form {
  flex: 0 0 435px;
  background: #f3f3f3;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  overflow: hidden;
  margin-right: 80px;
}

.form__textarea {
  display: block;
  resize: none;
  width: 100%;
  min-height: 165px;
  background-color: transparent;
  font-size: 15px;
  border: none;
  outline: none;
  padding: 30px 20px;
  border-bottom: 1px solid #c4c4c4;
  transition: background-color 0.3s;
}

.form__textarea:hover,
.form__textarea:focus {
  background-color: #8fdc53;
  color: #fff;
}

.form__textarea:hover::placeholder,
.form__textarea:focus::placeholder {
  color: #fff;
}

.form__box-footer {
  display: flex;
  justify-content: flex-end;
  padding: 10px;
}

@media screen and (max-width: 870px) {
  .form {
    flex: 1 1 auto;
    max-width: 435px;
    width: 100%;
    margin: 0 auto 40px auto;
  }
}
</style>


