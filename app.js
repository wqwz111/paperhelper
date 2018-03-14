document.getElementById('calc').onclick = function(event) {
    var fullText = document.getElementById('text').value;
    var totalCount = getWordsCnt(fullText);

    //计算重复字数
    var repeatRatio = document.getElementById('repeat-ratio').value;
    var repeatCount = Math.ceil(totalCount * repeatRatio / 100);

    //计算低于40%时需要添加的字数
    var addCount = Math.ceil(repeatCount / 0.3999 - totalCount);

    //计算低于40%时需要减少重复的字数
    var changeCount = Math.ceil(repeatCount - totalCount * 0.3999);

    //显示结果
    document.getElementById('word-count').textContent = totalCount;
    document.getElementById('repeat-count').textContent = repeatCount;
    document.getElementById('num-text-to-add').textContent = addCount;
    document.getElementById('num-text-to-change').textContent = changeCount;
}

/** 
 * 统计中文字数 
 */  
function getWordsCnt(str){  
    var m=str.match(/[\u4e00-\u9fff\uf900-\ufaff]/g);
    return (!m?0:m.length);
}  