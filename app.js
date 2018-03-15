document.getElementById('calc').onclick = function(event) {
    var fullText = document.getElementById('text').value;
    var totalCount = getWordsCnt(fullText);

    //计算重复字数
    var repeatRatio = document.getElementById('repeat-ratio').value;
    var repeatCount = Math.ceil(totalCount * repeatRatio / 100);

    //计算低于40%时需要添加的字数
    var addCount = Math.ceil(repeatCount / 0.3999 - totalCount);
    var newRatio1 = (repeatCount / (totalCount + addCount)).toFixed(2) * 100;

    //计算低于40%时需要减少重复的字数
    var changeCount = Math.ceil(repeatCount - totalCount * 0.3999);
    var newRatio2 = ((repeatCount - changeCount) / totalCount).toFixed(2) * 100;

    //显示结果
    document.getElementById('word-count').textContent = totalCount;
    document.getElementById('repeat-count').textContent = repeatCount;
    document.getElementById('num-text-to-add').textContent = addCount;
    document.getElementById('new-repeat-ratio1').textContent = newRatio1 + "%";
    document.getElementById('num-text-to-change').textContent = changeCount;
    document.getElementById('new-repeat-ratio2').textContent = newRatio2 + "%";
}

/** 
 * 统计中文字数 
 */  
function getWordsCnt(str){  
    var m=str.match(/[\u4e00-\u9fff\uf900-\ufaff]/g);
    return (!m?0:m.length);
}  