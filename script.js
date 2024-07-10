$(document).ready(function() {
    $("#toShow").hide();

    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    const nums = Array.from({ length: 100 }, (_, i) => i + 1);
    const order = shuffle(nums);

    $('#submit').click(function() {
        var devilList = document.querySelectorAll('input[type="checkbox"]:checked');
        var devilish = devilList.length;
        var purity = 100 - devilish;

        $('#score').html(purity);
        
        $("#toShow").show();
        $("#toHide").hide();
    });

    $('#reset').click(function() {
        $('input:checkbox').removeAttr('checked');
    });
});
