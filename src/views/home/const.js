// import pic1 from '../../assets/pano/(2).JPG';
// import pic2 from '../../assets/pano/(4).JPG';
// import pic3 from '../../assets/pano/(6).JPG';
// import pic4 from '../../assets/pano/(8).JPG';
// import pic5 from '../../assets/pano/(10).JPG';
// import pic6 from '../../assets/pano/(12).JPG';
// import pic7 from '../../assets/pano/(14).JPG';
// import pic8 from '../../assets/pano/(16).JPG';
// import pic9 from '../../assets/pano/(18).JPG';
// import pic10 from '../../assets/pano/(21).JPG';
// import pic11 from '../../assets/pano/(23).JPG';
// import pic12 from '../../assets/pano/(25).JPG';

import rukou_thumb from '../../assets/thumb/rukou.jpg';
import dating_thumb from '../../assets/thumb/dating.jpg';
import zhangzhiqu_thumb from '../../assets/thumb/zhangzhiqu.jpg';
import qianyanzhanqu_thumb from '../../assets/thumb/qianyanzhanqu.jpg';
import tuzhixing_thumb from '../../assets/thumb/tuzhixing.jpg';
import zhuanzhimei_thumb from '../../assets/thumb/zhuanzhimei.jpg';
import xinzhiyi_thumb from '../../assets/thumb/xinzhiyi.jpg';
import zhuanzhimei2_thumb from '../../assets/thumb/zhuanzhimei2.jpg';
import xiaoyuanyinba_thumb from '../../assets/thumb/xiaoyuanyinba.jpg';
import yinzhipin_thumb from '../../assets/thumb/yinzhipin.jpg';
import yinzhipin2_thumb from '../../assets/thumb/yinzhipin2.jpg';
import kezhiwei_thumb from '../../assets/thumb/kezhiwei.jpg';

const pic1 = 'https://642706.freep.cn/642706/(2).JPG';
const pic2 = 'https://642706.freep.cn/642706/(4).JPG';
const pic3 = 'https://642706.freep.cn/642706/(6).JPG';
const pic4 = 'https://642706.freep.cn/642706/(8).JPG';
const pic5 = 'https://642706.freep.cn/642706/(10).JPG';
const pic6 = 'https://642706.freep.cn/642706/(12).JPG';
const pic7 = 'https://642706.freep.cn/642706/(14).JPG';
const pic8 = 'https://642706.freep.cn/642706/(16).JPG';
const pic9 = 'https://642706.freep.cn/642706/(18).JPG';
const pic10 = 'https://642706.freep.cn/642706/(21).JPG';
const pic11 = 'https://642706.freep.cn/642706/(23).JPG';
const pic12 = 'https://642706.freep.cn/642706/(25).JPG';

export const panoViews = {
    rukou: {
        title: "入口",
        position: {
            left: "50%",
            bottom: "2%"
        },
        thumb: rukou_thumb,
        pano: pic1,
        markers: [
            {
                "id": "marker_1712738496952",
                "position": {
                    "yaw": 6.1379147578435065,
                    "pitch": -0.23244473769584895
                },
                "html": "<img src='data:image/gif;base64,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' style='width: 50px; height: 50px; transform: rotate(0deg);'/>",
                "anchor": "bottom center",
                "size": {
                    "width": 50,
                    "height": 50
                },
                "tooltip": {
                    "content": "进入大厅",
                    "trigger": "hover"
                },
                "navigate": "dating",
                "hoverScale": null,
                "visible": true,
                "mt": "arrow"
            },
            {
                "id": "marker_1712738513880",
                "polygon": [
                    [
                        5.088180910901962,
                        0.18401870678415944
                    ],
                    [
                        5.505167548409226,
                        0.30062069813244885
                    ],
                    [
                        5.503386371128412,
                        -0.38530099303484366
                    ],
                    [
                        5.080603511888164,
                        -0.25293299373409006
                    ]
                ],
                "style": {
                    color: 'red'
                },
                "svgStyle": {
                    "fill": "rgba(0, 0, 0, 0)",
                },
                "tooltip": {
                    "content": "点击主题曲《印象学盟》介绍",
                    "position": "top center",
                    "trigger": "hover"
                },
                "hoverScale": null,
                "visible": true,
                "mt": "graph",
                "pop": "https://642706.freep.cn/642706/rukou_1.jpg"
            },
            {
                "id": "marker_1712738547060",
                "polygon": [
                    [
                        0.4783265944920848,
                        0.32908058850699096
                    ],
                    [
                        0.896144319594915,
                        0.21606880517802307
                    ],
                    [
                        0.9001731495148118,
                        -0.21945786933069122
                    ],
                    [
                        0.4928036069704439,
                        -0.36211519476326104
                    ]
                ],
                "svgStyle": {
                    "fill": "rgba(0, 0, 0, 0)",
                },
                "tooltip": {
                    "content": "点击主题曲《印象学盟》全文",
                    "position": "top center",
                    "trigger": "hover"
                },
                "hoverScale": null,
                "visible": true,
                "mt": "graph",
                "pop": "https://642706.freep.cn/642706/rukou_2.jpg"
            }
        ]
    },
    dating: {
        title: "大厅",
        position: {
            left: "50%",
            bottom: "20%"
        },
        thumb: dating_thumb,
        pano: pic2,
        markers: [
            {
                "id": "marker_1712739819900",
                "position": {
                    "yaw": 2.9024170101025177,
                    "pitch": -0.381521479742458
                },
                "html": "<img src='data:image/gif;base64,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' style='width: 50px; height: 50px; transform: rotate(0deg);'/>",
                "anchor": "bottom center",
                "size": {
                    "width": 50,
                    "height": 50
                },
                "tooltip": {
                    "content": "金陵印象入口",
                    "trigger": "hover"
                },
                "navigate": "rukou",
                "hoverScale": null,
                "visible": true,
                "mt": "arrow"
            },
            {
                "id": "marker_1712739844614",
                "position": {
                    "yaw": 0.9295016070959106,
                    "pitch": -0.3637242229893558
                },
                "html": "<img src='data:image/gif;base64,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' style='width: 50px; height: 50px; transform: rotate(0deg);'/>",
                "anchor": "bottom center",
                "size": {
                    "width": 50,
                    "height": 50
                },
                "tooltip": {
                    "content": "开始参观",
                    "trigger": "hover"
                },
                "navigate": "qianyanzhanqu",
                "hoverScale": null,
                "visible": true,
                "mt": "arrow"
            },
            {
                "id": "marker_1712739863652",
                "polygon": [
                    [
                        5.7801734543984065,
                        0.21651996007970942
                    ],
                    [
                        0.1453606726070717,
                        0.22439902982525828
                    ],
                    [
                        0.15330652722995072,
                        -0.12602332198909227
                    ],
                    [
                        5.783812437150946,
                        -0.14272002790412763
                    ]
                ],
                "svgStyle": {
                    "fill": "rgba(0, 0, 0, 0)",
                },
                "tooltip": {
                    "content": "戳我精彩回顾",
                    "position": "top center",
                    "trigger": "hover"
                },
                "hoverScale": null,
                "visible": true,
                "mt": "graph"
            }
        ]
    },
    qianyanzhanqu: {
        title: "前言展厅",
        position: {
            left: "70%",
            bottom: "23%"
        },
        thumb: qianyanzhanqu_thumb,
        pano: pic3,
        markers: [
            {
                "id": "marker_1712740088255",
                "position": {
                    "yaw": 6.246724036199876,
                    "pitch": -0.3051358973915712
                },
                "html": "<img src='data:image/gif;base64,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' style='width: 50px; height: 50px; transform: rotate(0deg);'/>",
                "anchor": "bottom center",
                "size": {
                    "width": 50,
                    "height": 50
                },
                "tooltip": {
                    "content": "篆之美",
                    "trigger": "hover"
                },
                "navigate": "zhuanzhimei",
                "hoverScale": null,
                "visible": true,
                "mt": "arrow"
            },
            {
                "id": "marker_1712740150268",
                "polygon": [
                    [
                        5.697823444869928,
                        0.0652099863063691
                    ],
                    [
                        5.69615619389281,
                        0.14433721905530006
                    ],
                    [
                        5.748884090892798,
                        0.15926969327221374
                    ],
                    [
                        5.822317755358077,
                        0.15006026085960045
                    ],
                    [
                        5.828908879840656,
                        0.06529305930516327
                    ],
                    [
                        5.864244415959168,
                        0.06490163768725288
                    ],
                    [
                        5.8693180417767925,
                        -0.08832524218684545
                    ],
                    [
                        5.7449469293625235,
                        -0.09713796244155337
                    ],
                    [
                        5.658951300186244,
                        -0.08994982036302823
                    ],
                    [
                        5.658151945808481,
                        0.05615957371486879
                    ]
                ],
                "svgStyle": {
                    "fill": "rgba(0, 0, 0, 0)",
                },
                "tooltip": {
                    "content": "六言印",
                    "position": "top center",
                    "trigger": "hover"
                },
                "hoverScale": null,
                "visible": true,
                "mt": "graph",
                "pop": "https://642706.freep.cn/642706/qianyanzhanqu_liuyanyin.jpg"
            },
            {
                "id": "marker_1712740209035",
                "polygon": [
                    [
                        2.5448919096161884,
                        0.4395872095127782
                    ],
                    [
                        3.5887610088703257,
                        0.3845414085540453
                    ],
                    [
                        3.5800223143853827,
                        -0.5083921486409753
                    ],
                    [
                        2.5249912840721525,
                        -0.5336228117227302
                    ]
                ],
                "svgStyle": {
                    "fill": "rgba(0, 0, 0, 0)",
                },
                "tooltip": {
                    "content": "点击展厅地图",
                    "position": "top center",
                    "trigger": "hover"
                },
                "hoverScale": null,
                "visible": true,
                "mt": "graph",
                "pop": "https://642706.freep.cn/642706/qianyanzhanqu_canguanxianlu.jpg"
            },
            {
                "id": "marker_1712740235169",
                "polygon": [
                    [
                        2.227590487035167,
                        0.1544693556397836
                    ],
                    [
                        2.43137570136533,
                        0.17303978987015056
                    ],
                    [
                        2.4305963797129313,
                        -0.058279641691878936
                    ],
                    [
                        2.2216786629130443,
                        -0.04339334989155419
                    ]
                ],
                "svgStyle": {
                    "fill": "rgba(0, 0, 0, 0)",
                },
                "tooltip": {
                    "content": "前言",
                    "position": "top center",
                    "trigger": "hover"
                },
                "hoverScale": null,
                "visible": true,
                "mt": "graph",
                "pop": "https://642706.freep.cn/642706/qianyanzhanqu_qianyan.jpg"
            },
            {
                "id": "marker_1712740249549",
                "polygon": [
                    [
                        1.4617857210503622,
                        0.17707038438034584
                    ],
                    [
                        1.8022339827104752,
                        0.1644135319766078
                    ],
                    [
                        1.8045627059553053,
                        -0.038432036130522595
                    ],
                    [
                        1.4605212618041312,
                        -0.051101876213830444
                    ]
                ],
                "svgStyle": {
                    "fill": "rgba(0, 0, 0, 0)",
                },
                "tooltip": {
                    "content": "六言治印",
                    "position": "top center",
                    "trigger": "hover"
                },
                "hoverScale": null,
                "visible": true,
                "mt": "graph",
                "pop": "https://642706.freep.cn/642706/qianyanzhanqu_liuyanzhiyin.jpg"
            },
            {
                "id": "marker_1712740275207",
                "polygon": [
                    [
                        0.9322734336363361,
                        0.1591751142548834
                    ],
                    [
                        1.3740602801660255,
                        0.17743784059010737
                    ],
                    [
                        1.3753970418535308,
                        -0.04567222231322243
                    ],
                    [
                        0.9340528438685315,
                        -0.03915846703494563
                    ]
                ],
                "svgStyle": {
                    "fill": "rgba(0, 0, 0, 0)",
                },
                "tooltip": {
                    "content": "六言印文",
                    "position": "top center",
                    "trigger": "hover"
                },
                "hoverScale": null,
                "visible": true,
                "mt": "graph",
                "pop": "https://642706.freep.cn/642706/qianyanzhanqu_liuyanyinwen.jpg"
            },

        ]
    },
    zhuanzhimei: {
        title: "篆之美",
        position: {
            left: "80%",
            bottom: "35%"
        },
        thumb: zhuanzhimei_thumb,
        pano: pic4,
        markers: [
            {
                "id": "marker_1713340636062",
                "position": {
                    "yaw": 6.087247463202728,
                    "pitch": -0.2827963206254356
                },
                "html": "<img src='data:image/gif;base64,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' style='width: 50px; height: 50px; transform: rotate(0deg);'/>",
                "anchor": "bottom center",
                "size": {
                    "width": 50,
                    "height": 50
                },
                "tooltip": "篆之美",
                "navigate": "zhuanzhimei2"
            }
        ]
    },
    zhuanzhimei2: {
        title: "篆之美2",
        position: {
            left: "80%",
            bottom: "50%"
        },
        thumb: zhuanzhimei2_thumb,
        pano: pic5,
        markers: [
            {
                "id": "marker_1713341277418",
                "polygon": [
                    [
                        5.309012910205797,
                        0.14501745743549876
                    ],
                    [
                        5.440191096626546,
                        0.16312785453592915
                    ],
                    [
                        5.439202957839258,
                        -0.09133709856671524
                    ],
                    [
                        5.307214652882647,
                        -0.0830342595008744
                    ]
                ],
                "svgStyle": {
                    "fill": "rgba(0, 0, 0, 0)"
                },
                "mt": "graph",
                "hoverScale": null,
                "visible": true,
                "pop": "https://642706.freep.cn/642706/zhuanzhimei_1.jpg"
            },
            {
                "id": "marker_1713341606548",
                "polygon": [
                    [
                        5.47915070943318,
                        0.16932811823004057
                    ],
                    [
                        5.647467154450907,
                        0.18605505650402865
                    ],
                    [
                        5.652720157139411,
                        -0.10218076251342878
                    ],
                    [
                        5.476619840894011,
                        -0.09256240706264474
                    ]
                ],
                "svgStyle": {
                    "fill": "rgba(0, 0, 0, 0)"
                },
                "mt": "graph",
                "hoverScale": null,
                "visible": true,
                "pop": "https://642706.freep.cn/642706/zhuanzhimei_1.jpg"
            },
            {
                "id": "marker_1713341633282",
                "polygon": [
                    [
                        5.698119299151026,
                        0.19404622701457108
                    ],
                    [
                        5.909193741494847,
                        0.20693056783085484
                    ],
                    [
                        5.908755333073871,
                        -0.10698828587967224
                    ],
                    [
                        5.696300709600997,
                        -0.10175694321529383
                    ]
                ],
                "svgStyle": {
                    "fill": "rgba(0, 0, 0, 0)"
                },
                "mt": "graph",
                "hoverScale": null,
                "visible": true,
                "pop": "https://642706.freep.cn/642706/zhuanzhimei_1.jpg"
            },
            {
                "id": "marker_1713341655545",
                "polygon": [
                    [
                        5.971663595097849,
                        0.2076231340351269
                    ],
                    [
                        6.201437286861208,
                        0.21019405282131598
                    ],
                    [
                        6.20150599388467,
                        -0.10586586355738681
                    ],
                    [
                        5.97142553504732,
                        -0.10631100844274055
                    ]
                ],
                "svgStyle": {
                    "fill": "rgba(0, 0, 0, 0)"
                },
                "mt": "graph",
                "tooltip": {
                    "content": "点击每个展板查看印稿",
                },
                "hoverScale": null,
                "visible": true,
                "pop": "https://642706.freep.cn/642706/zhuanzhimei_1.jpg"
            },
            {
                "id": "marker_1713341678883",
                "polygon": [
                    [
                        6.2515383227946675,
                        0.20945727155003757
                    ],
                    [
                        0.18228458314338808,
                        0.19849768342356322
                    ],
                    [
                        0.18703765245798004,
                        -0.0962048126351911
                    ],
                    [
                        6.251876878643848,
                        -0.10376418906441298
                    ]
                ],
                "svgStyle": {
                    "fill": "rgba(0, 0, 0, 0)"
                },
                "mt": "graph",
                "hoverScale": null,
                "visible": true,
                "pop": "https://642706.freep.cn/642706/zhuanzhimei_1.jpg"
            },
            {
                "id": "marker_1713341696774",
                "polygon": [
                    [
                        0.2282865773167047,
                        0.1957071611469139
                    ],
                    [
                        0.4031762407439425,
                        0.18008328075543933
                    ],
                    [
                        0.4070272133205418,
                        -0.07927760736014333
                    ],
                    [
                        0.2341363980495244,
                        -0.09273299180045358
                    ]
                ],
                "svgStyle": {
                    "fill": "rgba(0, 0, 0, 0)"
                },
                "mt": "graph",
                "hoverScale": null,
                "visible": true,
                "pop": "https://642706.freep.cn/642706/zhuanzhimei_1.jpg"
            },
            {
                "id": "marker_1713341716532",
                "polygon": [
                    [
                        0.44117789230856463,
                        0.17403914674055776
                    ],
                    [
                        0.572350945889009,
                        0.15904430191909524
                    ],
                    [
                        0.5792733552211907,
                        -0.06647732242894944
                    ],
                    [
                        0.4480029499457637,
                        -0.07965358170823089
                    ]
                ],
                "svgStyle": {
                    "fill": "rgba(0, 0, 0, 0)"
                },
                "mt": "graph",
                "hoverScale": null,
                "visible": true,
                "pop": "https://642706.freep.cn/642706/zhuanzhimei_1.jpg"
            },
            {
                "id": "marker_1713341886038",
                "position": {
                    "yaw": 1.3998389056793354,
                    "pitch": -0.2790173018284787
                },
                "html": "<img src='data:image/gif;base64,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' style='width: 50px; height: 50px; transform: rotate(0deg);'/>",
                "anchor": "bottom center",
                "size": {
                    "width": 50,
                    "height": 50
                },
                "tooltip": "前往“刻之味”",
                "navigate": "kezhiwei"
            }
        ]
    },
    kezhiwei: {
        title: "刻之味",
        position: {
            left: "80%",
            bottom: "78%"
        },
        thumb: kezhiwei_thumb,
        pano: pic6,
        markers: [
            {
                "id": "marker_1713342324255",
                "position": {
                    "yaw": 4.392385041136422,
                    "pitch": -0.2679826271681358
                },
                "html": "<img src='data:image/gif;base64,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' style='width: 50px; height: 50px; transform: rotate(0deg);'/>",
                "anchor": "bottom center",
                "size": {
                    "width": 50,
                    "height": 50
                },
                "tooltip": "校园印吧体验区",
                "navigate": "xiaoyuanyinba"
            }
        ]
    },
    xiaoyuanyinba: {
        title: "校园印吧",
        position: {
            left: "50%",
            bottom: "60%"
        },
        thumb: xiaoyuanyinba_thumb,
        pano: pic12,
        markers: [
            {
                "id": "marker_1713342442906",
                "position": {
                    "yaw": 5.741394100165851,
                    "pitch": -0.39846600225091233
                },
                "html": "<img src='data:image/gif;base64,R0lGODlhYAA1ALMPANbW1rq6uvT09Orq6qGhocHBwd3d3c/Pz7Ozs8fHx+Pj46ysrMjIyJCQkP///////yH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCAAPACwAAAAAYAA1AAAE1PDJSau9OOvNu/9gKI5kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6PQ7HsxWtSqcoqxZL0nqj3M93fA1nyOiymZJuryXtuHoqr8+Z9nwzzwcj+4B3QYGEQ4SHfj2Ii4I1jI+NMZCTjpOWkVmXmi+anYmZnqEnoaRVXaWonx2prKoYrbCYsbOCtLYTtrloAAm9vr/AwcLDxMXGxwkCXxYDCw3P0NHS09TV1tfY2dAMGgIB2uDh4uPWBAYXB+Tq6+zXCwITCgTt9PXtDAIRACH5BAkIAA8ALAAAAABgADUAAAT/8MlJq7046827/2AojmRpnmiqrmzrvnAsz3Rt33iu73zvm47gjxcsCoc2o/KIhC2fzKYKSo1KSdWs9erJDhYNhpbb0QoCjXSDABiTL2aGer5WuN8PrUM+JxToCwN3UnoABHRtDgIIdAECgz56CodzBY9Gk3QMl1WRWgpgc4FUCXRhnFQ6emd0BAZmaH2JWUlmf5qoWaCtdpAtq3xzCLl6DgCmC720v4WUagTKxUoCwWqOxSnFmXQH0lkCoZXEUEBQZwvoztbj3ksG6mkI6AuzSy2spmqj7dLVpmwy8OVbU49fMYH5ALZQwGhgmk0GI24bSGBTil0OGwyLyDHIsYwNgw4IMCFAgcmTKE0K6siyZMqXA5ywnGkPB82bNWfg3JnTBc+fSl4AHWpkBdGjRcshXeoAC9OnWzZAnRrVAtWrTTNg3Zq1AtevE76KrQIggdmzaNOqXcu2rdu3cBOMs/AFpN27ePPqZaABod6/gANndHXhgODDiBOnWTBSwkTFkCPf3RQBACH5BAkIAA8ALAAAAABgADUAAAT/8MlJq7046827/2AojmRpnmiqrmzrvq4jy3B9zvhs71/u47yg5UcECnfFZO74UjoAi0ZA4GSmlIJEo7EobBeGqlXkVAS+ihljS2BQk2OPE0DYBtI5waEuHYjjQ0kCa3ZvRXRfAH9xZWeFTjOIDQQJhkVWc3xSlpAyklJ4cEGCWlubRQNRDEmfBIqicWamDZVFAo5sr0QGUaaVgBefDau2hLNsoT8KvXYKwA+Dx25Jxmxeswt+RcuzrgJWsrPEh5pbrwIIx1NJ3LMF30EGDPMMCQdKCuUN7zn50pz9EtCbN4AJpHamshUpJQ6gjzGQbh0jEAYLrlyQhES81rCTA4TI5zLWiFhtCwKHc45xSXapRSdhk1h6lBFNHcqHKDr5O3Zvpi1mpviJJGErwIKj+k75VGIgKYKjC3ThXCFRZUJtSyGVnAjARlWrk6RmjXhRpSsXCtKB3TJt7NKdYNvAOwHS6km3eAGsNXVg7ggBCgILHhwYK163gAkrLtjksOOpGh9LXsJjsmXILi9rNpJ5s2caKj6L5kx0tGnQZE6rRi1ntWsHHV7Lhp1htm3aFW7rnqC7N6sEwIMLH068uPHjyJMrr4X5Qaq90KNLn05dJQMNX6tr384dOsULB7qLH0/+y1y45dOrl+4mAgAh+QQJCAAPACwAAAAAYAA1AAAE//DJSau9OD/Huf5gKI5hZ3Zkqq7l6ZpsLI9v7c54bnvTzufA1k5yIg6DSIvPWGPakkGf4yGo7qoCZxO6kkoMCoG0owhvvFzaU3AAiMcnBcB93qZjAkABsAMsGgFvLwIMBQZ3SQYIAQM2AgkNDQsFkQsGfQgFA4gyAwUEDIIuCgGVCh0MkaCiJwMBBAdZnCJsBAt8NgAEkQGnJ7W8jTWEBAh0sxplwoOpvKwuupW4NcrIGFKkkYDPubsNBAncRdZaL9HOcCfngL5Hs1eQ2oE2A38Mfd7f03bkE9na4RyV0kZgnwsDfwDK6pdhXYN7jpppI9juhYKEvBQwrEBo4kNxHP8kqqI0ccEyixj1LbT2TxvEbh5xCUDgcZ6Nix4LrERkgIFPBgkO+FCQL5LOOEU/7lCQ4KfPTeTG4Cx58kS8iaHQ9BsjYCDBSz66eiw4xhpXklhBjkr5reKTO1xFRkKgNpdHSW75AYHjsG06ZndtapUBh+hdoX8dsW1wtGwMgQsiJ92WWIqByQgi33obROxdbSYrp5M7FgAiz5/1iU6M+nNBKApopo6UdXVlw7NX5Zg6m67t3wBma4slQ0CZ48iPV/0t2njy51ChMJ/+giH16zfeYd8+jgv3792RgB8PYy/58ygIo1//IwX79+nVwJ8vZL59Dfbzh++hv398/wBKAUA8AgQWaOCBCCao4IIMNuhgQNlRUI9wFFZo4YUY3sWABq1l6OGHIApHwCEWHBDiiSimWMlCuKno4osXhhIBACH5BAkIAA8ALAAAAABgADUAAAT/8MlJq704P8e5/mAojmFndmSqruXpmmwsj2/tznhue9PO58DWTnIiDoNIi89YY9qSQZ/jIajuqgJnE7qSSgwKgbSjCG+8XNpTcACIxycFwH3epmMCQAGwAywaAW8vAgwFBndJBggBAzYCCQ0NCwWRCwZ9CAUDiDIDBQQMgi4KAZUKHQyRoKInAwEEB1mcImwEC3w2AASRAacntbyNNYQECHSzGmXCg6m8rC66lbg1ysgYUqSRgM+5uw0ECdxF1lov0c5wJ+eAvkezV5Dagek16wTTduQT2drh9D4G/vSTpS/DugYM/qVTIJCXgoIVCGmLFErhP4YT7xG0xk9bQosgnDFOLLARkQEGKBkkOACyJZkEKVFuIuey5guINnPeRKaz5840PoP+jCK06NAYRpPmU+EowIKnUKNKnUq1qtWq+MYFEVBqotevYMOKHfv1HiKuZNOqXTvWbBIFCNjKnSt3VQ6RdPPqHRtLhoAygAMLHky4sOHDiAnPhMi4sePHkCNLnky5suXLmDNr3sy5s+fPoEOLHk26tOnTqCFGAAAh+QQJCAAPACwAAAAAYAA1AAAE//DJSau9OD/Huf5gKI5hZ3Zkqq7l6ZpsLI9v7c54bnvTzufA1k5yIg6DSIvPWGPakkGf4yGo7qoCZxO6kkoMCoG0owhvvFzaU3AAiMcnBcB93qZjAkABAL8yCgZ3SQYIAQN9cAAIBQOCMgMFBAxviH0DAQQHWY4ibAQLfJWiHAIMBAh0nBplh6OuZAqNqhevtUezdba6L7NXBwnAwcLDxMXFoU+4FQoBDc7P0NHS09TPCZvKGQAE1d3e3w0BCtkVpeDn6NIEqbjM6e/wzgXYjgYM9/j5+vv8/f7/92SRG0iwoMGDCBMqXMiwocOHECNKnEixosWLGDNq3Mixo8ePIBNDihxJsqTJkyhTqlzJsqVLEhEAACH5BAkIAA8ALAAAAABgADUAAASx8MlJq704P8e5/mAojmFndmSqruXpmmwsj2/tznhu73Xu07xg70e0CI+74g/JDCpZzejxSeIJCousdsvtLhAAAY86EwAIjbR6zW63AwZy0YBw2+/3wkAuGxTwgIFsBAcCfCMCB2iCjI1ghocaCpOUlZaXmJmalHuRnp+goaKjpKWmp6ipqqusra6vsLGys7S1tre4ubq7vL2+v8DBwsPExcbHyMnKy8zNzs/Q0dLT1LIRACH5BAkIAA8ALAAAAABgADUAAART8MlJq7046827/2AojmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/C4fE63RQAAOw==' style='width: 50px; height: 50px; transform: rotate(0deg);'/>",
                "anchor": "bottom center",
                "size": {
                    "width": 50,
                    "height": 50
                },
                "tooltip": "前往“印之品”",
                "navigate": "yinzhipin"
            }
        ]
    },
    yinzhipin: {
        title: "印之品",
        position: {
            left: "50%",
            bottom: "80%"
        },
        thumb: yinzhipin_thumb,
        pano: pic11,
        markers: [
            {
                "id": "marker_1713342495386",
                "position": {
                    "yaw": 4.421448643765056,
                    "pitch": -0.30622401118323905
                },
                "html": "<img src='data:image/gif;base64,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' style='width: 50px; height: 50px; transform: rotate(0deg);'/>",
                "anchor": "bottom center",
                "size": {
                    "width": 50,
                    "height": 50
                },
                "tooltip": "“印之品”欣赏",
                "navigate": "yinzhipin2"
            }
        ]
    },
    yinzhipin2: {
        title: "印之品2",
        position: {
            left: "29%",
            bottom: "78%"
        },
        thumb: yinzhipin2_thumb,
        pano: pic7,
        markers: [
            {
                "id": "marker_1713342668654",
                "position": {
                    "yaw": 3.0974636775939373,
                    "pitch": -0.33159011535211214
                },
                "html": "<img src='data:image/gif;base64,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' style='width: 50px; height: 50px; transform: rotate(0deg);'/>",
                "anchor": "bottom center",
                "size": {
                    "width": 50,
                    "height": 50
                },
                "tooltip": "前往“信之义”",
                "navigate": "xinzhiyi"
            }
        ]
    },
    xinzhiyi: {
        title: "信之义",
        position: {
            left: "27%",
            bottom: "50%"
        },
        thumb: xinzhiyi_thumb,
        pano: pic8,
        markers: [
            {
                "id": "marker_1713342705943",
                "position": {
                    "yaw": 4.6682862985380345,
                    "pitch": -0.2597490591969982
                },
                "html": "<img src='data:image/gif;base64,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' style='width: 50px; height: 50px; transform: rotate(0deg);'/>",
                "anchor": "bottom center",
                "size": {
                    "width": 50,
                    "height": 50
                },
                "tooltip": "图之行",
                "navigate": "tuzhixing"
            }
        ]
    },
    tuzhixing: {
        title: "图之行",
        position: {
            left: "19%",
            bottom: "33%"
        },
        thumb: tuzhixing_thumb,
        pano: pic9,
        markers: [
            {
                "id": "marker_1713342799076",
                "position": {
                    "yaw": 4.406112403234587,
                    "pitch": -0.4010995297756095
                },
                "html": "<img src='data:image/gif;base64,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' style='width: 50px; height: 50px; transform: rotate(0deg);'/>",
                "anchor": "bottom center",
                "size": {
                    "width": 50,
                    "height": 50
                },
                "tooltip": "章之趣",
                "navigate": "zhangzhiqu"
            }
        ]
    },
    zhangzhiqu: {
        title: "章之趣",
        position: {
            left: "30%",
            bottom: "20%"
        },
        thumb: zhangzhiqu_thumb,
        pano: pic10,
        markers: [
            {
    "id": "marker_1713342853131",
    "position": {
        "yaw": 1.4834058361605948,
        "pitch": -0.4084589041048121
    },
    "html": "<img src='data:image/gif;base64,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' style='width: 50px; height: 50px; transform: rotate(0deg);'/>",
    "anchor": "bottom center",
    "size": {
        "width": 50,
        "height": 50
    },
    "tooltip": "回到大厅",
    "navigate": "dating"
}
        ]
    },
}
export const panoRoutes = Object.keys(panoViews);