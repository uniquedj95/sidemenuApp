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
          <template v-for="(menu, i) of appMenu">
            <menu-item :item="menu" v-if="!menu.children?.length" :key="menu.label" />
            <ion-accordion-group v-else :key="i">
              <ion-accordion :value="menu.label" :key="menu.label">
                <ion-item slot="header">
                  <ion-label>{{ menu.label }}</ion-label>
                  <ion-icon :icon="menu.icon" slot="start"></ion-icon>
                </ion-item>
                <div class="ion-padding-start" slot="content">
                  <template v-for="(child1, i) of  menu.children">
                    <menu-item :item="child1" v-if="!child1.children?.length" :key="child1.label" />
                    <ion-accordion-group v-else :key="i">
                      <ion-accordion :value="child1.label" :key="child1.label">
                        <ion-item slot="header">
                          <ion-label>{{ child1.label }}</ion-label>
                          <ion-icon :icon="child1.icon" slot="start"></ion-icon>
                        </ion-item>
                        <div class="ion-padding-start" slot="content">
                          <menu-item v-for="child2 of child1.children" :item="child2"  :key="child2.label" />
                        </div>
                      </ion-accordion>
                    </ion-accordion-group>
                  </template>
                </div>
              </ion-accordion>
            </ion-accordion-group>
          </template>          
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
  IonItem, 
  IonLabel, 
  IonIcon, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonAccordion, 
  IonAccordionGroup 
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
    IonItem, 
    IonLabel, 
    IonIcon,
    IonAccordionGroup,
    IonAccordion,
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


