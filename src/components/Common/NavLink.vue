<template>
  <q-item
    :class="
      `rounded-border ${
        $route.name.includes(name) ? 'bg-blue-1 text-primary' : ''
      }`
    "
    :href="link"
    clickable
    target="_blank"
    @click="routerLink(link)"
    class="column items-center q-gutter-y-md"
  >
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>
        <!-- {{ caption }} -->
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'NavLink',
  props: {
    title: {
      type: String,
      required: true
    },
    caption: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: '#'
    },
    name: {
      type: String,
      default: ''
    },

    icon: {
      type: String,
      default: ''
    }
  },
  computed: {
    currentRouter() {
      return this.$route.path;
    }
  },
  methods: {
    routerLink(link) {
      if (link !== this.currentRouter) {
        this.$router.push(link);
      }
    }
  }
};
</script>
