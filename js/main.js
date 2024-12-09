
// On Page Load
$(document).ready(function() {
    $("#justified-gallery").justifiedGallery({
        rowHeight: 180,
        margins: 10,
        maxRowsCount: 2,
    })
    $("#expand-gallery").click(()=> {
        $("#justified-gallery").justifiedGallery({
            rowHeight: 180,
            margins: 10,
            maxRowsCount: 0,
        })
        $("#expand-gallery").hide()
    })
})

// On Stricter Page Load
$(window).on('load', function () {
})

// On Page Resize
$(window).resize(function () {
})