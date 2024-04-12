$(document).ready(function() {
    $("#clipboard").click(function(event) {
        event.preventDefault();
        CopyToClipboard($("#clipboard").attr('--clipboard-text'));
    })
})

function CopyToClipboard(value, alertText) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(value).select();
    document.execCommand("copy");
    $temp.remove();

    if(typeof alertText === 'undefined') {
        alert("Copied to clipboard!");
    } else {
        alert(alertText);
    }
}