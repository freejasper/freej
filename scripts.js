$(window).on('load', function() {   
    $('#swcImageFrame').children().each(function(index) {
        if(index % 2 != 0) {
            $(this).css({marginLeft : '-40px', transform : 'translateY(20px)', zIndex : '1'});
        } else {
            $(this).css({zIndex : '2', transform: 'translateY(0)'});

        }
    })
})

// hide and show tab content
$('.nameTitle').on('click', event => {
    let currentTitle = $(event.currentTarget).attr('id');
    let targetTitle = $('#' + currentTitle + 'Content');

        if(targetTitle.height() === 0) {
            let visibleSiblings = targetTitle.siblings().filter(':visible');
    
            if(visibleSiblings.length === 0) {
                targetTitle.addClass('borderStyle').css('display', 'block');
                targetTitle.stop().animate({ height: '100%' }, 200);
            } else {
                visibleSiblings.animate({ height: '0'}, 200, function() {
                    visibleSiblings.removeClass('borderStyle').css('display', 'none');
                    targetTitle.addClass('borderStyle').css('display', 'block');
                    targetTitle.stop().animate({ height: '100%' }, 200);
                });
            }        
        } else {
            targetTitle.animate({ height: '0'}, 200, function() {
                targetTitle.removeClass('borderStyle').css('display', 'none');
            });
        }
    
})

//function for hiding and showing content items
function toggleContent (clickedButton) {
    
    //title formatting
    let clickedString = clickedButton.text();
    let eventTitle;

    //check if it has a dash, if so, format the string for iframes
    if(clickedString.includes('-')) {
        eventTitle = clickedString.slice(clickedString.indexOf('-') + 1, clickedString.length).trim().replaceAll(' ', '').toLowerCase().replaceAll('.', '').replaceAll(',', '');
    //if not format it for graphic design content
    } else {
        eventTitle = clickedString.toLowerCase().replaceAll(' ', '').replaceAll('.', '');
    }

    //id of target element to hide and show
    let content = $('#' + eventTitle);
    
    //finding parent element name
    let parentDiv = clickedButton.parent().attr('id')
    let contentType = $('#' + parentDiv);

    switch (parentDiv) {
        case "graphicDesignerContent":

            if(content.height() === 0) {
                if(contentType.children().filter(':visible').length === 0) {
                    content.addClass('borderStyle').css('display', 'flex').stop().animate({ width: cWidth}, 200, function() {
                        content.stop().animate({ height: swcHeight + 'px'}, { duration: 200, queue: false });
                    });
                } else {
                    content.siblings().stop().animate({ height: '0' }, 200, function() {
                        content.siblings().stop().animate({ width: '0'}, 200, function() {
                            content.siblings().removeClass('borderStyle').css('display', 'none');
                            content.css('display', 'flex').addClass('borderStyle').stop().animate({ width: cWidth}, 200, function() {
                                content.stop().animate({ height: swcHeight + 'px'}, { duration: 200, queue: false });
                            });
                        });
                    });
                } 
            } else {
                content.stop().animate({ height: '0'}, 200, function() {
                    content.stop().animate({ width: '0'}, 200, function() {
                        content.removeClass('borderStyle').css('display', 'none');
                    });
                });
            };
            break;

        case "webDesignerContent":
            ;
            break;

        case  "artistContent":

            if(content.length) {
                if(content.height() === 0) {
                    if(contentType.children().filter(':visible').length === 0) {
                        content.addClass('borderStyle').css('display', 'block').stop().animate({ width: cWidth}, 200, function() {
                            content.stop().animate({ height: '400px'}, { duration: 200, queue: false });
                        });
                    } else {
                        content.siblings().stop().animate({ height: '0' }, 200, function() {
                            content.siblings().stop().animate({ width: '0'}, 200, function() {
                                content.siblings().removeClass('borderStyle').css('display', 'none');
                                content.css('display', 'block').addClass('borderStyle').stop().animate({ width: cWidth}, 200, function() {
                                    content.stop().animate({ height: '400px'}, { duration: 200, queue: false });
                                });
                            });
                        });
                    }
                } else {
                    content.stop().animate({ height: '0'}, 200, function() {
                        content.stop().animate({ width: '0'}, 200, function() {
                            content.removeClass('borderStyle').css('display', 'none');
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
