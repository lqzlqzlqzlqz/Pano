import pic1 from '../../assets/pano/(2).JPG';
import pic2 from '../../assets/pano/(4).JPG';
import pic3 from '../../assets/pano/(6).JPG';
import pic4 from '../../assets/pano/(8).JPG';
import pic5 from '../../assets/pano/(10).JPG';
import pic6 from '../../assets/pano/(12).JPG';
import pic7 from '../../assets/pano/(14).JPG';
import pic8 from '../../assets/pano/(16).JPG';
import pic9 from '../../assets/pano/(18).JPG';
import pic10 from '../../assets/pano/(21).JPG';
import pic11 from '../../assets/pano/(23).JPG';
import pic12 from '../../assets/pano/(25).JPG';

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
                "pop": "https://www.kfzimg.com/G06/M00/D5/88/p4YBAFsKXdaAbj7dAAYGFvapqL4964_b.jpg"
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
                "pop": "https://www.kfzimg.com/G06/M00/D5/88/p4YBAFsKXdaAbj7dAAYGFvapqL4964_b.jpg"
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
    zhangzhiqu: {
        title: "章之趣",
        position: {
            left: "30%",
            bottom: "20%"
        },
        thumb: zhangzhiqu_thumb,
        pano: pic10,
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
                "mt": "graph"
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
                "mt": "graph"
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
                "mt": "graph"
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
                "mt": "graph"
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
                "mt": "graph"
            },

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
    },
    zhuanzhimei: {
        title: "篆之美",
        position: {
            left: "80%",
            bottom: "35%"
        },
        thumb: zhuanzhimei_thumb,
        pano: pic4,
    },
    xinzhiyi: {
        title: "信之义",
        position: {
            left: "27%",
            bottom: "50%"
        },
        thumb: xinzhiyi_thumb,
        pano: pic8,
    },
    zhuanzhimei2: {
        title: "篆之美2",
        position: {
            left: "80%",
            bottom: "50%"
        },
        thumb: zhuanzhimei2_thumb,
        pano: pic5,
    },
    xiaoyuanyinba: {
        title: "校园印吧",
        position: {
            left: "50%",
            bottom: "60%"
        },
        thumb: xiaoyuanyinba_thumb,
        pano: pic12,
    },
    yinzhipin: {
        title: "印之品",
        position: {
            left: "50%",
            bottom: "80%"
        },
        thumb: yinzhipin_thumb,
        pano: pic11,
    },
    yinzhipin2: {
        title: "印之品2",
        position: {
            left: "29%",
            bottom: "78%"
        },
        thumb: yinzhipin2_thumb,
        pano: pic7,
    },
    kezhiwei: {
        title: "刻之味",
        position: {
            left: "80%",
            bottom: "78%"
        },
        thumb: kezhiwei_thumb,
        pano: pic6,
    }
}
export const panoRoutes = Object.keys(panoViews);