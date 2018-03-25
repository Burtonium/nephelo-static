<template>
  <div>
    <no-ssr>
      <vue-particles v-if="particle"
              color="#666"
              :particleOpacity="0.7"
              :particlesNumber="150"
              shapeType="circle"
              :particleSize="4"
              linesColor="#333"
              :linesWidth="1"
              :lineLinked="true"
              :lineOpacity="0.8"
              :linesDistance="150"
              :moveSpeed="3"
              :hoverEffect="true"
              hoverMode="grab"
              :clickEffect="true"
              clickMode="push" class="background" />
    </no-ssr>
    <section class="container">
      <div class="main">
        <app-logo/>
        <h1 class="title">
          NEP<span class="highlight">H</span>ELO
        </h1>
        <div class="links">
          <v-button @click="particle = true">Particle me up fam</v-button>
          
          <v-button href="https://github.com/Burtonium/nephelo-static" target="_blank">
            <fa :icon="['fab', 'github']"/>
            GitHub
          </v-button>
          <v-button href="https://www.linkedin.com/in/mathieu-bertin-37a89720/">
            <fa :icon="['fab', 'linkedin']"/>
            LinkedIn
          </v-button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue';

export default {
  data() {
    return {
      particle: false
    };
  },
  components: {
    AppLogo
  },
};
</script>

<style>
@font-face {
  font-family: 'gothvetica';
  src: url('../assets/fonts/gothvetica.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -100;
  width:100%;
  height: 100%;
}

.highlight {
  background: -webkit-linear-gradient(330deg, #9b28ff 1%, #ed8200 80%, #ed8200 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.main {
  padding:80px;
  background-image:
    radial-gradient(
      #fff 40%,
      rgba(255,0,0,0)
    );
}

.title {
  margin-top:10px;
  margin-left:28px;
  font-family: "gothvetica";
  -webkit-animation: space-out 1s ease-out, fade 1s ease-in;
  animation: space-out 1s;
  letter-spacing: 20px;
  display: block;
  font-weight: 800;
  font-size: 100px;
}

.subtitle {
  margin-top:5px;
  font-weight: 300;
  font-size: 42px;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding: 17px;
}

@keyframes space-out {
  0% {
    letter-spacing: 1px;
  }
  
  100% {
    letter-spacing: 20px;
  }
}


@keyframes fade {
  0%   { 
    opacity: 0; 
  }
  
  100% { 
    opacity: 1; 
  }
}

</style>
