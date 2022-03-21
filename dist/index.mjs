function highlightNum(tel, highlight) {
  if (typeof tel == "number")
    tel = String(tel);
  if (typeof highlight === "number")
    highlight = String(highlight);
  if (highlight === null || highlight === void 0 || highlight === "" || tel.length < highlight.length) {
    return [
      {
        num: tel,
        isHighlight: false
      }
    ];
  }
  if (tel === highlight) {
    return [
      {
        num: tel,
        isHighlight: true
      }
    ];
  }
  const highlightLength = highlight.length;
  const telArr = tel.split("");
  const phoneNumDataList = [];
  if (tel.startsWith(highlight)) {
    phoneNumDataList.push({
      num: telArr.slice(0, highlightLength).join(""),
      isHighlight: true
    }, {
      num: telArr.slice(highlightLength).join(""),
      isHighlight: false
    });
  } else if (tel.endsWith(highlight)) {
    phoneNumDataList.push({
      num: telArr.slice(0, telArr.length - highlightLength).join(""),
      isHighlight: false
    }, {
      num: telArr.slice(-highlightLength).join(""),
      isHighlight: true
    });
  } else {
    const start = tel.indexOf(highlight);
    phoneNumDataList.push({
      num: telArr.slice(0, start).join(""),
      isHighlight: false
    }, {
      num: telArr.slice(start, start + highlightLength).join(""),
      isHighlight: true
    }, {
      num: telArr.slice(start + highlightLength).join(""),
      isHighlight: false
    });
  }
  return phoneNumDataList;
}
function joinSeparator(highlightList, separator) {
  if (typeof separator === "number") {
    separator = String(separator);
  }
  if (separator == void 0) {
    separator = " ";
  }
  const itemWithSeparator = { num: separator, isHighlight: false };
  const newHighlightList = [];
  for (const { num, isHighlight } of highlightList) {
    for (const i of num) {
      newHighlightList.push({ num: i, isHighlight });
    }
  }
  newHighlightList.splice(3, 0, itemWithSeparator);
  newHighlightList.splice(8, 0, itemWithSeparator);
  const hasHighlight = () => newHighlightList.some((i) => i.isHighlight === true);
  if (!hasHighlight()) {
    const _newHighlightList = [];
    let item = { num: "", isHighlight: false };
    for (let i = 0; i < newHighlightList.length; i++) {
      if (i < 3 || i > 3 && i < 8 || i > 8 && i < 13) {
        item.num += newHighlightList[i].num;
      }
      if (i == 3 || i == 7 || i == 12) {
        _newHighlightList.push(item);
        item = { num: "", isHighlight: false };
      }
      if (i == 3 || i == 7) {
        _newHighlightList.push(itemWithSeparator);
      }
    }
    return _newHighlightList;
  }
  return newHighlightList;
}
function telHighlight(options) {
  const { tel, highlight, separat, separator } = options;
  const phoneNumDataList = highlightNum(tel, highlight);
  if (!separat)
    return phoneNumDataList;
  return joinSeparator(phoneNumDataList, separator);
}

export { telHighlight };
