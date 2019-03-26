<template>
  <div>
    <p>Name: {{ value }}</p>
    <p>
      <Button @click="handleRender">Custom content render</Button>
      <Button @click="handleJsx">Custom content jsx</Button>
    </p>
    <Table style="margin:20px 300px;" border :columns="columns7" :data="data6"></Table>
  </div>
</template>
<script>
export default {
  name: "IviewRender",
  data() {
    return {
      value: "",
      columns7: [
        {
          title: "Name",
          key: "name",
          render: (h, params) => {
            return (
              <div>
                <Icon type="md-person" />
                <strong>{params.row.name}</strong>
              </div>
            );
          }
        },
        {
          title: "Age",
          key: "age"
        },
        {
          title: "Address",
          key: "address"
        },
        {
          title: "Action",
          key: "action",
          width: 250,
          align: "center",
          render: (h, params) => {
            return (
              <div>
                <Button
                  on-click={()=>{this.show(params.index)}}
                  style="margin-right:5px"
                  type="primary"
                  size="small"
                >View</Button>
                <Button
                  on-click={()=>{this.remove(params.index)}}
                  type="error"
                  size="small"
                >Delete</Button>
              </div>
            );
          }
        }
      ],
      data6: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park"
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park"
        }
      ]
    };
  },
  methods: {
    handleRender() {
      this.$Modal.confirm({
        render: h => {
          return h("Input", {
            props: {
              value: this.value,
              autofocus: true,
              placeholder: "Please enter your name..."
            },
            on: {
              input: val => {
                this.value = val;
              }
            }
          });
        }
      });
    },
    handleJsx() {
      this.$Modal.confirm({
        render: () => {
          return (
            <Input
              v-model={this.value}
              autofocus={true}
              placeholder="Please enter your name..."
            />
          );
        }
      });
    },
    show(index) {
      this.$Modal.info({
        title: "User Info",
        content: `Name：${this.data6[index].name}<br>Age：${
          this.data6[index].age
        }<br>Address：${this.data6[index].address}`
      });
    },
    remove(index) {
      this.data6.splice(index, 1);
    }
  }
};
</script>
<style lang="scss" scoped>

</style>

