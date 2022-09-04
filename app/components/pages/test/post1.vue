<template>
  <GridLayout rows="*,auto" columns="*,*">
    <!-- <WebView src="https://www.nativescript.org" colSpan="2" /> -->
    <Button row="1" col="0" text="Button 1" class="btn btn-primary" @tap="getLastNews()" />
    <Button row="1" col="1" text="Button 2" class="btn btn-primary" />
    <label :text="home"></label>
</GridLayout>
</template>

<script>

export default {


}
</script>

<style>

</style>