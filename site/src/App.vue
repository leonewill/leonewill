<template>
  <div id="app" class="min-h-screen bg-black">
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.5s;
}
.fade-enter-active {
  transition-delay: 0s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
