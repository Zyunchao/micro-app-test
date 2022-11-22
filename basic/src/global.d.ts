declare let SVG_ROOT: string
declare let proBaseUrl: string

// window 扩展属性
interface Window {
    __MICRO_APP_LIST__: {
        name: string
        url: string
        keepAlive?: boolean
    }[]
    /**
     * 基座应用运行模式
     */
    __RUN_MODE__: string
    /**
     * 帆软报表基础请求地址
     */
    __STATEMENT_BASE_URL__: string
}
