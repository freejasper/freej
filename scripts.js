$(window).on('load', function() {   
    $('#swcImageFrame').children().each(function(index) {
        if (index % 2 !== 0) {
            $(this).css({
                marginLeft: '-40px',
                transform: 'translateY(20px)',
                zIndex: '1'
            });
        } else {
            $(this).css({
                zIndex: '2',
                transform: 'translateY(0)'
            });
        }
    });
});


// hide and show tab content
$('.nameTitle').on('click', function(event) {
    let currentTitle = $(event.currentTarget).attr('id');
    let targetTitle = $('#' + currentTitle + 'Content');

    if (!targetTitle.is(':visible')) {
        let visibleSiblings = targetTitle.siblings(':visible');

        if (visibleSiblings.length === 0) {
            targetTitle
                .addClass('borderStyle')
                .css({ visibility: 'visible', display: 'block', height: 0 });

            let fullHeight = targetTitle.get(0).scrollHeight;

            targetTitle.stop().animate({ height: fullHeight }, 200);
        } else {
            visibleSiblings.stop().animate({ height: 0 }, 200, function() {
                visibleSiblings
                    .removeClass('borderStyle')
                    .css({ visibility: 'hidden', display: 'none' });

                targetTitle
                    .addClass('borderStyle')
                    .css({ visibility: 'visible', display: 'block', height: 0 });

                let fullHeight = targetTitle.get(0).scrollHeight;

                targetTitle.stop().animate({ height: fullHeight }, 200);
            });
        }
    } else {
        targetTitle.stop().animate({ height: 0 }, 200, function() {
            targetTitle
                .removeClass('borderStyle')
                .css({ visibility: 'hidden', display: 'none' });
        });
    }
});


// function for hiding and showing content items
function toggleContent(clickedButton) {

    let clickedString = clickedButton.text();
    let eventTitle;

    if (clickedString.includes('-')) {
        eventTitle = clickedString
            .slice(clickedString.indexOf('-') + 1)
            .trim()
            .replaceAll(' ', '')
            .toLowerCase()
            .replaceAll('.', '')
            .replaceAll(',', '');
    } else {
        eventTitle = clickedString
            .toLowerCase()
            .replaceAll(' ', '')
            .replaceAll('.', '');
    }

    let content = $('#' + eventTitle);

    let parentDiv = clickedButton.parent().attr('id');
    let contentType = $('#' + parentDiv);

    switch (parentDiv) {

        case "graphicDesignerContent":

            if (!content.is(':visible')) {

                if (contentType.children(':visible').length === 0) {

                    content
                        .addClass('borderStyle')
                        .css({ display: 'flex', visibility: 'visible', width: 0, height: 0 })
                        .stop()
                        .animate({ width: cWidth }, 200, function() {
                            content.stop().animate({ height: swcHeight }, { duration: 200, queue: false });
                        });

                } else {

                    let siblings = content.siblings(':visible');

                    siblings.stop().animate({ height: 0 }, 200, function() {
                        siblings.stop().animate({ width: 0 }, 200, function() {
                            siblings
                                .removeClass('borderStyle')
                                .css({ visibility: 'hidden', display: 'none' });

                            content
                                .addClass('borderStyle')
                                .css({ display: 'flex', visibility: 'visible', width: 0, height: 0 })
                                .stop()
                                .animate({ width: cWidth }, 200, function() {
                                    content.stop().animate({ height: swcHeight }, { duration: 200, queue: false });
                                });
                        });
                    });
                }

            } else {

                content.stop().animate({ height: 0 }, 200, function() {
                    content.stop().animate({ width: 0 }, 200, function() {
                        content
                            .removeClass('borderStyle')
                            .css({ visibility: 'hidden', display: 'none' });
                    });
                });
            }
            break;


        case "webDesignerContent":
            break;


        case "artistContent":

            if (content.length) {

                if (!content.is(':visible')) {

                    if (contentType.children(':visible').length === 0) {

                        content
                            .addClass('borderStyle')
                            .css({ visibility: 'visible', display: 'block', width: 0, height: 0 })
                            .stop()
                            .animate({ width: cWidth }, 200, function() {
                                content.stop().animate({ height: 400 }, { duration: 200, queue: false });
                            });

                    } else {

                        let siblings = content.siblings(':visible');

                        siblings.stop().animate({ height: 0 }, 200, function() {
                            siblings.stop().animate({ width: 0 }, 200, function() {
                                siblings
                                    .removeClass('borderStyle')
                                    .css({ visibility: 'hidden', display: 'none' });

                                content
                                    .addClass('borderStyle')
                                    .css({ visibility: 'visible', display: 'block', width: 0, height: 0 })
                                    .stop()
                                    .animate({ width: cWidth }, 200, function() {
                                        content.stop().animate({ height: 400 }, { duration: 200, queue: false });
                                    });
                            });
                        });
                    }

                } else {

                    content.stop().animate({ height: 0 }, 200, function() {
                        content.stop().animate({ width: 0 }, 200, function() {
                            content
                                .removeClass('borderStyle')
                                .css({ visibility: 'hidden', display: 'none' });
                        });
                    });
                }

            } else {
                console.log('vid not found');
            }

            console.log(content);
            break;
    }
}
