<template>
<div class="maincontainer">
<p>首次进入或者刷新时轮播图首屏内容为空</p>
<mt-swipe :auto="4000" style="background:red">
  <mt-swipe-item>1</mt-swipe-item>
  <mt-swipe-item>2</mt-swipe-item>
  <mt-swipe-item>3</mt-swipe-item>
</mt-swipe>
</div>
</template>
<script>
export default {

}
</script>

<style scoped>
.maincontainer{
width: 500px;
height: 500px;
border: 1px solid black;
background: gray
}
</style>
