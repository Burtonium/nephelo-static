<template>
	<a class="btn" :href="href" :target="target" @click="$emit('click')">
		<span>
	  	<slot></slot>
		</span>
	</a>
</template>
<script>
export default {
	props: {
		href: String,
		target: String
	}
}
</script>
<style lang="scss" scoped>
$border: 3px;
$color: #333;
$gradient-1: #15CFE8;
$gradient-2: #031A34;

.btn {
	margin:10px;
  position: relative;
  z-index: 1;
  display: inline-block;
  font-size: 15px;
  font-weight: 900;
  letter-spacing: .5px;
  text-transform: uppercase;
  color: $color;
  padding: 9px 18px;
  cursor: pointer;
  transition: all .1s ease-in-out;
  line-height: .95;
  text-decoration:none;
  
  &:before, &:after {
    content: '';
    background-image: -webkit-linear-gradient(#333, #333);
    position: absolute;
    width: calc(100% + #{$border*2});
    height: calc(100% + #{$border*2});
    left: -$border;
    top: -$border;
    border-radius: $border * 2;
    z-index: -2;
    transition: all .2s ease-in-out;
  }
  
  &:after {
    background: #fff;
    width: 100%;
    height: 100%;
    z-index: -1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: $border;
  }
  
  &:hover {
		&:before {
			background-image: -webkit-linear-gradient(330deg, #9b28ff 1%, #ed8200 80%, #ed8200 100%);
		}
  }
  
  &:active {
		transform:scale(0.97);
    
    &:before {
      background-image: -webkit-linear-gradient(330deg, #9b28ff 1%, #ed8200 80%, #ed8200 100%);
      box-shadow: inset 0 3px 8px rgba(0,0,0,.5);
    }
  }
}

</style>