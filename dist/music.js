const ap = new APlayer({
    container: document.getElementById('player'),
    listFolded: false,//列表默认折叠
    listMaxHeight: 90,//列表最大高度
    audio: [
        {
            name: '大喜',
            artist: '泠鸢yousa',
            url: 'https://www.ytmp3.cn/down/76161.mp3',
            cover: 'http://p1.music.126.net/4FiWdxnfnGfq0RsXpJGTXw==/109951165772596480.jpg',
            lrc: 'lrc1.lrc',
            theme: '#f09199'
        },
        {
            name: "アイロニ",
           artist: "鹿乃",
            url: "https://www.ytmp3.cn/down/35231.mp3",
           cover: "https://img.ytmp3.cn/image/6.jpg"
            theme: '#46718b'
        }
    ]
});