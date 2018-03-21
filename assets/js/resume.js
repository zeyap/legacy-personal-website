var skills = {
    "technical": ["C/C++", "Unity3D with C#", "HTML/CSS", "JavaScript", "SQL", "Maya", "Photoshop"],
    "research": ["MATLAB & Psychtoolbox", "SPSS"],
    "language": ["English (TOEFL iBT 108)", "Chinese Mandarin (Native)"],
};

var publications = [
        {
            "title": "Cubicle: An Adaptive Educational Gaming Platform for Training Spatial Visualization Skills",
            "journal": "ACM Intelligent User Interfaces",
            "issue":"2018",
            "link": "/cubicles/"
        },
        {
            "title": "User-Defined Gestures for Gestural Interaction: Extending from Hands to Other Body Parts.",
            "journal": "International Journal of Human-Computer Interaction",
            "issue": "2017.7, 1-13",
            "link": "/gestures/"
        },
];

var json = {
    "titles":["Education","Skills","Experience","Projects","Development","Related Coursework","Languages","Publications"],
    "contact": {
        "email": "zeyapeng@outlook.com",
        "address": "| 148 Tianmushan Road, Hangzhou, PRC, 310000",
    },
    "education": [
        {
            "name": "Zhejiang University",
            "degree": "B.S. in Psychology",
            "city": "Hangzhou",
            "country": "China",
            "gpa": "3.65/4.00",
            "duration": "Sept. 2013 - Jun. 2018",
        },
        {
            "name": "University of California, Davis",
            "degree": "Summer Session",
            "city": "Davis",
            "country": "CA",
            "gpa": "3.65/4.00",
            "duration": "August 2014",
        },
    ],
    "experiences": [[
        {
            "title": "Global Game Jam - Game Dev Hackathon",
            "role": "Lead Developer",
            "institute": "Coconut Island Studio",
            "city": "Shanghai",
            "country": "China",
            "duration": "Jan. 2018",
            "bulletpoints": [
                "Designed an experience where player tries to make it in a date in game by manipulating his body status",
                "Led the development process and produced the game interface",
            ]
        },
        {
            "title": "Visuospatial Training Game",
            "role": "Game Developer",
            "institute": "Cascade Lab, CS @ UIUC",
            "city": "Urbana",
            "country": "IL",
            "duration": "Jul. 2017 - Sept. 2017",
            "bulletpoints": [
                "Wireframed and implemented 3D educational games based on paper-based exercises of Engineering Graphics to train engineering students on visuospatial skills ",
                "Designed user surveys to conduct a testing session on usability and effectiveness of the game series",
            ],
        },
        {
            "title": "Re-designing Gesture Set for Full-body User Interface",
            "role": "Research Assistant",
            "institute": "Natural Interaction Lab @ ZJU",
            "city": "Hangzhou",
            "country": "China",
            "duration": "Jul. 2015 - Dec. 2015",
            "bulletpoints": [
                "Designed and conducted an experiment where participants intuitively generated gestures (i.e. by user-defined method) and evaluated those gestures by popularity, subjective ratings and physiological risk",
                "Proposed a gesture set for whole-body human-computer interface similar to Kinect, based on the research findings",
            ]
        },

    ],[
        {
            "title": "Inverse World - AR Game",
            "role": "Art Designer",
            "city": "Hangzhou",
            "country": "China",
            "duration": "Apr. 2017 - Jul. 2017",
            "bulletpoints": [
                "Co-designed the story-driven AR game, Inverse World, in which players explore the game subject’s memories through dialogues to help fulfill her wishes",
                "Completed character setting, designed interlude stop-motion animation, created user interfaces, and implemented interactions and graphical effects",
            ]
        },
        {
            "title": "Eye-tracking research on Category Learning",
            "role": "Student Researcher",
            "city": "Hangzhou",
            "country": "China",
            "duration": "Nov. 2016 - Jun. 2017",
            "bulletpoints": [
                "Designed an experiment to investigate individuals’ strategy when trained to learn categories and to examine the influence of working memory on strategic decision making",
                "Developed a MATLAB eye-tracking program to conduct the experiment",
                "Analyzed the eye-tracking data and concluded that a human’s working memory capacity is crucial for faster category learning, which is usually by rule, rather than by repetitive training",
            ]
        },
    ]],
};

var json_cn = {
    "titles":["教育背景","技能/证书","工作&学术经历","相关项目","擅长技术","相关课程","语言能力","论文发表"],
    "contact": {
        "email": "zeyapeng@outlook.com",
        "address": "杭州市西湖区浙江大学西溪校区北园",
    },
    "education": [
        {
            "name": "浙江大学",
            "degree": "心理学",
            "city": "杭州",
            "country": "",
            "gpa": "3.65/4.00",
            "duration": "2013年9月 - 2018年6月",
        },
        {
            "name": "加州大学戴维斯分校",
            "degree": "暑期课程项目",
            "city": "Davis",
            "country": "CA, USA",
            "gpa": "3.65/4.00",
            "duration": "2014年8月 - 2014年9月",
        },
    ],
    
    "experiences": [[
        {
            "title": "Global Game Jam",
            "role": "游戏主程",
            "institute": "椰岛游戏",
            "city": "上海",
            "country": "",
            "duration": "2018年2月 - 2018年2月",
            "bulletpoints": [
                "和组员共同设计并用Unity3D制作了约会模拟游戏 <a href='https://globalgamejam.org/2018/games/dating-starts'>Dating Starts</a>，游戏中实现了丰富的交互操作与视觉反馈。最终作品被承办方（CiGa）公众号收录",
            ]
        },
        {
            "title": "伊利诺伊香槟分校暑期科研",
            "role": "游戏开发",
            "institute": "Cascade Lab, CS @ UIUC",
            "city": "Urbana",
            "country": "IL, USA",
            "duration": "2017年7月 - 2017年9月",
            "bulletpoints": [
                "设计并用Unity3D开发了训练大学新生空间想象力的3D游戏",
                "在10名学生中进行测试，游戏模块记录的结果支持了被试在标准化测试中显示的空间想象能力和游戏表现有着0.9左右的相关，该成果发表于ACM IUI'18会议",
            ],
        },
        

    ], [
        {
            "title": "听歌识曲应用（数字视音频处理课程项目）",
            "role": "独立开发",
            "city": "杭州",
            "country": "",
            "duration": "2017年11月 - 2018年1月",
            "bulletpoints": [
                "在Qt Creator上用C++独立开发了听歌识曲应用的原型，借助FFTW3和QMultimedia库实现了音频分析，独立实现了乐纹提取、数据库存储、片段搜索和排序的功能，达到了较好的识曲效果",
            ]
        },
        {
            "title": "游戏程序设计课程项目",
            "role": "美术和交互设计",
            "city": "杭州",
            "country": "",
            "duration": "2017年4月 - 2017年7月",
            "bulletpoints": [
                "在Unity3D上共同设计并开发了AR游戏《逆向世界》，负责完成了人物造型设定，制作了游戏中所有的2D素材，完成了和交互相关的代码，学习并使用Unity Shaderlab进行游戏过场动画的特效处理",
            ]
        },
        {
            "title": "分类学习的眼动研究",
            "role": "毕业设计",
            "city": "杭州",
            "country": "",
            "duration": "2016年11月 - 2017年6月",
            "bulletpoints": [
                "设计并完成了分类学习的认知心理学研究，通过30名被试的眼动实验发现个体学习策略与其工作记忆水平相关",
                "在可参考资料很少的情况下，使用上海青研提供的眼动仪SDK通过MATLAB编程进行了眼动实验，目前该程序还在由实验室成员维护和使用",
            ]
        },
    ]],
};

function outputInTimeline(jsonObj) {
    var titles = jsonObj["titles"];
    var timeline = "";
    var education = jsonObj["education"];
    var titletxt = titles[0];
    timeline = timeline + '<li class="timeline-title">' + titletxt + '</li>';
    for (var i = 0; i < education.length; i++) {
        var exp = education[i];
        var name = exp["name"];
        var duration = exp["duration"];
        var degree = exp["degree"];
        timeline += '<div class="timeline-children">'
        + '<table>'
        + '<tr><h4>' + name + '</h4></tr>'
        + '<tr><p>' + degree + '</p></tr>'
        + '<tr><p>' + duration + '</p></tr>'
        + '</table>'
        + '</div>';
    }
    titletxt = titles[1];
    timeline = timeline + '<li class="timeline-title">' + titletxt + '</li>';
    timeline += '<div class="timeline-children">'
    + '<tr><h4>'+titles[4]+'</h4></tr>'
    + '<div id="container1" style="height: 200%"></div>'
    + '<tr><h4>' + titles[5] + '</h4></tr>'
    + '<div id="container2" style="height: 200%"></div>'
    + '</div>';
    
    timeline += '<div class="timeline-children">'
        + '<table>';

    timeline += '<tr><h4>' + titles[6] + '</h4></tr>';
    for (var j = 0; j < skills["language"].length; j++) {
        timeline += '<tr><p>' + skills["language"][j] + '</p></tr>';
    }


    timeline += '</table>'
    + '</div>';
    

    var elem = document.getElementsByClassName("timeline-inner")[0];
    elem.innerHTML = timeline;
}

var columCapacity = 3;

function formatResume(jsonObj) {
    document.getElementById("higher-banner").innerHTML = "<h3>彭 泽亚</h3>";
    var titles = jsonObj["titles"];
    var exps = jsonObj["experiences"];
    for (var i = 1; i <= 3; i++) {
        document.getElementById("exp" +i).innerHTML = "";
    }
    document.getElementById("exp1").innerHTML = titles[2];
    var sectitlePos = Math.ceil(exps[0].length / columCapacity) + 1;
    document.getElementById("exp" + sectitlePos.toString()).innerHTML = titles[3];
    var elems = {"html":["","","",""],};

    for (var i = 0; i < exps.length; i++) {
        
        for (var j = 0; j < exps[i].length; j++) {
            var itemObj=exps[i][j];
            var item = '<h4 class="timeline-title">' + itemObj["title"] + '</h4>';
            item += '<p>' + itemObj["role"]+" " + itemObj["duration"] + '</p>';
            if(i==0)
                item += '<p>' + itemObj["institute"] + '</p>';
            item += '<p>' + itemObj["city"] + " " + itemObj["country"] + '</p>';
            item += '<p>';
            for (var k = 0; k < itemObj.bulletpoints.length; k++) {
                item += '<li class="bulletpoint">' + itemObj.bulletpoints[k]+ '</li>';
            }
            item += '</p>';
            var colNo;
            if (i == 0) {
                colNo = Math.floor(j / columCapacity) + 1;
            }
            else {
                colNo = Math.ceil(exps[i - 1].length / columCapacity) + Math.floor(j / columCapacity) + 1;
            }
            elems["html"][colNo - 1] += item;
        }
    }
    elems["html"][0] += '<h4 class="timeline-title">' + titles[7] + '</h4>';
    for (var i = 0; i < publications.length; i++) {
        var pubitem = "<p>" + publications[i].title + " " + publications[i].journal + " " + publications[i].issue + "</p>";
        elems["html"][0] += pubitem;
    }
    for (var i = 1; i <= 3; i++) {
        //console.log(elems["html"][i]);
        document.getElementById("col-" + i).innerHTML = elems["html"][i-1];
    }
}

function drawDonut_other() {
    var dom = document.getElementById("container2");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    app.title = 'skills';

    option = {
        series: [
            {
                name: 'Development',
                type: 'pie',
                radius: ['40%', '90%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        position: 'inner'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'regular'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    { value: 20, name: 'Interaction Design' },
                    { value: 20, name: 'Data Analysis' },
                    { value: 20, name: 'Multimedia Processing' },
                    { value: 20, name: 'Database' },
                    { value: 20, name: 'Graphics' },
                ]
            }
        ]
    };
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}

function drawDonut_tech() {
    var dom = document.getElementById("container1");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    app.title = 'skills2';

    option = {
        series: [
            {
                name: 'Development',
                type: 'pie',
                radius: ['40%', '90%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        position: 'inner'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'regular'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    { value: 40, name: 'C++, Qt'},
                    { value: 30, name: 'C#, Unity 3D' },
                    { value: 20, name: 'OpenGL' },
                    { value: 10, name: 'JavaScript, CSS' },
                ]
            }
        ]
    };
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}

function refresh(jsonfile) {
    outputInTimeline(jsonfile);
    formatResume(jsonfile);
    drawDonut_tech();
    drawDonut_other();
}
var jsonfile = json_cn;
refresh(jsonfile);
document.querySelector("#shiftlang").addEventListener("click", function () {
    if (jsonfile == json) {
        jsonfile = json_cn;
        refresh(jsonfile);
    }
    else {
        jsonfile = json;
        refresh(jsonfile);
    }
    
});
