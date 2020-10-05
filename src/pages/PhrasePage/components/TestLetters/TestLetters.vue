<template>
  <div class="test-letters">
    <span class="test-letter test-letter_type_first">п</span>
    <span class="test-letter test-letter_type_second">е</span>
    <span class="test-letter test-letter_type_third">с</span>
    <span class="test-letter test-letter_type_fourth">я</span>
  </div>
</template>

<style>
.test-letters {
  text-align: center;
}

.test-letter {
  position: relative;
  z-index: 10;
  margin-right: 40px;
}

.test-letter::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: -1;
}

/* first-type */

.test-letter_type_first {
  font-weight: 300;
  font-size: 70px;
  line-height: 70px;
  color: #1a88ed;
}

.test-letter_type_first::before {
  width: 80px;
  height: 80px;
  transform: translate(-50%, -50%) rotate(3.65deg);
  background: #faff15;
}

/* second-type */

.test-letter_type_second {
  font-weight: bold;
  font-size: 60px;
  line-height: 60px;
  color: #ffd9c3;
}

.test-letter_type_second::before {
  width: 70px;
  height: 70px;
  transform: translate(-50%, -50%) rotate(-10deg);
  background: #494949;
}

/* third-type */

.test-letter_type_third {
  font-weight: bold;
  font-size: 40px;
  line-height: 40px;
  color: #fff;
}

.test-letter_type_third::before {
  width: 75px;
  height: 50px;
  transform: translate(-40%, -50%) rotate(5deg);
  background: #B1374D;;
}

/* fourth-type */

.test-letter_type_fourth {
  font-weight: 300;
  font-size: 80px;
  line-height: 80px;
  color: #fff;
}

.test-letter_type_fourth::before {
  width: 90px;
  height: 70px;
  transform: translate(-40%, -50%) rotate(10deg);
  background: #BDA16A;
}
</style>

