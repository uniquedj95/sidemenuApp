<template>
  <ion-menu menu-id="app-menu" content-id="main-content" auto-hide="true">
    <ion-header>
      <ion-toolbar>
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <keep-alive>
        <ion-list>
          <menu-item v-for="(item, i) of appMenu" :key="i" :item="item" />
        </ion-list>
      </keep-alive>
    </ion-content>
  </ion-menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { appMenu } from "@/appMenu"
import MenuItem from "@/components/MenuItem.vue"
import { 
  IonMenu, 
  IonContent, 
  IonList, 
  IonHeader, 
  IonTitle, 
  IonToolbar,
} from "@ionic/vue";

export default defineComponent({
  name: "SideMenu",
  components: { 
    IonMenu, 
    IonContent, 
    IonHeader, 
    IonToolbar,
    IonTitle, 
    IonList,
    MenuItem,
  },
  setup() {
    return {
      appMenu,
    }
  },
})
</script>

<style>
a {
  text-decoration: none;
}
</style>


