import collapse from "bootstrap/js/dist/collapse";

export default (() => {

    const resizeBtn = $(".sidebar-resize");
    const sidebar = $(".sidebar");
    const subItem = sidebar.find(".collapse");

    function smallSidebar() {
        sidebar.addClass("sidebar--small");
        subItem.removeClass('show');
    }

    function fullSidebar() {
        sidebar.removeClass("sidebar--small");
    }

    resizeBtn.on("click", function() {
        if(sidebar.hasClass("sidebar--small")) {
            fullSidebar();
        } else {
            smallSidebar();
        }
    });

    subItem.on('show.bs.collapse', function () {
        fullSidebar();
        console.log("frfr");
    })

})();