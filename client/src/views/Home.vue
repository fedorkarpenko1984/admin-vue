<template>
  <div class="home">
    <h1 class="greeting">{{ greeting }}</h1>
  </div>
</template>

<script>

  //определяет по часам, прошедшим от полуночи время суток и подходящее приветствие
  const getGreeting = () => {
    const greetings = ['Доброй ночи!', `Доброго утра!`, 'Доброго дня!', 'Доброго вечера!'];
    const hours = new Date().getHours();
    const numOfGreeting = Math.round(hours/6 + 0.5) - 1;
    return greetings[numOfGreeting]
  }

export default {
  data: () => ({
    greeting: ''
  }),

  mounted() {
    this.greeting = getGreeting()
  }
}

</script>

<style>
  .home {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .greeting {
    color: dimgrey;
    font-size: 40px;
  }
</style>