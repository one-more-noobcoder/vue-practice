<template>
  <div class="letters-modal">
    <button class="btn letters-modal__close-btn" v-on:click="$emit('close-modal')" />

    <div class="letters-modal__content" v-on:click="animateOneMore">
      <!-- блок для сбора фразы -->
      <div class="letters-modal__phrase-inner" ref="phraseInner"></div>
      <!-- анимируемый по буквам текст -->
      <div class="letters-modal__text">
        <span
          v-for="(letter, index) in lettersArr"
          class="letters-modal__letter"
          :ref="`letterRef-${index}`"
          :key="index"
          :style="[letter.stylesParams.currentTransform, letter.stylesParams.baseStyle]"
        >{{ letter.value }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    letters: {
      type: Array,
      requaired: true
    }
  },
  data: () => {
    return {
      lettersArr: [],
    }
  },
  created() { // первоначальная настройка компонента
    this.lettersArr = this.letters
      .map(letter => {
        letter.stylesParams = {
          currentTransform: {
            transform: 'translate(0px, 0px)',
          },
          baseStyle: {
            transition: (Math.random() * (3 - 1) + 1).toFixed(1) + `s ease-in-out`,
            width: letter.value === ' ' ? '5px' : 'auto', // во избежание схлопывания пробела
          },
        }

        return letter
      })
  },
  mounted() {
    const documentSize = this.getDocumentSizeParams();
    const phraseInnerPrams = this.getPhraseInnerParams();

    this.setLettersStyleParams(documentSize, phraseInnerPrams);
    this.animateLetters();
  },
  methods: {
    getDocumentSizeParams() {
      return {
        width: window.innerWidth,
        height: window.innerHeight
      }
    },
    getPhraseInnerParams() {
      return this.$refs.phraseInner.getBoundingClientRect();
    },
    setLettersStyleParams(documentSize, phraseInnerPrams) {
      this.lettersArr = this.lettersArr.map((letter, index) => {
        // направление для transform
        const directionX = Math.random() > 0.5 ? '+' : '-';
        const directionY = Math.random() > 0.5 ? '+' : '-';

        const letterParams = this.$refs[`letterRef-${index}`][0].getBoundingClientRect();

        // определение максимально возможного трансформа в пределах страницы
        const maxTransformX = directionX === '+' ? documentSize.width - letterParams.x : letterParams.x;
        const maxTransformY = directionY === '+' ? documentSize.height - letterParams.y : letterParams.y;

        const letterFirstTransformX = directionX + Math.floor(Math.random() * maxTransformX);
        const letterFirstTransformY = directionY + Math.floor(Math.random() * maxTransformY);
        const letterScale = (Math.random() * (2 - 0.5) + 0.5).toFixed(2);

        letter.stylesParams.firstTransform = {
          transform: `translate(${letterFirstTransformX}px, ${letterFirstTransformY}px) scale(${letterScale})`,
        }

        let transformXToPoint = 0;
        let transformYToPoint = 0;

        if (letter.indexInFhrase) { // выстраиваем фразу через трансформ в соответствии с индексом буквы в фразе
          const stepBetweenLetters = 15;
          const blockPadding = 30;

          transformXToPoint = phraseInnerPrams.x - letterParams.x + blockPadding + letter.indexInFhrase * stepBetweenLetters;
          transformYToPoint = phraseInnerPrams.y - letterParams.y;
        }

        letter.stylesParams.lastTransform = {
          transform: `translate(${transformXToPoint}px, ${transformYToPoint}px)`,
        }

        return letter;
      })
    },
    animateLetters() {
      setTimeout(() => {
        this.lettersArr = this.lettersArr.map(letter => {
          letter.stylesParams.currentTransform = letter.stylesParams.firstTransform;
          return letter
        })
      }, 1000)

      setTimeout(() => {
        this.lettersArr = this.lettersArr.map(letter => {
          letter.stylesParams.currentTransform = letter.stylesParams.lastTransform;
          return letter
        })

      }, 4200)
    },
    getRandomTransitionSettings() {
      const getDurationValue = () => (Math.random() * (3 - 1) + 1).toFixed(1);

      const getBezierValue = () => {
        const value = (Math.random()).toFixed(2);
        return Math.random() > 0.5 ? '+' + value : '-' + value;
      }

      return getDurationValue() + `s cubic-bezier(${getBezierValue()}, ${getBezierValue()}, ${getBezierValue()}, ${getBezierValue()})`;
    },
    animateOneMore() {
      this.lettersArr = this.lettersArr.map(letter => {
        letter.stylesParams.baseStyle.transition = this.getRandomTransitionSettings();
        return letter
      })

      this.animateLetters();
    }
  }
}
</script>

<style>
.letters-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  padding-top: 40vh;
  background: rgba(255, 255, 255, 0.9);
  z-index: 100;
}

.letters-modal__content {
  flex: 0 1 1200px;
  margin: 0 auto;
  padding: 0 20px;
  font-size: 24px;
  color: #302727;
  font-variant: small-caps;
  text-transform: lowercase;
}

.letters-modal__phrase-inner {
  border-left: 1px solid #e85757;
  min-height: 60px;
  margin: 0 auto 60px auto;
}

.letters-modal__letter {
  display: inline-block;
}

/* close-btn */

.btn.letters-modal__close-btn {
  position: absolute;
  top: 80px;
  right: 80px;
  width: 30px;
  height: 30px;
  background: url("./letters-modal__close-btn.svg") no-repeat center/cover;
  transition: 0.1s transform;
}

.btn.letters-modal__close-btn:hover {
  transform: scale(1.1);
}

@media screen and (max-width: 600px) {
  .btn.letters-modal__close-btn {
    top: 70px;
    right: 40px;
  }
}

@media screen and (max-width: 400px) {
  .letters-modal__content {
    font-size: 20px;
  }
  .btn.letters-modal__close-btn {
    top: 70px;
    right: 30px;
    width: 20px;
    height: 20px;
  }
}
</style>

