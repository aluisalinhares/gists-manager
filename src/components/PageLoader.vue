<template>
  <div class="flex items-center justify-center min-h-screen">
    <div class="lds-bounce">
      <div />
      <div />
    </div>
  </div>
</template>
  
<style scoped>
.lds-bounce {
    display: flex;
    justify-content: center;
}

.lds-bounce div {
    width: 18px;
    height: 18px;
    background: #14213D;
    border-radius: 50%;
    margin: 0 6px;
    animation: lds-bounce 0.6s infinite ease-in-out;
}

.lds-bounce div:nth-child(2) {
    animation-delay: -0.3s;
}

@keyframes lds-bounce {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-18px);
    }
}
</style>
  