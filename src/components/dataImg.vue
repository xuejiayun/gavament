<template>
  <div
    id="chart"
    v-loading='loading'
  >

  </div>
</template>
<script>
import echart from "echarts";
export default {
  data() {
    return {
      loading: true
    };
  },
  props: {
    id: [String, Number],
    resType: [String, Number]
  },
  methods: {
    draw() {
      let myChart = echart.init(document.getElementById("chart"));
      let size1 = 30;
      let size2 = 25;
      let size3 = 20;
      let size4 = 15;
      let size5 = 10;
      let data = [];
      let links = [];
      let categories = [
        {
          name: "a"
        },
        {
          name: "b"
        },
        {
          name: "c"
        }
      ];
      this.$axios
        .get("portalResource/getDataImage", {
          params: {
            id: this.id,
            resType: this.resType
          }
        })
        .then(res => {
          data.push({
            name: res[0].name,
            symbolSize: size1,
            category: categories[0],
            draggable: "true",
            itemStyle: {
              normal: {
                color: "#ff9732",
                borderColor: "#eb7400"
              }
            },
            label: {
              normal: {
                show: true,
                textStyle: {
                  color: "#333"
                }
              }
            }
          });
          let childrens = res[0].childrens;
          let rootName = res[0].name;
          childrens.forEach((m, i) => {
            data.push({
              name: m.name,
              symbolSize: size2,
              category: categories[1],
              draggable: "true",
              itemStyle: {
                normal: {
                  color: "#00aded",
                  borderColor: "#009ad3"
                }
              },
              label: {
                normal: {
                  show: true,
                  textStyle: {
                    color: "#333"
                  }
                }
              }
            });
            links.push({
              source: rootName,
              target: m.name
            });
            //level=3
            if (m.childrens && m.childrens.length > 0) {
              m.childrens.forEach((y, x) => {
                data.push({
                  name: y.name,
                  symbolSize: size3,
                  category: categories[2],
                  draggable: "true",
                  itemStyle: {
                    normal: {
                      color: "#68db68",
                      borderColor: "#46c546"
                    }
                  },
                  label: {
                    normal: {
                      show: true,
                      textStyle: {
                        color: "#333"
                      }
                    }
                  }
                });
                links.push({
                  source: m.name,
                  target: y.name
                });
                //level=4;
                if (y.childrens && y.childrens.length > 0) {
                  y.childrens.forEach((b, a) => {
                    data.push({
                      name: b.name,
                      symbolSize: size4,
                      category: categories[2],
                      draggable: "true",
                      itemStyle: {
                        normal: {
                          color: "#68db68",
                          borderColor: "#46c546"
                        }
                      },
                      label: {
                        normal: {
                          show: true,
                          textStyle: {
                            color: "#333"
                          }
                        }
                      }
                    });
                    links.push({
                      source: y.name,
                      target: b.name
                    });
                    //level=5
                    if (b.childrens && b.childrens.length > 0) {
                      b.childrens.forEach((d, c) => {
                        data.push({
                          name: d.name,
                          symbolSize: size5,
                          category: categories[2],
                          draggable: "true",
                          itemStyle: {
                            normal: {
                              color: "#68db68",
                              borderColor: "#46c546"
                            }
                          },
                          label: {
                            normal: {
                              show: true,
                              textStyle: {
                                color: "#333"
                              }
                            }
                          }
                        });
                        links.push({
                          source: b.name,
                          target: d.name
                        });
                      });
                    }
                  });
                }
              });
            }
          });
          let option = {
            tooltip: {
              formatter: "{b}"
            },
            backgroundColor: "#fff",
            animationDuration: 1000,
            animationEasingUpdate: "quinticInOut",
            series: [
              {
                name: "数据图谱",
                type: "graph",
                layout: "force",
                force: {
                  repulsion: 500,
                  gravity: 0.1,
                  edgeLength: 30,
                  layoutAnimation: true
                },
                data: data,
                links: links,
                categories: [],
                roam: true,
                label: {
                  normal: {
                    show: true,
                    position: "right",
                    formatter: "{b}",
                    fontSize: 12
                  }
                },
                lineStyle: {
                  normal: {
                    width: 2,
                    color: "source",
                    curveness: 0,
                    type: "solid"
                  }
                },
                textStyle: {
                  color: "#333"
                }
              }
            ]
          };
          myChart.setOption(option);
          this.loading = false;
        })
        .catch(err => {});
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.draw();
    });
  }
};
</script>