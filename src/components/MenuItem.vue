<template>
  <ion-menu-toggle :auto-hide="true">
    <router-link :to="item.url || '#'" #="{ isActive, isExactActive}">
      <ion-item button :color="isActive && isExactActive ? 'primary' : ''">
        <img v-if="item.img" :src="item.img" class="ion-margin-end icon" />
        <ion-label>{{ item.label }}</ion-label>
        <ion-icon v-if="item.icon" :icon="item.icon" slot="start"></ion-icon>
      </ion-item>
    </router-link>
  </ion-menu-toggle>
</template>

<script lang="ts">
import { MenuItem } from '@/appMenu';
import { IonMenuToggle, IonItem, IonLabel, IonIcon } from '@ionic/vue';
import { defineComponent, PropType } from 'vue'
import { RouterLink } from 'vue-router';

export default defineComponent({
  name: "MenuItem",
  components: {
    RouterLink, 
    IonMenuToggle,
    IonItem,
    IonLabel,
    IonIcon
  },
  props: {
    item: {
      type: Object as PropType<MenuItem>,
      required: true
    }
  },
})
</script>
