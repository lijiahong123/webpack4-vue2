<template>
  <div>
    <div class="container">
      <input type="text" placeholder="你好">
      <div class="image"></div>
      123222----------


      34dddddd
    </div>
  </div>
</template>

<style lang="scss">
.container {
  color: red;
  width: 1000px;

  .input {
    &::placeholder {
      color: pink;
    }
  }

  .image {
    width: 100%;
    height: 500px;
    background-image: url(~@/assets/img/1.png);
  }
}



@media (min-resolution: 2dppx) {
  .image {
    background-image: url(https://camo.githubusercontent.com/e69ac86eb2254482d9794ee4936a7cebacba7551666c8f76dd1ab45e3f58ce90/68747470733a2f2f706f73746373732e6769746875622e696f2f6175746f70726566697865722f6c6f676f2e737667);
  }
}
</style>