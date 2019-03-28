/**
 * 加载页面组件，可支持懒加载
 * @param component
 * @returns {Function}
 */
const getComponent = component => {
    return resolve => {
        require([`@/${component}.vue`], resolve)
    }
}
/* nav导航 */
const home = {
    path: '/',
    name: 'index',
    component: getComponent('views/index'),
    redirect: 'home',
    children: [
        {
            path: '/home',
            name: 'home',
            component: getComponent('views/home')
        },
        {
            path: '/infoData:name?',
            name: 'infoData',
            component: getComponent('components/infoData')
        },
        {
            path: '/infoDetail',
            name: 'infoDetail',
            component: getComponent('components/infoDetail')
        }
    ]
}
/* login导航 */
const login = {
    path: '/login',
    name: 'login',
    component: getComponent('views/login')
}