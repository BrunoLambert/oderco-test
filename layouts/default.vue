<template lang="">
    <div class="app-layout">
        <LayoutAlert />
        <LayoutHeader />
        <slot />
    </div>
</template>

<script>
export default {
  layout: "default",
};
</script>

<style lang="css">
.app-layout {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>