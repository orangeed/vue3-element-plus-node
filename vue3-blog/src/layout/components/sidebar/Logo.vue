<template>
  <div class="sidebar-logo-container" :class="{ collapse: collapse }">
    <transition name="sidebarLogoFade">
      <router-link
        v-if="collapse"
        key="collapse"
        :title="settings.title"
        class="sidebar-logo-link"
        to="/"
      >
        <!-- <i class="fa fa-optin-monster"></i> -->
        <!-- <h1 class="sidebar-title">{{ settings.title }}</h1> -->
        <div class="moble-logo">
          <img src="../../../assets/logo.png" />
        </div>
        <h1 class="sidebar-title">{{ settings.title }}</h1>
      </router-link>
      <router-link
        v-else
        key="expand"
        :title="settings.title"
        class="sidebar-logo-link"
        to="/"
      >
        <!-- <i class="fa fa-optin-monster"></i> -->
        <div class="logo">
          <img src="../../../assets/logo.png" class="logo-img" />
          <h1 class="sidebar-title">{{ settings.title }}</h1>
        </div>
      </router-link>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import settings from "/@/settings";
export default defineComponent({
  props: {
    collapse: {
      type: Boolean,
      required: true,
    },
  },
  setup() {
    return {
      settings,
    };
  },
});
</script>

<style lang="scss" scoped>
.sidebar-logo-container {
  position: relative;
  width: 100%;
  height: 50px;
  background: #2b2f3a;
  text-align: center;
  overflow: hidden;

  .sidebar-logo-link {
    height: 100%;
    display: flex;

    .sidebar-title {
      display: inline-block;
      margin: 0;
      color: #fff;
      font-weight: 600;
      line-height: 50px;
      font-size: 20px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
    }

    // .fa-optin-monster {
    //   font-size: 38px;
    //   color: #1890ff;
    //   margin-top: 5px;
    // }
    .logo {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      .logo-img {
        width: 32px;
        margin: 0 10px 0 0;
      }
    }
    .moble-logo {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 32px;
        height: 32px;
        margin: 0 12px;
      }
    }
  }

  .collapse {
    .sidebar-logo {
      margin-right: 0px;
    }
  }
}
</style>
