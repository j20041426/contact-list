<template>
  <div>
    <div class="header">
      <mu-flat-button class="menu"><i style="color:#fff" class="material-icons">menu</i></mu-flat-button>
      <div class="title">
        <div>Sunday 3:16 PM</div>
        <div>9th March</div>
      </div>
      <mu-flat-button class="new">+ New</mu-flat-button>
    </div>
    <div class="navtab">
      <mu-flat-button @click="changeClass(0)" :class="{active:currClass==0}">Priority</mu-flat-button>
      <mu-flat-button @click="changeClass(1)" :class="{active:currClass==1}">Recent</mu-flat-button>
      <mu-flat-button @click="changeClass(2)" :class="{active:currClass==2}">All</mu-flat-button>
      <mu-flat-button @click="changeClass(3)" :class="{active:currClass==3}">Complete</mu-flat-button>
    </div>
    <div class="slide">
      <div></div>
    </div>
    <div class="content"></div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      currTime: '',
      currClass: 0
    }
  },
  methods : {
    changeClass (newClass) {
      this.currClass = newClass;
      document.querySelector(".slide").style.left = newClass*25 + "%";
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
  .header {
    width: 100%;
    height: 3.2rem;
    background-color: #484b76;
    display: flex;
    color: white;
  }
  
  .header .menu {
    width: 3.2rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
    min-width: 3.2rem !important;
  }
  
  .header .title {
    width: 9.6rem;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    font-size: 0.8rem;
    flex-direction: column;
  }
  
  .header>.title>div:last-of-type {
    font-size: 0.7rem;
    color: #8283b9;
  }
  
  .header .new {
    width: 3.2rem;
    min-width: 3.2rem !important;
    height: 100%;
    background-color: #313967;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
    color: #fff;
  }
  
  .navtab {
    display: flex;
    height: 3.5rem;
  }
  
  .navtab button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    font-size: 0.6rem;
    color: #a8a8a8;
    height: 100%;
    min-width: 0 !important;
  }
  
  .navtab .active {
    color: #59575c;
  }
  
  .slide {
    width: 25%;
    position: absolute;
    left: 0;
    transition: left ease-in-out 0.2s;
  }
  
  .slide div {
    width: 1.75rem;
    height: 4px;
    background-color: #dedde2;
    margin: 0 auto;
  }
  
  .content {
    margin-top: 4px;
  }
</style>
