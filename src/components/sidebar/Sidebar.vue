<template>
  <div>
    <b-nav vertical>
      <template v-for="(item, index) in menuItems">
      <b-nav-item
        v-if="!item.children"
        :key="index"
        :to="item.route"
      >
        {{ item.label }}
      </b-nav-item>

      <b-nav-item-dropdown
        v-else
        :key="index"
        :text="item.label"
      >
        <template v-for="(child, i) in item.children">
          <b-nav-item
            :key="`${index}-${i}`"
            :to="child.route"
          >
            {{ child.label }}
          </b-nav-item>
        </template>
      </b-nav-item-dropdown>
    </template>
    </b-nav>
    <div v-if="data">12312321</div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",

  data() {
    return {
      data: null,
      menuItems: [
        {
          id: 1,
          label: "Menu item 1",
          children: [
            {
              id: 2,
              label: "Menu item 1.1",
              children: [
                {
                  id: 3,
                  label: "Menu item 1.1.1",
                },
                {
                  id: 4,
                  label: "Menu item 1.1.2",
                },
              ],
            },
            {
              id: 5,
              label: "Menu item 1.2",
            },
          ],
        },
        {
          id: 6,
          label: "Menu item 2",
        },
      ],
    };
  },
  mounted() {
    this.$http
      .get("http://172.18.0.246:89/api/v1/menu/all")
      .then((response) => {
        this.data = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
div {
  background-color: #424040;
  min-height: 100vh;
  color: white;
}
</style>
