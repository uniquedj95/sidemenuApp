<template>
  <ion-accordion-group v-if="item.children?.length">
    <ion-accordion :value="item.label" :toggle-icon="chevronForward">
      <ion-item slot="header">
        <img v-if="item.img" :src="item.img" :alt="item.label" class="ion-margin-end icon" />
        <ion-label>{{ item.label }}</ion-label>
        <ion-icon v-if="item.icon" :icon="item.icon" slot="start"></ion-icon>
      </ion-item>
      <div class="ion-padding-start" slot="content">
        <menu-item v-for="(child, i) of item.children" :key="i" :item="child" />
      </div>
    </ion-accordion>
  </ion-accordion-group>
  <ion-menu-toggle :auto-hide="true" v-else>
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
import { MenuItem as MenuItemInterface } from '@/appMenu';
import { IonMenuToggle, IonItem, IonLabel, IonIcon, IonAccordion, IonAccordionGroup } from '@ionic/vue';
import { chevronForward } from 'ionicons/icons';
import { defineComponent, PropType } from 'vue'
import { RouterLink } from 'vue-router';

export default defineComponent({
  name: "MenuItem",
  components: {
    RouterLink, 
    IonMenuToggle,
    IonAccordionGroup,
    IonAccordion,
    IonItem,
    IonLabel,
    IonIcon
  },
  props: {
    item: {
      type: Object as PropType<MenuItemInterface>,
      required: true
    }
  },
  data: () => ({
    chevronForward,
  })
})
</script>
