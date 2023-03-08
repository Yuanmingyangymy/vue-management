export default {
    state: {
        isCollapse: false, // 用于控制侧边栏的展开/折叠
    },
    mutations: {
        // 修改侧边栏状态的方法
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
        }
    }
}