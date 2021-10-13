/**
 * 广度优先搜索
 * @param list json数据
 */
const bfs = (arr) => {
    const list = [...arr];
    const heads = [{ id: 0, children: [] }]; // 创建一个头指针，heads[0].children就是最终结果
    const levels = [heads]; // 按层存储，每层都是一个数组
    let lv = 0; // 层级
    let count = 0; // 统计复杂度
    while (list.length > 0) {
        const level = levels[lv];
        // 遍历第lv层，找该层第j个元素的children
        for (let j = 0; j < level.length; j++) {
            let i = 0;
            // 遍历原数据
            while (i < list.length) {
                count++;
                if (list[i].parentId === level[j].id) {
                    if (!level[j].children) { level[j].children = []; }
                    level[j].children.push(list[i]); // 挂到父级节点下
                    if (!levels[lv + 1]) { levels.push([]); }
                    levels[lv + 1].push(list[i]); // 孩子属于下一层
                    list.splice(i, 1); // 移除
                } else {
                    i++; // 指针继续
                }
            }
        }
        lv++; // 层级
    }
    console.log('bfs=', count)
    console.log('lv=', lv)
    return levels[0][0].children;
}

const data = [
    { "id": 20, "parentId": 0, "name": "一级菜单1" },
    { "id": 21, "parentId": 0, "name": "一级菜单2" },
    { "id": 22, "parentId": 0, "name": "一级菜单3" },
    { "id": 23, "parentId": 0, "name": "一级菜单4" },
    { "id": 24, "parentId": 20, "name": "二级菜单" },
    { "id": 25, "parentId": 20, "name": "二级菜单" },
    { "id": 26, "parentId": 24, "name": "三级菜单" },
    { "id": 27, "parentId": 24, "name": "三级菜单" },
    { "id": 28, "parentId": 21, "name": "二级菜单" },
    { "id": 29, "parentId": 21, "name": "二级菜单" },
    { "id": 30, "parentId": 29, "name": "三级菜单" },
    { "id": 31, "parentId": 30, "name": "四级菜单" },
    { "id": 32, "parentId": 31, "name": "五级菜单" }
]

console.log(bfs(data));