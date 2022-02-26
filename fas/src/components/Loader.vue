<template>
  <div class="container">
  <div class="loading">
    <div class="loading-content">
      Loading...
    </div>
  </div>

  <p class="block">Caching Data</p>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.loading {
  --angle: 0deg;
  padding: 8px;
  min-width: 203px;
  position: relative;
  display: inline-block;
  background: conic-gradient(
    from var(--angle),
    #4A90E2 0deg 90deg,
    #EFF1F4 90deg 360deg
  );
  border-radius: 3px;
  animation: 3s rotate linear infinite;
}

.loading::before {
  content: "";
  background: #FFFFFF;
  border-radius: 2px; /* 1px smaller */
  position: absolute;
  top: 1px;
  bottom: 1px;
  left: 1px;
  right: 1px;
  z-index: 0;
}

.loading-content {
  z-index: 1;
  position: relative;
  font-family: sans-serif;
  font-size: 12px;
  color: rgba(6, 8, 33, 0.3);
}

@keyframes rotate {
  to {
    --angle: 360deg;
  }
}

@property --angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}


</style>