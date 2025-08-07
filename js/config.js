kk

首页
/
白嫖资源
/
正文
白嫖资源
白嫖腾讯羊毛，实现搭建私人影院，内置黄色资源，国内延迟吊打cloudflare
Administrator
Administrator
2025-07-31
/
0 评论
/
3 点赞
/
1570 阅读
/
459 字
/
推送成功！
为什么使用EdgeOne部署私人影院
优点
线路优化更好：因为CF对国内的线路优化并不好，延迟比较高个别地方甚至打不开
自动部署：更新了代码自动会重新部署不需要手动部署
缺点
域名托管要求：需要托管一个域名才能使用国内加速
部署步骤
1. 注册EdgeOne账号
首先我们打开 EdgeOne官网，自己注册一个账号然后点击登录

2. 获取免费计划
然后我们打开 EdgeOne免费计划页面 进行测速，然后把测速结果分享到X和Facebook就行了（不用真的分享只要点击一下就行了）

3. 域名配置
有域名：最好托管到EdgeOne上面这样可以使用国内加速
无域名：只能使用国外的加速
NS解析：这里的NS解析和CF大致一样，大家自己配置一下NS解析就行了
499dd8434d3063d5adfd3154f51afcca-ZbkU.png
52b14b9558e0b7b3b300b7c90dbc4769.png
4. 创建Pages项目
新增了域名以后我们来到主页点击Pages新增项目选择导入GitHub仓库，这里绑定自己的GitHub即可

6a947df192657aaa906c542446701966.png

5. Fork项目仓库
然后打开仓库地址 LibreTV项目，点击左上角的fork到自己的仓库

image-sttr.png

6. 修改配置文件
然后我们打开自己的仓库选择 js目录下面的 config.js，点击右上角的编辑将以下内容替换掉原先的内容：

24fcd9aeb9e23824ef4c9123be8bb1e5.png

ea963a95ad5079f7c031a835e6c68959.png

点击展开配置代码
// 全局常量配置
const PROXY_URL = '/proxy/';    // 适用于 Cloudflare, Netlify (带重写), Vercel (带重写)
// const HOPLAYER_URL = 'https://hoplayer.com/index.html';
const SEARCH_HISTORY_KEY = 'videoSearchHistory';
const MAX_HISTORY_ITEMS = 5;

// 密码保护配置
const PASSWORD_CONFIG = {
    localStorageKey: 'passwordVerified',  // 存储验证状态的键名
    verificationTTL: 90 * 24 * 60 * 60 * 1000,  // 验证有效期（90天，约3个月）
    adminLocalStorageKey: 'adminPasswordVerified'  // 新增的管理员验证状态的键名
};

// 网站信息配置
const SITE_CONFIG = {
    name: 'LibreTV',
    url: 'https://libretv.is-an.org',
    description: '免费在线视频搜索与观看平台',
    logo: 'image/logo.png',
    version: '1.0.3'
};

// API站点配置
const API_SITES = {
    dyttzy: {
        api: 'http://caiji.dyttzyapi.com/api.php/provide/vod',
        name: '电影天堂资源',
        detail: 'http://caiji.dyttzyapi.com', 
    },
    ruyi: {
        api: 'https://cj.rycjapi.com/api.php/provide/vod',
        name: '如意资源',
    },
    bfzy: {
        api: 'https://bfzyapi.com/api.php/provide/vod',
        name: '暴风资源',
    },
    tyyszy: {
        api: 'https://tyyszy.com/api.php/provide/vod',
        name: '天涯资源',
    },
    xiaomaomi: {
        api: 'https://zy.xmm.hk/api.php/provide/vod',
        name: '小猫咪资源',
    },
    ffzy: {
        api: 'http://ffzy5.tv/api.php/provide/vod',
        name: '非凡影视',
        detail: 'http://ffzy5.tv', 
    },
    heimuer: {
        api: 'https://json.heimuer.xyz/api.php/provide/vod',
        name: '黑木耳',
        detail: 'https://heimuer.tv', 
    },
    zy360: {
        api: 'https://360zy.com/api.php/provide/vod',
        name: '360资源',
    },
    iqiyi: {
        api: 'https://www.iqiyizyapi.com/api.php/provide/vod',
        name: 'iqiyi资源',
    },
    wolong: {
        api: 'https://wolongzyw.com/api.php/provide/vod',
        name: '卧龙资源',
    }, 
    hwba: {
        api: 'https://cjhwba.com/api.php/provide/vod',
        name: '华为吧资源',
    },
    jisu: {
        api: 'https://jszyapi.com/api.php/provide/vod',
        name: '极速资源',
        detail: 'https://jszyapi.com', 
    },
    dbzy: {
        api: 'https://dbzy.tv/api.php/provide/vod',
        name: '豆瓣资源',
    },
    mozhua: {
        api: 'https://mozhuazy.com/api.php/provide/vod',
        name: '魔爪资源',
    },
    mdzy: {
        api: 'https://www.mdzyapi.com/api.php/provide/vod',
        name: '魔都资源',
    },
    zuid: {
        api: 'https://api.zuidapi.com/api.php/provide/vod',
        name: '最大资源'
    },
    yinghua: {
        api: 'https://m3u8.apiyhzy.com/api.php/provide/vod',
        name: '樱花资源'
    },
    baidu: {
        api: 'https://api.apibdzy.com/api.php/provide/vod',
        name: '百度云资源'
    },
    wujin: {
        api: 'https://api.wujinapi.me/api.php/provide/vod',
        name: '无尽资源'
    },
    wwzy: {
        api: 'https://wwzy.tv/api.php/provide/vod',
        name: '旺旺短剧'
    },
    ikun: {
        api: 'https://ikunzyapi.com/api.php/provide/vod',
        name: 'iKun资源'
    },
    lzi: {
        api: 'https://cj.lziapi.com/api.php/provide/vod/',
        name: '量子资源站'
    },
    testSource: {
        api: 'https://www.example.com/api.php/provide/vod',
        name: '空内容测试源',
        adult: true
    },
    // 下面是一些成人内容的API源，默认隐藏，使用本项目浏览黄色内容违背项目初衷
    // 互联网上传播的色情内容将人彻底客体化、工具化，是性别解放和人类平等道路上的巨大障碍。
    // 这些黄色影片是资本主义父权制压迫的最恶毒体现，它将暴力和屈辱商品化，践踏人的尊严，对受害者造成无法弥愈的伤害，并毒害社会关系。
    // 资本为了利润，不惜将最卑劣的剥削（包括对受害者和表演者的剥削）和暴力商品化，
    // 把性别剥削塑造成"性享受"麻痹观众的意识，转移我们对现实生活中矛盾和压迫的注意力。
    // 这些影片和背后的产业已经使数百万男女"下海"，出卖自己的身体，甚至以此为生计。
    // 而作为观众无辜吗？毫无疑问，他们促成了黄色产业链的再生产。
    // 我们提供此警告，是希望您能认清这些内容的本质——它们是压迫和奴役的工具，而非娱乐。
    ckzy: {
        api: 'https://www.ckzy1.com',
        name: 'CK资源',
        adult: true
    },
    jkun: {
        api: 'https://jkunzyapi.com',
        name: 'jkun资源',
        adult: true
    },
    bwzy: {
        api: 'https://api.bwzym3u8.com',
        name: '百万资源',
        adult: true
    },
    souav: {
        api: 'https://api.souavzy.vip',
        name: 'souav资源',
        adult: true
    },
    r155: {
        api: 'https://155api.com',
        name: '155资源',
        adult: true
    },
    lsb: {
        api: 'https://apilsbzy1.com',
        name: 'lsb资源',
        adult: true
    },
    huangcang: {
        api: 'https://hsckzy.vip',
        name: '黄色仓库',
        adult: true,
        detail: 'https://hsckzy.vip'
    },
    yutu: {
        api: 'https://yutuzy10.com',
        name: '玉兔资源',
        adult: true
    },

    // 下面是资源失效率高的API源，不建议使用
    subo: {
        api: 'https://subocaiji.com/api.php/provide/vod',
        name: '速播资源'
    },
    fczy: {
        api: 'https://api.fczy888.me/api.php/provide/vod',
        name: '蜂巢资源'
    },
    ukzy: {
        api: 'https://api.ukuapi88.com/api.php/provide/vod',
        name: 'U酷资源'
    },
};

// 定义合并方法
function extendAPISites(newSites) {
    Object.assign(API_SITES, newSites);
}

// 暴露到全局
window.API_SITES = API_SITES;
window.extendAPISites = extendAPISites;


// 添加聚合搜索的配置选项
const AGGREGATED_SEARCH_CONFIG = {
    enabled: true,             // 是否启用聚合搜索
    timeout: 8000,            // 单个源超时时间（毫秒）
    maxResults: 10000,          // 最大结果数量
    parallelRequests: true,   // 是否并行请求所有源
    showSourceBadges: true    // 是否显示来源徽章
};

// 抽象API请求配置
const API_CONFIG = {
    search: {
        // 只拼接参数部分，不再包含 /api.php/provide/vod/
        path: '?ac=videolist&wd=',
        pagePath: '?ac=videolist&wd={query}&pg={page}',
        maxPages: 50, // 最大获取页数
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    },
    detail: {
        // 只拼接参数部分
        path: '?ac=videolist&ids=',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    }
};

// 优化后的正则表达式模式
const M3U8_PATTERN = /\$https?:\/\/[^"'\s]+?\.m3u8/g;

// 添加自定义播放器URL
const CUSTOM_PLAYER_URL = 'player.html'; // 使用相对路径引用本地player.html

// 增加视频播放相关配置
const PLAYER_CONFIG = {
    autoplay: true,
    allowFullscreen: true,
    width: '100%',
    height: '600',
    timeout: 15000,  // 播放器加载超时时间
    filterAds: true,  // 是否启用广告过滤
    autoPlayNext: true,  // 默认启用自动连播功能
    adFilteringEnabled: true, // 默认开启分片广告过滤
    adFilteringStorage: 'adFilteringEnabled' // 存储广告过滤设置的键名
};

// 增加错误信息本地化
const ERROR_MESSAGES = {
    NETWORK_ERROR: '网络连接错误，请检查网络设置',
    TIMEOUT_ERROR: '请求超时，服务器响应时间过长',
    API_ERROR: 'API接口返回错误，请尝试更换数据源',
    PLAYER_ERROR: '播放器加载失败，请尝试其他视频源',
    UNKNOWN_ERROR: '发生未知错误，请刷新页面重试'
};

// 添加进一步安全设置
const SECURITY_CONFIG = {
    enableXSSProtection: true,  // 是否启用XSS保护
    sanitizeUrls: true,         // 是否清理URL
    maxQueryLength: 100,        // 最大搜索长度
    // allowedApiDomains 不再需要，因为所有请求都通过内部代理
};

// 添加多个自定义API源的配置
const CUSTOM_API_CONFIG = {
    separator: ',',           // 分隔符
    maxSources: 5,            // 最大允许的自定义源数量
    testTimeout: 5000,        // 测试超时时间(毫秒)
    namePrefix: 'Custom-',    // 自定义源名称前缀
    validateUrl: true,        // 验证URL格式
    cacheResults: true,       // 缓存测试结果
    cacheExpiry: 5184000000,  // 缓存过期时间(2个月)
    adultPropName: 'isAdult' // 用于标记成人内容的属性名
};

// 隐藏内置黄色采集站API的变量
const HIDE_BUILTIN_ADULT_APIS = false;
7. 保存并更新
替换完成以后我们 Ctrl+S 保存即可，点击 Update

8. 部署项目
然后我们再来到Pages的页面，新建刚才的LibreTV项目：

f6ff95d16b337827ef5f81711b83fe2f.png

项目名称：需要改一下不能有大写
加速区域：选择含中国大陆（这里非必须操作，如果有域名可以选择，没有域名没法选择，选择含中国大陆延迟非常低）
其他的不用管直接点击 部署 即可
9. 域名设置
⚠️ 重要提醒：域名的话不建议用自己的域名，用官网的就行了，为什么呢，因为这个里面有黄色资源，用官网的域名就行了

10. 完成部署
等待半分钟部署完成以后就可以直接访问了

59a5d470697aef46f988964d9ceba9a3.png

注意事项
其他相关的设置和资源搜索请参考视频演示
其他的Pages项目也是一个道理，可以按照相同步骤操作

白嫖
 版权归属： Administrator
 本文链接： http://zmkk.fun/archives/1753956562161
 许可协议： 本文使用《署名-非商业性使用-相同方式共享 4.0 国际 (CC BY-NC-SA 4.0)》协议授权



上一篇
下一篇
评论区
编写评论
0 条评论
博主栏壁纸
康康

4
分类数
34
文章数
2
评论数
文章目录
相关文章
免费VISA卡，0费用，薅谷歌云 GCP |AWS |甲骨文等等，可以持续薅
谷歌云免费用户如何创建144个VPS ，如何批量创建vps，自动配置密码登录
免费三个EDU教育邮箱，可白嫖各种云厂商和教育活动，多个edu域名
免费白嫖asw VPS机器 4核32G内存 200G高速磁盘 root权限
© 2021 - 2025 kk


close
floater
