/*
 <span class="tooltipText">Text tooltipa</span>
 */

document.addEventListener('DOMContentLoaded', function () {

    var tooltips = document.querySelectorAll('.tooltip');

    for (var i = 0; i < tooltips.length; i++) {
        var singleTooltip = tooltips[i];

        singleTooltip.addEventListener('mouseover', function () {
            // console.log(this.dataset.text);
            var toolSpan = document.createElement('span');
            toolSpan.classList.add('tooltipText');
            toolSpan.innerText = this.dataset.text;
            this.appendChild(toolSpan);
        });

        singleTooltip.addEventListener('mouseout', function () {
            var remove = document.querySelector('.tooltipText');
            remove.parentElement.removeChild(remove);
        });

    }

});
