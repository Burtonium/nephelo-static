<template>
  <div>
    <nuxt/>
  </div>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--gradient {
  cursor: pointer;
  display: inline-block;
  border-radius: 4px;
  background-image: linear-gradient(330deg, #9b28ff 1%, #ed8200 80%, #ed8200 100%);
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--gradient span {
  background-color: rgba(0, 0, 0, 0, 100%);
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
