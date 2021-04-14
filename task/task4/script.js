$('form').validate({
    highlight: function(element, errorClass) {
    $(element).add($(element).parent()).addClass("invalidElem");
    },
    unhighlight: function(element, errorClass) {
    $(element).add($(element).parent()).removeClass("invalidElem");
    },
    errorElement: "div",
    errorClass: "errorMsg"
    });
    
    $.validator.addClassRules({
        valid: {
        required: true,
        digits: false,
        minlength: 1,
        maxlength: 10
        }
    })
    
    $('input').addClass("valid").change(function(e) {
        $('form').validate().element($(e.target));
    });
