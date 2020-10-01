<template>
  <div class="letters-modal" v-on:click="animateLetters">
    <div class="letters-modal__content">
      <!-- блок для сбора фразы -->
      <div class="letters-modal__phrase-inner" ref="phraseInner"></div>
      <!-- анимируемый по буквам текст -->
      <div class="letters-modal__text">
        <span
          class="letters-modal__letter"
          v-for="(letter, index) in lettersArr"
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
      lettersArr: []
    }
  },
  created() { // первоначальная настройка компонента
    this.lettersArr = this.letters.map(letter => {
      letter.stylesParams = {
        currentTransform: {
          transform: 'translate(0px, 0px)',
        },
        baseStyle: {
          transition: (Math.random() * (4 - 0.5) + 0.5).toFixed(1) + 's',
          width: letter.value === ' ' ? '5px' : 'auto', // против схлопывания пробела
        }
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
      this.lettersArr = this.letters.map((letter, index) => {

        // направление для transform
        const directionX = Math.random() > 0.5 ? '+' : '-';
        const directionY = Math.random() > 0.5 ? '+' : '-';

        const letterParams = this.$refs[`letterRef-${index}`][0].getBoundingClientRect();

        // определение максимально возможного трансформа в пределах страницы
        const maxTransformX = directionX === '+' ? documentSize.width - letterParams.x : letterParams.x;
        const maxTransformY = directionX === '+' ? documentSize.height - letterParams.y : letterParams.y;

        const letterFirstTransformX = directionX + Math.floor(Math.random() * maxTransformX);
        const letterFirstTransformY = directionY + Math.floor(Math.random() * maxTransformY);

        letter.stylesParams.firstTransform = {
          transform: `translate(${letterFirstTransformX}px, ${letterFirstTransformY}px)`,
        }

        let transformXToPoint = 0;
        let transformYToPoint = 0;

        if (letter.indexInFhrase) { // выстраиваем фразу через трансформ в соответствии с индексом буквы в фразе
          const stepBetweenLetters = 15;
          const blockPadding = 50;

          transformXToPoint = phraseInnerPrams.x - letterParams.x + blockPadding + letter.indexInFhrase * stepBetweenLetters;
          transformYToPoint = phraseInnerPrams.y - letterParams.y;
        }

        letter.stylesParams.lastTransform = {
          transform: `translate(${transformXToPoint}px, ${transformYToPoint}px)`,
        }

        return letter
      })
    },
    animateLetters() {
      setTimeout(() => {
        this.lettersArr = this.lettersArr.map(letter => {
          letter.stylesParams.currentTransform = letter.stylesParams.firstTransform
          return letter
        })

      }, 1000)

      setTimeout(() => {
        this.lettersArr = this.lettersArr.map(letter => {
          letter.stylesParams.currentTransform = letter.stylesParams.lastTransform
          return letter
        })

      }, 4000)
    }
  },

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
  align-items: center;
  background: rgba(255, 255, 255, 0.9);
  z-index: 100;
}

.letters-modal__content {
  flex: 0 1 1200px;
  margin: 0 auto;
  padding: 0 20px;
  font-size: 24px;
  font-variant: small-caps;
  text-transform: lowercase;
}

.letters-modal__phrase-inner {
  border-left: 1px solid red;
  min-height: 100px;
  margin: 0 auto 20px auto;
}

.letters-modal__letter {
  display: inline-block;
}

@media screen and (max-width: 400px) {
  .letters-modal__content {
    font-size: 20px;
  }
}
</style>