function bfs(arr) {
    const list = [...arr];
    const head = [{ id: 0 }];
    const levels = [head];
    let lv = 0;

    while (list.length) {
        let level = levels[lv];
        for (let j = 0; j < level.length; j++) {
            let i = 0;
            while (i < list.length) {
                if (level[j].id === list[i].parentId) {
                    if (!level[j].children) { level[j].children = []; }
                    level[j].children.push(list[i]);
                    if (!levels[lv + 1]) levels.push([]);
                    levels[lv + 1].push(list[i]);
                    list.splice(i, 1);
                } else {
                    i++;
                }
            }
        }
        lv++; // important，否则死循环。加一层
    }

    return levels[0][0].children;
}

const data = require('./data.js');
console.log(bfs(data));