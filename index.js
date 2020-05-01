$(".col").on({
  mouseover: function() {
    $(this).find(".card,.card-header,.card-body,.card-footer,.font").css("background-color", "hsl(228, 34%, 66%)");
  },
  mouseout: function() {
    $(this).find(".card,.card-header,.card-body,.card-footer,.font").css("background-color", "hsl(228, 28%, 20%)");
  }
});

$("input").click(function() {
  if (this.checked) {
    $("body").find("header,.navbar").css({
      "background-color": "hsl(225, 100%, 98%)",
      "color": "hsl(230, 17%, 14%)"
    });
    $("body").find(".attribution,section .navbar,section").css("background-color", "hsl(0, 0%, 100%)");
    $("body").find(".card,.card-header,.card-body,.card-footer,.font").css({
      "background-color": "hsl(227, 47% , 96%)",
      "color": "hsl(230, 17%, 14%)"
    });


    $(".col").on({
      mouseover: function() {
        $(this).find(".card,.card-header,.card-body,.card-footer,.font").css("background-color", "hsl(228, 12%, 44%)");
      },
      mouseout: function() {
        $(this).find(".card,.card-header,.card-body,.card-footer,.font").css("background-color", "hsl(227, 47%, 96%)");
      }
    });

  } else {
    $("body").find("header,.navbar").css({
      "background-color": "hsl(232, 19%, 15%)",
      "color": "hsl(0, 0%, 100%)"
    });
    $("body").find(".attribution,section .navbar,section").css("background-color", "hsl(230, 17%, 14%)");
    $("body").find(".card,.card-header,.card-body,.card-footer,.font").css({
      "background-color": "hsl(228, 28%, 20%)",
      "color": "hsl(0, 0%, 100%)"
    });
    $(".col").on({
      mouseover: function() {
        $(this).find(".card,.card-header,.card-body,.card-footer,.font").css("background-color", "hsl(228, 34%, 66%)");
      },
      mouseout: function() {
        $(this).find(".card,.card-header,.card-body,.card-footer,.font").css("background-color", "hsl(228, 28%, 20%)");
      }
    });

  }

});
