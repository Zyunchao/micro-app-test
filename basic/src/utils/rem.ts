import store from '@/store'

const rootValue = 100 // 根数值  1rem = 100px
const baseSize = 1920 // 设计稿基础尺寸 1920 基准
const minClientWidth = 1600 // 适配的最小 屏幕 1300
const maxClientWidth = 5280 // 1920 // 适配最大屏幕，注：市场上更多的高分辨率屏幕，如果宽度过大，同样会导致基准过大，暂时先最高适配到 1920

let docEl = document.documentElement
let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'

function recalc() {
    let clientWidth = docEl.clientWidth

    let ratio = 1
    if (clientWidth >= minClientWidth && clientWidth <= maxClientWidth) {
        ratio = clientWidth / baseSize
    } else if (clientWidth < minClientWidth) {
        ratio = minClientWidth / baseSize
    } else if (clientWidth > maxClientWidth) {
        ratio = maxClientWidth / baseSize
    }

    // rem
    docEl.style.fontSize = `${rootValue * ratio}px`

    // 比例
    store.commit('currentStatus/setScreenRatio', ratio)
}

window.addEventListener(resizeEvt, recalc, false)
document.addEventListener('DOMContentLoaded', recalc, false)
