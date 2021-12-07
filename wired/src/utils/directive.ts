import { App, ObjectDirective } from 'vue';

const drag: ObjectDirective = {
    mounted(el: HTMLButtonElement) {
        // el.onmousedown = (ev) => {
        //     console.log(ev);
        //     // 鼠标按下的位置
        //     const mouseXStart = ev.clientX;
        //     const mouseYStart = ev.clientY;
        //     console.log("按下开始", mouseXStart, mouseYStart);
        //     // 当前滑块位置
        //     const rectLeft = el.offsetLeft;
        //     const rectTop = el.offsetTop;
        //     document.onmousemove = (e) => {
        //         // 鼠标移动的位置
        //         const mouseXEnd = e.clientX;
        //         const mouseYEnd = e.clientY;
        //         const moveX = mouseXEnd - mouseXStart + rectLeft;
        //         const moveY = mouseYEnd - mouseYStart + rectTop;
        //         console.log(rectLeft, rectTop);
        //         el.style["top"] = moveY + "px";
        //         el.style["left"] = moveX + "px";
        //     };
        //     document.onmouseup = () => {
        //         console.log("鼠标抬起");
        //         // 取消事件
        //         document.onmousemove = null;
        //     };
        // };

        console.log('el', el);
        el.style.cursor = 'move'
        el.onmousedown = function (e) {
            let disx: number = e.pageX - el.offsetLeft
            let disy: number = e.pageY - el.offsetTop
            document.onmousemove = function (e) {
                let x: number = e.pageX - disx
                let y: number = e.pageY - disy
                let maxX: number = document.body.clientWidth - parseInt(window.getComputedStyle(el).width)
                let maxY: number = document.body.clientHeight - parseInt(window.getComputedStyle(el).height)
                if (x < 0) {
                    x = 0
                } else if (x > maxX) {
                    x = maxX
                }

                if (y < 0) {
                    y = 0
                } else if (y > maxY) {
                    y = maxY
                }

                el.style.left = x + 'px'
                el.style.top = y + 'px'
            }
            document.onmouseup = function () {
                document.onmousemove = document.onmouseup = null
            }
        }
    },
}

/**
 * 注册全局自定义指令
 * @param app
 */
export function setupDirectives(app: App) {
    // 权限控制指令
    app.directive('drag', drag);
}

