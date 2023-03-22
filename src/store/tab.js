export default {
    state: {
        isCollapse: false, // 用于控制侧边栏的展开/折叠
        tabsList: [
            {
                path: "/",
                name: "home",
                label: "首页",
                icon: "s-home",
                url: "Home/Home",
              },
        ] // 面包屑数据
    },
    mutations: {
        // 修改侧边栏状态的方法
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
        },
        // 更新面包屑数据
        selectMenu(state, val) {
            // console.log(val, 'val');
            // 判断添加的数据是否为首页，如果是则不改变，不是则修改
            if(val.name !== 'home') {
                const index = state.tabsList.findIndex(item => item.name === val.name)
                // 判断tabList中是否已有该路由名称，若无则添加
                if(index === -1) {
                    state.tabsList.push(val)
                }

            }
        },
        // 删除tag触发的操作
        closeTag(state, item) {
            const index = state.tabsList.findIndex(val => val.name === item.name)
            state.tabsList.splice(index, 1)
        }
    }
}