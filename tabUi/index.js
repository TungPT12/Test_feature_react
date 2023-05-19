var queryListElement = (classElement) => {
    let listNode = [];
    listNode = document.querySelectorAll(`.${classElement}`)
    return listNode;
}
$ = document.querySelector.bind(document);
$('.line').style.width = `125px`
$('.line').style.left = `0px`
var tabPaneList = queryListElement('tab-pane')
var tabsItemList = queryListElement('tab-item');
 tabsItemList.forEach( (value, index)  => {
    value.onclick = () => {
        $('.line').style.left = `${value.offsetLeft}px`
        $('.line').style.width = `${value.offsetWidth}px`
        
        $('.tab-item.active').classList.remove('active')
        $('.tab-pane.active').classList.remove('active')
        value.classList.add('active')
        tabPaneList[index].classList.add('active')
    }
 });