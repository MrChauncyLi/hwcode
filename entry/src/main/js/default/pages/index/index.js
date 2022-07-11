import prompt from '@system.prompt';   // 导包，用于调用提示框
import fetch from '@system.fetch';     // 导包，用于网络访问
export default {
    data: {
        title: "",
        keyword: "",
        keywordpoem: "",
        resshow: "none"
    },
    onInit() {   // 初始化页面
        this.title = this.$t('strings.world');
        this.keyword = this.$t('strings.keyword');
        this.keywordpoem = this.$t('strings.keywordpoem');
    },
    keywordchange(e){   // 文本框编辑响应事件
        this.keyword = e.text;
    },
    keywordpromchange(e){   // 文本框编辑响应事件
        this.keywordpoem = e.text;
    },
    getAIpoem(){    // 生成藏头诗点击事件
        if(this.keyword === ""){
            this.keyword = this.$t('strings.keywordpoem');
        }
        let url = "https://py.myie9.com/cangtoutest/" + this.keyword;
        this.netserver(url, this.keyword);
    },
    getpoem(){  // 生成藏首诗点击事件
        if(this.keywordpoem === ""){
            this.keywordpoem = this.$t('strings.keywordpoem');
        }
        let url = "https://py.myie9.com/xuxietest/" + this.keywordpoem;
        this.netserver(url, this.keywordpoem);
    },
    netserver(url,keyword){  // 网络访问访问，生成整首诗
        fetch.fetch({
            url: url,
            method: 'GET',
            responseType: 'text',
            success: function(ret){
                if(ret.code === 500){
                    return;
                }
                let data = ret.data;
                prompt.showDialog({   // 调用提示框
                    title: keyword,
                    message: data.toString(),
                    buttons: [
                        {text: "好诗", color: "#33dd44"}
                    ],
                });
            }
        });
    }
}
