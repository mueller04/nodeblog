//module.exports = {
    function highlightCurrentNavLink() {
        var url = location.pathname;
        var highlightLink = url.match(/[^/]+$/);
        if (highlightLink === null){
            $('#home').css('opacity', '0.6');
        } else {
            $('#' + highlightLink).css('opacity', '0.3');
        }
    }
//};