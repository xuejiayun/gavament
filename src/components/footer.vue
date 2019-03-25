<template>
    <div>
        <footer>
            <p>
                <span>主办单位：南通市大数据管理局</span>
                <span>技术支持：江苏飞博软件股份有限公司</span>
            </p>
            <p>
                <span>电子邮箱：bigdata@nantong.gov.cn</span>
                <span>联系电话：0513-85216778</span>
            </p>
        </footer>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped lang="scss">
    footer {
        background: #444444;
        height: 86px;
        font-size: 12px;
        p {
            color: #fff;

        }
        p:nth-of-type(1) {
            padding: 23px 0 11px;
        }
        span {
            text-align: left;
            display: inline-block;
            width: 256px;
        }
    }
</style>