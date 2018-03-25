<template>
  <div class="logo">
    <img src="@/assets/logo.svg">
  </div>
</template>

<style scoped>
.logo {
  display: inline-block;
  animation: fade 1s ease-in, grow 0.6s linear;
  position: relative;
  overflow: hidden;
}

.logo img {
  width: 245px;
}

@keyframes fade {
  0%   { 
    opacity: 0; 
  }
  
  100% { 
    opacity: 1; 
  }
}

@keyframes grow {
  0% {
    transform: scale(0.7);
    -webkit-transform: scale(0.7);
  }
  
  100% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}


</style>
